# AWS Deployment Guide for PalC AI

## Prerequisites
- AWS Account
- AWS CLI configured
- Node.js 18+ installed

## Frontend Deployment (AWS S3 + CloudFront)

### 1. Build the Project
```bash
npm run build
```

### 2. Create S3 Bucket
```bash
aws s3 mb s3://palc-ai-website --region us-east-1
```

### 3. Enable Static Website Hosting
```bash
aws s3 website s3://palc-ai-website --index-document index.html --error-document index.html
```

### 4. Upload Build Files
```bash
aws s3 sync dist/ s3://palc-ai-website --delete
```

### 5. Create CloudFront Distribution
- Origin: Your S3 bucket
- Default Root Object: index.html
- Configure custom error responses to redirect 404 to index.html (for SPA routing)

### 6. Configure DNS
Point your domain to the CloudFront distribution URL using Route 53 or your DNS provider.

## Backend Setup (Contact Form)

### Option 1: AWS Lambda + API Gateway

#### 1. Create Lambda Function
Create a Lambda function with the following Node.js code:

```javascript
const AWS = require('aws-sdk');
const ses = new AWS.SES({ region: 'us-east-1' });

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*', // Update with your domain in production
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST,OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  try {
    const { name, email, company, message } = JSON.parse(event.body);

    const params = {
      Source: 'noreply@palc.ai', // Update with verified SES email
      Destination: {
        ToAddresses: ['admin@palc.ai'], // Update with admin email
      },
      Message: {
        Subject: { Data: `New Contact Form Submission from ${name}` },
        Body: {
          Text: {
            Data: `
Name: ${name}
Email: ${email}
Company: ${company || 'N/A'}

Message:
${message || 'N/A'}
            `,
          },
        },
      },
    };

    await ses.sendEmail(params).promise();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Failed to send email' }),
    };
  }
};
```

#### 2. Configure SES
- Verify your sender email in AWS SES
- Move out of SES sandbox if needed (for production)

#### 3. Create API Gateway
- Create a REST API
- Create a POST method
- Integrate with your Lambda function
- Enable CORS
- Deploy to a stage (e.g., 'prod')

#### 4. Update Environment Variable
Copy the API Gateway endpoint URL and update your `.env` file:
```bash
VITE_AWS_API_GATEWAY_URL=https://your-api-id.execute-api.us-east-1.amazonaws.com/prod/contact
```

### Option 2: Alternative Email Services

If you prefer not to use Lambda, you can use:
- **AWS SES with direct API calls** (requires AWS credentials in frontend - not recommended)
- **Third-party services**: SendGrid, Mailgun, EmailJS (simpler setup)
- **Formspree** or **Basin** (no backend required)

## Environment Variables

Create a `.env` file (for local development):
```
VITE_AWS_API_GATEWAY_URL=your_api_gateway_url_here
```

For production, set environment variables in your CI/CD pipeline or build system.

## CI/CD Setup

### GitHub Actions Example
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to AWS

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
        env:
          VITE_AWS_API_GATEWAY_URL: ${{ secrets.AWS_API_GATEWAY_URL }}
      
      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v1
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1
      
      - name: Deploy to S3
        run: aws s3 sync dist/ s3://palc-ai-website --delete
      
      - name: Invalidate CloudFront
        run: aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

## Cost Optimization
- Use S3 Intelligent-Tiering
- Configure CloudFront caching
- Set up Lambda reserved concurrency if needed
- Monitor SES usage

## Security Best Practices
1. Use CloudFront with HTTPS only
2. Implement rate limiting on API Gateway
3. Add CAPTCHA to contact form (e.g., reCAPTCHA)
4. Keep Lambda functions minimal and updated
5. Use AWS WAF for additional protection
6. Restrict CORS to your domain only in production

## Monitoring
- Set up CloudWatch alarms for Lambda errors
- Monitor S3 and CloudFront metrics
- Track SES sending statistics
- Use AWS X-Ray for Lambda tracing

## Support
For issues, contact: hello@palc.ai

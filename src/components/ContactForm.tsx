import { useState, FormEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useToast } from "./ui/use-toast";

// Configure your AWS API Gateway endpoint here
const AWS_API_GATEWAY_URL = import.meta.env.VITE_AWS_API_GATEWAY_URL || "";

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      message: formData.get("message") as string,
    };

    try {
      if (!AWS_API_GATEWAY_URL) {
        throw new Error("AWS API Gateway URL is not configured");
      }

      const res = await fetch(AWS_API_GATEWAY_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast({
          title: "Success!",
          description: "Thanks! We'll be in touch shortly.",
        });
        e.currentTarget.reset();
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (err) {
      console.error(err);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again later or contact us at hello@palc.ai",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-card">
      <div className="grid gap-4">
        <div>
          <Label htmlFor="name" className="text-sm text-muted-foreground">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            required
            className="mt-1 bg-card/60 border-white/10 text-foreground placeholder:text-muted-foreground"
            placeholder="Your name"
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-sm text-muted-foreground">
            Work email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 bg-card/60 border-white/10 text-foreground placeholder:text-muted-foreground"
            placeholder="you@company.com"
          />
        </div>

        <div>
          <Label htmlFor="company" className="text-sm text-muted-foreground">
            Company
          </Label>
          <Input
            id="company"
            name="company"
            className="mt-1 bg-card/60 border-white/10 text-foreground placeholder:text-muted-foreground"
            placeholder="Company name"
          />
        </div>

        <div>
          <Label htmlFor="message" className="text-sm text-muted-foreground">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            rows={4}
            className="mt-1 bg-card/60 border-white/10 text-foreground placeholder:text-muted-foreground"
            placeholder="Tell us about your needs"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 bg-foreground text-background hover:bg-foreground/90"
        >
          {isSubmitting ? "Sending..." : "Request demo"}
        </Button>
      </div>
    </form>
  );
};

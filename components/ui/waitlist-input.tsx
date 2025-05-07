"use client";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { useState, FormEvent } from "react";
import React from "react";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "./toast";

export const WaitListInput = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState<string>("");
  // Placeholder texts for the input field
  const placeholders: string[] = [
    "Find your next shift today!",
    "Get early access to Flexi Praca!",
    "Join the fastest growing work community!",
    "Don't miss your next opportunity!",
    "Flexible work. Fast pay. Join now!",
  ];
  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  // Handle form submission
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      // The following API Endpoint can return 3 statuses :
      // 409 - Duplicate email : already subscribed
      if (res.status === 409) {
        //
        toast({
          title: "💪 Already Subscribed",
          description: `This email is already on our waitlist. We’ll keep you in the loop with updates! 👀`,
        });
        console.warn("Duplicate email detected:", email);
      }
      // 500 - Server error : unable to process the request
      else if (!res.ok) {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: `We couldn’t process your request. Please try again in a moment or refresh the page.`,
          action: (
            <ToastAction altText="Try again" onClick={() => handleSubmit(e)}>
              Try again
            </ToastAction>
          ),
        });
        console.error("Server error:", await res.text());
      }
      // 200 - Success : email added to the waitlist
      else {
        toast({
          title: "🎉 You're on the List!",
          description: `Thanks for joining FlexiPraca's waitlist — you're officially one of the first! We'll keep you posted with early updates and launch news.`,
        });
        setEmail("");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Network Error",
        description: "Please check your connection and try again.",
      });
      console.error("Fetch error:", error);
    }
  }

  return (
    <PlaceholdersAndVanishInput
      placeholders={placeholders}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

"use client";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { supabase } from "@/lib/supabaseClient";
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
    const { error } = await supabase
      .from("waitlist_subscribers")
      .insert([{ email }]);

    if (error) {
      // Duplicate Error Handling
      if (
        error.code === "23505" || // Postgres unique_violation code
        error.message.includes("duplicate key value")
      ) {
        toast({
          title: "💪 Already Subscribed",
          description: `This email is already on our waitlist. We’ll keep you in the loop with updates! 👀`,
        });
        console.error("Duplicate email detected:", email);
      } else {
        // Server Error

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
        console.error("Error inserting email:", error.message);
      }
    } else {
      toast({
        title: "🎉 You're on the List!",
        description: `Thanks for joining FlexiPraca's waitlist — you're officially one of the first! We'll keep you posted with early updates and launch news.`,
      });

      setEmail("");
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

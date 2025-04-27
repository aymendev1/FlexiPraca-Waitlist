"use client";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

export const WaitListInput = () => {
  const placeholders: string[] = [
    "Find your next shift today!",
    "Get early access to Flexi Praca!",
    "Join the fastest growing work community!",
    "Don't miss your next opportunity!",
    "Flexible work. Fast pay. Join now!",
  ];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <PlaceholdersAndVanishInput
      placeholders={placeholders}
      onChange={handleChange}
      onSubmit={onSubmit}
    />
  );
};

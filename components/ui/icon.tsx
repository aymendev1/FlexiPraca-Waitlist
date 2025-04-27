import { icons } from "lucide-react";

export const Icon = ({
  name,
  color,
  size,
  className,
}: {
  name: keyof typeof icons;
  color: string;
  size: number;
  className?: string;
}) => {
  const LucideIcon = icons[name as keyof typeof icons];
  if (!LucideIcon) {
    console.warn(`⚠️ Warning: Icon "${name}" does not exist in lucide-react!`);
    return null; // or fallback icon
  }

  return <LucideIcon color={color} size={size} className={className} />;
};

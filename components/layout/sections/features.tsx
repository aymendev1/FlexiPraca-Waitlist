import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "FilePlus2",
    title: "Post Jobs Instantly",
    description: "Create and publish shifts in just minutes.",
  },
  {
    icon: "Users",
    title: "Access a Talent Pool",
    description: "Tap into a growing community of local, ready-to-work people.",
  },
  {
    icon: "ShieldCheck",
    title: "Verified Workers",
    description:
      "Hire reliable workers with confidence thanks to our employers review feature.",
  },
  {
    icon: "RefreshCcw",
    title: "Flexible Hiring Options",
    description: "Book for a day, a weekend, or longer — you decide.",
  },
  {
    icon: "HandCoins",
    title: "Save Time and Money",
    description: "Avoid long recruitment processes and agency fees.",
  },
  {
    icon: "BarChart",
    title: "Scale When You Need",
    description:
      "Quickly ramp up your team for busy periods or special events.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        For Employers
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Find Reliable Help
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Cafés, restaurants, warehouses, and event organizers — FlexiPraca makes
        it easy to find reliable, flexible workers when you need them most. Post
        a shift, get matched, and keep your business moving forward.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

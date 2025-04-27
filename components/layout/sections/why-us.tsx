import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum ProWhyUs {
  YES = 1,
  NO = 0,
}
interface WhyUsProps {
  title: string;
  pro: ProWhyUs;
  description: string;
}
const WhyUsList: WhyUsProps[] = [
  {
    title: "Designed for Poland's Locals",
    description:
      "Whether you're a student or a business, Flexi Praca connects you with the right jobs or workers.",
    pro: 0,
  },
  {
    title: "Simple and Fast",
    description: "Post or find a shift in minutes — no lengthy processes.",
    pro: 0,
  },
  {
    title: "Secure Profiles",
    description: "Verified companies and workers ensure trust at every step.",
    pro: 0,
  },
  {
    title: "Flexibility at its Core",
    description:
      "No long-term contracts or commitments. Control when you work or hire.",
    pro: 0,
  },
];

export const WhyUsSection = () => {
  return (
    <section id="WhyUs" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Services
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Why Trust Flexi Praca?
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        {`From flexible staffing to real-time analytics, we’ve designed FlexiPraca to help you meet your business needs — quickly, securely, and with
        full control.`}
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {WhyUsList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProWhyUs.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              PRO
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};

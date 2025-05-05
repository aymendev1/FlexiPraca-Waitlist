import { WorkerSection } from "@/components/layout/sections/workers";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { EmployeesSection } from "@/components/layout/sections/employees";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { WhyUsSection } from "@/components/layout/sections/why-us";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { ServiceSection } from "@/components/layout/sections/services";

export const metadata = {
  title: "FlexiPraca App – Flexible Gigs & Hiring in Poland",
  description:
    "Find flexible, short-term jobs or hire on-demand workers with FlexiPraca. Perfect for students, freelancers, and local businesses across Poland. Join our waitlist today!",

  metadataBase: new URL("https://flexipraca-waitlist.vercel.com"), // Replace with your real domain

  openGraph: {
    title: "FlexiPraca App – Flexible Gigs & Hiring in Poland",
    description:
      "Connect with local talent or discover short-term jobs in gastronomy, retail, and more. Join the waitlist and be part of Poland’s flexible work future.",
    url: "https://flexipraca-waitlist.vercel.com",
    siteName: "FlexiPraca",
    images: [
      {
        url: "/demo-dark.png", // Place the image in /public
        width: 1200,
        height: 630,
        alt: "FlexiPraca – Flexible Jobs in Poland",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "FlexiPraca App – Gigs & Hiring Made Simple",
    description:
      "Join FlexiPraca’s waitlist and get early access to Poland’s new platform for short-term jobs and flexible hiring.",
    images: ["/demo-dark.png"],
  },

  keywords: [
    "flexible jobs Poland",
    "gig work Poland",
    "hire part-time workers",
    "student jobs",
    "FlexiPraca",
    "short-term work",
    "waitlist app",
  ],
};

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <SponsorsSection /> */}
      <WorkerSection />
      <EmployeesSection />
      <WhyUsSection />
      <ServiceSection />
      <CommunitySection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}

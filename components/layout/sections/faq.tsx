import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is FlexiPraca?",
    answer:
      "FlexiPraca is a platform designed to connect businesses in Poland with workers looking for flexible, short-term job opportunities in industries like gastronomy, events, and more. Whether you're a student or a local business, FlexiPraca makes it easy to find the right match for your needs.",
    value: "item-1",
  },
  {
    question: "How can I join the waitlist?",
    answer:
      "Simply enter your email on the waitlist section to secure your spot! Once we launch, you’ll get early access to our platform and be among the first to find or post job opportunities. 🚀",
    value: "item-2",
  },
  {
    question: "Who can use FlexiPraca?",
    answer:
      "FlexiPraca is ideal for students seeking flexible work for a day, week, or more, and for businesses like cafes, restaurants, and event organizers in need of reliable, short-term staff.",
    value: "item-3",
  },
  {
    question: "What features will businesses have access to?",
    answer:
      "Once the platform is live, businesses will be able to post flexible shifts, access a powerful analytics dashboard, track worker performance, and gain insights on applicants to make smarter hiring decisions.",
    value: "item-4",
  },
  {
    question: "Is the service free?",
    answer:
      "Yes! FlexiPraca will be free to use for both workers and businesses. You can sign up, join the waitlist, and start posting or applying for jobs at no cost. We're all about making flexible work easy and accessible!",
    value: "item-5",
  },
  {
    question: "When will FlexiPraca launch?",
    answer:
      "FlexiPraca is currently in development. By joining the waitlist, you'll be the first to know when we officially launch and gain early access to the platform.",
    value: "item-6",
  },
  {
    question: "Is FlexiPraca available only in Poland?",
    answer:
      "Yes, for now, FlexiPraca is focused on serving local businesses and students in Poland. We’re working on expanding, but our primary goal is to create a strong local community first.",
    value: "item-7",
  },
  {
    question: "How do I contact support if I have any questions?",
    answer:
      "If you have any questions or need assistance, feel free to contact us through our website or email at [your email]. Our team is happy to assist you!",
    value: "item-8",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

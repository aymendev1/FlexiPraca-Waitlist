import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WaitListInput } from "@/components/ui/waitlist-input";
import { PartyPopper } from "lucide-react";

export const CommunitySection = () => {
  return (
    <section id="wait-list" className="py-12 ">
      <hr className="border-secondary" />
      <div className="container py-20 sm:py-20">
        <div className="lg:w-[60%] mx-auto">
          <Card className="bg-background border-none shadow-none text-center flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle className="text-4xl md:text-5xl font-bold flex flex-col items-center">
                <PartyPopper className="size-20 mb-2" />
                <div>
                  Ready to get
                  <span className="text-transparent pl-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                    Early Access?
                  </span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="lg:w-[80%] text-xl text-muted-foreground">
              Join the waitlist to be the first to experience FlexiPraca! Get
              early access, exclusive updates, and secure your spot for flexible
              gigs or job opportunities. 🚀
            </CardContent>

            <CardFooter className="w-full">
              <WaitListInput />
            </CardFooter>
          </Card>
        </div>
      </div>
      <hr className="border-secondary" />
    </section>
  );
};

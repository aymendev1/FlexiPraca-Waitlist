import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon, Facebook, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="inline-flex justify-between w-full">
          <Link href="#" className="flex font-bold items-center">
            <ChevronsDownIcon className="w-9 h-9 mr-2 bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-secondary" />

            <h3 className="text-2xl">FlexiPraca Inc.</h3>
          </Link>
          <div className=" inline-flex items-center justify-center w-fit">
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              className="mx-2"
            >
              <Linkedin />
            </Link>
            <Link href="https://github.com" target="_blank" className="mx-2">
              <Github />
            </Link>
            <Link
              href="https://www.facebook.com"
              target="_blank"
              className="mx-2"
            >
              <Facebook />
            </Link>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">
            &copy; 2025 Designed and developed by
            <Link
              target="_blank"
              href="https://aymendev1.com"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              Aymen Azougar
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};

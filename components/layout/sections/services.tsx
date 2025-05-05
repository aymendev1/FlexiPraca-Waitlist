"use client";
import { WobbleCard } from "@/components/ui/wobble-card";
import Image from "next/image";
import React from "react";

export const ServiceSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Services
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Track and grow your business
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        {`Flexi Praca helps you manage your workforce with intuitive analytics and tools that improve operations and sales. Here's a sneak peek of what you can expect once the platform goes live`}
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-primary/70 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Real-Time Analytics Dashboard
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              Access an intuitive dashboard that lets you see how shifts are
              being filled, monitor worker performance, and get actionable
              insights to make your staffing more efficient.
            </p>
          </div>
          <Image
            src="/dashboard.png"
            width={700}
            height={700}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-zinc-900">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Understand your applicants better
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Gain deep insights into the candidates who are applying for your
            shifts. See trends in their behavior, engagement, and availability,
            so you can make smarter hiring decisions and refine your staffing
            needs.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-indigo-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Evaluate and improve your shift management
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              Measure the efficiency of your shift postings, from time-to-fill
              to the success rate of each hire. Use this data to optimize your
              future job listings and ensure you’re always staffed when you need
              it most.
            </p>
          </div>
          <Image
            src="/dashboard.png"
            width={700}
            height={700}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </section>
  );
};

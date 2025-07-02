// 20250701 UPDATE FOR PUBLIC REPO -FUNCTIONAL
"use client"
import React from "react";
import {Button} from "@heroui/react";
import {Icon} from "@iconify/react";
import {AnimatePresence, LazyMotion, domAnimation, m} from "framer-motion";
import FadeInImage from "./fade-in-image";
import AppScreenshotSkewed from "./app-screenshot-skewed";

export default function HeroSectionApp() {
  return (
    <div className="relative flex h-screen min-h-dvh w-full flex-col overflow-hidden bg-background">
      <main className="container mx-auto mt-[80px] flex max-w-[1024px] flex-col items-start px-8">
        <section className="z-20 flex flex-col items-start justify-center gap-[18px] sm:gap-6">
          <LazyMotion features={domAnimation}>
            <m.div
              animate="kick"
              className="flex flex-col gap-6"
              exit="auto"
              initial="auto"
              transition={{
                duration: 0.25,
                ease: "easeInOut",
              }}
              variants={{
                auto: { width: "auto" },
                kick: { width: "auto" },
              }}
            >
              <AnimatePresence mode="wait">
                <m.div
                  key="hero-section-title"
                  animate={{ filter: "blur(0px)", opacity: 1, x: 0 }}
                  className="text-start text-[clamp(40px,10vw,44px)] font-bold leading-[1.2] tracking-tighter sm:text-[64px]"
                  initial={{ filter: "blur(16px)", opacity: 0, x: 17 }}
                  transition={{
                    bounce: 0,
                    delay: 0.1,
                    duration: 1.6,
                    type: "spring",
                  }}
                >
                  <div className="bg-gradient-lilac-blue bg-clip-text text-transparent text-6xl font-bold tracking-tight">
                    Decure <br /> Labs
                  </div>
                </m.div>

                <m.div
                  key="hero-section-description"
                  animate={{ filter: "blur(0px)", opacity: 1, x: 0 }}
                  className="text-start font-normal leading-7 text-default-500 sm:w-[466px] sm:text-[16px]"
                  initial={{ filter: "blur(16px)", opacity: 0, x: 18 }}
                  transition={{
                    bounce: 0,
                    delay: 0.3,
                    duration: 1.7,
                    type: "spring",
                  }}
                >
                  👋 Welcome to my personal tech playground where I develop financial software applications. 
                  <br />
                  <br />
                  From deploying AI agents with OpenAI to wrangling data with PySpark or deploying apps on GCP and AWS, I love turning complex problems into clean, scalable solutions.
                  <br />
                  <br />
                  Born in SF with roots in HTX and DC, this space is where I break things on purpose — and learn fast.
                </m.div>

                <m.div
                  key="hero-section-buttons"
                  animate={{ filter: "blur(0px)", opacity: 1, x: 0 }}
                  className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6"
                  initial={{ filter: "blur(16px)", opacity: 0, x: 19 }}
                  transition={{
                    bounce: 0,
                    delay: 0.5,
                    duration: 1.8,
                    type: "spring",
                  }}
                >
                  <a
                    href="https://frontend-907227041190.us-central1.run.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className="h-10 w-[163px] bg-gradient-lilac-blue bg-clip-padding px-[16px] py-[10px] text-small font-medium leading-5 text-white hover:brightness-110 transition"
                      radius="full"
                    >
                      DSPN DEMO
                    </Button>
                  </a>

                  <a href="/casestudies" target="_blank" rel="noopener noreferrer">
                    <Button
                      className="h-10 w-[163px] bg-gradient-lilac-blue bg-clip-padding px-[16px] py-[10px] text-small font-medium leading-5 text-white hover:brightness-110 transition"
                      endContent={
                        <span className="pointer-events-none flex h-[22px] w-[22px] items-center justify-center rounded-full bg-default-100">
                          <Icon
                            className="text-default-500 [&>path]:stroke-[1.5]"
                            icon="solar:arrow-right-linear"
                            width={16}
                          />
                        </span>
                      }
                      radius="full"
                      variant="bordered"
                    >
                      GTM Record
                    </Button>
                  </a>
                </m.div>
              </AnimatePresence>
            </m.div>
          </LazyMotion>
        </section>
      </main>

      <LazyMotion features={domAnimation}>
        <AnimatePresence mode="wait">
          <m.div
            key="hero-section-app-screenshot"
            animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            className="absolute top-[40%] w-full"
            initial={{ filter: "blur(16px)", opacity: 0, y: 300 }}
            transition={{
              bounce: 0,
              delay: 0.1,
              duration: 1.6,
              type: "spring",
            }}
          >
            <AppScreenshotSkewed className="w-full" />
          </m.div>
        </AnimatePresence>
      </LazyMotion>

      <div className="pointer-events-none absolute inset-0 top-[-25%] z-10 scale-150 select-none sm:scale-125">
        <FadeInImage
          alt="Gradient background"
          src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/backgrounds/bg-gradient.png"
        />
      </div>
    </div>
  );
}

"use client";
import { type Metadata } from "next";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { Accordion, AccordionItem, Button, useDisclosure } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Container } from "@/components/Container";
import AboutModal from "@/components/AboutModal";
import SkillsModal from "@/components/SkillsModal";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/SocialIcons";
import portraitImage from "@/images/portrait.jpg";



type SocialLinkProps = {
  className?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
};

function SocialLink({ className, href, children, icon: Icon }: SocialLinkProps) {
  return (
    <li className={clsx(className, "flex items-center")}>
      <Link
        href={href}
        className="group flex items-center text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}



export default function About() {
  // ✅ Separate state for each modal
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);

  return (
    <Container className="mt-16 sm:mt-32 w-[110%]">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Malcolm Decuire:<br />Passionate Problem-Solver
          </h1>
          <p className="mt-4 mb-8 text-lg text-zinc-600 dark:text-zinc-300 max-w-[90%] sm:max-w-[80%] lg:max-w-[60%]">
            SE with over 8 years of experience supporting Fortune 500 clients across banking, technology, and private equity.
            <br /><br />
            I have a proven track record of influencing over $10M in revenue and securing $5M+ in partnership commitments through a systematic,
            customer-obsessed approach.
            <br /><br />
            Skilled at bridging product, engineering, and sales teams,
            I specialize in architecting scalable solutions across Snowflake DCR, data engineering workflows, and enterprise applications.
            <br /><br />
            I thrive at the intersection of technical depth, business value, and client success.
          </p>

          {/* ✅ Modal Buttons & Integration */}
          <div className="flex flex-col items-start mb-8">
            {/* About Modal */}
            <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
            <Button
              color="primary"
              variant="flat"
              onClick={() => setIsAboutOpen(true)}
              className="mb-4"
            >
              Learn More
            </Button>

            {/* Skills Modal */}
            <SkillsModal isOpen={isSkillsOpen} onClose={() => setIsSkillsOpen(false)} />
            <Button
              color="primary"
              variant="flat"
              onClick={() => setIsSkillsOpen(true)}
              className="mb-4"
            >
              Tech Stack
            </Button>
          </div>


        </div>



        {/* ✅ FULL ACCORDION WITH ALL 5 CHAPTERS */}
        <AccordionItem
          key="chapter0"
          startContent={<Icon icon="game-icons:skills" className="text-xl text-warning" />}
          title="CHAPTER 0: Skills & Technologies"
        >
          {/* Technologies Section */}
          <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Technologies</h3>
          <p className="mt-4 mb-8 text-lg text-zinc-600 dark:text-zinc-300">
            The tools and platforms I use to build scalable solutions.
          </p>

          {/* Skills Section */}
          <h3 className="mt-8 text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Skills</h3>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
            {[
              "GTM Strategy & Execution",
              "Technical Proficiency in Cloud Computing",
              "Advanced Data Engineering",
              "Cross-Functional Collaboration",
              "Customer-Centric Solutions",
            ].map((skill, index) => (
              <li key={index} className="flex items-center">
                <Icon icon="fluent:star-checkmark-28-filled" className="mr-2 text-yellow-500" /> {skill}
              </li>
            ))}
          </ul>
        </AccordionItem>

        <div className="order-2 lg:order-1 flex flex-col gap-4 lg:pr-8">

          <Accordion variant="shadow">
            {/* Chapter 0 */}
            <AccordionItem key="chapter0" startContent={<Icon icon="game-icons:skills" className="text-xl text-warning" />} title="PROLOGUE: Skills">
              <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Skills</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Icon icon="fluent:star-checkmark-28-filled" className="mr-2" /> GTM Strategy &amp; Execution
                </li>
                <li className="flex items-center">
                  <Icon icon="fluent:star-checkmark-28-filled" className="mr-2" /> Technical Proficiency in Cloud Computing
                </li>
                <li className="flex items-center">
                  <Icon icon="fluent:star-checkmark-28-filled" className="mr-2" /> Advanced Data Engineering
                </li>
                <li className="flex items-center">
                  <Icon icon="fluent:star-checkmark-28-filled" className="mr-2" /> Cross-Functional Collaboration
                </li>
                <li className="flex items-center">
                  <Icon icon="fluent:star-checkmark-28-filled" className="mr-2" /> Customer-Centric Solutions
                </li>
              </ul>
            </AccordionItem>

            {/* Chapter 1 */}
            <AccordionItem key="chapter1" startContent={<Icon icon="solar:banknote-linear" className="text-xl text-danger" />} title="CHAPTER I: Investment Banking Experience">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Icon icon="fluent:star-checkmark-28-filled" className="mr-2" /> Conducted in-depth financial analyses for portfolio risk management.
                </li>
                <li className="flex items-center">
                  <Icon icon="fluent:star-checkmark-28-filled" className="mr-2" /> Managed a $15M loan book through rigorous risk assessment.
                </li>
                <li className="flex items-center">
                  <Icon icon="fluent:star-checkmark-28-filled" className="mr-2" /> Enhanced investment strategies with detailed market research.
                </li>
                <li className="flex items-center">
                  <Icon icon="fluent:star-checkmark-28-filled" className="mr-2" /> Optimized financial models to support decision-making.
                </li>
                <li className="flex items-center">
                  <Icon icon="fluent:star-checkmark-28-filled" className="mr-2" /> Collaborated with senior bankers to drive strategic insights.
                </li>
              </ul>
            </AccordionItem>

            {/* Chapter 2 */}
            <AccordionItem key="chapter2" startContent={<Icon icon="solar:database-bold" className="text-xl text-secondary" />} title="CHAPTER II: Private Equity Experience">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Icon icon="fluent:star-checkmark-28-filled" className="mr-2" /> Led high-impact technical demos for C-suite executives.
                </li>
                <li className="flex items-center">
                  <Icon icon="fluent:star-checkmark-28-filled" className="mr-2" /> Presented innovative solutions to top-level stakeholders.
                </li>
                <li className="flex items-center">
                  <Icon icon="fluent:star-checkmark-28-filled" className="mr-2" /> Oversaw portfolio valuation and due diligence processes.
                </li>
                <li className="flex items-center">
                  <Icon icon="fluent:star-checkmark-28-filled" className="mr-2" /> Streamlined investment evaluation methodologies.
                </li>
                <li className="flex items-center">
                  <Icon icon="fluent:star-checkmark-28-filled" className="mr-2" /> Coordinated multi-department analysis for effective deal sourcing.
                </li>
              </ul>
            </AccordionItem>

            {/* Chapter 3 */}
            <AccordionItem key="chapter3" startContent={<Icon icon="solar:cloud-plus-bold-duotone" className="text-xl text-secondary" />} title="CHAPTER III: GTM Experience">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Icon icon="fluent:star-checkmark-28-filled" className="mr-2" /> Achieved 120%+ of quota over three years.
                </li>
                <li className="flex items-center">
                  <Icon icon="fluent:star-checkmark-28-filled" className="mr-2" /> Developed robust market penetration strategies.
                </li>
                <li className="flex items-center">
                  <Icon icon="fluent:star-checkmark-28-filled" className="mr-2" /> Integrated cross-functional feedback to refine product positioning.
                </li>
                <li className="flex items-center">
                  <Icon icon="fluent:star-checkmark-28-filled" className="mr-2" /> Leveraged data-driven insights for campaign optimization.
                </li>
                <li className="flex items-center">
                  <Icon icon="fluent:star-checkmark-28-filled" className="mr-2" /> Fostered strong client relationships to drive repeat business.
                </li>
              </ul>
            </AccordionItem>

            {/* Chapter 4 */}
            <AccordionItem key="chapter4" startContent={<Icon icon="solar:share-circle-line-duotone" className="text-xl text-primary" />} title="CHAPTER IV: Cross-Functional Experience">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Icon icon="fluent:star-checkmark-28-filled" className="mr-2" /> Led technical RFP responses tied to $2M+ contracts.
                </li>
                <li className="flex items-center">
                  <Icon icon="fluent:star-checkmark-28-filled" className="mr-2" /> Managed cross-functional teams to deliver unified solutions.
                </li>
                <li className="flex items-center">
                  <Icon icon="fluent:star-checkmark-28-filled" className="mr-2" /> Facilitated collaboration between engineering, sales, and marketing.
                </li>
                <li className="flex items-center">
                  <Icon icon="fluent:star-checkmark-28-filled" className="mr-2" /> Implemented process improvements for efficient project execution.
                </li>
                <li className="flex items-center">
                  <Icon icon="fluent:star-checkmark-28-filled" className="mr-2" /> Championed innovative practices to boost team performance.
                </li>
              </ul>
            </AccordionItem>

            {/* Chapter 5 */}
            <AccordionItem key="chapter5" startContent={<Icon icon="solar:cloud-snowfall-bold" className="text-xl text-primary" />} title="CHAPTER V: SME Experience">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Icon icon="fluent:star-checkmark-28-filled" className="mr-2" /> Partnered with Sales, Product, Marketing, and Engineering teams to drive $10M+ in strategic partnership commitments.
                </li>
                <li className="flex items-center">
                  <Icon icon="fluent:star-checkmark-28-filled" className="mr-2" /> Collaborated with diverse teams to align strategic initiatives.
                </li>
                <li className="flex items-center">
                  <Icon icon="fluent:star-checkmark-28-filled" className="mr-2" /> Spearheaded initiatives that secured significant partnership deals.
                </li>
                <li className="flex items-center">
                  <Icon icon="fluent:star-checkmark-28-filled" className="mr-2" /> Integrated technical and business strategies to enhance overall performance.
                </li>
                <li className="flex items-center">
                  <Icon icon="fluent:star-checkmark-28-filled" className="mr-2" /> Enabled revenue growth through effective strategic partnership management.
                </li>
              </ul>
            </AccordionItem>
          </Accordion>
        </div>

        {/* ✅ Profile Picture and Social Links */}
        <div className="order-3 lg:order-2 flex flex-col items-center lg:items-start lg:pl-8">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src="/images/portrait.jpg"
              alt="Malcolm Decuire"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              width={320} // Add explicit width and height for Next.js optimization
              height={320}
              priority
            />
          </div>
          <ul role="list" className="mt-8 space-y-4">
            <SocialLink href="https://github.com/malcolm-decuire" icon={GitHubIcon} className="mt-4">
              Github
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/malcolmdecuire/" icon={LinkedInIcon} className="mt-4">
              LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:malcolm.decuire@gmail.com"
              icon={XIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              malcolm.decuire@gmail.com
            </SocialLink>
          </ul>
        </div>

      </div>
    </Container>
  );
}

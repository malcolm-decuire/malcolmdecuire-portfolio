// 20250701 UPDATE FOR PUBLIC REPO -LEGACY CODE | -FUNCTIONAL

"use client";
import type { CardProps } from "@heroui/react";
import React from "react";
import { Button, Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import Image from "next/image"; // ✅ Import Next.js Image component
const image1 = "/images/photos/decurelabs-settings2.jpg";


export default function Component(props: CardProps) {
  return (
    <Card className="w-full max-w-[520px]" {...props}>
      {/* Close Button */}
      <Button
        isIconOnly
        className="absolute right-2 top-2 z-20"
        radius="full"
        size="sm"
        variant="light"
      >
        <Icon className="text-default-400" icon="iconamoon:close-thin" width={24} />
      </Button>

      {/* Card Body */}
      <CardBody className="flex flex-row flex-wrap p-0 sm:flex-nowrap">
        {/* ✅ Fixed Next.js Image Import Issue */}
        <Image
          src={image1} // ✅ Now correctly typed
          alt="DecureLabs Settings"
          width={192} // ✅ Required to avoid layout shift
          height={128} // ✅ Required to avoid layout shift
          className="h-auto w-full flex-none object-cover object-top md:w-48"
        />

        {/* Card Content */}
        <div className="px-4 py-5">
          <h3 className="text-large font-medium">Demo Settings</h3>
          <div className="flex flex-col gap-3 pt-2 text-small text-default-400">
            <p>
             Use the button at the top right to switch between light mode ☼ vs. dark mode ☾.
            </p>
            <p>📅 Use Calendly link on the 'Home' page to connect if you want to learn more</p>
            <p>💨 Experiments III to VI load the fastest</p>
            <p>⏳ Experiments I to II are Streamlit apps that need at least 180s to activate</p>
            <p>📲 For mobile users, click on the buttons and open in a new page if you're not seeing them show immediately</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

// // 20250701 UPDATE FOR PUBLIC REPO -SNIPPET WORKS
"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Container } from "@/components/Container";

// Dynamically import ServicesApp to ensure proper SSR behavior
const ServicesApp = dynamic(
  () => import("@/components/servicessection/ServicesApp"),
  { ssr: false }
);

export default function ServicesPage() {
  return (
    <Container className="mt-16 sm:mt-24">
      <div className="flex flex-col items-center justify-center w-full">
        <ServicesApp />
      </div>
    </Container>
  );
}

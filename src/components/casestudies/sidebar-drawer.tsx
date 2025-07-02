///////////////
//////////////
///////////// // 20250701 UPDATE FOR PUBLIC REPO -FUNCTIONAL
"use client";

import React from "react";
import { cn, Drawer, DrawerBody, DrawerContent } from "@heroui/react";
import { TRANSITION_EASINGS } from "@heroui/framer-utils";
import { Icon } from "@iconify/react";

const SidebarDrawer = React.forwardRef<
  HTMLDivElement,
  {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    sidebarWidth?: number;
    sidebarPlacement?: "left" | "right";
    children: React.ReactNode;
  }
>(
  (
    { isOpen, onOpenChange, sidebarWidth = 288, sidebarPlacement = "left", children },
    ref
  ) => {
    const motionProps = React.useMemo(
      () => ({
        variants: {
          enter: { x: 0, transition: { x: { duration: 0.3, ease: TRANSITION_EASINGS.easeOut } } },
          exit: {
            x: sidebarPlacement === "left" ? -sidebarWidth : sidebarWidth,
            transition: { x: { duration: 0.2, ease: TRANSITION_EASINGS.easeOut } },
          },
        },
      }),
      [sidebarWidth, sidebarPlacement]
    );

    return (
      <>
        {/* ✅ Mobile Drawer */}
        <Drawer
          ref={ref}
          isOpen={isOpen}
          onOpenChange={(open) => onOpenChange(open)} 
          placement={sidebarPlacement}
          motionProps={motionProps}
          radius="none"
          scrollBehavior="inside"
          style={{ "--sidebar-width": `${sidebarWidth}px` } as React.CSSProperties}
          classNames={{
            wrapper: cn(
              "!w-[var(--sidebar-width)]",
              "fixed inset-0 z-50 flex items-center justify-center sm:items-start sm:justify-start"
            ),
            base: cn(
              "w-full max-w-[400px] sm:w-[var(--sidebar-width)] !m-0 p-0 h-full max-h-full bg-content1",
              {
                "inset-y-0 left-0 sm:rounded-l-none": sidebarPlacement === "left",
              }
            ),
            body: "p-0",
          }}
        >
          <DrawerContent>
            {/* ✅ Single working close button */}
            <div className="flex justify-end p-4">
              <button
                className="text-default-500 hover:text-default-700"
                onClick={() => onOpenChange(false)}
                aria-label="Close sidebar"
              >
                {/* <Icon icon="solar:close-circle-bold" width={24} /> */}
              </button>
            </div>

            <DrawerBody>
              <div className="rounded-lg bg-sky-100 p-4 shadow-md h-full">
                {children}
              </div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        {/* ✅ Static Desktop Sidebar */}
        <div
          className="hidden lg:flex h-full max-w-[var(--sidebar-width)] overflow-y-auto border-r border-gray-200 bg-content1 p-6"
          style={{ "--sidebar-width": `${sidebarWidth}px` } as React.CSSProperties}
        >
          <div className="rounded-lg bg-sky-100 p-4 shadow-md w-full h-full">
            {children}
          </div>
        </div>
      </>
    );
  }
);

SidebarDrawer.displayName = "SidebarDrawer";
export default SidebarDrawer;

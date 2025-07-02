// 20250701 UPDATE FOR PUBLIC REPO -LEGACY CODE | -FUNCTIONAL
"use client";

import React from "react";
import { cn } from "@heroui/react";

export type TeamMember = {
  name: string;
  role: string;
  bio?: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
};

export type TeamMemberCardProps = React.HTMLAttributes<HTMLDivElement> & TeamMember;

const TeamMemberCard = React.forwardRef<HTMLDivElement, TeamMemberCardProps>(
  ({ children, name, role, bio, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col items-center rounded-large bg-content1 px-4 py-6 text-center shadow-small",
        className
      )}
      {...props}
    >
      {/* ICON SLOT – with scaled size */}
      <div className="mb-4 flex items-center justify-center">
        <div className="h-[48px] w-[48px] flex items-center justify-center">
          {children}
        </div>
      </div>

      <h3 className="font-medium">{name}</h3>
      <span className="text-small text-default-500">{role}</span>

      {bio && <p className="mb-4 mt-2 text-default-600">{bio}</p>}
    </div>
  )
);

TeamMemberCard.displayName = "TeamMemberCard";

export default TeamMemberCard;

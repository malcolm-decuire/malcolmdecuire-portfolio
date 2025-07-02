"use client";

import type { CardProps } from "@nextui-org/react";
import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { cn } from "@nextui-org/react";

export type ActionCardProps = CardProps & {
  icon: string;
  title: string;
  color?: "primary" | "secondary" | "warning" | "danger";
  description: string;
};

const ActionCard = React.forwardRef<HTMLDivElement, ActionCardProps>(
  ({ color, title, icon, description, children, className, ...props }, ref) => {
    const colors = React.useMemo(() => {
      switch (color) {
        case "primary":
          return {
            card: "border-blue-800",
            iconWrapper: "bg-blue-100 border-blue-200",
            icon: "text-blue-800",
          };
        case "secondary":
          return {
            card: "border-blue-400",
            iconWrapper: "bg-blue-50 border-blue-200",
            icon: "text-blue-400",
          };
        case "warning":
          return {
            card: "border-green-800",
            iconWrapper: "bg-green-100 border-green-200",
            icon: "text-green-800",
          };
        case "danger":
          return {
            card: "border-green-400",
            iconWrapper: "bg-green-50 border-green-200",
            icon: "text-green-400",
          };

        default:
          return {
            card: "border-gray-200",
            iconWrapper: "bg-gray-50 border-gray-100",
            icon: "text-gray-500",
          };
      }
    }, [color]);

    return (
      <Card
        ref={ref}
        isPressable
        className={cn("border-small", colors?.card, className)}
        shadow="sm"
        {...props}
      >
        <CardBody className="flex h-full flex-row items-start gap-3 p-4">
          <div
            className={cn(
              "item-center flex rounded-medium border p-2",
              colors?.iconWrapper
            )}
          >
            <Icon className={colors?.icon} icon={icon} width={24} />
          </div>
          <div className="flex flex-col">
            <p className="text-medium">{title}</p>
            <p className="text-small text-gray-500">
              {description || children}
            </p>
          </div>
        </CardBody>
      </Card>
    );
  }
);

ActionCard.displayName = "ActionCard";

export default ActionCard;

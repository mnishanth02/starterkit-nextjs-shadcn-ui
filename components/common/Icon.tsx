import { memo } from "react";
import { icons } from "lucide-react";

import { cn } from "@/lib/utils";

export type LucIconProps = {
  name: keyof typeof icons;
  className?: string;
  strokeWidth?: number;
};

export const LucIcon = memo(({ name, className, strokeWidth }: LucIconProps) => {
  const IconComponent = icons[name];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent className={cn("h-4 w-4", className)} strokeWidth={strokeWidth || 2.5} />;
});

LucIcon.displayName = "LucIcon";

"use client";

import * as React from "react";
import { Tabs as TabsPrimitive, TabsContent as Content, TabsList as List, TabsTrigger as Trigger } from "@radix-ui/react-tabs";

export const Tabs = TabsPrimitive;

export const TabsList = ({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <List className={`flex space-x-2 border-b border-blue-700 ${className}`} {...props} />
);

export const TabsTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className = "", ...props }, ref) => (
    <button
      ref={ref}
      className={`text-white px-4 py-2 hover:text-blue-400 data-[state=active]:text-blue-400 ${className}`}
      {...props}
    />
  )
);
TabsTrigger.displayName = "TabsTrigger";

export const TabsContent = Content;

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const MaxWidthWrapper = ({
  children,
  className,
  noPadding,
  customPadding,
}: {
  children: ReactNode;
  className?: string;
  noPadding?: boolean;
  customPadding?: string;
}) => {
  return (
    <section
      className={cn(
        "max-w-[1375px] w-full  md:px-10 lg:px-20",
        className || "",
        { "py-0": noPadding && !customPadding },
        { "py-8": !noPadding && !customPadding },
         customPadding 
      )}
    >
      {children}
    </section>
  );
};

export default MaxWidthWrapper;

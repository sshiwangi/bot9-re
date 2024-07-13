import React from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";

const Tooltip = ({ text, children, offsetLeft }) => {
  const contentStyle = offsetLeft ? { marginLeft: `${offsetLeft}` } : {};
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>
          <div>{children}</div>
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            className="rounded-lg p-2 max-w-[350px] text-center text-sm bg-gray-900 text-white shadow-lg"
            side="top"
            align="center"
            style={contentStyle}
          >
            {text}
            <RadixTooltip.Arrow className="fill-gray-900" />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};

export default Tooltip;

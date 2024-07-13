import { Tooltip } from "@radix-ui/react-tooltip";
import React from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";

function CategoryBar({ items, colors }) {
  const totalPercent = items.reduce(
    (sum, item) => sum + parseFloat(item.percent),
    0
  );

  return (
    <RadixTooltip.Provider>
      <div className="relative w-full h-[20px] bg-gray-200 rounded">
        {items.map((item, index) => {
          const widthPercent = (parseFloat(item.percent) / totalPercent) * 100;
          const leftPercent = items
            .slice(0, index)
            .reduce(
              (sum, item) =>
                sum + (parseFloat(item.percent) / totalPercent) * 100,
              0
            );

          return (
            <Tooltip key={index} text={`${item.name}: ${item.percent}%`}>
              <div
                className="absolute top-0 h-full"
                style={{
                  width: `${widthPercent}%`,
                  left: `${leftPercent}%`,
                  backgroundColor: colors[index % colors.length],
                }}
              />
            </Tooltip>
          );
        })}
      </div>
    </RadixTooltip.Provider>
  );
}

export default CategoryBar;

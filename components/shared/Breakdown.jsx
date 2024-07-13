import React from "react";
import CategoryBar from "../ui/CategoryBar";

function Breakdown({ data, showCategoryBar }) {
  const totalPercent = data.items.reduce(
    (sum, item) => sum + parseFloat(item.percent),
    0
  );

  const colors = [
    "rgb(87, 85, 255)",
    "rgb(154, 153, 255)",
    "rgb(205, 204, 255)",
    "rgb(232, 231, 254)",
    "rgb(208, 213, 221)",
  ];

  return (
    <div className="mb-8 p-4 border border-gray-200 rounded-lg">
      <h2 className="font-[600] text-[14px] mb-4 text-gray-900">
        {data.title}
      </h2>
      {showCategoryBar && (
        <>
          <CategoryBar items={data.items} colors={colors} />
          <div className="h-[8px] my-2 border-t border-l border-r border-gray-200"></div>
          <div className="flex text-gray-500 mb-4 font-medium w-full justify-between items-center">
            <p className="font-[500] text-[12px]">0%</p>
            <p className="font-[500] text-[12px]">100%</p>
          </div>
        </>
      )}
      {data.items.map((item, index) => (
        <div
          key={item.name}
          className="flex justify-between py-4 border-b border-gray-200"
        >
          <div className="flex gap-2 items-center">
            {showCategoryBar && (
              <div
                className="w-[10px] h-[10px] rounded-full ml-2"
                style={{ backgroundColor: colors[index % colors.length] }}
              ></div>
            )}
            <span className="text-gray-900 font-[400] text-[14px]">
              {item.name}
            </span>
          </div>
          <div className="flex gap-8 items-center">
            <span className="font-[500] text-[14px]">{item.percent}%</span>
            {item.count ? (
              <span className="font-[500] text-[14px]"> {item.count}</span>
            ) : (
              <div className="w-4 h-[2px] bg-gray-400"></div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Breakdown;

import { useRouter } from "next/router";
import Tooltip from "./Tooltip";
// import Image from "next/image";
// import arrowdropup from "../../public/Images/Polygon 1.png";
// import arrowdropdown from "../../public/Images/Polygon 1 (1).png";
// import profiledark from "../../public/Images/profile-dark.png";
// import profilegray from "../../public/Images/profile-gray.png";
// import supportdark from "../../public/Images/support-dark.png";
// import supportgray from "../../public/Images/support-gray.png";
// import { User } from "lucide-react";
import TriangleIcon from "../icons/TriangleIcon";
import Support from "../icons/Support";
import User from "../icons/User";

function Tab({
  tabName,
  value,
  percentChange,
  tabs = [],
  icon,
  setLoading,
  isActive,
}) {
  const router = useRouter();

  const handleClick = () => {
    setLoading(true);
    const encodedTabName = encodeURIComponent(
      tabName.toLowerCase().replace(/\s+/g, "-")
    );
    router.push(`/?tab=${encodedTabName}`, undefined, { shallow: true });
  };

  const tooltipText =
    "Every conversation in inbox is marked as one support request. One visitor can have multiple support requests.";

  const isPercentagePositive = parseFloat(percentChange) >= 100;

  const renderPercentageChange = () => (
    <div className=" flex items-center gap-2">
      {isPercentagePositive ? (
        <TriangleIcon color="green" />
      ) : (
        <TriangleIcon color="red" rotate={true} />
      )}

      {isPercentagePositive ? (
        <p className="text-[12px] font-600 text-green-500"> {percentChange}%</p>
      ) : (
        <p className="text-[12px] font-600 text-red-500"> {percentChange}%</p>
      )}
    </div>
  );

  const tabClasses = `p-4 border gap-2 flex flex-col border-gray-200 rounded-lg w-full shadow-sm cursor-pointer ${
    isActive ? "bg-[#F2F3F6]" : ""
  }`;

  if (tabName === "Visitors") {
    return (
      <div className={tabClasses} onClick={handleClick}>
        <div className="flex items-center gap-2">
          <User />
          <div className="font-[500] text-gray-600 text-[16px]">{tabName}</div>
        </div>
        <div className="flex gap-2 items-center">
          <div>
            <div className="text-[32px] font-[500]">{value}</div>
          </div>
          {renderPercentageChange()}
        </div>
      </div>
    );
  } else {
    return (
      <div className={tabClasses} onClick={handleClick}>
        <div className="flex items-center gap-2">
          <Tooltip text={tabs.length > 1 ? tooltipText : ""}>
            <div className="flex items-center gap-2">
              <Support />
            </div>
          </Tooltip>
          <div className="font-[500] text-gray-600 text-[16px]">{tabName}</div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="text-[32px] font-[500]">{value}</div>
          {renderPercentageChange()}
        </div>
      </div>
    );
  }
}

export default Tab;

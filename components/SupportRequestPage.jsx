import Breakdown from "./shared/Breakdown";
import supportdata from "@/data/supportdata";

function SupportRequestPage() {
  const { detailed } = supportdata;

  return (
    <>
      <Breakdown
        data={{
          title: "Breakdown by Request Type",
          items: detailed.requestTypeBreakdown,
        }}
        showCategoryBar={true}
      />
      <Breakdown
        data={{
          title: "Breakdown by Request Priority",
          items: detailed.requestPriorityBreakdown,
        }}
        showCategoryBar={true}
      />
      <Breakdown
        data={{
          title: "Breakdown by Resolution Status",
          items: detailed.resolutionStatusBreakdown,
        }}
        showCategoryBar={true}
      />
    </>
  );
}

export default SupportRequestPage;

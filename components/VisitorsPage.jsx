import Breakdown from "./shared/Breakdown";
import data from "@/data/analytics";

function VisitorsPage() {
  const { detailed } = data;
  return (
    <>
      <Breakdown
        data={{
          title: "Breakdown by Visitor Interaction",
          items: detailed.interactionBreakdown,
        }}
        showCategoryBar={true}
      />
      <Breakdown
        data={{
          title: "Breakdown by Visitor Type",
          items: detailed.visitorTypeBreakdown,
        }}
        showCategoryBar={true}
      />
      <Breakdown
        data={{
          title: "Breakdown by Visitor Location",
          items: detailed.locationBreakdown,
        }}
        showCategoryBar={true}
      />
    </>
  );
}

export default VisitorsPage;

import { Inter } from "next/font/google";
import Tab from "@/components/ui/Tab";
import data from "../data/analytics";
import { useRouter } from "next/router";
import VisitorsPage from "@/components/VisitorsPage";
import SupportRequestPage from "@/components/SupportRequestPage";
import { useEffect, useState } from "react";
import { MessageCircleWarning, User } from "lucide";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const { common } = data;
  const { tab = "visitors" } = router.query;
  const commonEntries = Object.entries(common);
  const firstTwoCommonEntries = commonEntries
    .slice(0, 2)
    .map(([key, value], index) => {
      const tabName = index === 0 ? "visitors" : "support-requests";
      const isActive = encodeURIComponent(tabName) === tab.toLowerCase();
      return {
        key: index === 0 ? "Visitors" : "Support Requests",
        value,
        icon:
          index === 0 ? (
            <User
              className={`w-6 h-6 ${isActive ? "bg-blue-600" : "bg-gray-600"}`}
            />
          ) : (
            <MessageCircleWarning
              className={`w-6 h-6 ${isActive ? "bg-blue-600" : "bg-gray-600"}`}
            />
          ),
        isActive,
      };
    });

  const [loading, setLoading] = useState(false);
  const tabs = [
    { name: "Visitors", component: <VisitorsPage /> },
    { name: "Support Requests", component: <SupportRequestPage /> },
  ];

  const selectedTab =
    tabs.find(
      (t) =>
        encodeURIComponent(t.name.toLowerCase().replace(/\s+/g, "-")) ===
        tab.toLowerCase()
    ) || tabs[0];

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <div className="mx-auto p-8">
      <main className={`flex min-h-screen gap-4 flex-col`}>
        <div className="flex justify-between mb-2 items-center">
          <h1 className="text-black text-[18px] font-[600]">
            Breakdown by Visitors
          </h1>
          <p className="font-[400] text-[16px]">Showing lifetime stats</p>
          {/* <div className="border flex items-center rounded-md border-divider-black p-2 gap-2">
            <Image src={calendar} size={20} alt="calendar" />
            <p className="text-gray-900">Jun 7, 2024 - Jun 13, 2024</p>
          </div> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {firstTwoCommonEntries.map(({ key, value, icon, isActive }) => (
            <Tab
              key={key}
              tabName={key}
              value={value.value}
              percentChange={value.percentChange}
              tabs={tabs}
              icon={icon}
              setLoading={setLoading}
              isActive={isActive}
            />
          ))}
        </div>
        <div className="w-full mt-8">
          {loading ? (
            <div className="flex justify-center items-center">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            selectedTab.component
          )}
        </div>
      </main>
    </div>
  );
}

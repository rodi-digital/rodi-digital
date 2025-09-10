"use client";

import { ServiceHero } from "@/components/ui/service-hero";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function MeetPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "dynamic" });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": "#4730C6" },
          dark: { "cal-brand": "#ffffff" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div className="min-h-screen">
      <ServiceHero title="Let's meet" subtitle={""} />
      <div className="-mt-24 mb-36">
        <Cal
          namespace="dynamic"
          calLink="tijs-martens/dynamic"
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view", theme: "light" }}
        />
      </div>
    </div>
  );
}

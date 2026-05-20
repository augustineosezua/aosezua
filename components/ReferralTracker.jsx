"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

export default function ReferralTracker() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utmSource = params.get("utm_source");
    const utmMedium = params.get("utm_medium");
    const utmCampaign = params.get("utm_campaign");

    if (utmSource) {
      track("utm_arrival", {
        source: utmSource,
        medium: utmMedium,
        campaign: utmCampaign,
      });
    }
  }, []);

  return null;
}

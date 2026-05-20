import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import ReferralTracker from "@/components/ReferralTracker"


export const metadata = {
  title: "Augustine Osezua",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}
        <ReferralTracker />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

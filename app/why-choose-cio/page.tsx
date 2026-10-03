import type { Metadata } from "next";
import { WhyView } from "@/components/info-views";

export const metadata: Metadata = { title: "Why Choose CIO" };

export default function Page() {
  return <WhyView />;
}

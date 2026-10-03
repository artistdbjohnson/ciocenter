import type { Metadata } from "next";
import { CareersView } from "@/components/info-views";

export const metadata: Metadata = { title: "Careers" };

export default function Page() {
  return <CareersView />;
}

import type { Metadata } from "next";
import { AccessView } from "@/components/info-views";

export const metadata: Metadata = { title: "Accessibility" };

export default function Page() {
  return <AccessView />;
}

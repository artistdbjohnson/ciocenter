import type { Metadata } from "next";
import { ReferringView } from "@/components/info-views";

export const metadata: Metadata = { title: "Referring physicians" };

export default function Page() {
  return <ReferringView />;
}

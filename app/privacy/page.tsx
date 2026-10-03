import type { Metadata } from "next";
import { PrivacyView } from "@/components/info-views";

export const metadata: Metadata = { title: "Privacy" };

export default function Page() {
  return <PrivacyView />;
}

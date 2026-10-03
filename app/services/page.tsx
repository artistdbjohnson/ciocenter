import type { Metadata } from "next";
import { ServicesView } from "@/components/directory-views";

export const metadata: Metadata = { title: "Services" };

export default function Page() {
  return <ServicesView />;
}

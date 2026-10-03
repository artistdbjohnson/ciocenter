import type { Metadata } from "next";
import { PhysiciansView } from "@/components/directory-views";

export const metadata: Metadata = { title: "Physicians" };

export default function Page() {
  return <PhysiciansView />;
}

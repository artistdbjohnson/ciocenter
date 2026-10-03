import type { Metadata } from "next";
import { LocationsView } from "@/components/directory-views";

export const metadata: Metadata = { title: "Locations" };

export default function Page() {
  return <LocationsView />;
}

import type { Metadata } from "next";
import { BlogView } from "@/components/info-views";

export const metadata: Metadata = { title: "Blog" };

export default function Page() {
  return <BlogView />;
}

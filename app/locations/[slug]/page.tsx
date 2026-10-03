import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationView } from "@/components/directory-views";
import { locationBySlug, locations } from "@/lib/data";

export function generateStaticParams() {
  return locations.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loc = locationBySlug(slug);
  return { title: loc ? `${loc.name}` : "Location" };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!locationBySlug(slug)) notFound();
  return <LocationView slug={slug} />;
}

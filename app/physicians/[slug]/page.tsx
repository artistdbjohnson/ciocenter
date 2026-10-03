import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PhysicianView } from "@/components/directory-views";
import { physicianBySlug, physicians } from "@/lib/data";

export function generateStaticParams() {
  return physicians.map((person) => ({ slug: person.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const person = physicianBySlug(slug);
  return { title: person?.name ?? "Physician" };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!physicianBySlug(slug)) notFound();
  return <PhysicianView slug={slug} />;
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { getAllContent, getContentBySegments } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Decoration, OrbCluster, TopoLines, AltitudeScale } from "@/components/ui/Illustrations";
import { mdxComponents } from "@/components/mdx/mdxComponents";

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

// Maps postType → eyebrow label + gradient accent
const POST_TYPE_META: Record<
  string,
  { label: string | null; accent: "default" | "teal-pink" | "violet-blue" }
> = {
  pages: { label: null, accent: "default" },
  posts: { label: "Blog", accent: "teal-pink" },
  news: { label: "News", accent: "violet-blue" },
  events: { label: "Event", accent: "default" },
  webinar: { label: "Webinar", accent: "teal-pink" },
  "leadership-team": { label: "Leadership", accent: "violet-blue" },
};

export async function generateStaticParams() {
  const entries = await getAllContent();
  return entries.filter((e) => e.segments.length > 0).map((e) => ({ slug: e.segments }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = await getContentBySegments(slug);
  if (!entry) return {};

  const { frontmatter } = entry;
  return {
    title: frontmatter.title,
    description: frontmatter.description,
    alternates: { canonical: frontmatter.canonical },
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      url: frontmatter.canonical,
      images: frontmatter.ogImage ? [frontmatter.ogImage] : undefined,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: frontmatter.title,
      description: frontmatter.description,
      images: frontmatter.ogImage ? [frontmatter.ogImage] : undefined,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const entry = await getContentBySegments(slug);
  if (!entry) notFound();

  const { frontmatter, source } = entry;
  const { label } = POST_TYPE_META[frontmatter.postType ?? "pages"] ?? POST_TYPE_META.pages;

  return (
    <>
      {frontmatter.jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(frontmatter.jsonLd) }}
        />
      ) : null}

      {/* SAC dark teal hero */}
      <header
        className="relative overflow-hidden pt-24 pb-28 sm:pt-32 lg:pt-40"
        style={{ background: "linear-gradient(145deg, #042430 0%, #073549 40%, #0e5b7e 75%, #0a4761 100%)" }}
      >
        <Decoration className="inset-0 opacity-[0.07]">
          <TopoLines className="h-full w-full" tone="white" />
        </Decoration>
        <Decoration className="-top-24 -right-24 h-110 w-110 opacity-25">
          <OrbCluster className="h-full w-full" variant="sky-emerald" />
        </Decoration>
        <Container size="lg">
          <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            {label && (
              <div className="hero-reveal hero-d0">
                <Eyebrow tone="dark">{label}</Eyebrow>
              </div>
            )}
            <h1 className="display-2xl text-white text-balance hero-reveal hero-d1">
              {frontmatter.title}
            </h1>
            {frontmatter.description && (
              <p
                className="text-lg leading-relaxed sm:text-xl hero-reveal hero-d2"
                style={{ color: "rgba(200,230,240,0.75)", maxWidth: "44rem" }}
              >
                {frontmatter.description}
              </p>
            )}
          </div>
        </Container>
        <Decoration className="bottom-6 left-8 h-28 hidden lg:block opacity-20">
          <AltitudeScale className="h-full w-auto" tone="white" />
        </Decoration>
      </header>

      {/* Prose content */}
      <Section tone="canvas">
        <div className="mx-auto max-w-[70ch]">
          <article className="sierra-prose will-reveal" data-delay="100">
            <MDXRemote
              source={source}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]],
                },
              }}
            />
          </article>
        </div>
      </Section>
    </>
  );
}

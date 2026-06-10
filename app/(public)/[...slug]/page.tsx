import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { getAllContent, getContentBySegments } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GradientVisual } from "@/components/ui/GradientVisual";
import { Decoration, PeakSilhouette, OrbCluster } from "@/components/ui/Illustrations";
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
  const { label, accent } = POST_TYPE_META[frontmatter.postType ?? "pages"] ?? POST_TYPE_META.pages;

  return (
    <>
      {frontmatter.jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(frontmatter.jsonLd) }}
        />
      ) : null}

      {/* Gradient page header — generous padding, peak silhouette divider */}
      <div className="relative overflow-hidden bg-night">
        <Decoration className="-top-20 -right-20 h-[420px] w-[420px] opacity-50 animate-blob-a">
          <OrbCluster className="h-full w-full" variant="violet-blue" />
        </Decoration>
        <Container size="lg" className="relative pb-0 pt-16 sm:pt-20 lg:pt-24">
          <GradientVisual
            accent={accent}
            grain
            className="px-8 py-14 sm:px-14 sm:py-16 lg:px-20 lg:py-20 hero-reveal-visual hero-d0"
          >
            {label && (
              <div className="hero-reveal hero-d1">
                <Eyebrow tone="dark">{label}</Eyebrow>
              </div>
            )}
            <h1
              className={`display-xl text-white max-w-3xl leading-[1.05] text-balance hero-reveal hero-d2 ${
                label ? "mt-6" : ""
              }`}
            >
              {frontmatter.title}
            </h1>
            {frontmatter.description && (
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65 hero-reveal hero-d3">
                {frontmatter.description}
              </p>
            )}
          </GradientVisual>
        </Container>
        {/* Peak silhouette divider */}
        <div className="pointer-events-none mt-12 h-20 select-none sm:h-24">
          <PeakSilhouette className="h-full w-full" tone="white" />
        </div>
      </div>

      {/* Prose content — generous top spacing, centered max-prose column */}
      <Container size="lg" className="py-20 sm:py-24 lg:py-28">
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
      </Container>
    </>
  );
}

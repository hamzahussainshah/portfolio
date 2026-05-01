import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Marquee } from "@/components/Marquee";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CursorSpotlight } from "@/components/CursorSpotlight";
import { SITE, projects } from "@/lib/data";

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Selected Projects by Hamza Hussain Shah",
  itemListElement: projects.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "CreativeWork",
      name: p.title,
      description: p.description,
      keywords: p.tags.join(", "),
      author: { "@type": "Person", name: SITE.name, url: SITE.url },
    },
  })),
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
  author: { "@type": "Person", name: SITE.name },
};

export default function HomePage() {
  return (
    <>
      <CursorSpotlight />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Marquee />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
    </>
  );
}

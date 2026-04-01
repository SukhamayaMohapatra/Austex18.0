import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import CardGrid from "./components/CardGrid";
import Footer from "./components/Footer";

export default function HomePage() {
  const capabilities = [
    {
      title: "Manufacturing",
      desc: "State-of-the-art WHO-GMP compliant production facilities.",
      icon: "🏭",
      link: "/manufacturing",
    },
    {
      title: "R&D",
      desc: "Advanced research and formulation development capabilities.",
      icon: "🧪",
      link: "/rnd",
    },
    {
      title: "Quality Assurance",
      desc: "Strict global quality standards and compliance systems.",
      icon: "🔍",
      link: "/quality",
    },
    {
      title: "Global Distribution",
      desc: "Robust supply chain across international markets.",
      icon: "🌍",
      link: "/distribution",
    },
    {
      title: "Regulatory Expertise",
      desc: "Strong regulatory approvals across multiple regions.",
      icon: "📄",
      link: "/regulatory",
    },
    {
      title: "Innovation",
      desc: "Continuous innovation in pharmaceutical solutions.",
      icon: "💡",
      link: "/innovation",
    },
  ];

  const whyChoose = [
    {
      title: "Quality First",
      desc: "Committed to the highest global quality standards.",
      icon: "✔️",
    },
    {
      title: "Innovation Driven",
      desc: "Cutting-edge R&D and product development.",
      icon: "🚀",
    },
    {
      title: "Trusted Globally",
      desc: "Strong presence across 50+ countries.",
      icon: "🤝",
    },
  ];

  return (
    <>
      <Navbar />
      <Hero />

      {/* CAPABILITIES */}
      <Section title="Our Services & Capabilities">
        <CardGrid items={capabilities} />
      </Section>

      {/* WHY CHOOSE US */}
      <Section title="Why Choose Austex">
        <CardGrid items={whyChoose} />
      </Section>

      <Footer />
    </>
  );
}

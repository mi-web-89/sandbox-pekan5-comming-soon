import HeroSection from "@/components/HeroSection";
import Features from "@/components/features/Features";
import Subscribe from "@/components/subscribe/Subscribe";
import Testimony from "@/components/testimony/Testimony";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <HeroSection />
      <Features />
      <Testimony />
      <Subscribe />
    </div>
  );
}

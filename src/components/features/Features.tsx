import FeatureCard from "@/components/features/FeatureCard";
import { HeartIcon, BatteryIcon, BellIcon } from "@/components/Icons";

export default function Features() {
  return (
    <section className="mt-20 px-8 pt-10 pb-20 bg-slate-800">
        <h2 className="text-3xl font-bold text-center mb-10">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<HeartIcon className="size-12 text-sky-800 mx-auto" />}
            title="Healt Tracking"
            description="Monitor your heart rate, sleep patterns and daily activity 24/7"
          />
          <FeatureCard
            icon={<BatteryIcon className="size-12 text-sky-800 mx-auto" />}
            title="Long Battery life"
            description="Up to 14 days of battery life on a single charge, focus on your goals, not the charger "
          />
          <FeatureCard
            icon={<BellIcon className="size-12 text-sky-800 mx-auto" />}
            title="Smart Notification"
            description="Get calls, text, and app notifications right on your wirst, never miss what matters"
          />
        </div>
      </section>
  )
}
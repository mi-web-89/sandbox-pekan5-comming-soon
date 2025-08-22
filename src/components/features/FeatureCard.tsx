interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="bg-background p-6 rounded-lg text-center border shadow hover:shadow-xl">
      <div className="mb-5">{icon}</div>
      <div className="text-slate-700">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

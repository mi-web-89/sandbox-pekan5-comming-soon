interface TestimonialCardProps {
  image: React.ReactNode
  name: string
  role: string
  quote: string
  color?: string
}

export default function TestimonialCard({ image, name, role, quote, color }: TestimonialCardProps) {
  return (
    <div className={`${color} border hover:shadow-xl p-6 rounded-lg text-center`}>
       <div className="flex justify-center items-center mb-4 size-16 rounded-full mx-auto">
        { image }
       </div>
      <p className="text-slate-500 italic mb-6">&quot;{quote}&quot;</p>
      <div>
        <h4 className="font-bold text-lg text-slate-600">{name}</h4>
        <p className="text-sm text-slate-500">{role}</p>
      </div>
    </div>
  )
}
interface CardProps {
  title: string;
  description: string;
}

export default function Card({ title, description }: CardProps) {
  return (
    <div className="group p-8 bg-white border border-zinc-200 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <h2 className="text-2xl font-bold tracking-tight mb-2 group-hover:text-blue-600 transition-colors">
        {title}
      </h2>
      <p className="text-zinc-500 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

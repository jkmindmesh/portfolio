interface CardProps {
  title: string;
  description: string;
}

export default function Card({ title, description, url }: CardProps) {
  return (
    <Link href={url} target="_blank">
    <div className="group p-8 bg-white border border-blue-100 rounded-3xl shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300">
      <div className="w-12 h-1 bg-blue-500 mb-4 rounded-full opacity-20 group-hover:opacity-100 transition-opacity" />
      <h2 className="text-2xl font-bold text-slate-800 mb-2">
        {title}
      </h2>
      <p className="text-slate-500 leading-relaxed">
        {description}
      </p>
    </div>
      </Link>
  );
}

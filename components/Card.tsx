## components/Card.tsx
```tsx
export default function Card({ title, description }: any) {
  return (
    <div className="p-6 bg-zinc-900 rounded-2xl hover:bg-zinc-800 transition shadow-lg">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

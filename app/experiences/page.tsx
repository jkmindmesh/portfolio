## app/experiences/page.tsx
```tsx
import experiences from "../../data/experiences.json";
import Card from "../../components/Card";

export default function Experiences() {
  return (
    <main className="p-10 max-w-5xl mx-auto">
      <h1 className="text-4xl mb-6">Experiences</h1>
      <div className="grid gap-6">
        {experiences.map((e: any, i: number) => (
          <Card key={i} {...e} />
        ))}
      </div>
    </main>
  );
}

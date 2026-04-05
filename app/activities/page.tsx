## app/activities/page.tsx
```tsx
import activities from "../../data/activities.json";
import Card from "../../components/Card";

export default function Activities() {
  return (
    <main className="p-10 max-w-5xl mx-auto">
      <h1 className="text-4xl mb-6">Activities</h1>
      <div className="grid gap-6">
        {activities.map((a: any, i: number) => (
          <Card key={i} {...a} />
        ))}
      </div>
    </main>
  );
}

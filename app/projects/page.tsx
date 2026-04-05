
import projects from "../../data/projects.json";
import Card from "../../components/Card";

export default function Projects() {
  return (
    <main className="p-10 max-w-5xl mx-auto">
      <h1 className="text-4xl mb-6">Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p: any, i: number) => (
          <Card key={i} {...p} />
        ))}
      </div>
    </main>
  );
}

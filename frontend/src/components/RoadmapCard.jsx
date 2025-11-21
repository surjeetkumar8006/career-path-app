import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function RoadmapCard({ data }) {
  if (!data) {
    return (
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Career Roadmap</CardTitle>
        </CardHeader>
        <CardContent>No roadmap available.</CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Career Roadmap</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {data.roadmap.map((phase, i) => (
          <div key={i} className="p-4 rounded-lg bg-gray-50 border">
            <h3 className="font-semibold text-lg mb-2">{phase.phase}</h3>
            <ul className="list-disc ml-5 space-y-1">
              {phase.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

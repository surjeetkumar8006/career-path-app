import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SkillGapCard({ data }) {
  if (!data) {
    return (
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Skill Gap Analysis</CardTitle>
        </CardHeader>
        <CardContent>No data available.</CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Skill Gap Analysis</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">

        <div>
          <h3 className="font-semibold mb-2">Matched Skills</h3>
          <div className="flex flex-wrap gap-2">
            {data.matchedSkills.map((skill, i) => (
              <Badge key={i} className="bg-green-600 text-white">{skill}</Badge>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Missing Skills</h3>
          <div className="flex flex-wrap gap-2">
            {data.missingSkills.map((skill, i) => (
              <Badge key={i} className="bg-red-600 text-white">{skill}</Badge>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Recommended Next Steps</h3>
          <ul className="list-disc ml-5 space-y-1">
            {data.recommendations.map((r, i) => (
              <li key={i}>{r.skill} – {r.why}</li>
            ))}
          </ul>
        </div>

      </CardContent>
    </Card>
  );
}

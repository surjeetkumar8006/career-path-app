import { useSelector } from "react-redux";
import SkillGapCard from "../components/SkillGapCard";
import RoadmapCard from "../components/RoadmapCard";
import NewsList from "../components/NewsList";

export default function Dashboard() {
  const { result: skillData } = useSelector((state) => state.skill);
  const { roadmap } = useSelector((state) => state.roadmap);
  const { stories } = useSelector((state) => state.news);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* TOP SECTION → Skill Gap + Roadmap */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SkillGapCard data={skillData} />
          <RoadmapCard data={roadmap} />
        </div>

        {/* BOTTOM SECTION → Tech News */}
        <NewsList stories={stories} />
      </div>
    </div>
  );
}

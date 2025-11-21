import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import { fetchSkillGap } from "../store/skillSlice";
import { fetchRoadmap } from "../store/roadmapSlice";
import { fetchNews } from "../store/newsSlice";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ROLE_OPTIONS = [
  "Backend Developer",
  "Frontend Developer",
  "Full Stack Developer",
  "Data Analyst",
  "Data Scientist",
  "Machine Learning Engineer",
  "DevOps Engineer",
  "Cloud Engineer",
  "Security Engineer",
  "Mobile App Developer",
  "QA Engineer",
  "Product Manager",
];

const SKILL_OPTIONS = [
  "Java",
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Express",
  "Spring Boot",
  "SQL",
  "MongoDB",
  "Git",
  "Docker",
  "Kubernetes",
  "AWS",
  "APIs",
  "Microservices",
  "Networking",
  "Authentication",
  "Data Structures",
  "Algorithms",
];

export default function Home() {
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);

  const dispatch = useDispatch();
  const router = useRouter();

  const toggleSkill = (skill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleAnalyze = async () => {
    if (!selectedRole || selectedSkills.length === 0) {
      alert("Please select a role and at least one skill.");
      return;
    }

    await Promise.all([
      dispatch(
        fetchSkillGap({
          targetRole: selectedRole,
          currentSkills: selectedSkills,
        })
      ),
      dispatch(fetchRoadmap({ targetRole: selectedRole })), // FIXED
      dispatch(fetchNews()),
    ]);

    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <Card className="w-full max-w-2xl shadow-xl border rounded-xl p-6 bg-white">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            Career Path Analyzer
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-8 mt-2">

          {/* Role Dropdown */}
          <div className="space-y-2">
            <label className="font-medium text-lg">Select Target Role</label>
            <select
              className="w-full border rounded-lg p-3 text-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              <option value="">-- Choose a role --</option>
              {ROLE_OPTIONS.map((role, i) => (
                <option key={i} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>

          {/* Skills Multi Select */}
          <div className="space-y-3">
            <label className="font-medium text-lg">Select Your Skills</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {SKILL_OPTIONS.map((skill, i) => (
                <Badge
                  key={i}
                  onClick={() => toggleSkill(skill)}
                  className={`cursor-pointer text-base px-4 py-2 transition-all ${
                    selectedSkills.includes(skill)
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Analyze Button */}
          <Button
            onClick={handleAnalyze}
            className="w-full text-xl py-4 mt-4 bg-blue-600 hover:bg-blue-700 transition-all"
          >
            Analyze My Career Path
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

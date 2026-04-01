"use client";

import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/features/home/SectionHeader";
import { skills } from "@/constants/skills";
import { experiences } from "@/constants/experiences"; 
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function Experiences() {
  const [showAllSkills, setShowAllSkills] = useState(false);

  return (
    <Section className="rounded-lg pt-4 pb-10">
      <div className="px-6 lg:px-20">

        <div className="grid md:grid-cols-2 gap-16 items-start">

          <div>
            <SectionHeading
              title="Skills & Technologies"
              description="A list of the technologies I work with on a daily basis."
            >
              <button
                onClick={() => setShowAllSkills(prev => !prev)}
                className="flex items-center gap-1 text-xs font-medium border border-gray-300
                dark:border-gray-600 rounded-sm px-3 py-1 hover:border-blue-500
                hover:text-blue-500 transition"
              >
                {showAllSkills ? (
                  <>
                    <ChevronUp className="h-3 w-3" /> View Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-3 w-3" /> View More
                  </>
                )}
              </button>
            </SectionHeading>

            <h3 className="font-semibold text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Tech Stack
            </h3>

            {/* Frontend */}
            <h2 className="font-medium mt-2">Frontend</h2>
            <div className="flex flex-wrap gap-2 mb-3">
              {(showAllSkills
                ? skills.filter(s => s.type === "Frontend")
                : skills.filter(s => s.type === "Frontend").slice(0, 4)
              ).map((skill) => (
                <span
                  key={skill.name}
                  className="px-3 py-1 text-xs font-medium border border-green-600 dark:border-gray-600
                  rounded-sm hover:border-blue-500 hover:text-blue-500 transition"
                >
                  {skill.name}
                </span>
              ))}
            </div>

            {/* Expanded */}
            {showAllSkills && (
              <>
                <h2 className="font-medium mt-2">Backend</h2>
                <div className="flex flex-wrap gap-2 mb-3">
                  {skills.filter(s => s.type === "Backend").map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1 text-xs font-medium border border-blue-600 dark:border-gray-600
                      rounded-sm hover:border-blue-500 hover:text-blue-500 transition"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="md:border-l md:border-blue-700/40 md:pl-10">
            <SectionHeading
              title="Work Experience" 
              description="My professional experience and roles." 
            />

            <div className="space-y-6 mt-4">
              {experiences.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-sm font-semibold">
                    {item.role}
                  </span>
                  <span className="text-sm text-blue-400">
                    {item.company}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {item.period}
                  </span>
                  <span className="text-xs text-muted-foreground mt-1">
                    {item.description}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
}
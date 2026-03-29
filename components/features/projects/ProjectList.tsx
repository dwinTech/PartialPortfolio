"use client";

import { useState } from "react";
import { PROJECTS } from "@/constants/project";
import { ProjectCard } from "@/components/common/ProjectCard";
import { Section } from "@/components/common/Section";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function ProjectList() {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const CATEGORIES = ["All", "Websites", "Web App", "Mobile App"];

  // ── Filter by category + search ──
  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory = filter === "All" || project.category === filter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Section className="min-h-screen space-y-8 px-6 mt-10">
      <h1 className="font-semibold text-md tracking-widest text-muted-foreground mb-4">All Projects</h1>
      {/* ── Centered Search bar ── */}
      <div className="flex justify-center mb-10">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="pl-8"
          />
        </div>
      </div>

      {/* ── Category filter buttons ── */}
      <div className="flex justify-center gap-2 mb-10">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            className={`px-3 py-1 text-sm rounded ${
              filter === category
                ? "bg-blue-600 text-white"
                : "border border-gray-300 text-gray-700"
            }`}
            onClick={() => {
              setFilter(category);
              setCurrentPage(1);
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* ── Project grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {currentProjects.length > 0 ? (
          currentProjects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))
        ) : (
          <p className="text-sm text-muted-foreground py-8 col-span-3 text-center">
            No projects found.
          </p>
        )}
      </div>

      {/* ── Pagination with Prev/Next ── */}
      {totalPages > 1 && (
        <div className="flex justify-center space-x-2 mt-10">
          {/* Previous button */}
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded border border-gray-300 text-gray-700 disabled:opacity-50"
          >
            Prev
          </button>

          {/* Page numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`px-3 py-1 rounded ${
                currentPage === page
                  ? "bg-blue-600 text-white"
                  : "border border-gray-300 text-gray-700"
              }`}
              onClick={() => goToPage(page)}
            >
              {page}
            </button>
          ))}

          {/* Next button */}
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded border border-gray-300 text-gray-700 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </Section>
  );
}

import { projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 pb-20 container px-6 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Selected Projects</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A showcase of 3D renders, environments, and assets created with Blender.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

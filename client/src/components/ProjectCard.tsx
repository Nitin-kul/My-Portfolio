import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { ExternalLink, Play } from "lucide-react";
import { useEffect, useRef } from "react";

interface ProjectProps {
  project: {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
    tools: string[];
    isVideo?: boolean;
    videoUrl?: string;
  };
}

export default function ProjectCard({ project }: ProjectProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (project.isVideo && videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay was prevented:", error);
      });
    }
  }, [project.isVideo]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Card className="overflow-hidden border-border bg-card hover:border-primary/50 transition-colors h-full flex flex-col">
        <div className="relative aspect-video overflow-hidden bg-muted">
          {project.isVideo ? (
            <video
              ref={videoRef}
              src={project.videoUrl}
              poster={project.image}
              autoPlay
              muted
              loop
              playsInline
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <span className="text-white font-medium flex items-center gap-2">
              {project.isVideo ? (
                <>Watch Demo <Play className="w-4 h-4 fill-current" /></>
              ) : (
                <>View Detail <ExternalLink className="w-4 h-4" /></>
              )}
            </span>
          </div>
          
          {project.isVideo && (
            <div className="absolute top-2 right-2 bg-primary/90 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
              Video
            </div>
          )}
        </div>
        
        <CardHeader className="p-4 pb-2">
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl font-heading">{project.title}</CardTitle>
            <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
              {project.category}
            </span>
          </div>
        </CardHeader>
        
        <CardContent className="p-4 pt-2 flex-grow">
          <p className="text-muted-foreground text-sm line-clamp-3">
            {project.description}
          </p>
        </CardContent>
        
        <CardFooter className="p-4 pt-0 gap-2 flex-wrap">
          {project.tools.map((tool) => (
            <span 
              key={tool} 
              className="text-xs text-muted-foreground border border-border px-2 py-0.5 rounded-full"
            >
              {tool}
            </span>
          ))}
        </CardFooter>
      </Card>
    </motion.div>
  );
}

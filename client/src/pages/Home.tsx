import { personalInfo, education} from "@/lib/data";
import { Button, buttonVariants } from "@/components/ui/button";
import { Download, GraduationCap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-grid-pattern border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
        
        <div className="container px-6 relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary font-mono mb-4 text-lg tracking-widest uppercase">
              Portfolio_v1.0
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 tracking-tight">
              {personalInfo.name.toUpperCase()}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8 font-light">
              {personalInfo.title}
            </p>
            
            <div className="flex gap-4 justify-center">
              <a href="/Nitin_Kulshrestha_CV.pdf" download>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2 text-lg px-8" >
                  <Download className="w-5 h-5" />
                  Download CV
                </Button>
              </a>
              <Link 
                href="/projects" 
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }), 
                  "gap-2 text-lg px-8 hover:bg-accent hover:text-white cursor-pointer"
                )}
              >
                View Projects <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 container px-6 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          <div>
            <h3 className="text-3xl font-heading font-bold mb-2 text-primary">About Me</h3>
            <div className="h-1 w-20 bg-primary/50" />
          </div>
          <div className="prose prose-invert prose-lg">
            <p className="text-muted-foreground leading-relaxed">
              {personalInfo.about}
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-muted/20 border-y border-border">
        <div className="container px-6 max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-primary/10 rounded-full text-primary">
              <GraduationCap className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-heading font-bold">Education</h3>
          </div>

          <div className="space-y-8 relative pl-8 border-l border-border ml-4">
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-background border-4 border-primary" />
                <div className="bg-card border border-border p-6 rounded-lg hover:border-primary/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                    <h4 className="text-xl font-bold">{edu.degree}</h4>
                    <span className="text-primary font-mono text-sm bg-primary/10 px-3 py-1 rounded-full w-fit">
                      {edu.year}
                    </span>
                  </div>
                  <h5 className="text-lg text-muted-foreground mb-4">{edu.school}</h5>
                  <p className="text-sm text-muted-foreground/80">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

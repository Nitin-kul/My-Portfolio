import { personalInfo } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Github, Linkedin, Instagram, Youtube } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const socialIcons: Record<string, any> = {
    GitHub: Github,
    LinkedIn: Linkedin,
    Instagram: Instagram,
  };

  return (
    <div className="min-h-screen pt-24 pb-20 container px-6 mx-auto flex items-center justify-center">
      <div className="max-w-3xl w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center space-y-12 text-center"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-primary tracking-tight">GET IN TOUCH</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              I'm currently available for freelance work and full-time opportunities. Let's create something extraordinary together.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 w-full">
            <Card className="bg-card/50 border-border hover:border-primary/30 transition-colors">
              <CardContent className="flex flex-col items-center gap-4 p-8">
                <div className="bg-primary/10 p-4 rounded-full text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground text-sm break-all">{personalInfo.email}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border hover:border-primary/30 transition-colors">
              <CardContent className="flex flex-col items-center gap-4 p-8">
                <div className="bg-primary/10 p-4 rounded-full text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-lg mb-1">Phone</h3>
                  <p className="text-muted-foreground text-sm">{personalInfo.phone}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border hover:border-primary/30 transition-colors">
              <CardContent className="flex flex-col items-center gap-4 p-8">
                <div className="bg-primary/10 p-4 rounded-full text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-lg mb-1">Location</h3>
                  <p className="text-muted-foreground text-sm">{personalInfo.location}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="pt-8 border-t border-border w-full">
            <h3 className="text-xl font-heading font-bold mb-6">FOLLOW MY WORK</h3>
            <div className="flex justify-center gap-6">
              {personalInfo.socials.map((social) => {
                const Icon = socialIcons[social.name] || Mail;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className="p-3 bg-muted hover:bg-primary hover:text-white rounded-lg transition-all duration-300 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

import { Link, useLocation } from "wouter";
import { Box, Code, Layers, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [location] = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: Box },
    { name: "Projects", path: "/projects", icon: Layers },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border h-16 flex items-center justify-between px-6 lg:px-12 shadow-md">
      <Link href="/" className="flex items-center gap-2 group">
        <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
          NK
        </div>
        <span className="font-heading font-bold text-xl tracking-wide hidden sm:block text-foreground">
          NITIN KULSHRESTHA
        </span>
      </Link>

      <div className="flex items-center gap-1 sm:gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location === item.path;
          return (
            <Link 
              key={item.path} 
              href={item.path}
              className={cn(
                "px-4 py-2 rounded-md flex items-center gap-2 transition-all duration-200 font-medium text-sm",
                isActive
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

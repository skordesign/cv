import { ScrollProgress } from "@/components/ScrollProgress";
import { TopNav } from "@/components/TopNav";
import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Education } from "@/sections/Education";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { Interests } from "@/sections/Interests";
import { profile } from "@/data/cv";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <ScrollProgress />
      <TopNav />
      <main>
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Interests />
      </main>
      <footer className="border-t border-border/40 px-6 py-10 text-center sm:px-10 lg:px-24">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Last updated {profile.lastUpdated}
        </p>
        <p className="mt-2 text-[11px] text-muted-foreground/70">
          Built with React · Vite · Tailwind · Deployed on Vercel
        </p>
      </footer>
    </div>
  );
}

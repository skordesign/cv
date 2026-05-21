import { Sidebar } from "@/components/Sidebar";
import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Education } from "@/sections/Education";
import { Skills } from "@/sections/Skills";
import { Highlights } from "@/sections/Highlights";
import { Projects } from "@/sections/Projects";
import { Interests } from "@/sections/Interests";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar />
      <main className="lg:ml-72">
        <About />
        <Experience />
        <Education />
        <Skills />
        <Highlights />
        <Projects />
        <Interests />
        <footer className="px-6 py-8 text-center text-xs text-muted-foreground lg:px-16">
          Built with React, Vite, Tailwind, and shadcn/ui · Deployed on Vercel
        </footer>
      </main>
    </div>
  );
}

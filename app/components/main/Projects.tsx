import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
     
        <ProjectCard
          src="/gallery.png"
          title="SEASAFE"
          description="This is a website spreads awareness or information about the bad effects of pollution on marine animals."
        />
     
        <ProjectCard
          src="/quiz.png"
          title="Quiz Website"
          description="This is a website where users can input customized quiz questions and they can easily know the score once they answered it."
        />
        <ProjectCard
          src="/space-web.png"
          title="Space Themed Website"
          description="This is a portfolio which is a space themed"
        />
      </div>
    </div>
  );
};

export default Projects;

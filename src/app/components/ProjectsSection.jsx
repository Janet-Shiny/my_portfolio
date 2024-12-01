"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    // description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["Projects"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Food ordering website",
    // description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["Projects"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Cyber security startup website",
    // description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["Projects"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "View Ai",
    // description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["Projects"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Landing page",
    // description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["Projects"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "music listening website",
    // description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["Projects"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Projects");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="pt-10">
      {/* <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2> */}
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          // onClick={handleTagChange}
          name="Projects"
          isSelected={tag === "Projects"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

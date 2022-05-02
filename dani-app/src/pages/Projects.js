

import ProjectCard from '../components/ProjectCard';
import list from '../data/projects.json';
import React, { useEffect, useState } from "react";
import "../assets/styles/projects.css"
function Projects() {
    const [projectsList, setProjectsList] = useState(list);
    let [projectCard, setProjectCard] = useState([]);
    useEffect(() => {
        setProjectCard(
            projectsList.map(project => { return <ProjectCard project={project} /> })
        )
    })
    return (
        <div className="projectsPage">
            {/* <ProjectList /> */}

        </div>

    )
}

export default Projects;
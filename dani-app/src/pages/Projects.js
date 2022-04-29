
import ProjectsList from '../components/ProjectsList';
import ProjectCard from '../components/ProjectCard';
import list from '../data/projects.json';
import React, { useEffect, useState } from "react";
function Projects() {
    const [projectsList, setProjectsList] = useState(list);
    let [projectCard, setProjectCard] = useState([]);
    useEffect(() => {
        setProjectCard(
            projectsList.map(project => { return <ProjectCard /> })
        )
    })
    return (
        <div>
            {/* <ProjectList /> */}
            1,2,3,
            { }
        </div>

    )
}

export default Projects;
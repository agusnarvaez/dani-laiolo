
import { useParams, Link } from 'react-router-dom'
import list from '../data/projects.json';
import React, { useEffect, useState } from "react";

function Project() {
    const params = useParams();
    const [projectsList, setProjectsList] = useState(list)
    const [projectId, setProjectId] = useState(Number(params.id))
    console.log(projectsList.length);

    var previous;
    var next;



    //let projectId = parseInt(params.id);




    if (params.id > 1) {
        previous = {
            title: "Anterior",
            route: "/projects/" + (projectId - 1)
        };

    } else {
        previous = {
            title: "",
            route: "/"
        };

    }
    if (params.id < projectsList.length) {
        next = {
            title: "Siguiente",
            route: "/projects/" + (projectId + 1)
        };

    } else {
        next = {
            title: "",
            route: ""
        };

    }

    return (
        <div>
            <Link to={previous.route}>{previous.title}</Link>
            <h2>Proyecto {projectId} - {projectsList[projectId - 1].title}</h2>
            <Link to={next.route}>{next.title}</Link>
        </div>

    )
}

export default Project;

import { useParams, Link } from 'react-router-dom'
import projectsList from '../data/projects.json';

function Project() {
    let params = useParams();
    let projectId = parseInt(params.id);

    console.log(projectsList.length);
    let previous;
    let next;
    if (projectId > 1) {
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
    if (projectId < projectsList.length) {
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
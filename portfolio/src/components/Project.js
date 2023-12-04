import {Card, CardActions, CardContent} from "@mui/material";
import './Project.css';
import Button from '@mui/material/Button';
import ProjectLink from "./ProjectLink";

function Project(props) {
    const title = props.project.title;
    const imagePath = props.project.imageLink;
    const description = props.project.description;
    const technologies = props.project.technologies;
    const options = props.project.options;
    const demoLink = props.project.demoLink;
    const githubLink = props.project.githubLink;

    return (
        <Card>
            <div className="card">
                <CardContent className="cardContent">
                    <img
                        src={require('../assets/images/pm-app.png')}
                        alt="Project image"
                        className="projectImage"/>
                    <div>
                        <h2>{title}</h2>
                        <h5>
                            <ul className="cardSubtitle">
                                {technologies.map((technology, index) => (
                                    <li key={index}
                                        className="technologyName">
                                        {technology}
                                    </li>
                                ))}
                            </ul>
                        </h5>
                        <p>{description}</p>
                        <ul className="optionsList">
                            {options.map((option, index) => (
                                <li
                                    key={index}
                                    className="projectOption">
                                    {option}
                                </li>
                            ))}
                        </ul>
                    </div>
                </CardContent>
                <CardActions className="cardActions">
                    <ProjectLink
                        linkHref={demoLink}
                        linkText='Demo'>
                    </ProjectLink>
                    <ProjectLink
                        linkHref={githubLink}
                        linkText='GitHub'>
                    </ProjectLink>
                </CardActions>
            </div>
        </Card>
    )
}

export default Project;

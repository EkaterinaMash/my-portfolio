import {Card, CardActions, CardContent} from "@mui/material";
import './Project.css';
import Button from '@mui/material/Button'

function Project(props) {
    const title = props.project.title;
    const imagePath = props.project.imageLink;
    const description = props.project.description;
    const technologies = props.project.technologies;
    const options = props.project.options;
    const demoLink = props.project.demoLink;
    const githubLink = props.project.githubLink;
    console.log(imagePath);

    return (
        <Card>
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
                    <ul>
                        {options.map((option, index) => (
                            <li key={index}>{option}</li>
                        ))}
                    </ul>
                </div>
            </CardContent>
            <CardActions>
                <Button
                    href={demoLink}
                    variant='text'
                    size='large'
                    className='projectLink'
                    sx={{
                        color: 'whitesmoke',
                        background: 'darkslategray'
                    }}>
                    Demo
                </Button>
                <Button
                    href={githubLink}
                    variant='text'
                    size='large'
                    className='projectLink'>
                    GitHub
                </Button>
            </CardActions>
        </Card>
    )
}

export default Project;

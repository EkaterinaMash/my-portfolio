import {Typography, Container} from "@mui/material";
import ProjectLink from '../project-link/ProjectLink';
import './Home.css';

function Home() {
    return (
        <>
            <section className="homeSection">
                <Typography
                    variant="h1"
                    align="center">
                    Ekaterina Mashinskaia
                </Typography>
                <Typography
                    variant="h4"
                    align="center">
                    Junior Frontend Developer
                </Typography>
                <ProjectLink
                    linkHref=""
                    linkText="My projects">
                </ProjectLink>
            </section>
        </>
    )
}

export default Home;

import Button from "@mui/material/Button";
import {createTheme, styled} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: 'darkslategray',
            hover: 'black'
        }
    },
    typography: {
        linkFont: {
            color: 'whitesmoke'
        }
    }
})

const ProjectLinkk = styled(Button)(({theme}) => ({
    color: theme.palette.primary.main,
    '&:hover': {
        color: 'red'
    }
    })
);

export default function ProjectLink() {
    return <ProjectLinkk/>
}

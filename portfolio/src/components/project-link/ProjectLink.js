import Button from "@mui/material/Button";
import {createTheme, styled, ThemeProvider} from "@mui/material";

const linkTheme = createTheme({
    palette: {
        primary: {
            main: '#04191c',
            light: '#0a4d52',
            contrastText: '#f0f9fa',
        }
    },
    typography: {
        fontWeightRegular: 600
    },
    components: {
        MuiButton: {
            defaultProps: {
                size: 'large'
            }
        }
    }
})

const StyledLink = styled(Button)(({theme}) => ({
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover': {
        background: theme.palette.primary.light
    }
}));

export default function ProjectLink(props) {
    return (
        <ThemeProvider theme={linkTheme}>
            <StyledLink
                href={props.linkHref}>
                {props.linkText}
            </StyledLink>
        </ThemeProvider>
    )
}

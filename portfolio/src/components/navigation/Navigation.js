import {Link} from "@mui/material";

// import './Navigation.css'

function Navigation({isVertical}) {
    const navigationStyle = {
        display: 'flex',
        gap: '2rem',
        flexDirection: isVertical ? 'column' : 'row'
    }
    return (
        <>
            <nav className="navigation"
                 style={navigationStyle}>
                <Link
                    href="#"
                    sx={{
                        color: '#fff'
                    }}>About me</Link>
                <Link href="#"
                      sx={{
                          color: '#fff'
                      }}>My projects</Link>
            </nav>
        </>
    )
}

export default Navigation;

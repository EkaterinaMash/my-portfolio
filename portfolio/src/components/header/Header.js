import {AppBar, Toolbar, IconButton, Menu} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Header.css';
import Navigation from '../navigation/Navigation'
import {useState} from "react";

function Header() {
    const [menuOpened, setMenuOpened] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    function openMenu(event) {
        setMenuOpened(true);
        setAnchorEl(event.currentTarget);
    }

    function closeMenu() {
        setMenuOpened(false);
        setAnchorEl(null);
    }

    return (
        <>
            <AppBar
                position="sticky"
                sx={{
                    backgroundColor: '#03262b'
                }}>
                <Toolbar
                    sx={{
                        gap: '4rem'
                    }}>
                    <IconButton
                        aria-controls="navigation"
                        sx={{
                            display: {sm: 'flex', md: 'none'},
                        }}
                        onClick={openMenu}>
                        <MenuIcon
                            sx={{
                                width: 40,
                                height: 40,
                                color: '#dde9eb'
                            }}/>
                    </IconButton>
                    <Menu
                        id="navigation"
                        open={menuOpened}
                        anchorEl={anchorEl}
                        disableScrollLock
                        sx={{
                            '& .MuiPaper-root': {
                                backgroundColor: '#10444d',
                                width: '15rem',
                                padding: '1rem 1rem 3rem'
                            },
                            '& .MuiList-root': {
                                display: 'grid',
                                padding: 0
                            }
                        }}
                    >
                        <IconButton
                            onClick={closeMenu}
                            sx={{
                                justifySelf: 'end',
                                width: '3rem'
                            }}>
                            <CloseIcon
                                sx={{
                                    color: '#dde9eb'
                                }}/>
                        </IconButton>
                        <Navigation isVertical={true}/>
                    </Menu>

                    <p>Ekaterina Mashinskaia</p>
                    <Toolbar
                        sx={{
                            display: {sm: 'none', md: 'flex'},
                        }}>
                        <Navigation isVertical={false}/>
                    </Toolbar>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header;

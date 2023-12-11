import {AppBar, Link, Toolbar, IconButton, Menu, MenuItem} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Header.css';
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
                    backgroundColor: 'black'
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
                                color: '#fff'
                            }}/>
                    </IconButton>
                    <Menu
                        id="navigation"
                        open={menuOpened}
                        anchorEl={anchorEl}
                    >
                        <IconButton
                            onClick={closeMenu}
                        >
                            <CloseIcon/>
                        </IconButton>
                        <MenuItem>About me</MenuItem>
                        <MenuItem>My projects</MenuItem>
                    </Menu>

                    <p>Ekaterina Mashinskaia</p>
                    <Toolbar
                        sx={{
                            display: {sm: 'none', md: 'flex'},
                            gap: '2rem',
                        }}>
                        <Link
                            href="#"
                            sx={{
                                color: '#fff'
                            }}>About me</Link>
                        <Link href="#"
                              sx={{
                                  color: '#fff'
                              }}>My projects</Link>
                    </Toolbar>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header;

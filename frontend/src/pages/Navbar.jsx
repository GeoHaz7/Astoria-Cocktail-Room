import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { ListItemText } from '@mui/material';

const drawerWidth = 240;
const navItems = ['Home', 'Photos', 'About'];
const navItemsLink = ['', 'photos', 'about'];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Pages
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, i) => (
          <ListItem key={item} disablePadding>
            <Link
              style={{ textDecoration: 'none', color: '#000' }}
              to={`/${navItemsLink[i]}`}
            >
              <ListItemButton
                sx={{
                  flexGrow: 1,
                  textAlign: 'center',
                }}
              >
                <ListItemText primary={item} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="sticky" component="nav">
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{
              fontFamily: 'serif',
              flexGrow: 1,
              display: { xs: 'block', sm: 'block' },
              m: 1,
            }}
          >
            Astoria Cocktail Room
          </Typography>
          {/* <Box
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' }, m: 1 }}
          >
            <img src={logo} alt="logo" height="100vh" />
          </Box> */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item, i) => (
              <Button key={item} sx={{ color: '#fff' }}>
                <Link
                  style={{ textDecoration: 'none', color: '#FFF' }}
                  to={`/${navItemsLink[i]}`}
                >
                  {item}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor="right"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Navbar;

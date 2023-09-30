import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { RxGithubLogo } from "react-icons/rx";
import { FaFacebookF } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { BsFillFilePdfFill } from "react-icons/bs";
import styles from "../assets/css/AppBar.module.css";
import pdf from "../assets/pdf/Cv Ouali Mohammed.pdf";
import { NavLink } from "react-router-dom";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "About", "Blog", "Contact"];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Ouali Mohammed
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item}
            disablePadding
            className="d-flex flex-column align-items-center "
          >
            <ListItemButton sx={{ textAlign: "center" }}>
              <NavLink
                to={`#${item}`}
                className="btn btn-none text-white text-center "
              >
                {item}
              </NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" className="bg-dark">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <span className={styles.hover_title}>Ouali Mohammed</span>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                href={`#${item}`}
                sx={{ color: "#fff" }}
                className={styles.hover_title}
              >
                {item}
              </Button>
            ))}
          </Box>
          <div
            className="border border-1 mx-1"
            style={{ height: "25px" }}
          ></div>
          <Button
            target="_blank"
            sx={{ color: "#000000" }}
            href="https://github.com/mhmdouali06"
            className={`${styles.hover_title} bg-white mx-3`}
          >
            <RxGithubLogo />
          </Button>
          <Button
            sx={{ color: "#fff" }}
            href="https://www.linkedin.com/in/mohammed-ouali-24240b1aa/"
            target="_blank"
            className={`${styles.hover_title} bg-primary me-3`}
          >
            <AiFillLinkedin />
          </Button>
          <Button
            sx={{ color: "#fff" }}
            href={pdf}
            target="_blank"
            className={`${styles.hover_title} bg-danger`}
          >
            <BsFillFilePdfFill />
          </Button>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main">
        <Toolbar />
      </Box>
    </Box>
  );
}

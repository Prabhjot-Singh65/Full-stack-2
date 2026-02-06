import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  Box,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  LinearProgress,
  Avatar,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import GradeIcon from "@mui/icons-material/Grade";
import NotificationsIcon from "@mui/icons-material/Notifications";

import { useState } from "react";

const drawerWidth = 220;
const appBarHeight = 64; // default MUI AppBar height

export default function StudentDashboard() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const drawerContent = (
    <Box>
      <Toolbar />
      <List>
        <ListItem button>
          <ListItemIcon><PersonIcon /></ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>

        <ListItem button>
          <ListItemIcon><MenuBookIcon /></ListItemIcon>
          <ListItemText primary="Courses" />
        </ListItem>

        <ListItem button>
          <ListItemIcon><CheckCircleIcon /></ListItemIcon>
          <ListItemText primary="Attendance" />
        </ListItem>

        <ListItem button>
          <ListItemIcon><GradeIcon /></ListItemIcon>
          <ListItemText primary="Results" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      
      {/* APP BAR */}
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setMobileOpen(true)}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Student Dashboard
          </Typography>

          <NotificationsIcon />
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            top: appBarHeight,
            height: `calc(100% - ${appBarHeight}px)`,
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* DESKTOP DRAWER */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>

      {/* MAIN CONTENT */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        {/* PROFILE */}
        <Card sx={{ mb: 3 }}>
          <CardContent sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Avatar sx={{ width: 56, height: 56 }}>S</Avatar>
            <Box>
              <Typography variant="h6">Prabhjot Singh</Typography>
              <Typography color="text.secondary">
                B.Tech CSE – Semester 6
              </Typography>
            </Box>
          </CardContent>
        </Card>

        {/* STATS */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography>Courses</Typography>
                <Typography variant="h4">6</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography>CGPA</Typography>
                <Typography variant="h4">8.4</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography>Credits</Typography>
                <Typography variant="h4">124</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography>Attendance</Typography>
                <Typography variant="h4">92%</Typography>
                <LinearProgress value={92} variant="determinate" />
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* NOTICE BOARD */}
        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Typography variant="h6">Notice Board</Typography>
            <Typography>• Internal exams start from 10 March</Typography>
            <Typography>• Project submission on Friday</Typography>
            <Typography>• Workshop on Cloud Computing</Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

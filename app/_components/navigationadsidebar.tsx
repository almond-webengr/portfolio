"use client";

import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Toolbar,
  Typography,
} from "@mui/material";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import MenuIcon from "@mui/icons-material/Menu";
import CoffeeIcon from "@mui/icons-material/Coffee";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

// メニュー型
type MenuItem = {
  name: string;
  url: string;
  icon: React.ReactNode;
};

// メニュー定義
const menuList: MenuItem[] = [
  { name: "ホーム", url: "/Home", icon: <BeachAccessIcon /> },
  { name: "制作物", url: "/Production", icon: <CoffeeIcon /> },
];

const NavigationAndSideBar = () => {
  // メニュー幅
  const drawerWidth = 240;

  // メニュー遷移
  const pathname = usePathname();
  const isSelected = (url: string) => {
    return pathname === url || pathname.startsWith(url + "/");
  };

  // スマホ用 Drawer の開閉
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  // PC・スマホ
  const DrawerContent = (
    <Box sx={{ overflow: "auto" }}>
      <List>
        {menuList.map(({ name, url, icon }) => (
          <ListItem key={name} disablePadding>
            <ListItemButton
              selected={isSelected(url)}
              onClick={toggleDrawer(false)}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <Link
                href={url}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {name}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap component="div">
            ポートフォリオ
          </Typography>
        </Toolbar>
      </AppBar>

      {/* スマホ用 Drawer */}
      <Drawer
        variant="temporary"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        {DrawerContent}
      </Drawer>

      {/* PC用 Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        {DrawerContent}
      </Drawer>
    </>
  );
};

export default NavigationAndSideBar;
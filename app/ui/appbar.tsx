"use client";

import { AppBar, Avatar, Box, Toolbar } from "@mui/material";
export default function Appbar() {
  return (
    <AppBar sx={{width: 1024, border:'none',}} color="inherit">
        <Toolbar sx={{display:'flex', justifyContent:'flex-end', border: 'none'}}>
          <Box sx={{
            border: 'ThreeDShadow',
          }}>
          <Avatar src="/img-avatar.png" alt="foto de perfil" />
          </Box>
        </Toolbar>
    </AppBar>
  );
}

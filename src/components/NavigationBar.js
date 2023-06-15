import React, { useState } from 'react';
import { Link } from "react-router-dom"
import { AppBar, Toolbar, IconButton, Typography, Dialog } from "@mui/material"
import { ShoppingCart, Person } from "@mui/icons-material"

const NavigationBar = () => {
  const [isCartDialogOpen, setIsCartDialogOpen] = useState(false)
  const isLoggedIn = true // Replace with your authentication logic

  const handleOpenCartDialog = () => {
    setIsCartDialogOpen(true)
  }

  const handleCloseCartDialog = () => {
    setIsCartDialogOpen(false)
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/">
          Education
        </Typography>
        <IconButton sx={{ ml: 'auto' }} onClick={handleOpenCartDialog}>
          <ShoppingCart />
        </IconButton>
        <IconButton component={Link} to="/courses">
          <Person />
        </IconButton>
        {!isLoggedIn ? (
          <Typography variant="h6" component={Link} to="/login">
            Login
          </Typography>
        ) : (
          <IconButton>
            <Person />
          </IconButton>
        )}
      </Toolbar>
      <Dialog open={isCartDialogOpen} onClose={handleCloseCartDialog}>
        {/* Insert cart dialog content here */}
      </Dialog>
    </AppBar>
  )
}

export default NavigationBar
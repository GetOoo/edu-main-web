import React, { useState } from 'react';
// import { useHistory } from "react-router-dom"
import { Paper, Typography, TextField, Button, Box } from "@mui/material"
import { saveAccount } from './api';

const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  // const history = useHistory()

  const handleToggleSignUp = () => {
    setIsSignUp((prev) => !prev)
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value)
  }

  const handleSubmit = async (event) => {
    if(isSignUp) {
      if(username && password &&  confirmPassword && password === confirmPassword) {
        const params = {
          name: username,
          tel: password
        }
        console.log(JSON.stringify(params));
        saveAccount(params).then(
          response => response.json()
        ).then(data => console.log(data))
        .catch(error => console.error(error));
      }

    } else {

    }
    event.preventDefault()
    // TODO: Add authentication logic here
    // history.push("/home")
  }

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>
        {isSignUp ? "Sign up" : "Login"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          variant="outlined"
          margin="normal"
          fullWidth
          value={username}
          onChange={handleUsernameChange}
        />
        <TextField
          label="Password"
          variant="outlined"
          margin="normal"
          fullWidth
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        {isSignUp && (
          <TextField
            label="Confirm Password"
            variant="outlined"
            margin="normal"
            fullWidth
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        )}
        <Box sx={{ mt: 2 }}>
          <Button type="submit" variant="contained" fullWidth>
            {isSignUp ? "Sign up" : "Login"}
          </Button>
        </Box>
      </form>
      <Box sx={{ mt: 2 }}>
        <Typography align="center">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <Button onClick={handleToggleSignUp} color="primary">
            {isSignUp ? "Login" : "Sign up"}
          </Button>
        </Typography>
      </Box>
    </Paper>
  )
}

export default LoginPage
import React, { useEffect, useState } from 'react';
// import { useHistory } from "react-router-dom"
import { Paper, Typography, TextField, Button, Box, Alert } from "@mui/material"
import { saveAccount } from './api';

const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [showAlert, setShowAlert] = useState(false)
  const [alertSeverity, setAlertSeverity] = useState("info")
  const [alertMsg, setAlertMsg] = useState("")


  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);
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
    if (isSignUp) {
      console.log(1);
      if (username && password && confirmPassword && password === confirmPassword) {
        const params = {
          username: username,
          password: password
        }
        console.log(JSON.stringify(params));
        saveAccount(params).then(
          response => {
            console.log(JSON.stringify(response))
            setShowAlert(true);
            setAlertSeverity("success");
            setAlertMsg("Success")
          }
        ).catch(error => {
          setShowAlert(true);
          setAlertSeverity("error");
          setAlertMsg(error);
        });
      } else {
        console.log(2);
        setShowAlert(true);
        setAlertSeverity("warning");
        setAlertMsg("Input Error");
      }
    }
    event.preventDefault()
  }

  const checkUserExist = async () => {
    
  }

  return (
    <Paper sx={{ p: 2 }}>
      {showAlert && <Alert severity={alertSeverity}>{alertMsg}</Alert>}
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
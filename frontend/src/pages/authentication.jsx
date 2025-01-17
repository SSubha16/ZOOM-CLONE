import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../contexts/AuthContext';
import { Snackbar } from '@mui/material';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';



// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Authentication() {

  const routeTo = useNavigate();

  const [username , setUsername] = React.useState();
  const [password , setPassword] = React.useState();
  const [name , setName] = React.useState();
  const [error , setError] = React.useState();
  const [message , setMessage] = React.useState();

  const [formState , setFormState] = React.useState(0);
  const [open , setOpen] = React.useState(false);

  const  {handleRegister , handleLogin} = React.useContext(AuthContext);

  let handleAuth = async () => {
    try{
      if(formState === 0){

        let result = await handleLogin(username, password)
        
      }
      if(formState === 1){
         let result = await handleRegister(name , username , password);
         console.log(result);
         setUsername("");
         setMessage(result);
         setOpen(true);
         setError("");
         setFormState(0);
         setPassword("");
      }
    }catch (err){
       let message = (err.response.data.message);
       setError(message);
    }
  }

  return (
    
    <ThemeProvider theme={defaultTheme}>
        <Grid item="true" xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar  sx={{ m: 1, bgcolor: 'secondary.main' }}>
               <IconButton onClick={() => {
                    routeTo("/")
                 }}>
                   <HomeIcon />
               </IconButton>
            </Avatar>
             
             <div>
                <Button variant={formState === 0 ? "contained" : ""} onClick={() => {setFormState(0)}}>
                   Sign In 
                </Button>

                <Button variant={formState === 1 ? "contained" : ""} onClick={() => {setFormState(1)}}>
                   Sign Up
                </Button>
             </div>

            <Box component="form" noValidate sx={{ mt: 1 }}>

              { formState === 1 ? <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Full Name"
                name="name"
                value={name}               
                autoFocus
                onChange={(e) => setName(e.target.value)}
              /> : <></>}
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                value={username}
                autoFocus
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />

             <p style={{color: "red"}}>{error}</p>

              <Button
                type="button"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleAuth}
              >
              {formState === 0 ? "Log In" : "Register"}  
              </Button>
     
             </Box>
          </Box>
        </Grid>
              
      <Snackbar

         open={open}
         autoHideDuration={4000}
         message={message}
      />
       
    </ThemeProvider>
    
  
  );
}


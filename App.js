import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './App.scss';

const App = () => {
  return (
    <Box>
      <div className='container_white'>
        <div className='container_padding'>
          <h3 className='container_title'>Welcome!!</h3>
          <p className='container_para'>Choose Basic option</p>
          <div className='input_card'>
            <TextField
              className='input'
              id='filled-basic'
              label='Email'
              variant='outlined'
            />
            <TextField
              className='input'
              id='filled-basic'
              label='Password'
              variant='outlined'
            />

          </div>

          <div className='line'>
            <p className='line_para'>or Choose any one</p>

          </div>

          <div className='social_card'>
            <GoogleIcon className='google'/>
            <FacebookIcon className='google'/>
            <AppleIcon className='google'/>
          </div>
          <Box >
            <Stack mt={5} direction="row" display='flex' justifyContent='center' alignItems='flex-end' spacing={2}>
              <Button variant="outlined" onClick={() => {(alert('clicked on login'))}}>Login</Button>
              <Button variant="outlined" onClick={() => {(alert('clicked on signup'))}}>Signup</Button>
            </Stack>
          </Box>
          

        </div>
      </div>
    </Box>
    
  )
}

export default App
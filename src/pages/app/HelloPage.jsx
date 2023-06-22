import { AppBar, Box, Button, Chip, IconButton, Paper, Stack, TextField, Toolbar, Typography } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { app } from '../../config/app';
import useUIStore from '../../stores/uiStore';

const HelloPage = () => {
  const [ { systemTheme }, actions] = useUIStore();

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h4' sx={{ flexGrow: 1 }}>
            {app('APP_NAME')}
          </Typography>
          <Button color="warning" onClick={() => actions.setSystemTheme(systemTheme == 'light' ? 'dark' : 'light')}>Theme</Button>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          p: 1
        }}
      >
        <Typography variant='h1'>This is variant=&apos;h1&apos;</Typography>
        <Typography variant='h2'>This is variant=&apos;h2&apos;</Typography>
        <Typography variant='h3'>This is variant=&apos;h3&apos;</Typography>
        <Typography variant='h4'>This is variant=&apos;h4&apos;</Typography>
        <Typography variant='h5'>This is variant=&apos;h5&apos;</Typography>
        <Typography variant='h6'>This is variant=&apos;h6&apos;</Typography>
        <Typography>This is variant=&apos;default&apos;</Typography>
        <Stack  direction='column' spacing={1}>
          <Button color='primary'>Primary</Button>
          <Button color='secondary'>Secondary</Button>
          <Button color='success'>Success</Button>
          <Button color='info'>Info</Button>
          <Button color='warning'>Warning</Button>
          <Button color='error'>Error</Button>
        </Stack>
        <Stack  direction='column' spacing={1} mt={1}>
          <TextField 
            label='TextField'
          />
          <Chip color="warning" label="Chip" />
        </Stack>
      </Box>

    </Box>
  );
}

export default HelloPage;

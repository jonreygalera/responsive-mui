import { AppBar, Box, Button, IconButton, Paper, Stack, TextField, Toolbar, Typography } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const HelloPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="secondary">Login</Button>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Typography variant='h1'>This is variant=&apos;h1&apos;</Typography>
        <Typography variant='h2'>This is variant=&apos;h2&apos;</Typography>
        <Typography variant='h3'>This is variant=&apos;h3&apos;</Typography>
        <Typography variant='h4'>This is variant=&apos;h4&apos;</Typography>
        <Typography variant='h5'>This is variant=&apos;h5&apos;</Typography>
        <Typography variant='h6'>This is variant=&apos;h6&apos;</Typography>
        <Stack  direction='column' spacing={1}>
          <Button color='primary'>Primary</Button>
          <Button color='secondary'>Secondary</Button>
          <Button color='success'>Success</Button>
          <Button color='info'>Info</Button>
          <Button color='warning'>Warning</Button>
          <Button color='error'>Error</Button>
        </Stack>
      </Box>

    </Box>
  );
}

export default HelloPage;

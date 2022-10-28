import React from 'react';
import Typography from '@mui/joy/Typography';
import { Button, CssVarsProvider, Sheet, Link, TextField } from '@mui/joy';
import ModeToggle from '../ModeToggle/ModeToggle';

export default function LoginPart(props) {
  return (
    <CssVarsProvider>
      <main>
        <ModeToggle />
        <Sheet
          sx={{
            width: 300,
            mx: 'auto', // margin left & right
            my: 4, // margin top & botom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
        >
          <div>
            <Typography level="h4" component="h1">
              Welcome!
            </Typography>
            <Typography level="body2">Sign in to continue.</Typography>
          </div>
          <div>
            <TextField
              // html input attribute
              name="email"
              type="email"
              placeholder="johndoe@email.com"
              // pass down to FormLabel as children
              label="Email"
            />
            <TextField
              name="password"
              type="password"
              placeholder="password"
              label="Password"
            />
          </div>
            <Button sx={{ mt: 1 /* margin top */ }}>
              Log in
            </Button>
            <Typography
              endDecorator={<Link href="/sign-up">Sign up</Link>}
              fontSize="sm"
              sx={{ alignSelf: 'center' }}
            >
              Don't have an account?
            </Typography>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}
LoginPart.propTypes = {};

LoginPart.defaultProps = {};
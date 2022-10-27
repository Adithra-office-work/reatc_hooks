import logo from './logo.svg';
import './App.css';
import SimpleForm from './components/simpleForm/simpleForm';
import { Button, CssVarsProvider, Sheet } from '@mui/joy';
import Typography from '@mui/joy/Typography';

function App() {
  return (
    <div>
      <CssVarsProvider>
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

        </Sheet>
      </CssVarsProvider>
    </div>
  );
}

export default App;

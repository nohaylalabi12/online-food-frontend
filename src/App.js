import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/Navbar/Navbar';
import { ThemeProvider } from '@mui/material/styles'; // Correction de l'importation de ThemeProvider
import { darkTheme } from './Theme/DarkTheme';
import { CssBaseline } from '@mui/material';
import Home from './component/Navbar/Home/Home';
import RestaurantDetails from './component/Restaurant/RestaurantDetails';
import Cart from './component/Cart/Cart';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline></CssBaseline>
     <Navbar/>
    {/*<Home/>*/ } 
   {/*<RestaurantDetails/>*/}
    { /*<Cart></Cart>*/}
    <profile></profile>
    </ThemeProvider>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/Navbar/Navbar';
import { ThemeProvider } from '@mui/material/styles'; // Correction de l'importation de ThemeProvider
import { darkTheme } from './Theme/DarkTheme';
import { CssBaseline } from '@mui/material';
import Home from './component/Navbar/Home/Home';
import RestaurantDetails from './component/Restaurant/RestaurantDetails';
import Cart from './component/Cart/Cart';
import Profil from './component/Profil/Profil';
import CustomerRouter from './Routers/CustomerRouter';


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline></CssBaseline>
     {/*<Navbar/>*/} 
    {/*<Home/>*/ } 
   {/*<RestaurantDetails/>*/}
    { /*<Cart></Cart>*/}
    {/*<Profil></Profil>*/}
    <CustomerRouter></CustomerRouter>
    
     
    </ThemeProvider>
  );
}

export default App;

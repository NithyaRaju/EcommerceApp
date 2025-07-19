import './App.css';
import HomeScreen from './Screens/Home/HomeScreen';
import ProductsScreen from './Screens/Products/ProductsScreen';
import SubscribeScreen from './Screens/Subscribe/SubscribeScreen';
import OffersScreen from './Screens/Offers/OffersScreen';
import BestSellerScreen from './Screens/BestSeller/BestSellerScreen';
import SocialFollowupScreen from './Screens/SocialFollowup/SocialFollowupScreen';
import FooterScreen from './Screens/Footer/FooterScreen';

function App() {
  return (
    <div className="App">
     <HomeScreen/>
     <ProductsScreen/>
     <SubscribeScreen/>
     <OffersScreen/>
     <BestSellerScreen/>
     <SocialFollowupScreen/>
     <FooterScreen/>
    </div>
  );
}

export default App;

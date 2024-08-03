// import Home from './components/Home/Home';
import Subnavbar from "./components/Subnavbar/Subnavbar";
import { AllRoutes } from "./Routes/Routes";
import { Popup } from "./components/Popup/Popup";
import Offer from "./components/OfferDeal/Offer";

function App() {
  return (
    <div className="App">
      <Popup />
      {/* <Offer/> */}
      <AllRoutes />
    </div>
  );
}

export default App;

import Header from "./containers/Header";
import ProductListing from './containers/ProductListing'
import ProductDetails from './containers/ProductDetails'
import { BrowserRouter,Route,Routes } from "react-router-dom";
function App() {
  return (
    <div className="font-Bai ">
      <BrowserRouter>
       <Header/>
          <Routes>
            <Route path="/" element={<ProductListing/>}/>
            <Route path="/product/:productId" element={<ProductDetails/>}/>
            <Route>404 Not found!</Route>
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;

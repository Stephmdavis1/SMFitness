import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TrainingPrograms from "./Pages/TrainingPrograms";
import AboutMe from "./Pages/AboutMe";
import Freebies from "./Pages/Freebies";
import Newsletter from "./Pages/Newsletter";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import ContactMe from "./Pages/ContactMe";
import Home from "./Pages/Home";
import Terms from "./Pages/Terms";
import Privacy from "./Pages/Privacy";
import Success from "./Pages/Success";
import Cancel from "./Pages/Cancel";
import TrainingProgramsContextProvider from "./Context/TrainingProgramsContext";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


function App() {


  return (
    <>
    <PayPalScriptProvider options={{"client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID}}>
    <TrainingProgramsContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/trainingprograms" element={<TrainingPrograms />} />
          <Route path="/Freebies" element={<Freebies />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/contactme" element={<ContactMe />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />

        </Routes>
      </BrowserRouter>
      </TrainingProgramsContextProvider>
      </PayPalScriptProvider>
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./components/Header.js";
import { ChakraProvider } from "@chakra-ui/react";
import Landing from "./components/Landing.js"
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import HomePage from './components/HomePage';
import BookingForm from './components/BookingForm';
// import { AlertProvider } from "./context/alertContext";

function App() {
  return (
    <ChakraProvider>
      <Router>
      {/* <AlertProvider> */}
        <main>
          <Routes>
            <Route path="/"element={<HomePage/>}></Route>
            <Route path="/booking" element={<BookingForm/>}></Route>
          </Routes>
        </main>
      {/* </AlertProvider> */}
      </Router>
    </ChakraProvider>
  );
}

export default App;

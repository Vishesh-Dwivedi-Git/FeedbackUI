import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "./components/Header";
import "./index.css";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import Post from "./components/Post";
import { FeedbackProvider } from "./context/FeedbackContext";
import Footer from "./components/Footer.jsx";

function App() {
 //using params for multiple page
  return (
    <FeedbackProvider>
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm  />
                <FeedbackStats  />
                <FeedbackList  />
              </>
            }
          />
        
          <Route path="/about" element={<AboutPage />} />
          <Route path="/post/*" element={<Post/>}/>    
        </Routes>
        <AboutIconLink/>
      </div>
      <Footer/>
    </Router>
    </FeedbackProvider>
  );
}

export default App;

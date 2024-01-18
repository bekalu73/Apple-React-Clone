import React from "react";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import SectionOne from "./Components/SectionOne/SectionOne";
import SectionTwo from "./Components/SectionTwo/SectionTwo";
import RowOne from "./Components/RowOne/RowOne";
import RowTwo from "./Components/RowTwo/RowTwo";
import Footer from "./Components/Footer/Footer";
import Youtube from "./Components/YouTube/YouTube";

// // const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
//   const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9`;

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <SectionOne />
      <SectionTwo />
      <RowOne />
      <RowTwo />
      <Youtube />
      <Footer />
    </div>
  );
}

export default App;

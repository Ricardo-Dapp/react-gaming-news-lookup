import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import NewsCard from "./components/NewsCard";

function App() {
  const [newsArray, SetNewsArray] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a628d50938msh222c8877954209fp19a154jsn2a3d1df8c826",
        "X-RapidAPI-Host": "gamings.p.rapidapi.com",
      },
    };

    fetch("https://gamings.p.rapidapi.com/news", options)
      .then((response) => response.json())
      .then((response) => {
        SetNewsArray(response);
        console.log(response);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <Navbar />

      <h1>Today's Top Stories</h1>

      {newsArray.map((news) => {
        return (
          <NewsCard
            heading={news.Heading}
            image={news.Image}
            body={news.Body}
          />
        );
      })}
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Home from "./Components/Home";

function App() {
  const [news, setNews] = React.useState<any>([]);

  const getNews = async () => {
    await fetch(`https://newsapi.org/v2/top-headlines?country=ua&apiKey=${process.env.REACT_APP_NEWS_API}`)
      .then((response) => response.json())
      .then((data) => setNews(data.articles));
  };
  React.useEffect(() => {
    getNews();
    console.log(news);
  }, []);

  return (
    <div className="App">
      <h1>Новости Украины из newsapi</h1>
      <Home news={news} />
    </div>
  );
}

export default App;

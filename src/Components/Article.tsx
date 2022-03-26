import React from "react";
import "../App.css";

const Article = ({ news }: any) => {
  return (
    <div className="article__wrapper__wrapper">
      {news.map((item: any) => (
        <div className="article__wrapper">
          <img className="article__image" src={item.urlToImage} alt="article" />
          <div className="article__info">
            <div className="article__source">{item.source.name}</div>
            <div className="article__author">{item.author}</div>
          </div>
          <div className="article__description">{item.description}</div>
          <div className="article__readMore">
            <p>
              <a href={item.url} target="_blank" rel="noreferrer">
                Перейти на сайт
              </a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Article;

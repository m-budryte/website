import React from "react";
import "./articlesSection.css";
import laptop from "./articleImages/laptop.jpg";
import baton from "./articleImages/baton.png";
import kartoshka from "./articleImages/kartoshka.jpg";
import party from './party.jpeg'
import { Parallax } from 'react-parallax'

class ArticlesSection extends React.Component {
  render() {
    return (<Parallax bgImage={party}>
      <div className="articlesSection">
        <h5 style={{ color: `lightblue` }}>2020</h5>
        <div className="articlesBox">
          <div className="articleLink">
            <a href="https://www.thoughtworks.com/insights/blog/its-more-just-pronoun">
              <img src={laptop} alt="laptop" />
              <p className="title">It's more than just a pronoun</p>
              <p className="publisher">ThoughtWorks</p>
            </a>
          </div>
          <div className="articleLink">
            <a href="https://www.wonderzine.com/wonderzine/health/food/253537-vredny-li-proteinovye-batony">
              <img src={baton} alt="protein bar" />
              <p className="title">
                Волшебные палочки: Полезны ли протеиновые батончики на самом
                деле
              </p>
              <p className="publisher">Wonderzine</p>
            </a>
          </div>
          <div className="articleLink">
            <a href="https://www.wonderzine.com/wonderzine/health/food/253159-demonizatsiya-kartoshki">
              <img src={kartoshka} alt="potato" />
              <p className="title">
                Овощ с плохой репутацией: Почему не стоит демонизировать
                картошку
              </p>
              <p className="publisher">Wonderzine</p>
            </a>
          </div>
        </div>
      </div>
      </Parallax>
    );
  }
}

export default ArticlesSection;

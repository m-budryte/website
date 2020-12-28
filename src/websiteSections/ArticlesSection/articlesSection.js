import React from "react";
import "./articlesSection.css";
import laptop from "./articleImages/laptop.jpg";
import baton from "./articleImages/baton.png";
import kartoshka from "./articleImages/kartoshka.jpg";

class ArticlesSection extends React.Component {
  render() {
    return (
      <div>
        <p>Top articles published to date:</p>
        <h5>2020</h5>
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
              Волшебные палочки: Полезны ли протеиновые батончики на самом деле
            </p>
            <p className="publisher">Wonderzine</p>
          </a>
        </div>
        <div className="articleLink">
          <a href="https://www.wonderzine.com/wonderzine/health/food/253159-demonizatsiya-kartoshki">
            <img src={kartoshka} alt="potato" />
            <p className="title">
              Овощ с плохой репутацией: Почему не стоит демонизировать картошку
            </p>
            <p className="publisher">Wonderzine</p>
          </a>
        </div>
        <h5>2019</h5>
        <p>
          <a
            className="articleLink"
            href="https://www.wonderzine.com/wonderzine/health/food/244701-soup-myths"
          >
            Разоблачение супа: Почему здоровый рацион возможен и без него
          </a>
        </p>
      </div>
    );
  }
}

export default ArticlesSection;

import React from 'react';
import './articlesSection.css'
class ArticlesSection extends React.Component {
    render() {
        return (
            <div>
                <p>Top articles published to date:</p>
                <h5>2020</h5>
                <p><a className="articleLink" href="https://www.thoughtworks.com/insights/blog/its-more-just-pronoun">It's more than just a pronoun </a></p>
                <p><a className="articleLink" href="https://www.wonderzine.com/wonderzine/health/food/253537-vredny-li-proteinovye-batony">Волшебные палочки: Полезны ли протеиновые
батончики на самом деле </a></p>
<p><a className="articleLink" href="https://www.wonderzine.com/wonderzine/health/food/253159-demonizatsiya-kartoshki">Овощ с плохой репутацией: Почему не стоит демонизировать картошку
 </a></p>
 <h5>2019</h5>
 <p><a className="articleLink" href="https://www.wonderzine.com/wonderzine/health/food/244701-soup-myths">Разоблачение супа:
Почему здоровый рацион возможен и без него
 </a></p>
            </div>
        );
    }
}

export default ArticlesSection;
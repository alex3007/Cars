import React from 'react';
import Item from './Item/Item';
import cls from './Items.module.css';
import rio from '../../assets/images/models/rio.png'
import ceed from '../../assets/images/models/ceed.png'
import sportage from '../../assets/images/models/sportage.png'

export default class Items extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: [{
                id: 1,
                model: 'Rio',
                descriptionRU: 'в рейтинге самых популярных авто в Беларуси в 2019г.',
                descriptionENG: ' is the most popular car in Belarus in 2019.',
                cost: '12 000',
                image: <img src={rio}/>
            }
                , {
                    id: 2,
                    model: 'Ceed',
                    descriptionRU: 'подчеркнет ваш статус и принесет удовольствие от жизни. Он вам точно подойдет! ',
                    descriptionENG: 'will underline your status and bring pleasure of life. It is definitely for you! ',
                    cost: '16 000',
                    image: <img src={ceed}/>
                },
                {
                    id: 3,
                    model: 'Sportage',
                    descriptionRU: '- идеальный автомобиль для насыщенного и динамичного образа жизни.',
                    descriptionENG: ' is the best car for dynamic style of life.',
                    cost: '20 000',
                    image: <img src={sportage}/>
                }]
        }
    }

    render() {
        let lang = this.props.lang;
        let autoItems = this.state.cars.map(m =>
            <Item key={m.id}
                  model={m.model}
                  description={lang === 'eng' ? m.descriptionENG : m.descriptionRU}
                  image={m.image} cost={m.cost}
                  lang={lang}/>);
        return (
            <section id="models" className="page space">
                <div className="modelsContainer text-center">
                    <div className={cls.autoContainer}>
                        <div className={cls.autoItems}>
                            <h1>{lang === 'eng' ? 'KIA models' : 'Модели KIA'}</h1>
                            {autoItems}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
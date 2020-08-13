import React from 'react';
import Item from './Item/Item';
import cls from './Items.module.css'

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
                image: 'https://www.kia.by/cache/imagecache/rw960--rh550--file-media-modelImages-virtual360ModelImages-rio-fieryred-KiaRio_Environment_fieryred_00027.png'
            }
                , {
                    id: 2,
                    model: 'Ceed',
                    descriptionRU: 'подчеркнет ваш статус и принесет удовольствие от жизни. Он вам точно подойдет! ',
                    descriptionENG: 'will underline your status and bring pleasure of life. It is definitely for you! ',
                    cost: '16 000',
                    image: 'https://www.kia.by/cache/imagecache/rw960--rh550--file-media-modelImages-virtual360ModelImages-ceed_new-lunar_silver-kia~ceed~cd5drmy19~csslunarsilver~17a_0014.png'
                },
                {
                    id: 3,
                    model: 'Sportage',
                    descriptionRU: '- идеальный автомобиль для насыщенного и динамичного образа жизни.',
                    descriptionENG: ' is the best car for dynamic style of life.',
                    cost: '20 000',
                    image: 'https://www.kia.by/media/modelImages/virtual360ModelImages/sportage%20FL/lunarsilver/kia-sportage-qlpegtlinemy19-csslunarsilver-19_0015.png'
                }]
        }
    }

    render() {
        let lang = this.props.lang;
        let autoItems = this.state.cars.map(m =>
            <Item key={m.id}
                     model = {m.model}
                     description = {lang === 'eng'? m.descriptionENG : m.descriptionRU }
                     image = {m.image} cost={m.cost}
                     lang = {lang}/>);
        return (
            <div className={cls.autoContainer}>
                <div className={cls.autoItems}>
                    <h1>{lang === 'eng'?'KIA models':'Модели KIA'}</h1>
                    {autoItems}
                </div>
            </div>
        )
    }
}
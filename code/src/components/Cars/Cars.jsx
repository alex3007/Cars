import React from 'react';
import CarItem from './CarItem/CarItem';
import cls from './Cars.module.css'

export default class Cars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: [{
                id: 1,
                model: 'KIA Rio',
                description: 'в рейтинге самых популярных авто в Беларуси в 2019г.',
                cost: '12 000',
                image: 'https://www.kia.by/cache/imagecache/rw960--rh550--file-media-modelImages-virtual360ModelImages-rio-fieryred-KiaRio_Environment_fieryred_00027.png'
            }
                , {
                    id: 2,
                    model: 'KIA Ceed',
                    description: 'подчеркнет ваш статус и принесет удовольствие от жизни. Он вам точно подойдет! ',
                    cost: '16 000',
                    image: 'https://www.kia.by/cache/imagecache/rw960--rh550--file-media-modelImages-virtual360ModelImages-ceed_new-lunar_silver-kia~ceed~cd5drmy19~csslunarsilver~17a_0014.png'
                },
                {
                    id: 3,
                    model: 'KIA Sportage',
                    description: '- идеальный автомобиль для насыщенного и динамичного образа жизни.',
                    cost: '20 000',
                    image: 'https://www.kia.by/media/modelImages/virtual360ModelImages/sportage%20FL/lunarsilver/kia-sportage-qlpegtlinemy19-csslunarsilver-19_0015.png'
                }]
        }
    }

    render() {
        let autoItems = this.state.cars.map(m =>
            <CarItem key={m.id}
                     model={m.model}
                     description={m.description}
                     image={m.image} cost={m.cost}/>);
        return (
            <div className={cls.autoContainer}>
                <div className={cls.autoItems}>
                    <h1>Автомобили KIA</h1>
                    {autoItems}
                </div>
            </div>
        )
    }
}
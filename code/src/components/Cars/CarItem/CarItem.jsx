import React from 'react';
import cls from './CarItem.module.sass';
import s from './CarItem.module.css';

const CarItem = (props) => {
    let name = props.model;
    let description = props.description;
    let image = props.image;
    let cost = props.cost;
    return (
        <div className={cls.productContainer}>
            <div className={cls.productCard}>

                <div className={cls.cardImg}>
                    <img src={image}/>
                </div>

                <div className={cls.cardInfo}>

                    <h2 className={cls.name}>
                        {name}
                    </h2>
                    <h3 className={cls.price}>${cost}</h3>
                    <span className={cls.rating}>
        <i className='fa fa-star'></i>
        <i className='fa fa-star'></i>
        <i className='fa fa-star'></i>
        <i className='fa fa-star'></i>
        <i className='fa fa-star'></i>
      </span>
                    <p></p>
                </div>

                <div className={cls.cardDescription}>
                    <p><b className={cls.title}>{name}</b> {description} </p>

                    <div className={cls.prodCtaOrder}>
                        <h4 className={cls.ctaText}>
                            Описание
                        </h4>
                    </div>

                </div>

            </div>
        </div>
    )

};
export default CarItem;

import React from 'react';
import cls from './Item.module.sass';

const Item = (props) => {
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
                        KIA <br/> {name}
                    </h2>
                    <h3 className={cls.price}>
                        ${cost}
                    </h3>
                    <span className={cls.rating}>
                      <i className='fa fa-star'/>
                      <i className='fa fa-star'/>
                      <i className='fa fa-star'/>
                      <i className='fa fa-star'/>
                      <i className='fa fa-star'/>
                    </span>
                </div>
                <div className={cls.cardDescription}>
                    <p className={cls.descriptionText}>
                        <b className={cls.title}>{name}</b> {description}
                    </p>
                    <div className={cls.prodAction}>
                        <p className={cls.actionTitle}>
                            {props.lang === 'eng'? 'Gift' : 'Подарок'}
                            <i className='fa fa-gift'/>
                        </p>
                        <p className={cls.actionText}>
                            {props.lang === 'eng'? 'Winter tires are for every purchaser':
                                'Зимние шины каждому покупателю'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )

};
export default Item;

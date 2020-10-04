import React from 'react';
import servThree from "../../assets/images/car-wash.jpg";
import servOne from "../../assets/images/car-sell.jpg";
import servTwo from "../../assets/images/car-service.jpg";
import Service from "./Service/Service";


export default class Services extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            services: [{
                id: 1,
                serviceRu: 'Продажа Автомобилей',
                serviceEng: 'Car sales',
                descriptionRU: 'Выгодные предложения, индивидуальный подход ',
                descriptionENG: ' Best deals, an individual approach',
                image: <img src={servOne} alt="serv"/>
            }
                , {
                    id: 2,
                    serviceRu: 'Сервисное обслуживание',
                    serviceEng: 'Car servicing',
                    descriptionRU: ' Качественное обслуживание, оригинальные расходники',
                    descriptionENG: ' High-quality service, original consumables',
                    image: <img src={servTwo} alt="serv"/>
                },
                {
                    id: 3,
                    serviceRu: 'Мойка автомобилей',
                    serviceEng: 'Car washing',
                    descriptionRU: 'Быстрая мойка автомобиля и чистка салона',
                    descriptionENG: ' Fast car washing and salon cleaning',
                    image: <img src={servThree} alt="serv"/>
                }]
        }
    }

    render() {
        let lang = this.props.lang;
        let serviceItems = this.state.services.map(m =>
            <Service key={m.id}
                     service={lang === 'eng' ? m.serviceENG : m.serviceRU}
                     description={lang === 'eng' ? m.descriptionENG : m.descriptionRU}
                     image={m.image}
                     lang={lang}/>);
        return (
            <section id="services" className="page space">
                <div className="container text-center">
                    <div className="heading">
                        <h2>{lang === 'eng' ? 'Our Services' : 'Наш сервис'}</h2>

                        <p>{lang === 'eng' ? 'Only high-quality service for each client' :
                            'Только качественное обслуживание для каждого клиента'}</p>
                    </div>
                    <div className="row services-list">
                        {serviceItems}
                    </div>
                </div>
            </section>


        )
    }
}


import React from 'react';

const Contacts = (props) => {
    return (
        <section id="contact" className="content-section form contact light space">
            <div className="contactContainer">
                <div className="container">
                    <div className="content cover text-center">
                        <div className="heading">
                            <h2>{props.lang === 'ru' ? 'Обратня связь' : 'Getting in touch'}</h2>
                        </div>
                        <div className="row">
                            <span id="message"></span>

                            <form target="#" name="contact">


                    <span className="input-group">
                        <i className="fa fa-user"></i>
                        <input type="text" name="contactName" id="contactName" className="lg" placeholder={props.lang === 'ru' ? 'Имя' : 'Name'}/>
                    </span>

                                <span className="input-group">
                        <i className="fa fa-envelope"></i>
                        <input type="text" name="contactEmail" id="contactAddress" className="lg"
                               placeholder={props.lang === 'ru' ? 'Почта' : 'Email'}/>
                    </span>

                                <span className="input-group">
                        <i className="fa fa-book"></i>
                        <input type="text" name="contactSubject" id="contactSubject" className="lg"
                               placeholder={props.lang === 'ru' ? 'Тема' : 'Subject'}/>
                    </span>

                                <span className="input-group">
                        <textarea name="contactMessage" id="contactMessage" className="lg"
                                  placeholder={props.lang === 'ru' ? 'Ваши пожелания...' : 'What\'s on your mind?'}/>
                    </span>

                                <span className="input-group">
                    	<button className="submit" id="submit_contact" data-loading-text="SENDING...">{props.lang === 'ru' ? 'ОТПРАВИТЬ' : 'SEND'}</button>
                    </span>

                            </form>
                        </div>

                    </div>
                    <span id="message_sent"><i className="fa-check fa"></i></span>
                </div>
            </div>

        </section>

    );
};

export default Contacts;

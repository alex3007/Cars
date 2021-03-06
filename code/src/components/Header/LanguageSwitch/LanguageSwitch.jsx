import React from 'react';

const LanguageSwitch = (props) => {

    return (
        <div className="langArea">
                <span className="langBtn">
                    <p onClick={props.onChooseRu}
                       className={props.lang === "ru" && "active"}
                    >RU</p></span>
                <span className=" text-center langBtn">
                    <p onClick={props.onChooseEng}
                       className={props.lang === "eng" && "active"}
                    >EN</p>
                </span>
        </div>
    )
};

export default LanguageSwitch;

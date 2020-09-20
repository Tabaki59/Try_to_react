import React from 'react'
import Picture from './Photo.png';

/*Главный стиль для левого блока*/
const PersonInformationStyle = {
    backgroundColor: "#0a184c",
    marginRight: "2%",
    width: "29%",
    height: "100%"
}

/*Стили фотки с подписью*/
const PhotoStyle = {
    float: "left",
    borderRadius: "320px", /* Радиус скругления */
    boxShadow: "0 0 0 3px white, 0 0 13px #333" /* Параметры теней */
}
const PhotoContainerStyle = {
    marginLeft: "5%",
    marginTop: "3%",
    marginBottom: "7%",
    color: "white"
}
const NameStyle= {
    paddingLeft: "47%",
    paddingTop: "10%",
    fontFamily: "ProximaNovaCond,Arial,sans-serif",
    fontSize: "36px"
}

/*Стиль заголовков*/
const TittlesStyle = {
    textAlign: "center",
    marginLeft: "5%",
    marginTop: "3%",
    color: "white"
}

export default function LeftPanel() {
    return(
        <div className="LeftPanel" style={PersonInformationStyle}>
            <figure style={PhotoContainerStyle}>
            <img src={Picture} alt="" style={PhotoStyle}/>
                <figcaption style={NameStyle}>Петухов Александр Сергеевич</figcaption>  {/*  TODO Все утолкать в Json'ы и сделать переключатель языка*/}
            </figure>
            <hr width="90%" align="center" size="2" color="white"/>
            <h1 style={TittlesStyle}>Образование</h1>  {/*TODO Все утолкать в Json'ы и сделать переключатель языка*/}
            <hr width="90%" align="center" size="2" color="white"/>
            Заглушка
            {/*TODO контент об образовании*/}
            <hr width="90%" align="center" size="2" color="white"/>
            <h1 style={TittlesStyle}>Контакты</h1> {/* TODO Все утолкать в Json'ы и сделать переключатель языка*/}
            <hr width="90%" align="center" size="2" color="white"/>
            Заглушка
            {/*TODO контент со связью*/}
        </div>
        )
}
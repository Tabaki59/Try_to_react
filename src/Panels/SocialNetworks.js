import React from 'react';
import $ from "jquery";
import twitter from './icons/twitter.png';

const Icon_style ={
    height:"15%",
    left:"10px",
    top:"5px",
    position:"relative"
}

export default function SocialNetworks(){

    /*Функция убегающего твиттера*/
    function running_twitter() {
        $("#Twitter").mouseover(function () {
            /*Кешируем селектор в переменной для двойного обращения*/
            var $SocialNetworks = $('.SocialNetworks');
            var dWidth = $SocialNetworks.width()/2 - $(this).width(),
                dHeight = $SocialNetworks.height()/2 - $(this).height(),
                nextX = Math.floor(Math.random() * dWidth),
                nextY = Math.floor(Math.random() * dHeight);
            $(this).animate(
            { left: nextX + 'px', top: nextY + 'px' }, 700
            );
        });
    }

    /*Функция возврата твиттера домой*/
    function running_base_twitter() {
        $("#Twitter").mouseout(function () {
            $(this).animate({
                top: 5, left: 10
            });
        });
    }

    return(
        <a href="https://twitter.com/Tabaki59">
        <img id="Twitter" src={twitter} alt="" style={Icon_style}
             onMouseOver={running_twitter}
             onMouseOut={running_base_twitter}
            />
        </a>
    )
}
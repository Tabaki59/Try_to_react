import React from 'react';
import $ from "jquery";
import twitter from './icons/twitter.png';

const Icon_style ={
    height:"15%",
    width:"15%",
    position:"relative"
}

export default function SocialNetworks(){

    /*Функция убегающего твиттера*/
    function running_twitter() {
        $("#Twitter").mouseover(function () {
            $(this).animate({
                top: Math.random() * 200
            }, 100);
            $(this).animate({
                left: Math.random() * 200
            }, 100);
        });
    }

    /*Функция возврата твиттера домой*/
    function running_base_twitter() {
        $("#Twitter").mouseout(function () {
            $(this).animate({
                top: 0
            }, 100);
            $(this).animate({
                left: 0
            }, 100);
        });
    }

    return(
        <img id="Twitter" src={twitter} alt="" style={Icon_style} onMouseOver={running_twitter} onMouseOut={running_base_twitter}/>
    )
}
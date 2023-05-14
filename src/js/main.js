import './slider';
import forms from './modules/forms';
import modals from './modules/modals';
import tabs from './modules/tabs';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import image from './modules/images';


///Отвечает за то, что скирпты начинают выполняться тлько тогда, когда DOM структурв на стр будет готова.///

window.addEventListener('DOMContentLoaded', () => {
    'use strict'
    let deadline = '2023-06-20';
    let modalState = {};

     changeModalState(modalState);
    modals();
    tabs('.glazing_slider ', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    forms(modalState);
    timer('.container', deadline);
    image();

   

});
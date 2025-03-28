import { initAccordion } from "./js/accordion.js";
import { initSwiper } from "./js/swiper.js";
import { initVideo } from "./js/player.js";
import { initBurgerMenu } from "./js/burger-menu.js";

document.addEventListener("DOMContentLoaded", () => {
    initAccordion();
    initSwiper();
    initVideo();
    initBurgerMenu();

    const input = document.querySelector("#phone");
    if (input) {
        window.intlTelInput(input, {
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
            separateDialCode: true,
            preferredCountries: ['us', 'gb', 'ua'],
            initialCountry: 'auto',
            geoIpLookup: function (callback) {
                fetch('https://ipapi.co/json/')
                    .then(res => res.json())
                    .then(data => callback(data.country_code))
                    .catch(() => callback('us'));
            }
        });
    }
});
import './bootstrap';
import {createApp} from "vue";
import App from "./src/App.vue"
import Router from "./src/router/router.js";

// Css Styles
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/font-awesome.min.css";
import "../../public/assets/css/elegant-icons.css";
import "../../public/assets/css/nice-select.css";
import "../../public/assets/css/jquery-ui.min.css";
import "../../public/assets/css/owl.carousel.min.css";
import "../../public/assets/css/slicknav.min.css";
import "../../public/assets/css/style.css";
// Js Plugins
// import "../../public/assets/js/bootstrap.min.js";
import "../../public/assets/js/jquery-3.3.1.min.js";
import "../../public/assets/js/jquery.nice-select.min.js";
import "../../public/assets/js/jquery-ui.min.js";
import "../../public/assets/js/jquery.slicknav.js";
import "../../public/assets/js/mixitup.min.js";
import "../../public/assets/js/owl.carousel.min.js";
import "../../public/assets/js/main.js";

createApp(App)
    .use(Router)
    .mount('#app');

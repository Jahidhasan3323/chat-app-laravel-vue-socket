require('./bootstrap');
window.Vue = require('vue').default;

import VueSocketIO from 'vue-socket.io'
Vue.use(new VueSocketIO({
    debug: true,
    // connection: 'http://localhost:3001',
    connection: 'https://shuvo.biswasoxygen.com',
    // options: { path: "/" } //Optional options
}))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('chat', require('./components/Chat.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});




import locale from 'element-ui/lib/locale/lang/ru-RU'

import ElementUI from 'element-ui';
import TrendChart from "vue-trend-chart";
import VueClipboard from 'vue-clipboard2'
 
import Vue from 'vue';
import { mapActions } from 'vuex'

import App from '~/App';
import {router} from '~/router';
import store from '~/store';



Vue.use(TrendChart);
Vue.use(ElementUI, { locale })
Vue.use(VueClipboard);


(async () => {

  Vue.mixin({
    methods: {
      getMethod(method, data){
        return this.requestApi({ url: 'front/' + method, data, method: 'GET'});
      },
      postMethod(method, data){
        return this.requestApi({ url: 'front/' + method, data});
      },

      ...mapActions([
        'requestApi',
        // 'setMessages'
      ])
    }
  });

  new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),

    async created() {
      
    },
    mounted() {
      
    },
  });

})();
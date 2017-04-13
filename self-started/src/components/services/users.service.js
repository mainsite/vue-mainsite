//jshint esversion:6
import Vue from 'vue';

export default {
    getUsers(callback) {
        Vue.http.get('/api/testget')
            .then(res => callback(res.body))
            .catch(res => console.log(res));
    }
};

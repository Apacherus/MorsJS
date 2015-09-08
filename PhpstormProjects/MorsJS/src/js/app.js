/**
 * Created by Vladimir Kudryavtsev on 05.09.2015.
 * (c) V.K. ozver@live.ru
 */
var messagesList;
var message;
document.addEventListener('DOMContentLoaded', function(){

    Vue.component('message', {
        // declare the props
        props: ['msg'],
        // the prop can be used inside templates, and will also
        // be set as `this.msg`
        template: '<li>Its a <strong>{{text}}</strong>!{{msg}}</li>'
    });

    messagesList = new Vue({
        el:'.test',
        data:{
            title:'Messages',
            messages:[
                {
                    text:"test"
                },
                {
                    text:"best"
                },
                {
                    text:"west"
                }
            ]
        }
    });

});

var newNode = function(){
    messagesList = new Vue({
        el:'.test2',
        data:{
            title:'Messages',
            messages:[
                {
                    text:"test"
                },
                {
                    text:"best"
                },
                {
                    text:"west"
                }
            ]
        }
    });
};


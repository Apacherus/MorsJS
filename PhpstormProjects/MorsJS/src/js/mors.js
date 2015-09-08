/**
 * Created by Vladimir Kudryavtsev on 31.08.2015.
 * (c) V.K. ozver@live.ru
 */
;'use strict';
/**
 * Chrome debugging
 */
typeof console.time == "function" ? console.time("MorsJS init"):0;
~function(){

    var Mors = {

        classList: [],

        init: function(){
            window.Mors = Mors;

            var arr = [];
            var maxLen = 999999;//99999999;
            for(var x = 0; x < maxLen; x++){
                arr.push(0<<1);
            }

            Mors.arr = arr;

            if (!("watch" in Object.prototype)) {
                Object.defineProperty(Object.prototype, "watch", {
                    value: function (prop, handler) {
                        Object.defineProperty(this, prop, {
                            get: function () {
                                return this["__" + prop];
                            },
                            set: function (val) {
                                this["__" + prop] = val;
                                typeof handler == "function" ? handler.call(this, prop, val) : 0;
                            }
                        });
                    }
                });

                /**
                 * Remove watch listener
                 * TODO: not working (Windows 8.1, Chrome)
                 */
                Object.defineProperty(Object.prototype, "unwatch",{
                    value: function(prop){
                        var val = this[prop];
                        delete this[prop];//FIXME: here catch error
                        this[prop] = val;
                    }
                });
            }



            /**
             * Chrome debugging
             */
            typeof console.timeEnd == "function" ? console.timeEnd("MorsJS init"):0;
        },

        Class: function(classname, data){
            var DOMLink = Mors.getElementsByAttribute('data-mors-class', classname);
            if(typeof data == "undefined"){
                data = null;
            }
            var modelData = {
                classname:classname,
                data:data,
                DOMElements:DOMLink
            };
            Mors.classList.push(modelData);
            return modelData;
        },

        renderClass: function(modelData){
            if(modelData.data !== null) {
                for(var field in modelData.data){

                }
            }

            //var regExp = /\{\{(*)\}\}/gmi;
        },

        renderPage: function(){

            var user = Mors.Class('User',{
                name:"Vova",
                age:"24"
            });

        },

        getElementsByAttribute: function(attr, value){
            /**
             * Originally write by kevinfahy
             **/
            var matchingElements = [];
            var allElements = document.getElementsByTagName('*');
            for(var i = 0; i < allElements.length; i++){
                var attributeValue = allElements[i].getAttribute(attr);
                if(attributeValue !== null){
                    if(typeof value != "undefined") {
                        if(value == attributeValue){
                            matchingElements.push(allElements[i]);
                        }
                    } else {
                        matchingElements.push(allElements[i]);
                    }
                }
            }
            return matchingElements;
        }
    };

    Mors.init();

}();
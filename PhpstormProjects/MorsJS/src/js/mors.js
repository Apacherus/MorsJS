/**
 * Created by Vladimir Kudryavtsev on 31.08.2015.
 * (c) V.K. ozver@live.ru
 */
'use strict';
(function(){

    var Mors = {

        classList: [],

        init: function(){
            window.Mors = Mors;
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

            var regExp = /\{\{(*)\}\}/gmi;
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
             */
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
        },

        getElementsByMorsClass: function(classname){
            var elements = Mors.getElementsByAttribute('data-mors-class');
            //for(var)
        }
    };

    Mors.init();

})();
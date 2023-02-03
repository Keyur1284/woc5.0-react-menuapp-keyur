(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){var n=a(73).initializeApp,r=a(16),o=r.getAuth,c=r.GoogleAuthProvider,i=r.GithubAuthProvider,l=a(36).getFirestore,s=n({apiKey:"AIzaSyDoZdmx5Qi2POZiLmeFtdS8keAq0z_Aipk",authDomain:"kiwi-foods.firebaseapp.com",projectId:"kiwi-foods",storageBucket:"kiwi-foods.appspot.com",messagingSenderId:"480850970962",appId:"1:480850970962:web:1b5c4f8be14e1b50df528b",measurementId:"G-E73SJBRCTN"});t.auth=o(s),t.googleProvider=new c,t.githubProvider=new i,t.db=l(s)},28:function(e,t,a){},63:function(e,t,a){e.exports=a(79)},70:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(44),c=a.n(o),i=(a(70),a(28),a(15)),l=a(0),s=a(11),u=a(21),m=a(37),h=function(){var e=Object(m.a)(u.auth),t=Object(s.a)(e,1)[0],a=Object(l.m)();return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("a",{href:"https://github.com/Keyur1284/woc5.0-react-menuapp-keyur",target:"_blank"},r.a.createElement("img",{src:"https://i.pinimg.com/474x/13/4f/1e/134f1e4c68ac8dd76cbbb05dcc445e8e--kiwi-branding.jpg",alt:"logo",className:"rounded-circle m-2",style:{height:"50px",width:"50px"}})),r.a.createElement(i.b,{className:"navbar-brand",to:"/"},"KIWI FOODS"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link","aria-current":"page",to:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link","aria-current":"page",to:"/food"},"All Items")),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdownMenuLink",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},"Meals"),r.a.createElement("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink"},r.a.createElement("li",null,r.a.createElement(i.b,{className:"dropdown-item",to:"/food/breakfast"},"Breakfast")),r.a.createElement("li",null,r.a.createElement(i.b,{className:"dropdown-item",to:"/food/lunch"},"Lunch")),r.a.createElement("li",null,r.a.createElement(i.b,{className:"dropdown-item",to:"/food/dinner"},"Dinner")))),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdownMenuLink",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},"Veg/Non-Veg"),r.a.createElement("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink"},r.a.createElement("li",null,r.a.createElement(i.b,{className:"dropdown-item",to:"/food/veg"},"Veg")),r.a.createElement("li",null,r.a.createElement(i.b,{className:"dropdown-item",to:"/food/nonveg"},"Non-Veg")))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link","aria-current":"page",to:"/about-us"},"About Us"))),t?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"text-white m-3"},t.displayName),r.a.createElement(i.b,{to:"/profile"},r.a.createElement("img",{src:t.photoURL||"https://live.staticflickr.com/5694/30494157195_47f0c84c03_b.jpg",alt:"profile",width:"50px",height:"50px",className:"rounded-circle me-3"})),r.a.createElement(i.b,{to:"/"},r.a.createElement("button",{className:"btn btn-outline-danger",type:"submit",onClick:function(){return u.auth.signOut()}},"Sign Out"))):r.a.createElement("button",{className:"btn btn-success",type:"submit",onClick:function(){return a("/login")}},"Login"))))},f=function(){return r.a.createElement("div",{className:"imagehome"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col d-flex justify-content-center"},r.a.createElement("h1",{className:"display-1 rounded-3 p-2",style:{textShadow:"1px 1px #11303F",backgroundColor:"white",opacity:"75%",color:"#11303F",marginTop:"170px"}},"Welcome to Kiwi Foods!"))),r.a.createElement("div",{className:"col d-flex justify-content-center"},r.a.createElement("h1",{className:"display-6 rounded-3 p-2",style:{textShadow:"1px 1px #11303F",backgroundColor:"white",opacity:"75%",color:"#11303F",marginTop:"0px"}},"Select the type of food that you want to eat")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col d-flex justify-content-center"},r.a.createElement(i.b,{to:"/food",className:"foodbutton mx-2 mt-2"},"Any"),r.a.createElement(i.b,{to:"/food/veg",className:"foodbutton mx-2 mt-2"},"Vegetarian"),r.a.createElement(i.b,{to:"/food/nonveg",className:"foodbutton mx-2 mt-2"},"Non-Vegetarian"),r.a.createElement(i.b,{to:"/food/breakfast",className:"foodbutton mt-2"},"Breakfast"),r.a.createElement(i.b,{to:"/food/lunch",className:"foodbutton mx-2 mt-2"},"Lunch"),r.a.createElement(i.b,{to:"/food/dinner",className:"foodbutton mx-2 mt-2"},"Dinner"))),r.a.createElement("div",null,r.a.createElement("div",{className:"row  mt-5"},r.a.createElement("div",{className:"col pizza d-flex justify-content-center",style:{height:"160px"}},r.a.createElement("img",{src:"https://freesvg.org/img/1548611293.png",alt:"pizza"})),r.a.createElement("div",{className:"col fastfood d-flex justify-content-center",style:{height:"185px"}},r.a.createElement("img",{src:"https://freesvg.org/img/Gerald-G-Fast-Food-Breakfast-FF-Menu-3.png",alt:"fastfood"})),r.a.createElement("div",{className:"col fastfood d-flex justify-content-center",style:{height:"170px"}},r.a.createElement("img",{src:"https://freesvg.org/img/Halloween-Donut.png",alt:"fastfood"})),r.a.createElement("div",{className:"col burger d-flex justify-content-center",style:{height:"150px"}},r.a.createElement("img",{src:"https://repository-images.githubusercontent.com/456213451/a2e3f991-942f-4dbc-8fe2-0b1b1aa2ed33",alt:"burger"}))))))},d=a(2),p=a(36);function g(){g=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n=Object.defineProperty||function(e,t,a){e[t]=a.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",c=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function l(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(S){l=function(e,t,a){return e[t]=a}}function s(e,t,a,r){var o=t&&t.prototype instanceof h?t:h,c=Object.create(o.prototype),i=new j(r||[]);return n(c,"_invoke",{value:x(e,a,i)}),c}function u(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(S){return{type:"throw",arg:S}}}e.wrap=s;var m={};function h(){}function f(){}function d(){}var p={};l(p,o,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(O([])));y&&y!==t&&a.call(y,o)&&(p=y);var b=d.prototype=h.prototype=Object.create(p);function E(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function w(e,t){var r;n(this,"_invoke",{value:function(n,o){function c(){return new t(function(r,c){!function n(r,o,c,i){var l=u(e[r],e,o);if("throw"!==l.type){var s=l.arg,m=s.value;return m&&"object"==typeof m&&a.call(m,"__await")?t.resolve(m.__await).then(function(e){n("next",e,c,i)},function(e){n("throw",e,c,i)}):t.resolve(m).then(function(e){s.value=e,c(s)},function(e){return n("throw",e,c,i)})}i(l.arg)}(n,o,r,c)})}return r=r?r.then(c,c):c()}})}function x(e,t,a){var n="suspendedStart";return function(r,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw o;return _()}for(a.method=r,a.arg=o;;){var c=a.delegate;if(c){var i=N(c,a);if(i){if(i===m)continue;return i}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var l=u(e,t,a);if("normal"===l.type){if(n=a.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(n="completed",a.method="throw",a.arg=l.arg)}}}function N(e,t){var a=t.method,n=e.iterator[a];if(void 0===n)return t.delegate=null,"throw"===a&&e.iterator.return&&(t.method="return",t.arg=void 0,N(e,t),"throw"===t.method)||"return"!==a&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+a+"' method")),m;var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,m;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function O(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:_}}function _(){return{value:void 0,done:!0}}return f.prototype=d,n(b,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:f,configurable:!0}),f.displayName=l(d,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,l(e,i,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},E(w.prototype),l(w.prototype,c,function(){return this}),e.AsyncIterator=w,e.async=function(t,a,n,r,o){void 0===o&&(o=Promise);var c=new w(s(t,a,n,r),o);return e.isGeneratorFunction(a)?c:c.next().then(function(e){return e.done?e.value:c.next()})},E(b),l(b,i,"Generator"),l(b,o,function(){return this}),l(b,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),a=[];for(var n in t)a.push(n);return a.reverse(),function e(){for(;a.length;){var n=a.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=O,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return c.type="throw",c.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],c=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=a.call(o,"catchLoc"),l=a.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),L(a),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;L(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:O(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),m}},e}var v=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),o=a[0],c=a[1],i=Object(p.collection)(u.db,"food"),l=function(){var e=Object(d.a)(g().mark(function e(t){var a,n;return g().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.getDocs)(i);case 2:a=e.sent,n=a.docs.map(function(e){return e.data()}),"veg"===t?n=n.filter(function(e){return!0===e.eatable}):"nonveg"===t?n=n.filter(function(e){return!1===e.eatable}):"breakfast"===t?n=n.filter(function(e){return"Breakfast"===e.type}):"lunch"===t?n=n.filter(function(e){return"Lunch"===e.type}):"dinner"===t&&(n=n.filter(function(e){return"Dinner"===e.type})),console.log(t,n.filter(function(e){return"Dinner"===e.type})),c(n);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){l(e.type)},[e]),r.a.createElement("div",{className:"justify-content-start row row-cols-1 bg-dark row-cols-md-3 g-1 m-0 p-0"},o.sort(function(e,t){return t.rating-e.rating}).map(function(e,t){return r.a.createElement("div",{className:"col",key:t},r.a.createElement("div",{className:"card foodcard w-100 h-100 text-start bg-dark text-white m-2 p-5"},r.a.createElement("img",{src:e.image,className:"card-img-top w-100",style:{height:"300px"},alt:e.name}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title display-6"},e.name),r.a.createElement("h6",{className:"card-text display-6"},"Price: ",e.price),r.a.createElement("h6",{className:"card-text",style:{height:"175px",marginTop:"55px"}},"Description: ",e.description),r.a.createElement("h6",{className:"card-text"},"Food type: ",e.eatable?"Vegetarian":"Non-vegetarian",", ",e.type),r.a.createElement("h6",{className:"card-text rating rounded-3"},"Rating: ",e.rating,"/10"),r.a.createElement("a",{className:"btn btn-info",href:e.video,target:"_blank"},"Recipe video"))))}))},y=a(16),b=a(45),E=a.n(b),w=a(38),x=a.n(w);function N(){N=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n=Object.defineProperty||function(e,t,a){e[t]=a.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",c=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function l(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(S){l=function(e,t,a){return e[t]=a}}function s(e,t,a,r){var o=t&&t.prototype instanceof h?t:h,c=Object.create(o.prototype),i=new j(r||[]);return n(c,"_invoke",{value:w(e,a,i)}),c}function u(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(S){return{type:"throw",arg:S}}}e.wrap=s;var m={};function h(){}function f(){}function d(){}var p={};l(p,o,function(){return this});var g=Object.getPrototypeOf,v=g&&g(g(O([])));v&&v!==t&&a.call(v,o)&&(p=v);var y=d.prototype=h.prototype=Object.create(p);function b(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var r;n(this,"_invoke",{value:function(n,o){function c(){return new t(function(r,c){!function n(r,o,c,i){var l=u(e[r],e,o);if("throw"!==l.type){var s=l.arg,m=s.value;return m&&"object"==typeof m&&a.call(m,"__await")?t.resolve(m.__await).then(function(e){n("next",e,c,i)},function(e){n("throw",e,c,i)}):t.resolve(m).then(function(e){s.value=e,c(s)},function(e){return n("throw",e,c,i)})}i(l.arg)}(n,o,r,c)})}return r=r?r.then(c,c):c()}})}function w(e,t,a){var n="suspendedStart";return function(r,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw o;return _()}for(a.method=r,a.arg=o;;){var c=a.delegate;if(c){var i=x(c,a);if(i){if(i===m)continue;return i}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var l=u(e,t,a);if("normal"===l.type){if(n=a.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(n="completed",a.method="throw",a.arg=l.arg)}}}function x(e,t){var a=t.method,n=e.iterator[a];if(void 0===n)return t.delegate=null,"throw"===a&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==a&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+a+"' method")),m;var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,m;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function O(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:_}}function _(){return{value:void 0,done:!0}}return f.prototype=d,n(y,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:f,configurable:!0}),f.displayName=l(d,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,l(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(E.prototype),l(E.prototype,c,function(){return this}),e.AsyncIterator=E,e.async=function(t,a,n,r,o){void 0===o&&(o=Promise);var c=new E(s(t,a,n,r),o);return e.isGeneratorFunction(a)?c:c.next().then(function(e){return e.done?e.value:c.next()})},b(y),l(y,i,"Generator"),l(y,o,function(){return this}),l(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),a=[];for(var n in t)a.push(n);return a.reverse(),function e(){for(;a.length;){var n=a.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=O,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return c.type="throw",c.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],c=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=a.call(o,"catchLoc"),l=a.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),L(a),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;L(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:O(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),m}},e}var k=function(){var e=Object(l.m)(),t=function(){var t=Object(d.a)(N().mark(function t(){var a;return N().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(y.signInWithPopup)(u.auth,u.googleProvider);case 2:a=t.sent,console.log(a),e("/");case 5:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),a=function(){var t=Object(d.a)(N().mark(function t(){var a;return N().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(y.signInWithPopup)(u.auth,u.githubProvider);case 2:a=t.sent,console.log(a),e("/");case 5:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"container mt-1 text-white",style:{height:"100vh"}},r.a.createElement("p",{className:"display-3"},"Sign in with Google to continue"),r.a.createElement("button",{onClick:t,className:"btn btn-light foodcard"}," ",r.a.createElement(E.a,null)," Sign in with Google"),r.a.createElement("p",{className:"display-5 mt-4"},"Or"),r.a.createElement("p",{className:"display-3"},"Sign in with Github to continue"),r.a.createElement("button",{onClick:a,className:"btn btn-light foodcard"}," ",r.a.createElement(x.a,null),"  Sign in with Github"))},L=function(){return r.a.createElement("div",{className:"keyur justify-content-center"},r.a.createElement("div",{className:"row p-2"},r.a.createElement("div",{className:"col rounded-3",style:{marginTop:"170px",color:"#012e45",backgroundColor:"white",opacity:"70%",height:"300px",width:"900px"}},r.a.createElement("h1",{className:"display-1 mt-2"},"Welcome to Kiwi Foods!"),r.a.createElement("p",{className:"lead"},"We are here to help you find the best food recipes for your daily needs."),r.a.createElement("p",{className:"lead"},"We have a wide variety of recipes for you to choose from."),r.a.createElement("p",{className:"lead"},"We have recipes for breakfast, lunch and dinner."),r.a.createElement("p",{className:"lead"},"We have recipes for both vegetarians and non-vegetarians."))))},j=function(){var e=Object(m.a)(u.auth),t=Object(s.a)(e,1)[0],a=Object(l.m)();return r.a.createElement("div",{className:"container text-white",style:{height:"100vh"}},r.a.createElement("h1",{className:"display-1 text-center"},"Profile"),r.a.createElement("div",{className:"row mt-5 d-flex justify-content-start"},r.a.createElement("div",{className:"col-4  d-flex justify-content-start"},r.a.createElement("img",{src:t.photoURL,alt:"profile",className:"rounded-circle"})),r.a.createElement("div",{className:"col-8  d-flex justify-content-end"},r.a.createElement("div",{className:"m-5 p-2 align-items-start d-flex test text-white"},r.a.createElement("p",{className:"display-6"},"Name: ",t.displayName),r.a.createElement("p",{className:"display-6"},"Email: ",t.email),r.a.createElement("p",{className:"display-6"},"Phone: ",Math.ceil(99999999999*Math.random()%1e10)),r.a.createElement("p",{className:"display-6"},"Orders: ",Math.ceil(1e3*Math.random()%20)),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){u.auth.signOut(),a("/")}},"Sign Out")))))},O=a(27),_=a(50),S=a.n(_),F=a(51),P=a.n(F),G=a(48),I=a.n(G),A=a(52),T=a.n(A),C=a(54),D=a.n(C),z=a(53),M=a.n(z),W=a(55),B=a.n(W),K=a(49),R=a.n(K),V=function(){return r.a.createElement(O.c,{bgColor:"dark",className:"text-center text-white text-lg-start"},r.a.createElement("section",{className:"d-flex justify-content-center justify-content-lg-between p-4"},r.a.createElement("div",{className:"me-5 d-none d-lg-block mt-3",style:{marginLeft:"200px"}},r.a.createElement("span",{className:"h3"},"Follow us")),r.a.createElement("div",null,r.a.createElement("a",{href:"https:github.com/Keyur1284",target:"_blank"},r.a.createElement("button",{className:"btn btn-lg btn-dark rounded-circle text-white",style:{height:"75px"}},r.a.createElement(x.a,{sx:{fontSize:40}}))),r.a.createElement("a",{href:"https://www.linkedin.com/in/keyur-govrani-b94277237/",target:"_blank"},r.a.createElement("button",{className:"btn btn-lg btn-dark rounded-circle text-white",style:{height:"75px"}},r.a.createElement(I.a,{sx:{fontSize:40}}))),r.a.createElement("a",{href:"https://www.youtube.com/channel/UC0n7Hj6lAWRYQiFbIhhNn-A"},r.a.createElement("button",{className:"btn btn-lg btn-dark rounded-circle text-white",style:{height:"75px"}},r.a.createElement(R.a,{sx:{fontSize:40}}))),r.a.createElement("a",{href:"https://twitter.com/_whimsicalguy/",target:"_blank"},r.a.createElement("button",{className:"btn btn-lg btn-dark rounded-circle text-white",style:{height:"75px"}},r.a.createElement(S.a,{sx:{fontSize:40}}))),r.a.createElement("a",{href:"https://www.instagram.com/_keyurr/",target:"_blank"},r.a.createElement("button",{className:"btn btn-lg btn-dark rounded-circle text-white",style:{height:"75px"}},r.a.createElement(P.a,{sx:{fontSize:40}}))),r.a.createElement("a",{href:"https://www.facebook.com/keyur.govrani",target:"_blank"},r.a.createElement("button",{className:"btn btn-lg btn-dark rounded-circle text-white",style:{height:"75px",marginRight:"73px"}},r.a.createElement(T.a,{sx:{fontSize:40}}))))),r.a.createElement("section",{className:""},r.a.createElement(O.b,{className:"text-center d-flex justify-content-center text-md-start mt-1"},r.a.createElement(O.d,{className:"mt-2"},r.a.createElement(O.a,{md:"3",lg:"4",xl:"3",className:"mx-auto mb-4"},r.a.createElement("p",{className:"display-6"}," ",r.a.createElement("a",{href:"https://github.com/Keyur1284/woc5.0-react-menuapp-keyur",target:"_blank"},r.a.createElement("img",{src:"https://i.pinimg.com/474x/13/4f/1e/134f1e4c68ac8dd76cbbb05dcc445e8e--kiwi-branding.jpg",alt:"logo",className:"rounded-circle me-3",style:{height:"50px",width:"50px"}})),"KIWI FOODS"),r.a.createElement("p",null,"A food menu website that displays pictures, prices and descriptions of various food items offered by restaurants, cafes, or food establishments.")),r.a.createElement(O.a,{md:"2",lg:"2",xl:"2",className:"mx-auto mb-4"}),r.a.createElement(O.a,{md:"3",lg:"2",xl:"2",className:"mx-auto mb-4"}),r.a.createElement(O.a,{md:"4",lg:"3",xl:"3",className:"mx-auto mb-md-0 mb-4 mt-2"},r.a.createElement("h6",{className:"text-uppercase fw-bold mb-4"},"Contact Us"),r.a.createElement("p",null,r.a.createElement(M.a,{className:"me-2"}),"Gujarat, India"),r.a.createElement("p",null,r.a.createElement(D.a,{className:"me-2"})," keyurgovrani6912@gmail.com"),r.a.createElement("p",null,r.a.createElement(B.a,{className:"me-2"})," +91 95105 54403"))))),r.a.createElement("div",{className:"text-center bg-dark p-2"},"Copyright \xa9 Keyur Govrani 2023"))},U=function(){var e=Object(l.m)();return r.a.createElement("div",{className:"container",style:{height:"42.9vh"}},r.a.createElement("p",{className:"display-1 text-danger"},"Error 404! Page not Found!"),r.a.createElement("button",{className:"btn btn-success btn-lg btn-block mt-2",type:"submit",onClick:function(){return e("/")}},"Go Back to Home"))};var Y=function(){return r.a.createElement("div",{className:"App bg-dark p-2"},r.a.createElement(i.a,null,r.a.createElement(h,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",element:r.a.createElement(f,null)}),r.a.createElement(l.a,{path:"/food"},r.a.createElement(l.a,{default:!0,path:"",element:r.a.createElement(v,{type:"all"})}),r.a.createElement(l.a,{path:"breakfast",element:r.a.createElement(v,{type:"breakfast"})}),r.a.createElement(l.a,{path:"lunch",element:r.a.createElement(v,{type:"lunch"})}),r.a.createElement(l.a,{path:"dinner",element:r.a.createElement(v,{type:"dinner"})}),r.a.createElement(l.a,{path:"veg",element:r.a.createElement(v,{type:"veg"})}),r.a.createElement(l.a,{path:"nonveg",element:r.a.createElement(v,{type:"nonveg"})})),r.a.createElement(l.a,{path:"/login",element:r.a.createElement(k,null)}),r.a.createElement(l.a,{path:"/about-us",element:r.a.createElement(L,null)}),r.a.createElement(l.a,{path:"/profile",element:r.a.createElement(j,null)}),r.a.createElement(l.a,{path:"*",element:r.a.createElement(U,null)})),r.a.createElement(V,null)))},H=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,92)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),o(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null))),H()}},[[63,3,2]]]);
//# sourceMappingURL=main.d3604c91.chunk.js.map
!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=106)}({106:function(t,e,n){n(107),t.exports=n(109)},107:function(t,e,n){"use strict";n.r(e);var r=n(4),o=n.n(r),a=n(14),i=(n(108),n(70)),s=n(31);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}window.wteL10n.util=window.wteutil=a.a,window.wteL10n.ui=window.wteui=window.wteL10n.ui||{},window.wteL10n.ui.Accordion=window.wteui.Accordion=i.a,window.wteL10n.helpers=window.wtehelpers=s,window.addCommas||(window.addCommas=function(t){for(var e=(t+="").split("."),n=e[0],r=e.length>1?"."+e[1]:"",o=/(\d+)(\d{3})/;o.test(n);)n=n.replace(o,"$1"+WPTE_Price_Separator+"$2");return n+r}),window.wteGetFormatedPrice=s.wteGetFormatedPrice,window.wteGetFormatedPriceWithCurrencyCode=s.wteGetFormatedPriceWithCurrencyCode,window.wteGetFormatedPriceWithCurrencyCodeSymbol=s.wteGetFormatedPriceWithCurrencyCodeSymbol,window.wteGetFormatedPriceWithCurrencySymbol=s.wteGetFormatedPriceWithCurrencySymbol,window.calculateGrandTotal=s.calculateGrandTotal;var l=function(t){var e=wteL10n,n=e.currency,r=e.baseCurrency,a=e.currencySymbol,i=e.format,c=i.number,u=i.price;t*=+o()({},r,1)[n];var l={"%CURRENCY_CODE%":"".concat(n),"%CURRENCY_SYMBOL%":"".concat(a),"%AMOUNT%":"".concat(t),"%FORMATED_AMOUNT%":"".concat(s.numberFormat(t,+c.decimal,c.decimalSeparator,c.thousansSeparator))};return u.split(/(%\w+%)/g).reduce((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;return l[e]?t+l[e]:t+e}))};a.a.on("click",".wte-popper button",(function(t){var e=this.closest(".wte-popper");e&&a.a.toggleClass(e,"active",!a.a.hasClass(e,"active"))}));var d=function(t){if(!a.a.hasClass(t,"wte-price-field")){var e=t.parentElement,n=document.createElement("input");n.type="hidden",n.name=t.name,n.value=t.value,t.name="",t.value=l(t.value),e.appendChild(n),t.addEventListener("focus",(function(){t.value=n.value})),t.addEventListener("blur",(function(){n.value=t.value,t.value=l(t.value)})),t.classList.add("wte-price-field")}};function p(t){var e=wteL10n.version,n=document.querySelectorAll("[class*=_wte_update_notice_], [data-wte-update]");if(n)for(var r in n){var o=n[r];if(o.classList)if(o.classList.contains("_wte_update_notice_".concat(e)))o.classList.remove("_wte_update_notice_".concat(e));else{var a=new RegExp("^(wte_(new|updated|note)_".concat(e,")$"));if(o.dataset.wteUpdate.match(a)){var i=o.dataset.wteUpdate;o.classList.add(i);var s=document.createElement("b");s.classList.add("_wte_notify"),o.appendChild(s),o.removeAttribute("data-wte-update")}}}}window.wteL10n.ui.priceField=d,document.addEventListener("wteEditPackageRender",(function(){var t;null===(t=document.querySelectorAll('[data-wte-field-type="price"]'))||void 0===t||t.forEach((function(t){d(t)}))})),a.a.on("change","[data-toggle-target]",(function(t){var e=document.querySelector(this.dataset.toggleTarget);e&&(this.checked?e.style.removeProperty("display"):e.style.display="none")})),a.a.on("click",".wpte-edit-booking-detail",(function(t){t.preventDefault(),this.closest(".wpte-block").querySelectorAll("select, input").forEach((function(t){t.dataset.attribName&&(t.name=t.dataset.attribName),t.dataset.attribValue&&(t.value=t.dataset.attribValue),t.dataset.attribType&&(t.type=t.dataset.attribType),t.disabled&&(t.disabled=!1),t.type&&(t.readOnly=!1)}))})),a.a.on("click",".wte-email-template-updater",(function(t){t.preventDefault();var e=document.getElementById(this.dataset.target);e&&e.submit()})),document.addEventListener("wteSettingsTabContentLoaded",p),document.addEventListener("DOMContentLoaded",(function(t){p();var e=document.querySelectorAll(".wte-code");e&&e.forEach((function(t){t.dataset.height&&(t.style.height=t.dataset.height+"px"),hljs&&hljs.highlightBlock(t)})),a.a.on("click",".wte-onclick-toggler",(function(t){if(t.preventDefault(),this.dataset.target){var e=document.querySelector(this.dataset.target);e&&(Array.from(e.classList).includes("visible")?(e.classList.remove("visible"),e.style.display="none"):(e.style.removeProperty("display"),e.classList.add("visible")))}}))})),window.wteL10n=window.wteL10n||{};var f=function(t){this._value=t,this._getPriceFormat=function(){return wteL10n.format.price},this.get=function(){return this._value},this.format=function(){var t,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=wteL10n,a=r.currency,i=r.baseCurrency,s=r.currencySymbol,c=r.baseCurrencySymbol,l=r.format,d=l.number,p=l.price,f=o()({},i,1);if("undefined"!=typeof wteCc&&null!==(t=wteCc)&&void 0!==t&&t.code&&n)for(var w in wteCc.code)f=u(u({},f),{},o()({},wteCc.code[w],wteCc.rate[w]));var m=+this._value*(n?+f[a]:1);return wtehelpers.priceFormat(m,n?a:i,n?s:c,p,+d.decimal,d.decimalSeparator,d.thousandSeparator,e)}};window.wteL10n.priceFormat=window.wteL10n.priceFormat||function(t){return new f(t)};var w=function(t){this._time=t,this.get=function(){return this._time},this.set=function(t){this._time=t},this._getTimeFormat=function(){return wteL10n.helpers.phpToMomentDF(wteL10n.format.datetime.date)},this.format=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(wteL10n.format.datetime.timezone,!this._time)return this._time;if(t)return moment(this._time).utc().format(t);var n=moment(this._time).utc().format(this._getTimeFormat());return n+(e?" at "+moment(this._time).utc().format("h:mm A"):"")},this.getDatewithOffset=function(t){if(this._time){var e=moment(this._time).utc().format("YYYY-MM-DDTHH:mm:ss")+t;return new Date(e)}}};window.wteL10n.dateFormat=window.wteL10n.dateFormat||function(t){return new w(t)}},108:function(t,e,n){"use strict";var r=n(4),o=n.n(r),a=n(16),i=n.n(a),s=n(15),c=n.n(s),u=n(19),l=n.n(u),d=n(20),p=n.n(d),f=n(9),w=n.n(f);function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var v=function(){function t(){l()(this,t)}var e,n,r,o,a,s;return p()(t,null,[{key:"get",value:(s=c()(w.a.mark((function t(e){var n,r,o=arguments;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=o.length>1&&void 0!==o[1]?o[1]:{},r={packages:this.getPackages,categories:this.getPackageCategories,trip:this.getTrip},!this[e]){t.next=4;break}return t.abrupt("return",this[e]);case 4:if("trip"!=e){t.next=10;break}return t.next=7,r[e](n);case 7:this[e]=t.sent,t.next=15;break;case 10:return t.t0=lodash,t.next=13,r[e](n);case 13:t.t1=t.sent,this[e]=t.t0.keyBy.call(t.t0,t.t1,"id");case 15:return t.abrupt("return",this[e]);case 16:case"end":return t.stop()}}),t,this)}))),function(_x){return s.apply(this,arguments)})},{key:"getTrip",value:(a=c()(w.a.mark((function t(e){var n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(wteL10n.wpapi.root+wteL10n.wpapi.versionString,"trip/").concat(e.id));case 2:return n=t.sent,t.next=5,n.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)}))),function(t){return a.apply(this,arguments)})},{key:"getPackageCategories",value:(o=c()(w.a.mark((function t(e){var n,r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(wteL10n.wpapi.root+wteL10n.wpapi.versionString,"package-categories"));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)}))),function(t){return o.apply(this,arguments)})},{key:"getPackages",value:(r=c()(w.a.mark((function t(e){var n,r,o,a;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=Object.entries(e).map((function(t){var e=i()(t,2),n=e[0],r=e[1];return"".concat(n,"=").concat(r)})).join("&"),t.next=3,fetch("".concat(wteL10n.wpapi.root+wteL10n.wpapi.versionString,"packages/").concat(null!==(n=e.id)&&void 0!==n?n:"?".concat(r)));case 3:return o=t.sent,t.next=6,o.json();case 6:return a=t.sent,t.abrupt("return",a);case 8:case"end":return t.stop()}}),t)}))),function(t){return r.apply(this,arguments)})},{key:"addNewPackage",value:(n=c()(w.a.mark((function t(e){var n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(wteL10n.wpapi.root+wteL10n.wpapi.versionString,"packages"),{method:"POST",headers:{"Content-Type":"application/json","X-WP-Nonce":wteL10n.wpapi.nonce},body:JSON.stringify(h({title:"Untitled Package",status:"publish",post_type:"trip-packages"},e))});case 2:return n=t.sent,t.next=5,n.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)}))),function(t){return n.apply(this,arguments)})},{key:"removePackage",value:(e=c()(w.a.mark((function t(e){var n,r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(wteL10n.wpapi.root+wteL10n.wpapi.versionString,"packages/").concat(e.id),{method:"DELETE",headers:{"Content-Type":"application/json","X-WP-Nonce":wteL10n.wpapi.nonce}});case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)}))),function(t){return e.apply(this,arguments)})}]),t}();window.wteL10n=window.wteL10n||{},window.wteL10n.api=window.wteapi=window.WTEApi=v},109:function(t,e,n){"use strict";n.r(e)},14:function(t,e,n){"use strict";function r(){}r.hasClass=function(t,e){return t.classList?t.classList.contains(e):!!t.getAttribute("class").match(new RegExp("(\\s|^)"+e+"(\\s|$)"))},r.addClass=function(t,e){var n=e.split(" ");t.classList?t.classList.add(n[0]):r.hasClass(t,n[0])||t.setAttribute("class",t.getAttribute("class")+" "+n[0]),n.length>1&&r.addClass(t,n.slice(1).join(" "))},r.removeClass=function(t,e){var n=e.split(" ");if(t.classList)t.classList.remove(n[0]);else if(r.hasClass(t,n[0])){var o=new RegExp("(\\s|^)"+n[0]+"(\\s|$)");t.setAttribute("class",t.getAttribute("class").replace(o," "))}n.length>1&&r.removeClass(t,n.slice(1).join(" "))},r.toggleClass=function(t,e,n){n?r.addClass(t,e):r.removeClass(t,e)},r.setAttributes=function(t,e){for(var n in e)null!=t&&t.setAttribute&&t.setAttribute(n,e[n])},r.getChildrenByClassName=function(t,e){t.children;for(var n=[],o=0;o<t.children.length;o++)r.hasClass(t.children[o],e)&&n.push(t.children[o]);return n},r.getIndexInArray=function(t,e){return Array.prototype.indexOf.call(t,e)},r.on=function(t,e,n){document.addEventListener(t,(function(t){for(var r=t.target;r&&r!=this;r=r.parentNode)if(r.matches(e)){n.call(r,t);break}}),!1)},e.a=r},15:function(t,e){function n(t,e,n,r,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function s(t){n(i,o,a,s,c,"next",t)}function c(t){n(i,o,a,s,c,"throw",t)}s(void 0)}))}},t.exports.default=t.exports,t.exports.__esModule=!0},16:function(t,e,n){var r=n(41),o=n(42),a=n(22),i=n(43);t.exports=function(t,e){return r(t)||o(t,e)||a(t,e)||i()},t.exports.default=t.exports,t.exports.__esModule=!0},19:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},t.exports.default=t.exports,t.exports.__esModule=!0},20:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t},t.exports.default=t.exports,t.exports.__esModule=!0},21:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r},t.exports.default=t.exports,t.exports.__esModule=!0},22:function(t,e,n){var r=n(21);t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}},t.exports.default=t.exports,t.exports.__esModule=!0},31:function(t,e,n){"use strict";n.r(e),n.d(e,"wteGetFormatedPrice",(function(){return a})),n.d(e,"wteGetFormatedPriceWithCurrencyCode",(function(){return i})),n.d(e,"wteGetFormatedPriceWithCurrencyCodeSymbol",(function(){return s})),n.d(e,"wteGetFormatedPriceWithCurrencySymbol",(function(){return c})),n.d(e,"calculateGrandTotal",(function(){return u})),n.d(e,"priceFormat",(function(){return d})),n.d(e,"numberFormat",(function(){return l})),n.d(e,"phpToMomentDF",(function(){return p}));var r=n(8),o=n.n(r);function a(t,e,n){return t=t||0,e=e||!0,n=n||0,"undefined"!=typeof WTE_CC_convData&&WTE_CC_convData.rate&&(t*=parseFloat(WTE_CC_convData.rate)),0==e?t:(t=(t=(t=parseFloat(t)).toFixed(n)).replace(".00",""),t=addCommas(t))}function i(t,e,n,r){return wteL10n.priceFormat(t).format(!0,!!n)}function s(t,e,n,r,o){return wteL10n.priceFormat(t).format(!1,!!r)}function c(t,e,n,r){return wteL10n.priceFormat(t).format(!1,!!n)}function u(){return parseFloat(window.wte.trip.travellersCost)+parseFloat(window.wte.trip.extraServicesCost)}function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:",";try{e=Math.abs(e),e=isNaN(e)?2:e;var o=t<0?"-":"",a=parseInt(t=Math.abs(Number(t)||0).toFixed(e)).toString(),i=a.length>3?a.length%3:0;return o+(i?a.substr(0,i)+r:"")+a.substr(i).replace(/(\d{3})(?=\d)/g,"$1"+r)+(e?n+Math.abs(t-a).toFixed(e).slice(2):"")}catch(t){console.log(t)}}function d(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"%CURRENCY_SYMBOL%%FORMATED_AMOUNT%",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:2,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:".",i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:",",s=arguments.length>7&&void 0!==arguments[7]&&arguments[7],c={"%CURRENCY_CODE%":s?e:'<span class="wpte-currency-code currency">'.concat(e,"</span>"),"%CURRENCY_SYMBOL%":s?n:'<span class="wpte-currency-code currency">'.concat(n,"</span>"),"%AMOUNT%":s?t:'<strong class="wpte-price amount">'.concat(t,"</strong>"),"%FORMATED_AMOUNT%":s?l(t,o,a,i):'<strong class="wpte-price amount">'.concat(l(t,o,a,i),"</strong>")};return r.split(/(%\w+%)/g).reduce((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;return c[e]?t+c[e]:t+e}))}function p(t){for(var e={d:"DD",D:"ddd",j:"D",l:"dddd",w:"d",F:"MMMM",M:"MMM",m:"MM",n:"M",S:"o",jS:"Do",Y:"YYYY",y:"YY"},n=[],r=0;r<t.length;r++)n=e[t[r]]?[].concat(o()(n),[e[t[r]]]):[].concat(o()(n),[t[r]]);return n.reduce((function(t,e){return t+e}))}},32:function(t,e,n){var r=n(21);t.exports=function(t){if(Array.isArray(t))return r(t)},t.exports.default=t.exports,t.exports.__esModule=!0},33:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.default=t.exports,t.exports.__esModule=!0},34:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0},4:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},t.exports.default=t.exports,t.exports.__esModule=!0},41:function(t,e){t.exports=function(t){if(Array.isArray(t))return t},t.exports.default=t.exports,t.exports.__esModule=!0},42:function(t,e){t.exports=function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a=[],_n=!0,i=!1;try{for(n=n.call(t);!(_n=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);_n=!0);}catch(t){i=!0,o=t}finally{try{_n||null==n.return||n.return()}finally{if(i)throw o}}return a}},t.exports.default=t.exports,t.exports.__esModule=!0},43:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0},70:function(t,e,n){"use strict";var r=n(19),o=n.n(r),a=n(20),i=n.n(a),s=n(14),c=function(){function t(e){o()(this,t),this.element=e,s.a.addClass(this.element,"wte-accordion-initialized"),this.items=s.a.getChildrenByClassName(this.element,"wte-accordion-item"),this.version=this.element.getAttribute("data-version")?"-"+this.element.getAttribute("data-version"):"",this.showClass="wte-accordion-open",this.animateHeight="on"==this.element.getAttribute("data-animation"),this.multiItems=!("off"==this.element.getAttribute("data-multi-items")),this.deepLinkOn="on"==this.element.getAttribute("data-deep-link"),this.initAccordion()}return i()(t,[{key:"initAccordion",value:function(){for(var t=0;t<this.items.length;t++){var e=this.items[t].getElementsByClassName("wte-accordion-button")[0];if(e){var n=this.items[t].getElementsByClassName("wte-accordion-collapse")[0],r=s.a.hasClass(this.items[t],this.showClass)?"true":"false";s.a.setAttributes(e,{"aria-expanded":r,"aria-controls":"accordion-content-"+t,id:"accordion-header-"+t}),s.a.addClass(e,"wte-accordion-trigger"),s.a.setAttributes(n,{"aria-labelledby":"accordion-header-"+t,id:"accordion-content-"+t})}}this.initAccordionEvents(),this.initDeepLink()}},{key:"initAccordionEvents",value:function(){var t=this;this.element.addEventListener("click",(function(e){var n=e.target.closest(".wte-accordion-trigger");n&&s.a.getIndexInArray(t.items,n.closest(".wte-accordion-item"))>=0&&t.triggerAccordion(n)}))}},{key:"triggerAccordion",value:function(t){var e="true"===t.getAttribute("aria-expanded");this.animateAccordion(t,e,!1),!e&&this.deepLinkOn&&history.replaceState(null,"","#"+t.getAttribute("aria-controls"))}},{key:"animateAccordion",value:function(t,e,n){var r=t.closest(".wte-accordion-item"),o=r.getElementsByClassName("wte-accordion-collapse")[0],a=e?"false":"true";s.a.toggleClass(r,this.showClass,!e),t.setAttribute("aria-expanded",a),o&&this.resetContentVisibility(r,o,e),(!this.multiItems&&!e||n)&&this.closeSiblings(r)}},{key:"resetContentVisibility",value:function(t,e,n){s.a.toggleClass(t,this.showClass,!n),e.removeAttribute("style"),n&&!this.multiItems&&this.moveContent()}},{key:"closeSiblings",value:function(t){for(var e=s.a.getIndexInArray(this.items,t),n=0;n<this.items.length;n++)if(s.a.hasClass(this.items[n],this.showClass)&&n!=e)return this.animateAccordion(this.items[n].getElementsByClassName("wte-accordion-trigger")[0],!0,!1),!1}},{key:"moveContent",value:function(){var t=this.element.getElementsByClassName(this.showClass);if(0!=t.length){var e=t[0].getBoundingClientRect();if(e.top<0||e.top>window.innerHeight){var n=window.scrollY||document.documentElement.scrollTop;window.scrollTo(0,e.top+n)}}}},{key:"initDeepLink",value:function(){if(this.deepLinkOn){var t=window.location.hash.substr(1);if(t&&""!=t){var e=this.element.querySelector('.wte-accordion-trigger[aria-controls="'+t+'"]');e&&"true"!==e.getAttribute("aria-expanded")&&(this.animateAccordion(e,!1,!0),setTimeout((function(){e.scrollIntoView(!0)})))}}}}]),t}();e.a=c},8:function(t,e,n){var r=n(32),o=n(33),a=n(22),i=n(34);t.exports=function(t){return r(t)||o(t)||a(t)||i()},t.exports.default=t.exports,t.exports.__esModule=!0},9:function(t,e){t.exports=window.regeneratorRuntime}});
//# sourceMappingURL=wte-global.js.map
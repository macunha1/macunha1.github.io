(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{410:function(t,e,n){var content=n(428);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(44).default)("535bf124",content,!0,{sourceMap:!1})},426:function(t,e,n){var r;r=function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1);e.default=r.a},function(t,e,n){"use strict";var r=n(8),o=n(10),l=function(t){n(2)},c=n(7)(r.a,o.a,l,null,null);c.options.__file="src/components/TextGlitch.vue",c.esModule&&Object.keys(c.esModule).some((function(t){return"default"!==t&&"__"!==t.substr(0,2)}))&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] TextGlitch.vue: functional components are not supported with templates, they should use render functions."),e.a=c.exports},function(t,e,n){var content=n(3);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals),n(5)("30ae448d",content,!1)},function(t,e,n){(t.exports=n(4)(!1)).push([t.i,"\n.vue-glitch {\n  position: relative;\n  overflow: hidden;\n  white-space: nowrap;\n  display: inline-block;\n}\n.vue-glitch:after {\n    content: attr(data-text);\n    position: absolute;\n    left: 2px;\n    top: 0;\n    overflow: hidden;\n    clip: rect(0, 900px, 0, 0);\n}\n.vue-glitch:before {\n    content: attr(data-text);\n    position: absolute;\n    left: -2px;\n    top: 0;\n    overflow: hidden;\n    clip: rect(0, 900px, 0, 0);\n}\n",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var content=function(t,e){var n,content=t[1]||"",r=t[3];if(!r)return content;if(e&&"function"==typeof btoa){var o=(n=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),l=r.sources.map((function(source){return"/*# sourceURL="+r.sourceRoot+source+" */"}));return[content].concat(l).concat([o]).join("\n")}return[content].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+content+"}":content})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var l=t[i];"number"==typeof l[0]&&r[l[0]]||(n&&!l[2]?l[2]=n:n&&(l[2]="("+l[2]+") and ("+n+")"),e.push(l))}},e}},function(t,e,n){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=n(6),l={},head=r&&(document.head||document.getElementsByTagName("head")[0]),c=null,d=0,f=!1,h=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(t){for(var i=0;i<t.length;i++){var e=t[i],n=l[e.id];if(n){n.refs++;for(var r=0;r<n.parts.length;r++)n.parts[r](e.parts[r]);for(;r<e.parts.length;r++)n.parts.push(y(e.parts[r]));n.parts.length>e.parts.length&&(n.parts.length=e.parts.length)}else{var o=[];for(r=0;r<e.parts.length;r++)o.push(y(e.parts[r]));l[e.id]={id:e.id,refs:1,parts:o}}}}function x(){var t=document.createElement("style");return t.type="text/css",head.appendChild(t),t}function y(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(f)return h;r.parentNode.removeChild(r)}if(m){var o=d++;r=c||(c=x()),e=C.bind(null,r,o,!1),n=C.bind(null,r,o,!0)}else r=x(),e=k.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}t.exports=function(t,e,n){f=n;var r=o(t,e);return v(r),function(e){for(var n=[],i=0;i<r.length;i++){var c=r[i];(d=l[c.id]).refs--,n.push(d)}for(e?v(r=o(t,e)):r=[],i=0;i<n.length;i++){var d;if(0===(d=n[i]).refs){for(var f=0;f<d.parts.length;f++)d.parts[f]();delete l[d.id]}}}};var _,w=(_=[],function(t,e){return _[t]=e,_.filter(Boolean).join("\n")});function C(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=w(e,o);else{var l=document.createTextNode(o),c=t.childNodes;c[e]&&t.removeChild(c[e]),c.length?t.insertBefore(l,c[e]):t.appendChild(l)}}function k(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},function(t,e){t.exports=function(t,e){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],l=o[0],c={id:t+":"+i,css:o[1],media:o[2],sourceMap:o[3]};r[l]?r[l].parts.push(c):n.push(r[l]={id:l,parts:[c]})}return n}},function(t,e){t.exports=function(t,e,n,r,o){var l,c=t=t||{},d=typeof t.default;"object"!==d&&"function"!==d||(l=t,c=t.default);var f,h="function"==typeof c?c.options:c;if(e&&(h.render=e.render,h.staticRenderFns=e.staticRenderFns),r&&(h._scopeId=r),o?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},h._ssrRegister=f):n&&(f=n),f){var m=h.functional,v=m?h.render:h.beforeCreate;m?h.render=function(t,e){return f.call(e),v(t,e)}:h.beforeCreate=v?[].concat(v,f):[f]}return{esModule:l,exports:c,options:h}}},function(t,e,n){"use strict";var r=n(9);e.a={props:{text:{type:String,default:"Vue Text Glitch"},steps:{type:Number,default:20},height:{type:Number,default:100},id:{type:String,default:"text-glitch"},speed:{type:Number,default:2},fill:{type:String,default:"#2c3e50"},background:{type:String,default:"#fff"},highlight1:{type:String,default:"red"},highlight2:{type:String,default:"blue"}},created:function(){for(var style="",t=[],i=0;i<=this.steps;i++)t+=r.a.createKeyFrame(100/this.steps*i,this.height);style+=r.a.createWrapper(t,this.id+"-noise-anim"),t=[];for(var e=0;e<=this.steps;e++)t+=r.a.createKeyFrame(100/this.steps*e,this.height);style+=r.a.createWrapper(t,this.id+"-noise-anim-2"),style+="\n            #"+this.id+".vue-glitch:after {\n                -webkit-animation:"+this.id+"-noise-anim "+this.speed+"s infinite linear alternate-reverse;\n                animation:"+this.id+"-noise-anim "+this.speed+"s infinite linear alternate-reverse;\n                color: "+this.fill+";\n                background: "+this.background+";\n                text-shadow: -1px 0 "+this.highlight1+";\n            }\n            #"+this.id+".vue-glitch:before {\n                -webkit-animation:"+this.id+"-noise-anim-2 "+this.speed+"s infinite linear alternate-reverse;\n                animation:"+this.id+"-noise-anim-2 "+this.speed+"s infinite linear alternate-reverse;\n                color: "+this.fill+";\n                background: "+this.background+";\n                text-shadow: 1px 0 "+this.highlight2+";\n            }\n            #"+this.id+".vue-glitch {\n                color: "+this.fill+";\n            }\n";var n=document.createElement("style");n.innerHTML=style,document.head.appendChild(n)}}},function(t,e,n){"use strict";e.a={createKeyFrame:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return t+"% { clip: rect("+Math.random()*e+"px, 9999px, "+Math.random()*e+"px, 0); }"},createWrapper:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"noise-anim";return"\n@-webkit-keyframes "+e+" {\n    "+t+"\n}\n@keyframes "+e+" {\n    "+t+"\n}"}}},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"vue-glitch",attrs:{id:t.id,"data-text":t.text}},[t._v(t._s(t.text))])};r._withStripped=!0;var o={render:r,staticRenderFns:[]};e.a=o}])},t.exports=r()},427:function(t,e,n){"use strict";n(410)},428:function(t,e,n){var r=n(43)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n[data-v-69014e4a] .vue-typer .custom.char{\n  --tw-text-opacity:1;\n  color:rgba(0, 255, 187, var(--tw-text-opacity))\n}\n[data-v-69014e4a] .vue-typer .custom.char.selected{\n  --tw-bg-opacity:1;\n  background-color:rgba(253, 45, 120, var(--tw-bg-opacity));\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n[data-v-69014e4a] .vue-typer .custom.caret{\n  width:5px;\n  --tw-bg-opacity:1;\n  background-color:rgba(253, 45, 120, var(--tw-bg-opacity))\n}\n.hover-arrow[data-v-69014e4a]{\n  position:relative;\n  stroke-width:1px\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},458:function(t,e,n){"use strict";n.r(e);var r=n(426),o={components:{TextGlitch:n.n(r).a}},l=(n(427),n(9)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative overflow-hidden"},[n("main",{},[n("div",{staticClass:"mx-auto py-8 max-w-7xl"},[n("div",{staticClass:"lg:grid lg:grid-cols-12",attrs:{"data-aos":"zoom-in"}},[n("div",{staticClass:"px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center"},[n("div",[n("TextGlitch",{staticClass:"mt-2 mx-2 text-2xl tracking-tight font-extrabold sm:mt-3 sm:leading-none lg:mt-4 lg:text-4xl xl:text-4xl",attrs:{text:t.$t("hero.greeting"),height:33,speed:8,steps:10,fill:"#fff",background:"#fd2d78",highlight1:"#00ffbb"}}),t._v(" "),n("h1",{staticClass:"mt-4 mx-2 text-2xl tracking-tight font-extrabold text-white sm:mt-4 sm:leading-none lg:mt-6 lg:text-4xl xl:text-4xl"},[n("span",{staticClass:"md:block"},[t._v(t._s(t.$config.my.description))]),t._v(" "),n("div",[n("vue-typer",{attrs:{text:t.$t("hero.words")}})],1)]),t._v(" "),n("p",{staticClass:"mt-3 text-base text-gray-300 sm:mt-5"},[t._v(t._s(t.$t("hero.description")))]),t._v(" "),t.$config.workedAt.enabled?n("p",{staticClass:"mt-8 text-sm text-white tracking-wide font-semibold sm:mt-10"},[t._v("Worked at")]):t._e(),t._v(" "),t.$config.workedAt.enabled?n("div",{staticClass:"mt-5 w-full sm:mx-auto lg:ml-0"},[n("div",{staticClass:"flex flex-wrap space-x-1 items-start items-center space-x-4 md:space-x-10"},t._l(t.$config.workedAt.meta,(function(t,e){return n("div",{key:e},[n("a",{staticClass:"flex items-center justify-center",attrs:{href:t.url,target:"_blank",rel:"noreferrer"}},[n("img",{staticClass:"h-8 rounded-sm sm:h-9",attrs:{src:t.src,alt:t.name}})])])})),0)]):t._e()],1)]),t._v(" "),t.$config.my.image?n("div",{staticClass:"mt-8 px-5 sm:mt-16 lg:mt-0 lg:col-span-6"},[n("div",{staticClass:"flex-shrink-0 w-full sm:mx-auto flex flex-1 items-center justify-center rounded-lg sm:overflow-hidden"},[n("img",{staticClass:"rounded-md h-80",attrs:{src:t.$config.my.image,alt:t.$config.my.name}})])]):t._e()])])])])}),[],!1,null,"69014e4a",null);e.default=component.exports}}]);
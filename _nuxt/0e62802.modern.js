(window.webpackJsonp=window.webpackJsonp||[]).push([[16,6],{341:function(t,e,n){var content=n(346);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("03ee8174",content,!0,{sourceMap:!1})},345:function(t,e,n){"use strict";n(341)},346:function(t,e,n){var o=n(24)((function(i){return i[1]}));o.push([t.i,".buttons[data-v-99aa8488]{margin-left:0!important;margin-right:0!important}.content[data-v-99aa8488]{padding:12px}",""]),o.locals={},t.exports=o},367:function(t,e){},368:function(t,e){},369:function(t,e){},370:function(t,e){},371:function(t,e){},379:function(t,e,n){"use strict";n.r(e);n(365);var o=n(378),d=(n(344),{props:{src:{type:String,required:!0}},components:{pdf:o.a},data:()=>({page:1,numPages:0,pdfdata:void 0,errors:[],scale:"page-width"}),computed:{formattedZoom(){return Number.parseInt(100*this.scale)}},mounted(){this.getPdf()},watch:{show:function(s){s&&this.getPdf()},page:function(p){(window.pageYOffset<=this.findPos(document.getElementById(p))||document.getElementById(p+1)&&window.pageYOffset>=this.findPos(document.getElementById(p+1)))&&document.getElementById(p).scrollIntoView()}},methods:{handle_pdf_link:function(t){document.getElementById(String(t.pageNumber)).scrollIntoView()},getPdf(){var t=this;t.pdfdata=o.a.createLoadingTask(this.src),t.pdfdata.then((e=>{t.numPages=e.numPages,window.onscroll=()=>{d(),o()};var n=this.$refs.buttons.offsetTop,o=()=>{window.pageYOffset>=n?this.$refs.buttons.classList.remove("hidden"):this.$refs.buttons.classList.add("hidden")},d=()=>{var i=1,n=Number(e.numPages);do{window.pageYOffset>=t.findPos(document.getElementById(i))&&window.pageYOffset<=t.findPos(document.getElementById(i+1))&&(t.page=i),i++}while(i<n);window.pageYOffset>=t.findPos(document.getElementById(i))&&(t.page=i)}}))},findPos:t=>t&&t.offsetTop?t.offsetTop:0}}),r=(n(374),n(345),n(4)),component=Object(r.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"pdfvuer"}},[n("div",{ref:"buttons",staticClass:"ui grey three item inverted bottom fixed menu transition hidden"},[n("a",{staticClass:"item",on:{click:function(e){!(t.page>1)||t.page--}}},[n("i",{staticClass:"left chevron icon"}),t._v("\n      Back\n    ")]),t._v(" "),n("a",{staticClass:"ui active item"},[t._v("\n      "+t._s(t.page)+" / "+t._s(t.numPages?t.numPages:"∞")+"\n    ")]),t._v(" "),n("a",{staticClass:"item",on:{click:function(e){!(t.page<t.numPages)||t.page++}}},[t._v("\n      Forward\n      "),n("i",{staticClass:"right chevron icon"})])]),t._v(" "),n("div",{ref:"buttons",staticClass:"ui grey three item inverted bottom fixed menu transition hidden"},[n("a",{staticClass:"item",on:{click:function(e){t.scale-=t.scale>.2?.1:0}}},[n("i",{staticClass:"left chevron icon"}),t._v("\n        Zoom -\n    ")]),t._v(" "),n("a",{staticClass:"ui active item"},[t._v("\n      "+t._s(t.formattedZoom)+" %\n    ")]),t._v(" "),n("a",{staticClass:"item",on:{click:function(e){t.scale+=t.scale<2?.1:0}}},[t._v("\n      Zoom +\n      "),n("i",{staticClass:"right chevron icon"})])]),t._v(" "),t._l(t.numPages,(function(i){return n("pdf",{key:i,staticStyle:{width:"100%",margin:"8px auto"},attrs:{src:t.pdfdata,id:i,page:i,scale:t.scale,annotation:!0,resize:!0},on:{"update:scale":function(e){t.scale=e},"link-clicked":t.handle_pdf_link}},[n("template",{slot:"loading"},[t._v("\n      loading content here...\n    ")])],2)}))],2)}),[],!1,null,"99aa8488",null);e.default=component.exports},417:function(t,e,n){"use strict";n.r(e);var o={head(){return{title:"resume -- ".concat(this.$config.my.name)}}},d=n(4),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"max-w-7xl px-4 mx-auto py-12"},[n("div",{staticClass:"shadow-md max-w-5xl mx-auto bg-gray-700 overflow-hidden rounded-lg divide-gray-800"},[n("div",{staticClass:"bg-gray-900 py-3 px-6 flex justify-between items-center",attrs:{"data-aos":"fade-up"}},[n("h1",{staticClass:"text-lg flex flex-row font-semibold text-gray-200"},[n("span",{staticClass:"pr-1"},[t._v(t._s(t.$t("nav.resume")))]),t._v("\n        -\n        "),n("span",{staticClass:"pl-1 hidden md:block"},[t._v(t._s(t.$config.my.name))])]),t._v(" "),n("a",{staticClass:"inline-flex text-hot-pink hover:text-teal items-center px-2 py-1 border border-transparent shadow-sm text-sm font-medium rounded-md btn-color-style",attrs:{target:"_blank",rel:"noreferrer",href:t.$config.resume.pdfUrl,download:t.$config.my.name+".pdf"}},[n("svg",{staticClass:"-ml-1 mr-3 h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z","clip-rule":"evenodd"}})]),t._v("\n        "+t._s(t.$t("download"))+"\n      ")])]),t._v(" "),n("div",{staticClass:"px-4 py-5 sm:p-6 flex items-center justify-center"},[n("div",{staticClass:"w-full dark:text-gray-500 text-gray-800 font-bold"},[n("PdfViewer",{staticClass:"shadow-md",attrs:{src:t.$config.resume.pdfUrl}})],1)])])])}),[],!1,null,"4a9e76d7",null);e.default=component.exports;installComponents(component,{PdfViewer:n(379).default})}}]);
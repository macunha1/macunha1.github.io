(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{421:function(t,n,e){var content=e(426);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(43).default)("ce3f01ea",content,!0,{sourceMap:!1})},425:function(t,n,e){"use strict";e(421)},426:function(t,n,e){var o=e(42)((function(i){return i[1]}));o.push([t.i,".buttons[data-v-99aa8488]{margin-left:0!important;margin-right:0!important}.content[data-v-99aa8488]{padding:12px}",""]),o.locals={},t.exports=o},447:function(t,n){},448:function(t,n){},449:function(t,n){},450:function(t,n){},451:function(t,n){},459:function(t,n,e){"use strict";e.r(n);e(445),e(135);var o=e(458),c=(e(424),{props:{src:{type:String,required:!0}},components:{pdf:o.a},data:function(){return{page:1,numPages:0,pdfdata:void 0,errors:[],scale:"page-width"}},computed:{formattedZoom:function(){return Number.parseInt(100*this.scale)}},mounted:function(){this.getPdf()},watch:{show:function(s){s&&this.getPdf()},page:function(p){(window.pageYOffset<=this.findPos(document.getElementById(p))||document.getElementById(p+1)&&window.pageYOffset>=this.findPos(document.getElementById(p+1)))&&document.getElementById(p).scrollIntoView()}},methods:{handle_pdf_link:function(t){document.getElementById(String(t.pageNumber)).scrollIntoView()},getPdf:function(){var t=this,n=this;n.pdfdata=o.a.createLoadingTask(this.src),n.pdfdata.then((function(e){n.numPages=e.numPages,window.onscroll=function(){d(),c()};var o=t.$refs.buttons.offsetTop,c=function(){window.pageYOffset>=o?t.$refs.buttons.classList.remove("hidden"):t.$refs.buttons.classList.add("hidden")},d=function(){var i=1,t=Number(e.numPages);do{window.pageYOffset>=n.findPos(document.getElementById(i))&&window.pageYOffset<=n.findPos(document.getElementById(i+1))&&(n.page=i),i++}while(i<t);window.pageYOffset>=n.findPos(document.getElementById(i))&&(n.page=i)}}))},findPos:function(t){return t&&t.offsetTop?t.offsetTop:0}}}),d=(e(454),e(425),e(6)),component=Object(d.a)(c,(function(){var t=this,n=t._self._c;return n("div",{attrs:{id:"pdfvuer"}},[n("div",{ref:"buttons",staticClass:"ui grey three item inverted bottom fixed menu transition hidden"},[n("a",{staticClass:"item",on:{click:function(n){!(t.page>1)||t.page--}}},[n("i",{staticClass:"left chevron icon"}),t._v("\n      Back\n    ")]),t._v(" "),n("a",{staticClass:"ui active item"},[t._v("\n      "+t._s(t.page)+" / "+t._s(t.numPages?t.numPages:"∞")+"\n    ")]),t._v(" "),n("a",{staticClass:"item",on:{click:function(n){!(t.page<t.numPages)||t.page++}}},[t._v("\n      Forward\n      "),n("i",{staticClass:"right chevron icon"})])]),t._v(" "),n("div",{ref:"buttons",staticClass:"ui grey three item inverted bottom fixed menu transition hidden"},[n("a",{staticClass:"item",on:{click:function(n){t.scale-=t.scale>.2?.1:0}}},[n("i",{staticClass:"left chevron icon"}),t._v("\n        Zoom -\n    ")]),t._v(" "),n("a",{staticClass:"ui active item"},[t._v("\n      "+t._s(t.formattedZoom)+" %\n    ")]),t._v(" "),n("a",{staticClass:"item",on:{click:function(n){t.scale+=t.scale<2?.1:0}}},[t._v("\n      Zoom +\n      "),n("i",{staticClass:"right chevron icon"})])]),t._v(" "),t._l(t.numPages,(function(i){return n("pdf",{key:i,staticStyle:{width:"100%",margin:"8px auto"},attrs:{src:t.pdfdata,id:i,page:i,scale:t.scale,annotation:!0,resize:!0},on:{"update:scale":function(n){t.scale=n},"link-clicked":t.handle_pdf_link}},[n("template",{slot:"loading"},[t._v("\n      loading content here...\n    ")])],2)}))],2)}),[],!1,null,"99aa8488",null);n.default=component.exports}}]);
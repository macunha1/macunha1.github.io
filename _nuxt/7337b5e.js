(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{398:function(r,o,t){"use strict";t.r(o);t(19),t(86);var e={methods:{onImageLoadError:function(){this.imageLoadError=!0}},computed:{imageURL:function(){var r=["uppercase=false","color=fd2d78","background=111111","rounded=true","name=".concat(this.name[0]),"bold=true"],o="https://ui-avatars.com/api/?".concat(r.join("&"));return!this.photoURL||this.imageLoadError?o:this.photoURL}},data:function(){return{imageLoadError:!1}},props:{name:{type:String},photoURL:{type:String,required:!1}}},n=t(6),component=Object(n.a)(e,(function(){var r=this,o=r.$createElement;return(r._self._c||o)("img",{attrs:{src:r.imageURL,alt:"user photo"},on:{error:r.onImageLoadError}})}),[],!1,null,null,null);o.default=component.exports}}]);
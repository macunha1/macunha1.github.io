(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{418:function(t,e,o){"use strict";o.r(e);var c=o(2),n={head(){return{title:"home -- ".concat(this.$config.my.name)}},data:()=>({posts:null,projects:null}),created(){var t=this;return Object(c.a)((function*(){var e="fetchAllPosts";console.time(e);try{var o=yield t.$content("posts",{deep:!0}).without(["body","toc","dir","extension","path","tags"]).limit(3).skip(0).sortBy("createdAt","desc").fetch();t.posts=o}catch(t){console.error(t)}finally{console.timeEnd(e)}var c="fetchAllProjects";console.time(c);try{var n=yield t.$content("projects",{deep:!0}).without(["body","toc","dir","extension","path","tags"]).limit(2).skip(0).sortBy("createdAt","desc").fetch();t.projects=n}catch(t){console.error(t)}finally{console.timeEnd(c)}}))()}},r=o(4),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("HeroSection"),t._v(" "),t.$config.blog.enabled&&t.posts?e("LazyRecentBlogPosts",{attrs:{posts:t.posts}}):t._e(),t._v(" "),t.$config.projects.enabled&&t.projects?e("LazyRecentProjects",{attrs:{projects:t.projects}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeroSection:o(416).default})}}]);
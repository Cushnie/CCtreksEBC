(function(t){function a(a){for(var e,l,r=a[0],o=a[1],n=a[2],d=0,m=[];d<r.length;d++)l=r[d],i[l]&&m.push(i[l][0]),i[l]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e]);u&&u(a);while(m.length)m.shift()();return c.push.apply(c,n||[]),s()}function s(){for(var t,a=0;a<c.length;a++){for(var s=c[a],e=!0,r=1;r<s.length;r++){var o=s[r];0!==i[o]&&(e=!1)}e&&(c.splice(a--,1),t=l(l.s=s[0]))}return t}var e={},i={app:0},c=[];function l(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=t,l.c=e,l.d=function(t,a,s){l.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,a){if(1&a&&(t=l(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)l.d(s,e,function(a){return t[a]}.bind(null,e));return s},l.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(a,"a",a),a},l.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},l.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=a,r=r.slice();for(var n=0;n<r.length;n++)a(r[n]);var u=o;c.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"034f":function(t,a,s){"use strict";var e=s("64a9"),i=s.n(e);i.a},"0fc8":function(t,a,s){},"240e":function(t,a,s){"use strict";var e=s("30cf"),i=s.n(e);i.a},"30cf":function(t,a,s){},"56d7":function(t,a,s){"use strict";s.r(a);s("cadf"),s("551c"),s("f751"),s("097d");var e=s("a026"),i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("h1",[t._v("Colleen Treks EBC")]),s("router-view")],1)},c=[],l={name:"app"},r=l,o=(s("034f"),s("2877")),n=Object(o["a"])(r,i,c,!1,null,null,null),u=n.exports,d=s("5f5b"),m=(s("f9e3"),s("2dd8"),s("8c4f")),h=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"hello"},[s("h5",[t._v("In April 2018, I was part of the inaugural Climb2Cure team to go to Everest Base Camp (EBC) in the Nepalese Himalayas. It was an amazing experience and definitely one of the hardest things I've ever done. But the experience was truly a once in a lifetime experience and it definitely took my breath away in more ways than one.")]),t._m(0),s("div",{staticClass:"container"},[s("div",{staticClass:"card border-0 shadow"},[s("div",{staticClass:"card-body text-center"},[s("h5",{staticClass:"card-title mb-0"},[s("router-link",{attrs:{to:"/Blog"}},[t._v("Blog")])],1),s("div",{staticClass:"card-text text-black-50"},[t._v("Read about my adventures")])])]),s("div",{staticClass:"card border-0 shadow"},[s("div",{staticClass:"card-body text-center"},[s("h5",{staticClass:"card-title mb-0"},[s("router-link",{attrs:{to:"/Gallery"}},[t._v("Pictures")])],1),s("div",{staticClass:"card-text text-black-50"},[t._v("See the sights")])])])])])},f=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("header",[s("iframe",{attrs:{title:"vimeo-player",src:"https://player.vimeo.com/video/298204030",width:"640",height:"360",frameborder:"0",allowfullscreen:""}})])}],p={name:"HelloWorld",props:{msg:String}},v=p,b=(s("6976"),Object(o["a"])(v,h,f,!1,null,"1f3ca9ed",null)),g=b.exports,C=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"blog"},[s("h3",[t._v("My Journey")]),s("ul",t._l(t.blogs,function(a,e){return s("li",{key:e},[s("button",{on:{click:function(s){return t.getPost(a)}}},[t._v(t._s(a.title))])])}),0),s("div",{staticClass:"container"},[s("div",{staticClass:"card border-0 shadow"},[s("div",{staticClass:"card-body text-center"},[s("h5",{staticClass:"card-title mb-0"},[s("router-link",{attrs:{to:"/Gallery"}},[t._v("Pictures")])],1),s("div",{staticClass:"card-text text-black-50"},[t._v("see the sights")])])]),s("div",{staticClass:"card border-0 shadow"},[s("div",{staticClass:"card-body text-center"},[s("h5",{staticClass:"card-title mb-0"},[s("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),s("div",{staticClass:"card-text text-black-50"},[t._v("Go back to the beginning")])])])])])},x=[],y=[{title:"| Day 1: Sleeping in airports |","from-city":"Seattle","from-id":"xxx","to-city":"Vancouver","to-id":"xxx"},{title:"| Day 2: Flying across the International Date Line |","from-city":"Vancouver","from-id":"xxx","to-city":"Guangzhou","to-id":"xxx"}],_={name:"Blog",data:function(){return{blogs:y}},methods:{getPost:function(t){console.log(t),this.$router.push({name:"Blog",params:{blog:t}})}}},k=_,w=(s("96fc"),Object(o["a"])(k,C,x,!1,null,"450592c9",null)),E=w.exports,O=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"gallery"},[t._m(0),s("div",{staticClass:"container"},[s("div",{staticClass:"card border-0 shadow"},[s("div",{staticClass:"card-body text-center"},[s("h5",{staticClass:"card-title mb-0"},[s("router-link",{attrs:{to:"/Blog"}},[t._v("Blog")])],1),s("div",{staticClass:"card-text text-black-50"},[t._v("Read about my adventures")])])]),s("div",{staticClass:"card border-0 shadow"},[s("div",{staticClass:"card-body text-center"},[s("h5",{staticClass:"card-title mb-0"},[s("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),s("div",{staticClass:"card-text text-black-50"},[t._v("Go back to the beginning")])])])])])},j=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("hr",{staticClass:"mt-2 mb-5"}),s("div",{staticClass:"row text-center text-lg-left"},[s("div",{staticClass:"col-lg-3 col-md-4 col-6"},[s("a",{staticClass:"d-block mb-4 h-100",attrs:{href:"#"}},[s("img",{staticClass:"img-fluid img-thumbnail",attrs:{src:"https://source.unsplash.com/pWkk7iiCoDM/400x300",alt:""}})])]),s("div",{staticClass:"col-lg-3 col-md-4 col-6"},[s("a",{staticClass:"d-block mb-4 h-100",attrs:{href:"#"}},[s("img",{staticClass:"img-fluid img-thumbnail",attrs:{src:"https://source.unsplash.com/aob0ukAYfuI/400x300",alt:""}})])]),s("div",{staticClass:"col-lg-3 col-md-4 col-6"},[s("a",{staticClass:"d-block mb-4 h-100",attrs:{href:"#"}},[s("img",{staticClass:"img-fluid img-thumbnail",attrs:{src:"https://source.unsplash.com/EUfxH-pze7s/400x300",alt:""}})])]),s("div",{staticClass:"col-lg-3 col-md-4 col-6"},[s("a",{staticClass:"d-block mb-4 h-100",attrs:{href:"#"}},[s("img",{staticClass:"img-fluid img-thumbnail",attrs:{src:"https://source.unsplash.com/M185_qYH8vg/400x300",alt:""}})])]),s("div",{staticClass:"col-lg-3 col-md-4 col-6"},[s("a",{staticClass:"d-block mb-4 h-100",attrs:{href:"#"}},[s("img",{staticClass:"img-fluid img-thumbnail",attrs:{src:"https://source.unsplash.com/sesveuG_rNo/400x300",alt:""}})])]),s("div",{staticClass:"col-lg-3 col-md-4 col-6"},[s("a",{staticClass:"d-block mb-4 h-100",attrs:{href:"#"}},[s("img",{staticClass:"img-fluid img-thumbnail",attrs:{src:"https://source.unsplash.com/AvhMzHwiE_0/400x300",alt:""}})])]),s("div",{staticClass:"col-lg-3 col-md-4 col-6"},[s("a",{staticClass:"d-block mb-4 h-100",attrs:{href:"#"}},[s("img",{staticClass:"img-fluid img-thumbnail",attrs:{src:"https://source.unsplash.com/2gYsZUmockw/400x300",alt:""}})])]),s("div",{staticClass:"col-lg-3 col-md-4 col-6"},[s("a",{staticClass:"d-block mb-4 h-100",attrs:{href:"#"}},[s("img",{staticClass:"img-fluid img-thumbnail",attrs:{src:"https://source.unsplash.com/EMSDtjVHdQ8/400x300",alt:""}})])]),s("div",{staticClass:"col-lg-3 col-md-4 col-6"},[s("a",{staticClass:"d-block mb-4 h-100",attrs:{href:"#"}},[s("img",{staticClass:"img-fluid img-thumbnail",attrs:{src:"https://source.unsplash.com/8mUEy0ABdNE/400x300",alt:""}})])]),s("div",{staticClass:"col-lg-3 col-md-4 col-6"},[s("a",{staticClass:"d-block mb-4 h-100",attrs:{href:"#"}},[s("img",{staticClass:"img-fluid img-thumbnail",attrs:{src:"https://source.unsplash.com/G9Rfc1qccH4/400x300",alt:""}})])]),s("div",{staticClass:"col-lg-3 col-md-4 col-6"},[s("a",{staticClass:"d-block mb-4 h-100",attrs:{href:"#"}},[s("img",{staticClass:"img-fluid img-thumbnail",attrs:{src:"https://source.unsplash.com/aJeH0KcFkuc/400x300",alt:""}})])]),s("div",{staticClass:"col-lg-3 col-md-4 col-6"},[s("a",{staticClass:"d-block mb-4 h-100",attrs:{href:"#"}},[s("img",{staticClass:"img-fluid img-thumbnail",attrs:{src:"https://source.unsplash.com/p2TQ-3Bh3Oo/400x300",alt:""}})])])])])}],B={name:"Gallery",data:function(){return{pictures:["| pic |","| pic |","| pic |","| pic |","| pic |","| pic |","| pic |","| pic |","| pic |","| pic |","| pic |","| pic |","| pic |","| pic |","| pic |","| pic |","| pic |","| pic |"]}}},P=B,H=(s("240e"),Object(o["a"])(P,O,j,!1,null,"37c89036",null)),G=H.exports,S=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"post"},[s("div",{staticClass:"text"},[t._v("Namaste")]),s("div",{staticClass:"cities"})])}],$=(s("bc3a"),{name:"post",props:{default:!0,nav:!0},data:function(){return{posts:[],errors:[]}},created:function(){console.log(this.info)}}),A=$,I=Object(o["a"])(A,S,M,!1,null,null,null),D=I.exports;e["default"].use(m["a"]);var T=new m["a"]({routes:[{path:"/",name:"HelloWorld",component:g},{path:"/Blog",name:"Blog",component:E},{path:"/Gallery",name:"Gallery",component:G},{path:"/Post",name:"Post",component:D}]});e["default"].config.productionTip=!1,e["default"].use(d["a"]),new e["default"]({el:"#app",router:T,template:"<App/>",components:{App:u}})},"64a9":function(t,a,s){},6976:function(t,a,s){"use strict";var e=s("f246"),i=s.n(e);i.a},"96fc":function(t,a,s){"use strict";var e=s("0fc8"),i=s.n(e);i.a},f246:function(t,a,s){}});
//# sourceMappingURL=app.08e7f563.js.map
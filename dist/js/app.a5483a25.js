(function(t){function n(n){for(var r,a,s=n[0],c=n[1],l=n[2],f=0,p=[];f<s.length;f++)a=s[f],o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(n);while(p.length)p.shift()();return i.push.apply(i,l||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],r=!0,s=1;s<e.length;s++){var c=e[s];0!==o[c]&&(r=!1)}r&&(i.splice(n--,1),t=a(a.s=e[0]))}return t}var r={},o={app:0},i=[];function a(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=r,a.d=function(t,n,e){a.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,n){if(1&n&&(t=a(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)a.d(e,r,function(n){return t[n]}.bind(null,r));return e},a.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var u=c;i.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var r=e("64a9"),o=e.n(r);o.a},1874:function(t,n,e){"use strict";var r=e("c18b"),o=e.n(r);o.a},"23ef":function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("097d");var r=e("2b0e"),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("ScrollPage",{attrs:{pictures:t.pics}})],1)},i=[],a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{ref:"container",staticClass:"scroll-container"},t._l(t.pictures,function(n,r){return e("div",{key:r,staticClass:"scroll-item",on:{touchstart:function(n){return n.stopPropagation(),n.preventDefault(),t.handleStart(n)},touchmove:function(n){return n.stopPropagation(),n.preventDefault(),t.handleMove(n)},touchend:function(n){return n.stopPropagation(),n.preventDefault(),t.handleEnd(n)}}},[e("scroll-item",{attrs:{item:n}})],1)}),0)},s=[],c=(e("6b54"),e("ac6a"),function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)}),l=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content"},[t._v("\n  ScrollItem 组件，你可以随意定制\n  "),e("br"),t._v("\n  这里是每页的内容\n  "),e("br"),t._v("\n  注意样式里的高度哦\n")])}],u=(e("1874"),e("2877")),f={},p=Object(u["a"])(f,c,l,!1,null,null,null);p.options.__file="ScrollItem.vue";var h=p.exports,d=window.innerHeight,v=Math.floor(.2*d),_={name:"picture-switcher",components:{ScrollItem:h},props:{pictures:Array},data(){return{scrollIndex:0,startPoint:0}},mounted(){this.$children.forEach(t=>{t.$el.style.backgroundColor="#"+("00000"+(16777216*Math.random()<<0).toString(16)).substr(-6)})},methods:{handleStart(t){this.startPoint=t.touches[0].clientY,this.$refs.container.style.transition="none"},handleMove(t){var n=-(d*this.scrollIndex+this.startPoint)+t.touches[0].clientY;this.moveContainer(n)},handleEnd(t){var n=t.changedTouches[0].clientY;Math.abs(this.startPoint-n)>v&&(this.startPoint>n?(this.scrollIndex++,this.scrollIndex===this.pictures.length&&(this.scrollIndex=this.pictures.length-1)):(this.scrollIndex--,this.scrollIndex<0&&(this.scrollIndex=0))),this.$refs.container.style.transition=".4s ease-out",this.moveContainer(this.scrollIndex*-d)},moveContainer(t){this.$refs.container.style.transform="translateY("+t+"px)"}}},b=_;function m(t){var n=e("e274");n.__inject__&&n.__inject__(t)}var g=Object(u["a"])(b,a,s,!1,m,"32bc35f9",null,!0);g.options.__file="ScrollPage.vue";var y=g.exports,x={name:"app",components:{ScrollPage:y},data:function(){return{pics:[{},{},{},{},{}]}}},P=x,S=(e("034f"),Object(u["a"])(P,o,i,!1,null,null,null));S.options.__file="App.vue";var j=S.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(j)}}).$mount("#app")},"64a9":function(t,n,e){},c18b:function(t,n,e){},e274:function(t,n,e){"use strict";e.r(n);var r=e("23ef"),o=e.n(r);for(var i in r)"default"!==i&&function(t){e.d(n,t,function(){return r[t]})}(i);n["default"]=o.a}});
//# sourceMappingURL=app.a5483a25.js.map
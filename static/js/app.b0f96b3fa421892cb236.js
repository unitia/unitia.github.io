webpackJsonp([1],{"/KV2":function(t,e){},"8jzj":function(t,e){},"9pgk":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("b-navbar",[n("template",{slot:"end"},[n("b-navbar-item",{attrs:{tag:"router-link",to:"/"}},[t._v("\n        Home\n        ")]),t._v(" "),n("b-navbar-item",{attrs:{tag:"router-link",to:"HowtoTodo"}},[t._v("\n          HowtoTodo\n        ")]),t._v(" "),n("b-navbar-item",{attrs:{tag:"router-link",to:"Todo"}},[t._v("\n          Todo\n        ")])],1)],2),t._v(" "),n("section",[n("router-view")],1),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"content has-text-centered"},[e("p",[e("strong",[this._v("UnitiaBuilder Site.")]),this._v(" by "),e("a",{attrs:{href:"https://e10ulen.hatenablog.com/"}},[this._v("SEN@")])])])])}]};var i=n("VU/8")({name:"App"},s,!1,function(t){n("tGHM")},null,null).exports,a=n("/ocq"),r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("article",{staticClass:"media"},[o("br"),t._v(" "),o("figure",{staticClass:"media-left"},[o("p",{staticClass:"image is-128x128"},[o("img",{attrs:{src:n("bk2F"),alt:"iphone se"}}),t._v(" "),o("img",{attrs:{src:n("bzi3"),alt:"Asus zenfone3 laser"}}),t._v(" "),o("img",{attrs:{src:n("yR3K"),alt:"Asus Zenpad 3"}}),t._v(" "),o("img",{attrs:{src:n("kzo0"),alt:"Asus Zenfone5z"}})])]),t._v(" "),o("div",{staticClass:"media-content"},[o("div",{staticClass:"content"},[o("p",[t._v("\n        右上のメニューのTodoよりローカルストレージを利用した。ブラウザ毎のTodoリストが利用可能です。"),o("br"),t._v("\n        ブラウザ毎のTodoですので、スマホとPCを同期させたり等は現状利用不可能です。"),o("br"),t._v("\n        一応、実装検証のため、zenfone3laser、Zenfone5z、Zenpad3、HuwaeiP20lite、iPhoneSE、での検証を行いましたが、無事使う事が出来たので、リリースします。"),o("br"),t._v("\n        左の画像はzenfone3とiPhoneSEでの検証時のスクリーンショットになります。"),o("br")])]),t._v(" "),o("nav",{staticClass:"level is-mobile"})]),o("br")])}]};var c=n("VU/8")({},r,!1,function(t){n("WC7P")},null,null).exports,l=n("mvHQ"),d=n.n(l),u={props:{isChecked:Boolean,title:String},mounted:function(){this.loadTodo()},data:function(){return{items:[],newTodoItem:""}},watch:{items:{handler:function(){this.saveTodo()},deep:!0}},methods:{addTodoItem:function(){this.items.push({title:this.newTodoItem,isChecked:!1}),this.newTodoItem=""},deleteTodoItem:function(){this.items=this.items.filter(function(t){return!1===t.isChecked})},deleteTodoText:function(){this.newTodoItem=""},saveTodo:function(){localStorage.setItem("items",d()(this.items))},loadTodo:function(){this.items=JSON.parse(localStorage.getItem("items")),this.items||(this.items=[])}}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"panel"},[n("p",{staticClass:"panel-heading"},[t._v("Vue Todo")]),t._v(" "),n("div",{staticClass:"panel-block"},[n("b-field",{attrs:{grouped:""}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodoItem,expression:"newTodoItem"}],staticClass:"input",attrs:{placeholder:"TodoText",type:"text"},domProps:{value:t.newTodoItem},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodoItem(e)},input:function(e){e.target.composing||(t.newTodoItem=e.target.value)}}}),t._v(" "),n("div",{staticClass:"control"},[n("b-button",{attrs:{expanded:""},on:{click:function(e){return t.addTodoItem()}}},[t._v("Add")]),t._v(" "),n("b-button",{attrs:{expanded:""},on:{click:function(e){return t.deleteTodoItem()}}},[t._v("Delete")])],1)])],1),t._v(" "),n("div",{staticClass:"panel-list-item control"},t._l(t.items,function(e){return n("b-field",{key:e.title,staticClass:"panel-block"},[n("label",{class:{done:t.isChecked}},[n("b-checkbox",{attrs:{type:"checkbox","aria-hidden":"true"},model:{value:e.isChecked,callback:function(n){t.$set(e,"isChecked",n)},expression:"item.isChecked"}},[t._v(t._s(e.title))])],1)])}),1)])])},staticRenderFns:[]};var v=n("VU/8")(u,p,!1,function(t){n("8jzj")},null,null).exports,m={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"hero"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[t._v("\r\n        Unitia-builder\r\n      ")]),t._v(" "),n("h2",{staticClass:"subtitle"},[t._v("\r\n        e10ulen & kntok and you site.\r\n      ")])])]),t._v(" "),n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[t._v("Todo")]),t._v(" "),n("h2",{staticClass:"subtitle"},[t._v("\r\n        How to Todo に使い方を記載\r\n      ")])]),t._v(" "),n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[t._v("more...")]),t._v(" "),n("h2",{staticClass:"subtitle"},[t._v("\r\n        Google Drive APIを用いて、Todoをローカルストレージではなく、Googleアカウント上での共有に切り替えて"),n("br"),t._v("\r\n        スマホ、PC、タブレットから同じTodoを参照できるようにする事。"),n("br"),t._v("\r\n        ローカルストレージの廃止、今使われている部分を刷新し、ローカルストレージのデータを一度でも拾ったら、ローカルストレージを削除して、"),n("br"),t._v("\r\n        ブラウザが保管する部分をやめていく（習作のためローカルストレージを使っただけであって、今後はTodoの個人アカウント内共有を目指す。"),n("br")])])])}]};var _=n("VU/8")({},m,!1,function(t){n("9pgk")},null,null).exports;o.a.use(a.a);var h=new a.a({routes:[{path:"/",name:"Home",component:_},{path:"/HowtoTodo",name:"HowtoTodo",component:c},{path:"/Todo",name:"Todo",component:v}]}),f=n("yXtV"),b=n.n(f),T=n("AYPi"),C=n.n(T),g=n("kxiW"),k=n.n(g),w=n("k5jX");n("/KV2");o.a.use(w.a),o.a.use(b.a),o.a.use(C.a,{id:"UA-129010178-2",router:h});k.a.initializeApp({apiKey:"AIzaSyAOspUPr9vShTnPqftcX9JGolBjd6671VE",authDomain:"list-do-twitter.firebaseapp.com",databaseURL:"https://list-do-twitter.firebaseio.com",projectId:"list-do-twitter",storageBucket:"",messagingSenderId:"446560748204",appId:"1:446560748204:web:ea1241462d92970f"}),o.a.config.productionTip=!1,new o.a({el:"#app",router:h,template:"<App/>",components:{App:i}})},WC7P:function(t,e){},bk2F:function(t,e,n){t.exports=n.p+"static/img/IMG_0002.cda7d05.jpg"},bzi3:function(t,e,n){t.exports=n.p+"static/img/Screenshot_20190805-032147.06939c7.jpg"},kzo0:function(t,e,n){t.exports=n.p+"static/img/537.7be5ca5.jpg"},tGHM:function(t,e){},yR3K:function(t,e,n){t.exports=n.p+"static/img/69091.93d266a.jpg"}},["NHnr"]);
//# sourceMappingURL=app.b0f96b3fa421892cb236.js.map
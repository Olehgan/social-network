(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,function(e,s,t){e.exports={nav:"Navbar_nav__eqcMv",item:"Navbar_item__3b-uv",active:"Navbar_active__1GiTZ"}},function(e,s,t){e.exports={dialogs:"Dialogs_dialogs__3To99",dialogItems:"Dialogs_dialogItems___h-Oc",active:"Dialogs_active__K3abn",messages:"Dialogs_messages__1dpyf",message:"Dialogs_message__MZcYn"}},,,,function(e,s,t){e.exports={postsBlock:"MyPosts_postsBlock__1Rtas",posts:"MyPosts_posts__2LUjk"}},,function(e,s,t){e.exports={header:"Header_header__2-4SC"}},function(e,s,t){e.exports={item:"Post_item__1PIDu"}},function(e,s,t){e.exports={description:"ProfileInfo_description__2330y"}},,,,,function(e,s,t){},function(e,s,t){},,function(e,s,t){"use strict";t.r(s);t(1);var c=t(11),i=t.n(c),n=(t(19),t(20),t(12)),a=t.n(n),j=t(4),r=t(0),l=function(){return Object(r.jsx)("header",{className:a.a.header,children:Object(r.jsx)(j.b,{to:"/profile",children:Object(r.jsx)("img",{src:"https://i.pinimg.com/236x/71/b3/e4/71b3e4159892bb319292ab3b76900930.jpg",alt:"image"})})})},o=t(5),d=t.n(o),b=function(){return Object(r.jsxs)("nav",{className:d.a.nav,children:[Object(r.jsx)("div",{className:d.a.item,children:Object(r.jsx)(j.b,{to:"/profile",className:function(e){return e.isActive?d.a.active:""},children:"Profile"})}),Object(r.jsx)("div",{className:d.a.item,children:Object(r.jsx)(j.b,{to:"/dialogs",className:function(e){return e.isActive?d.a.active:""},children:"Messages"})}),Object(r.jsx)("div",{className:d.a.item,children:Object(r.jsx)(j.b,{to:"/news",className:function(e){return e.isActive?d.a.active:""},children:"News"})}),Object(r.jsx)("div",{className:d.a.item,children:Object(r.jsx)(j.b,{to:"/music",className:function(e){return e.isActive?d.a.active:""},children:"Music"})}),Object(r.jsx)("div",{className:d.a.item,children:Object(r.jsx)(j.b,{to:"/settings",className:function(e){return e.isActive?d.a.active:""},children:"Settings"})})]})},m=t(2),x=t(10),O=t.n(x),u=t(13),h=t.n(u),p=function(e){return Object(r.jsxs)("div",{className:h.a.item,children:[Object(r.jsx)("img",{src:"https://pngimg.com/uploads/mr_bean/mr_bean_PNG16.png",alt:"photo"}),e.messages,Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{children:"like"})," ",e.likesCounts]})]})},v=function(){return Object(r.jsxs)("div",{className:O.a.postsBlock,children:[Object(r.jsx)("h3",{children:"My posts"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:Object(r.jsx)("textarea",{})}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:" Add post"})})]}),Object(r.jsxs)("div",{className:O.a.posts,children:[Object(r.jsx)(p,{messages:"Hi my friend",likesCounts:20}),Object(r.jsx)(p,{messages:"Hi my brother",likesCounts:15})]})]})},g=t(14),_=t.n(g),f=function(){return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{children:[Object(r.jsx)("img",{src:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",alt:"images"}),Object(r.jsx)("div",{className:_.a.description,children:"ava + description"})]})})},N=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(f,{}),Object(r.jsx)(v,{})]})},y=t(6),k=t.n(y),w=function(e){return Object(r.jsx)("div",{className:k.a.dialog+" "+k.a.active,children:Object(r.jsx)(j.b,{to:"/dialogs"+e.id,children:e.name})})},P=function(e){return Object(r.jsx)("div",{className:k.a.message,children:e.message})},D=function(){return Object(r.jsxs)("div",{className:k.a.dialogs,children:[Object(r.jsxs)("div",{className:k.a.dialogItems,children:[Object(r.jsx)(w,{name:"Oleg",id:1}),Object(r.jsx)(w,{name:"Dimas",id:2}),Object(r.jsx)(w,{name:"Any",id:3}),Object(r.jsx)(w,{name:"Ilia",id:4})]}),Object(r.jsxs)("div",{className:k.a.messages,children:[Object(r.jsx)(P,{message:"How are you"}),Object(r.jsx)(P,{message:"Hello!!!!\n"}),Object(r.jsx)(P,{message:"Hi!!"})]})]})},I=function(){return Object(r.jsx)("div",{children:"News"})},M=function(){return Object(r.jsx)("div",{children:"Music"})},A=function(){return Object(r.jsx)("div",{children:"Settings"})},C=function(){return Object(r.jsxs)("div",{className:"app-wrapper",children:[Object(r.jsx)(l,{}),Object(r.jsx)(b,{}),Object(r.jsx)("div",{className:"app-wrapper-content",children:Object(r.jsxs)(m.c,{children:[Object(r.jsx)(m.a,{path:"/profile",element:Object(r.jsx)(N,{})}),Object(r.jsx)(m.a,{path:"/dialogs",element:Object(r.jsx)(D,{})}),Object(r.jsx)(m.a,{path:"/news/",element:Object(r.jsx)(I,{})}),Object(r.jsx)(m.a,{path:"/music/",element:Object(r.jsx)(M,{})}),Object(r.jsx)(m.a,{path:"/settings/",element:Object(r.jsx)(A,{})})]})})]})},H=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,23)).then((function(s){var t=s.getCLS,c=s.getFID,i=s.getFCP,n=s.getLCP,a=s.getTTFB;t(e),c(e),i(e),n(e),a(e)}))};i.a.render(Object(r.jsx)(j.a,{children:Object(r.jsx)(C,{})}),document.getElementById("root")),H()}],[[22,1,2]]]);
//# sourceMappingURL=main.ae030e0f.chunk.js.map
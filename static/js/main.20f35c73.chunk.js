(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{116:function(e,t,s){},142:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),i=s(31),c=s.n(i),r=s(17),o=(s(116),s(26)),u=s.n(o),l=s(1),j=function(){return Object(l.jsxs)("nav",{className:u.a.nav,children:[Object(l.jsx)("div",{className:u.a.item,children:Object(l.jsx)(r.b,{to:"/profile",className:function(e){return e.isActive?u.a.active:""},children:"Profile"})}),Object(l.jsx)("div",{className:u.a.item,children:Object(l.jsx)(r.b,{to:"/dialogs",className:function(e){return e.isActive?u.a.active:""},children:"Messages"})}),Object(l.jsx)("div",{className:u.a.item,children:Object(l.jsx)(r.b,{to:"/users",className:function(e){return e.isActive?u.a.active:""},children:"Users"})}),Object(l.jsx)("div",{className:u.a.item,children:Object(l.jsx)(r.b,{to:"/news",className:function(e){return e.isActive?u.a.active:""},children:"News"})}),Object(l.jsx)("div",{className:u.a.item,children:Object(l.jsx)(r.b,{to:"/music",className:function(e){return e.isActive?u.a.active:""},children:"Music"})}),Object(l.jsx)("div",{className:u.a.item,children:Object(l.jsx)(r.b,{to:"/settings",className:function(e){return e.isActive?u.a.active:""},children:"Settings"})})]})},d=s(15),b=function(){return Object(l.jsx)("div",{children:"News"})},p=function(){return Object(l.jsx)("div",{children:"Music"})},h=function(){return Object(l.jsx)("div",{children:"Settings"})},g=s(63),O=s.n(g),f=s(71),m=s.n(f),x=function(e){return Object(l.jsx)("div",{className:m.a.dialog+" "+m.a.active,children:Object(l.jsx)(r.b,{to:"/dialogs"+e.id,children:e.name})})},v=s(90),w=s.n(v),P=function(e){return Object(l.jsx)("div",{className:w.a.message,children:e.message})},C=s(22),_=s(16),T=s(8),S="UPDATE_NEW_MESSAGE_TEXT",y="SEND_MESSAGE",N={dialogs:[{id:1,name:"Oleg"},{id:2,name:"Dimas"},{id:3,name:"Any"},{id:4,name:"Ilia"}],messages:[{id:1,message:"How are you"},{id:2,message:"How are you"},{id:3,message:"How are you"}],newMessage:""},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:var s=e.newMessage;return Object(T.a)(Object(T.a)({},e),{},{messages:[].concat(Object(_.a)(e.messages),[{id:4,message:s}]),newMessage:""});case S:return Object(T.a)(Object(T.a)({},e),{},{newMessage:t.body});default:return e}},M=s(100),I=function(e){return{isAuth:e.authMe.isAuth}};function E(e){return Object(C.b)(I)((function(t){t.isAuth;var s=Object(M.a)(t,["isAuth"]);return t.isAuth?Object(l.jsx)(e,Object(T.a)({},s)):Object(l.jsx)(d.a,{to:"/login"})}))}var k=Object(C.b)((function(e){return{dialogsPage:e.dialogsPage}}),{sendMessage:function(){return{type:y}},updateNewMessageText:function(e){return{type:S,body:e}}})(E((function(e){var t=e.dialogsPage,s=t.dialogs.map((function(e){return Object(l.jsx)(x,{name:e.name,id:e.id},e.id)})),n=t.messages.map((function(e){return Object(l.jsx)(P,{message:e.message},e.id)})),a=t.newMessage;return Object(l.jsxs)("div",{className:O.a.dialogs,children:[Object(l.jsx)("div",{className:O.a.dialogItems,children:s}),Object(l.jsxs)("div",{className:O.a.messages,children:[Object(l.jsx)("div",{children:n}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsx)("textarea",{placeholder:"Enter text",value:a,onChange:function(t){a=t.currentTarget.value,e.updateNewMessageText(a)},children:" "})}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:function(){e.sendMessage()},children:"Send"})})]})]})]})}))),F=s(32),U=s(33),D=s(42),L=s(40),R=s(91),B=s.n(R).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"5883697e-1933-44d6-978d-c735fd6eee7a"}}),H=function(e,t){return B.get("users?page=".concat(e," &count").concat(t))},z=function(e){return B.post("follow/".concat(e))},G=function(e){return B.get("profile/".concat(e))},W=function(e){return B.get("profile/status/".concat(e))},Z=function(e){return B.put("profile/status",{status:e})},q=function(){return B.get("auth/me")},V=function(e){return B.post("/auth/login",e)},J="FOLLOW",K="UNFOLLOW",Q="SET_USERS",X="SET_USERS_COUNT",Y="SET_TOTAL_COUNT",$="TOGGLE_IS_FETCHING",ee="TOGGLE_FOLLOW_IS_PROGRESS",te={users:[],totalCount:0,pageSize:5,currentPage:1,error:"",isFetching:!1,followingInProgress:[]},se=function(e){return{type:J,userId:e}},ne=function(e){return{type:K,userId:e}},ae=function(e){return{type:Q,users:e}},ie=function(e){return{type:Y,totalCount:e}},ce=function(e){return{type:$,isFetching:e}},re=function(e,t){return{type:ee,isFetching:e,userId:t}},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:return Object(T.a)(Object(T.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(T.a)(Object(T.a)({},e),{},{followed:!0}):e}))});case K:return Object(T.a)(Object(T.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(T.a)(Object(T.a)({},e),{},{followed:!1}):e}))});case Q:return Object(T.a)(Object(T.a)({},e),{},{users:t.users});case X:return Object(T.a)(Object(T.a)({},e),{},{currentPage:t.currentPage});case Y:return Object(T.a)(Object(T.a)({},e),{},{totalCount:t.totalCount});case $:return Object(T.a)(Object(T.a)({},e),{},{isFetching:t.isFetching});case ee:return Object(T.a)(Object(T.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(_.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},ue=s.p+"static/media/young-user-icon_5f450e6354e9e.4ce1ce10.png",le=s(72),je=s.n(le),de=function(e){for(var t=Math.ceil(e.totalCount/e.pageSize),s=[],n=1;n<=t;n++)s.push(n);return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:s.map((function(t){return Object(l.jsx)("span",{className:e.currentPage===t?je.a.selectedPage:"",onClick:function(){e.onPageChange(t)},children:t+"..."})}))}),e.users.map((function(t){return Object(l.jsxs)("div",{children:[Object(l.jsxs)("span",{children:[Object(l.jsx)("div",{children:Object(l.jsxs)(r.b,{to:"/profile/"+t.id,children:[" ",Object(l.jsx)("img",{src:null!==t.photos.small?t.photos.small:ue,alt:"image",className:je.a.usersPhoto},t.id)]})}),Object(l.jsx)("div",{children:t.followed?Object(l.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollowTC(t.id)},children:"Unfollow"}):Object(l.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.followTC(t.id)},children:"Follow"})})]}),Object(l.jsxs)("span",{children:[Object(l.jsxs)("span",{children:[Object(l.jsx)("div",{children:t.name}),Object(l.jsx)("div",{children:t.status})]}),Object(l.jsxs)("span",{children:[Object(l.jsx)("div",{children:"u.location.city"}),Object(l.jsx)("div",{children:"u.location.country"})]})]})]},t.id)}))]})},be=s.p+"static/media/preloader.c7d9f081.gif",pe=function(e){return Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:be,alt:""})})},he=function(e){Object(D.a)(s,e);var t=Object(L.a)(s);function s(){var e;Object(F.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).onPageChange=function(t){e.props.getUsersTC(t,e.props.pageSize)},e}return Object(U.a)(s,[{key:"componentDidMount",value:function(){this.props.getUsersTC(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{children:this.props.isFetching?Object(l.jsx)(pe,{}):null}),Object(l.jsx)(de,{onPageChange:this.onPageChange,currentPage:this.props.currentPage,pageSize:this.props.pageSize,totalCount:this.props.totalCount,unfollow:this.props.unfollow,follow:this.props.follow,users:this.props.users,setToggleFollowingProgress:this.props.setToggleFollowingProgress,followingInProgress:this.props.followingInProgress,isFetching:this.props.isFetching,followTC:this.props.followTC,unfollowTC:this.props.unfollowTC})]})}}]),s}(a.a.Component),ge=Object(C.b)((function(e){return{users:e.usersPage.users,totalCount:e.usersPage.totalCount,pageSize:e.usersPage.pageSize,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,followingInProgress:e.usersPage.followingInProgress}}),{follow:se,unfollow:ne,setUsers:ae,setCurrentPage:function(e){return{type:X,currentPage:e}},setTotalUsersCount:ie,toggleIsFetching:ce,setToggleFollowingProgress:re,getUsersTC:function(e,t){return function(s){s(ce(!0)),H(e,t).then((function(e){s(ce(!1)),s(ae(e.data.items)),s(ie(e.data.totalCount))}))}},followTC:function(e){return function(t){t(re(!0,e)),z(e).then((function(s){0===s.data.resultCode&&se(e),t(re(!1,e))}))}},unfollowTC:function(e){return function(t){t(re(!0,e)),z(e).then((function(s){0===s.data.resultCode&&ne(e),t(re(!1,e))}))}}})(E(he)),Oe=s(92),fe=s.n(Oe),me=function(e){Object(D.a)(s,e);var t=Object(L.a)(s);function s(){var e;Object(F.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={editMode:!1,status:e.props.status},e.activateEditMode=function(){e.setState({editMode:!0})},e.deActivateEditMode=function(){e.setState({editMode:!1}),e.props.updateStatusTC(e.state.status)},e.onStatusChange=function(t){e.setState({status:t.currentTarget.value})},e}return Object(U.a)(s,[{key:"componentDidUpdate",value:function(e,t,s){e.status!==this.props.status&&this.setState({status:this.props.status}),console.log("componentDidUpdate")}},{key:"render",value:function(){return console.log("render"),Object(l.jsx)("div",{children:this.state.editMode?Object(l.jsx)("div",{children:Object(l.jsx)("input",{autoFocus:!0,onBlur:this.deActivateEditMode,onChange:this.onStatusChange,value:this.state.status})}):Object(l.jsx)("div",{children:Object(l.jsx)("span",{onDoubleClick:this.activateEditMode,children:this.props.status||"----"})})})}}]),s}(a.a.Component),xe=function(e){return e.profile?Object(l.jsx)("div",{children:Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:fe.a.description,children:[Object(l.jsx)(r.b,{to:"/profile",children:Object(l.jsx)("img",{src:e.profile.photos.large,alt:"profile photo"})}),Object(l.jsx)("div",{children:Object(l.jsx)(me,{status:e.status,updateStatusTC:e.updateStatusTC})})]})})}):Object(l.jsx)(pe,{})},ve=s(73),we=s.n(ve),Pe=s(93),Ce=s.n(Pe),_e=function(e){return Object(l.jsxs)("div",{className:Ce.a.item,children:[Object(l.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFb5fMw2UHXHnnNcW6t2Dpa7A_Ubc-9sTvEA&usqp=CAU",alt:"photo"}),e.messages,Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:"like"})," ",e.likesCounts]})]})},Te="UPDATE_NEW_POST_ TEXT",Se="ADD_POST",ye="SET_USERS_PROFILE",Ne="SET_STATUS",Ae={newPostText:"",posts:[{id:1,message:"Hi my friend",likesCounts:20},{id:2,message:"How are you",likesCounts:15}],profile:null,status:""},Me=function(e){return{type:ye,profile:e}},Ie=function(e){return{type:Ne,status:e}},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Se:return Object(T.a)(Object(T.a)({},e),{},{posts:[].concat(Object(_.a)(e.posts),[{id:5,message:e.newPostText,likesCounts:12}]),newPostText:""});case Te:return Object(T.a)(Object(T.a)({},e),{},{newPostText:t.newText});case ye:return Object(T.a)(Object(T.a)({},e),{},{profile:t.profile});case Ne:return Object(T.a)(Object(T.a)({},e),{},{status:t.status});default:return e}},ke=Object(C.b)((function(e){return{newPostText:e.profilePage.newPostText,posts:e.profilePage.posts}}),(function(e){return{addPost:function(){e({type:Se})},onNewPostTextChange:function(t){e({type:Te,newText:t})}}}))((function(e){var t=e.posts.map((function(e){return Object(l.jsx)(_e,{messages:e.message,likesCounts:e.likesCounts},e.id)}));return Object(l.jsxs)("div",{className:we.a.postsBlock,children:[Object(l.jsx)("h3",{children:"My posts"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsx)("textarea",{value:e.newPostText,onChange:function(t){var s=t.currentTarget.value;e.onNewPostTextChange(s),console.log(s)}})}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:function(){e.addPost()},children:" Add post"})})]}),Object(l.jsx)("div",{className:we.a.posts,children:t})]})})),Fe=function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)(xe,{profile:e.profile,status:e.status,updateStatusTC:e.updateStatusTC}),Object(l.jsx)(ke,{})]})};var Ue,De=function(e){Object(D.a)(s,e);var t=Object(L.a)(s);function s(){return Object(F.a)(this,s),t.apply(this,arguments)}return Object(U.a)(s,[{key:"componentDidMount",value:function(){var e=this.props.userId;e||(e="20829"),this.props.getUsersProfileTC(e),this.props.getStatusTC(e)}},{key:"render",value:function(){return Object(l.jsx)("div",{children:Object(l.jsx)(Fe,Object(T.a)(Object(T.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatusTC:this.props.updateStatusTC}))})}}]),s}(a.a.Component),Le=Object(C.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status}}),{setUserProfile:Me,toggleIsFetching:ce,setStatus:Ie,getUsersProfileTC:function(e){return function(t){G(e).then((function(e){t(Me(e.data))}))}},getStatusTC:function(e){return function(t){W(e).then((function(e){t(Ie(e.data))}))}},updateStatusTC:function(e){return function(t){Z(e).then((function(s){0===s.data.resultCode&&t(Ie(e))}))}}})((Ue=De,function(e){var t=Object(d.h)().userId;return Object(l.jsx)(Ue,Object(T.a)({userId:t},e))})),Re=s(74),Be=s.n(Re),He=function(e){return Object(l.jsxs)("header",{className:Be.a.header,children:[Object(l.jsx)(r.b,{to:"/profile",children:Object(l.jsx)("img",{src:"https://i.pinimg.com/236x/71/b3/e4/71b3e4159892bb319292ab3b76900930.jpg",alt:"image"})}),Object(l.jsx)("div",{className:Be.a.loginBlock,children:e.isAuth?e.login:Object(l.jsx)(r.b,{to:"/login",children:" Login"})})]})},ze="SET_USER_DATA",Ge="SET_IS_AUTH",We={id:1,email:"",login:"",isAuth:!1},Ze=function(e,t,s){return{type:ze,data:{id:e,login:t,email:s}}},qe=function(e){return function(t){V(e).then((function(e){0===e.data.resultCode&&t({type:Ge,value:!0})}))}},Ve=function(e){Object(D.a)(s,e);var t=Object(L.a)(s);function s(){return Object(F.a)(this,s),t.apply(this,arguments)}return Object(U.a)(s,[{key:"componentDidMount",value:function(){this.props.getAuthMeTC()}},{key:"render",value:function(){return Object(l.jsx)(He,Object(T.a)({},this.props))}}]),s}(a.a.Component),Je=Object(C.b)((function(e){return{login:e.authMe.login,isAuth:e.authMe.isAuth}}),{setAuthUserData:Ze,getAuthMeTC:function(){return function(e){q().then((function(t){if(0===t.data.resultCode){var s=t.data.data,n=s.id,a=s.login,i=s.email;e(Ze(n,a,i))}}))}}})(Ve),Ke=s(187),Qe=s(183),Xe=s(184),Ye=s(185),$e=s(189),et=s(178),tt=s(181),st=s(188),nt=s(98),at=function(){var e=Object(C.c)(),t=Object(nt.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?e.password.length<=8&&(t.password="Must be 8 characters or less"):t.password="Required",t},onSubmit:function(s){e(qe(s)),t.resetForm()}});return Object(l.jsx)(Ke.a,{container:!0,justifyContent:"center",children:Object(l.jsx)(Ke.a,{item:!0,justifyContent:"center",children:Object(l.jsxs)(Xe.a,{children:[Object(l.jsxs)(et.a,{children:[Object(l.jsxs)("p",{children:["To log in get registered",Object(l.jsx)("a",{href:"https://social-network.samuraijs.com/",target:"_blank",children:" here"})]}),Object(l.jsx)("h1",{children:" Login "})]}),Object(l.jsx)("form",{onSubmit:t.handleSubmit,children:Object(l.jsxs)($e.a,{children:[Object(l.jsx)(tt.a,Object(T.a)({label:"Email",margin:"normal"},t.getFieldProps("email"))),t.touched.email&&t.errors.email&&Object(l.jsx)("div",{style:{color:"red"},children:t.errors.email}),Object(l.jsx)(tt.a,Object(T.a)({type:"password",label:"Password",margin:"normal"},t.getFieldProps("password"))),t.touched.password&&t.errors.password&&Object(l.jsx)("div",{style:{color:"red"},children:t.errors.password}),Object(l.jsx)(Ye.a,{label:"Remember me",control:Object(l.jsx)(Qe.a,{checked:t.values.rememberMe,name:"rememberMe",onChange:t.handleChange})}),Object(l.jsx)(st.a,{type:"submit",variant:"contained",color:"secondary",children:"Login"})]})})]})})})},it=function(){return Object(l.jsxs)("div",{className:"app-wrapper",children:[Object(l.jsx)(Je,{}),Object(l.jsx)(j,{}),Object(l.jsx)("div",{className:"app-wrapper-content",children:Object(l.jsxs)(d.d,{children:[Object(l.jsx)(d.b,{path:"/profile/:userId",element:Object(l.jsx)(Le,{})}),Object(l.jsx)(d.b,{path:"/profile/",element:Object(l.jsx)(Le,{})}),Object(l.jsx)(d.b,{path:"/dialogs",element:Object(l.jsx)(k,{})}),Object(l.jsx)(d.b,{path:"/users",element:Object(l.jsx)(ge,{})}),Object(l.jsx)(d.b,{path:"/news",element:Object(l.jsx)(b,{})}),Object(l.jsx)(d.b,{path:"/music",element:Object(l.jsx)(p,{})}),Object(l.jsx)(d.b,{path:"/settings",element:Object(l.jsx)(h,{})}),Object(l.jsx)(d.b,{path:"/login",element:Object(l.jsx)(at,{})}),Object(l.jsx)(d.b,{path:"/404",element:Object(l.jsx)("h1",{children:"404. Page not Found "})}),Object(l.jsx)(d.b,{path:"*",element:Object(l.jsx)(d.a,{to:"/404"})})]})})]})},ct=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,190)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;s(e),n(e),a(e),i(e),c(e)}))},rt=s(65),ot=s(97),ut=Object(rt.b)({profilePage:Ee,dialogsPage:A,usersPage:oe,authMe:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ze:return Object(T.a)(Object(T.a)(Object(T.a)({},e),t.data),{},{isAuth:!0});case Ge:return Object(T.a)(Object(T.a)({},e),{},{isAuth:t.value});default:return e}}}),lt=Object(rt.c)(ut,Object(rt.a)(ot.a));window.store=lt;var jt=lt;c.a.render(Object(l.jsx)(r.a,{children:Object(l.jsx)(C.a,{store:jt,children:Object(l.jsx)(it,{})})}),document.getElementById("root")),ct()},26:function(e,t,s){e.exports={nav:"Navbar_nav__2889A",item:"Navbar_item__1RaQz",active:"Navbar_active__cOjJ_"}},63:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__3uPon"}},71:function(e,t,s){e.exports={dialogItems:"DialogItem_dialogItems__1VDM_",active:"DialogItem_active__kB7lO"}},72:function(e,t,s){e.exports={usersPhoto:"Users_usersPhoto__2yZ-K",selectedPage:"Users_selectedPage__1gIoe"}},73:function(e,t,s){e.exports={postsBlock:"MyPosts_postsBlock__QZ2Kl",posts:"MyPosts_posts__1dU_s"}},74:function(e,t,s){e.exports={header:"Header_header__4QSu4",loginBlock:"Header_loginBlock__3UM-4"}},90:function(e,t,s){e.exports={messages:"Message_messages__27M7S",message:"Message_message__21cpV"}},92:function(e,t,s){e.exports={description:"ProfileInfo_description__2IISE"}},93:function(e,t,s){e.exports={item:"Post_item__2BVjZ"}}},[[142,1,2]]]);
//# sourceMappingURL=main.20f35c73.chunk.js.map
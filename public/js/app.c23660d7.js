(function(t){function e(e){for(var s,i,o=e[0],l=e[1],c=e[2],u=0,m=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&m.push(n[i][0]),n[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(m.length)m.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,i=1;i<a.length;i++){var l=a[i];0!==n[l]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={app:0},r=[];function i(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"8914efb6"}[t]+".js"}function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,s){a=n[t]=[e,s]}));e.push(a[2]=s);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=i(t);var c=new Error;r=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=n[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+s+": "+r+")",c.name="ChunkLoadError",c.type=s,c.request=r,a[1](c)}n[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t._m(0),a("router-view"),t._m(1)],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{attrs:{id:"header"}},[a("a",{staticClass:"title",attrs:{href:"index.html"}},[t._v("Mischief Writings")]),a("nav",[a("ul",[a("li",[a("a",{attrs:{href:"/"}},[t._v("Home")])]),a("li",[a("a",{attrs:{href:"/stories"}},[t._v("Stories")])]),a("li",[a("a",{attrs:{href:"/authors"}},[t._v("About the Author")])]),a("li",[a("a",{attrs:{href:"/login"}},[t._v("Admin Login")])]),a("li",[a("a",{attrs:{href:"/logout"}},[t._v("Admin Logout")])]),a("li",[a("a",{attrs:{href:"/admin"}},[t._v("Admin Portal")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"wrapper alt",attrs:{id:"footer"}},[a("div",{staticClass:"inner"},[a("ul",{staticClass:"menu"},[a("li",[t._v("© Untitled. All rights reserved.")]),a("li",[t._v("Design: "),a("a",{attrs:{href:"http://html5up.net"}},[t._v("HTML5 UP")])])])])])}],i=a("bc3a"),o=a.n(i),l={data:function(){return{user:{}}},created:function(){var t=this;o.a.get("/api/users").then((function(e){e.data&&(t.user=e.data)}))},methods:{}},c=l,u=a("2877"),d=Object(u["a"])(c,n,r,!1,null,null,null),m=d.exports,p=(a("d3b7"),a("8c4f")),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{attrs:{id:"wrapper"}},[a("section",{staticClass:"wrapper",attrs:{id:"main"}},[a("div",{staticClass:"inner"},[a("h1",{staticClass:"major"},[t._v("Welcome to Mischief Writings")]),t._l(t.intros,(function(e){return a("div",[a("p",{domProps:{innerHTML:t._s(e.introduction)}})])})),t._m(0)],2)])])])},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{attrs:{action:"https://www.paypal.com/cgi-bin/webscr",method:"post",target:"_top"}},[a("input",{attrs:{type:"hidden",name:"cmd",value:"_s-xclick"}}),a("input",{attrs:{type:"hidden",name:"hosted_button_id",value:"QEFCTRPZCTWCL"}}),a("input",{attrs:{type:"image",src:"https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif",border:"0",name:"submit",title:"PayPal - The safer, easier way to pay online!",alt:"Donate with PayPal button"}}),a("img",{attrs:{alt:"",border:"0",src:"https://www.paypal.com/en_US/i/scr/pixel.gif",width:"1",height:"1"}})])}],f={data:function(){return{intros:[]}},created:function(){var t=this;o.a.get("/api/intros").then((function(e){t.intros=e.data}))},methods:{}},_=f,C=Object(u["a"])(_,v,h,!1,null,null,null),w=C.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[a("div",{attrs:{id:"wrapper"}},[a("section",{staticClass:"wrapper",attrs:{id:"main"}},[a("div",{staticClass:"inner"},[a("h1",{staticClass:"major"},[t._v("Login")]),a("div",{staticClass:"container"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.submit()}}},[a("ul",t._l(t.errors,(function(e){return a("li",{staticClass:"text-danger"},[t._v(t._s(e))])})),0),a("div",{staticClass:"form-group"},[a("label",[t._v("Email:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",[t._v("Password:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),a("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Submit"}})])])])])])])},y=[],b={data:function(){return{email:"",password:"",errors:[]}},methods:{submit:function(){var t=this,e={email:this.email,password:this.password};o.a.post("/api/sessions",e).then((function(e){o.a.defaults.headers.common["Authorization"]="Bearer "+e.data.jwt,localStorage.setItem("jwt",e.data.jwt),t.$router.push("/admin")})).catch((function(e){t.errors=["Invalid email or password."],t.email="",t.password=""}))}}},x=b,P=Object(u["a"])(x,g,y,!1,null,null,null),T=P.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logout"})},$=[],j={created:function(){delete o.a.defaults.headers.common["Authorization"],localStorage.removeItem("jwt"),this.$router.push("/")}},S=j,N=Object(u["a"])(S,E,$,!1,null,null,null),A=N.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{attrs:{id:"wrapper"}},[a("section",{staticClass:"wrapper",attrs:{id:"main"}},[a("div",{staticClass:"inner"},[a("h1",{staticClass:"major"},[t._v("All Stories")]),t._l(t.stories,(function(e){return a("div",[a("h2",[t._v(t._s(e.title))]),a("ul",{staticClass:"alt"},[a("li",[t._v("Release Date: "+t._s(e.friendly_release_date))])]),a("p",{domProps:{innerHTML:t._s(e.description)}}),a("ul",{staticClass:"actions"},[a("li",[a("a",{staticClass:"button",attrs:{href:"/stories/"+e.id}},[t._v("More Info")])])])])}))],2)])])])},O=[],k={data:function(){return{stories:[]}},created:function(){var t=this;o.a.get("/api/stories").then((function(e){t.stories=e.data}))},methods:{}},M=k,B=Object(u["a"])(M,D,O,!1,null,null,null),R=B.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{attrs:{id:"wrapper"}},[a("section",{staticClass:"wrapper",attrs:{id:"main"}},[a("div",{staticClass:"inner"},[a("h1",{staticClass:"major"},[t._v(t._s(t.story.title))]),a("ul",{staticClass:"alt"},[a("li",[t._v("Release Date: "+t._s(t.story.friendly_release_date))])]),a("p",{domProps:{innerHTML:t._s(t.story.description)}}),t._m(0),a("h1",{staticClass:"major"},[t._v("Chapters")]),t._l(t.story.posts,(function(e){return a("div",[a("h2",[t._v(t._s(e.title))]),a("ul",{staticClass:"alt"},[a("li",[t._v("Chapter Number: "+t._s(e.chapter_number))]),a("li",[t._v("Release Date: "+t._s(e.friendly_release_date))])]),a("ul",{staticClass:"actions"},[a("li",[a("a",{staticClass:"button",attrs:{href:"/posts/"+e.post_id}},[t._v("Read Chapter")])])])])}))],2)])])])},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"actions"},[a("li",[a("a",{staticClass:"button",attrs:{href:"/stories"}},[t._v("Return to Stories Page")])])])}],H={data:function(){return{story:{}}},created:function(){var t=this;o.a.get("/api/stories/".concat(this.$route.params.id)).then((function(e){t.story=e.data}))},methods:{}},U=H,W=Object(u["a"])(U,L,I,!1,null,null,null),z=W.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{attrs:{id:"wrapper"}},[a("section",{staticClass:"wrapper",attrs:{id:"main"}},[a("div",{staticClass:"inner"},[a("h1",{staticClass:"major"},[t._v(t._s(t.post.title))]),a("ul",{staticClass:"alt"},[a("li",[t._v("Chapter Number: "+t._s(t.post.chapter_number))]),a("li",[t._v("Release Date: "+t._s(t.post.friendly_release_date))])]),a("p",{domProps:{innerHTML:t._s(t.post.body)}}),a("ul",{staticClass:"actions"},[a("li",[a("a",{staticClass:"button",attrs:{href:"/stories/"+t.post.story_id}},[t._v("Return to Story Page")])])]),a("h1",{staticClass:"major"},[t._v("Leave a Comment")]),t._l(t.errors,(function(e){return a("div",[t._v(" "+t._s(e)+" ")])})),a("form",{on:{submit:function(e){return e.preventDefault(),t.createComment()}}},[a("div",{staticClass:"row gtr-uniform"},[a("div",{staticClass:"col-12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newName,expression:"newName"}],attrs:{type:"text",placeholder:"Name"},domProps:{value:t.newName},on:{input:function(e){e.target.composing||(t.newName=e.target.value)}}})]),a("div",{staticClass:"col-12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newTitle,expression:"newTitle"}],attrs:{type:"text",placeholder:"Title"},domProps:{value:t.newTitle},on:{input:function(e){e.target.composing||(t.newTitle=e.target.value)}}})]),a("div",{staticClass:"col-12"},[a("div",{staticClass:"editor"},[a("ckeditor",{attrs:{editor:t.editor,config:t.editorConfig},model:{value:t.newBody,callback:function(e){t.newBody=e},expression:"newBody"}})],1)]),t._m(0)])]),a("h1",{staticClass:"major"},[t._v("Comments")]),t._l(t.comments,(function(e){return a("div",[a("h2",[t._v(t._s(e.title))]),a("ul",{staticClass:"alt"},[a("li",[t._v(t._s(e.name))]),a("li",[t._v("Date: "+t._s(e.friendly_date))])]),a("p",{domProps:{innerHTML:t._s(e.body)}})])}))],2)])])])},q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12"},[a("ul",{staticClass:"actions"},[a("li",[a("input",{staticClass:"button",attrs:{type:"submit",value:"Leave Comment"}})])])])}],F=a("fb3d"),G=a.n(F),Q={data:function(){return{post:{},comments:[],newName:"",newTitle:"",errors:[],editor:G.a,newBody:"<p>Enter Comment Here.</p>",editorConfig:{toolbar:[]}}},created:function(){var t=this;o.a.get("/api/posts/".concat(this.$route.params.id)).then((function(e){t.post=e.data,t.comments=t.post.comments}))},methods:{createComment:function(){var t=this,e={name:this.newName,title:this.newTitle,body:this.newBody,post_id:this.$route.params.id};o.a.post("/api/comments",e).then((function(e){t.comments.push(e.data),t.newName="",t.newTitle="",t.newBody=""})).catch((function(e){t.errors=e.response.data.errors}))}}},V=Q,Z=Object(u["a"])(V,J,q,!1,null,null,null),K=Z.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"admin-portal"},[a("div",{attrs:{id:"wrapper"}},[a("section",{staticClass:"wrapper",attrs:{id:"main"}},[t.user.username?a("div",{staticClass:"inner"},[a("h1",{staticClass:"major"},[t._v("Welcome to the Admin Portal")]),t._m(0),t._m(1)]):t._e()])])])},Y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"actions fit"},[a("li",[a("a",{staticClass:"button",attrs:{href:"/admin/stories"}},[t._v("Manage Stories")])]),a("li",[a("a",{staticClass:"button",attrs:{href:"/admin/posts"}},[t._v("Manage Posts")])]),a("li",[a("a",{staticClass:"button",attrs:{href:"/admin/comments"}},[t._v("Manage Comments")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"actions fit"},[a("li",[a("a",{staticClass:"button",attrs:{href:"/admin/authors"}},[t._v("Manage Author")])]),a("li",[a("a",{staticClass:"button",attrs:{href:"/admin/edit"}},[t._v("Update Admin Info")])]),a("li",[a("a",{staticClass:"button",attrs:{href:"/admin/intro"}},[t._v("Update Home Page")])])])}],tt={data:function(){return{user:{}}},created:function(){var t=this;o.a.get("/api/users").then((function(e){e.data&&(t.user=e.data)}))},methods:{}},et=tt,at=Object(u["a"])(et,X,Y,!1,null,null,null),st=at.exports,nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{attrs:{id:"wrapper"}},[a("section",{staticClass:"wrapper",attrs:{id:"main"}},[a("div",{staticClass:"inner"},[a("h1",{staticClass:"major"},[t._v("About the Author")]),t._l(t.authors,(function(e){return a("div",[a("h2",[t._v(t._s(e.pen_name))]),a("p",{domProps:{innerHTML:t._s(e.bio)}})])}))],2)])])])},rt=[],it={data:function(){return{authors:[]}},created:function(){var t=this;o.a.get("/api/authors").then((function(e){t.authors=e.data}))},methods:{}},ot=it,lt=Object(u["a"])(ot,nt,rt,!1,null,null,null),ct=lt.exports,ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"admin-stories-index"},[a("div",{attrs:{id:"wrapper"}},[a("section",{staticClass:"wrapper",attrs:{id:"main"}},[t.user.username?a("div",{staticClass:"inner"},[a("h1",{staticClass:"major"},[t._v("Story Management")]),t._m(0),a("p",[t._v("Search for story:"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTerm,expression:"searchTerm"}],attrs:{type:"text",list:"titles"},domProps:{value:t.searchTerm},on:{input:function(e){e.target.composing||(t.searchTerm=e.target.value)}}})]),a("datalist",{attrs:{id:"titles"}},t._l(t.stories,(function(e){return a("option",[t._v(t._s(e.title))])})),0),t._l(t.filterBy(t.stories,t.searchTerm,"title"),(function(e){return a("div",[a("h2",[t._v(t._s(e.title))]),a("ul",{staticClass:"alt"},[a("li",[t._v("Release Date: "+t._s(e.friendly_release_date))])]),a("p",{domProps:{innerHTML:t._s(e.description)}}),a("button",{on:{click:function(a){return t.toggleEdit(e)}}},[t._v("Open Edit Menu")]),t.currentStory===e?a("div",[a("p",[t._v("Title: "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"story.title"}],attrs:{type:"text"},domProps:{value:e.title},on:{input:function(a){a.target.composing||t.$set(e,"title",a.target.value)}}})]),a("p",[t._v("Release Date: "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.release_date,expression:"story.release_date"}],attrs:{type:"date"},domProps:{value:e.release_date},on:{input:function(a){a.target.composing||t.$set(e,"release_date",a.target.value)}}})]),a("div",{staticClass:"col-12"},[a("p",[t._v("Description:")]),a("div",{staticClass:"editor"},[a("ckeditor",{attrs:{editor:t.editor,config:t.editorConfig},model:{value:e.description,callback:function(a){t.$set(e,"description",a)},expression:"story.description"}})],1)]),a("br"),a("button",{on:{click:function(a){return t.editStory(e)}}},[t._v("Edit Story")])]):t._e(),a("p",[a("button",{on:{click:function(a){return t.destroyStory(e)}}},[t._v("Delete Story")])])])}))],2):t._e()])])])},dt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"actions"},[a("li",[a("a",{staticClass:"button",attrs:{href:"/admin/stories/new"}},[t._v("Create a Story")])]),a("li",[a("a",{staticClass:"button",attrs:{href:"/admin"}},[t._v("Return to Admin Portal")])])])}],mt=(a("a4d3"),a("e01a"),a("c975"),a("a434"),a("a7c6")),pt=a.n(mt),vt={mixins:[pt.a.mixin],data:function(){return{user:{},stories:[],currentStory:{},searchTerm:"",editor:G.a,newBody:"<p>Enter Comment Here.</p>",editorConfig:{}}},created:function(){var t=this;o.a.get("/api/users").then((function(e){e.data&&(t.user=e.data)})),o.a.get("/api/stories/admin").then((function(e){t.stories=e.data}))},methods:{toggleEdit:function(t){this.currentStory===t?this.currentStory={}:this.currentStory=t},editStory:function(t){var e=this,a={title:t.title,description:t.description,release_date:t.release_date};o.a.patch("/api/stories/".concat(t.id),a).then((function(a){e.currentStory={};var s=e.stories.indexOf(t);e.stories.splice(s,1,a.data)}))},destroyStory:function(t){var e=this;confirm("Do you really want to delete this story? This will delete all associated posts and comments.")&&o.a.delete("/api/stories/".concat(t.id)).then((function(a){var s=e.stories.indexOf(t);e.stories.splice(s,1)}))}}},ht=vt,ft=Object(u["a"])(ht,ut,dt,!1,null,null,null),_t=ft.exports,Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"stories-new"},[t.user.username?a("div",[a("div",{attrs:{id:"wrapper"}},[a("section",{staticClass:"wrapper",attrs:{id:"main"}},[a("div",{staticClass:"inner"},[a("h1",{staticClass:"major"},[t._v("Create a Story")]),t._m(0),a("p",[t._v("Title: "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newTitle,expression:"newTitle"}],attrs:{type:"text"},domProps:{value:t.newTitle},on:{input:function(e){e.target.composing||(t.newTitle=e.target.value)}}})]),a("div",{staticClass:"editor"},[a("ckeditor",{attrs:{editor:t.editor,config:t.editorConfig},model:{value:t.newDescription,callback:function(e){t.newDescription=e},expression:"newDescription"}})],1),a("p",[t._v("Release Date: "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newDate,expression:"newDate"}],attrs:{type:"date"},domProps:{value:t.newDate},on:{input:function(e){e.target.composing||(t.newDate=e.target.value)}}})]),a("button",{on:{click:function(e){return t.createStory()}}},[t._v("Create Story")])])])])]):t._e()])},wt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"actions"},[a("li",[a("a",{staticClass:"button",attrs:{href:"/admin/stories"}},[t._v("Return to Story Management")])])])}],gt={data:function(){return{user:{},newTitle:"",newDescription:"Write description here",newDate:"",authors:[],editor:G.a,editorConfig:{}}},created:function(){var t=this;o.a.get("/api/users").then((function(e){e.data&&(t.user=e.data)}))},methods:{createStory:function(){var t=this,e={title:this.newTitle,description:this.newDescription,release_date:this.newDate};o.a.post("/api/stories",e).then((function(e){t.$router.push("/admin/stories")}))}}},yt=gt,bt=Object(u["a"])(yt,Ct,wt,!1,null,null,null),xt=bt.exports,Pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"posts-index"},[a("div",{attrs:{id:"wrapper"}},[a("section",{staticClass:"wrapper",attrs:{id:"main"}},[t.user.username?a("div",{staticClass:"inner"},[a("h1",{staticClass:"major"},[t._v("Post Management")]),t._m(0),a("p",[t._v("Search posts by story name:"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTerm,expression:"searchTerm"}],attrs:{type:"text",list:"titles"},domProps:{value:t.searchTerm},on:{input:function(e){e.target.composing||(t.searchTerm=e.target.value)}}})]),a("datalist",{attrs:{id:"titles"}},t._l(t.stories,(function(e){return a("option",[t._v(t._s(e.title))])})),0),t._l(t.filterBy(t.posts,t.searchTerm,"story_title"),(function(e){return a("div",[a("h2",[t._v(t._s(e.title))]),a("ul",{staticClass:"alt"},[a("li",[t._v("Chapter Number: "+t._s(e.chapter_number))]),a("li",[t._v("Release Date: "+t._s(e.friendly_release_date))]),a("li",[t._v("Story: "+t._s(e.story_title))])]),a("button",{on:{click:function(a){return t.toggleBody(e)}}},[t._v("View Post Text")]),t.currentPostBody===e?a("div",[a("p",{domProps:{innerHTML:t._s(e.body)}})]):t._e(),a("br"),a("button",{on:{click:function(a){return t.toggleEdit(e)}}},[t._v("Open Edit Menu")]),t.currentPost===e?a("div",[a("p",[t._v("Title: "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"post.title"}],attrs:{type:"text"},domProps:{value:e.title},on:{input:function(a){a.target.composing||t.$set(e,"title",a.target.value)}}})]),a("p",[t._v("Chapter Number: "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.chapter_number,expression:"post.chapter_number"}],attrs:{type:"text"},domProps:{value:e.chapter_number},on:{input:function(a){a.target.composing||t.$set(e,"chapter_number",a.target.value)}}})]),a("p",[t._v("Story: "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.storyId,expression:"storyId"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.storyId=e.target.multiple?a:a[0]}}},t._l(t.stories,(function(e){return a("option",{domProps:{value:e.id}},[t._v(t._s(e.title))])})),0)]),a("p",[t._v("Release Date: "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.release_date,expression:"post.release_date"}],attrs:{type:"date"},domProps:{value:e.release_date},on:{input:function(a){a.target.composing||t.$set(e,"release_date",a.target.value)}}})]),a("div",{staticClass:"col-12"},[a("p",[t._v("Post Text:")]),a("div",{staticClass:"editor"},[a("ckeditor",{attrs:{editor:t.editor,config:t.editorConfig},model:{value:e.body,callback:function(a){t.$set(e,"body",a)},expression:"post.body"}})],1)]),a("br"),a("button",{on:{click:function(a){return t.editPost(e)}}},[t._v("Edit Post")])]):t._e(),a("p",[a("button",{on:{click:function(a){return t.destroyPost(e)}}},[t._v("Delete Post")])])])}))],2):t._e()])])])},Tt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"actions"},[a("li",[a("a",{staticClass:"button",attrs:{href:"/admin/posts/new"}},[t._v("Create a Post")])]),a("li",[a("a",{staticClass:"button",attrs:{href:"/admin"}},[t._v("Return to Admin Portal")])])])}],Et={mixins:[pt.a.mixin],data:function(){return{user:{},posts:[],currentPost:{},currentPostBody:{},storyId:"",stories:[],searchTerm:"",editor:G.a,newBody:"<p>Enter Comment Here.</p>",editorConfig:{}}},created:function(){var t=this;o.a.get("/api/users").then((function(e){e.data&&(t.user=e.data)})),o.a.get("/api/posts").then((function(e){e.data&&(t.posts=e.data)})),o.a.get("/api/stories/admin").then((function(e){e.data&&(t.stories=e.data)}))},methods:{toggleEdit:function(t){this.currentPost===t?this.currentPost={}:this.currentPost=t},toggleBody:function(t){this.currentPostBody===t?this.currentPostBody={}:this.currentPostBody=t},editPost:function(t){var e=this,a={title:t.title,chapter_number:t.chapter_number,story_id:this.storyId,body:t.body,release_date:t.release_date};o.a.patch("/api/posts/".concat(t.id),a).then((function(a){e.currentPost={};var s=e.posts.indexOf(t);console.log(a.data),e.posts.splice(s,1,a.data)}))},destroyPost:function(t){var e=this;confirm("Do you really want to delete this post? This will delete all associated comments.")&&o.a.delete("/api/posts/".concat(t.id)).then((function(a){var s=e.posts.indexOf(t);e.posts.splice(s,1)}))}}},$t=Et,jt=Object(u["a"])($t,Pt,Tt,!1,null,null,null),St=jt.exports,Nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"posts-new"},[t.user.username?a("div",[a("div",{attrs:{id:"wrapper"}},[a("section",{staticClass:"wrapper",attrs:{id:"main"}},[a("div",{staticClass:"inner"},[a("h1",{staticClass:"major"},[t._v("Create a Post")]),t._m(0),a("p",[t._v("Title: "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newTitle,expression:"newTitle"}],attrs:{type:"text"},domProps:{value:t.newTitle},on:{input:function(e){e.target.composing||(t.newTitle=e.target.value)}}})]),a("p",[t._v("Chapter Number: "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newChapterNumber,expression:"newChapterNumber"}],attrs:{type:"text"},domProps:{value:t.newChapterNumber},on:{input:function(e){e.target.composing||(t.newChapterNumber=e.target.value)}}})]),a("p",[t._v("Story: "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.newStory,expression:"newStory"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.newStory=e.target.multiple?a:a[0]}}},t._l(t.stories,(function(e){return a("option",{domProps:{value:e.id}},[t._v(t._s(e.title))])})),0)]),a("div",{staticClass:"editor"},[a("ckeditor",{attrs:{editor:t.editor,config:t.editorConfig},model:{value:t.newBody,callback:function(e){t.newBody=e},expression:"newBody"}})],1),a("p",[t._v("Release Date: "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newDate,expression:"newDate"}],attrs:{type:"date"},domProps:{value:t.newDate},on:{input:function(e){e.target.composing||(t.newDate=e.target.value)}}})]),a("button",{on:{click:function(e){return t.createPost()}}},[t._v("Create Post")])])])])]):t._e()])},At=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"actions"},[a("li",[a("a",{staticClass:"button",attrs:{href:"/admin/posts"}},[t._v("Return to Post Management")])])])}],Dt={data:function(){return{user:{},newTitle:"",newStory:"",newBody:"Story text goes here",newDate:"",newChapterNumber:"",stories:[],editor:G.a,editorConfig:{}}},created:function(){var t=this;o.a.get("/api/users").then((function(e){e.data&&(t.user=e.data)})),o.a.get("/api/stories/admin").then((function(e){t.stories=e.data}))},methods:{createPost:function(){var t=this,e={title:this.newTitle,story_id:this.newStory,body:this.newBody,release_date:this.newDate,chapter_number:this.newChapterNumber};o.a.post("/api/posts",e).then((function(e){t.$router.push("/admin/posts")}))}}},Ot=Dt,kt=Object(u["a"])(Ot,Nt,At,!1,null,null,null),Mt=kt.exports,Bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"admin-portal"},[a("div",{attrs:{id:"wrapper"}},[a("section",{staticClass:"wrapper",attrs:{id:"main"}},[t.user.username?a("div",{staticClass:"inner"},[a("h1",{staticClass:"major"},[t._v("Comment Management")]),t._m(0),a("p",[t._v("Search comments by title:"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTerm,expression:"searchTerm"}],attrs:{type:"text"},domProps:{value:t.searchTerm},on:{input:function(e){e.target.composing||(t.searchTerm=e.target.value)}}})]),t._l(t.filterBy(t.comments,t.searchTerm,"title"),(function(e){return a("div",[a("h2",[t._v(t._s(e.title))]),a("ul",{staticClass:"alt"},[a("li",[t._v("Commenter: "+t._s(e.name))]),a("li",[t._v("Date: "+t._s(e.friendly_date))]),a("li",{domProps:{innerHTML:t._s(e.body)}}),t._m(1,!0),a("li",[t._v("Post: "+t._s(e.post))]),a("li",[t._v("Chapter Number: "+t._s(e.chapter_number))]),a("li",[t._v("Story: "+t._s(e.story))])]),a("button",{on:{click:function(a){return t.destroyComment(e)}}},[t._v("Delete Comment")])])}))],2):t._e()])])])},Rt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"actions"},[a("li",[a("a",{staticClass:"button",attrs:{href:"/admin"}},[t._v("Return to Admin Portal")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("h3",[t._v("Associated Post")])])}],Lt={mixins:[pt.a.mixin],data:function(){return{user:{},comments:{},searchTerm:""}},created:function(){var t=this;o.a.get("/api/users").then((function(e){e.data&&(t.user=e.data)})),o.a.get("/api/comments").then((function(e){e.data&&(t.comments=e.data)}))},methods:{destroyComment:function(t){var e=this;o.a.delete("/api/comments/".concat(t.id)).then((function(a){var s=e.comments.indexOf(t);e.comments.splice(s,1)}))}}},It=Lt,Ht=Object(u["a"])(It,Bt,Rt,!1,null,null,null),Ut=Ht.exports,Wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"admin-authors-index"},[t.user.username?a("div",[a("div",{attrs:{id:"wrapper"}},[a("section",{staticClass:"wrapper",attrs:{id:"main"}},[a("div",{staticClass:"inner"},[a("h1",{staticClass:"major"},[t._v("Author Management")]),t._m(0),t._l(t.authors,(function(e){return a("div",[a("h2",[t._v(t._s(e.pen_name))]),a("p",{domProps:{innerHTML:t._s(e.bio)}}),a("button",{on:{click:function(a){return t.toggleEdit(e)}}},[t._v("Open Edit Menu")]),t.currentAuthor===e?a("div",[a("p",[t._v("Pen Name: "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.pen_name,expression:"author.pen_name"}],attrs:{type:"text"},domProps:{value:e.pen_name},on:{input:function(a){a.target.composing||t.$set(e,"pen_name",a.target.value)}}})]),a("div",{staticClass:"editor"},[a("ckeditor",{attrs:{editor:t.editor,config:t.editorConfig},model:{value:e.bio,callback:function(a){t.$set(e,"bio",a)},expression:"author.bio"}})],1),a("br"),a("button",{on:{click:function(a){return t.editAuthor(e)}}},[t._v("Edit Author")])]):t._e()])}))],2)])])]):t._e()])},zt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"actions"},[a("li",[a("a",{staticClass:"button",attrs:{href:"/admin"}},[t._v("Return to Admin Portal")])])])}],Jt={data:function(){return{user:{},authors:[],currentAuthor:{},editor:G.a,editorConfig:{}}},created:function(){var t=this;o.a.get("/api/users").then((function(e){e.data&&(t.user=e.data)})),o.a.get("/api/authors").then((function(e){t.authors=e.data}))},methods:{toggleEdit:function(t){this.currentAuthor===t?this.currentAuthor={}:this.currentAuthor=t},editAuthor:function(t){var e=this,a={pen_name:t.pen_name,bio:t.bio};o.a.patch("/api/authors/".concat(t.id),a).then((function(a){e.currentAuthor={};var s=e.authors.indexOf(t);e.authors.splice(s,1,a.data)}))}}},qt=Jt,Ft=Object(u["a"])(qt,Wt,zt,!1,null,null,null),Gt=Ft.exports,Qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"admin-edit"},[a("div",{attrs:{id:"wrapper"}},[a("section",{staticClass:"wrapper",attrs:{id:"main"}},[t.user.username?a("div",{staticClass:"inner"},[a("h1",{staticClass:"major"},[t._v("Edit Admin Name, Email, Password")]),t._m(0),a("p",[t._v("All fields may be left blank if you do not wish to change them.")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.editAdmin()}}},[a("div",{staticClass:"row gtr-uniform"},[a("div",{staticClass:"col-12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],attrs:{type:"text"},domProps:{value:t.user.username},on:{input:function(e){e.target.composing||t.$set(t.user,"username",e.target.value)}}})]),a("div",{staticClass:"col-12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],attrs:{type:"email"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})]),a("div",{staticClass:"col-12"},[a("p",[t._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),a("div",{staticClass:"col-12"},[a("p",[t._v("Password Confirmation")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordConfirmation,expression:"passwordConfirmation"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:t.passwordConfirmation},on:{input:function(e){e.target.composing||(t.passwordConfirmation=e.target.value)}}})]),t._m(1)])])]):t._e()])])])},Vt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"actions"},[a("li",[a("a",{staticClass:"button",attrs:{href:"/admin"}},[t._v("Return to Admin Portal")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12"},[a("ul",{staticClass:"actions"},[a("li",[a("input",{staticClass:"button",attrs:{type:"submit",value:"Update Admin"}})])])])}],Zt={data:function(){return{user:{},password:"",passwordConfirmation:""}},created:function(){var t=this;o.a.get("/api/users").then((function(e){e.data&&(t.user=e.data)}))},methods:{editAdmin:function(){var t=this,e={name:this.user.username,email:this.user.email,password:this.password,passwordConfirmation:this.passwordConfirmation};o.a.patch("/api/users/".concat(this.user.id),e).then((function(e){t.$router.push("/admin")}))}}},Kt=Zt,Xt=Object(u["a"])(Kt,Qt,Vt,!1,null,null,null),Yt=Xt.exports,te=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"intro-new"},[a("div",{attrs:{id:"wrapper"}},[a("section",{staticClass:"wrapper",attrs:{id:"main"}},[t.user.username?a("div",{staticClass:"inner"},[a("h1",{staticClass:"major"},[t._v("Introduction Page Management")]),t._m(0),a("h2",[t._v("Introduction Text")]),t._l(t.intros,(function(e){return a("div",[a("p",{domProps:{innerHTML:t._s(e.introduction)}}),a("button",{on:{click:function(a){return t.toggleEdit(e)}}},[t._v("Open Edit Menu")]),t.currentIntro===e?a("div",[a("div",{staticClass:"editor"},[a("ckeditor",{attrs:{editor:t.editor,config:t.editorConfig},model:{value:e.introduction,callback:function(a){t.$set(e,"introduction",a)},expression:"intro.introduction"}})],1),a("br"),a("button",{on:{click:function(a){return t.editAuthor(e)}}},[t._v("Edit Intro")])]):t._e()])}))],2):t._e()])])])},ee=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"actions"},[a("li",[a("a",{staticClass:"button",attrs:{href:"/admin"}},[t._v("Return to Admin Portal")])])])}],ae={data:function(){return{user:{},intros:[],currentIntro:{},editor:G.a,editorConfig:{}}},created:function(){var t=this;o.a.get("/api/users").then((function(e){e.data&&(t.user=e.data)})),o.a.get("/api/intros").then((function(e){t.intros=e.data}))},methods:{toggleEdit:function(t){this.currentIntro===t?this.currentIntro={}:this.currentIntro=t},editAuthor:function(t){var e=this,a={introduction:t.introduction};o.a.patch("/api/intros/".concat(t.id),a).then((function(a){e.currentIntro={};var s=e.intros.indexOf(t);e.intros.splice(s,1,a.data)}))}}},se=ae,ne=Object(u["a"])(se,te,ee,!1,null,null,null),re=ne.exports;s["a"].use(p["a"]);var ie=[{path:"/",name:"home",component:w},{path:"/login",name:"login",component:T},{path:"/logout",name:"logout",component:A},{path:"/stories",name:"stories-index",component:R},{path:"/stories/:id",name:"stories-show",component:z},{path:"/posts/:id",name:"posts-show",component:K},{path:"/admin",name:"admin-portal",component:st},{path:"/authors",name:"author-index",component:ct},{path:"/admin/stories",name:"admin-stories-index",component:_t},{path:"/admin/stories/new",name:"stories-new",component:xt},{path:"/admin/posts",name:"posts-index",component:St},{path:"/admin/posts/new",name:"posts-new",component:Mt},{path:"/admin/comments",name:"comments-index",component:Ut},{path:"/admin/authors",name:"admin-authors-index",component:Gt},{path:"/admin/edit",name:"admin-edit",component:Yt},{path:"/admin/intro",name:"intro-index",component:re},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],oe=new p["a"]({mode:"history",base:"/",routes:ie}),le=oe,ce=a("3730"),ue=a.n(ce);o.a.defaults.baseURL="/";var de=localStorage.getItem("jwt");de&&(o.a.defaults.headers.common["Authorization"]="Bearer "+de),s["a"].use(ue.a),s["a"].config.productionTip=!1,new s["a"]({router:le,render:function(t){return t(m)}}).$mount("#app")}});
//# sourceMappingURL=app.c23660d7.js.map
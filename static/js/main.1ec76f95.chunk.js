(this.webpackJsonpimagerecognition=this.webpackJsonpimagerecognition||[]).push([[0],{101:function(e,a,t){},102:function(e,a,t){},103:function(e,a,t){},104:function(e,a,t){},105:function(e,a,t){},356:function(e,a,t){"use strict";t.r(a);var n=t(2),l=t.n(n),i=t(45),s=t.n(i),c=(t(101),t(89)),r=t(90),m=t(95),o=t(94),p=(t(102),function(e){var a=e.onRouteChange;return e.isSignedin?l.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},l.a.createElement("p",{onClick:function(){return a("signout")},className:"f3 link dim black underline pa3 pointer"},"Sign Out")):l.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},l.a.createElement("p",{onClick:function(){return a("signin")},className:"f3 link dim black underline pa3 pointer"},"Sign In"),l.a.createElement("p",{onClick:function(){return a("register")},className:"f3 link dim black underline pa3 pointer"},"register"))}),u=t(91),d=t.n(u),b=(t(103),t(92)),g=t.n(b),h=function(){return l.a.createElement("div",{className:"ma4 mt0"},l.a.createElement(d.a,{className:"Tilt br2 shadow-2",options:{max:55},style:{height:150,width:150}},l.a.createElement("div",{className:"Tilt-inner pa3"}," ",l.a.createElement("img",{alt:"Logo",src:g.a})," ")))},E=(t(104),function(e){var a=e.onInputChange,t=e.onSubmit;return l.a.createElement("div",null,l.a.createElement("p",{className:"f3"},"I can detect faces in your uploded images, try me!"),l.a.createElement("div",{className:"center"},l.a.createElement("div",{className:"form center pa4 br3 shadow-5"},l.a.createElement("input",{type:"text",className:"f4 pa2 w-70 center",onChange:a}),l.a.createElement("button",{type:"submit",className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:t},"Detect"))))}),A=(t(105),function(e){var a=e.imageURL,t=e.box;return l.a.createElement("div",{className:"center ma"},l.a.createElement("div",{className:"absolute mt2"},l.a.createElement("img",{id:"inputImage",alt:"",src:a,width:"500px",height:"auto"}),l.a.createElement("div",{className:"bounding-box",style:{left:t.leftCol,top:t.topRow,right:t.rightCol,bottom:t.bottomRow}})))}),f=function(){return l.a.createElement("div",{className:"ma4 mt0"},l.a.createElement("div",{className:"white f3"},"Surya, your rank is..."),l.a.createElement("div",{className:"white f1"},"#5"))},w=t(93),v=t.n(w),N=t(46),y=t.n(N),B=function(e){var a=e.onRouteChange;return l.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},l.a.createElement("main",{className:"pa4 black-80"},l.a.createElement("div",{className:"measure"},l.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},l.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Sign In"),l.a.createElement("div",{className:"mt3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),l.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),l.a.createElement("div",{className:"mv3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),l.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),l.a.createElement("div",{className:""},l.a.createElement("input",{onClick:function(){return a("home")},className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})),l.a.createElement("div",{className:"lh-copy mt3"},l.a.createElement("p",{onClick:function(){return a("register")},className:"f6 link pointer dim black db"}," Register ")))))},C=function(e){var a=e.onRouteChange;return l.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},l.a.createElement("main",{className:"pa4 black-80"},l.a.createElement("div",{className:"measure"},l.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},l.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Register"),l.a.createElement("div",{className:"mt3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),l.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name"})),l.a.createElement("div",{className:"mt3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),l.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),l.a.createElement("div",{className:"mv3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),l.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),l.a.createElement("div",{className:""},l.a.createElement("input",{onClick:function(){return a("home")},className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})))))},S=new y.a.App({apiKey:"208a37ccf9cd4bf0b293f72dcae59ad5"}),k=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).calculatefacelocation=function(e){var a=e.outputs[0].data.regions[0].region_info.bounding_box,t=document.getElementById("inputImage"),n=Number(t.width),l=Number(t.height);return{leftCol:a.left_col*n,topRow:a.top_row*l,rightCol:n-a.right_col*n,bottomRow:l-a.bottom_row*l}},e.displayFaceBox=function(a){e.setState({box:a}),console.log(a)},e.onInputChange=function(a){e.setState({input:a.target.value})},e.onSubmit=function(){e.setState({imageURL:e.state.input}),S.models.predict(y.a.FACE_DETECT_MODEL,e.state.input).then((function(a){return e.displayFaceBox(e.calculatefacelocation(a))})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(a){"signout"===a?e.setState({isSignedin:!1}):"home"===a&&e.setState({isSignedin:!0}),e.setState({route:a})},e.state={input:"",imageURL:"",box:{},route:"signin",isSignedin:!1},e}return Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(v.a,{className:"particles",params:{particles:{number:{value:100,density:{enable:!0,value_area:800}}}}}),l.a.createElement(p,{isSignedin:this.state.isSignedin,onRouteChange:this.onRouteChange}),"home"===this.state.route?l.a.createElement("div",null,l.a.createElement(h,null),l.a.createElement(f,null),l.a.createElement(E,{onSubmit:this.onSubmit,onInputChange:this.onInputChange}),l.a.createElement(A,{box:this.state.box,imageURL:this.state.imageURL})):"signin"===this.state.route?l.a.createElement(B,{onRouteChange:this.onRouteChange}):l.a.createElement(C,{onRouteChange:this.onRouteChange}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(355);s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},92:function(e,a){e.exports="data:image/png;base64,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"},96:function(e,a,t){e.exports=t(356)}},[[96,1,2]]]);
//# sourceMappingURL=main.1ec76f95.chunk.js.map
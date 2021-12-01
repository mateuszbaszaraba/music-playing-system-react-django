(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],{85:function(e,t,n){},86:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(33),r=n.n(o),s=(n(85),n(86),n(17)),i=n.n(s),u=n(24),l=n(8),j=n(14),p=n(31),d=n(136),b=n(137),h=n(130),O=n(139),x=n(2),m=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(""),r=Object(l.a)(o,2),s=r[0],m=r[1],f=Object(j.g)(),v=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:n})},e.next=3,fetch("/api/join-room",t);case 3:200==e.sent.status?f("/room/".concat(n)):m("Room not found");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsxs)(d.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:1,children:[Object(x.jsx)(d.a,{item:!0,xs:12,children:Object(x.jsx)(b.a,{variant:"h4",component:"h4",children:"Join a Room"})}),Object(x.jsx)(d.a,{item:!0,xs:12,children:Object(x.jsx)(h.a,{label:"Code",placeholder:"Enter a Room Code",value:n,helperText:s,variant:"outlined",onChange:function(e){a(e.target.value)}})}),Object(x.jsx)(d.a,{item:!0,xs:12,children:Object(x.jsx)(O.a,{variant:"contained",color:"secondary",onClick:v,children:"Enter Room"})}),Object(x.jsx)(d.a,{item:!0,xs:12,children:Object(x.jsx)(O.a,{variant:"contained",color:"primary",to:"/",component:p.b,children:"Back"})})]})},f=n(140),v=n(134),g=n(127),C=n(133),y=n(141),k=n(132),P=n(138),S=function e(t){e.defaultProps={votesToSkipProp:2,guestCanPauseProp:!0,updateProp:!1,roomCodeProp:"",updateCallBackProp:function(){}};var n=Object(c.useState)(t.votesToSkipProp),a=Object(l.a)(n,2),o=a[0],r=a[1],s=Object(c.useState)(t.guestCanPauseProp),m=Object(l.a)(s,2),S=m[0],w=m[1],R=Object(c.useState)(""),_=Object(l.a)(R,2),T=_[0],B=_[1],I=Object(c.useState)(""),E=Object(l.a)(I,2),J=E[0],F=E[1],N=Object(j.g)(),L=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({votes_to_skip:o,guest_can_pause:S})},e.next=3,fetch("/api/create-room",t);case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,console.log(c),N("/room/".concat(c.code));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(u.a)(i.a.mark((function e(){var n,c,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({votes_to_skip:o,guest_can_pause:S,code:t.roomCodeProp})},e.next=3,fetch("/api/update-room",n);case 3:return c=e.sent,e.next=6,c.json();case 6:a=e.sent,console.log(a),c.ok?B("Room updated successfully"):F("Error updating room..."),t.updateCallBackProp();case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=t.updateProp?"Update Room":"Create a Room";return Object(x.jsxs)(d.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:1,children:[Object(x.jsx)(d.a,{item:!0,xs:12,children:Object(x.jsx)(b.a,{component:"h4",variant:"h4",children:Object(x.jsx)(f.a,{in:""!=J||""!=T,children:T})})}),Object(x.jsx)(d.a,{item:!0,xs:12,children:Object(x.jsx)(b.a,{component:"h3",variant:"h3",children:V})}),Object(x.jsx)(d.a,{item:!0,xs:12,children:Object(x.jsxs)(v.a,{component:"fieldset",children:[Object(x.jsx)(g.a,{component:"legend",children:"Guest Control of Playback State"}),Object(x.jsxs)(C.a,{row:!0,defaultValue:t.guestCanPauseProp.toString(),onChange:function(e){w("true"===e.target.value)},"aria-label":"Guest Control of Playback State",children:[Object(x.jsx)(y.a,{value:"true",control:Object(x.jsx)(k.a,{color:"primary"}),label:"Play/Pause",labelPlacement:"bottom"}),Object(x.jsx)(y.a,{value:"false",control:Object(x.jsx)(k.a,{color:"secondary"}),label:"No control",labelPlacement:"bottom"})]})]})}),Object(x.jsx)(d.a,{item:!0,xs:12,children:Object(x.jsxs)(v.a,{children:[Object(x.jsx)(h.a,{required:!0,type:"number",onChange:function(e){r(e.target.value)},defaultValue:o,inputProps:{min:1,style:{textAlign:"center"}}}),Object(x.jsx)(P.a,{component:"div",children:Object(x.jsx)("p",{children:"Votes Required to Skip Song"})})]})}),t.updateProp?Object(x.jsx)(d.a,{item:!0,xs:12,children:Object(x.jsx)(O.a,{color:"primary",variant:"contained",onClick:A,children:"Update Room"})}):Object(x.jsxs)(d.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:1,children:[Object(x.jsx)(d.a,{item:!0,xs:12,children:Object(x.jsx)(O.a,{color:"secondary",variant:"contained",onClick:L,children:"Create A Room"})}),Object(x.jsx)(d.a,{item:!0,xs:12,children:Object(x.jsx)(O.a,{color:"primary",variant:"contained",to:"/",component:p.b,children:"Back"})})]})]})},w=function(e){var t=Object(c.useState)(2),n=Object(l.a)(t,2),a=n[0],o=n[1],r=Object(c.useState)(!1),s=Object(l.a)(r,2),p=s[0],h=s[1],m=Object(c.useState)(!1),f=Object(l.a)(m,2),v=f[0],g=f[1],C=Object(c.useState)(!1),y=Object(l.a)(C,2),k=y[0],P=y[1],w=Object(c.useState)(!1),R=Object(l.a)(w,2),_=R[0],T=R[1],B=Object(c.useState)({title:"",artist:"",duration:"",time:"",image_url:"",is_playing:!1,votes:0,id:""}),I=Object(l.a)(B,2),E=I[0],J=I[1],F=Object(j.h)().roomCode,N=Object(j.g)(),L=function(){var t=Object(u.a)(i.a.mark((function t(){var n,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/get-room?code="+F);case 2:return(n=t.sent).ok||(e.leaveRoomCallBack(),N("/")),t.next=6,n.json();case 6:c=t.sent,o(c.votes_to_skip),h(c.guest_can_pause),console.log(c.is_host),g(c.is_host);case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),A=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,c,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/spotify/is-authenticated");case 2:return t=e.sent,console.log("checkkk"),e.next=6,t.json();case 6:if(n=e.sent,T(n.status),console.log(n.status),n.status){e.next=17;break}return e.next=12,fetch("/spotify/get-auth-url");case 12:return c=e.sent,e.next=15,c.json();case 15:a=e.sent,window.location.replace(a.url);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/spotify/current-song");case 2:if(t=e.sent,console.log(t),t.ok){e.next=9;break}return console.log("response not ok"),e.abrupt("return",{});case 9:return console.log("response ok"),e.next=12,t.json();case 12:n=e.sent,J(n),console.log(n);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var t=Object(u.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json"}},t.next=3,fetch("/api/leave-room",n);case 3:e.leaveRoomCallBack(),N("/");case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(c.useEffect)((function(){console.log("room details"),L()})),Object(c.useEffect)((function(){console.log("checking if host..."),A()}),[v]),Object(c.useEffect)((function(){if(_){var e=setInterval(V,1e3);return function(){clearInterval(e)}}}));return k?Object(x.jsxs)(d.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:1,children:[Object(x.jsx)(d.a,{item:!0,xs:12,children:Object(x.jsx)(S,{updateProp:!0,votesToSkipProp:a,guestCanPauseProp:p,roomCodeProp:F,updateCallBackProp:L})}),Object(x.jsx)(d.a,{item:!0,xs:12,children:Object(x.jsx)(O.a,{color:"secondary",variant:"contained",onClick:function(){return P(!1)},children:"Close"})})]}):Object(x.jsxs)(d.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:1,children:[Object(x.jsx)(d.a,{item:!0,xs:12,children:Object(x.jsxs)(b.a,{variant:"h4",component:"h4",children:["Code: ",F]})}),E,v?Object(x.jsx)(d.a,{item:!0,xs:12,children:Object(x.jsx)(O.a,{variant:"contained",color:"primary",onClick:function(){return P(!0)},children:"Settings"})}):null,Object(x.jsx)(d.a,{item:!0,xs:12,children:Object(x.jsx)(O.a,{variant:"contained",color:"secondary",onClick:q,children:"Leave Room"})})]})},R=n(142),_=function(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){o()}),[]);var o=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/user-in-room");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a(n.code);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),r=function(){return Object(x.jsxs)(d.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:3,children:[Object(x.jsx)(d.a,{item:!0,xs:12,children:Object(x.jsx)(b.a,{variant:"h3",component:"h3",children:"Music Listening With Friends"})}),Object(x.jsx)(d.a,{item:!0,xs:12,children:Object(x.jsxs)(R.a,{disableElevation:!0,variant:"contained",color:"primary",children:[Object(x.jsx)(O.a,{color:"primary",to:"/join",component:p.b,children:"Join a Room"}),Object(x.jsx)(O.a,{color:"secondary",to:"/create",component:p.b,children:"Create a Room"})]})})]})};return Object(x.jsx)(p.a,{children:Object(x.jsxs)(j.d,{children:[Object(x.jsx)(j.b,{path:"/",element:n?Object(x.jsx)(j.a,{to:"/room/".concat(n)}):Object(x.jsx)(r,{})}),Object(x.jsx)(j.b,{path:"/join",element:Object(x.jsx)(m,{})}),Object(x.jsx)(j.b,{path:"/create",element:Object(x.jsx)(S,{votesToSkipProp:2,guestCanPauseProp:!0,updateProp:!1,roomCodeProp:"",updateCallBackProp:function(){}})}),Object(x.jsx)(j.b,{path:"/room/:roomCode",element:Object(x.jsx)(w,{leaveRoomCallBack:function(){a(null)}})})]})})};var T=function(){return Object(x.jsx)("div",{className:"center",children:Object(x.jsx)(_,{})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,144)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),o(e),r(e)}))};r.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(T,{})}),document.getElementById("root")),B()}},[[94,1,2]]]);
//# sourceMappingURL=main.2939e804.chunk.js.map
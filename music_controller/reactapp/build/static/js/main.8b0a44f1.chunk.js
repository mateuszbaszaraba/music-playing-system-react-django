(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],{85:function(e,t,n){},86:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(33),o=n.n(r),s=(n(85),n(86),n(17)),i=n.n(s),u=n(24),j=n(8),l=n(14),b=n(31),d=n(136),p=n(137),O=n(130),h=n(139),x=n(2),f=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),o=Object(j.a)(r,2),s=o[0],f=o[1],m=Object(l.g)(),v=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:n})},e.next=3,fetch("/api/join-room",t);case 3:200==e.sent.status?m("/room/".concat(n)):f("Room not found");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsxs)(d.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:1,children:[Object(x.jsx)(d.a,{item:!0,xs:12,children:Object(x.jsx)(p.a,{variant:"h4",component:"h4",children:"Join a Room"})}),Object(x.jsx)(d.a,{item:!0,xs:12,children:Object(x.jsx)(O.a,{label:"Code",placeholder:"Enter a Room Code",value:n,helperText:s,variant:"outlined",onChange:function(e){a(e.target.value)}})}),Object(x.jsx)(d.a,{item:!0,xs:12,children:Object(x.jsx)(h.a,{variant:"contained",color:"secondary",onClick:v,children:"Enter Room"})}),Object(x.jsx)(d.a,{item:!0,xs:12,children:Object(x.jsx)(h.a,{variant:"contained",color:"primary",to:"/",component:b.b,children:"Back"})})]})},m=n(140),v=n(134),g=n(127),y=n(133),C=n(141),k=n(132),S=n(138),P=function(e){var t=e.votesToSkipProp,n=void 0===t?2:t,a=e.guestCanPauseProp,r=void 0===a||a,o=e.updateProp,s=void 0!==o&&o,f=e.roomCodeProp,P=void 0===f?"":f,w=e.updateCallBackProp,R=void 0===w?function(){}:w,T=Object(c.useState)(n),_=Object(j.a)(T,2),I=_[0],B=_[1],E=Object(c.useState)(r),J=Object(j.a)(E,2),F=J[0],L=J[1],N=Object(c.useState)(""),A=Object(j.a)(N,2),V=A[0],q=A[1],G=Object(c.useState)(""),M=Object(j.a)(G,2),U=M[0],D=M[1],H=Object(l.g)(),W=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({votes_to_skip:I,guest_can_pause:F})},e.next=3,fetch("/api/create-room",t);case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,console.log(c),H("/room/".concat(c.code));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({votes_to_skip:I,guest_can_pause:F,code:P})},e.next=3,fetch("/api/update-room",t);case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,console.log(c),n.ok?q("Room updated successfully"):D("Error updating room..."),R();case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=s?"Update Room":"Create a Room";return Object(x.jsxs)(d.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:1,children:[Object(x.jsx)(d.a,{item:!0,xs:12,children:Object(x.jsx)(p.a,{component:"h4",variant:"h4",children:Object(x.jsx)(m.a,{in:""!=U||""!=V,children:V})})}),Object(x.jsx)(d.a,{item:!0,xs:12,children:Object(x.jsx)(p.a,{component:"h3",variant:"h3",children:K})}),Object(x.jsx)(d.a,{item:!0,xs:12,children:Object(x.jsxs)(v.a,{component:"fieldset",children:[Object(x.jsx)(g.a,{component:"legend",children:"Guest Control of Playback State"}),Object(x.jsxs)(y.a,{row:!0,defaultValue:r.toString(),onChange:function(e){L("true"===e.target.value)},"aria-label":"Guest Control of Playback State",children:[Object(x.jsx)(C.a,{value:"true",control:Object(x.jsx)(k.a,{color:"primary"}),label:"Play/Pause",labelPlacement:"bottom"}),Object(x.jsx)(C.a,{value:"false",control:Object(x.jsx)(k.a,{color:"secondary"}),label:"No control",labelPlacement:"bottom"})]})]})}),Object(x.jsx)(d.a,{item:!0,xs:12,children:Object(x.jsxs)(v.a,{children:[Object(x.jsx)(O.a,{required:!0,type:"number",onChange:function(e){B(e.target.value)},defaultValue:I,inputProps:{min:1,style:{textAlign:"center"}}}),Object(x.jsx)(S.a,{component:"div",children:Object(x.jsx)("p",{children:"Votes Required to Skip Song"})})]})}),s?Object(x.jsx)(d.a,{item:!0,xs:12,children:Object(x.jsx)(h.a,{color:"primary",variant:"contained",onClick:z,children:"Update Room"})}):Object(x.jsxs)(d.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:1,children:[Object(x.jsx)(d.a,{item:!0,xs:12,children:Object(x.jsx)(h.a,{color:"secondary",variant:"contained",onClick:W,children:"Create A Room"})}),Object(x.jsx)(d.a,{item:!0,xs:12,children:Object(x.jsx)(h.a,{color:"primary",variant:"contained",to:"/",component:b.b,children:"Back"})})]})]})},w=function(e){var t=Object(c.useState)(2),n=Object(j.a)(t,2),a=n[0],r=n[1],o=Object(c.useState)(!1),s=Object(j.a)(o,2),b=s[0],O=s[1],f=Object(c.useState)(!1),m=Object(j.a)(f,2),v=m[0],g=m[1],y=Object(c.useState)(!1),C=Object(j.a)(y,2),k=C[0],S=C[1],w=Object(c.useState)(!1),R=Object(j.a)(w,2),T=(R[0],R[1]),_=Object(c.useState)(null),I=Object(j.a)(_,2),B=I[0],E=I[1],J=Object(l.h)().roomCode,F=Object(l.g)(),L=function(){var t=Object(u.a)(i.a.mark((function t(){var n,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/get-room?code="+J);case 2:return(n=t.sent).ok||(e.leaveRoomCallBack(),F("/")),t.next=6,n.json();case 6:c=t.sent,r(c.votes_to_skip),O(c.guest_can_pause),g(c.is_host);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),N=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,c,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/spotify/is-authenticated");case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,T(n.status),console.log(n.status),n.status){e.next=16;break}return e.next=11,fetch("/spotify/get-auth-url");case 11:return c=e.sent,e.next=14,c.json();case 14:a=e.sent,window.location.replace(a.url);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/spotify/current-song");case 2:if(t=e.sent,console.log(t),t.ok){e.next=9;break}return console.log("response not ok"),e.abrupt("return",{});case 9:return console.log("response ok"),e.next=12,t.json();case 12:n=e.sent,E(n),console.log(n);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var t=Object(u.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json"}},t.next=3,fetch("/api/leave-room",n);case 3:e.leaveRoomCallBack(),F("/");case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){L()}),[]),Object(c.useEffect)((function(){console.log("checking if host..."),N()}),[v]),Object(c.useEffect)((function(){var e=setInterval(A,1e3);return function(){clearInterval(e)}})),k?Object(x.jsxs)(d.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:1,children:[Object(x.jsx)(d.a,{item:!0,xs:12,children:Object(x.jsx)(P,{updateProp:!0,votesToSkipProp:a,guestCanPauseProp:b,roomCodeProp:J,updateCallBackProp:L})}),Object(x.jsx)(d.a,{item:!0,xs:12,children:Object(x.jsx)(h.a,{color:"secondary",variant:"contained",onClick:function(){return S(!1)},children:"Close"})})]}):Object(x.jsxs)(d.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:1,children:[Object(x.jsx)(d.a,{item:!0,xs:12,children:Object(x.jsxs)(p.a,{variant:"h4",component:"h4",children:["Code: ",J]})}),B,v?Object(x.jsx)(d.a,{item:!0,xs:12,children:Object(x.jsx)(h.a,{variant:"contained",color:"primary",onClick:function(){return S(!0)},children:"Settings"})}):null,Object(x.jsx)(d.a,{item:!0,xs:12,children:Object(x.jsx)(h.a,{variant:"contained",color:"secondary",onClick:V,children:"Leave Room"})})]})},R=n(142),T=function(){var e=Object(c.useState)(null),t=Object(j.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){r()}),[]);var r=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/user-in-room");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a(n.code);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){return Object(x.jsxs)(d.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:3,children:[Object(x.jsx)(d.a,{item:!0,xs:12,children:Object(x.jsx)(p.a,{variant:"h3",component:"h3",children:"Music Listening With Friends"})}),Object(x.jsx)(d.a,{item:!0,xs:12,children:Object(x.jsxs)(R.a,{disableElevation:!0,variant:"contained",color:"primary",children:[Object(x.jsx)(h.a,{color:"primary",to:"/join",component:b.b,children:"Join a Room"}),Object(x.jsx)(h.a,{color:"secondary",to:"/create",component:b.b,children:"Create a Room"})]})})]})};return Object(x.jsx)(b.a,{children:Object(x.jsxs)(l.d,{children:[Object(x.jsx)(l.b,{path:"/",element:n?Object(x.jsx)(l.a,{to:"/room/".concat(n)}):Object(x.jsx)(o,{})}),Object(x.jsx)(l.b,{path:"/join",element:Object(x.jsx)(f,{})}),Object(x.jsx)(l.b,{path:"/create",element:Object(x.jsx)(P,{})}),Object(x.jsx)(l.b,{path:"/room/:roomCode",element:Object(x.jsx)(w,{leaveRoomCallBack:function(){a(null)}})})]})})};var _=function(){return Object(x.jsx)("div",{children:Object(x.jsx)(T,{})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,144)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(_,{})}),document.getElementById("root")),I()}},[[94,1,2]]]);
//# sourceMappingURL=main.8b0a44f1.chunk.js.map
(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[43],{1661:function(e,t,n){"use strict";var a=n(0),c=n.n(a);t.a=function(e){var t=e.username,n=e.handleUsernameChange,a=e.roomName,r=e.handleRoomNameChange,o=e.handleSubmit,i=e.connecting;return c.a.createElement("form",{onSubmit:o},c.a.createElement("h2",null,"Enter a room"),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"name"},"Name:"),c.a.createElement("input",{type:"text",id:"field",value:t,onChange:n,readOnly:i,required:!0})),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"room"},"Room name:"),c.a.createElement("input",{type:"text",id:"room",value:a,onChange:r,readOnly:i,required:!0})),c.a.createElement("button",{type:"submit",disabled:i},i?"Connecting":"Join"))}},1667:function(e,t,n){"use strict";var a=n(15),c=n(26),r=n(0),o=n.n(r),i=function(e){var t=e.participant,n=Object(r.useState)([]),i=Object(c.a)(n,2),u=i[0],l=i[1],s=Object(r.useState)([]),f=Object(c.a)(s,2),d=f[0],m=f[1],b=Object(r.useRef)(),p=Object(r.useRef)(),v=function(e){return Array.from(e.values()).map((function(e){return e.track})).filter((function(e){return null!==e}))};return Object(r.useEffect)((function(){l(v(t.videoTracks)),m(v(t.audioTracks));return t.on("trackSubscribed",(function(e){"video"===e.kind?l((function(t){return[].concat(Object(a.a)(t),[e])})):"audio"===e.kind&&m((function(t){return[].concat(Object(a.a)(t),[e])}))})),t.on("trackUnsubscribed",(function(e){"video"===e.kind?l((function(t){return t.filter((function(t){return t!==e}))})):"audio"===e.kind&&m((function(t){return t.filter((function(t){return t!==e}))}))})),function(){l([]),m([]),t.removeAllListeners()}}),[t]),Object(r.useEffect)((function(){var e=u[0];if(e)return e.attach(b.current),function(){e.detach()}}),[u]),Object(r.useEffect)((function(){var e=d[0];if(e)return e.attach(p.current),function(){e.detach()}}),[d]),o.a.createElement("div",{className:"participant"},o.a.createElement("h3",null,t.identity),o.a.createElement("video",{ref:b,autoPlay:!0}),o.a.createElement("audio",{ref:p,autoPlay:!0,muted:!0}))};t.a=function(e){var t=e.roomName,n=e.room,u=e.handleLogout;console.log("room",n);var l=Object(r.useState)([]),s=Object(c.a)(l,2),f=s[0],d=s[1];Object(r.useEffect)((function(){var e=function(e){d((function(t){return[].concat(Object(a.a)(t),[e])}))},t=function(e){d((function(t){return t.filter((function(t){return t!==e}))}))};return n.on("participantConnected",e),n.on("participantDisconnected",t),n.participants.forEach(e),function(){n.off("participantConnected",e),n.off("participantDisconnected",t)}}),[n]);var m=f.map((function(e){return o.a.createElement(i,{key:e.sid,participant:e})}));return o.a.createElement("div",{className:"room"},o.a.createElement("h2",null,"Room: ",t),o.a.createElement("button",{onClick:u},"Log out"),o.a.createElement("div",{className:"local-participant"},n?o.a.createElement(i,{key:n.localParticipant.sid,participant:n.localParticipant}):""),o.a.createElement("h3",null,"Remote Participants"),o.a.createElement("div",{className:"remote-participants"},m))}},2777:function(e,t,n){"use strict";n.r(t);var a=n(347),c=n.n(a),r=n(440),o=n(26),i=n(0),u=n.n(i),l=n(1859),s=n.n(l),f=n(1661),d=n(1667),m=n(94),b=n(31),p=n(101),v=n(36);t.default=function(){var e=Object(v.g)(),t=Object(b.d)((function(e){return e.firebase.profile})),n=Object(b.d)((function(e){return e.firestore.ordered.Meetings})),a=Object(i.useState)(""),l=Object(o.a)(a,2),h=l[0],O=l[1],E=Object(i.useState)(""),j=Object(o.a)(E,2),g=j[0],k=j[1],y=Object(i.useState)(null),C=Object(o.a)(y,2),w=C[0],N=C[1],S=Object(i.useState)(!1),R=Object(o.a)(S,2),L=R[0],P=R[1],T=Object(i.useState)(null),x=Object(o.a)(T,2),F=x[0],J=x[1];Object(p.useFirestoreConnect)([{collection:"Meetings",where:["RecieverEmail","==",t.email]}]);var M=Object(i.useCallback)((function(e){O(e.target.value)}),[]),U=Object(i.useCallback)((function(e){k(e.target.value)}),[]),q=Object(i.useCallback)((function(){N((function(e){return e&&(e.localParticipant.tracks.forEach((function(e){e.track.stop()})),e.disconnect()),null}))}),[]);return Object(i.useEffect)(Object(r.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(!0),e.next=3,fetch("https://us-central1-ziaapp-ac0eb.cloudfunctions.net/GetToken",{method:"POST",body:JSON.stringify({identity:null===t||void 0===t?void 0:t.email,room:null===F||void 0===F?void 0:F.RoomNumber}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}));case 3:n=e.sent,console.log("datatoken",n),s.a.connect(n.token,{name:null===F||void 0===F?void 0:F.RoomNumber}).then((function(e){P(!1),N(e)})).catch((function(e){console.error(e),P(!1)}));case 6:case"end":return e.stop()}}),e)}))),[]),Object(i.useEffect)((function(){if(w){var e=function(e){e.persisted||w&&q()};return window.addEventListener("pagehide",e),window.addEventListener("beforeunload",e),function(){window.removeEventListener("pagehide",e),window.removeEventListener("beforeunload",e)}}}),[w,q]),Object(i.useEffect)((function(){var e;n&&J(null===(e=n[0])||void 0===e?void 0:e.id)}),[n]),console.log("Meeting",n,F),!0===L?u.a.createElement(u.a.Fragment,null,"loading..."):w?u.a.createElement(d.a,{roomName:"001",room:w,handleLogout:function(){m.a.firestore().collection("Meetings").doc(null===F||void 0===F?void 0:F.id).delete(),q(),e.push("/newleads")}}):u.a.createElement(f.a,{username:h,roomName:g,handleUsernameChange:M,handleRoomNameChange:U,connecting:L})}}}]);
//# sourceMappingURL=43.fc44db73.chunk.js.map
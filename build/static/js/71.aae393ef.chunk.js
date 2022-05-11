(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[71],{2812:function(e,t,a){"use strict";a.r(t);var n=a(15),l=a(349),r=a.n(l),c=a(441),s=a(42),i=a(43),o=a(58),d=a(59),u=a(0),m=a.n(u),v=a(125),p=a(2488),h=a(1850),E=a(2489),f=a(2490),g=a(25),b=a.n(g),y=function(e){return b.a.post("/api/calendar/events/add",e)},D=function(e){return b.a.post("/api/calendar/events/update",e)},x=function(e){return b.a.post("/api/calendar/events/delete",e)},k=a(22),w=a.n(k),N=a(174),C=a(254),S=a(1669),O=a(1389),j=a(1399),R=a(1390),F=a(91),W=a(151),M=a(34),G=a(1532),I=a.n(G),T=a(2686),q=a(78),B=q.object().shape({title:q.string().required("Title is required"),start:q.string().required("Start date is required")}),H=function(e){var t=e.open,a=e.eventObject,n=e.handleSubmit,l=e.handleDeleteEvent,r=e.closeDialog;return m.a.createElement(N.a,{show:t,centered:!0,size:"lg",className:"d-flex justify-content-center mx-auto",style:{maxWidth:"500px"},onHide:r},m.a.createElement(M.d,{enableReinitialize:!0,initialValues:a,onSubmit:function(e){n(e)},validationSchema:B},(function(e){var t=e.values,a=e.errors,n=e.touched,c=e.handleChange,s=e.handleBlur,i=e.handleSubmit,o=(e.isSubmitting,e.setSubmitting,e.setFieldValue);return m.a.createElement(C.a,null,m.a.createElement(C.a.Header,{className:"bg-primary text-white d-flex flex-wrap justify-content-between align-items-center"},m.a.createElement("h4",{className:"m-0 text-white"},"New Event"),m.a.createElement("i",{className:"i-Close-Window cursor-pointer text-18",onClick:r})),m.a.createElement(C.a.Body,null,m.a.createElement(S.a,{onSubmit:i},m.a.createElement(O.a,null,m.a.createElement(j.a,null,"Title"),m.a.createElement(R.a,{type:"text",name:"title",className:"mb-3",onChange:c,onBlur:s,value:t.title,isInvalid:a.title&&n.title})),m.a.createElement(S.a.Row,null,m.a.createElement(O.a,{as:F.a},m.a.createElement(j.a,null,"Start Date"),m.a.createElement(I.a,{className:"form-control mb-1 w-100",dateFormat:"dd/MM/yyyy",selected:t.start?new Date(t.start):new Date,onChange:function(e){o("start",e)}})),m.a.createElement(O.a,{as:F.a},m.a.createElement(j.a,null,"End Date"),m.a.createElement(I.a,{className:"form-control mb-1",dateFormat:"dd/MM/yyyy",selected:t.end?new Date(t.end):new Date,onChange:function(e){o("end",e)}}))),m.a.createElement("p",null,m.a.createElement("label",{className:"checkbox checkbox-primary"},m.a.createElement("input",{type:"checkbox",name:"allDay",value:t.allDay,checked:t.allDay,onChange:c,onBlur:s}),m.a.createElement("span",null,"All day"),m.a.createElement("span",{className:"checkmark"}))),m.a.createElement(T.a,{className:"w-100 mb-4",color:t.color,onChangeComplete:function(e){var t=e.hex;return o("color",t)}}),m.a.createElement("div",{className:"d-flex justify-content-between"},m.a.createElement(W.a,{type:"submit",variant:"primary"},"Save"),m.a.createElement(W.a,{type:"button",variant:"danger",onClick:function(){return l(t.id)}},m.a.createElement("i",{className:"i-Delete-File"}," "),"Delete")))))})))},P=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var l=arguments.length,i=new Array(l),o=0;o<l;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).calendarComponentRef=m.a.createRef(),e.externalEventRef=m.a.createRef(),e.state={eventDialogOpen:!1,calendarEvents:[],eventObject:{},newEventInput:"",deleteEventOnDrop:!1,externalEvents:[{title:"Hello world"},{title:"Payment schedule"},{title:"Go to shopping"},{title:"Rend due"},{title:"Car rent"}]},e.toggleWeekends=function(){e.setState({calendarWeekends:!e.state.calendarWeekends})},e.gotoPast=function(){e.calendarComponentRef.current.getApi().gotoDate("2000-01-01")},e.handleDateClick=function(t){e.setState({eventDialogOpen:!0,eventObject:{title:"",start:t.date,allDay:t.allDay,classNames:["text-white"]}})},e.handleEventDrop=function(){var t=Object(c.a)(r.a.mark((function t(a){var n,l,c,s,i,o,d,u,m,v;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.event,l=n.id,c=n.start,s=n.end,i=n.title,o=n.allDay,d=n.classNames,u=n.backgroundColor,n.extendedProps,t.next=3,D({id:l,start:c,end:s,title:i,allDay:o,classNames:d,color:u});case 3:m=t.sent,v=m.data,e.refreshFullCalendar(v);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleExternalEventDrop=function(t){var a=t.date,n=t.allDay,l=t.draggedEl,r=l.innerText,c=l.classList.value;e.handleEventDialogSubmit({start:a,title:r,allDay:n,classNames:c.concat(" text-white")});var s=e.state,i=s.externalEvents,o=void 0===i?[]:i;s.deleteEventOnDrop&&e.setState({externalEvents:o.filter((function(e){return!e.title.match(r)}))})},e.handleDeleteEvent=function(){var t=Object(c.a)(r.a.mark((function t(a){var n,l;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,x({id:a});case 4:n=t.sent,l=n.data,e.refreshFullCalendar(l);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.toggleEventDialog=function(){e.setState({eventDialogOpen:!e.state.eventDialogOpen})},e.handleEventDialogSubmit=function(){var t=Object(c.a)(r.a.mark((function t(a){var n,l,c,s,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=[],!a.id){t.next=9;break}return t.next=4,D(a);case 4:l=t.sent,c=l.data,n=c,t.next=14;break;case 9:return t.next=11,y(a);case 11:s=t.sent,i=s.data,n=i;case 14:e.refreshFullCalendar(n);case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleEventClick=function(t){var a=t.event,n=a.id,l=a.start,r=a.end,c=a.title,s=a.allDay,i=a.classNames,o=a.backgroundColor;a.extendedProps;e.setState({eventDialogOpen:!0,eventObject:{id:n,title:c,start:l,end:r,allDay:s,classNames:i,color:o}})},e.handleChange=function(t){var a=t.target.value;"Enter"===t.key?""!==(a=a.trim())&&e.setState({externalEvents:[].concat(Object(n.a)(e.state.externalEvents),[{title:a}]),newEventInput:""}):e.setState({newEventInput:a})},e.refreshFullCalendar=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];e.setState({calendarEvents:t.map((function(e){return{start:e.start,title:e.title,id:e.id,end:e.end,classNames:e.classNames,color:e.color,allDay:e.allDay}})),eventDialogOpen:!1})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("/api/calendar/events/all").then((function(t){var a=t.data;e.state&&e.setState({calendarEvents:a})}));var t=this.externalEventRef.current;new f.a(t,{itemSelector:".fc-event",eventData:function(e){return{title:e.innerText,id:w.a.generate(),classNames:e.classList.value+" text-white",create:!1}}})}},{key:"render",value:function(){var e=this,t=this.state,a=t.calendarEvents,n=t.calendarWeekends,l=t.eventDialogOpen,r=t.eventObject,c=t.newEventInput,s=t.deleteEventOnDrop,i=t.externalEvents,o=void 0===i?[]:i;return m.a.createElement("div",null,m.a.createElement(v.a,{routeSegments:[{name:"Home",path:"/"},{name:"Calendar"}]}),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-md-3"},m.a.createElement("div",{className:"card mb-4"},m.a.createElement("div",{className:"card-body"},m.a.createElement("div",{className:"create_event_wrap"},m.a.createElement("div",{className:"form-group"},m.a.createElement("label",{htmlFor:"newEvent"}," Create new Event"),m.a.createElement("input",{type:"text",name:"newEvent",className:"form-control",placeholder:"new Event",value:c,onChange:this.handleChange,onKeyUp:this.handleChange})),m.a.createElement("ul",{className:"list-group",id:"external-events",ref:this.externalEventRef},o.map((function(e,t){return m.a.createElement("li",{key:t,style:{backgroundColor:"#f5f5f5",color:"#000000"},className:"list-group-item  fc-event"},e.title)}))),m.a.createElement("p",null,m.a.createElement("label",{className:"checkbox checkbox-primary"},m.a.createElement("input",{type:"checkbox",name:"agree",value:s,checked:s,onChange:function(t){return e.setState({deleteEventOnDrop:t.target.checked})}}),m.a.createElement("span",null,"Remove after drop"),m.a.createElement("span",{className:"checkmark"}))))))),m.a.createElement("div",{className:"col-md-9"},m.a.createElement("div",{className:"card mb-4 o-hidden"},m.a.createElement("div",{className:"card-body"},m.a.createElement(p.a,{defaultView:"dayGridMonth",header:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay,listWeek"},themeSystem:"bootstrap",displayEventTime:!1,droppable:!0,editable:!0,eventLimit:!0,plugins:[h.d,E.a,f.b],ref:this.calendarComponentRef,weekends:n,events:a,dateClick:this.handleDateClick,eventDrop:this.handleEventDrop,eventResize:this.handleEventDrop,eventClick:this.handleEventClick,drop:this.handleExternalEventDrop}))))),m.a.createElement(H,{open:l,closeDialog:this.toggleEventDialog,handleSubmit:this.handleEventDialogSubmit,eventObject:r,handleDeleteEvent:this.handleDeleteEvent}))}}]),a}(u.Component);t.default=P}}]);
//# sourceMappingURL=71.aae393ef.chunk.js.map
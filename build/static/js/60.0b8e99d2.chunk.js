(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[60],{1543:function(e,t,a){"use strict";var n=a(6),r=a(8),l=a(7),s=a.n(l),i=a(0),c=a.n(i),o=a(69),u=a(38),m=a(16),d=a(135),b=a(452),h=a(222),v=a(54),f=a(127),E=Object(h.a)("h4");E.displayName="DivStyledAsH4";var g=Object(v.a)("alert-heading",{Component:E}),p=Object(v.a)("alert-link",{Component:f.a}),C={show:!0,transition:d.a,closeLabel:"Close alert"},O=c.a.forwardRef((function(e,t){var a=Object(o.a)(e,{show:"onClose"}),l=a.bsPrefix,i=a.show,h=a.closeLabel,v=a.className,f=a.children,E=a.variant,g=a.onClose,p=a.dismissible,C=a.transition,O=Object(r.a)(a,["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"]),j=Object(m.a)(l,"alert"),w=Object(u.a)((function(e){g&&g(!1,e)})),y=!0===C?d.a:C,k=c.a.createElement("div",Object(n.a)({role:"alert"},y?void 0:O,{ref:t,className:s()(v,j,E&&j+"-"+E,p&&j+"-dismissible")}),p&&c.a.createElement(b.a,{onClick:w,label:h}),f);return y?c.a.createElement(y,Object(n.a)({unmountOnExit:!0},O,{ref:void 0,in:i}),k):i?k:null}));O.displayName="Alert",O.defaultProps=C,O.Link=p,O.Heading=g,t.a=O},2798:function(e,t,a){"use strict";a.r(t);var n=a(42),r=a(52),l=a(57),s=a(58),i=a(0),c=a.n(i),o=a(1543),u=a(150),m=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={variantList:["primary","secondary","success","danger","warning","info","light","dark"],showCustomAlert:!0},e.handleClose=function(t){var a=e.state.variantList.filter((function(e,a){return a!==t}));e.setState({variantList:a})},e.closeCustomAlert=function(){e.setState({showCustomAlert:!1})},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.variantList,n=t.showCustomAlert;return c.a.createElement(i.Fragment,null,n&&c.a.createElement(o.a,{className:"text-center alert-card",variant:"warning",dismissible:!0,onClose:this.closeCustomAlert},"Gull makes developent life easier!",c.a.createElement(u.a,{variant:"warning",className:"btn-rounded ml-3"},"Buy Now")),a.map((function(t,a){return c.a.createElement(o.a,{key:a,variant:t,dismissible:!0,onClose:function(){return e.handleClose(a)}},"This is a ",t," alert\u2014check it out!")})))}}]),a}(i.Component),d=a(26),b=function(){var e=Object(i.useState)(!0),t=Object(d.a)(e,2),a=t[0],n=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(o.a,{show:a,variant:"success"},c.a.createElement(o.a.Heading,null,"How's it going?!"),c.a.createElement("p",null,"Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum."),c.a.createElement("hr",{className:"my-3"}),c.a.createElement("div",{className:"d-flex justify-content-end"},c.a.createElement(u.a,{onClick:function(){return n(!1)},variant:"outline-success"},"Close me ya'll!"))),!a&&c.a.createElement(u.a,{onClick:function(){return n(!0)}},"Show Alert"))},h=function(){var e=c.a.useState(!0),t=Object(d.a)(e,2),a=t[0],n=t[1];return c.a.createElement(i.Fragment,null,a&&c.a.createElement(o.a,{variant:"danger",dismissible:!0,onClose:function(){return n(!1)}},c.a.createElement(o.a.Heading,null,"Oh snap! You got an error!"),c.a.createElement("p",null,"Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.")),!a&&c.a.createElement(u.a,{variant:"success",onClick:function(){return n(!0)}},"Show Alert"))},v=a(123),f=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={},e}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(v.a,{routeSegments:[{name:"UI Kits",path:"/uikits"},{name:"Alerts"}]}),c.a.createElement("div",{className:"mb-4"},c.a.createElement(m,null)),c.a.createElement("div",{className:"mb-4"},c.a.createElement("h4",{className:"mb-3"},"Success Alert"),c.a.createElement(b,null)),c.a.createElement("div",{className:"mb-4"},c.a.createElement("h4",{className:"mb-3"},"Danger Alert"),c.a.createElement(h,null)))}}]),a}(i.Component);t.default=f}}]);
//# sourceMappingURL=60.0b8e99d2.chunk.js.map
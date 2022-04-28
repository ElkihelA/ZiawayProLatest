(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[39],{1523:function(e,a,t){"use strict";t.d(a,"c",(function(){return r})),t.d(a,"d",(function(){return i})),t.d(a,"b",(function(){return s})),t.d(a,"a",(function(){return c})),t.d(a,"e",(function(){return m}));var n=t(25),l=t.n(n),r=function(){return l.a.get("/api/invoices/all")},i=function(e){return l.a.get("/api/invoices",{data:e})},s=function(e){return l.a.post("/api/invoices/delete",e)},c=function(e){return l.a.post("/api/invoices/add",e)},m=function(e){return l.a.post("/api/invoices/update",e)}},1664:function(e,a,t){"use strict";var n=t(6),l=t(8),r=t(7),i=t.n(r),s=t(0),c=t.n(s),m=(t(659),t(1349)),o=t(1328),d=t(16),u=c.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,m=e.bsCustomPrefix,u=e.className,b=e.type,p=void 0===b?"checkbox":b,v=e.isValid,E=void 0!==v&&v,f=e.isInvalid,h=void 0!==f&&f,N=e.isStatic,g=e.as,y=void 0===g?"input":g,x=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"]),w=Object(s.useContext)(o.a),I=w.controlId,j=w.custom?[m,"custom-control-input"]:[r,"form-check-input"],O=j[0],C=j[1];return r=Object(d.a)(O,C),c.a.createElement(y,Object(n.a)({},x,{ref:a,type:p,id:t||I,className:i()(u,r,E&&"is-valid",h&&"is-invalid",N&&"position-static")}))}));u.displayName="FormCheckInput";var b=u,p=c.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.bsCustomPrefix,m=e.className,u=e.htmlFor,b=Object(l.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),p=Object(s.useContext)(o.a),v=p.controlId,E=p.custom?[r,"custom-control-label"]:[t,"form-check-label"],f=E[0],h=E[1];return t=Object(d.a)(f,h),c.a.createElement("label",Object(n.a)({},b,{ref:a,htmlFor:u||v,className:i()(m,t)}))}));p.displayName="FormCheckLabel";var v=p,E=c.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,u=e.bsCustomPrefix,p=e.inline,E=void 0!==p&&p,f=e.disabled,h=void 0!==f&&f,N=e.isValid,g=void 0!==N&&N,y=e.isInvalid,x=void 0!==y&&y,w=e.feedbackTooltip,I=void 0!==w&&w,j=e.feedback,O=e.className,C=e.style,k=e.title,P=void 0===k?"":k,F=e.type,S=void 0===F?"checkbox":F,T=e.label,q=e.children,B=e.custom,M=e.as,V=void 0===M?"input":M,R=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"]),D="switch"===S||B,A=D?[u,"custom-control"]:[r,"form-check"],L=A[0],z=A[1];r=Object(d.a)(L,z);var U=Object(s.useContext)(o.a).controlId,G=Object(s.useMemo)((function(){return{controlId:t||U,custom:D}}),[U,D,t]),$=D||null!=T&&!1!==T&&!q,J=c.a.createElement(b,Object(n.a)({},R,{type:"switch"===S?"checkbox":S,ref:a,isValid:g,isInvalid:x,isStatic:!$,disabled:h,as:V}));return c.a.createElement(o.a.Provider,{value:G},c.a.createElement("div",{style:C,className:i()(O,r,D&&"custom-"+S,E&&r+"-inline")},q||c.a.createElement(c.a.Fragment,null,J,$&&c.a.createElement(v,{title:P},T),(g||x)&&c.a.createElement(m.a,{type:g?"valid":"invalid",tooltip:I},j))))}));E.displayName="FormCheck",E.Input=b,E.Label=v;var f=E,h=c.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,m=e.bsCustomPrefix,u=e.className,b=e.isValid,p=e.isInvalid,v=e.lang,E=e.as,f=void 0===E?"input":E,h=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),N=Object(s.useContext)(o.a),g=N.controlId,y=N.custom?[m,"custom-file-input"]:[r,"form-control-file"],x=y[0],w=y[1];return r=Object(d.a)(x,w),c.a.createElement(f,Object(n.a)({},h,{ref:a,id:t||g,type:"file",lang:v,className:i()(u,r,b&&"is-valid",p&&"is-invalid")}))}));h.displayName="FormFileInput";var N=h,g=c.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.bsCustomPrefix,m=e.className,u=e.htmlFor,b=Object(l.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),p=Object(s.useContext)(o.a),v=p.controlId,E=p.custom?[r,"custom-file-label"]:[t,"form-file-label"],f=E[0],h=E[1];return t=Object(d.a)(f,h),c.a.createElement("label",Object(n.a)({},b,{ref:a,htmlFor:u||v,className:i()(m,t),"data-browse":b["data-browse"]}))}));g.displayName="FormFileLabel";var y=g,x=c.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,u=e.bsCustomPrefix,b=e.disabled,p=void 0!==b&&b,v=e.isValid,E=void 0!==v&&v,f=e.isInvalid,h=void 0!==f&&f,g=e.feedbackTooltip,x=void 0!==g&&g,w=e.feedback,I=e.className,j=e.style,O=e.label,C=e.children,k=e.custom,P=e.lang,F=e["data-browse"],S=e.as,T=void 0===S?"div":S,q=e.inputAs,B=void 0===q?"input":q,M=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),V=k?[u,"custom"]:[r,"form-file"],R=V[0],D=V[1];r=Object(d.a)(R,D);var A=Object(s.useContext)(o.a).controlId,L=Object(s.useMemo)((function(){return{controlId:t||A,custom:k}}),[A,k,t]),z=null!=O&&!1!==O&&!C,U=c.a.createElement(N,Object(n.a)({},M,{ref:a,isValid:E,isInvalid:h,disabled:p,as:B,lang:P}));return c.a.createElement(o.a.Provider,{value:L},c.a.createElement(T,{style:j,className:i()(I,r,k&&"custom-file")},C||c.a.createElement(c.a.Fragment,null,k?c.a.createElement(c.a.Fragment,null,U,z&&c.a.createElement(y,{"data-browse":F},O)):c.a.createElement(c.a.Fragment,null,z&&c.a.createElement(y,null,O),U),(E||h)&&c.a.createElement(m.a,{type:E?"valid":"invalid",tooltip:x},w))))}));x.displayName="FormFile",x.Input=N,x.Label=y;var w=x,I=t(1379),j=t(1378),O=t(1388),C=c.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,s=e.as,m=void 0===s?"small":s,o=e.muted,u=Object(l.a)(e,["bsPrefix","className","as","muted"]);return t=Object(d.a)(t,"form-text"),c.a.createElement(m,Object(n.a)({},u,{ref:a,className:i()(r,t,o&&"text-muted")}))}));C.displayName="FormText";var k=C,P=c.a.forwardRef((function(e,a){return c.a.createElement(f,Object(n.a)({},e,{ref:a,type:"switch"}))}));P.displayName="Switch",P.Input=f.Input,P.Label=f.Label;var F=P,S=t(54),T=Object(S.a)("form-row"),q=c.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.inline,s=e.className,m=e.validated,o=e.as,u=void 0===o?"form":o,b=Object(l.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(d.a)(t,"form"),c.a.createElement(u,Object(n.a)({},b,{ref:a,className:i()(s,m&&"was-validated",r&&t+"-inline")}))}));q.displayName="Form",q.defaultProps={inline:!1},q.Row=T,q.Group=j.a,q.Control=I.a,q.Check=f,q.File=w,q.Switch=F,q.Label=O.a,q.Text=k;a.a=q},2803:function(e,a,t){"use strict";t.r(a);var n=t(42),l=t(52),r=t(57),i=t(58),s=t(0),c=t.n(s),m=t(254),o=t(5),d=t(150),u=t(24),b=t(1523),p=t(2686),v=t(36),E=function(e){Object(r.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,r=new Array(l),i=0;i<l;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={},e.subTotalCost=0,e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(b.d)(this.props.match.params.id).then((function(a){e.setState(Object(o.a)({},a.data))}))}},{key:"render",value:function(){var e=this;this.subTotalCost=0;var a=this.state,t=a.orderNo,n=a.buyer,l=a.seller,r=a.item,i=void 0===r?[]:r,s=a.status,m=a.vat,o=a.date;return c.a.createElement("div",{className:"invoice-viewer py-16"},c.a.createElement("div",{className:"viewer_actions px-3 mb-3 d-flex align-items-center justify-content-between"},c.a.createElement(u.a,{to:"/invoice/list"},c.a.createElement("i",{className:"i-Left1 text-20 font-weight-700"}," ")),c.a.createElement("div",null,c.a.createElement(d.a,{className:"mr-3 py-2",variant:"primary",onClick:function(){return e.props.toggleInvoiceEditor()}},"Edit Invoice"),c.a.createElement(d.a,{onClick:function(){return window.print()},className:"py-2",variant:"warning"},"Print Invoice"))),c.a.createElement("div",{id:"print-area",className:"px-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("h4",{className:"font-weight-bold"},"Order Info"),c.a.createElement("p",null,"#",t)),c.a.createElement("div",{className:"col-md-6 text-sm-right"},c.a.createElement("p",{className:"text-capitalize"},c.a.createElement("strong",null,"Order status:")," ",s),c.a.createElement("p",null,c.a.createElement("strong",null,"Order date: "),c.a.createElement("span",null,o?Object(p.default)(new Date(o).getTime(),"MMMM dd, yyyy"):"")))),c.a.createElement("div",{className:"mt-3 mb-4 border-top"}),c.a.createElement("div",{className:"row mb-5"},c.a.createElement("div",{className:"col-md-6 mb-3 mb-sm-0"},c.a.createElement("h5",{className:"font-weight-bold"},"Bill From"),c.a.createElement("p",null,l?l.name:null),c.a.createElement("span",{className:"white-space-pre-line"},l?l.address:null)),c.a.createElement("div",{className:"col-md-6 text-sm-right"},c.a.createElement("h5",{className:"font-weight-bold"},"Bill To"),c.a.createElement("p",null,n?n.name:null),c.a.createElement("span",{className:"white-space-pre-line"},n?n.address:null))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12 table-responsive"},c.a.createElement("table",{className:"table table-hover mb-4"},c.a.createElement("thead",{className:"bg-gray-300"},c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"#"),c.a.createElement("th",{scope:"col"},"Item Name"),c.a.createElement("th",{scope:"col"},"Unit Price"),c.a.createElement("th",{scope:"col"},"Unit"),c.a.createElement("th",{scope:"col"},"Cost"))),c.a.createElement("tbody",null,i.map((function(a,t){return e.subTotalCost+=a.unit*a.price,c.a.createElement("tr",{key:t},c.a.createElement("td",{className:"text-capitalize"},t+1),c.a.createElement("td",{className:"text-capitalize"},a.name),c.a.createElement("td",{className:"text-capitalize"},a.price),c.a.createElement("td",{className:"text-capitalize"},a.unit),c.a.createElement("td",null,a.unit*a.price))}))))),c.a.createElement("div",{className:"col-md-12"},c.a.createElement("div",{className:"invoice-summary"},c.a.createElement("p",null,"Sub total: ",c.a.createElement("span",null,"$",this.subTotalCost)),c.a.createElement("p",null,"Vat(%): ",c.a.createElement("span",null,m)),c.a.createElement("h5",{className:"font-weight-bold"},"Grand Total:",c.a.createElement("span",null,"$",this.subTotalCost+=this.subTotalCost*m/100)))))))}}]),t}(s.Component),f=Object(v.i)(E),h=t(1664),N=t(1378),g=t(1388),y=t(1379),x=t(34),w=t(1527),I=t.n(w),j=t(76),O=function(e){Object(r.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,r=new Array(l),i=0;i<l;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={id:"",orderNo:"",buyer:{name:"",address:""},seller:{name:"",address:""},item:[],status:"",vat:"",date:new Date,currency:"$",loading:!1},e.subTotalCost=0,e.generateRandomId=function(){var a=Math.random().toString(),t=a.substr(2,a.length-1);e.setState({id:t})},e.handleSubmit=function(a,t){var n=t.setSubmitting,l=e.state.id;e.setState({loading:!0}),n(!0),console.log(a),e.props.isNewInvoice?Object(b.a)(Object(o.a)({id:l},a)).then((function(){e.setState({loading:!1}),e.props.history.push("/invoice/".concat(l)),e.props.toggleInvoiceEditor()})):Object(b.e)(a).then((function(){e.setState({loading:!1}),e.props.toggleInvoiceEditor()}))},e.calculateSubTotal=function(a){e.subTotalCost=a.item.reduce((function(e,a){return e+a.price*a.unit}),0)},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.isNewInvoice?this.generateRandomId():Object(b.d)(this.props.match.params.id).then((function(a){e.setState(Object(o.a)({},a.data))}))}},{key:"render",value:function(){var e=this;this.subTotalCost=0;var a=this.state.loading;return c.a.createElement("div",{className:"invoice-viewer py-3"},c.a.createElement(x.d,{initialValues:this.state,validationSchema:C,onSubmit:this.handleSubmit,enableReinitialize:!0},(function(t){var n=t.values,l=t.errors,r=t.touched,i=t.handleChange,m=t.handleBlur,o=t.handleSubmit,u=(t.isSubmitting,t.setSubmitting,t.setFieldValue);return e.calculateSubTotal(n),c.a.createElement(s.Fragment,null,c.a.createElement(h.a,{onSubmit:o,className:"px-3"},c.a.createElement("div",{className:"viewer_actions d-flex justify-content-end"},c.a.createElement("div",{className:"mb-4"},c.a.createElement(d.a,{type:"button",className:"mr-3 py-2",variant:"warning",onClick:function(){return e.props.toggleInvoiceEditor()}},"Cancel"),c.a.createElement(d.a,{type:"submit",className:"py-2",variant:"primary",disabled:a},"Save"))),c.a.createElement("div",{className:"row justify-content-between"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("h4",{className:"font-weight-bold"},"Order Info"),c.a.createElement(N.a,{className:"col-sm-4 mb-3 pl-0"},c.a.createElement(g.a,null,"Order Number"),c.a.createElement(y.a,{type:"text",className:"form-control",name:"orderNo",placeholder:"Enter order number",onChange:i,onBlur:m,isInvalid:l.orderNo&&r.orderNo,value:n.orderNo}))),c.a.createElement("div",{className:"col-md-3 text-right"},c.a.createElement("label",{className:"d-block text-12 text-muted"},"Order Status"),c.a.createElement("div",{className:"pr-0 mb-4"},c.a.createElement("fieldset",{className:"offset-md-6"},c.a.createElement("label",{className:"radio radio-danger"},c.a.createElement("input",{type:"radio",name:"status",checked:"pending"===n.status,onChange:i,value:"pending"}),c.a.createElement("span",null,"Pending"),c.a.createElement("span",{className:"checkmark"})),c.a.createElement("label",{className:"radio check-reverse radio-warning"},c.a.createElement("input",{type:"radio",name:"status",checked:"processing"===n.status,onChange:i,value:"processing"}),c.a.createElement("span",null,"Processing"),c.a.createElement("span",{className:"checkmark"})),c.a.createElement("label",{className:"radio radio-success"},c.a.createElement("input",{type:"radio",name:"status",checked:"delivered"===n.status,onChange:i,value:"delivered"}),c.a.createElement("span",null,"Delivered"),c.a.createElement("span",{className:"checkmark"}))),l.status&&r.status&&c.a.createElement("small",{className:"text-danger"},"Minimum 1 item is required")),c.a.createElement("div",{className:"form-group mb-3"},c.a.createElement("div",{className:"mb-1"},"Order Date"),c.a.createElement(I.a,{className:"form-control text-right",dateFormat:"dd/MM/yyyy",selected:new Date(n.date),onChange:function(e){u("date",e)}})))),c.a.createElement("div",{className:"mt-3 mb-4 border-top"}),c.a.createElement("div",{className:"row mb-5"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("h5",{className:"font-weight-bold"},"Bill From"),c.a.createElement(N.a,{className:"col-md-10 mb-3 pl-0"},c.a.createElement(y.a,{type:"text",className:"form-control",name:"seller.name",placeholder:"Bill From",value:n.seller.name,onChange:i,onBlur:m,isInvalid:l.seller&&l.seller.name&&r.seller&&r.seller.name})),c.a.createElement(N.a,{className:"col-md-10 mb-3 pl-0"},c.a.createElement(y.a,{as:"textarea",placeholder:"Bill From Address",name:"seller.address",value:n.seller.address,onChange:i,onBlur:m,isInvalid:l.seller&&r.seller&&l.seller.address&&r.seller.address}))),c.a.createElement("div",{className:"col-md-6 text-right"},c.a.createElement("h5",{className:"font-weight-bold"},"Bill To"),c.a.createElement(N.a,{className:"col-md-10 offset-md-2 mb-3 pr-0"},c.a.createElement(y.a,{type:"text",className:"text-right",name:"buyer.name",placeholder:"Bill From",value:n.buyer.name,onChange:i,onBlur:m,isInvalid:l.buyer&&r.buyer&&l.buyer.name&&r.buyer.name})),c.a.createElement(N.a,{className:"col-md-10 offset-md-2 mb-3 pr-0"},c.a.createElement(y.a,{as:"textarea",className:"text-right",placeholder:"Bill From Address",name:"buyer.address",value:n.buyer.address,onChange:i,onBlur:m,isInvalid:l.buyer&&r.buyer&&l.buyer.address&&r.buyer.address})))),c.a.createElement("div",{className:"row"},c.a.createElement(x.c,{name:"item"},(function(e){return c.a.createElement("div",{className:"col-md-12 table-responsive"},c.a.createElement("table",{className:"table table-hover mb-3"},c.a.createElement("thead",{className:"bg-gray-300"},c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"#"),c.a.createElement("th",{scope:"col"},"Item Name"),c.a.createElement("th",{scope:"col"},"Unit Price"),c.a.createElement("th",{scope:"col"},"Unit"),c.a.createElement("th",{scope:"col"},"Cost"),c.a.createElement("th",{scope:"col"}))),c.a.createElement("tbody",null,n.item.map((function(a,t){return c.a.createElement("tr",{key:t},c.a.createElement("th",{className:"text-middle",scope:"row"},t+1),c.a.createElement("td",null,c.a.createElement(y.a,{value:n.item[t].name,name:"item[".concat(t,"].name"),type:"text",placeholder:"Item Name",onChange:i,onBlur:m,isInvalid:l.item&&r.item&&l.item[t]&&r.item[t]&&l.item[t].name&&r.item[t].name})),c.a.createElement("td",null,c.a.createElement(y.a,{value:n.item[t].price,name:"item[".concat(t,"].price"),type:"number",placeholder:"Unit Price",onChange:i,onBlur:m,isInvalid:l.item&&r.item&&l.item[t]&&r.item[t]&&l.item[t].price&&r.item[t].price})),c.a.createElement("td",null,c.a.createElement(y.a,{value:n.item[t].unit,name:"item[".concat(t,"].unit"),type:"number",placeholder:"Unit",onChange:i,onBlur:m,isInvalid:l.item&&r.item&&l.item[t]&&r.item[t]&&l.item[t].unit&&r.item[t].unit})),c.a.createElement("td",{className:"text-middle"},n.item[t].price*n.item[t].unit),c.a.createElement("td",null,c.a.createElement("button",{type:"button",onClick:function(){return e.remove(t)},className:"btn btn-outline-secondary float-right"},"Delete")))})))),0===n.item.length&&c.a.createElement("small",{className:"text-danger"},"Minimum 1 item is required"),c.a.createElement("button",{type:"button",onClick:function(){return e.push({name:"",price:"",unit:""})},className:"btn btn-primary float-right mb-4"},"Add Item"))})),c.a.createElement("div",{className:"col-md-12"},c.a.createElement("div",{className:"invoice-summary invoice-summary-input float-right"},c.a.createElement("p",null,"Sub total:",c.a.createElement("span",null,n.currency,e.subTotalCost)),c.a.createElement("p",{className:"d-flex align-items-center"},"Vat(%):",c.a.createElement("span",null,c.a.createElement(y.a,{type:"text",className:"small-input",name:"vat",value:n.vat,onChange:i,onBlur:m,isInvalid:l.vat&&r.vat}),n.currency,e.subTotalCost*n.vat/100)),c.a.createElement("h5",{className:"font-weight-bold d-flex align-items-center"},"Grand Total:",c.a.createElement("span",null,c.a.createElement(y.a,{type:"text",className:"small-input",name:"currency",value:n.currency,onChange:i,onBlur:m,isInvalid:l.currency&&r.currency}),n.currency,e.subTotalCost+e.subTotalCost*n.vat/100)))))))})))}}]),t}(s.Component),C=j.object().shape({orderNo:j.string().required("orderNo is required"),status:j.string().required("status is required"),seller:j.object().shape({name:j.string().required("name is required"),address:j.string().required("address is required")}),buyer:j.object().shape({name:j.string().required("name is required"),address:j.string().required("address is required")}),item:j.array().of(j.object().shape({name:j.string().required("name is required"),price:j.number().required("price is required"),unit:j.number().required("unit is required")})).min(1,"Minimum 1 item is required"),vat:j.number().required("unit is required"),currency:j.string().required("name is required")}),k=Object(v.i)(O),P=function(e){Object(r.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,r=new Array(l),i=0;i<l;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={showInvoiceEditor:!1,isNewInvoice:!1},e.toggleInvoiceEditor=function(){e.setState({showInvoiceEditor:!e.state.showInvoiceEditor,isNewInvoice:!1})},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){"create"===this.props.match.params.id&&this.setState({showInvoiceEditor:!0,isNewInvoice:!0})}},{key:"render",value:function(){return c.a.createElement(m.a,{elevation:6,className:"invoice-details m-sm-30"},this.state.showInvoiceEditor?c.a.createElement(k,{toggleInvoiceEditor:this.toggleInvoiceEditor,isNewInvoice:this.state.isNewInvoice}):c.a.createElement(f,{toggleInvoiceEditor:this.toggleInvoiceEditor}))}}]),t}(s.Component);a.default=P}}]);
//# sourceMappingURL=39.e2dd585a.chunk.js.map
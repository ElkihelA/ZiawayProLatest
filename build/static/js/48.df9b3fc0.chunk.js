(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[48],{1648:function(e,a,t){"use strict";t.d(a,"c",(function(){return r})),t.d(a,"b",(function(){return c})),t.d(a,"a",(function(){return o})),t.d(a,"d",(function(){return s}));var n=t(25),l=t.n(n),r=function(){return l.a.get("/api/user/all")},c=function(e){return l.a.post("/api/user/delete",e)},o=function(e){return l.a.post("/api/user/add",e)},s=function(e){return l.a.post("/api/user/update",e)}},2829:function(e,a,t){"use strict";t.r(a);var n=t(347),l=t.n(n),r=t(5),c=t(440),o=t(15),s=t(42),i=t(52),m=t(57),u=t(58),d=t(0),g=t.n(d),h=t(123),E=t(30),p=t.n(E),b=t(2686),v=t(1347),f=t.n(v),N=t(1358),C=t(24),w=t(1648),y=t(174),k=t(1664),D=t(1388),S=t(1379),x=t(34),P=t(76),j=t(1527),q=t.n(j),B=P.object().shape({name:P.string().required("title is required"),email:P.string().email().required("note is required"),phone:P.string().required("note is required"),age:P.number().required("note is required"),balance:P.number().required("note is required"),bd:P.string().required("note is required"),role:P.string().required("note is required")}),O=function(e){var a=e.show,t=e.initialValues,n=e.toggleEditorDialog,l=e.handleFormSubmit;return g.a.createElement(y.a,{show:a,onHide:n,centered:!0},g.a.createElement("div",{className:"modal-header"},g.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},t?"Update":"New"," Contact"),g.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:function(){return n(!1)}},g.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),g.a.createElement("div",{className:"modal-body"},g.a.createElement(x.d,{initialValues:t||{name:"",email:"",phone:"",note:"",age:"",balance:"",bd:new Date,role:"developer"},validationSchema:B,enableReinitialize:!0,onSubmit:l},(function(e){var a=e.values,t=e.errors,n=e.touched,l=e.handleChange,r=e.handleBlur,c=e.handleSubmit,o=(e.isSubmitting,e.setFieldValue);return g.a.createElement("form",{onSubmit:c,className:"position-relative"},g.a.createElement(k.a.Row,{className:"mb-3"},g.a.createElement(D.a,{column:!0,sm:2},"Name"),g.a.createElement(S.a,{className:"col-sm-10",placeholder:"Name",name:"name",onChange:l,onBlur:r,isInvalid:t.name&&n.name,value:a.name})),g.a.createElement(k.a.Row,{className:"mb-3"},g.a.createElement(D.a,{column:!0,sm:2},"Email"),g.a.createElement(S.a,{className:"col-sm-10",placeholder:"Email",name:"email",onChange:l,onBlur:r,isInvalid:t.email&&n.email,value:a.email})),g.a.createElement(k.a.Row,{className:"mb-3"},g.a.createElement(D.a,{column:!0,sm:2},"Phone"),g.a.createElement(S.a,{className:"col-sm-10",placeholder:"Phone",name:"phone",onChange:l,onBlur:r,isInvalid:t.phone&&n.phone,value:a.phone})),g.a.createElement(k.a.Row,{className:"mb-3"},g.a.createElement(D.a,{column:!0,sm:2},"Age"),g.a.createElement(S.a,{className:"col-sm-10",placeholder:"Age",name:"age",type:"number",onChange:l,onBlur:r,isInvalid:t.age&&n.age,value:a.age})),g.a.createElement(k.a.Row,{className:"mb-3"},g.a.createElement(D.a,{column:!0,sm:2},"Balance"),g.a.createElement(S.a,{className:"col-sm-10",placeholder:"$1230",name:"balance",type:"number",onChange:l,onBlur:r,isInvalid:t.balance&&n.balance,value:a.balance})),g.a.createElement(k.a.Row,null,g.a.createElement(D.a,{column:!0,sm:2},"Join"),"``",g.a.createElement(q.a,{className:"form-control mb-3",dateFormat:"dd/MM/yyyy",selected:new Date(a.bd),onChange:function(e){o("bd",e)}})),g.a.createElement("fieldset",{className:"form-group"},g.a.createElement("div",{className:"row"},g.a.createElement("div",{className:"col-form-label col-sm-2 pt-0"},"Role"),g.a.createElement("div",{className:"col-sm-10"},g.a.createElement("div",{className:"form-check"},g.a.createElement("input",{className:"form-check-input",type:"radio",name:"role",value:"developer",onChange:l,checked:"developer".match(a.role),id:"developer"}),g.a.createElement("label",{className:"form-check-label ml-3",htmlFor:"developer"},"Developer")),g.a.createElement("div",{className:"form-check"},g.a.createElement("input",{className:"form-check-input",type:"radio",name:"role",value:"designer",onChange:l,checked:"designer".match(a.role),id:"designer"}),g.a.createElement("label",{className:"form-check-label ml-3",htmlFor:"designer"},"Designer")),g.a.createElement("div",{className:"form-check"},g.a.createElement("input",{className:"form-check-input",type:"radio",name:"role",value:"manager",onChange:l,checked:"manager".match(a.role),id:"manager"}),g.a.createElement("label",{className:"form-check-label ml-3",htmlFor:"manager"},"Manager"))))),g.a.createElement("div",{className:"form-group row"},g.a.createElement("div",{className:"col-sm-10"},g.a.createElement("button",{type:"submit",className:"btn btn-success"},"Save Changes"))))}))))},L=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),m=0;m<n;m++)i[m]=arguments[m];return(e=a.call.apply(a,[this].concat(i))).state={rowsPerPage:10,page:0,userList:[],showEditorDialog:!1,searchQuery:"",dialogValues:null},e.updatePageData=function(){Object(w.c)().then((function(a){var t=a.data;return e.setState({userList:Object(o.a)(t)})}))},e.handleSearch=function(a){var t=a.target.value;e.setState({searchQuery:t})},e.handlePageClick=function(a){var t=a.selected;e.setState({page:t})},e.toggleEditorDialog=function(a){a&&a.toString()?e.setState({showEditorDialog:a,dialogValues:null}):e.setState({showEditorDialog:!e.state.showEditorDialog,dialogValues:null})},e.handleEditContact=function(a){e.setState({dialogValues:a,showEditorDialog:!0})},e.handleDeleteContact=function(a){Object(w.b)(a).then((function(a){var t=a.data;e.setState({userList:t}),p.a.fire({title:"Deleted!",text:"Your file has been deleted.",type:"success",icon:"success",timer:1500})}))},e.handleFormSubmit=function(){var a=Object(c.a)(l.a.mark((function a(t){var n,c;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(console.log(t),n=e.state.dialogValues){a.next=8;break}return a.next=5,Object(w.a)(t);case 5:c=a.sent,a.next=11;break;case 8:return a.next=10,Object(w.d)(Object(r.a)(Object(r.a)({},n),t));case 10:c=a.sent;case 11:e.setState({userList:c.data}),e.toggleEditorDialog(!1);case 13:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e.getBadgeColor=function(e){switch(e){case"developer":return"primary";case"manager":return"success";case"designer":return"warning";default:return"primary"}},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.updatePageData()}},{key:"render",value:function(){var e=this,a=this.state,t=a.rowsPerPage,n=a.page,l=a.userList,r=void 0===l?[]:l,c=a.dialogValues,o=a.searchQuery,s=a.showEditorDialog;return r=r.filter((function(e){return e.name.toLowerCase().match(o.toLowerCase())})),g.a.createElement("div",null,g.a.createElement(h.a,{routeSegments:[{name:"Home",path:"/"},{name:"Contact",path:"/contact"},{name:"Contact List"}]}),g.a.createElement("section",{className:"contact-list"},g.a.createElement("div",{className:"row"},g.a.createElement("div",{className:"col-md-12 mb-4"},g.a.createElement("div",{className:"card text-left"},g.a.createElement("div",{className:"card-header text-right bg-transparent"},g.a.createElement("button",{type:"button",className:"btn btn-primary btn-md m-1",onClick:this.toggleEditorDialog},g.a.createElement("i",{className:"i-Add-User text-white mr-2"})," Add Contact")),g.a.createElement("div",{className:"row px-4 mt-3"},g.a.createElement("div",{className:"col-sm-12 col-md-6 mb-2"},g.a.createElement("div",{className:"d-flex align-items-center"},g.a.createElement("span",{className:"mr-1"},"Show"),g.a.createElement("div",{className:"mr-1"},g.a.createElement("select",{className:"form-control",onChange:function(a){var t=a.target.value;e.setState({rowsPerPage:t})}},g.a.createElement("option",{value:10},"10"),g.a.createElement("option",{value:25},"25"),g.a.createElement("option",{value:50},"50"),g.a.createElement("option",{value:100},"100"))),g.a.createElement("span",null,"entries"))),g.a.createElement("div",{className:"col-sm-12 col-md-6 mb-2"},g.a.createElement("div",{className:"d-flex justify-content-lg-end align-items-center"},g.a.createElement("span",{className:"mr-1"},"Search:"),g.a.createElement("div",{className:"mr-1"},g.a.createElement("input",{type:"search",className:"form-control form-control-sm",placeholder:"",onChange:this.handleSearch,"aria-controls":"ul-contact-list"}))))),g.a.createElement("div",{className:"card-body pt-1"},g.a.createElement("div",{className:"table-responsive"},g.a.createElement("table",{id:"ul-contact-list",className:"display table w-100"},g.a.createElement("thead",null,g.a.createElement("tr",null,g.a.createElement("th",null,"Name"),g.a.createElement("th",null,"Email"),g.a.createElement("th",null,"Phone"),g.a.createElement("th",null,"Role"),g.a.createElement("th",null,"Age"),g.a.createElement("th",null,"Joining Date"),g.a.createElement("th",null,"Salary"),g.a.createElement("th",null,"Action"))),g.a.createElement("tbody",null,r.slice(t*n,t*(n+1)).map((function(a,t){return g.a.createElement("tr",{key:t},g.a.createElement("td",{valign:"middle"},g.a.createElement(C.a,{to:""},g.a.createElement("div",{className:"ul-widget-app__profile-pic"},g.a.createElement("img",{className:"profile-picture avatar-sm mb-2 rounded-circle img-fluid",src:a.imgUrl,alt:""}),a.name))),g.a.createElement("td",null,a.email),g.a.createElement("td",null,a.phone),g.a.createElement("td",{valign:"middle"},g.a.createElement("div",{className:"badge badge-".concat(e.getBadgeColor(a.role)," p-2 text-capitalize")},a.role?a.role:"Developer")),g.a.createElement("td",null,a.age),g.a.createElement("td",null,Object(b.default)(new Date(a.bd?a.bd:new Date).getTime(),"dd MMM, yyyy")),g.a.createElement("td",null,"$",a.balance),g.a.createElement("td",null,g.a.createElement("div",{className:"d-flex"},g.a.createElement("div",{className:"cursor-pointer mr-3"},g.a.createElement(N.g,{className:"text-success",size:18,onClick:function(){return e.handleEditContact(a)}})),g.a.createElement("div",{className:"cursor-pointer"},g.a.createElement(N.d,{className:"text-danger",size:18,onClick:function(){p.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",type:"question",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",cancelButtonText:"No"}).then((function(t){t.value?e.handleDeleteContact(a):p.a.fire({title:"Cancelled!",text:"Permission denied.",type:"error",icon:"error",timer:1500})}))}})))))}))))),g.a.createElement("div",{className:"d-flex justify-content-end mr-lg-4"},g.a.createElement(f.a,{previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",breakClassName:"break-me",pageCount:Math.ceil(r.length/t),marginPagesDisplayed:2,pageRangeDisplayed:3,onPageChange:this.handlePageClick,containerClassName:"pagination pagination-lg",subContainerClassName:"pages pagination",activeClassName:"active"}))))))),g.a.createElement(O,{show:s,toggleEditorDialog:this.toggleEditorDialog,initialValues:c,handleFormSubmit:this.handleFormSubmit}))}}]),t}(d.Component);a.default=L}}]);
//# sourceMappingURL=48.df9b3fc0.chunk.js.map
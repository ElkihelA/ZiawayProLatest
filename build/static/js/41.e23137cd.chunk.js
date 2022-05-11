(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[41],{1528:function(e,t,a){"use strict";a.d(t,"c",(function(){return i})),a.d(t,"d",(function(){return s})),a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return c})),a.d(t,"e",(function(){return l}));var n=a(25),r=a.n(n),i=function(){return r.a.get("/api/invoices/all")},s=function(e){return r.a.get("/api/invoices",{data:e})},o=function(e){return r.a.post("/api/invoices/delete",e)},c=function(e){return r.a.post("/api/invoices/add",e)},l=function(e){return r.a.post("/api/invoices/update",e)}},1769:function(e,t,a){"use strict";var n=a(6),r=a(8),i=a(7),s=a.n(i),o=a(0),c=a.n(o),l=a(16),u=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],d=c.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,o=e.striped,d=e.bordered,p=e.borderless,m=e.hover,f=e.size,h=e.variant,v=e.responsive,b=Object(r.a)(e,u),g=Object(l.a)(a,"table"),E=s()(i,g,h&&g+"-"+h,f&&g+"-"+f,o&&g+"-striped",d&&g+"-bordered",p&&g+"-borderless",m&&g+"-hover"),N=c.a.createElement("table",Object(n.a)({},b,{className:E,ref:t}));if(v){var w=g+"-responsive";return"string"===typeof v&&(w=w+"-"+v),c.a.createElement("div",{className:w},N)}return N}));t.a=d},2769:function(e,t,a){"use strict";a.r(t);var n=a(42),r=a(43),i=a(58),s=a(59),o=a(0),c=a.n(o),l=a(151),u=a(254),d=a(1769),p=a(1528),m=a(24),f=a(29),h=a(26),v=a.n(h),b=a(31),g=a(192),E=a(102),N=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={invoiceList:[],shouldShowConfirmationDialog:!1},e.handeViewClick=function(t){e.props.history.push("/invoice/".concat(t))},e.handleDeleteInvoice=function(t){Object(p.b)(t).then((function(t){v.a.fire({title:"Deleted!",text:"Your file has been deleted.",type:"success",icon:"success",timer:1500}),e.setState({invoiceList:t.data,shouldShowConfirmationDialog:!1})}))},e.handleDialogClose=function(){e.setState({shouldShowConfirmationDialog:!1})},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;Object(p.c)().then((function(t){return e.setState({invoiceList:t.data})})),this.setState({users:this.props.users}),console.log("context",this.context)}},{key:"render",value:function(){var e=this,t=this.props.users;return console.log(this.props.users),c.a.createElement("div",null,c.a.createElement(m.a,{to:"/invoice/create"},c.a.createElement(l.a,{className:"mb-3",variant:"primary"},"Add Invoice")),c.a.createElement(u.a,{elevation:6,className:"w-100 overflow-auto"},c.a.createElement(d.a,{style:{minWidth:750}},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{className:"pl-sm-24"},"Order No."),c.a.createElement("th",{className:"px-0"},"Bill From"),c.a.createElement("th",{className:"px-0"},"Bill To"),c.a.createElement("th",{className:"px-0"},"Status"),c.a.createElement("th",{className:"px-0"},"Actions"))),c.a.createElement("tbody",null,this.props.users&&t.map((function(t,a){return c.a.createElement("tr",{key:t.id},c.a.createElement("td",{className:"pl-sm-24 capitalize",align:"left"},t.id),c.a.createElement("td",{className:"pl-0 capitalize",align:"left"},t.nom),c.a.createElement("td",{className:"pl-0 capitalize",align:"left"},t.prenom),c.a.createElement("td",{className:"pl-0 capitalize"},c.a.createElement("small",{className:Object(f.a)({"badge rounded-pill text-white px-8 py-2":!0,"bg-success":"Plan d\xe9couverte"===t.plan,"bg-warning":"processing"===t.plan,"bg-danger":"pending"===t.plan})},t.plan)),c.a.createElement("td",{className:"pl-0"},c.a.createElement("i",{className:"i-Arrow-Right mr-4 font-weight-900 text-primary cursor-pointer",onClick:function(){return e.handeViewClick(t.id)}}),c.a.createElement("i",{className:"i-Folder-Trash font-weight-900 text-danger cursor-pointer",onClick:function(){v.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",type:"question",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",cancelButtonText:"No"}).then((function(a){a.value&&e.handleDeleteInvoice(t)}))}})))}))))))}}]),a}(o.Component);t.default=Object(g.compose)(Object(E.firestoreConnect)((function(){return["users"]})),Object(b.b)((function(e,t){return{users:e.firestore.ordered.users}})))(N)}}]);
//# sourceMappingURL=41.e23137cd.chunk.js.map
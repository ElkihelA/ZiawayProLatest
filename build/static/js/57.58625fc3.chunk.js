(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[57],{1764:function(e,t,a){"use strict";var n=a(6),r=a(8),s=a(7),l=a.n(s),i=a(0),c=a.n(i),o=a(16),m=c.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,i=e.striped,m=e.bordered,u=e.borderless,d=e.hover,p=e.size,b=e.variant,h=e.responsive,f=Object(r.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),v=Object(o.a)(a,"table"),E=l()(s,v,b&&v+"-"+b,p&&v+"-"+p,i&&v+"-striped",m&&v+"-bordered",u&&v+"-borderless",d&&v+"-hover"),g=c.a.createElement("table",Object(n.a)({},f,{className:E,ref:t}));if(h){var y=v+"-responsive";return"string"===typeof h&&(y=y+"-"+h),c.a.createElement("div",{className:y},g)}return g}));t.a=m},2771:function(e,t,a){"use strict";a.r(t),a.d(t,"MesBiens",(function(){return y}));var n=a(42),r=a(52),s=a(57),l=a(58),i=a(0),c=a.n(i),o=a(123),m=a(24),u=a(150),d=a(254),p=a(1764),b=a(28),h=a(30),f=a.n(h),v=a(217),E=a(101),g=a(31),y=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={mesBiens:[{id:1,type:"unifamiliale",adresse:"3289 rue le corbusier",estimation:"1 250 000 $",alerte:"prix revise a la baisse"},{id:2,type:"condo",adresse:"123-03 rue la patate",estimation:"249 000 $",alerte:"1 client interesse"},{id:3,type:"terrain",adresse:"22 nowhere land",estimation:"152 000 $",alerte:"projet d'amenagement"},{id:4,type:"chalet",adresse:"345 rue la detente, elhih",estimation:"189 000 $",alerte:"augmentation des taxes"}]},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.state.mesBiens,a=void 0===t?[]:t,n=this.props.user,r=void 0===n?[]:n;return console.log("user",r.slice(0,3)),c.a.createElement("div",null,c.a.createElement(o.a,{routeSegments:[{name:"Accueil",path:"/"},{name:"Biens estim\xe9s",path:"/mes-biens"}]}),c.a.createElement(m.a,{to:"#",className:"d-flex justify-content-end"},c.a.createElement(u.a,{className:"mb-3",variant:"primary"},"Ajouter un bien")),c.a.createElement(d.a,{elevation:6,className:"w-100 overflow-auto"},c.a.createElement(p.a,{style:{minWidth:750}},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{className:"pl-sm-24"},"Type"),c.a.createElement("th",{className:"px-0"},"Adresse"),c.a.createElement("th",{className:"px-0"},"Estimation"),c.a.createElement("th",{className:"px-0"},"Alertes"),c.a.createElement("th",{className:"px-0"},"Actions"))),c.a.createElement("tbody",null,a&&a.map((function(t,a){return c.a.createElement("tr",{key:a},c.a.createElement("td",{className:"pl-sm-24 capitalize",align:"left"},t.type.charAt(0).toUpperCase()+t.type.slice(1)),c.a.createElement("td",{className:"pl-0 capitalize",align:"left"},t.adresse),c.a.createElement("td",{className:"pl-0 capitalize",align:"left"},t.estimation),c.a.createElement("td",{className:"pl-0 capitalize"},c.a.createElement("small",{className:Object(b.a)({"badge rounded-pill text-white px-8 py-2":!0,"bg-success":"projet d'amenagement"===t.alerte,"bg-warning":"1 client interesse"===t.alerte,"bg-danger":"prix revise a la baisse"===t.alerte||"augmentation des taxes"===t.alerte})},t.alerte.charAt(0).toUpperCase()+t.alerte.slice(1))),c.a.createElement("td",{className:"pl-0"},c.a.createElement("button",{type:"button",className:"btn btn-outline-primary mr-3",onClick:function(){return e.handeViewClick(t.id)}},"Details"),c.a.createElement("button",{type:"button",className:"btn btn-outline-danger",onClick:function(){f.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",type:"question",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",cancelButtonText:"No"}).then((function(a){a.value&&e.handleDeleteInvoice(t)}))}},"Supprimer")))}))))))}}]),a}(i.Component);t.default=Object(v.a)(E.withFirestore,Object(v.b)({componentDidMount:function(){this.props.firestore.get({collection:"demandeEvaluationProd"})}}),Object(g.b)((function(e){return{user:e.firestore.ordered.demandeEvaluationProd}})))(y)}}]);
//# sourceMappingURL=57.58625fc3.chunk.js.map
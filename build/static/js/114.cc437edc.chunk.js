(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[114],{2799:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),c=a(343),r=a(90),s=a(1315),m=a(433),i=a(124),o=a(26),d=a(93),u=a(101),p=a(31),E=(a(1642),a(94)),b=a(1864),g=(a(667),function(){var e=Object(l.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=(t[1],Object(l.useState)(!1)),r=Object(o.a)(c,2),s=r[0],m=(r[1],Object(l.useState)(null)),g=Object(o.a)(m,2),h=(g[0],g[1]);Object(p.c)();Object(u.useFirestoreConnect)("leads");var f=Object(p.d)((function(e){return e.firestore.ordered.leads})),N=function(e){switch(e){case"Accepted":return"badge-success";case"Rejected":return"badge-danger";case"pending":case"Replacement":return"badge-warning"}},x=function(e,t){E.a.firestore().collection("leads").doc(e).update({lead_status:t}).then((function(){console.log("updated")})).catch((function(e){console.log("something went wrong",e)}))};return n.a.createElement(i.h,{className:"h-100"},n.a.createElement("div",{className:"table-responsive h-100 position-relative"},n.a.createElement("table",{id:"user_table",className:"table table-hover table-striped table-gray-200"},n.a.createElement("thead",{className:"bg-primary text-white"},n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"#"),n.a.createElement("th",{scope:"col"},"Type"),n.a.createElement("th",{scope:"col"},"Owner"),n.a.createElement("th",{scope:"col"},"This property is"),n.a.createElement("th",{scope:"col"},"Project progress"),n.a.createElement("th",{scope:"col"},"Action"),n.a.createElement("th",{scope:"col"},"Status"))),void 0===f?n.a.createElement("div",{className:"position-absolute w-100 h-75 px-0 d-flex justify-content-center align-items-center"},n.a.createElement("div",{className:"spinner-bubble spinner-bubble-primary m-5"})):n.a.createElement("tbody",null,f.map((function(e,t){return n.a.createElement("tr",{key:t},n.a.createElement("th",{scope:"row"},t+1),n.a.createElement("td",null,e.lead_type),n.a.createElement("td",null,e.user_name),n.a.createElement("td",null),n.a.createElement("td",null),n.a.createElement("td",null,n.a.createElement(d.a,null,n.a.createElement("div",{className:"d-flex align-items-center"},"Accepted"===e.lead_status?null:n.a.createElement(d.a.Toggle,{className:a?"toggle-hidden border-0 p-0 bg-transparent text-success":s?"toggle-hidden border-0 p-0 bg-transparent text-danger":"toggle-hidden border-0 p-0 bg-transparent text-primary text-primary ml-3"},n.a.createElement(b.a,{size:16})),"Accepted"===e.lead_status?n.a.createElement("span",{className:"ml-2 badge badge-success p-1 ml-5"},e.lead_status):"Rejected"===e.lead_status?n.a.createElement("span",{className:"ml-2 badge badge-danger p-1"},e.lead_status):n.a.createElement("span",{className:"ml-2 text-white badge badge-warning p-1"},e.lead_status)),n.a.createElement(d.a.Menu,{className:"p-0"},n.a.createElement(d.a.Item,{className:"bg-danger text-white",eventKey:"2",onClick:function(){h("Rejected"),x(e.id,"Rejected")}},n.a.createElement("small",null,"Decline")),n.a.createElement(d.a.Item,{className:"bg-success text-white",eventKey:"1",onClick:function(){h("Accepted"),x(e.id,"Accepted")}},n.a.createElement("small",null,"Accept"))))),n.a.createElement("td",null,n.a.createElement("span",{className:"badge p-2 text-white ".concat(N(e.lead_status))},e.lead_status)))}))))))}),h=a(173),f=a(150),N=function(e){var t=e.userId,a=Object(l.useState)(null),c=Object(o.a)(a,2),r=c[0],s=c[1];Object(u.useFirestoreConnect)("estimated_properties");var m=Object(p.d)((function(e){return e.firestore.ordered.estimated_properties}));return console.log(t,m),Object(l.useEffect)((function(){if(void 0!==m){var e;e=m.filter((function(e){return e.userID===t})),s(e)}}),[m]),n.a.createElement(n.a.Fragment,null,null===r?n.a.createElement("div",{className:" d-flex justify-content-center align-items-center"},n.a.createElement("div",{className:"spinner-bubble spinner-bubble-primary m-5"})):0===r.length?n.a.createElement("h2",null,"No Lead Found"):r.map((function(e){return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 col-lg-6"},n.a.createElement("div",{className:"d-flex mb-2 "},n.a.createElement("span",{className:"text-primary font-weight-bold mr-2 text-capitalize"},"Date Creation"),n.a.createElement("span",null,e.dateCreation)),n.a.createElement("div",{className:"d-flex mb-2 "},n.a.createElement("span",{className:"text-primary font-weight-bold mr-2 text-capitalize"},"Municipality"),n.a.createElement("span",null,e.municipalite)),n.a.createElement("div",{className:"d-flex mb-2 "},n.a.createElement("span",{className:"text-primary font-weight-bold mr-2 text-capitalize"},"Address"),n.a.createElement("span",null,e.adresse)),n.a.createElement("div",{className:"d-flex mb-2 "},n.a.createElement("span",{className:"text-primary font-weight-bold mr-2 text-capitalize"},"Postal Code"),n.a.createElement("span",null,e.PostalCode)),n.a.createElement("div",{className:"d-flex mb-2 "},n.a.createElement("span",{className:"text-primary font-weight-bold mr-2 text-capitalize"},"Land Area"),n.a.createElement("span",null,e.superficieTerrain)),n.a.createElement("div",{className:"d-flex mb-2 "},n.a.createElement("span",{className:"text-primary font-weight-bold mr-2 text-capitalize"},"Category"),n.a.createElement("span",null,e.categorie)),n.a.createElement("div",{className:"d-flex mb-2 "},n.a.createElement("span",{className:"text-primary font-weight-bold mr-2 text-capitalize"},"Bedrooms"),n.a.createElement("span",null,e.chambres)),n.a.createElement("div",{className:"d-flex mb-2 "},n.a.createElement("span",{className:"text-primary font-weight-bold mr-2 text-capitalize"},"Baths"),n.a.createElement("span",null,e.bains))),n.a.createElement("div",{className:"col-12 col-lg-6"},n.a.createElement("div",{className:"d-flex mb-2 "},n.a.createElement("span",{className:"text-primary font-weight-bold mr-2 text-capitalize"},"Construction Year"),n.a.createElement("span",null,e.anneeConstruction)),n.a.createElement("div",{className:"d-flex mb-2 "},n.a.createElement("span",{className:"text-primary font-weight-bold mr-2 text-capitalize"},"Building Type"),n.a.createElement("span",null,e.typeBatiment)),n.a.createElement("div",{className:"d-flex mb-2 "},n.a.createElement("span",{className:"text-primary font-weight-bold mr-2 text-capitalize"},"Genre Properties"),n.a.createElement("span",null,e.genreProprietes)),n.a.createElement("div",{className:"d-flex mb-2 "},n.a.createElement("span",{className:"text-primary font-weight-bold mr-2 text-capitalize"},"Parking"),n.a.createElement("span",null,0===e.stationnement?"yes":"no")),n.a.createElement("div",{className:"d-flex mb-2 "},n.a.createElement("span",{className:"text-primary font-weight-bold mr-2 text-capitalize"},"Ziaway Estimation"),n.a.createElement("span",null,e.ZiaEstimation)),n.a.createElement("div",{className:"d-flex mb-2 "},n.a.createElement("span",{className:"text-primary font-weight-bold mr-2 text-capitalize"},"Customer Review"),n.a.createElement("span",null,e.avisClient))))})))},x=a(1365),v=function(){var e=Object(l.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(l.useState)(null),s=Object(o.a)(r,2),m=(s[0],s[1],Object(l.useState)(null)),d=Object(o.a)(m,2),E=d[0],b=d[1];Object(p.c)();Object(u.useFirestoreConnect)("leads");var g=Object(p.d)((function(e){return e.firestore.ordered.leads}));console.log(g);var v=function(e){switch(e){case"Accepted":return"badge-success";case"Rejected":return"badge-danger";case"pending":return"badge-warning"}};return n.a.createElement(n.a.Fragment,null,n.a.createElement(h.a,{show:a,onHide:function(){return c(!1)},centered:!0,size:"lg",scrollable:!0},n.a.createElement(h.a.Header,{closeButton:!0},n.a.createElement(h.a.Title,null,"Lead View")),n.a.createElement(h.a.Body,null,n.a.createElement(N,{userId:E}))),n.a.createElement(i.h,{className:"h-100"},n.a.createElement("div",{className:"table-responsive h-100 position-relative"},n.a.createElement("table",{id:"user_table",className:"table table-hover table-striped table-gray-200"},n.a.createElement("thead",{className:"bg-primary text-white"},n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"#"),n.a.createElement("th",{scope:"col"},"Type"),n.a.createElement("th",{scope:"col"},"Owner"),n.a.createElement("th",{scope:"col"},"This property is"),n.a.createElement("th",{scope:"col"},"Project progress"),n.a.createElement("th",{scope:"col",className:"text-center"},"View"),n.a.createElement("th",{scope:"col"},"Status"))),void 0===g?n.a.createElement("div",{className:"position-absolute w-100 h-75 px-0 d-flex justify-content-center align-items-center"},n.a.createElement("div",{className:"spinner-bubble spinner-bubble-primary m-5"})):n.a.createElement("tbody",null,g.filter((function(e){return"Accepted"===e.lead_status})).map((function(e,t){return n.a.createElement("tr",{key:t},n.a.createElement("th",{scope:"row"},t+1),n.a.createElement("td",null,e.lead_type),n.a.createElement("td",null,e.user_name),n.a.createElement("td",null),n.a.createElement("td",null),n.a.createElement("td",{className:"text-center"},n.a.createElement(f.a,{variant:"icon",onClick:function(){c(!0),b(e.userID)}},n.a.createElement(x.e,{size:16,className:"text-primary"}))),n.a.createElement("td",null,n.a.createElement("span",{className:"badge p-2 text-white ".concat(v(e.lead_status))},e.lead_status)))})))))))},y=function(){var e=Object(l.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=(t[1],Object(l.useState)(!1)),r=Object(o.a)(c,2),s=r[0],m=(r[1],Object(l.useState)(null)),g=Object(o.a)(m,2),h=(g[0],g[1]);Object(p.c)();Object(u.useFirestoreConnect)("leads");var f=Object(p.d)((function(e){return e.firestore.ordered.leads})),N=function(e){switch(e){case"Accepted":return"badge-success";case"Rejected":return"badge-danger";case"Replacement":return"badge-warning"}};return n.a.createElement(i.h,{className:"h-100"},n.a.createElement("div",{className:"table-responsive h-100 position-relative"},n.a.createElement("table",{id:"user_table",className:"table table-hover table-striped table-gray-200"},n.a.createElement("thead",{className:"bg-primary text-white"},n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"#"),n.a.createElement("th",{scope:"col"},"Type"),n.a.createElement("th",{scope:"col"},"Owner"),n.a.createElement("th",{scope:"col"},"This property is"),n.a.createElement("th",{scope:"col"},"Project progress"),n.a.createElement("th",{scope:"col"},"Action"),n.a.createElement("th",{scope:"col"},"Status"))),void 0===f?n.a.createElement("div",{className:"position-absolute w-100 h-75 px-0 d-flex justify-content-center align-items-center"},n.a.createElement("div",{className:"spinner-bubble spinner-bubble-primary m-5"})):n.a.createElement("tbody",null,f.filter((function(e){return"Accepted"===e.lead_status||"Replacement"===e.lead_status})).map((function(e,t){return n.a.createElement("tr",{key:t},n.a.createElement("th",{scope:"row"},t+1),n.a.createElement("td",null,e.lead_type),n.a.createElement("td",null,e.user_name),n.a.createElement("td",null),n.a.createElement("td",null),n.a.createElement("td",null,n.a.createElement(d.a,null,n.a.createElement("div",{className:"d-flex align-items-center"},n.a.createElement(d.a.Toggle,{className:a?"toggle-hidden border-0 p-0 bg-transparent text-success":s?"toggle-hidden border-0 p-0 bg-transparent text-danger":"toggle-hidden border-0 p-0 bg-transparent text-primary text-primary ml-3"},n.a.createElement(b.a,{size:16})),"Accepted"===e.lead_status?n.a.createElement("span",{className:"ml-2 badge badge-success p-1"},e.lead_status):"Rejected"===e.lead_status?n.a.createElement("span",{className:"ml-2 badge badge-danger p-1"},e.lead_status):n.a.createElement("span",{className:"ml-2 badge text-white badge-warning p-1"},e.lead_status)),n.a.createElement(d.a.Menu,{className:"p-0"},n.a.createElement(d.a.Item,{className:"bg-warning text-white",eventKey:"2",onClick:function(){var t,a;h("Replacement"),t=e.id,a="Replacement",E.a.firestore().collection("leads").doc(t).update({lead_status:a}).then((function(){console.log("updated")})).catch((function(e){console.log("something went wrong",e)}))}},n.a.createElement("small",null,"Replace Lead"))))),n.a.createElement("td",null,n.a.createElement("span",{className:"badge p-2 text-white ".concat(N(e.lead_status))},e.lead_status)))}))))))};t.default=function(){return n.a.createElement("section",{className:"mx-1 mx-lg-2 vh-100 "},n.a.createElement("div",{className:"mb-4 main-height"},n.a.createElement(c.a,{className:"mx-0 h-100"},n.a.createElement(r.a,{xs:12,className:"mb-4 h-100"},n.a.createElement(i.h,{className:"h-100"},n.a.createElement(s.a.Container,{id:"left-tabs-example",defaultActiveKey:"first"},n.a.createElement("div",{className:"row h-100"},n.a.createElement("div",{className:"col-md-3 col-lg-2"},n.a.createElement(m.a,{variant:"pills-2",className:"d-flex flex-column"},n.a.createElement(m.a.Item,null,n.a.createElement(m.a.Link,{eventKey:"first"},"Leads")),n.a.createElement(m.a.Item,null,n.a.createElement(m.a.Link,{eventKey:"two"},"Accepted Leads")),n.a.createElement(m.a.Item,null,n.a.createElement(m.a.Link,{eventKey:"three"},"Leads Replacement")))),n.a.createElement("div",{className:"h-100 scroll-box col card p-0 mx-3"},n.a.createElement(s.a.Content,{className:"p-0 h-100"},n.a.createElement(s.a.Pane,{className:"h-100",eventKey:"first"},n.a.createElement(g,null)),n.a.createElement(s.a.Pane,{className:"h-100",eventKey:"two"},n.a.createElement(v,null)),n.a.createElement(s.a.Pane,{className:"h-100",eventKey:"three"},n.a.createElement(y,null)))))))))))}}}]);
//# sourceMappingURL=114.cc437edc.chunk.js.map
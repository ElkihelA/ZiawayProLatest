(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[128],{2792:function(e,t,a){"use strict";a.r(t);var n=a(42),r=a(52),c=a(57),l=a(58),o=a(0),s=a.n(o),i=a(123),u=a(6),d=a(8),m=a(38);var b=function(e,t){var a=Object(o.useRef)(!0);Object(o.useEffect)((function(){if(!a.current)return e();a.current=!1}),t)},v=a(547),f=a(546),p=a(7),h=a.n(p),E=a(112),N=a(3),O=a.n(N),y=a(69),j=a(54),g=Object(j.a)("carousel-caption"),w=a(16),x=s.a.forwardRef((function(e,t){var a=e.as,n=void 0===a?"div":a,r=e.bsPrefix,c=e.children,l=e.className,o=Object(d.a)(e,["as","bsPrefix","children","className"]),i=h()(l,Object(w.a)(r,"carousel-item"));return s.a.createElement(n,Object(u.a)({ref:t},o,{className:i}),c)}));x.displayName="CarouselItem";var k=x,C=a(257),I=a(127),S=a(301),L=a(300),T={bsPrefix:O.a.string,as:O.a.elementType,slide:O.a.bool,fade:O.a.bool,controls:O.a.bool,indicators:O.a.bool,activeIndex:O.a.number,onSelect:O.a.func,onSlide:O.a.func,onSlid:O.a.func,interval:O.a.number,keyboard:O.a.bool,pause:O.a.oneOf(["hover",!1]),wrap:O.a.bool,touch:O.a.bool,prevIcon:O.a.node,prevLabel:O.a.string,nextIcon:O.a.node,nextLabel:O.a.string},M={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:s.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:s.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};function A(e,t){var a=Object(y.a)(e,{activeIndex:"onSelect"}),n=a.as,r=void 0===n?"div":n,c=a.bsPrefix,l=a.slide,i=a.fade,p=a.controls,N=a.indicators,O=a.activeIndex,j=a.onSelect,g=a.onSlide,x=a.onSlid,k=a.interval,T=a.keyboard,M=a.onKeyDown,A=a.pause,R=a.onMouseOver,P=a.onMouseOut,F=a.wrap,D=a.touch,K=a.onTouchStart,W=a.onTouchMove,H=a.onTouchEnd,J=a.prevIcon,U=a.prevLabel,X=a.nextIcon,B=a.nextLabel,q=a.className,z=a.children,G=Object(d.a)(a,["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"]),Q=Object(w.a)(c,"carousel"),V=Object(o.useRef)(null),Y=Object(o.useState)("next"),Z=Y[0],$=Y[1],_=Object(o.useState)(!1),ee=_[0],te=_[1],ae=Object(o.useState)(!1),ne=ae[0],re=ae[1],ce=Object(o.useState)(O||0),le=ce[0],oe=ce[1];ne||O===le||(V.current?$(V.current):$((O||0)>le?"next":"prev"),l&&re(!0),oe(O||0)),Object(o.useEffect)((function(){V.current&&(V.current=null)}));var se,ie=0;Object(C.a)(z,(function(e,t){++ie,t===O&&(se=e.props.interval)}));var ue=Object(v.a)(se),de=Object(o.useCallback)((function(e){if(!ne){var t=le-1;if(t<0){if(!F)return;t=ie-1}V.current="prev",j&&j(t,e)}}),[ne,le,j,F,ie]),me=Object(m.a)((function(e){if(!ne){var t=le+1;if(t>=ie){if(!F)return;t=0}V.current="next",j&&j(t,e)}})),be=Object(o.useRef)();Object(o.useImperativeHandle)(t,(function(){return{element:be.current,prev:de,next:me}}));var ve=Object(m.a)((function(){!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(be.current)&&me()})),fe="next"===Z?"left":"right";b((function(){l||(g&&g(le,fe),x&&x(le,fe))}),[le]);var pe=Q+"-item-"+Z,he=Q+"-item-"+fe,Ee=Object(o.useCallback)((function(e){Object(L.a)(e),g&&g(le,fe)}),[g,le,fe]),Ne=Object(o.useCallback)((function(){re(!1),x&&x(le,fe)}),[x,le,fe]),Oe=Object(o.useCallback)((function(e){if(T&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void de(e);case"ArrowRight":return e.preventDefault(),void me(e)}M&&M(e)}),[T,M,de,me]),ye=Object(o.useCallback)((function(e){"hover"===A&&te(!0),R&&R(e)}),[A,R]),je=Object(o.useCallback)((function(e){te(!1),P&&P(e)}),[P]),ge=Object(o.useRef)(0),we=Object(o.useRef)(0),xe=Object(f.a)(),ke=Object(o.useCallback)((function(e){ge.current=e.touches[0].clientX,we.current=0,"hover"===A&&te(!0),K&&K(e)}),[A,K]),Ce=Object(o.useCallback)((function(e){e.touches&&e.touches.length>1?we.current=0:we.current=e.touches[0].clientX-ge.current,W&&W(e)}),[W]),Ie=Object(o.useCallback)((function(e){if(D){var t=we.current;Math.abs(t)>40&&(t>0?de(e):me(e))}"hover"===A&&xe.set((function(){te(!1)}),k||void 0),H&&H(e)}),[D,A,de,me,xe,k,H]),Se=null!=k&&!ee&&!ne,Le=Object(o.useRef)();Object(o.useEffect)((function(){var e,t;if(Se)return Le.current=window.setInterval(document.visibilityState?ve:me,null!=(e=null!=(t=ue.current)?t:k)?e:void 0),function(){null!==Le.current&&clearInterval(Le.current)}}),[Se,me,ue,k,ve]);var Te=Object(o.useMemo)((function(){return N&&Array.from({length:ie},(function(e,t){return function(e){j&&j(t,e)}}))}),[N,ie,j]);return s.a.createElement(r,Object(u.a)({ref:be},G,{onKeyDown:Oe,onMouseOver:ye,onMouseOut:je,onTouchStart:ke,onTouchMove:Ce,onTouchEnd:Ie,className:h()(q,Q,l&&"slide",i&&Q+"-fade")}),N&&s.a.createElement("ol",{className:Q+"-indicators"},Object(C.b)(z,(function(e,t){return s.a.createElement("li",{key:t,className:t===le?"active":void 0,onClick:Te?Te[t]:void 0})}))),s.a.createElement("div",{className:Q+"-inner"},Object(C.b)(z,(function(e,t){var a=t===le;return l?s.a.createElement(E.e,{in:a,onEnter:a?Ee:void 0,onEntered:a?Ne:void 0,addEndListener:S.a},(function(t){return s.a.cloneElement(e,{className:h()(e.props.className,a&&"entered"!==t&&pe,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&he)})})):s.a.cloneElement(e,{className:h()(e.props.className,a&&"active")})}))),p&&s.a.createElement(s.a.Fragment,null,(F||0!==O)&&s.a.createElement(I.a,{className:Q+"-control-prev",onClick:de},J,U&&s.a.createElement("span",{className:"sr-only"},U)),(F||O!==ie-1)&&s.a.createElement(I.a,{className:Q+"-control-next",onClick:me},X,B&&s.a.createElement("span",{className:"sr-only"},B))))}var R=s.a.forwardRef(A);R.displayName="Carousel",R.propTypes=T,R.defaultProps=M,R.Caption=g,R.Item=k;var P=R,F=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={carouselImageList:["/assets/images/products/iphone-1.jpg","/assets/images/products/headphone-1.jpg","/assets/images/products/iphone-1.jpg"]},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state.carouselImageList;return s.a.createElement("div",null,s.a.createElement(i.a,{routeSegments:[{name:"UI Kits",path:"/uikits"},{name:"Carousel"}]}),s.a.createElement("div",{className:"mb-3"},s.a.createElement("div",{className:"row mb-4"},s.a.createElement("div",{className:"col-md-6"},s.a.createElement("p",null,"use a large block of connected links for our pagination, making links hard to miss and easily scalable\u2014all while providing large hit areas. Pagination is built with list HTML elements so screen readers can announce the number of available links. Use a wrapping",s.a.createElement("code",null,"nav")," element to identify it as a navigation section to screen readers and other assistive technologies."))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6 mb-4"},s.a.createElement("div",{className:"card text-left"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h4",{className:"card-title mb-3"},"Basic Carousel With Control"),s.a.createElement("p",null,"can also add the indicators to the carousel, alongside the controls, too"),s.a.createElement(P,{indicators:!1},e.map((function(e,t){return s.a.createElement(P.Item,{key:t},s.a.createElement("img",{className:"d-block w-100",src:e,alt:"First slide"}))})))))),s.a.createElement("div",{className:"col-md-6 mb-4"},s.a.createElement("div",{className:"card text-left"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h4",{className:"card-title mb-3"},"Carousel With Indicators"),s.a.createElement("p",null,"Adding in the previous and next controls"),s.a.createElement(P,null,e.map((function(e,t){return s.a.createElement(P.Item,{key:t},s.a.createElement("img",{className:"d-block w-100",src:e,alt:"First slide"}))}))))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6 mb-4"},s.a.createElement("div",{className:"card text-left"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h4",{className:"card-title mb-3"}," Carousel With Caption"),s.a.createElement("p",null,"Add captions to your slides easily with the",s.a.createElement("code",null,"<Carousel.Caption>")," element within any",s.a.createElement("code",null,"<Carousel.Item>")," . They can be easily hidden on smaller viewports, as shown below, with optional display utilities."),s.a.createElement(P,{indicators:!1},e.map((function(e,t){return s.a.createElement(P.Item,{key:t},s.a.createElement("img",{className:"d-block w-100",src:e,alt:"First slide"}),s.a.createElement(P.Caption,null,s.a.createElement("h5",{className:"text-white"},"Add captions to your slides easily"),s.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit.")))})))))),s.a.createElement("div",{className:"col-md-6 mb-4"},s.a.createElement("div",{className:"card text-left"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h4",{className:"card-title mb-3"},"Carousel With CrossFade"),s.a.createElement("p",null,"Add ",s.a.createElement("code",null,"fade={true}")," to your carousel component to animate slides with a fade transition instead of a slide."),s.a.createElement(P,{fade:!0},e.map((function(e,t){return s.a.createElement(P.Item,{key:t},s.a.createElement("img",{className:"d-block w-100",src:e,alt:"First slide"}),s.a.createElement(P.Caption,null,s.a.createElement("h5",{className:"text-white"},"Add captions to your slides easily"),s.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit.")))})))))))))}}]),a}(o.Component);t.default=F}}]);
//# sourceMappingURL=128.55747b59.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,a){e.exports=a(272)},272:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),i=a.n(o),c=a(113),s=a.n(c),l=a(38),m=a(66),u=a.n(m),p=a(112),h=a.n(p),d=a(67),g=a.n(d),E=a(39),f=a(53),v=a(101),j=a(31),b=a(32),y=a(34),x=a(33),k=a(35),C=a(19),T=a(276),O=a(273),w=a(277),M=a(274),S=a(275),D=a(108),P=a.n(D),L=a(109),F=a.n(L),I=a(16),N=a.n(I),B=a(70),Y=a.n(B),G=a(49),R=a.n(G),W=a(111),J=a.n(W),V=a(5),_=a.n(V),q=a(24),z=a(110),A=a.n(z),H=a(14),K=a.n(H),Q=a(23),U=a.n(Q),X=a(68),Z=a.n(X),$=a(102),ee=a.n($),te=a(105),ae=a.n(te),ne=a(104),re=a.n(ne),oe=function(e){var t=e.project,a=e.icon;return r.a.createElement("li",null,r.a.createElement(ee.a,{button:!0,component:O.a,to:{pathname:"/".concat(t.code),state:{project:t}}},a&&r.a.createElement(re.a,null,r.a.createElement(N.a,{variant:"h4"},r.a.createElement(q.a,{icon:a}))),r.a.createElement(ae.a,null,r.a.createElement(N.a,{variant:"h4",noWrap:!0},t.name))))};function ie(e,t){fetch(t).then(function(e){return e.json()}).then(function(t){e(t)})}var ce=function(e){function t(e){var a;return Object(j.a)(this,t),(a=Object(y.a)(this,Object(x.a)(t).call(this,e))).state={projects:[]},a}return Object(k.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.fetchProjects(function(t){e.setState({projects:t})})}},{key:"fetchProjects",value:function(e){ie(e,"https://raw.githubusercontent.com/sixelasacul/lithoprojets/master/data/projects.json")}},{key:"prepareProjects",value:function(e,t,a){return e.filter(function(e){return(t||e.displayed)&&(a||!e.isEasterEgg)}).sort(function(e,t){return e.name.toLowerCase()<t.name.toLowerCase()?-1:e.name.toLowerCase()>t.name.toLowerCase()?1:0})}},{key:"render",value:function(){var e=this.props,t=e.displayNSFWProjects,a=e.displayEasterEggs,n=this.prepareProjects(this.state.projects,t,a);return r.a.createElement(K.a,{container:!0,justify:"center",direction:"column",alignItems:"center"},r.a.createElement(K.a,{item:!0},r.a.createElement(N.a,{variant:"h1",gutterBottom:!0},"Lithoprojets")),r.a.createElement(K.a,{item:!0},n&&n.length>0&&r.a.createElement(U.a,null,r.a.createElement(Z.a,null,n.map(function(e){return r.a.createElement(oe,{project:e,icon:"cross",key:e.code})})))))}}]),t}(n.Component);ce.defaultProps={displayNSFWProjects:!1,displayEasterEggs:!1};var se=ce,le=a(106),me=a.n(le),ue=a(107),pe=a.n(ue),he=a(278),de=a(69),ge=a.n(de);var Ee=function(e){function t(e){var a;Object(j.a)(this,t);var n=(a=Object(y.a)(this,Object(x.a)(t).call(this,e))).props.location.state&&a.props.location.state.project;document.title=n?n.name:document.title;var o=a.props.location.hash&&a.props.location.hash.substring(1)||0;return a.state={project:n,exists:!0,value:parseInt(o),error:!1},a.shareLink="",a.hiddenInput=r.a.createRef(),a.handleSliderDragged=a.handleSliderDragged.bind(Object(C.a)(Object(C.a)(a))),a.handleTextFieldChanged=a.handleTextFieldChanged.bind(Object(C.a)(Object(C.a)(a))),a.copyToClipboard=a.copyToClipboard.bind(Object(C.a)(Object(C.a)(a))),a}return Object(k.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.state.project||this.fetchProject(this.props.location.pathname.substring(1),function(t,a){t?e.setState({exists:!1}):(console.log(a),e.setState({project:a},function(){document.title=e.state.project.name}))})}},{key:"fetchProject",value:function(e,t){!function(e,t,a){ie(function(a){a.some(function(a){return a.code===e?(t(void 0,a),!0):(t("Nothing found with this code: "+e),!1)})},a)}(e,t,"https://raw.githubusercontent.com/sixelasacul/lithoprojets/master/data/projects.json")}},{key:"removeEnd",value:function(e,t){return e.substring(0,e.length-t.length)}},{key:"copyToClipboard",value:function(){var e=this,t=this.props.location.hash,a=window.location.href,n=this.removeEnd(a,t);this.shareLink=n+"#"+this.state.value,navigator.clipboard.writeText(this.shareLink).then(function(){console.log("Copi\xe9: ",e.shareLink)}).catch(function(t){console.log("Impossible d'\xe9crire dans le presse-papier: ",t),e.props.history.push(e.shareLink)})}},{key:"changeDateFormat",value:function(e){return function(e,t,a){return ge.a.locale("fr"),ge()(e,t).format(a)}(e,"DD/MM/YYYY","MMMM YYYY")}},{key:"handleSliderDragged",value:function(e,t){this.setState({value:t})}},{key:"handleTextFieldChanged",value:function(e){var t=parseInt(e.target.value);t<this.state.project.steps.length&&t>=0?this.setState({value:parseInt(e.target.value),error:!1}):this.setState({error:!0})}},{key:"render",value:function(){var e=this.state,t=e.project,a=e.value,n=e.error,o=e.shareLink,i=this.props.classes;return r.a.createElement("div",null,t&&r.a.createElement(K.a,{container:!0,justify:"center",alignItems:"center",direction:"column"},r.a.createElement(K.a,{item:!0,xs:6},r.a.createElement(N.a,{variant:"h1",gutterBottom:!0},t.name)),r.a.createElement(K.a,{item:!0,xs:6},r.a.createElement(U.a,{className:i.paper},r.a.createElement(N.a,{variant:"subtitle2",align:"left"},"Description"),r.a.createElement(N.a,{variant:"h6",align:"right"},t.description),r.a.createElement(N.a,{variant:"subtitle2",align:"left"},"Contributeurs"),r.a.createElement(N.a,{variant:"h6",align:"right"},t.contributors.sort().join(", "))),r.a.createElement(U.a,{className:i.paper},r.a.createElement(K.a,{container:!0,direction:"column",spacing:16},r.a.createElement(K.a,{item:!0},r.a.createElement(K.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(me.a,{label:"\xc9tape",value:a,error:n,onChange:this.handleTextFieldChanged,type:"number",inputProps:{min:0,max:t.steps.length-1,step:1},variant:"standard"}))),r.a.createElement(K.a,{item:!0},r.a.createElement(K.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(R.a,{color:"primary",variant:"contained",onClick:this.copyToClipboard},r.a.createElement(q.a,{icon:"share-alt",className:i.iconButton}),"Partager"))),r.a.createElement(K.a,{item:!0},r.a.createElement(pe.a,{color:"secondary",min:0,max:t.steps.length-1,step:1,classes:{root:i.sliderRoot,container:i.sliderContainer,track:i.sliderTrack},value:a,onChange:this.handleSliderDragged,thumb:r.a.createElement(q.a,{icon:"ghost"})})),r.a.createElement(K.a,{item:!0},r.a.createElement(K.a,{container:!0,directon:"row",justify:"space-around",alignItems:"flex-start"},r.a.createElement(K.a,{item:!0,xs:!0},r.a.createElement(N.a,{align:"left",variant:"body2"},this.changeDateFormat(t.startDate))),r.a.createElement(K.a,{item:!0,xs:!0},r.a.createElement(N.a,{align:"center",variant:"body1"},t.steps[a])),r.a.createElement(K.a,{item:!0,xs:!0},r.a.createElement(N.a,{align:"right",variant:"body2"},this.changeDateFormat(t.endDate)))))))),r.a.createElement("input",{ref:this.hiddenInput,id:"share",value:o,onChange:function(){},hidden:!0})),!t&&!this.state.exists&&r.a.createElement("p",null,"Pas trouv\xe9"),!t&&this.state.exists&&r.a.createElement("p",null,"Wait for it"))}}]),t}(n.Component),fe=Object(he.a)(_()(function(e){return{textField:{color:e.palette.primary.main},sliderRoot:{padding:"22px 0px"},sliderContainer:{color:e.palette.secondary.main},sliderTrack:{backgroundColor:e.palette.primary.main},paper:{margin:"40px 0px",padding:"25px"},iconButton:{marginRight:e.spacing.unit}}})(Ee)),ve=function(e){function t(e){var a;return Object(j.a)(this,t),(a=Object(y.a)(this,Object(x.a)(t).call(this,e))).state={countTomamanCoste:20,countToGodMode:5},a.decrementToEasterEggs=a.decrementToEasterEggs.bind(Object(C.a)(Object(C.a)(a))),a}return Object(k.a)(t,e),Object(b.a)(t,[{key:"decrementToEasterEggs",value:function(){if(this.state.countToGodMode>0){var e=this.state.countToGodMode;this.setState({countToGodMode:e-1})}if(this.state.countTomamanCoste>0){var t=this.state.countTomamanCoste;this.setState({countTomamanCoste:t-1})}}},{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.countToGodMode,n=t.countTomamanCoste,o=0===a,i=0===n;return r.a.createElement("div",null,r.a.createElement(T.a,{basename:"/"},r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,{position:"static",color:"secondary",classes:{root:e.appBar}},r.a.createElement(F.a,null,r.a.createElement(Y.a,{component:O.a,to:"/",replace:!0},r.a.createElement(A.a,null)),r.a.createElement(N.a,{variant:"h6",className:e.grow},"Lithoprojets"),r.a.createElement(R.a,{onClick:this.decrementToEasterEggs},r.a.createElement(J.a,null)),r.a.createElement(Y.a,{href:"https://github.com/sixelasacul/lithoprojets",target:"_blank"},r.a.createElement(q.a,{icon:{prefix:"fab",iconName:"github"}})))),r.a.createElement(w.a,null,r.a.createElement(M.a,{path:"/:id",component:fe}),r.a.createElement(M.a,{path:"/",render:function(e){return r.a.createElement(se,Object.assign({},e,{displayNSFWProjects:o,displayEasterEggs:i}))}}),r.a.createElement(S.a,{to:"/"})))))}}]),t}(n.Component),je=_()({appBar:{marginBottom:"20px"},root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(ve),be=Object(l.createMuiTheme)({typography:{useNextVariants:!0},palette:{primary:{main:h.a[900]},secondary:{main:u.a[900]},error:{main:g.a[900]},type:"dark"}});E.b.add(f.b,f.a,v.a,f.c),i.a.render(r.a.createElement(l.MuiThemeProvider,{theme:be},r.a.createElement(s.a,null),r.a.createElement(je,null)),document.getElementById("root"))}},[[114,2,1]]]);
//# sourceMappingURL=main.94b157c0.chunk.js.map
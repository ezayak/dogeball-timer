(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(42)},36:function(e,t,a){},38:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),s=a(25),l=a.n(s),r=(a(36),a(38),function(){return c.a.createElement("footer",{className:"page-footer yellow lighten-1"},c.a.createElement("div",{className:"footer-copyright"},c.a.createElement("div",{className:"container"},"\xa9",(new Date).getFullYear())))}),i=function(){return c.a.createElement("nav",{className:"blue darken-4"},c.a.createElement("div",{className:"nav-wrapper"},c.a.createElement("a",{href:"#!",className:"brand-logo",style:{paddingLeft:"1rem"}},c.a.createElement("h5",null,"Dogeball timer")),c.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"})))},m=a(0),o=a.n(m),u=a(4),d=a(19),h=a(12),f=a(10),b=function(e){var t=e.team1,a=e.team2,n=e.time,s=e.editMatch,l=e.deleteMatch,r=e.startMatch,i=e.id,m=e.status,o=e.score1,u=e.score2,d=e.profile,h=e.referee,f=e.court,b=e.showCourt,E=e.showReferee;return c.a.createElement("tr",null,b&&c.a.createElement("td",null,f),E&&c.a.createElement("td",null,h),c.a.createElement("td",null,t," X ",a),c.a.createElement("td",null,n),c.a.createElement("td",null,"pending"===m?c.a.createElement(c.a.Fragment,null,"admin"===d&&c.a.createElement(c.a.Fragment,null,c.a.createElement("i",{className:"material-icons icon-button",onClick:function(){s(i)}},"create"),c.a.createElement("i",{className:"material-icons icon-button",onClick:function(){l(i)}},"delete")),c.a.createElement("i",{className:"material-icons icon-button",onClick:function(){r(i)}},"av_timer")):c.a.createElement("span",{style:{display:"flex"}},"complete"===m?c.a.createElement(c.a.Fragment,null,c.a.createElement("h6",{className:"score-text score-text-complete"},o," X ",u)):c.a.createElement(c.a.Fragment,null,c.a.createElement("h6",{className:"score-text"},o," X ",u),c.a.createElement("span",{style:{background:"#0cf50c",borderRadius:"0.5rem",padding:"0.5rem"}},m)))))},E=function(){return c.a.createElement("div",{className:"progress"},c.a.createElement("div",{className:"indeterminate"}))},p=function(e){var t=e.loading,a=e.info,n=e.editMatch,s=e.deleteMatch,l=e.startMatch,r=e.profile,i=e.showReferee,m=e.showCourt;return a.length||0===a.length?0===a.length?c.a.createElement("h6",null,"No records"):c.a.createElement(c.a.Fragment,null,t?c.a.createElement(E,null):c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",null,m&&c.a.createElement("th",null,"Court"),i&&c.a.createElement("th",null,"Referee"),c.a.createElement("th",null,"Teams"),c.a.createElement("th",null,"Time"),c.a.createElement("th",null))),c.a.createElement("tbody",null,a.map(function(e){return c.a.createElement(b,Object.assign({key:e.id},e,{editMatch:n,deleteMatch:s,startMatch:l,profile:r,showReferee:i,showCourt:m}))})))):c.a.createElement(E,null)},v=a(26),g=a(11),N=Object(v.a)({apiKey:"AIzaSyAqdyjDwv5EdNhLpRvY-31AGrC88aoKgB4",authDomain:"dodgeball-6b19c.firebaseapp.com",databaseUrl:"https://dodgeball-6b19c.firebaseio.com",projectId:"dodgeball-6b19c",storageBucket:"dodgeball-6b19c.appspot.com",messagingSenderID:"474832586333",appId:"1:474832586333:web:c2d43c1d1dee68e61b6fb4"}),O=Object(g.f)(N),S=function(e){var t=e.toDate(),a="0"+t.getHours(),n="0"+t.getMinutes();return a.substring(a.length-2)+":"+n.substring(n.length-2)},w=function(){return(new Date).toISOString().slice(0,10)},j=function(e){var t=e.label,a=e.value,s=e.onChange,l=Object(n.useState)(a),r=Object(f.a)(l,2),i=r[0],m=r[1];return c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{type:"date",placeholder:t,id:"date_input",value:i,onChange:function(e){m(e.target.value),s(e.target.value)}}),c.a.createElement("label",{htmlFor:"date_input"},t))},C=a(8),T=a(1),y=a(3),M=a(7),k=a(5),I=a(6),x=function(e){function t(e){var a;return Object(T.a)(this,t),(a=Object(M.a)(this,Object(k.a)(t).call(this,e))).handleAddButton=function(){a.state.addMatch({court:a.state.court,date:a.state.date,time:a.state.time,team1:a.state.team1,team2:a.state.team2,referee:a.state.referee,id:a.state.id}),a.state.changeVisibility()},a.handleOnChange=function(e){a.setState(Object(C.a)({},e.target.id,e.target.value))},a.state={id:e.id,court:e.court,date:e.date,time:e.time,team1:e.team1,team2:e.team2,referee:e.referee,changeVisibility:e.changeVisibility,addMatch:e.addMatch},a}return Object(I.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.state,t=e.changeVisibility,a=e.court,n=e.date,s=e.time,l=e.team1,r=e.team2,i=e.referee;return c.a.createElement("div",{className:"new-match"},c.a.createElement("ul",{className:"collection"},c.a.createElement("li",{className:"collection-item active  blue accent-1 black-text"},"New Match ",c.a.createElement("span",{className:"right",style:{cursor:"pointer"},onClick:t},c.a.createElement("i",{className:"material-icons"},"close")," ")),c.a.createElement("li",{className:"collection-item"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field col s12 m6"},c.a.createElement("input",{placeholder:"Court",id:"court",type:"text",className:"validate",value:a,onChange:this.handleOnChange})),c.a.createElement("div",{className:"input-field col m3 s12"},c.a.createElement("input",{placeholder:"Date",id:"date",type:"date",className:"validate",value:n,onChange:this.handleOnChange})),c.a.createElement("div",{className:"input-field col m3 s12"},c.a.createElement("input",{placeholder:"Time",id:"time",type:"time",className:"validate",value:s,onChange:this.handleOnChange}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field col s12"},c.a.createElement("input",{placeholder:"Referee",id:"referee",type:"text",className:"validate",value:i,onChange:this.handleOnChange}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field col s12"},c.a.createElement("input",{placeholder:"Team 1",id:"team1",type:"text",className:"validate",value:l,onChange:this.handleOnChange}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field col s12"},c.a.createElement("input",{placeholder:"Team 2",id:"team2",type:"text",className:"validate",value:r,onChange:this.handleOnChange})))),c.a.createElement("li",{className:"collection-item"},c.a.createElement("button",{className:"waves-effect waves-teal btn-flat",style:{display:"block",width:"100%"},onClick:this.handleAddButton},"Save"))))}}]),t}(c.a.Component),D=function(e){function t(e){var a;return Object(T.a)(this,t),(a=Object(M.a)(this,Object(k.a)(t).call(this,e))).formatTime=function(e){return e=e<10?"0"+e:e},a.stopTimer=function(){clearInterval(a.timerId),a.setState({timerIsOn:!1}),a.state.onChangeStatus(!1,a.props.id,a.state.minutes,a.state.seconds)},a.startTimer=function(){a.setState({timerIsOn:!0}),a.props.onChangeStatus(!0,a.props.id,a.state.minutes,a.state.seconds),a.timerId=setInterval(function(){var e=a.state.seconds,t=a.state.minutes;0!==e||0!==t?(0===e?(t-=1,e=59):e-=1,a.setState({seconds:e,minutes:t,minutesStr:a.formatTime(t),secondsStr:a.formatTime(e)}),a.state.onChangeStatus(!0,a.props.id,t,e)):a.stopTimer()},1e3)},a.resetTimer=function(){a.setState({seconds:+a.props.seconds,minutes:+a.props.minutes,minutesStr:a.formatTime(+a.props.minutes),secondsStr:a.formatTime(+a.props.seconds)})},a.state={minutes:+e.minutes,seconds:+e.seconds,minutesStr:a.formatTime(+e.minutes),secondsStr:a.formatTime(+e.seconds),title:a.props.title,timerIsOn:a.props.timerIsOn,onChangeStatus:a.props.onChangeStatus},a}return Object(I.a)(t,e),Object(y.a)(t,[{key:"componentDidUpdate",value:function(e){e.title!==this.props.title&&(this.setState({title:this.props.title}),this.stopTimer(),this.resetTimer()),this.state.timerIsOn!==this.props.timerIsOn&&(this.props.timerIsOn?this.startTimer():this.stopTimer())}},{key:"render",value:function(){var e=this.state,t=e.minutesStr,a=e.secondsStr,n=e.title,s=e.timerIsOn,l=this.props.showStartButton;return c.a.createElement("div",{className:"timer center-align"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12"},c.a.createElement("h5",null,n))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12"},c.a.createElement("h3",null," ",t," : ",a))),c.a.createElement("div",{className:"row"},l&&!s?c.a.createElement("div",{className:"col s6"},c.a.createElement("a",{href:"#!",className:"waves-effect waves-light-blue btn-flat",onClick:this.startTimer},"Start")):l&&c.a.createElement("div",{className:"col s6"},c.a.createElement("a",{href:"#!",className:"waves-effect waves-light-blue btn-flat",onClick:this.stopTimer},"Pause")),c.a.createElement("div",{className:"col s6"},c.a.createElement("a",{href:"#!",className:"waves-effect waves-light-blue btn-flat",onClick:this.resetTimer},"Reset"))))}}]),t}(c.a.Component),R=function(e){var t=Object(n.useState)(),a=Object(f.a)(t,2),s=a[0],l=a[1],r=function(t){l(s+t),e.changeScore(s+t,e.teamNumber)};return Object(n.useEffect)(function(){l(e.score)},[e.score]),c.a.createElement("div",{className:"score"},c.a.createElement("a",{href:"#!",className:"waves-effect waves-light-blue btn-flat",onClick:function(){return r(2)}},c.a.createElement("i",{className:"material-icons"},"exposure_plus_2")),c.a.createElement("a",{href:"#!",className:"waves-effect waves-light-blue btn-flat",onClick:function(){return r(1)}},c.a.createElement("i",{className:"material-icons"},"exposure_plus_1")),c.a.createElement("h5",null,s),c.a.createElement("a",{href:"#!",className:"waves-effect waves-light-blue btn-flat",onClick:function(){return r(-1)}},c.a.createElement("i",{className:"material-icons"},"exposure_neg_1")),c.a.createElement("a",{href:"#!",className:"waves-effect waves-light-blue btn-flat",onClick:function(){return r(-2)}},c.a.createElement("i",{className:"material-icons"},"exposure_neg_2")))},F=3,_=function(e){function t(e){var a;return Object(T.a)(this,t),(a=Object(M.a)(this,Object(k.a)(t).call(this,e))).changeScore=function(e,t){"1"===t?a.setState({setScore1:e}):a.setState({setScore2:e})},a.onChangeTimerStatusSet=function(e,t,n,c){a.setState({setTimerOn:e,setMinutes:n,setSeconds:c})},a.onChangeTimerStatusMatch=function(e,t,n,c){a.setState({matchTimerOn:e,matchMinutes:n,matchSeconds:c})},a.getSetMinutes=function(e,t){return e<=1&&t>=20?1:Math.min(e,F)},a.getSetSeconds=function(e,t){return e<1&&t>20?30:e<F?t:0},a.handleAddScore=function(){a.state.modifyMatch({score1:a.state.score1+a.state.setScore1,score2:a.state.score2+a.state.setScore2,id:a.props.id});var e=a.state.setNumber+1;a.setState({score1:a.state.score1+a.state.setScore1,score2:a.state.score2+a.state.setScore2,setScore1:0,setScore2:0,setNumber:e,titelSet:"Set #"+e,titleMatchHalf:0===a.matchMinutes&&a.matchSeconds<20?"Match 2nd half":"Match 1st half",setMinutes:a.getSetMinutes(a.state.matchMinutes,a.state.matchSeconds),setSeconds:a.getSetSeconds(a.state.matchMinutes,a.state.matchSeconds)})},a.startMatch=function(){a.state.modifyMatch({id:a.props.id,status:"online"}),a.setState({setTimerOn:!0,matchTimerOn:!0,matchIsOn:!0,matchIsPaused:!1})},a.stopMatch=function(){a.state.modifyMatch({id:a.props.id,status:"paused",matchIsPaused:!0}),a.setState({setTimerOn:!1,matchTimerOn:!1,matchIsPaused:!0})},a.endMatch=function(){a.state.modifyMatch({id:a.props.id,status:"complete",matchIsPaused:!0,matchIsOn:!1}),a.state.backToList()},a.backToList=function(){a.state.backToList()},a.state={backToList:e.backToList,modifyMatch:e.modifyMatch,team1:e.team1,team2:e.team2,score1:e.score1,score2:e.score2,setScore1:0,setScore2:0,setNumber:1,matchHalf:1,titelSet:"Set #1",titleMatchHalf:"Match 1st half",setTimerOn:!1,matchTimerOn:!1,setMinutes:a.getSetMinutes(e.matchTime,0),setSeconds:0,matchMinutes:e.matchTime,matchSeconds:0,matchIsOn:!1,matchIsPaused:!0},a}return Object(I.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.state,t=e.team1,a=e.team2,n=e.score1,s=e.score2,l=e.titelSet,r=e.titleMatchHalf,i=e.setScore1,m=e.setScore2,o=e.setTimerOn,u=e.matchTimerOn,d=e.setMinutes,h=e.setSeconds,f=e.matchMinutes,b=e.matchSeconds,E=e.matchIsPaused,p=e.matchIsOn;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"row blue lighten-5",style:{margin:"0"}},c.a.createElement("div",{className:"col s5 center-align"},c.a.createElement("h5",null,t)),c.a.createElement("div",{className:"col s2 center-align"},c.a.createElement("h5",null,"X")),c.a.createElement("div",{className:"col s5 center-align"},c.a.createElement("h5",null,a))),c.a.createElement("div",{className:"row yellow lighten-5"},c.a.createElement("div",{className:"col s5 center-align"},c.a.createElement("h5",null,n)),c.a.createElement("div",{className:"col s2 center-align"}),c.a.createElement("div",{className:"col s5 center-align"},c.a.createElement("h5",null,s))),c.a.createElement("div",{className:"center-align"},E&&c.a.createElement("a",{href:"#!",className:"waves-effect waves-light-blue btn-flat btn-large",onClick:this.startMatch},"Start ",c.a.createElement("i",{className:"material-icons left"},"play_arrow")),!E&&c.a.createElement("a",{href:"#!",className:"waves-effect waves-light-blue btn-flat btn-large",onClick:this.stopMatch},"Pause ",c.a.createElement("i",{className:"material-icons left"},"pause")," "),!p&&c.a.createElement("a",{href:"#!",className:"waves-effect waves-light-blue btn-flat btn-large",onClick:this.backToList},"Back ",c.a.createElement("i",{className:"material-icons left"},"arrow_back")),p&&c.a.createElement("a",{href:"#!",className:"waves-effect waves-light-blue btn-flat btn-large",onClick:this.endMatch},"End match ",c.a.createElement("i",{className:"material-icons left"},"stop"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s6 center-align"},c.a.createElement(D,{minutes:f,seconds:b,title:r,timerIsOn:u,onChangeStatus:this.onChangeTimerStatusMatch,id:"match",showStartButton:!1})),c.a.createElement("div",{className:"col s6 center-align"},c.a.createElement(D,{minutes:d,seconds:h,title:l,timerIsOn:o,onChangeStatus:this.onChangeTimerStatusSet,id:"set",showStartButton:!E}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12 center-align"},c.a.createElement("h6",null,"SET SCORE"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s6 center-align"},c.a.createElement(R,{changeScore:this.changeScore,teamNumber:"1",score:i})),c.a.createElement("div",{className:"col s6 center-align"},c.a.createElement(R,{changeScore:this.changeScore,teamNumber:"2",score:m}))),c.a.createElement("button",{className:"waves-effect waves-light-blue btn-flat",style:{width:"100%"},onClick:this.handleAddScore},"Add score"))}}]),t}(c.a.Component),L=function(e){var t=Object(n.useState)(+e.matchTime),a=Object(f.a)(t,2),s=a[0],l=a[1],r=Object(n.useState)(e.profile),i=Object(f.a)(r,2),m=i[0],o=i[1],u=Object(n.useState)(e.showCourt),d=Object(f.a)(u,2),h=d[0],b=d[1],E=Object(n.useState)(e.showReferee),p=Object(f.a)(E,2),v=p[0],g=p[1],N=e.changeVisibility,O=e.onSubmit,S=function(e){"showCourt"===e.target.name?b(!h):"showReferee"===e.target.name&&g(!v)};return c.a.createElement("div",{className:"settings"},c.a.createElement("ul",{className:"collection"},c.a.createElement("li",{className:"collection-item active  blue accent-1 black-text"},"Settings ",c.a.createElement("span",{className:"right",style:{cursor:"pointer"},onClick:N},c.a.createElement("i",{className:"material-icons"},"close")," ")),c.a.createElement("li",{className:"collection-item"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s4"},c.a.createElement("div",{className:"switch"},c.a.createElement("label",null,"Referee",c.a.createElement("input",{type:"checkbox",checked:"admin"===m,onChange:function(e){o(e.target.checked?"admin":"referee")}}),c.a.createElement("span",{className:"lever"}),"Admin"))),c.a.createElement("div",{className:"col s4"},c.a.createElement("div",{className:"switch"},c.a.createElement("label",null,"Court",c.a.createElement("input",{type:"checkbox",name:"showCourt",checked:h,onChange:S}),c.a.createElement("span",{className:"lever"})))),c.a.createElement("div",{className:"col s4"},c.a.createElement("div",{className:"switch"},c.a.createElement("label",null,"Referee",c.a.createElement("input",{type:"checkbox",name:"showReferee",checked:v,onChange:S}),c.a.createElement("span",{className:"lever"}))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field col s3"},c.a.createElement("label",{htmlFor:"matchtime"},"Match time")),c.a.createElement("div",{className:"input-field col s9"},c.a.createElement("input",{type:"number",placeholder:"Match time",id:"matchtime",value:s,onChange:function(e){l(e.target.value)}})))),c.a.createElement("li",{className:"collection-item"},c.a.createElement("button",{className:"waves-effect waves-teal btn-flat",style:{display:"block",width:"100%"},onClick:function(){O({matchTime:s,profile:m,showCourt:h,showReferee:v})}},"OK"))))},B=function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],s=t[1],l=Object(n.useState)(!1),r=Object(f.a)(l,2),i=r[0],m=r[1],b=Object(n.useState)(w()),E=Object(f.a)(b,2),v=E[0],N=E[1],C=Object(n.useState)(!1),T=Object(f.a)(C,2),y=T[0],M=T[1],k=Object(n.useState)(10),I=Object(f.a)(k,2),D=I[0],R=I[1],F=Object(n.useState)({id:"",court:"",date:w(),time:"",team1:"",team2:"",referee:"",matchTime:D}),B=Object(f.a)(F,2),P=B[0],A=B[1],V=Object(n.useState)("list"),H=Object(f.a)(V,2),X=H[0],K=H[1],U=Object(n.useState)(!1),J=Object(f.a)(U,2),Y=J[0],q=J[1],z=Object(n.useState)({showCourt:!1,showReferee:!1,profile:"referee"}),G=Object(f.a)(z,2),Q=G[0],W=G[1],Z=function(e){var t=Object(g.h)(Object(g.c)(O,"matches"),Object(g.j)("date","==",new g.a(new Date(new Date(e).toUTCString()).getTime()/1e3,0)));return Object(g.g)(t,function(e){m(!1),s(Object(h.a)(e.docs.map(function(e){var t,a=e.data();return Object(d.a)({},a,{time:S(a.time),date:(t=a.date,t.toDate().toISOString().slice(0,10))})})))})},$=function(){M(!y)},ee=function(){q(!Y)},te=function(){var e=Object(u.a)(o.a.mark(function e(t){var a,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a="",""!==t.id){e.next=8;break}return e.next=4,Object(g.b)(Object(g.c)(O,"matches"),Object(d.a)({},t,{date:g.a.fromDate(new Date(t.date)),time:g.a.fromDate(new Date(t.date+" "+t.time)),id:t.date+" "+t.time}));case 4:n=e.sent,a=n.id,e.next=9;break;case 8:a=t.id;case 9:Object(g.i)(Object(g.e)(O,"matches",a),Object(d.a)({},t,{date:g.a.fromDate(new Date(t.date)),time:g.a.fromDate(new Date(t.date+" "+t.time)),score1:0,score2:0,status:"pending",id:a}));case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),ae=function(e){if(""!==e){var t=a.find(function(t){return t.id===e});A(Object(d.a)({},t,{matchTime:D}))}else A({id:"",court:"",date:w(),time:"",team1:"",team2:"",referee:"",matchTime:D});$()},ne=function(){var e=Object(u.a)(o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.d)(Object(g.e)(O,"matches",t));case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){m(!1),Z(v)},[v]),c.a.createElement("div",{className:"container content"},"list"===X?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{style:{display:"inline-flex",alignItems:"center"}},c.a.createElement("div",{style:{width:"30vh"}},c.a.createElement(j,{label:"Date",value:v,onChange:function(e){N(e)}})),c.a.createElement("button",{className:"waves-effect waves-teal btn-flat",onClick:ee},c.a.createElement("i",{className:"material-icons"},"settings")),"admin"===Q.profile?c.a.createElement("button",{className:"waves-effect waves-teal btn-flat",onClick:function(){ae("")}},c.a.createElement("i",{className:"material-icons"},"add")):c.a.createElement(c.a.Fragment,null)),c.a.createElement(p,Object.assign({info:a,loading:i,editMatch:ae,deleteMatch:ne,startMatch:function(e){K("match");var t=a.find(function(t){return t.id===e});A(Object(d.a)({},t,{matchTime:D}))}},Q)),y&&c.a.createElement(x,Object.assign({changeVisibility:$,addMatch:te},P)),Y&&c.a.createElement(L,Object.assign({changeVisibility:ee,onSubmit:function(e){R(e.matchTime),W(e),q(!Y)}},Q,{matchTime:D}))):c.a.createElement(_,Object.assign({backToList:function(){K("list")},modifyMatch:function(e){Object(g.i)(Object(g.e)(O,"matches",e.id),Object(d.a)({},e),{merge:!0})}},P)))};var P=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(i,null),c.a.createElement(B,null),c.a.createElement(r,null))},A=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,43)).then(function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),s(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(P,null))),A()}},[[28,3,2]]]);
//# sourceMappingURL=main.e338da6f.chunk.js.map
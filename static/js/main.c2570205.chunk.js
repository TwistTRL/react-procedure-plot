(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,n){e.exports=n(56)},53:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(15),i=n(2),r=n(3),l=n(6),o=n(5),c=n(7),u=n(0),s=n.n(u),m=n(26),d=n.n(m),h=n(14),v=n(12),g=n(4),E=n(13),p={"HLHS STAGE I, CARDIAC":"S1P","CHEST CLOSURE, CARDIAC OFF UNIT":"VAC \u2206","GASTROSTOMY, LAPAROSCOPIC, GENSURG":"Hip osteoplasty","VESICOSTOMY CREATION/CLOSURE, GU":"GI","BIDIRECTIONAL GLEN SHUNT, CARDIAC":"GI"},f={"HLHS STAGE I, CARDIAC":0,"CHEST CLOSURE, CARDIAC OFF UNIT":2,"GASTROSTOMY, LAPAROSCOPIC, GENSURG":0,"VESICOSTOMY CREATION/CLOSURE, GU":2,"BIDIRECTIONAL GLEN SHUNT, CARDIAC":1},C=function(){function e(t){var n=this,a=t.id,r=t.name,l=t.start,o=t.end;Object(i.a)(this,e),this.getType=Object(E.memoize_one)(function(){return f[n.name]}),this.getDisplay=Object(E.memoize_one)(function(){return p[n.name]||n.name}),this.getDisplayBitmap=Object(E.memoize_one)(function(){var e,t,a,i,r=document.createElement("canvas"),l=r.getContext("2d"),o=n.getDisplay();switch(n.getType()){case 0:e="10px Sans",l.font=e,a=l.measureText(o).width,t=12,r.width=t,r.height=a,l.font=e,l.fillStyle="red",l.textAlign="center",l.textBaseline="middle",l.rotate(-Math.PI/2),i=Object(g.getRotatedAxisCoordinate)(t/2,a/2,-Math.PI/2),l.fillText(o,i.x,i.y);break;case 1:e="10px Sans",l.font=e,a=l.measureText(o).width,t=12,r.width=t,r.height=a,l.font=e,l.fillStyle="orange",l.textAlign="center",l.textBaseline="middle",l.rotate(-Math.PI/2),i=Object(g.getRotatedAxisCoordinate)(t/2,a/2,-Math.PI/2),l.fillText(o,i.x,i.y);break;case 2:default:e="10px Sans",l.font=e,a=l.measureText(o).width,t=12,r.width=t,r.height=a,l.font=e,l.fillStyle="green",l.textAlign="center",l.textBaseline="middle",l.rotate(-Math.PI/2),i=Object(g.getRotatedAxisCoordinate)(t/2,a/2,-Math.PI/2),l.fillText(o,i.x,i.y)}return r}),this.getDisplayHitbox=Object(E.memoize_one)(function(){var e,t,a,i=document.createElement("canvas").getContext("2d"),r=n.getDisplay();switch(n.getType()){case 0:case 1:e="10px Sans",i.font=e,a=i.measureText(r).width,t=12;break;case 2:default:e="10px Sans",i.font=e,a=i.measureText(r).width,t=12}return{width:t,height:a}}),this.getDisplaySelectedBitmap=Object(E.memoize_one)(function(){var e,t,a,i=document.createElement("canvas"),r=i.getContext("2d"),l=n.getDisplay();switch(n.getType()){case 0:e="bold 10px Sans",r.font=e,a=r.measureText(l).width,t=12,i.width=t,i.height=a,r.font=e,r.fillStyle="red",r.textAlign="center",r.textBaseline="middle",r.rotate(-Math.PI/2),r.fillText(l,-a/2,t/2);break;case 1:e="bold 10px Sans",r.font=e,a=r.measureText(l).width,t=12,i.width=t,i.height=a,r.font=e,r.fillStyle="orange",r.textAlign="center",r.textBaseline="middle",r.rotate(-Math.PI/2),r.fillText(l,-a/2,t/2);break;case 2:default:e="bold 10px Sans",r.font=e,a=r.measureText(l).width,t=12,i.width=t,i.height=a,r.font=e,r.fillStyle="green",r.textAlign="center",r.textBaseline="middle",r.rotate(-Math.PI/2),r.fillText(l,-a/2,t/2)}return i}),this.getDisplaySelectedHitbox=Object(E.memoize_one)(function(){var e,t,a,i=document.createElement("canvas").getContext("2d"),r=n.getDisplay();switch(n.getType()){case 0:case 1:e="bold 10px Sans",i.font=e,a=i.measureText(r).width,t=12;break;case 2:default:e="bold 10px Sans",i.font=e,a=i.measureText(r).width,t=12}return{width:t,height:a}}),this.id=a,this.name=r,this.start=l,this.end=o}return Object(r.a)(e,[{key:"draw",value:function(e,t,n,a,i){a=Math.round(a);var r=(i=Math.round(i))+1-a,l=(a+i+1)/2;switch(this.getType()){case 0:e.strokeStyle="red",e.lineWidth=r,e.beginPath(),e.moveTo(l,0),e.lineTo(l,n),e.stroke();break;case 1:e.strokeStyle="orange",e.lineWidth=r,e.beginPath(),e.moveTo(l,0),e.lineTo(l,n),e.stroke();break;case 2:default:e.strokeStyle="green",e.lineWidth=r,e.beginPath(),e.moveTo(l,0),e.lineTo(l,n),e.stroke()}var o=this.getDisplayBitmap();e.drawImage(o,a-5-o.width,5)}},{key:"drawHitbox",value:function(e,t,n,a,i){a=Math.round(a);var r=(i=Math.round(i))-a+1,l=(a+i+1)/2;e.beginPath(),e.lineWidth=r,e.moveTo(l,0),e.lineTo(l,n),e.stroke();var o=this.getDisplayHitbox();e.fillRect(a-5-o.width,5,o.width,o.height)}},{key:"drawSelected",value:function(e,t,n,a,i){a=Math.round(a);var r=(i=Math.round(i))-a+1,l=(a+i+1)/2;switch(this.getType()){case 0:e.strokeStyle="red",e.lineWidth=r,e.beginPath(),e.moveTo(l,0),e.lineTo(l,n),e.stroke();break;case 1:e.strokeStyle="orange",e.lineWidth=r,e.beginPath(),e.moveTo(l,0),e.lineTo(l,n),e.stroke();break;case 2:default:e.strokeStyle="green",e.lineWidth=r,e.beginPath(),e.moveTo(l,0),e.lineTo(l,n),e.stroke()}var o=this.getDisplaySelectedBitmap();e.drawImage(o,a-5-o.width,5)}},{key:"drawSelectedHitbox",value:function(e,t,n,a,i){a=Math.round(a);var r=(i=Math.round(i))-a+1,l=(a+i+1)/2;e.beginPath(),e.lineWidth=r,e.moveTo(l,0),e.lineTo(l,n),e.stroke();var o=this.getDisplaySelectedHitbox();e.fillRect(a-5-o.width,5,o.width,o.height)}}]),e}();function O(e,t){return e.start!==t.start?e.start-t.start:e.end-t.end}var S=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(o.a)(t).call(this,e))).ref=s.a.createRef(),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.height,n=e.width;return s.a.createElement("canvas",{ref:this.ref,height:t,width:n,style:{display:"block",width:n,height:t}})}},{key:"componentDidMount",value:function(){this.draw()}},{key:"componentDidUpdate",value:function(){this.draw()}},{key:"draw",value:function(){var e=this.props,t=e.data,n=e.selection,a=e.minX,i=e.maxX,r=e.width,l=e.height;this.render_memo=this.render_memo||{};var o=this.render_memo;o.data!==t&&(o.data=t,o.ProcedureObjectCollection=t.map(function(e){return new C(e)}).sort(O));var c=this.ref.current.getContext("2d");c.globalAlpha=1,c.clearRect(0,0,r,l);var u=!0,s=!1,m=void 0;try{for(var d,h=o.ProcedureObjectCollection[Symbol.iterator]();!(u=(d=h.next()).done);u=!0){var v=d.value;if(!(v.start>i||v.end<a)){var E=Object(g.toDomXCoord_Linear)(r,a,i,v.start),p=Object(g.toDomXCoord_Linear)(r,a,i,v.end);v.id===n?v.drawSelected(c,r,l,E,p):v.draw(c,r,l,E,p)}}}catch(f){s=!0,m=f}finally{try{u||null==h.return||h.return()}finally{if(s)throw m}}}}]),t}(u.PureComponent),b=n(19),I=n.n(b),x=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.width,n=e.height,a=e.data,i=e.selection,r=e.hoveringPosition,l=e.minX,o=e.maxX;if(null===r||null===i||0===a.length)return null;this.render_memo=this.render_memo||{};var c=this.render_memo;if(c.data!==a){c.data=a,c.normalizedData={};var u=!0,m=!1,d=void 0;try{for(var h,v=a[Symbol.iterator]();!(u=(h=v.next()).done);u=!0){var E=h.value;c.normalizedData[E.id]=E}}catch(C){m=!0,d=C}finally{try{u||null==v.return||v.return()}finally{if(m)throw d}}}var p=c.normalizedData[i].end,f=Object(g.fromDomXCoord_Linear)(t,l,o,r.domX);return s.a.createElement("div",{style:{width:t,height:n}},s.a.createElement(I.a,{width:t,height:20,minX:l,maxX:o,startX:p,endX:f}))}}]),t}(u.PureComponent),y=n(27),P=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return null}},{key:"shouldComponentUpdate",value:function(e,t){return e.hoveringPosition!==this.props.hoveringPosition}},{key:"componentDidMount",value:function(){this.select()}},{key:"componentDidUpdate",value:function(){this.select()}},{key:"select",value:function(){var e=this.props,t=e.data,n=e.minX,a=e.maxX,i=e.width,r=e.hoveringPosition,l=e.selectHandler;if(void 0!==r)if(null!==r){this.select_memo=this.select_memo||{};var o=this.select_memo;if(o.data!==t){o.data=t;var c=t.map(function(e){return new C(e)});o.filteredProcedureObjects=c.filter(function(e){return 0===e.getType()}),o.ends=o.filteredProcedureObjects.map(function(e){return e.end}).sort()}if(0!==o.filteredProcedureObjects.length){var u=Object(g.fromDomXCoord_Linear)(i,n,a,r.domX),s=Math.max(0,Object(y.bisect_left)(o.ends,u));l(o.filteredProcedureObjects[s].id)}}else l(null)}}]),t}(u.Component),T=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(o.a)(t).call(this,e))).lastEvent=null,n.pickingCanvas=document.createElement("canvas"),n.pickingCanvas.width=1,n.pickingCanvas.height=1,n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return null}},{key:"componentDidMount",value:function(){this.select()}},{key:"componentDidUpdate",value:function(){this.select()}},{key:"select",value:function(){var e=this.props,t=e.data,n=e.selection,a=e.minX,i=e.maxX,r=e.width,l=e.height,o=e.clickPosition,c=e.selectHandler;if(o!==this.lastEvent)if(this.lastEvent=o,o){this.select_memo=this.select_memo||{};var u=this.select_memo;u.data!==t&&(u.data=t,u.ProcedureObjectCollection=t.map(function(e){return new C(e)}).sort(O));var s,m=this.pickingCanvas.getContext("2d");m.clearRect(0,0,1,1),m.translate(-o.domX,-o.domY);var d=!0,h=!1,v=void 0;try{for(var E,p=u.ProcedureObjectCollection[Symbol.iterator]();!(d=(E=p.next()).done);d=!0){var f=E.value;if(!(f.start>i||f.end<a)){var S=Object(g.toDomXCoord_Linear)(r,a,i,f.start),b=Object(g.toDomXCoord_Linear)(r,a,i,f.end);if(f.id===n?f.drawSelectedHitbox(m,r,l,S,b):f.drawHitbox(m,r,l,S,b),0!==m.getImageData(0,0,1,1).data[3]){(s=f.id)===n&&(s=null);break}}}}catch(I){h=!0,v=I}finally{try{d||null==p.return||p.return()}finally{if(h)throw v}}c(s),m.translate(o.domX,o.domY)}else c(null)}}]),t}(u.PureComponent),A=S,w=n(17),X=(n(53),{"HLHS STAGE I, CARDIAC":[{id:0,name:"HLHS STAGE I, CARDIAC",start:800,end:850}],"CHEST CLOSURE, CARDIAC OFF UNIT":[{id:1,name:"CHEST CLOSURE, CARDIAC OFF UNIT",start:5100,end:5200}],"GASTROSTOMY, LAPAROSCOPIC, GENSURG":[{id:2,name:"GASTROSTOMY, LAPAROSCOPIC, GENSURG",start:9e3,end:9020}],"VESICOSTOMY CREATION/CLOSURE, GU":[{id:3,name:"VESICOSTOMY CREATION/CLOSURE, GU",start:10300,end:10400}],"BIDIRECTIONAL GLEN SHUNT, CARDIAC":[{id:4,name:"BIDIRECTIONAL GLEN SHUNT, CARDIAC",start:16e3,end:16400}],all:[{id:0,name:"HLHS STAGE I, CARDIAC",start:800,end:850},{id:1,name:"CHEST CLOSURE, CARDIAC OFF UNIT",start:5100,end:5200},{id:2,name:"GASTROSTOMY, LAPAROSCOPIC, GENSURG",start:9e3,end:9020},{id:3,name:"VESICOSTOMY CREATION/CLOSURE, GU",start:10300,end:10400},{id:4,name:"BIDIRECTIONAL GLEN SHUNT, CARDIAC",start:16e3,end:16400}]}),R=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(o.a)(t).call(this,e))).state={width:800,height:400,minX:0,maxX:2e4,data_:"HLHS STAGE I, CARDIAC",selection:1},n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.width,a=t.height,i=t.minX,r=t.maxX,l=t.data_,o=t.selection;return s.a.createElement(s.a.Fragment,null,s.a.createElement("fieldset",null,s.a.createElement("legend",null,"Props"),s.a.createElement("div",null,"width",s.a.createElement("input",{type:"range",min:400,max:800,value:n,onChange:function(t){return e.setState({width:Number.parseInt(t.target.value)})}}),n),s.a.createElement("div",null,"height",s.a.createElement("input",{type:"range",min:100,max:400,value:a,onChange:function(t){return e.setState({height:Number.parseInt(t.target.value)})}}),a),s.a.createElement("div",null,"minX",s.a.createElement("input",{type:"range",min:0,max:r,value:i,onChange:function(t){return e.setState({minX:Number.parseInt(t.target.value)})}}),i),s.a.createElement("div",null,"maxX",s.a.createElement("input",{type:"range",min:i,max:2e4,value:r,onChange:function(t){return e.setState({maxX:Number.parseInt(t.target.value)})}}),r),s.a.createElement("div",null,"data",s.a.createElement("select",{value:l,onChange:function(t){return e.setState({data_:t.target.value})}},s.a.createElement("option",{value:"HLHS STAGE I, CARDIAC"},"HLHS STAGE I, CARDIAC"),s.a.createElement("option",{value:"CHEST CLOSURE, CARDIAC OFF UNIT"},"CHEST CLOSURE, CARDIAC OFF UNIT"),s.a.createElement("option",{value:"GASTROSTOMY, LAPAROSCOPIC, GENSURG"},"GASTROSTOMY, LAPAROSCOPIC, GENSURG"),s.a.createElement("option",{value:"VESICOSTOMY CREATION/CLOSURE, GU"},"VESICOSTOMY CREATION/CLOSURE, GU"),s.a.createElement("option",{value:"BIDIRECTIONAL GLEN SHUNT, CARDIAC"},"BIDIRECTIONAL GLEN SHUNT, CARDIAC"),s.a.createElement("option",{value:"all"},"all")),s.a.createElement("pre",null,JSON.stringify(X[l]))),s.a.createElement("div",null,"selection",s.a.createElement("select",{value:o,onChange:function(t){return e.setState({selection:Number.parseInt(t.target.value)})}},s.a.createElement("option",{value:0},"0"),s.a.createElement("option",{value:1},"1"),s.a.createElement("option",{value:2},"2"),s.a.createElement("option",{value:3},"3"),s.a.createElement("option",{value:4},"4")))),s.a.createElement("fieldset",null,s.a.createElement("legend",null,"Result"),s.a.createElement(A,{data:X[l],selection:o,width:n,height:a,minX:i,maxX:r})))}}]),t}(u.Component),j=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(o.a)(t).call(this,e))).state={width:800,height:400,minX:0,maxX:2e4,selection:-1,hoveringPosition:{domX:0,domY:0}},n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.width,i=t.height,r=t.minX,l=t.maxX,o=t.selection,c=t.hoveringPosition;return s.a.createElement(s.a.Fragment,null,s.a.createElement("fieldset",null,s.a.createElement("legend",null,"Props"),s.a.createElement("div",null,"data: ","[{id,start,end,name}]"),s.a.createElement("div",null,"width",s.a.createElement("input",{type:"range",min:400,max:800,value:n,onChange:function(t){return e.setState({width:Number.parseInt(t.target.value)})}}),n),s.a.createElement("div",null,"height",s.a.createElement("input",{type:"range",min:100,max:400,value:i,onChange:function(t){return e.setState({height:Number.parseInt(t.target.value)})}}),i),s.a.createElement("div",null,"minX",s.a.createElement("input",{type:"range",min:0,max:l,value:r,onChange:function(t){return e.setState({minX:Number.parseInt(t.target.value)})}}),r),s.a.createElement("div",null,"maxX",s.a.createElement("input",{type:"range",min:r,max:2e4,value:l,onChange:function(t){return e.setState({maxX:Number.parseInt(t.target.value)})}}),l),s.a.createElement("div",null,"hoveringPosition .domX",s.a.createElement("input",{type:"range",min:0,max:n,value:c.domX,onChange:function(t){return e.setState({hoveringPosition:Object(a.a)({},c,{domX:Number.parseInt(t.target.value)})})}}),".domY",s.a.createElement("input",{type:"range",min:0,max:i,value:c.domY,onChange:function(t){return e.setState({hoveringPosition:Object(a.a)({},c,{domY:Number.parseInt(t.target.value)})})}}),JSON.stringify(c,null," ")),s.a.createElement("div",null,"selection",s.a.createElement("select",{value:o,onChange:function(t){return e.setState({selection:Number.parseInt(t.target.value)})}},s.a.createElement("option",{value:0},"0"),s.a.createElement("option",{value:1},"1"),s.a.createElement("option",{value:2},"2"),s.a.createElement("option",{value:3},"3"),s.a.createElement("option",{value:4},"4"),s.a.createElement("option",{value:-1},"null")))),s.a.createElement("fieldset",null,s.a.createElement("legend",null,"Result"),s.a.createElement(x,{width:n,height:i,minX:r,maxX:l,data:X.all,selection:-1===o?null:o,hoveringPosition:c})))}}]),t}(u.Component),k=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(o.a)(t).call(this,e))).state={minX:0,maxX:2e4,width:800,hoveringPosition:{domX:0,domY:0},selection:null},n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.minX,i=t.maxX,r=t.width,l=t.hoveringPosition,o=t.selection;return s.a.createElement(s.a.Fragment,null,s.a.createElement("fieldset",null,s.a.createElement("legend",null,"Props"),s.a.createElement("div",null,"data: ","[{id,start,end,name}]"),s.a.createElement("div",null,"width",s.a.createElement("input",{type:"range",min:400,max:800,value:r,onChange:function(t){return e.setState({width:Number.parseInt(t.target.value)})}}),r),s.a.createElement("div",null,"minX",s.a.createElement("input",{type:"range",min:0,max:i,value:n,onChange:function(t){return e.setState({minX:Number.parseInt(t.target.value)})}}),n),s.a.createElement("div",null,"maxX",s.a.createElement("input",{type:"range",min:n,max:2e4,value:i,onChange:function(t){return e.setState({maxX:Number.parseInt(t.target.value)})}}),i),s.a.createElement("div",null,"hoveringPosition .domX",s.a.createElement("input",{type:"range",min:0,max:r,value:l.domX,onChange:function(t){return e.setState({hoveringPosition:Object(a.a)({},l,{domX:Number.parseInt(t.target.value)})})}}),JSON.stringify(l,null," ")),s.a.createElement("div",null,"selectHandler: function(selectionID)")),s.a.createElement("fieldset",null,s.a.createElement("legend",null,"Result"),"This component does not display anything itself.",s.a.createElement(x,{width:r,height:20,minX:n,maxX:i,data:X.all,selection:-1===o?null:o,hoveringPosition:l}),s.a.createElement(A,{data:X.all,selection:o,width:r,height:200,minX:n,maxX:i}),s.a.createElement(P,{data:X.all,minX:n,maxX:i,width:r,hoveringPosition:l,selectHandler:function(t){return e.setState({selection:t})}})),s.a.createElement("fieldset",null,s.a.createElement("legend",null,"Callback"),"selectHandler args, the id of the selected procedure: ",o))}}]),t}(u.Component),N=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(o.a)(t).call(this,e))).state={minX:0,maxX:2e4,width:800,height:200,clickPosition_:{domX:0,domY:10},clickPosition:null,selection:null},n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.minX,i=t.maxX,r=t.width,l=t.height,o=t.clickPosition,c=t.clickPosition_,u=t.selection;return s.a.createElement(s.a.Fragment,null,s.a.createElement("fieldset",null,s.a.createElement("legend",null,"Props"),s.a.createElement("div",null,"data: ","[{id,start,end,name}]"),s.a.createElement("div",null,"width",s.a.createElement("input",{type:"range",min:400,max:800,value:r,onChange:function(t){return e.setState({width:Number.parseInt(t.target.value)})}}),r),s.a.createElement("div",null,"height",s.a.createElement("input",{type:"range",min:200,max:400,value:l,onChange:function(t){return e.setState({height:Number.parseInt(t.target.value)})}}),l),s.a.createElement("div",null,"minX",s.a.createElement("input",{type:"range",min:0,max:i,value:n,onChange:function(t){return e.setState({minX:Number.parseInt(t.target.value)})}}),n),s.a.createElement("div",null,"maxX",s.a.createElement("input",{type:"range",min:n,max:2e4,value:i,onChange:function(t){return e.setState({maxX:Number.parseInt(t.target.value)})}}),i),s.a.createElement("div",null,"clickPosition .domX",s.a.createElement("input",{type:"range",min:0,max:r,value:c.domX,onChange:function(t){return e.setState({clickPosition_:Object(a.a)({},c,{domX:Number.parseInt(t.target.value)})})}}),".domY",s.a.createElement("input",{type:"range",min:0,max:l,value:c.domY,onChange:function(t){return e.setState({clickPosition_:Object(a.a)({},c,{domY:Number.parseInt(t.target.value)})})}}),s.a.createElement("button",{onClick:function(t){return e.setState({clickPosition:Object(a.a)({},c)})}},"Trigger Click"),JSON.stringify(c,null," ")),s.a.createElement("div",null,"selectHandler: function(selectionID)")),s.a.createElement("fieldset",null,s.a.createElement("legend",null,"Result"),"This component does not display anything itself.",s.a.createElement("div",{style:{position:"relative",width:r,height:l}},s.a.createElement("div",{style:{position:"absolute"}},s.a.createElement(A,{data:X.all,selection:u,width:r,height:l,minX:n,maxX:i})),s.a.createElement("div",{style:{position:"absolute"}},s.a.createElement("div",{style:{position:"relative",left:c.domX,top:c.domY,width:2,height:2,backgroundColor:"red"}}))),s.a.createElement(T,{data:X.all,minX:n,maxX:i,width:r,height:l,clickPosition:o,selectHandler:function(t){return e.setState({selection:t})},selection:u})),s.a.createElement("fieldset",null,s.a.createElement("legend",null,"Callback"),"selectHandler args, the id of the selected procedure: ",u))}}]),t}(u.Component),D=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(o.a)(t).call(this,e))).state={hoverSelection:null,clickSelection:null,hoveringPosition:null},n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=X.all,n=this.state,a=n.hoverSelection,i=n.clickSelection,r=n.hoveringPosition,l=i||a;return s.a.createElement(s.a.Fragment,null,s.a.createElement("fieldset",null,s.a.createElement("legend",null,"Demo")),s.a.createElement("fieldset",null,s.a.createElement("legend",null,"Result"),s.a.createElement("div",{style:{position:"relative",width:800,height:400}},s.a.createElement("div",{style:{position:"absolute",width:800,height:400}},s.a.createElement(A,{data:t,selection:l,minX:0,maxX:2e4,width:800,height:400})),s.a.createElement("div",{style:{position:"absolute",width:800,height:400}},s.a.createElement(x,{width:800,height:400,minX:0,maxX:2e4,data:t,selection:l,hoveringPosition:r})),s.a.createElement("div",{style:{position:"absolute",width:800,height:400}},s.a.createElement(w.PlotInteractionProvider,{width:800,height:400,transitionGraph:w.INTERACTION_MODEL_BARE,render:function(n){return s.a.createElement(s.a.Fragment,null,s.a.createElement(w.Relay,{data:n,updateHandler:function(t){return e.setState({hoveringPosition:t.hoveringPosition})}}),s.a.createElement(P,{data:t,minX:0,maxX:2e4,width:800,hoveringPosition:n.hoveringPosition,selectHandler:function(t){return e.setState({hoverSelection:t})}}),s.a.createElement(T,{data:t,minX:0,maxX:2e4,width:800,height:400,clickPosition:n.clickPosition,selectHandler:function(t){return e.setState({clickSelection:t})},selection:l}))}})))))}}]),t}(u.Component),H=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(h.a,null,s.a.createElement("nav",{className:"app"},s.a.createElement(h.b,{to:"/ProcedurePlot"},"ProcedurePlot"),s.a.createElement(h.b,{to:"/ProcedurePlotTimeDiff"},"ProcedurePlotTimeDiff"),s.a.createElement(h.b,{to:"/ProcedurePlotHoverSelector"},"ProcedurePlotHoverSelector"),s.a.createElement(h.b,{to:"/ProcedurePlotClickSelector"},"ProcedurePlotClickSelector"),s.a.createElement(h.b,{to:"/ProcedurePlotFullDemo"},"ProcedurePlotFullDemo")),s.a.createElement(v.a,{path:"/ProcedurePlot",exact:!0,component:R}),s.a.createElement(v.a,{path:"/ProcedurePlotTimeDiff",exact:!0,component:j}),s.a.createElement(v.a,{path:"/ProcedurePlotHoverSelector",exact:!0,component:k}),s.a.createElement(v.a,{path:"/ProcedurePlotClickSelector",exact:!0,component:N}),s.a.createElement(v.a,{path:"/ProcedurePlotFullDemo",exact:!0,component:D}))}}]),t}(u.Component);d.a.render(s.a.createElement(H,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.c2570205.chunk.js.map
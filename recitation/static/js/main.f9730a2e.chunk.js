(this.webpackJsonprecitation=this.webpackJsonprecitation||[]).push([[0],Array(47).concat([function(e,t){e.exports.hsvToRgb=function(e,t,n){var a,o,s,i=Math.floor(6*e),c=6*e-i,r=n*(1-t),p=n*(1-c*t),u=n*(1-(1-c)*t);switch(i%6){case 0:a=n,o=u,s=r;break;case 1:a=p,o=n,s=r;break;case 2:a=r,o=n,s=u;break;case 3:a=r,o=p,s=n;break;case 4:a=u,o=r,s=n;break;case 5:a=n,o=r,s=p}return{r:255*a,g:255*o,b:255*s}},e.exports.rgbToHsv=function(e,t,n){e/=255,t/=255,n/=255;var a,o,s=Math.max(e,t,n),i=Math.min(e,t,n),c=s,r=s-i;if(o=0===s?0:r/s,s===i)a=0;else{switch(s){case e:a=(t-n)/r+(t<n?6:0);break;case t:a=(n-e)/r+2;break;case n:a=(e-t)/r+4}a/=6}return{h:a,s:o,v:c}},e.exports.hslToRgb=function(e,t,n){var a,o,s;if(0==t)a=o=s=n;else{var i=function(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e},c=n<.5?n*(1+t):n+t-n*t,r=2*n-c;a=i(r,c,e+1/3),o=i(r,c,e),s=i(r,c,e-1/3)}return{r:255*a,g:255*o,b:255*s}},e.exports.rgbToHsl=function(e,t,n){e/=255,t/=255,n/=255;var a,o,s=Math.max(e,t,n),i=Math.min(e,t,n),c=(s+i)/2;if(s===i)a=o=0;else{var r=s-i;switch(o=c>.5?r/(2-s-i):r/(s+i),s){case e:a=(t-n)/r+(t<n?6:0);break;case t:a=(n-e)/r+2;break;case n:a=(e-t)/r+4}a/=6}return{h:a,s:o,l:c}}},,,,function(e,t,n){e.exports=n(150)},,,,,function(e,t,n){},function(e,t,n){},,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){var a={"./s1/s1_1.mp3":86,"./s1/s1_10.mp3":87,"./s1/s1_11.mp3":88,"./s1/s1_12.mp3":89,"./s1/s1_13.mp3":90,"./s1/s1_14.mp3":91,"./s1/s1_15.mp3":92,"./s1/s1_2.mp3":93,"./s1/s1_3.mp3":94,"./s1/s1_4.mp3":95,"./s1/s1_5.mp3":96,"./s1/s1_6.mp3":97,"./s1/s1_7.mp3":98,"./s1/s1_8.mp3":99,"./s1/s1_9.mp3":100,"./s2/s2_1.mp3":101,"./s2/s2_10.mp3":102,"./s2/s2_11.mp3":103,"./s2/s2_12.mp3":104,"./s2/s2_13.mp3":105,"./s2/s2_14.mp3":106,"./s2/s2_15.mp3":107,"./s2/s2_16.mp3":108,"./s2/s2_17.mp3":109,"./s2/s2_18.mp3":110,"./s2/s2_19.mp3":111,"./s2/s2_2.mp3":112,"./s2/s2_20.mp3":113,"./s2/s2_3.mp3":114,"./s2/s2_4.mp3":115,"./s2/s2_5.mp3":116,"./s2/s2_6.mp3":117,"./s2/s2_7.mp3":118,"./s2/s2_8.mp3":119,"./s2/s2_9.mp3":120,"./s3/s3_1.mp3":121,"./s3/s3_2.mp3":122,"./s3/s3_3.mp3":123,"./s3/s3_4.mp3":124,"./s3/s3_5.mp3":125,"./s3/s3_6.mp3":126,"./s3/s3_7.mp3":127,"./s3/s3_8.mp3":128,"./s4/s4_1.mp3":129,"./s4/s4_10.mp3":130,"./s4/s4_2.mp3":131,"./s4/s4_3.mp3":132,"./s4/s4_4.mp3":133,"./s4/s4_5.mp3":134,"./s4/s4_6.mp3":135,"./s4/s4_7.mp3":136,"./s4/s4_8.mp3":137,"./s4/s4_9.mp3":138,"./s5/sample_1-1.mp3":139,"./s5/sample_1-2.mp3":140,"./s5/sample_1-3.mp3":141,"./s5/sample_1-4.mp3":142,"./s5/sample_1-5.mp3":143,"./s6/sample_2-1.mp3":144,"./s6/sample_2-2.mp3":145,"./s6/sample_2-3.mp3":146,"./s6/sample_2-4.mp3":147,"./s6/sample_2-5.mp3":148};function o(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=s,e.exports=o,o.id=85},function(e,t,n){e.exports=n.p+"static/media/s1_1.ea669680.mp3"},function(e,t,n){e.exports=n.p+"static/media/s1_10.86731729.mp3"},function(e,t,n){e.exports=n.p+"static/media/s1_11.95383e2b.mp3"},function(e,t,n){e.exports=n.p+"static/media/s1_12.3062e67b.mp3"},function(e,t,n){e.exports=n.p+"static/media/s1_13.b223aab5.mp3"},function(e,t,n){e.exports=n.p+"static/media/s1_14.425a4fa9.mp3"},function(e,t,n){e.exports=n.p+"static/media/s1_15.fb288ce4.mp3"},function(e,t,n){e.exports=n.p+"static/media/s1_2.11641a51.mp3"},function(e,t,n){e.exports=n.p+"static/media/s1_3.9a7edbf0.mp3"},function(e,t,n){e.exports=n.p+"static/media/s1_4.fd8f3b17.mp3"},function(e,t,n){e.exports=n.p+"static/media/s1_5.1715ef81.mp3"},function(e,t,n){e.exports=n.p+"static/media/s1_6.eb1c2009.mp3"},function(e,t,n){e.exports=n.p+"static/media/s1_7.3fd68304.mp3"},function(e,t,n){e.exports=n.p+"static/media/s1_8.137fa916.mp3"},function(e,t,n){e.exports=n.p+"static/media/s1_9.58675f81.mp3"},function(e,t,n){e.exports=n.p+"static/media/s2_1.61d94d7a.mp3"},function(e,t,n){e.exports=n.p+"static/media/s2_10.32934c47.mp3"},function(e,t,n){e.exports=n.p+"static/media/s2_11.4525b266.mp3"},function(e,t,n){e.exports=n.p+"static/media/s2_12.256207f1.mp3"},function(e,t,n){e.exports=n.p+"static/media/s2_13.ce7afcc0.mp3"},function(e,t,n){e.exports=n.p+"static/media/s2_14.1bd26a4b.mp3"},function(e,t,n){e.exports=n.p+"static/media/s2_15.469f9148.mp3"},function(e,t,n){e.exports=n.p+"static/media/s2_16.0dbcbb7b.mp3"},function(e,t,n){e.exports=n.p+"static/media/s2_17.b670b4ad.mp3"},function(e,t,n){e.exports=n.p+"static/media/s2_18.6abec9c8.mp3"},function(e,t,n){e.exports=n.p+"static/media/s2_19.7e1a4507.mp3"},function(e,t,n){e.exports=n.p+"static/media/s2_2.10b42381.mp3"},function(e,t,n){e.exports=n.p+"static/media/s2_20.7cf882bb.mp3"},function(e,t,n){e.exports=n.p+"static/media/s2_3.9d064e7e.mp3"},function(e,t,n){e.exports=n.p+"static/media/s2_4.d96ad941.mp3"},function(e,t,n){e.exports=n.p+"static/media/s2_5.6f1abd87.mp3"},function(e,t,n){e.exports=n.p+"static/media/s2_6.39526b5b.mp3"},function(e,t,n){e.exports=n.p+"static/media/s2_7.b3c61a37.mp3"},function(e,t,n){e.exports=n.p+"static/media/s2_8.310685bd.mp3"},function(e,t,n){e.exports=n.p+"static/media/s2_9.aa5ed891.mp3"},function(e,t,n){e.exports=n.p+"static/media/s3_1.f3c77ca9.mp3"},function(e,t,n){e.exports=n.p+"static/media/s3_2.56239431.mp3"},function(e,t,n){e.exports=n.p+"static/media/s3_3.ee87a362.mp3"},function(e,t,n){e.exports=n.p+"static/media/s3_4.b929912a.mp3"},function(e,t,n){e.exports=n.p+"static/media/s3_5.fa7be430.mp3"},function(e,t,n){e.exports=n.p+"static/media/s3_6.1f115ecb.mp3"},function(e,t,n){e.exports=n.p+"static/media/s3_7.3e651505.mp3"},function(e,t,n){e.exports=n.p+"static/media/s3_8.eec7224c.mp3"},function(e,t,n){e.exports=n.p+"static/media/s4_1.0392c9c6.mp3"},function(e,t,n){e.exports=n.p+"static/media/s4_10.31489083.mp3"},function(e,t,n){e.exports=n.p+"static/media/s4_2.fc63c56a.mp3"},function(e,t,n){e.exports=n.p+"static/media/s4_3.03a1916a.mp3"},function(e,t,n){e.exports=n.p+"static/media/s4_4.1572c20f.mp3"},function(e,t,n){e.exports=n.p+"static/media/s4_5.f386648a.mp3"},function(e,t,n){e.exports=n.p+"static/media/s4_6.ab563acd.mp3"},function(e,t,n){e.exports=n.p+"static/media/s4_7.62744ba7.mp3"},function(e,t,n){e.exports=n.p+"static/media/s4_8.bcb0d03f.mp3"},function(e,t,n){e.exports=n.p+"static/media/s4_9.b75fdf32.mp3"},function(e,t,n){e.exports=n.p+"static/media/sample_1-1.13028553.mp3"},function(e,t,n){e.exports=n.p+"static/media/sample_1-2.7650b135.mp3"},function(e,t,n){e.exports=n.p+"static/media/sample_1-3.8790d909.mp3"},function(e,t,n){e.exports=n.p+"static/media/sample_1-4.f9bb29ba.mp3"},function(e,t,n){e.exports=n.p+"static/media/sample_1-5.342b425b.mp3"},function(e,t,n){e.exports=n.p+"static/media/sample_2-1.a54a1452.mp3"},function(e,t,n){e.exports=n.p+"static/media/sample_2-2.91e0a60f.mp3"},function(e,t,n){e.exports=n.p+"static/media/sample_2-3.cbac8904.mp3"},function(e,t,n){e.exports=n.p+"static/media/sample_2-4.563c08ed.mp3"},function(e,t,n){e.exports=n.p+"static/media/sample_2-5.6922cc24.mp3"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a,o=n(7),s=n.n(o),i=n(41),c=n.n(i),r=(n(56),n(8)),p=(n(57),n(48)),u="https://stage-effect-server1.herokuapp.com",l=function(){!0,console.log("socket connect to server")},m=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a;void 0!==a&&n.on(e,t)},f=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a;n.emit(e,t)};function d(e,t){var n=Object(o.useRef)();Object(o.useEffect)((function(){n.current=e})),Object(o.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])}function h(e){var t=Object(o.useRef)();return Object(o.useEffect)((function(){t.current=e}),[e]),t.current}var b,g,v=n(0),_=n(1),x=n(2),O=n(3),y=n(17),j=n(18),k=n(43),E=n.n(k),S=(n(62),j.a.span(b||(b=Object(y.a)(["\n    margin: 1em;\n    width: 80%;\n    text-align: center;\n    min-height: 1.2em;\n    font-size: ",";\n    font-weight: ",";\n    ","\n    "])),(function(e){return void 0===e.fontSize?"3em":e.fontSize}),(function(e){return void 0===e.fontWeight?"200":e.fontWeight}),(function(e){return void 0===e.color?"":"color:"+e.color+";"}))),w=j.a.div(g||(g=Object(y.a)(["\n    margin: 0 auto;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    "])));var M,D=function(e){Object(x.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(v.a)(this,n),(a=t.call(this,e)).myRef=s.a.createRef(),a.state={siriWave:null},a}return Object(_.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.setState({siriWave:new E.a({container:this.myRef.current,style:"ios9",width:320,height:100,speed:.2,amplitude:.1,autostart:!0})}),setTimeout((function(){e.state.siriWave&&e.state.siriWave.setAmplitude(0)}),50)}},{key:"shouldComponentUpdate",value:function(e,t){return null!=this.state.siriWave&&(e.start!==this.props.start&&(e.start?this.state.siriWave.setAmplitude(1):this.state.siriWave.setAmplitude(0),!0))}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{ref:this.myRef}))}}]),n}(s.a.Component),C=function(e){var t="",n=0;return e.speakingVoice.length>0&&(e.speakingVoice.forEach((function(a){null!=a&&(a=JSON.parse(a)).name&&(n>10||"".concat(a.name," (").concat(a.lang,")")!==e.personName&&(++n>1&&(t+=10==n?" and ":", "),t+=a.name))})),n>0&&(t+=n>1?" are ":" is ",t+="speaking...")),s.a.createElement(w,null,s.a.createElement(S,{color:e.nameColor},e.personName),s.a.createElement(S,{color:"purple",fontSize:"2em",fontWeight:"300"},""===e.sentence?"":'"'.concat(e.sentence,'"')),s.a.createElement(S,{color:"gray",fontSize:"1.5em"},t),s.a.createElement(D,{start:""!==e.sentence}))},F=function(e){var t=e.show,n=e.speed,a=e.children;void 0===n&&(n="0.5s");var i=Object(o.useState)(t),c=Object(r.a)(i,2),p=c[0],u=c[1];Object(o.useEffect)((function(){t&&u(!0)}),[t]);return p&&s.a.createElement("div",{style:{animation:"".concat(t?"fadeIn":"fadeOut"," ").concat(n)},onAnimationEnd:function(){t||u(!1)}},a)},T=j.a.div(M||(M=Object(y.a)(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  display:flex;\n  justify-content: center;\n  align-items: center;\n  z-index: -10;\n  background: ",";  \n"])),(function(e){return void 0===e.bgColor?"white":e.bgColor})),N=new Set(["Amelie","Ioana","Joana","Laura","Sara","Xander","Jorge","Diego","Satu","Alice","Luciana","Mariska"]);new Set(["fr-CA","ro-RO","pt-PT","sk-SK","da-DK","nl-NL"]);function A(e){var t=e.onSubmitF,n=e.voiceIndex,a=e.voiceOnChanged,o=e.voices,i=e.pitch,c=e.rate,r=e.pitchOnChanged,p=e.rateOnChanged;return s.a.createElement("form",{onSubmit:t},s.a.createElement("select",{value:n,onChange:function(e){a(e.target.value)}},o.map((function(e,t){return s.a.createElement("option",{key:t,value:t},"".concat(e.name," (").concat(e.lang,")"))}))),s.a.createElement("br",null),s.a.createElement("label",{htmlFor:"pitch"},"pitch"),s.a.createElement("input",{type:"number",step:.01,value:i,onChange:function(e){r(e.target.value)},id:"pitch"}),s.a.createElement("br",null),s.a.createElement("label",{htmlFor:"rate"},"rate"),s.a.createElement("input",{type:"number",step:.01,value:c,onChange:function(e){p(e.target.value)},id:"rate"}),s.a.createElement("input",{type:"submit"}))}var I,R=function(e){var t=function(){var e=n.getVoices(),t="";console.log(e.length);for(var a=0;a<e.length;a++){for(;a<e.length&&(N.has(e[a].name)||e[a].name===t);)e.splice(a,1);a<e.length&&(t=e[a].name,e[a].default&&p(a))}return e},n=window.speechSynthesis,a=Object(o.useState)(0),i=Object(r.a)(a,2),c=i[0],p=i[1],u=Object(o.useState)((function(){return t()})),l=Object(r.a)(u,2),m=l[0],f=l[1],b=Object(o.useState)(1),g=Object(r.a)(b,2),v=g[0],_=g[1],x=Object(o.useState)(1),O=Object(r.a)(x,2),y=O[0],j=O[1],k=Object(o.useState)(!1),E=Object(r.a)(k,2),S=E[0],w=E[1],M=e.toSpeak,D=e.data,I=e.changeVoice,R=h(M),J=h(I),W=Object(o.useState)(""),U=Object(r.a)(W,2),V=U[0],L=U[1];Object(o.useEffect)((function(){M&&!S&&R!==M&&D.text&&(D.rate&&j(D.rate),D.pitch&&_(D.pitch),z(D.text,D.pitch?D.pitch:v,D.rate?D.rate:y))}),[M,D]),Object(o.useEffect)((function(){J!==I&&p(Math.floor(Math.random()*m.length))}),[I]),Object(o.useEffect)((function(){e.changeVoiceCallback({name:m[c].name,lang:m[c].lang})}),[c]),n.onvoiceschanged=function(){f(t())},d((function(){n.speaking||(e.speakOver(),w(!1),L(""))}),S?100:null);var B=function(e){w(!0),L(e);var t=new SpeechSynthesisUtterance(e);t.voice=m[c],t.pitch=v,t.rate=y,n.speak(t)},z=function(e,t,a){w(!0),L(e);var o=new SpeechSynthesisUtterance(e);o.voice=m[c],o.pitch=t,o.rate=a,n.speak(o)},H={onSubmitF:function(e){e.preventDefault(),B("hello")},voiceIndex:c,voiceOnChanged:p,voices:m,pitch:v,rate:y,pitchOnChanged:_,rateOnChanged:j},P=void 0!==m[c]?"".concat(m[c].name," (").concat(m[c].lang,")"):"";return s.a.createElement(s.a.Fragment,null,e.form&&s.a.createElement(A,H),s.a.createElement(C,{personName:P,sentence:V,speakingVoice:e.nowSpeak,nameColor:S?"black":"white"}),s.a.createElement(F,{show:S,speed:"0.3s"},s.a.createElement(T,null)))},J=n(24),W=n(46),U=n.n(W),V=n(16),L=n(47),B=(n(84),j.a.div(I||(I=Object(y.a)(["\n\tbackground: rgba(0,0,0,1);\n\tposition: absolute;\n\tmargin: 0;\n\ttop: 0px;\n\tleft: 0px;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: -1;\n"]))),function(e){Object(x.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(v.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={defaultProp:{easing:"easeInOutQuad",loop:2,duration:500,direction:"alternate",delay:0,endDelay:0,background:"rgba(0,0,0,1)"}},e}return Object(_.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return"follow"==e.data.mode&&e.opacity!=this.props.opacity||e.refresh!==this.props.refresh}},{key:"computeData",value:function(e){var t=0;return"color"in e&&(e.colorTemp=e.color),"alpha"in e&&(t=e.alpha),"follow"==e.mode&&(t=this.props.opacity),"background"in e||(e.direction="blink"==e.mode?"alternate":"normal",e.loop="light"==e.mode?e.loopTime:2*e.loopTime),e.background="rgba(".concat(e.colorTemp,",").concat(t,")"),delete e.loopTime,delete e.color,delete e.alpha,e}},{key:"genRgbStyle",value:function(e,t){var n=e,a=n.substring(5,n.length-1).split(","),o={stiffness:t,damping:30};return{style:{r:Object(V.spring)(parseFloat(a[0]),o),g:Object(V.spring)(parseFloat(a[1]),o),b:Object(V.spring)(parseFloat(a[2]),o),a:Object(V.spring)(parseFloat(a[3]),o)},motionFunc:this.rgbMotion}}},{key:"rgbMotion",value:function(e){var t=e.r,n=e.g,a=e.b,o=e.a;return s.a.createElement("div",{id:"lightBox",key:Date.now(),style:{background:"rgba(".concat(Math.floor(t),",").concat(Math.floor(n),",").concat(Math.floor(a),",").concat(o,")")}})}},{key:"genHslStyle",value:function(e){var t=e,n=t.substring(5,t.length-1).split(","),a={stiffness:80,damping:20},o=Object(L.rgbToHsl)(parseFloat(n[0]),parseFloat(n[1]),parseFloat(n[2])),s=o.h,i=o.s,c=o.l;return{style:{h:Object(V.spring)(s,a),s:Object(V.spring)(i,a),l:Object(V.spring)(c,a),a:Object(V.spring)(parseFloat(n[3]),a)},motionFunc:this.hslMotion}}},{key:"hslMotion",value:function(e){var t=e.h,n=e.s,a=e.l,o=e.a;return s.a.createElement("div",{id:"lightBox",key:Date.now(),style:{background:"hsla(".concat(360*t,",").concat(100*n,"%,").concat(100*a,"%,").concat(o,")")}})}},{key:"render",value:function(){var e=this.state.defaultProp,t=this.computeData(this.props.data),n=Object.assign(e,t),a=this.genRgbStyle(n.background,n.duration),o=a.style,i=a.motionFunc,c=s.a.createElement(V.Motion,{style:o},i),r=s.a.createElement(U.a,Object.assign({key:Date.now()},n),s.a.createElement("div",{id:"lightBox"}));return"blink"==n.mode?r:c}}]),n}(o.Component)),z=[],H=[],P=[];!function(){var e=n(85),t=0,a="";e.keys().forEach((function(n){n.slice(0,4)!==a&&(a=n.slice(0,4),z.push(t)),t++,H.push(e(n))})),z.push(t),console.log(z)}(),console.log("soundPreload",z[z.length-2]),H.forEach((function(e,t){var n=new J.b({url:e,fadeOut:t<z[4]?5:0,fadeIn:t<z[4]?5:0}).toMaster();P.push(n)}));var K=function(e){var t=Object(o.useState)(0),n=Object(r.a)(t,2),a=n[0],i=n[1],c=Object(o.useState)(!1),p=Object(r.a)(c,2),u=p[0],l=p[1],f=function(e){e.sound&&h(e.sound)};Object(o.useState)((function(){e.socket&&m("controlData",f)}));var d=function(){console.log("load Finished!")};Object(o.useEffect)((function(){J.a.onload=d}),[P]),Object(o.useEffect)((function(){e.stop&&g()}),[e.stop]),Object(o.useEffect)((function(){e.refresh!=u&&e.data&&"{}"!==JSON.stringify(e.data)&&h(e.data),l(e.refresh)}),[e.refresh]);var h=function(t){if(!e.stop)if(t.stop&&"*"!==t.stop)g();else{var n=-1;t.set&&t.set<z.length?(n=Math.floor(Math.random()*(z[t.set]-z[t.set-1])),n+=z[t.set-1]):"order"in t&&(t.orderTo&&t.orderTo>t.order?(n=Math.floor(Math.random()*(t.orderTo-t.order)),n+=t.order):n=t.order),n>=0?(b(),"volume"in t&&_(n,t.volume),"delayFix"in t?setTimeout((function(){v(n)}),t.delayFix):t.delay>0?setTimeout((function(){v(n)}),Math.floor(Math.random()*t.delay)):v(n)):"volume"in t&&P[a]&&"stopped"!==P[a].state&&_(a,t.volume)}},b=function(){P[a]&&P[a].loaded&&"stopped"!==P[a].state&&P[a].stop()},g=function(){P.forEach((function(e){void 0!==e&&e.loaded&&"stopped"!==e.state&&e.stop()})),i(0)},v=function(e){void 0!==P[e]&&(P[e].loaded?(console.log(e,"played!"),P[e].start(),i(e)):console.log(e+" not loaded!"))},_=function(e,t){P[e]&&P[e].loaded&&(P[e].volume.value=t)};return s.a.createElement(s.a.Fragment,null)},G=["255, 255, 255"],Q=function(){var e=Date.now();"undefined"!==typeof performance&&"function"===typeof performance.now&&(e+=performance.now());var t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===t?n:3&n|8).toString(16)}));return sessionStorage.setItem("StageEffectUUID",t),t},X=function(e){return JSON.parse(JSON.stringify(e))},$=function(e){Object(x.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(v.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={uuid:sessionStorage.getItem("StageEffectUUID")||Q(),refreshAnime:!1,refreshMusic:!1,socketData:{},lightData:{},soundData:{},opa:-1,opacity:0},e.setupBeforeUnloadListener=function(t){window.addEventListener("beforeunload",(function(n){return n.preventDefault(),t.emit("disconnected",{uuid:e.state.uuid}),n}))},e.clickButton=function(){"{}"!=JSON.stringify(e.state.soundData)&&e.setState((function(e){return{refreshMusic:!e.refreshMusic}})),"{}"!=JSON.stringify(e.state.lightData)&&e.setState((function(e){return{refreshAnime:!e.refreshAnime}}))},e}return Object(_.a)(n,[{key:"componentDidMount",value:function(){m("controlData",this.receiveControlData.bind(this))}},{key:"receiveControlData",value:function(e){var t=this.handleSocketData(e),n=t.light,a=t.sound;"{}"!==JSON.stringify(a)&&this.setState((function(e){return{soundData:X(a),refreshMusic:!e.refreshMusic}})),"{}"!==JSON.stringify(n)&&this.setState((function(e){return{soundData:X(a),lightData:X(n),refreshAnime:!e.refreshAnime}}))}},{key:"handleSocketData",value:function(e){var t="sound"in e&&"*"!==e.sound?e.sound:{},n="light"in e&&"*"!==e.light?this.handleLightData(e.light):{};return!("color"in n)&&"{}"!==JSON.stringify(n)&&"order"in t&&(n.color=G[t.order%G.length]),"color"in n&&"order"in t&&"*"===n.color&&(n.color=G[t.order%G.length]),"delay"in n&&"order"in t&&(t.delayFix=n.delay),"mode"in n&&"order"in t&&(t.mode=n.mode),"mode"in n&&"stop"in t&&"follow"===n.mode&&(n={}),{light:n,sound:t}}},{key:"handleLightData",value:function(e){return"none"===e.mode?{}:("color"in e&&"*"===e.color&&delete e.color,e.delay=Math.random()*e.delay,e)}},{key:"changeHandler",value:function(e){this.setState({opacity:e})}},{key:"render",value:function(){var e=this.state,t=e.refreshAnime,n=e.refreshMusic,a=e.lightData,o=e.soundData,i=e.opacity;return s.a.createElement("div",{id:"wrap"},s.a.createElement(F,{show:this.props.show},s.a.createElement(B,{refresh:t,data:a,opacity:i})),s.a.createElement(K,{stop:this.props.stop,refresh:n,data:o}))}}]),n}(o.Component);var q=function(e){var t=Object(o.useState)(!1),n=Object(r.a)(t,2),i=n[0],c=n[1],h=Object(o.useState)(-1),b=Object(r.a)(h,2),g=b[0],v=b[1],_=Object(o.useState)(!1),x=Object(r.a)(_,2),O=x[0],y=x[1],j=Object(o.useState)(!1),k=Object(r.a)(j,2),E=k[0],S=k[1],w=Object(o.useState)(!1),M=Object(r.a)(w,2),D=M[0],C=M[1],N=Object(o.useState)({}),A=Object(r.a)(N,2),I=A[0],J=A[1],W=Object(o.useState)(),U=Object(r.a)(W,2),V=U[0],L=U[1],B=Object(o.useState)(null),z=Object(r.a)(B,2),H=z[0],P=z[1],K=Object(o.useState)([]),G=Object(r.a)(K,2),Q=G[0],X=G[1];Object(o.useEffect)((function(){H&&q()}),[H]),Object(o.useEffect)((function(){!E&&V&&(console.log("emit voice!"),f("speakConfig",{mode:"changeVoice",voice:V}))}),[E,V]),Object(o.useState)((function(){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l;console.log("abcdefg"),console.log(u),console.log(e);var n=Object(p.a)(u+e);void 0===a&&(a=n),n.on("connect",t)}("/receiver",(function(){P(!0)})),m("disconnect",(function(){P(!1)})),m("debug",(function(e){console.log(e),"showForm"===e.mode&&C(e.value)})),m("speak",(function(e){i||(console.log("speak!",e),J(e),v(e.id),c(!0))})),m("speakConfig",(function(e){console.log(e),"changeVoice"===e.mode?q():"showForm"===e.mode?C(!0):"hideForm"===e.mode?C(!1):"nowSpeak"===e.mode&&X(e.data)}))})),d((function(){y(!O)}),E?100:null);var q=function(){S(!0),setTimeout((function(){S(!1)}),2e3)};return s.a.createElement(s.a.Fragment,null,s.a.createElement($,{show:H&&!i,stop:i}),s.a.createElement(F,{show:H},s.a.createElement(R,{toSpeak:i,data:I,speakOver:function(){c(!1),console.log("speak over",g),-1!==g&&f("speakOver",{id:g,voice:V})},changeVoice:O,changeVoiceCallback:function(e){L(e)},nowSpeak:Q,form:D})),s.a.createElement(F,{show:!1===H},s.a.createElement(T,{bgColor:"black"},s.a.createElement("span",null,"CONNECTING SERVER"))))};n(149);var Y=function(e){return s.a.createElement("div",{id:"LandpageWrapper"},s.a.createElement("button",{className:"selectBtn",onClick:e.select},"Start"))};var Z=function(){var e=Object(o.useState)(!0),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(o.useState)(!1),c=Object(r.a)(i,2),p=c[0],u=c[1];return s.a.createElement("div",null,s.a.createElement(F,{show:n},s.a.createElement(Y,{select:function(){a(!1),u(!0),window.speechSynthesis.speak(new SpeechSynthesisUtterance(""));var e=new J.c;e.oscillator.type="sine",e.toMaster(),e.triggerAttack("C4"),setTimeout((function(){e.triggerRelease()}),100)}})),s.a.createElement(F,{show:p},s.a.createElement(q,{start:p})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}]),[[51,1,2]]]);
//# sourceMappingURL=main.f9730a2e.chunk.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["SpeechControl"],{"1d32":function(e,t,n){},"1d7e":function(e,t,n){"use strict";n("1d32")},7275:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),c=Object(o["O"])("data-v-cf3bfc96");Object(o["w"])("data-v-cf3bfc96");var s={class:"pb15"},a=Object(o["j"])("div",{class:"pb10"},"捕获模式：",-1),l={class:"flex justify-content-center"},u={class:"mr10"},i=Object(o["i"])(" 自由捕获"),b={class:"mr10"},p=Object(o["i"])(" 按键捕获"),d={class:"mr10"},j=Object(o["i"])(" 禁止捕获"),g={class:"pb10"},h={class:"pb10"},r={class:"p-inputgroup"};Object(o["u"])();var m=c((function(e,t,n,m,O,f){var y=Object(o["B"])("RadioButton"),k=Object(o["B"])("Button"),T=Object(o["B"])("InputText"),v=Object(o["B"])("Panel");return Object(o["t"])(),Object(o["g"])("main",null,[Object(o["j"])(v,{header:"语音获取",class:"mb15"},{default:c((function(){return[Object(o["j"])("div",s,[a,Object(o["j"])("div",l,[Object(o["j"])("div",u,[Object(o["j"])("label",null,[Object(o["j"])(y,{name:"getType",value:"1",modelValue:O.getType,"onUpdate:modelValue":t[1]||(t[1]=function(e){return O.getType=e}),onChange:f.getTypeChange},null,8,["modelValue","onChange"]),i])]),Object(o["j"])("div",b,[Object(o["j"])("label",null,[Object(o["j"])(y,{name:"getType",value:"2",modelValue:O.getType,"onUpdate:modelValue":t[2]||(t[2]=function(e){return O.getType=e}),onChange:f.getTypeChange},null,8,["modelValue","onChange"]),p])]),Object(o["j"])("div",d,[Object(o["j"])("label",null,[Object(o["j"])(y,{name:"getType",value:"0",modelValue:O.getType,"onUpdate:modelValue":t[3]||(t[3]=function(e){return O.getType=e}),onChange:f.getTypeChange},null,8,["modelValue","onChange"]),j])])])]),Object(o["j"])("div",g,"状态："+Object(o["F"])(O.status),1),Object(o["j"])("div",h,[Object(o["L"])(Object(o["j"])(k,{label:O.label,onMousedown:f.speechStart,onMouseup:f.speechStop,class:{"p-button-help":O.mouseDownFlag}},null,8,["label","onMousedown","onMouseup","class"]),[[o["I"],"2"===O.getType]]),Object(o["L"])(Object(o["j"])(k,{label:"断句",onClick:f.breakMessage},null,8,["onClick"]),[[o["I"],"1"===O.getType]])]),Object(o["j"])("div",r,[Object(o["j"])(T,{placeholder:"捕获语音",modelValue:O.message,"onUpdate:modelValue":t[4]||(t[4]=function(e){return O.message=e})},null,8,["modelValue"]),Object(o["j"])(k,{label:"手动发送",onClick:f.sendByUser},null,8,["onClick"])])]})),_:1})])})),O=n("bb57"),f=n("8398"),y=n("b35c"),k=n("1e2d"),T=n("8055"),v=n.n(T),C={name:"SpeechControl",components:{Button:O["a"],InputText:f["a"],RadioButton:y["a"],Panel:k["a"]},data:function(){return{label:"按住说话",mouseDownFlag:!1,socket:null,status:"未启动",getType:"0",message:""}},mounted:function(){this.toSocket()},methods:{sendSpeechControlStatus:function(){this.socket.emit("sendSpeechControlStatus",{getType:this.getType})},getTypeChange:function(){this.sendSpeechControlStatus()},send:function(e){this.socket.emit("send",{message:e})},sendByUser:function(){this.send(this.message),this.message=""},speechStart:function(){this.label="松开闭麦",this.mouseDownFlag=!0,this.socket.emit("controlSpeech",!0)},speechStop:function(){this.label="按住说话",this.mouseDownFlag=!1,this.socket.emit("controlSpeech",!1)},breakMessage:function(){this.socket.emit("controlSpeech",!1)},toSocket:function(){var e=this;this.socket=v.a.connect("/socketchat"),this.socket.on("connect",(function(){console.log("已连接"),e.socket.emit("wantHomeStatus"),e.socket.on("getHomeStatus",(function(t){e.status=t.status,e.getType=t.getType}))})),this.socket.on("disconnect",(function(){console.log("已断开")}))}}};n("1d7e");C.render=m,C.__scopeId="data-v-cf3bfc96";t["default"]=C}}]);
//# sourceMappingURL=SpeechControl.1a1f8340.js.map
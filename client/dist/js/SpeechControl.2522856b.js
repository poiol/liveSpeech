(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["SpeechControl"],{"2d97":function(e,t,n){"use strict";n("a2aa")},7275:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),s=Object(o["O"])("data-v-0ddc6ffc");Object(o["w"])("data-v-0ddc6ffc");var c={class:"pb15"},l=Object(o["j"])("div",{class:"pb10"},"捕获模式：",-1),a={class:"flex justify-content-center"},u={class:"mr10"},i=Object(o["i"])(" 自由捕获"),p={class:"mr10"},d=Object(o["i"])(" 鼠标按住"),h={class:"mr10"},r=Object(o["i"])(" 鼠标移入"),b={class:"mr10"},j=Object(o["i"])(" 按住空格"),g={class:"mr10"},m=Object(o["i"])(" 禁止捕获"),y={class:"pb10"},O={class:"pb10"},f={class:"p-inputgroup"};Object(o["u"])();var k=s((function(e,t,n,k,S,v){var T=Object(o["B"])("RadioButton"),C=Object(o["B"])("Button"),w=Object(o["B"])("InputText"),F=Object(o["B"])("Panel");return Object(o["t"])(),Object(o["g"])("main",null,[Object(o["j"])(F,{header:"语音获取",class:"mb15"},{default:s((function(){return[Object(o["j"])("div",c,[l,Object(o["j"])("div",a,[Object(o["j"])("div",u,[Object(o["j"])("label",null,[Object(o["j"])(T,{name:"getType",value:"1",modelValue:S.getType,"onUpdate:modelValue":t[1]||(t[1]=function(e){return S.getType=e}),onChange:v.getTypeChange},null,8,["modelValue","onChange"]),i])]),Object(o["j"])("div",p,[Object(o["j"])("label",null,[Object(o["j"])(T,{name:"getType",value:"2",modelValue:S.getType,"onUpdate:modelValue":t[2]||(t[2]=function(e){return S.getType=e}),onChange:v.getTypeChange},null,8,["modelValue","onChange"]),d])]),Object(o["j"])("div",h,[Object(o["j"])("label",null,[Object(o["j"])(T,{name:"getType",value:"3",modelValue:S.getType,"onUpdate:modelValue":t[3]||(t[3]=function(e){return S.getType=e}),onChange:v.getTypeChange},null,8,["modelValue","onChange"]),r])]),Object(o["j"])("div",b,[Object(o["j"])("label",null,[Object(o["j"])(T,{name:"getType",value:"4",modelValue:S.getType,"onUpdate:modelValue":t[4]||(t[4]=function(e){return S.getType=e}),onChange:v.getTypeChange},null,8,["modelValue","onChange"]),j])]),Object(o["j"])("div",g,[Object(o["j"])("label",null,[Object(o["j"])(T,{name:"getType",value:"0",modelValue:S.getType,"onUpdate:modelValue":t[5]||(t[5]=function(e){return S.getType=e}),onChange:v.getTypeChange},null,8,["modelValue","onChange"]),m])])])]),Object(o["j"])("div",y,"状态："+Object(o["F"])(S.status),1),Object(o["j"])("div",O,[Object(o["L"])(Object(o["j"])(C,{label:S.label,onMousedown:v.speechStart,onMouseup:v.speechStop,class:{"p-button-help":S.mouseDownFlag}},null,8,["label","onMousedown","onMouseup","class"]),[[o["I"],"2"===S.getType]]),Object(o["L"])(Object(o["j"])(C,{label:"断句",onClick:v.breakMessage},null,8,["onClick"]),[[o["I"],"1"===S.getType]]),Object(o["L"])(Object(o["j"])(C,{label:"鼠标移入说话",onMouseenter:v.speechStart,onMouseleave:v.speechStop,class:{"p-button-help":S.mouseDownFlag}},null,8,["onMouseenter","onMouseleave","class"]),[[o["I"],"3"===S.getType]]),Object(o["L"])(Object(o["j"])(C,{label:"按住空格说话",onMouseenter:v.speechStart,onMouseleave:v.speechStop,class:{"p-button-help":S.mouseDownFlag}},null,8,["onMouseenter","onMouseleave","class"]),[[o["I"],"4"===S.getType]])]),Object(o["j"])("div",f,[Object(o["j"])(w,{placeholder:"捕获语音",modelValue:S.message,"onUpdate:modelValue":t[6]||(t[6]=function(e){return S.message=e}),onFocus:t[7]||(t[7]=function(e){return S.inputIsFocus=!0}),onBlur:t[8]||(t[8]=function(e){return S.inputIsFocus=!1})},null,8,["modelValue"]),Object(o["j"])(C,{label:"手动发送",onClick:v.sendByUser},null,8,["onClick"])])]})),_:1})])})),S=n("bb57"),v=n("8398"),T=n("b35c"),C=n("1e2d"),w=n("8055"),F=n.n(w),V={name:"SpeechControl",components:{Button:S["a"],InputText:v["a"],RadioButton:T["a"],Panel:C["a"]},data:function(){return{label:"按住说话",mouseDownFlag:!1,socket:null,status:"未启动",getType:"0",message:"",keypressFlag:!1,inputIsFocus:!1}},mounted:function(){this.toSocket(),this.initDocumentPress()},beforeUnmount:function(){document.removeEventListener("keydown",this.keydownSpeechStart),document.removeEventListener("keyup",this.keyupSpeechStop)},methods:{initDocumentPress:function(){document.addEventListener("keydown",this.keydownSpeechStart),document.addEventListener("keyup",this.keyupSpeechStop)},keydownSpeechStart:function(e){this.keypressFlag||32!==e.keyCode||this.inputIsFocus||(this.speechStart(),this.keypressFlag=!0)},keyupSpeechStop:function(e){this.keypressFlag&&32===e.keyCode&&!this.inputIsFocus&&(this.speechStop(),this.keypressFlag=!1)},sendSpeechControlStatus:function(){this.socket.emit("sendSpeechControlStatus",{getType:this.getType})},getTypeChange:function(){this.sendSpeechControlStatus()},send:function(e){this.socket.emit("send",{message:e})},sendByUser:function(){this.send(this.message),this.message=""},speechStart:function(){this.label="松开闭麦",this.mouseDownFlag=!0,this.socket.emit("controlSpeech",!0)},speechStop:function(){this.label="按住说话",this.mouseDownFlag=!1,this.socket.emit("controlSpeech",!1)},breakMessage:function(){this.socket.emit("controlSpeech",!1)},toSocket:function(){var e=this;this.socket=F.a.connect("/socketchat"),this.socket.on("connect",(function(){console.log("已连接"),e.socket.emit("wantHomeStatus"),e.socket.on("getHomeStatus",(function(t){e.status=t.status,e.getType=t.getType}))})),this.socket.on("disconnect",(function(){console.log("已断开")}))}}};n("2d97");V.render=k,V.__scopeId="data-v-0ddc6ffc";t["default"]=V},a2aa:function(e,t,n){}}]);
//# sourceMappingURL=SpeechControl.2522856b.js.map
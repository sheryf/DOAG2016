/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","ojs/ojeditablevalue","ojs/ojbutton"],function(a,f){a.ya("oj.ojInputNumber",f.oj.editableValue,{version:"1.0.0",defaultElement:"\x3cinput\x3e",widgetEventPrefix:"oj",options:{converter:a.qa.rm(a.Zj.CONVERTER_TYPE_NUMBER).createConverter(),max:null,min:null,placeholder:void 0,rawValue:void 0,readOnly:!1,step:1,value:null},getNodeBySubId:function(a){var d=this._superApply(arguments),c;d||(c=a.subId,"oj-inputnumber-up"===c&&(d=this.widget().find(".oj-inputnumber-up")[0]),
"oj-inputnumber-down"===c&&(d=this.widget().find(".oj-inputnumber-down")[0]),"oj-inputnumber-input"===c&&(d=this.widget().find(".oj-inputnumber-input")[0]));return d||null},getSubIdByNode:function(a){var d=null;null!=a&&(a===this.widget().find(".oj-inputnumber-up")[0]?d={subId:"oj-inputnumber-up"}:a===this.widget().find(".oj-inputnumber-down")[0]?d={subId:"oj-inputnumber-down"}:a===this.widget().find(".oj-inputnumber-input")[0]&&(d={subId:"oj-inputnumber-input"}));return d||this._superApply(arguments)},
refresh:function(){this._super();this.Ba()},stepDown:function(a){this.Y0(a,!1)},stepUp:function(a){this.Y0(a,!0)},widget:function(){return this.Mr},ae:function(b,d){var c=this.options,e=this;this._superApply(arguments);a.ze.al([{W:"disabled",xc:!0},{W:"placeholder"},{W:"value"},{W:"readonly",option:"readOnly",xc:!0},{W:"required",ef:!0,xc:!0},{W:"title"},{W:"min"},{W:"max"},{W:"step"}],d,this,function(a){for(var b=["value","step","min","max"],d=0;d<b.length;d++){var f=b[d],m=f in a?a[f]:c[f];null!=
m&&(a[f]="step"===f?e.Ax(m):e.Gk(f,m))}});if(void 0===c.value)throw Error("ojInputNumber has no value");if(null!=c.min&&null!=c.max&&c.max<c.min)throw Error("ojInputNumber's max must not be less than min");},_ComponentCreate:function(){var a=this.element;this._super();this.Aw();a.removeAttr("pattern");this.lY={};this.Ba();this._on(this.Pl);this._focusable(this.Mr);this.Up(this.Mr)},MQ:function(a,d,c){this._superApply(arguments);switch(a){case "min":case "max":this.Xg(a,this.options[a])}},_setOption:function(a,
d,c){var e;e="value"===a||"max"===a||"min"===a?this.Gk(a,d):"step"===a?this.Ax(d):d;this._super(a,e,c);if("max"===a||"min"===a)this.FU(),this.ks();"disabled"===a&&this.element.prop("disabled",!!d);"readOnly"===a&&(this.element.prop("readonly",!!d),this.RC("readOnly",this.options.readOnly),this.f_("readOnly",this.options.readOnly))},_destroy:function(){var b=this._super();this.tz.ojButton("destroy");this.By.ojButton("destroy");this.tz.remove();this.By.remove();this.By=this.tz=null;a.v.unwrap(this.element,
this.Mr);clearTimeout(this.bd);return b},Xg:function(a,d,c){this._superApply(arguments);var e="value"===a||"max"===a||"min"===a,f=e||"disabled"===a,h;f&&(h=this.HB());e&&this.nL(h);"converter"===a&&this.$Z(h);f&&this.LM(h)},Tc:function(){return this.options.converter?this._superApply(arguments):f.oj.ojInputNumber.prototype.options.converter},Iv:function(){var a=this._superApply(arguments);null==this.options.min&&null==this.options.max||this.FU();return f.extend(this.lY,a)},_GetDefaultStyleClass:function(){return"oj-inputnumber"},
Pl:{input:function(a){this.Dn(this.element.val(),a)},keydown:function(a){a.keyCode===f.ui.keyCode.ENTER?(this.CT(a),a.preventDefault()):this.Mh()&&this.Gq(a)&&a.preventDefault()},keyup:function(a){this.cy(a)},focus:function(){this.Qm=this.element.val()},blur:function(a){this.fN?delete this.fN:this.CT(a)},"mousedown .oj-inputnumber-button":function(a){function d(){this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.Qm=c,this._delay(function(){this.Qm=c}))}var c;c=this.element[0]===
this.document[0].activeElement?this.Qm:this.element.val();a.preventDefault();d.call(this);this.fN=!0;this._delay(function(){delete this.fN;d.call(this)});this.Mh();this.Tx(null,f(a.currentTarget).hasClass("oj-inputnumber-up")?1:-1,a)},"mouseup .oj-inputnumber-button":function(a){this.cy(a)},"mouseenter .oj-inputnumber-button":function(a){f(a.currentTarget).hasClass("oj-active")&&(this.Mh(),this.Tx(null,f(a.currentTarget).hasClass("oj-inputnumber-up")?1:-1,a))},"mouseleave .oj-inputnumber-button":function(a){this.cy(a)}},
va:{k$:"tooltipDecrement",l$:"tooltipIncrement"},Bn:{readOnly:"oj-read-only"},Ba:function(){var a=this.A(this.va.l$),d=this.A(this.va.k$),c=this.HB();this.tz.ojButton({label:a});this.By.ojButton({label:d});this.nL(c);this.LM(c);"boolean"===typeof this.options.readOnly&&this.element.prop("readonly",this.options.readOnly);this.RC("readOnly",this.options.readOnly);this.f_("readOnly",this.options.readOnly)},Nba:function(){this.tz=this.Mr.find(".oj-inputnumber-up").ojButton({display:"icons",icons:{start:"oj-component-icon oj-inputnumber-up-icon"}});
this.By=this.Mr.find(".oj-inputnumber-down").ojButton({display:"icons",icons:{start:"oj-component-icon oj-inputnumber-down-icon"}})},Aw:function(){var a=this.element,d=this.Mr=a.addClass("oj-inputnumber-input").wrap("\x3cspan class\x3d'oj-inputnumber-wrapper'\x3e\x3c/span\x3e").parent().append("\x3cbutton type\x3d'button' class\x3d'oj-inputnumber-button oj-inputnumber-down'\x3e\x3c/button\x3e\x3cbutton type\x3d'button' class\x3d'oj-inputnumber-button oj-inputnumber-up'\x3e\x3c/button\x3e").wrap("\x3cdiv class\x3d'oj-inputnumber oj-component'\x3e\x3c/div\x3e").parent();
this.saveType=a.prop("type");a.attr("type","text");d.find(".oj-inputnumber-button").attr("tabIndex","-1").attr("aria-hidden",!0);this.Nba()},Gq:function(a){var d=f.ui.keyCode;switch(a.keyCode){case d.UP:return this.Tx(null,1,a),!0;case d.DOWN:return this.Tx(null,-1,a),!0}return!1},tsa:function(){return"\x3cspan class\x3d'oj-inputnumber-wrapper'\x3e\x3c/span\x3e"},Qra:function(){return"\x3cbutton type\x3d'button' class\x3d'oj-inputnumber-button oj-inputnumber-down'\x3e\x3c/button\x3e\x3cbutton type\x3d'button' class\x3d'oj-inputnumber-button oj-inputnumber-up'\x3e\x3c/button\x3e"},
Mh:function(){return this.N5=!0},Tx:function(a,d,c){a=a||500;clearTimeout(this.bd);this.bd=this._delay(function(){this.Tx(40,d,c)},a);this.eM(d*this.options.step,c)},eM:function(a,d){var c=this.HB(),c=this.R$(c,a);this.gc(c,d,this.Uv.u7)},hja:function(){var a=this.options,d=a.min,a=this.HZ(a.step);null!=d&&(a=Math.max(a,this.HZ(d)));return a},HZ:function(a){a=a.toString();var d=a.indexOf(".");return-1===d?0:a.length-d-1},R$:function(a,d){var c,e,f=this.options,h=f.min,k=f.step,l=f.max,f=this.hja();
e=null!=h?h:0;c=a-e;var m=Math.round(c/k)*k,m=parseFloat(m.toFixed(f));m!==c?(c=0>d?Math.ceil(c/k)*k:Math.floor(c/k)*k,c=e+c+d):c=a+d;c=parseFloat(c.toFixed(f));return null!=h&&c<h?h:null!=l&&c>l?(h=Math.floor((l-e)/k)*k+e,h=parseFloat(h.toFixed(f))):c},cy:function(){this.N5&&(clearTimeout(this.bd),this.N5=!1)},LM:function(a){var d=this.options,c=d.min,e=d.max;if(this.Mr){var f=this.By,h=this.tz;d.disabled||void 0===a?(f.ojButton("disable"),h.ojButton("disable")):null!=e&&a>=e?(f.ojButton("enable"),
h.ojButton("disable")):(null!=c&&a<=c?f.ojButton("disable"):f.ojButton("enable"),h.ojButton("enable"))}},HB:function(){var a,d;try{d=this.kg()||0,a=this.MC(d)}catch(c){a=void 0}return a},CT:function(a){var d=this.element.val();this.cy();var c=this.HB();this.nL(c);this.LM(c);this.gc(d,a)},FU:function(){var b=this.options,d=b.min,c=b.max,e=(b=b.translations)?b.numberRange||{}:{},f,h,k,l,m,n,p,b=e.hint||{},r=e.messageDetail||{},e=e.messageSummary||{};null!==b&&(f=b.min||null,h=b.max||null,k=b.inRange||
null);null!==r&&(l=r.rangeOverflow||null,m=r.rangeUnderflow||null);null!==e&&(n=e.rangeOverflow||null,p=e.rangeUnderflow||null);d={min:null!=d?d:void 0,max:null!=c?c:void 0,hint:{min:f||null,max:h||null,inRange:k||null},messageDetail:{rangeOverflow:l||null,rangeUnderflow:m||null},messageSummary:{rangeOverflow:n||null,rangeUnderflow:p||null},converter:this.Tc()};this.lY[a.fd.VALIDATOR_TYPE_NUMBERRANGE]=a.qa.Or(a.fd.VALIDATOR_TYPE_NUMBERRANGE).createValidator(d)},Gk:function(a,d){var c;c=null!==d?+d:
d;if(isNaN(c))throw Error("ojInputNumber's "+a+" option is not a number");return c},Ax:function(a){if(null===a)return 1;a=this.Gk("step",a);if(0>=a)throw Error("Invalid step for ojInputNumber; step must be \x3e 0");if(null===a||0>=a)a=1;return a},RC:function(a,d){-1!=Object.keys(this.Bn).indexOf(a)&&this.widget().toggleClass(this.Bn[a],!!d)},f_:function(a,d){d?this.element.removeAttr("role"):this.element.attr("role","spinbutton")},nL:function(a){this.element.attr({"aria-valuemin":this.options.min,
"aria-valuemax":this.options.max,"aria-valuenow":a});this.$Z(a)},$Z:function(a){var d=this.element,c=d.val();this.Fv("value",""+a,c)||d.attr({"aria-valuetext":c})},Y0:function(a,d){this.Mh();d?this.eM((a||1)*this.options.step):this.eM((a||1)*-this.options.step);this.cy()}})});
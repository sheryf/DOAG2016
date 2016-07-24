/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojdatasource-common"],function(a,f){a.Te=function(b,a){this.Upa=b;this.$b=a};o_("EmptyNodeSet",a.Te,a);a.Te.prototype.getParent=function(){return this.Upa};a.b.g("EmptyNodeSet.prototype.getParent",{getParent:a.Te.prototype.getParent});a.Te.prototype.ta=function(){return this.$b};a.b.g("EmptyNodeSet.prototype.getStart",{ta:a.Te.prototype.ta});a.Te.prototype.R=function(){return 0};a.b.g("EmptyNodeSet.prototype.getCount",{R:a.Te.prototype.R});
a.Te.prototype.getData=function(){return null};a.b.g("EmptyNodeSet.prototype.getData",{getData:a.Te.prototype.getData});a.Te.prototype.getMetadata=function(){return null};a.b.g("EmptyNodeSet.prototype.getMetadata",{getMetadata:a.Te.prototype.getMetadata});a.Ue=function(b,a){this.Ab=b;this.$b=a};o_("FlattenedNodeSet",a.Ue,a);a.Ue.prototype.getParent=function(){return this.Ab.getParent()};a.b.g("FlattenedNodeSet.prototype.getParent",{getParent:a.Ue.prototype.getParent});a.Ue.prototype.ta=function(){return void 0!=
this.$b?this.$b:this.Ab.ta()};a.b.g("FlattenedNodeSet.prototype.getStart",{ta:a.Ue.prototype.ta});a.Ue.prototype.R=function(){void 0===this.xE&&(this.xE=this.gW(this.Ab,0),void 0!=this.$b&&(this.xE-=this.$b));return this.xE};a.b.g("FlattenedNodeSet.prototype.getCount",{R:a.Ue.prototype.R});a.Ue.prototype.gW=function(b,a){var c,e,f,h;c=b.ta();e=b.R();a+=e;if(b.Qf)for(f=0;f<e;f++)h=b.Qf(f+c),null!=h&&(a=this.gW(h,a));return a};a.Ue.prototype.getData=function(b){return this.WI(this.Ab,b,{index:this.Ab.ta()},
this.$a)};a.b.g("FlattenedNodeSet.prototype.getData",{getData:a.Ue.prototype.getData});a.Ue.prototype.getMetadata=function(b){return this.WI(this.Ab,b,{index:this.Ab.ta()},this.Qw)};a.b.g("FlattenedNodeSet.prototype.getMetadata",{getMetadata:a.Ue.prototype.getMetadata});a.Ue.prototype.Qw=function(b,a){return b.getMetadata(a)};a.Ue.prototype.$a=function(b,a){return b.getData(a)};a.Ue.prototype.WI=function(b,a,c,e){var f,h,k,l;f=b.ta();h=b.R();for(k=0;k<h;k++){l=c.index;if(l===a)return e.call(this,
b,k+f);c.index=l+1;if(b.Qf&&(l=b.Qf(k+f),null!=l&&(l=this.WI(l,a,c,e),null!=l)))return l}return null};a.Qg=function(b,a,c){this.Wo=b;this.HO=a;this.GO=this.sda(c)};o_("MergedNodeSet",a.Qg,a);a.Qg.prototype.sda=function(b){var a,c,e;a=this.Wo.ta();for(c=a+this.Wo.R();a<c;a++)if(e=this.Wo.getMetadata(a).key,b===e)return a;return c-1};a.Qg.prototype.getParent=function(){return this.Wo.getParent()};a.b.g("MergedNodeSet.prototype.getParent",{getParent:a.Qg.prototype.getParent});a.Qg.prototype.ta=function(){return this.Wo.ta()};
a.b.g("MergedNodeSet.prototype.getStart",{ta:a.Qg.prototype.ta});a.Qg.prototype.R=function(){return this.Wo.R()+this.HO.R()};a.b.g("MergedNodeSet.prototype.getCount",{R:a.Qg.prototype.R});a.Qg.prototype.getData=function(b){b=this.UW(b);return b.set.getData(b.index)};a.b.g("MergedNodeSet.prototype.getData",{getData:a.Qg.prototype.getData});a.Qg.prototype.getMetadata=function(b){b=this.UW(b);return b.set.getMetadata(b.index)};a.b.g("MergedNodeSet.prototype.getMetadata",{getMetadata:a.Qg.prototype.getMetadata});
a.Qg.prototype.UW=function(b){if(b<=this.GO)return{set:this.Wo,index:b};var a=this.HO.R();return b>this.GO+a?{set:this.Wo,index:b-a}:{set:this.HO,index:b-(this.GO+1)}};a.Xe=function(b,a,c,e){this.Ab=b;this.Rj=a;this.Qu=c;this.Pi=e};o_("NodeSetWrapper",a.Xe,a);a.Xe.prototype.getParent=function(){return this.Ab.getParent()};a.b.g("NodeSetWrapper.prototype.getParent",{getParent:a.Xe.prototype.getParent});a.Xe.prototype.ta=function(){return null!=this.Qu?this.Qu.start:this.Ab.ta()};a.b.g("NodeSetWrapper.prototype.getStart",
{ta:a.Xe.prototype.ta});a.Xe.prototype.R=function(){var b,a;b=this.Ab.ta();a=this.Ab.R();null!=this.Qu&&(this.Qu.start>b?a=Math.min(0,a-(this.Qu.start-b)):this.Qu.start<b&&(a=0));return a};a.b.g("NodeSetWrapper.prototype.getCount",{R:a.Xe.prototype.R});a.Xe.prototype.getData=function(b){return this.Ab.getData(b)};a.b.g("NodeSetWrapper.prototype.getData",{getData:a.Xe.prototype.getData});a.Xe.prototype.getMetadata=function(b){var a;a=this.Ab.getMetadata(b);a.index=b;a.parentKey=this.getParent();this.Rj.call(null,
a.key,a);return a};a.b.g("NodeSetWrapper.prototype.getMetadata",{getMetadata:a.Xe.prototype.getMetadata});a.Xe.prototype.Qf=function(b){return null!=this.Pi&&-1!=this.Pi.indexOf(this.Ab.getMetadata(b).key)||!this.Ab.Qf||(b=this.Ab.Qf(b),null==b)?null:new a.Xe(b,this.Rj,null,this.Pi)};a.b.g("NodeSetWrapper.prototype.getChildNodeSet",{Qf:a.Xe.prototype.Qf});a.ca=function(b,d){this.Dd=b;this.fz=d||{};a.ca.r.constructor.call(this)};o_("FlattenedTreeDataSource",a.ca,a);a.b.ga(a.ca,a.Xi,"oj.FlattenedTreeDataSource");
a.ca.prototype.Init=function(){var b;a.ca.r.Init.call(this);this.Dd.on("change",this.fga.bind(this));this.BO=parseInt(this.fz.fetchSize,10);isNaN(this.BO)&&(this.BO=25);this.xr=parseInt(this.fz.maxCount,10);isNaN(this.xr)&&(this.xr=500);b=this.fz.expanded;Array.isArray(b)?this.Hm=b:("all"===b&&(this.Pi=[]),this.Hm=[]);this.Gm=[]};a.b.g("FlattenedTreeDataSource.prototype.Init",{Init:a.ca.prototype.Init});a.ca.prototype.handleEvent=function(b,d){return a.ca.r.handleEvent.call(this,b,d)};a.b.g("FlattenedTreeDataSource.prototype.handleEvent",
{handleEvent:a.ca.prototype.handleEvent});a.ca.prototype.Se=function(){delete this.Gm;delete this.Hm;delete this.Pi;this.Dd.off("change");this.Dd.Se&&this.Dd.Se()};a.b.g("FlattenedTreeDataSource.prototype.Destroy",{Se:a.ca.prototype.Se});a.ca.prototype.MN=function(){return this.BO};a.ca.prototype.g3=function(){return this.Hm};a.b.g("FlattenedTreeDataSource.prototype.getExpandedKeys",{g3:a.ca.prototype.g3});a.ca.prototype.Jy=function(b){return null!=this.fz?this.fz[b]:null};a.b.g("FlattenedTreeDataSource.prototype.getOption",
{Jy:a.ca.prototype.Jy});a.ca.prototype.getWrappedDataSource=function(){return this.Dd};a.b.g("FlattenedTreeDataSource.prototype.getWrappedDataSource",{getWrappedDataSource:a.ca.prototype.getWrappedDataSource});a.ca.prototype.$I=function(b){var a,c;a=this.MN();c=this.xr;return-1===a?-1===b?c:b:-1===b?Math.min(a,b):a};a.ca.prototype.No=function(b,a){this.Jt()?this.nda(b,a):this.mda(b,a)};a.ca.prototype.mda=function(b,d){var c,e,f,h,k,l;if(b.start>this.Je()){c=this.kJ();if(0>this.Je()){b.count=Math.min(c,
b.count);this.Dd.Nf(null,b,{success:function(a){this.bo(a,null,0,b,0,d)}.bind(this),error:function(b){this.Yl(b,d)}.bind(this)});return}if(0<c){e=this.AW();f=e.parent;h=this.Dd.ff(f);k=e.index;l=e.depth;-1===h||k<h-1?(e=this.$I(h),b.start=k+1,b.count=-1===h?e:Math.min(c,Math.min(e,h-b.start)),this.Dd.Nf(f,b,{success:function(a){this.bo(a,f,l,b,h,d)}.bind(this),error:function(b){this.Yl(b,d)}.bind(this)})):k===h-1?(c=new a.Te(null,b.start),null!=d&&null!=d.success&&d.success.call(null,c)):(c=this.EV(f,
l,d,c),c||(c=new a.Te(null,b.start),null!=d&&null!=d.success&&d.success.call(null,c)));return}}this.ZN(b,d)};a.ca.prototype.rd=function(b,a,c){return this.Dd.rd(b,a,c)};a.b.g("FlattenedTreeDataSource.prototype.moveOK",{rd:a.ca.prototype.rd});a.ca.prototype.move=function(b,a,c,e){this.Dd.move(b,a,c,e)};a.b.g("FlattenedTreeDataSource.prototype.move",{move:a.ca.prototype.move});a.ca.prototype.kJ=function(){return this.xr-(this.Je()+1)};a.ca.prototype.Yl=function(b,a){null!=a&&null!=a.error&&a.error.call(null,
b)};a.ca.prototype.bo=function(b,d,c,e,f,h){var k;k=[];b=new a.Xe(b,this.Qy.bind(this),e);this.sja(b,d,c,k);-1===f&&0===b.R()&&null!=d&&0<c?(k=this.EV(d,c,h))||null!=h&&null!=h.success&&h.success.call(null,b):0===k.length?null!=h&&null!=h.success&&h.success.call(null,b):(d=[],d.push(k),k={},k.callbacks=h,k.nodeSet=b,k.keys=[],this.e1(d,k))};a.ca.prototype.ff=function(b){return this.Dd.ff(b)};a.b.g("FlattenedTreeDataSource.prototype.getChildCount",{ff:a.ca.prototype.ff});a.ca.prototype.EV=function(b,
a,c,e){var f,h,k,l,m,n,p,r,s;void 0===e&&(e=this.kJ());this.tha()&&(f={queueOnly:!0});h=s=this.$I(-1);for(k=this.Je()-1;0<=k;k--)if(l=this.ah(k),m=l.depth,m<a&&(b=l.parent,n=this.Dd.ff(b),l=l.index,(p=-1===n)||l<n-1)){r={};r.start=l+1;p?(r.count=Math.min(e,Math.max(0,h)),f=void 0):r.count=Math.min(e,Math.min(h,n-r.start));if(0==r.count)break;this.Dd.Nf(b,r,{success:function(a){this.bo(a,b,m,r,n,c)}.bind(this),error:function(b){this.Yl(b,c)}.bind(this)},f);a=m;h=Math.max(0,h-r.count);if(p||0===m||
0===h)break}void 0!=f&&this.Dd.Nf(b,{start:r.count,count:0},{success:function(a){this.bo(a,b,m,r,n,c)}.bind(this),error:function(b){this.Yl(b,c)}.bind(this)});return h!=s};a.ca.prototype.sja=function(b,a,c,e){var f,h,k,l;f=b.ta();h=b.R();for(k=0;k<h;k++)l=b.getMetadata(f+k),l=l.key,this.BA(l,c,f+k,a),this.gx(l)&&e.push(l)};a.ca.prototype.Qy=function(b,a){this.gx(b)&&!a.leaf?a.state="expanded":a.state=a.leaf?"leaf":"collapsed"};a.ca.prototype.nda=function(b,a){var c={maxCount:this.xr};0<=this.Je()&&
(c.start=this.ah(this.Je()).key);this.Dd.Eu(null,{success:function(c){this.Ofa(c,b,a)}.bind(this),error:function(b){this.Yl(b,a)}.bind(this)},c)};a.ca.prototype.Am=function(){return this.Dd.Am()};a.b.g("FlattenedTreeDataSource.prototype.getSortCriteria",{Am:a.ca.prototype.Am});a.ca.prototype.Ofa=function(b,d,c){var e,f,h;d.start>this.Je()?(e=this.kJ(),f=Math.min(e,d.count),b=new a.Xe(b,this.Qy.bind(this),null,this.Pi),0<=this.Je()?(h=this.AW(),e={index:0,found:!1,count:0},this.fL(b,null,0,h,f,e),
f=e.index+1):(e={count:0},this.fL(b,null,0,null,f,e),f=0),null!=c&&null!=c.success&&(b=null!=e?0===e.count?new a.Te(null,d.start):new a.Ue(b,f):new a.Ue(b),c.success.call(null,b))):this.ZN(d,c)};a.ca.prototype.fL=function(b,a,c,e,f,h){var k,l,m,n,p;k=b.ta();l=b.R();for(m=0;m<l&&h.count!=f;m++){n=b.getMetadata(k+m);p=n.key;h.checkDepth&&e.depth===c&&(h.found=!0,h.checkDepth=!1);if(null==e||h.found)this.BA(p,c,k+m,a),h.count+=1,n.state=n.leaf?"leaf":"expanded";null==e||h.found||(p===e.key?n.leaf||this.gx(p)?
h.found=!0:h.checkDepth=!0:h.index+=1);b.Qf&&this.gx(p)&&(n=b.Qf(m),null!=n&&this.fL(n,p,c+1,e,f,h))}};a.ca.prototype.expand=function(b){this.ee(b)};a.b.g("FlattenedTreeDataSource.prototype.expand",{expand:a.ca.prototype.expand});a.ca.prototype.ee=function(b,d){var c,e,f,h;c=this.Dd.ff(b);e=this.$I(c);f=this.xr;if(this.Je()+1===f&&(h=this.Mi(b),h==f-1)){this.YN(b,new a.Te(b,0),0,d);return}0==e?this.YN(b,new a.Te(b,0),0,d):this.Dd.Nf(b,{start:0,count:e},{success:function(a){this.YN(b,a,c,d)}.bind(this),
error:function(){this.epa(b)}.bind(this)})};a.ca.prototype.collapse=function(b){var a,c,e,f,h;a=this.Mi(b)+1;c=this.ah(a-1);e=0;c=c.depth;f=this.Je();for(h=a;h<f+1;h++){var k=this.ah(h).depth;if(k>c)e+=1;else if(k==c)break}if(0!=e){this.Jt()?this.Pi.push(b):this.jka(b);f=[];for(c=0;c<e;c++)f.push({key:this.ah(a+c).key,index:a+c});this.v_(a,e);this.QE(f)}this.handleEvent("collapse",{rowKey:b})};a.b.g("FlattenedTreeDataSource.prototype.collapse",{collapse:a.ca.prototype.collapse});a.ca.prototype.gx=
function(b){return this.Jt()?this.Pi&&0<this.Pi.length?-1===this.ZV(b):!0:this.Hm&&0<this.Hm.length?-1<this.mW(b):!1};a.ca.prototype.ZV=function(b){return this.yW(this.Pi,b)};a.ca.prototype.mW=function(b){return this.yW(this.Hm,b)};a.ca.prototype.yW=function(b,a){var c,e;e=-1;for(c=0;c<b.length;c++)b[c]===a&&(e=c);return e};a.ca.prototype.jka=function(b){b=this.mW(b);-1<b&&this.Hm.splice(b,1)};a.ca.prototype.dka=function(b){b=this.ZV(b);-1<b&&this.Pi.splice(b,1)};a.ca.prototype.epa=function(b){this.handleEvent("expand",
{rowKey:b})};a.ca.prototype.YN=function(b,d,c,e){var f,h,k,l,m,n,p,r,s,q,t;d=new a.Xe(d,this.Qy.bind(this));h=f=this.Mi(b)+1;k=d.ta();l=d.R();m=this.ah(f-1);n=m.depth+1;r=[];for(s=k;s<l;s++)k=d.getMetadata(s),p=k.key,this.gx(p)&&r.push(p),this.nY(f,k,m.key,s,n),f++;this.Jt()?this.dka(b):-1===this.Hm.indexOf(b)&&this.Hm.push(b);void 0!=e&&(q=e.queue,t=e.prevNodeSetInfo);void 0!=t&&(d=new a.Qg(t.nodeSet,d,b));if(0!=r.length||void 0!==q&&0!=q.length)void 0===q&&(q=[]),0<r.length&&q.push(r),void 0===
t&&(t={},t.firstIndex=h,t.firstKey=b,t.keys=[]),t.nodeSet=d,t.keys.push(b),this.e1(q,t);else{if(void 0!=t){e=t.callbacks;if(null!=e){e.success.call(null,d);return}this.rE(t.firstIndex,t.firstKey,d)}else this.rE(h,b,d);d=this.xr;-1===c&&l===this.MN()||c>l||f==d?this.kI(f):this.Je()>=d&&this.kI(d);if(void 0!=t)for(c=0;c<t.keys.length;c++)this.handleEvent("expand",{rowKey:t.keys[c]});this.handleEvent("expand",{rowKey:b})}};a.ca.prototype.e1=function(b,a){var c,e;c=b[b.length-1];e=c.shift();0===c.length&&
b.pop();this.ee(e,{prevNodeSetInfo:a,queue:b})};a.ca.prototype.nY=function(b,a,c,e,f){a=a.key;b<=this.Je()?this.BA(a,f,e,c,b):this.BA(a,f,e,c)};a.ca.prototype.kI=function(b,a){var c;void 0==a&&(a=this.Je()+1-b);c=[];for(var e=0;e<a;e++)c.push({row:this.ah(b+e).key,index:b+e});this.v_(b,a);this.QE(c)};a.ca.prototype.fga=function(b){var a,c,e;a=b.operation;c=b.parent;c=Array.isArray(c)?c[c.length-1]:c;e=b.index;"insert"===a?this.Tfa(c,e,b.data):"delete"===a?this.Cfa(c,e):"refresh"===a&&this.nga(c)};
a.ca.prototype.Tfa=function(b,a,c){var e,f;e=this.Mi(b);f=this.ah(e).depth+1;e=e+a+1;c=c.getMetadata(c.ta());this.nY(e,c,b,a,f)};a.ca.prototype.Cfa=function(b,d){var c,e,f,h,k;c=this.Mi(b);e=this.ah(c);c+=d;f=this.ah(c);a.l.assert(f.parent===e&&f.depth===e.depth+1);e=c+1;for(h=this.Je();e<=h;){k=this.ah(e);if(k.depth!=f.depth)break;e++}this.kI(c,1)};a.ca.prototype.nga=function(b){null==b&&this.refresh()};a.ca.prototype.Jt=function(){var b=this.Dd.getCapability("fetchDescendants");return void 0!=this.Pi&&
null!=b&&"disable"!=b};a.ca.prototype.tha=function(){return"enable"===this.Dd.getCapability("batchFetch")};a.ca.prototype.refresh=function(){this.Xaa()};a.ca.prototype.Mi=function(b){var a,c,e;a=this.Je();for(c=0;c<=a;c++)if(e=this.ah(c),e.key==b)return c;return-1};a.ca.prototype.getKey=function(b){return 0>b||b>this.Je()?null:this.ah(b).key};a.ca.prototype.Hoa=function(){return{start:0,end:this.Je()+1}};a.ca.prototype.Coa=function(b){var a;a=[];b=this.Mi(b);for(b=this.tj(b);null!=b;)a.push(b),b=
this.Mi(b),b=this.tj(b);return a.reverse()};a.ca.prototype.ZN=function(b,a){null!=a&&null!=a.error&&a.error.call(null)};a.ca.prototype.rE=function(){a.l.Yb()};a.ca.prototype.QE=function(){a.l.Yb()};a.ca.prototype.Je=function(){return this.Gm.length-1};a.ca.prototype.AW=function(){return this.Gm[this.Je()]};a.ca.prototype.ah=function(b){return this.Gm[b]};a.ca.prototype.tj=function(b){b=this.Gm[b];return null!=b?b.parent:null};a.ca.prototype.BA=function(b,a,c,e,f){var h={};h.key=b;h.depth=a;h.index=
c;h.parent=e;void 0===f?this.Gm.push(h):this.Gm.splice(f,0,h)};a.ca.prototype.v_=function(b,a){this.Gm.splice(b,a)};a.ca.prototype.Xaa=function(){this.Gm.length=0};a.ca.prototype.getCapability=function(b){return this.Dd.getCapability(b)};a.b.g("FlattenedTreeDataSource.prototype.getCapability",{getCapability:a.ca.prototype.getCapability});a.ya("oj.ojRowExpander",f.oj.baseComponent,{version:"1.0.0",widgetEventPrefix:"oj",options:{context:null,expand:null,collapse:null},Sk:{root:"oj-rowexpander",icon:"oj-component-icon",
clickable:"oj-clickable-icon-nocontext",expand:"oj-rowexpander-expand-icon",collapse:"oj-rowexpander-collapse-icon",leaf:"oj-rowexpander-leaf-icon",lazyload:"oj-rowexpander-lazyload-icon",toucharea:"oj-rowexpander-touch-area",indent:"oj-rowexpander-indent",iconspacer:"oj-rowexpander-icon-spacer",depth0:"oj-rowexpander-depth-0",depth1:"oj-rowexpander-depth-1",depth2:"oj-rowexpander-depth-2",depth3:"oj-rowexpander-depth-3",depth4:"oj-rowexpander-depth-4",depth5:"oj-rowexpander-depth-5",depth6:"oj-rowexpander-depth-6",
depth7:"oj-rowexpander-depth-7"},Au:{ov:7,f7:53},_ComponentCreate:function(){this._super();this.element.addClass(this.Sk.root);this.aY()},aY:function(){var b=this,a;a=this.options.context;this.O="function"===typeof a.component?a.component("instance"):a.component;this.lc=a.datasource;this.depth=a.depth;this.Th=a.state;this.Rm=a.key;this.index=a.index;this.HE=a.parentKey;this.G$();this.F$();this.dD();"expanded"===this.Th||"collapsed"===this.Th?(f(this.rP).on("touchend",function(a){a.preventDefault();
b.MI()}),f(this.rP).on("click",function(a){a.preventDefault();b.MI()}),f(this.element).on("keypress",function(a){var d=a.keyCode||a.which;if(d===f.ui.keyCode.ENTER||d===f.ui.keyCode.SPACE)b.MI(),a.preventDefault(),a.target.focus()}),this.pE=this.zX.bind(this),f(this.O.element).on("ojkeydown",this.pE),this.S3=this.Mfa.bind(this),this.R3=this.tfa.bind(this),this.lc.on("expand",this.S3,this),this.lc.on("collapse",this.R3,this)):"leaf"===this.Th&&(this.pE=this.zX.bind(this),f(this.O.element).on("ojkeydown",
this.pE),f(this.icon).attr("tabindex",-1));this.Q3=this.ifa.bind(this);f(this.O.element).on("ojbeforecurrentcell",this.Q3)},refresh:function(){this.element.empty();this.aY()},_destroy:function(){f(this.O.element).off("ojkeydown",this.pE);f(this.O.element).off("ojbeforecurrentcell",this.Q3);this.lc.off("expand",this.S3,this);this.lc.off("collapse",this.R3,this);this.element.removeClass(this.Sk.root);this.element.empty()},_setOption:function(b,a,c){this._super(b,a,c);"context"==b&&this.refresh()},G$:function(){var b,
a;a=this.depth-1;if(a<this.Au.ov)this.dH(a);else{for(b=1;b<=a/this.Au.ov;b++)this.dH(this.Au.ov);b=a%this.Au.ov;b<this.Au.ov&&this.dH(b)}},dH:function(b){b=f(document.createElement("span")).addClass(this.Sk.indent).addClass(this.Sk["depth"+b]);this.element.append(b)},F$:function(){var b=f(document.createElement("div")).addClass(this.Sk.iconspacer);this.rP=f(document.createElement("div")).addClass(this.Sk.toucharea);this.icon=f(document.createElement("a")).attr("href","#").attr("aria-labelledby",this.zW()).addClass(this.Sk.icon).addClass(this.Sk.clickable);
this.element.append(b.append(this.rP.append(this.icon)))},Vp:function(b){this.icon.addClass(this.Sk[b])},Pq:function(b){this.icon.removeClass(this.Sk[b])},dD:function(){switch(this.Th){case "leaf":this.Pq("icon");this.Pq("clickable");this.Vp("leaf");break;case "collapsed":this.Vp("expand");this.HA(!1);break;case "expanded":this.Vp("collapse");this.HA(!0);break;case "loading":this.Pq("clickable"),this.Vp("lazyload")}},sL:function(){switch(this.Th){case "leaf":this.Pq("leaf");this.Vp("icon");this.Vp("clickable");
break;case "collapsed":this.Pq("expand");break;case "expanded":this.Pq("collapse");break;case "loading":this.Pq("lazyload"),this.Vp("clickable")}},ifa:function(b,a){var c,e;null!=a.currentCell&&(c="cell"==a.currentCell.type?a.currentCell.keys.row:a.currentCell.key,null!=a.previousValue&&(e="cell"==a.previousCurrentCell.type?a.previousCurrentCell.keys.row:a.previousCurrentCell.key),this.Rm===c&&e!=c&&this.O.$C&&(c=this.A("accessibleRowDescription",{level:this.depth,num:this.index+1,total:this.lc.getWrappedDataSource().ff(this.HE)}),
e="collapsed"===this.Th?this.A("accessibleStateCollapsed"):"expanded"===this.Th?this.A("accessibleStateExpanded"):"",this.O.$C({context:c,state:e})))},zX:function(b,d){var c,e,g;if(this.Rm===d.rowKey&&(b=b.originalEvent,c=b.keyCode||b.which,a.v.Fm(b)))if(c==f.ui.keyCode.RIGHT&&"collapsed"===this.Th)this.HK(),this.lc.expand(this.Rm),b.preventDefault();else if(c==f.ui.keyCode.LEFT&&"expanded"===this.Th)this.HK(),this.lc.collapse(this.Rm),b.preventDefault();else if(b.altKey&&c==this.Au.f7&&this.O.$C){c=
this.lc.Coa(this.Rm);if(null!=c&&0<c.length)for(e=[],g=0;g<c.length;g++)e.push({key:c[g],label:this.A("accessibleLevelDescription",{level:g+1})});c=this.A("accessibleRowDescription",{level:this.depth,num:this.index+1,total:this.lc.getWrappedDataSource().ff(this.HE)});this.O.$C({context:c,state:"",ancestors:e});b.preventDefault()}},HK:function(){this.sL();this.Th="loading";this.dD()},Mfa:function(b){b=b.rowKey;b===this.Rm&&(this.sL(),this.Th="expanded",this.dD(),this.HA(!0),this._trigger("expand",
null,{rowKey:b}))},tfa:function(b){b=b.rowKey;b===this.Rm&&(this.sL(),this.Th="collapsed",this.dD(),this.HA(!1),this._trigger("collapse",null,{rowKey:b}))},MI:function(){var b=this.Th;this.HK();"collapsed"===b?this.lc.expand(this.Rm):"expanded"===b&&this.lc.collapse(this.Rm)},HA:function(b){this.icon.attr("aria-expanded",b)},getNodeBySubId:function(b){if(null==b)return this.element?this.element[0]:null;b=b.subId;return"oj-rowexpander-disclosure"!==b&&"oj-rowexpander-icon"!==b||null==this.icon?null:
this.icon.get(0)},getSubIdByNode:function(b){return b===this.icon.get(0)?{ata:"oj-rowexpander-disclosure"}:null},wn:function(){this._super();this.icon.attr("aria-labelledby",this.zW())},zW:function(){return this.element.parent().closest("[id]").attr("id")}})});
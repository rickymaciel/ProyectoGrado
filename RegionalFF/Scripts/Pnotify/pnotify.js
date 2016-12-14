!function(a,b){"function"==typeof define&&define.amd?define("pnotify",["jquery"],function(c){return b(c,a)}):"object"==typeof exports&&"undefined"!=typeof module?module.exports=b(require("jquery"),global||a):a.PNotify=b(a.jQuery,a)}(this,function(a,b){var c=function(b){var e,f,d={dir1:"down",dir2:"left",push:"bottom",spacing1:36,spacing2:36,context:a("body"),modal:!1},g=a(b),h=function(){f=a("body"),j.prototype.options.stack.context=f,g=a(b),g.bind("resize",function(){e&&clearTimeout(e),e=setTimeout(function(){j.positionAll(!0)},4)})},i=function(b){var c=a("<div />",{class:"ui-pnotify-modal-overlay"});return c.prependTo(b.context),b.overlay_close&&c.click(function(){j.removeStack(b)}),c},j=function(a){this.parseOptions(a),this.init()};return a.extend(j.prototype,{version:"3.0.0",options:{title:!1,title_escape:!1,text:!1,text_escape:!1,styling:"brighttheme",addclass:"",cornerclass:"",auto_display:!0,width:"300px",min_height:"16px",type:"notice",icon:!0,animation:"fade",animate_speed:"normal",shadow:!0,hide:!0,delay:8e3,mouse_reset:!0,remove:!0,insert_brs:!0,destroy:!0,stack:d},modules:{},runModules:function(a,b){var c;for(var d in this.modules)c="object"==typeof b&&d in b?b[d]:b,"function"==typeof this.modules[d][a]&&(this.modules[d].notice=this,this.modules[d].options="object"==typeof this.options[d]?this.options[d]:{},this.modules[d][a](this,"object"==typeof this.options[d]?this.options[d]:{},c))},state:"initializing",timer:null,animTimer:null,styles:null,elem:null,container:null,title_container:null,text_container:null,animating:!1,timerHide:!1,init:function(){var b=this;return this.modules={},a.extend(!0,this.modules,j.prototype.modules),"object"==typeof this.options.styling?this.styles=this.options.styling:this.styles=j.styling[this.options.styling],this.elem=a("<div />",{class:"ui-pnotify "+this.options.addclass,css:{display:"none"},"aria-live":"assertive","aria-role":"alertdialog",mouseenter:function(a){if(b.options.mouse_reset&&"out"===b.animating){if(!b.timerHide)return;b.cancelRemove()}b.options.hide&&b.options.mouse_reset&&b.cancelRemove()},mouseleave:function(a){b.options.hide&&b.options.mouse_reset&&"out"!==b.animating&&b.queueRemove(),j.positionAll()}}),"fade"===this.options.animation&&this.elem.addClass("ui-pnotify-fade-"+this.options.animate_speed),this.container=a("<div />",{class:this.styles.container+" ui-pnotify-container "+("error"===this.options.type?this.styles.error:"info"===this.options.type?this.styles.info:"success"===this.options.type?this.styles.success:this.styles.notice),role:"alert"}).appendTo(this.elem),""!==this.options.cornerclass&&this.container.removeClass("ui-corner-all").addClass(this.options.cornerclass),this.options.shadow&&this.container.addClass("ui-pnotify-shadow"),this.options.icon!==!1&&a("<div />",{class:"ui-pnotify-icon"}).append(a("<span />",{class:this.options.icon===!0?"error"===this.options.type?this.styles.error_icon:"info"===this.options.type?this.styles.info_icon:"success"===this.options.type?this.styles.success_icon:this.styles.notice_icon:this.options.icon})).prependTo(this.container),this.title_container=a("<h4 />",{class:"ui-pnotify-title"}).appendTo(this.container),this.options.title===!1?this.title_container.hide():this.options.title_escape?this.title_container.text(this.options.title):this.title_container.html(this.options.title),this.text_container=a("<div />",{class:"ui-pnotify-text","aria-role":"alert"}).appendTo(this.container),this.options.text===!1?this.text_container.hide():this.options.text_escape?this.text_container.text(this.options.text):this.text_container.html(this.options.insert_brs?String(this.options.text).replace(/\n/g,"<br />"):this.options.text),"string"==typeof this.options.width&&this.elem.css("width",this.options.width),"string"==typeof this.options.min_height&&this.container.css("min-height",this.options.min_height),"top"===this.options.stack.push?j.notices=a.merge([this],j.notices):j.notices=a.merge(j.notices,[this]),"top"===this.options.stack.push&&this.queuePosition(!1,1),this.options.stack.animation=!1,this.runModules("init"),this.options.auto_display&&this.open(),this},update:function(b){var c=this.options;return this.parseOptions(c,b),this.elem.removeClass("ui-pnotify-fade-slow ui-pnotify-fade-normal ui-pnotify-fade-fast"),"fade"===this.options.animation&&this.elem.addClass("ui-pnotify-fade-"+this.options.animate_speed),this.options.cornerclass!==c.cornerclass&&this.container.removeClass("ui-corner-all "+c.cornerclass).addClass(this.options.cornerclass),this.options.shadow!==c.shadow&&(this.options.shadow?this.container.addClass("ui-pnotify-shadow"):this.container.removeClass("ui-pnotify-shadow")),this.options.addclass===!1?this.elem.removeClass(c.addclass):this.options.addclass!==c.addclass&&this.elem.removeClass(c.addclass).addClass(this.options.addclass),this.options.title===!1?this.title_container.slideUp("fast"):this.options.title!==c.title&&(this.options.title_escape?this.title_container.text(this.options.title):this.title_container.html(this.options.title),c.title===!1&&this.title_container.slideDown(200)),this.options.text===!1?this.text_container.slideUp("fast"):this.options.text!==c.text&&(this.options.text_escape?this.text_container.text(this.options.text):this.text_container.html(this.options.insert_brs?String(this.options.text).replace(/\n/g,"<br />"):this.options.text),c.text===!1&&this.text_container.slideDown(200)),this.options.type!==c.type&&this.container.removeClass(this.styles.error+" "+this.styles.notice+" "+this.styles.success+" "+this.styles.info).addClass("error"===this.options.type?this.styles.error:"info"===this.options.type?this.styles.info:"success"===this.options.type?this.styles.success:this.styles.notice),(this.options.icon!==c.icon||this.options.icon===!0&&this.options.type!==c.type)&&(this.container.find("div.ui-pnotify-icon").remove(),this.options.icon!==!1&&a("<div />",{class:"ui-pnotify-icon"}).append(a("<span />",{class:this.options.icon===!0?"error"===this.options.type?this.styles.error_icon:"info"===this.options.type?this.styles.info_icon:"success"===this.options.type?this.styles.success_icon:this.styles.notice_icon:this.options.icon})).prependTo(this.container)),this.options.width!==c.width&&this.elem.animate({width:this.options.width}),this.options.min_height!==c.min_height&&this.container.animate({minHeight:this.options.min_height}),this.options.hide?c.hide||this.queueRemove():this.cancelRemove(),this.queuePosition(!0),this.runModules("update",c),this},open:function(){this.state="opening",this.runModules("beforeOpen");var a=this;return this.elem.parent().length||this.elem.appendTo(this.options.stack.context?this.options.stack.context:f),"top"!==this.options.stack.push&&this.position(!0),this.animateIn(function(){a.queuePosition(!0),a.options.hide&&a.queueRemove(),a.state="open",a.runModules("afterOpen")}),this},remove:function(c){this.state="closing",this.timerHide=!!c,this.runModules("beforeClose");var d=this;return this.timer&&(b.clearTimeout(this.timer),this.timer=null),this.animateOut(function(){if(d.state="closed",d.runModules("afterClose"),d.queuePosition(!0),d.options.remove&&d.elem.detach(),d.runModules("beforeDestroy"),d.options.destroy&&null!==j.notices){var b=a.inArray(d,j.notices);b!==-1&&j.notices.splice(b,1)}d.runModules("afterDestroy")}),this},get:function(){return this.elem},parseOptions:function(b,c){this.options=a.extend(!0,{},j.prototype.options),this.options.stack=j.prototype.options.stack;for(var e,d=[b,c],f=0;f<d.length&&(e=d[f],"undefined"!=typeof e);f++)if("object"!=typeof e)this.options.text=e;else for(var g in e)this.modules[g]?a.extend(!0,this.options[g],e[g]):this.options[g]=e[g]},animateIn:function(a){this.animating="in";var b=this;a=function(){b.animTimer&&clearTimeout(b.animTimer),"in"===b.animating&&(b.elem.is(":visible")?(this&&this.call(),b.animating=!1):b.animTimer=setTimeout(a,10))}.bind(a),"fade"===this.options.animation?(this.elem.one("webkitTransitionEnd mozTransitionEnd MSTransitionEnd oTransitionEnd transitionend",a).addClass("ui-pnotify-in"),this.elem.css("opacity"),this.elem.addClass("ui-pnotify-fade-in"),this.animTimer=setTimeout(a,650)):(this.elem.addClass("ui-pnotify-in"),a())},animateOut:function(a){this.animating="out";var b=this;a=function(){b.animTimer&&clearTimeout(b.animTimer),"out"===b.animating&&("0"!=b.elem.css("opacity")&&b.elem.is(":visible")?b.animTimer=setTimeout(a,10):(b.elem.removeClass("ui-pnotify-in"),this&&this.call(),b.animating=!1))}.bind(a),"fade"===this.options.animation?(this.elem.one("webkitTransitionEnd mozTransitionEnd MSTransitionEnd oTransitionEnd transitionend",a).removeClass("ui-pnotify-fade-in"),this.animTimer=setTimeout(a,650)):(this.elem.removeClass("ui-pnotify-in"),a())},position:function(a){var b=this.options.stack,c=this.elem;if("undefined"==typeof b.context&&(b.context=f),b){"number"!=typeof b.nextpos1&&(b.nextpos1=b.firstpos1),"number"!=typeof b.nextpos2&&(b.nextpos2=b.firstpos2),"number"!=typeof b.addpos2&&(b.addpos2=0);var d=!c.hasClass("ui-pnotify-in");if(!d||a){b.modal&&(b.overlay?b.overlay.show():b.overlay=i(b)),c.addClass("ui-pnotify-move");var e,h,j;switch(b.dir1){case"down":j="top";break;case"up":j="bottom";break;case"left":j="right";break;case"right":j="left"}e=parseInt(c.css(j).replace(/(?:\..*|[^0-9.])/g,"")),isNaN(e)&&(e=0),"undefined"!=typeof b.firstpos1||d||(b.firstpos1=e,b.nextpos1=b.firstpos1);var k;switch(b.dir2){case"down":k="top";break;case"up":k="bottom";break;case"left":k="right";break;case"right":k="left"}switch(h=parseInt(c.css(k).replace(/(?:\..*|[^0-9.])/g,"")),isNaN(h)&&(h=0),"undefined"!=typeof b.firstpos2||d||(b.firstpos2=h,b.nextpos2=b.firstpos2),("down"===b.dir1&&b.nextpos1+c.height()>(b.context.is(f)?g.height():b.context.prop("scrollHeight"))||"up"===b.dir1&&b.nextpos1+c.height()>(b.context.is(f)?g.height():b.context.prop("scrollHeight"))||"left"===b.dir1&&b.nextpos1+c.width()>(b.context.is(f)?g.width():b.context.prop("scrollWidth"))||"right"===b.dir1&&b.nextpos1+c.width()>(b.context.is(f)?g.width():b.context.prop("scrollWidth")))&&(b.nextpos1=b.firstpos1,b.nextpos2+=b.addpos2+("undefined"==typeof b.spacing2?25:b.spacing2),b.addpos2=0),"number"==typeof b.nextpos2&&(b.animation?c.css(k,b.nextpos2+"px"):(c.removeClass("ui-pnotify-move"),c.css(k,b.nextpos2+"px"),c.css(k),c.addClass("ui-pnotify-move"))),b.dir2){case"down":case"up":c.outerHeight(!0)>b.addpos2&&(b.addpos2=c.height());break;case"left":case"right":c.outerWidth(!0)>b.addpos2&&(b.addpos2=c.width())}switch("number"==typeof b.nextpos1&&(b.animation?c.css(j,b.nextpos1+"px"):(c.removeClass("ui-pnotify-move"),c.css(j,b.nextpos1+"px"),c.css(j),c.addClass("ui-pnotify-move"))),b.dir1){case"down":case"up":b.nextpos1+=c.height()+("undefined"==typeof b.spacing1?25:b.spacing1);break;case"left":case"right":b.nextpos1+=c.width()+("undefined"==typeof b.spacing1?25:b.spacing1)}}return this}},queuePosition:function(a,b){return e&&clearTimeout(e),b||(b=10),e=setTimeout(function(){j.positionAll(a)},b),this},cancelRemove:function(){return this.timer&&b.clearTimeout(this.timer),this.animTimer&&b.clearTimeout(this.animTimer),"closing"===this.state&&(this.state="open",this.animating=!1,this.elem.addClass("ui-pnotify-in"),"fade"===this.options.animation&&this.elem.addClass("ui-pnotify-fade-in")),this},queueRemove:function(){var a=this;return this.cancelRemove(),this.timer=b.setTimeout(function(){a.remove(!0)},isNaN(this.options.delay)?0:this.options.delay),this}}),a.extend(j,{notices:[],reload:c,removeAll:function(){a.each(j.notices,function(){this.remove&&this.remove(!1)})},removeStack:function(b){a.each(j.notices,function(){this.remove&&this.options.stack===b&&this.remove(!1)})},positionAll:function(b){if(e&&clearTimeout(e),e=null,j.notices&&j.notices.length)a.each(j.notices,function(){var a=this.options.stack;a&&(a.overlay&&a.overlay.hide(),a.nextpos1=a.firstpos1,a.nextpos2=a.firstpos2,a.addpos2=0,a.animation=b)}),a.each(j.notices,function(){this.position()});else{var c=j.prototype.options.stack;c&&(delete c.nextpos1,delete c.nextpos2)}},styling:{brighttheme:{container:"brighttheme",notice:"brighttheme-notice",notice_icon:"brighttheme-icon-notice",info:"brighttheme-info",info_icon:"brighttheme-icon-info",success:"brighttheme-success",success_icon:"brighttheme-icon-success",error:"brighttheme-error",error_icon:"brighttheme-icon-error"},jqueryui:{container:"ui-widget ui-widget-content ui-corner-all",notice:"ui-state-highlight",notice_icon:"ui-icon ui-icon-info",info:"",info_icon:"ui-icon ui-icon-info",success:"ui-state-default",success_icon:"ui-icon ui-icon-circle-check",error:"ui-state-error",error_icon:"ui-icon ui-icon-alert"},bootstrap3:{container:"alert",notice:"alert-warning",notice_icon:"glyphicon glyphicon-exclamation-sign",info:"alert-info",info_icon:"glyphicon glyphicon-info-sign",success:"alert-success",success_icon:"glyphicon glyphicon-ok-sign",error:"alert-danger",error_icon:"glyphicon glyphicon-warning-sign"}}}),j.styling.fontawesome=a.extend({},j.styling.bootstrap3),a.extend(j.styling.fontawesome,{notice_icon:"fa fa-exclamation-circle",info_icon:"fa fa-info",success_icon:"fa fa-check",error_icon:"fa fa-warning"}),b.document.body?h():a(h),j};return c(b)});
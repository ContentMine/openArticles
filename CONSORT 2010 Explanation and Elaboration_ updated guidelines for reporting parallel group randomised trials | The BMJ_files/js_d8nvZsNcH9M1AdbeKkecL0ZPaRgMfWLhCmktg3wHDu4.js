/**
* bootstrap.js v3.0.0 by @fat and @mdo
* Copyright 2013 Twitter Inc.
* http://www.apache.org/licenses/LICENSE-2.0
*/
if(!jQuery)throw new Error("Bootstrap requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]}}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(window.jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d)};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.is("input")?"val":"html",e=c.data();a+="Text",e.resetText||c.data("resetText",c[d]()),c[d](e[a]||this.options[a]),setTimeout(function(){"loadingText"==a?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons"]');if(a.length){var b=this.$element.find("input").prop("checked",!this.$element.hasClass("active")).trigger("change");"radio"===b.prop("type")&&a.find(".active").removeClass("active")}this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(window.jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}this.sliding=!0,f&&this.pause();var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});if(!e.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(j),j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid")},0)}).emulateTransitionEnd(600)}else{if(this.$element.trigger(j),j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return f&&this.cycle(),this}};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?(this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350),void 0):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(window.jQuery),+function(a){"use strict";function b(){a(d).remove(),a(e).each(function(b){var d=c(a(this));d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown")),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown"))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){if("disable-ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b),f.trigger(d=a.Event("show.bs.dropdown")),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown"),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=a("[role=menu] li:not(.divider):visible a",f);if(h.length){var i=h.index(h.filter(":focus"));38==b.keyCode&&i>0&&i--,40==b.keyCode&&i<h.length-1&&i++,~i||(i=0),h.eq(i).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("dropdown");d||c.data("dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu]",f.prototype.keydown)}(window.jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.load(this.options.remote)};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show(),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(window.jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focus",i="hover"==g?"mouseleave":"blur";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show),void 0):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide),void 0):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this.tip();this.setContent(),this.options.animation&&c.addClass("fade");var d="function"==typeof this.options.placement?this.options.placement.call(this,c[0],this.$element[0]):this.options.placement,e=/\s?auto?\s?/i,f=e.test(d);f&&(d=d.replace(e,"")||"top"),c.detach().css({top:0,left:0,display:"block"}).addClass(d),this.options.container?c.appendTo(this.options.container):c.insertAfter(this.$element);var g=this.getPosition(),h=c[0].offsetWidth,i=c[0].offsetHeight;if(f){var j=this.$element.parent(),k=d,l=document.documentElement.scrollTop||document.body.scrollTop,m="body"==this.options.container?window.innerWidth:j.outerWidth(),n="body"==this.options.container?window.innerHeight:j.outerHeight(),o="body"==this.options.container?0:j.offset().left;d="bottom"==d&&g.top+g.height+i-l>n?"top":"top"==d&&g.top-l-i<0?"bottom":"right"==d&&g.right+h>m?"left":"left"==d&&g.left-h<o?"right":d,c.removeClass(k).addClass(d)}var p=this.getCalculatedOffset(d,g,h,i);this.applyPlacement(p,d),this.$element.trigger("shown.bs."+this.type)}},b.prototype.applyPlacement=function(a,b){var c,d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),a.top=a.top+g,a.left=a.left+h,d.offset(a).addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;if("top"==b&&j!=f&&(c=!0,a.top=a.top+f-j),/bottom|top/.test(b)){var k=0;a.left<0&&(k=-2*a.left,a.left=0,d.offset(a),i=d[0].offsetWidth,j=d[0].offsetHeight),this.replaceArrow(k-e+i,i,"left")}else this.replaceArrow(j-f,j,"top");c&&d.offset(a)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach()}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.$element.trigger("hidden.bs."+this.type),this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(window.jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"html":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(window.jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(c).is("body")?a(window):a(c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#\w/.test(e)&&a(e);return f&&f.length&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parents(".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(window.jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.attr("data-target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top()),"function"==typeof h&&(h=f.bottom());var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;this.affixed!==i&&(this.unpin&&this.$element.css("top",""),this.affixed=i,this.unpin="bottom"==i?e.top-d:null,this.$element.removeClass(b.RESET).addClass("affix"+(i?"-"+i:"")),"bottom"==i&&this.$element.offset({top:document.body.offsetHeight-h-this.$element.height()}))}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(window.jQuery);;
window.Modernizr=function(e,t,n){function L(e){f.cssText=e}function A(e,t){return L(p.join(e+";")+(t||""))}function O(e,t){return typeof e===t}function M(e,t){return!!~(""+e).indexOf(t)}function _(e,t){for(var r in e){var i=e[r];if(!M(i,"-")&&f[i]!==n){return t=="pfx"?i:true}}return false}function D(e,t,r){for(var i in e){var s=t[e[i]];if(s!==n){if(r===false)return e[i];if(O(s,"function")){return s.bind(r||t)}return s}}return false}function P(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+v.join(r+" ")+r).split(" ");if(O(t,"string")||O(t,"undefined")){return _(i,t)}else{i=(e+" "+m.join(r+" ")+r).split(" ");return D(i,t,n)}}function H(){i["input"]=function(n){for(var r=0,i=n.length;r<i;r++){w[n[r]]=!!(n[r]in l)}if(w.list){w.list=!!(t.createElement("datalist")&&e.HTMLDataListElement)}return w}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));i["inputtypes"]=function(e){for(var r=0,i,s,u,a=e.length;r<a;r++){l.setAttribute("type",s=e[r]);i=l.type!=="text";if(i){l.value=c;l.style.cssText="position:absolute;visibility:hidden;";if(/^range$/.test(s)&&l.style.WebkitAppearance!==n){o.appendChild(l);u=t.defaultView;i=u.getComputedStyle&&u.getComputedStyle(l,null).WebkitAppearance!=="textfield"&&l.offsetHeight!==0;o.removeChild(l)}else if(/^(search|tel)$/.test(s)){}else if(/^(url|email)$/.test(s)){i=l.checkValidity&&l.checkValidity()===false}else{i=l.value!=c}}b[e[r]]=!!i}return b}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var r="2.7.2",i={},s=true,o=t.documentElement,u="modernizr",a=t.createElement(u),f=a.style,l=t.createElement("input"),c=":)",h={}.toString,p=" -webkit- -moz- -o- -ms- ".split(" "),d="Webkit Moz O ms",v=d.split(" "),m=d.toLowerCase().split(" "),g={svg:"http://www.w3.org/2000/svg"},y={},b={},w={},E=[],S=E.slice,x,T=function(e,n,r,i){var s,a,f,l,c=t.createElement("div"),h=t.body,p=h||t.createElement("body");if(parseInt(r,10)){while(r--){f=t.createElement("div");f.id=i?i[r]:u+(r+1);c.appendChild(f)}}s=["&#173;",'<style id="s',u,'">',e,"</style>"].join("");c.id=u;(h?c:p).innerHTML+=s;p.appendChild(c);if(!h){p.style.background="";p.style.overflow="hidden";l=o.style.overflow;o.style.overflow="hidden";o.appendChild(p)}a=n(c,e);if(!h){p.parentNode.removeChild(p);o.style.overflow=l}else{c.parentNode.removeChild(c)}return!!a},N=function(){function r(r,i){i=i||t.createElement(e[r]||"div");r="on"+r;var s=r in i;if(!s){if(!i.setAttribute){i=t.createElement("div")}if(i.setAttribute&&i.removeAttribute){i.setAttribute(r,"");s=O(i[r],"function");if(!O(i[r],"undefined")){i[r]=n}i.removeAttribute(r)}}i=null;return s}var e={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return r}(),C={}.hasOwnProperty,k;if(!O(C,"undefined")&&!O(C.call,"undefined")){k=function(e,t){return C.call(e,t)}}else{k=function(e,t){return t in e&&O(e.constructor.prototype[t],"undefined")}}if(!Function.prototype.bind){Function.prototype.bind=function(t){var n=this;if(typeof n!="function"){throw new TypeError}var r=S.call(arguments,1),i=function(){if(this instanceof i){var e=function(){};e.prototype=n.prototype;var s=new e;var o=n.apply(s,r.concat(S.call(arguments)));if(Object(o)===o){return o}return s}else{return n.apply(t,r.concat(S.call(arguments)))}};return i}}y["flexbox"]=function(){return P("flexWrap")};y["canvas"]=function(){var e=t.createElement("canvas");return!!(e.getContext&&e.getContext("2d"))};y["canvastext"]=function(){return!!(i["canvas"]&&O(t.createElement("canvas").getContext("2d").fillText,"function"))};y["webgl"]=function(){return!!e.WebGLRenderingContext};y["touch"]=function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch){n=true}else{T(["@media (",p.join("touch-enabled),("),u,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=e.offsetTop===9})}return n};y["geolocation"]=function(){return"geolocation"in navigator};y["postmessage"]=function(){return!!e.postMessage};y["websqldatabase"]=function(){return!!e.openDatabase};y["indexedDB"]=function(){return!!P("indexedDB",e)};y["hashchange"]=function(){return N("hashchange",e)&&(t.documentMode===n||t.documentMode>7)};y["history"]=function(){return!!(e.history&&history.pushState)};y["draganddrop"]=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e};y["websockets"]=function(){return"WebSocket"in e||"MozWebSocket"in e};y["rgba"]=function(){L("background-color:rgba(150,255,150,.5)");return M(f.backgroundColor,"rgba")};y["hsla"]=function(){L("background-color:hsla(120,40%,100%,.5)");return M(f.backgroundColor,"rgba")||M(f.backgroundColor,"hsla")};y["multiplebgs"]=function(){L("background:url(https://),url(https://),red url(https://)");return/(url\s*\(.*?){3}/.test(f.background)};y["backgroundsize"]=function(){return P("backgroundSize")};y["borderimage"]=function(){return P("borderImage")};y["borderradius"]=function(){return P("borderRadius")};y["boxshadow"]=function(){return P("boxShadow")};y["textshadow"]=function(){return t.createElement("div").style.textShadow===""};y["opacity"]=function(){A("opacity:.55");return/^0.55$/.test(f.opacity)};y["cssanimations"]=function(){return P("animationName")};y["csscolumns"]=function(){return P("columnCount")};y["cssgradients"]=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";L((e+"-webkit- ".split(" ").join(t+e)+p.join(n+e)).slice(0,-e.length));return M(f.backgroundImage,"gradient")};y["cssreflections"]=function(){return P("boxReflect")};y["csstransforms"]=function(){return!!P("transform")};y["csstransforms3d"]=function(){var e=!!P("perspective");if(e&&"webkitPerspective"in o.style){T("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=t.offsetLeft===9&&t.offsetHeight===3})}return e};y["csstransitions"]=function(){return P("transition")};y["fontface"]=function(){var e;T('@font-face {font-family:"font";src:url("https://")}',function(n,r){var i=t.getElementById("smodernizr"),s=i.sheet||i.styleSheet,o=s?s.cssRules&&s.cssRules[0]?s.cssRules[0].cssText:s.cssText||"":"";e=/src/i.test(o)&&o.indexOf(r.split(" ")[0])===0});return e};y["generatedcontent"]=function(){var e;T(["#",u,"{font:0/0 a}#",u,':after{content:"',c,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3});return e};y["video"]=function(){var e=t.createElement("video"),n=false;try{if(n=!!e.canPlayType){n=new Boolean(n);n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,"");n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,"");n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}}catch(r){}return n};y["audio"]=function(){var e=t.createElement("audio"),n=false;try{if(n=!!e.canPlayType){n=new Boolean(n);n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,"");n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,"");n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,"");n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,"")}}catch(r){}return n};y["localstorage"]=function(){try{localStorage.setItem(u,u);localStorage.removeItem(u);return true}catch(e){return false}};y["sessionstorage"]=function(){try{sessionStorage.setItem(u,u);sessionStorage.removeItem(u);return true}catch(e){return false}};y["webworkers"]=function(){return!!e.Worker};y["applicationcache"]=function(){return!!e.applicationCache};y["svg"]=function(){return!!t.createElementNS&&!!t.createElementNS(g.svg,"svg").createSVGRect};y["inlinesvg"]=function(){var e=t.createElement("div");e.innerHTML="<svg/>";return(e.firstChild&&e.firstChild.namespaceURI)==g.svg};y["smil"]=function(){return!!t.createElementNS&&/SVGAnimate/.test(h.call(t.createElementNS(g.svg,"animate")))};y["svgclippaths"]=function(){return!!t.createElementNS&&/SVGClipPath/.test(h.call(t.createElementNS(g.svg,"clipPath")))};for(var B in y){if(k(y,B)){x=B.toLowerCase();i[x]=y[B]();E.push((i[x]?"":"no-")+x)}}i.input||H();i.addTest=function(e,t){if(typeof e=="object"){for(var r in e){if(k(e,r)){i.addTest(r,e[r])}}}else{e=e.toLowerCase();if(i[e]!==n){return i}t=typeof t=="function"?t():t;if(typeof s!=="undefined"&&s){o.className+=" "+(t?"":"no-")+e}i[e]=t}return i};L("");a=l=null;(function(e,t){function c(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;n.innerHTML="x<style>"+t+"</style>";return r.insertBefore(n.lastChild,r.firstChild)}function h(){var e=y.elements;return typeof e=="string"?e.split(" "):e}function p(e){var t=f[e[u]];if(!t){t={};a++;e[u]=a;f[a]=t}return t}function d(e,n,r){if(!n){n=t}if(l){return n.createElement(e)}if(!r){r=p(n)}var o;if(r.cache[e]){o=r.cache[e].cloneNode()}else if(s.test(e)){o=(r.cache[e]=r.createElem(e)).cloneNode()}else{o=r.createElem(e)}return o.canHaveChildren&&!i.test(e)&&!o.tagUrn?r.frag.appendChild(o):o}function v(e,n){if(!e){e=t}if(l){return e.createDocumentFragment()}n=n||p(e);var r=n.frag.cloneNode(),i=0,s=h(),o=s.length;for(;i<o;i++){r.createElement(s[i])}return r}function m(e,t){if(!t.cache){t.cache={};t.createElem=e.createElement;t.createFrag=e.createDocumentFragment;t.frag=t.createFrag()}e.createElement=function(n){if(!y.shivMethods){return t.createElem(n)}return d(n,e,t)};e.createDocumentFragment=Function("h,f","return function(){"+"var n=f.cloneNode(),c=n.createElement;"+"h.shivMethods&&("+h().join().replace(/[\w\-]+/g,function(e){t.createElem(e);t.frag.createElement(e);return'c("'+e+'")'})+");return n}")(y,t.frag)}function g(e){if(!e){e=t}var n=p(e);if(y.shivCSS&&!o&&!n.hasCSS){n.hasCSS=!!c(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}"+"mark{background:#FF0;color:#000}"+"template{display:none}")}if(!l){m(e,n)}return e}var n="3.7.0";var r=e.html5||{};var i=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;var s=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;var o;var u="_html5shiv";var a=0;var f={};var l;(function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>";o="hidden"in e;l=e.childNodes.length==1||function(){t.createElement("a");var e=t.createDocumentFragment();return typeof e.cloneNode=="undefined"||typeof e.createDocumentFragment=="undefined"||typeof e.createElement=="undefined"}()}catch(n){o=true;l=true}})();var y={elements:r.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:n,shivCSS:r.shivCSS!==false,supportsUnknownElements:l,shivMethods:r.shivMethods!==false,type:"default",shivDocument:g,createElement:d,createDocumentFragment:v};e.html5=y;g(t)})(this,t);i._version=r;i._prefixes=p;i._domPrefixes=m;i._cssomPrefixes=v;i.hasEvent=N;i.testProp=function(e){return _([e])};i.testAllProps=P;i.testStyles=T;i.prefixed=function(e,t,n){if(!t){return P(e,"pfx")}else{return P(e,t,n)}};o.className=o.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(s?" js "+E.join(" "):"");return i}(this,this.document);(function(e,t,n){function r(e){return"[object Function]"==d.call(e)}function i(e){return"string"==typeof e}function s(){}function o(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function u(){var e=v.shift();m=1,e?e.t?h(function(){("c"==e.t?k.injectCss:k.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),u()):m=0}function a(e,n,r,i,s,a,f){function l(t){if(!d&&o(c.readyState)&&(w.r=d=1,!m&&u(),c.onload=c.onreadystatechange=null,t)){"img"!=e&&h(function(){b.removeChild(c)},50);for(var r in T[n])T[n].hasOwnProperty(r)&&T[n][r].onload()}}var f=f||k.errorTimeout,c=t.createElement(e),d=0,g=0,w={t:r,s:n,e:s,a:a,x:f};1===T[n]&&(g=1,T[n]=[]),"object"==e?c.data=n:(c.src=n,c.type=e),c.width=c.height="0",c.onerror=c.onload=c.onreadystatechange=function(){l.call(this,g)},v.splice(i,0,w),"img"!=e&&(g||2===T[n]?(b.insertBefore(c,y?null:p),h(l,f)):T[n].push(c))}function f(e,t,n,r,s){return m=0,t=t||"j",i(e)?a("c"==t?E:w,e,t,this.i++,n,r,s):(v.splice(this.i++,0,e),1==v.length&&u()),this}function l(){var e=k;return e.loader={load:f,i:0},e}var c=t.documentElement,h=e.setTimeout,p=t.getElementsByTagName("script")[0],d={}.toString,v=[],m=0,g="MozAppearance"in c.style,y=g&&!!t.createRange().compareNode,b=y?c:p.parentNode,c=e.opera&&"[object Opera]"==d.call(e.opera),c=!!t.attachEvent&&!c,w=g?"object":c?"script":"img",E=c?"script":w,S=Array.isArray||function(e){return"[object Array]"==d.call(e)},x=[],T={},N={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}},C,k;k=function(e){function t(e){var e=e.split("!"),t=x.length,n=e.pop(),r=e.length,n={url:n,origUrl:n,prefixes:e},i,s,o;for(s=0;s<r;s++)o=e[s].split("="),(i=N[o.shift()])&&(n=i(n,o));for(s=0;s<t;s++)n=x[s](n);return n}function o(e,i,s,o,u){var a=t(e),f=a.autoCallback;a.url.split(".").pop().split("?").shift(),a.bypass||(i&&(i=r(i)?i:i[e]||i[o]||i[e.split("/").pop().split("?")[0]]),a.instead?a.instead(e,i,s,o,u):(T[a.url]?a.noexec=!0:T[a.url]=1,s.load(a.url,a.forceCSS||!a.forceJS&&"css"==a.url.split(".").pop().split("?").shift()?"c":n,a.noexec,a.attrs,a.timeout),(r(i)||r(f))&&s.load(function(){l(),i&&i(a.origUrl,u,o),f&&f(a.origUrl,u,o),T[a.url]=2})))}function u(e,t){function n(e,n){if(e){if(i(e))n||(f=function(){var e=[].slice.call(arguments);l.apply(this,e),c()}),o(e,f,t,0,u);else if(Object(e)===e)for(p in h=function(){var t=0,n;for(n in e)e.hasOwnProperty(n)&&t++;return t}(),e)e.hasOwnProperty(p)&&(!n&&!--h&&(r(f)?f=function(){var e=[].slice.call(arguments);l.apply(this,e),c()}:f[p]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),c()}}(l[p])),o(e[p],f,t,p,u))}else!n&&c()}var u=!!e.test,a=e.load||e.both,f=e.callback||s,l=f,c=e.complete||s,h,p;n(u?e.yep:e.nope,!!a),a&&n(a)}var a,f,c=this.yepnope.loader;if(i(e))o(e,0,c,0);else if(S(e))for(a=0;a<e.length;a++)f=e[a],i(f)?o(f,0,c,0):S(f)?k(f):Object(f)===f&&u(f,c);else Object(e)===e&&u(e,c)},k.addPrefix=function(e,t){N[e]=t},k.addFilter=function(e){x.push(e)},k.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",C=function(){t.removeEventListener("DOMContentLoaded",C,0),t.readyState="complete"},0)),e.yepnope=l(),e.yepnope.executeStack=u,e.yepnope.injectJs=function(e,n,r,i,a,f){var l=t.createElement("script"),c,d,i=i||k.errorTimeout;l.src=e;for(d in r)l.setAttribute(d,r[d]);n=f?u:n||s,l.onreadystatechange=l.onload=function(){!c&&o(l.readyState)&&(c=1,n(),l.onload=l.onreadystatechange=null)},h(function(){c||(c=1,n(1))},i),a?l.onload():p.parentNode.insertBefore(l,p)},e.yepnope.injectCss=function(e,n,r,i,o,a){var i=t.createElement("link"),f,n=a?u:n||s;i.href=e,i.rel="stylesheet",i.type="text/css";for(f in r)i.setAttribute(f,r[f]);o||(p.parentNode.insertBefore(i,p),h(n,0))}})(this,document);Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};;
<!--
//configuration
OAS_url = 'http://oas.services.bmj.com/RealMedia/ads/';
// OAS_sitepage = 'hw-f5-bmj-d7.highwire.org' + window.location.pathname;
OAS_sitepage = window.location.hostname + window.location.pathname;
OAS_listpos = 'Middle1,Middle2,Top,Top2';
OAS_query = '';
OAS_target = '_top';
//end of configuration
OAS_version = 10;
OAS_rn = '001234567890'; OAS_rns = '1234567890';
OAS_rn = new String (Math.random()); OAS_rns = OAS_rn.substring (2, 11);
function OAS_NORMAL(pos) {
document.write('<A HREF="' + OAS_url + 'click_nx.ads/' + OAS_sitepage + '/1' + OAS_rns + '@' + OAS_listpos + '!' + pos + '?' + OAS_query + '" TARGET=' + OAS_target + '>');
document.write('<IMG SRC="' + OAS_url + 'adstream_nx.ads/' + OAS_sitepage + '/1' + OAS_rns + '@' + OAS_listpos + '!' + pos + '?' + OAS_query + '" BORDER=0></A>');
}
 //-->
<!--
 OAS_version = 11;
if ((navigator.userAgent.indexOf('Mozilla/3') != -1) || (navigator.userAgent.indexOf('Mozilla/4.0 WebTV') != -1))
 OAS_version = 10;
if (OAS_version >= 11)
document.write('<SCR' + 'IPT LANGUAGE=JavaScript1.1 SRC="' + OAS_url + 'adstream_mjx.ads/' + OAS_sitepage + '/1' + OAS_rns + '@' + OAS_listpos + '?' + OAS_query + '"><\/SCRIPT>');//-->

<!--
 document.write('');
function OAS_AD(pos) {
if (OAS_version >= 11 && typeof(OAS_RICH)!='undefined')
 OAS_RICH(pos);
else
 OAS_NORMAL(pos);
}  //-->
;
/*!
 * jQuery Cookiebar Plugin
 * https://github.com/carlwoodhouse/jquery.cookieBar
 *
 * Copyright 2012, Carl Woodhouse
 * Disclaimer: if you still get fined for not complying with the eu cookielaw, it's not our fault.
 */
 
(function( $ ){
  $.fn.cookieBar = function( options ) {  
	var settings = $.extend( {
      'closeButton' : '.close',
	  'secure' : false,
	  'path' : '/',
	  'domain' : ''
    }, options);
  
    return this.each(function() {       
		var cookiebar = $(this);
		
		// just in case they didnt hide it by default.
		cookiebar.hide();

		// if close button not defined. define it!
		if(settings.closeButton == 'none')
		{
			cookiebar.append('<a class="cookiebar-close">Close</a>');
			settings = $.extend( {
				'closeButton' : '.cookiebar-close'
			}, options);
		}

		if ($.cookie('cookiebar') != 'hide') {
		  cookiebar.show();
		}

		cookiebar.find(settings.closeButton).click(function() {
			cookiebar.hide();
			$.cookie('cookiebar', 'hide', { path: settings.path, secure: settings.secure, domain: settings.domain, expires: 30 });
			return false;
		});
    });
  };
  
  // self injection init
  $.cookieBar = function( options ) {  
	$('body').prepend('<div class="ui-widget"><div style="display: none;" class="cookie-message ui-widget-header blue"><p>By using this website you allow us to place cookies on your computer. They are harmless and never personally identify you.</p></div></div>');     
	$('.cookie-message').cookieBar(options);
  };
})( jQuery );

/*!
 * Dependancy:
 * jQuery Cookie Plugin
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.   
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function($) {
    $.cookie = function(key, value, options) {
        // key and at least value given, set cookie...
        if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value === null || value === undefined)) {
            options = $.extend({}, options);

            if (value === null || value === undefined) {
                options.expires = -1;
            }

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setDate(t.getDate() + days);
            }

            value = String(value);

            return (document.cookie = [
                encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path    ? '; path=' + options.path : '',
                options.domain  ? '; domain=' + options.domain : '',
                options.secure  ? '; secure' : ''
            ].join(''));
        }

        // key and possibly options given, get cookie...
        options = value || {};
        var decode = options.raw ? function(s) { return s; } : decodeURIComponent;

        var pairs = document.cookie.split('; ');
        for (var i = 0, pair; pair = pairs[i] && pairs[i].split('='); i++) {
            // IE saves cookies with empty string as "c; ", e.g. without "=" as opposed to EOMB, thus pair[1] may be undefined
            if (decode(pair[0]) === key) return decode(pair[1] || '');
        }
        return null;
    };
})(jQuery);;
// Custom BMJ Journal theme scripts
(function ($) {

	Drupal.behaviors.bmj_global = {
		attach: function (context, settings) {

			$(window).resize(function() {
				$('.table-expand-inline').click( function(){
					$( document ).ajaxComplete(function( event,request, settings ) {
						if (request.responseText.indexOf('<table id="table') !== -1) {
							$(".row-fluid").css("position", "relative");
						};
					});
				});
			});
		}
	};

	Drupal.behaviors.bmj_accordions = {
		attach: function (context, settings) {

			$('.pane-jnl-bmj-subscription-widget h2').on("click", function(){
				$(this).next().slideToggle("fast");
				$(this).toggleClass("closed");
				$(this).next().toggleClass("closed");
			}).click();

			$('.accordion-group h2').on("click", function(){
				$(this).next().slideToggle("fast");
			}).click();

			$('.accordion-group-sm .pane-title', context).on("click", function(){
				if($(window).width() < 768){
					$(this).next().slideToggle("fast");
				}
			});

			// Class highwire-list-title is hard coded in theme_highwire_list
			// highwire.include.theme.inc
			$('.accordion-group-sm .highwire-list-title', context).on("click", function(){
				if($(window).width() < 768){
					$(this).next().slideToggle("fast");
				}
			});

			$('.accordion-group-mobile h2', context).on("click", function(event){
				event.preventDefault();
				if($(window).width() < 980){
					$(this).next().slideToggle("fast");
				}
			});

			$('.accordion-group-phone .pane-title', context).on("click", function(){
				$(this).next().slideToggle("fast");
			}).click();

			$('.resources-for-authors > a', context).on("click", function(){
				if($(window).width() < 768){
					event.preventDefault();
					$(this).next().slideToggle("fast");
				}
			}).click();
		}
	};

	Drupal.behaviors.bmj_investigation_date = {
		attach: function (context, settings) {
			$('.view-id-campaign_page.view-display-id-panel_pane_1 .bmj-channel-featured-hero-date-category-wrapper').once(function(){
				var investigation_date = $(this).html();
				$('.view-id-campaign_page.view-display-id-panel_pane_1 h2').append('<br><span class="invest-date">' + investigation_date + '</span>');
			});

			$('.bmj-channel-featured-photo_featured').each(function(){
				var investigation_date = $('.bmj-channel-featured-photo_featured-date-category-wrapper', this).html();
				$('h2', this).append('<br><span class="invest-date">' + investigation_date + '</span>');
			});
		}
	};

	Drupal.behaviors.bmj_login_form = {
		attach: function (context, settings) {
			$('.dropdown-menu').find('form').click(function ( e ) {
				e.stopPropagation();
			});
		}
	};

	Drupal.behaviors.Navbar = {
	attach: function (context, settings) {

			var main_nav_open = false;
			var top_nav_open = false;

			$('#btn-nav').click(function() {
				main_nav_open = !main_nav_open;
				if (top_nav_open == true) {
					$('#top-nav').toggle();
					$('#main-nav').toggleClass('override-affix');
					top_nav_open = !top_nav_open;
				}
				$('body').toggleClass('mobile-nav-open');	
				$('#main-nav').toggleClass('override-affix');

			});

			$('#toggle-mobile-top-nav').click(function() {
				top_nav_open = !top_nav_open;
				if (main_nav_open == true) {
					$('#main-nav').toggle();
					$('#main-nav').toggleClass('override-affix');
					main_nav_open = !main_nav_open;
				}
				$('#top-nav').toggle();
				$('#main-nav').toggleClass('override-affix');
			});

		}
	};

	Drupal.behaviors.MiscStyling = {
		attach: function (context, settings) {
			//Tooltip for article images
			$('div.highwire-markup .fig-inline-img-wrapper img').tooltip({
				'placement': 'top',
				'title': 'View fullscreen'
			});
			//Article tools drop-downs (i.e. Citation tools and Articles & Updates)
			var isClicked = false;
			$('.minipanel-model-link-link a').click(function() {
				if (!isClicked) {	
					isClicked = true;
					// if ($(this).closest("li").find(".panel-collapse").is(":visible")) {
					// 	$(this).closest("li").removeClass("active");
					// } else {
					// 	$(this).closest("li").addClass("active");
					// }

					if ($(this).closest("div.minipanel-model-wrapper").find(".panel-collapse").is(":visible")) {
						$(this).closest("li").removeClass("active");
						$(this).closest("div").removeClass("active");
					} else {
						$(this).closest("li").addClass("active");
						$(this).closest("div").addClass("active");
					}
					setTimeout(function () { //stop multiple clicks from firing function more than once
						isClicked = false;
					}, 350);
				}
			});
		}
	};

	Drupal.behaviors.fpShowMore = {
		attach: function (context, settings) {
			//Show / hide content on home page
			if($('.page-thebmj').length){
				var show_more = 0;
				$('#latest-articles-hp-pane3').hide();
				$('#latest-articles-hp-pane4').hide();
				$('#latest-articles-hp-pane5').hide();
				$('#latest-articles-hp-pane6').hide();
				
				$('#fp-show-more').click(function() {
					if (show_more == 0) {
						$('#latest-articles-hp-pane3').show();
						$('#latest-articles-hp-pane4').show();
						show_more = 1;
					} else if (show_more == 1) {
						$('#latest-articles-hp-pane5').show();
						$('#latest-articles-hp-pane6').show();
						//$('#fp-show-more').addClass("disabled");
						$('#fp-show-more').hide();
						show_more = 2;
					}
				});
			}
		}
	}

	Drupal.behaviors.touchDevices = {
		attach: function(context, settings) {
			//Show cover links by default (no hover) for touch devices
			if ($('body').hasClass('homepage') || $('body').hasClass('page-thebmj')) {
				if (Modernizr.touch) {   
				    $("#current-issue-links").addClass("tablet");
				} 
			}
			if ($('body').hasClass('node-type-bmj-infographic')) {
				if (Modernizr.touch) {
					$("#touch-devices-message").show();
					$("canvas#infographics").hide();
					$("#display-infographic").click(function() {
						$("canvas#infographics").show();
						$("#display-infographic").hide();
					});
				}
			}
		}
	}

	Drupal.behaviors.RefAnchor = {
	  attach: function (context, settings) {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
	&& location.hostname == this.hostname) {

	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top - 60 //offsets for fixed header
	        }, 1000);
	        return false;
	      }
	    }
	  });
	  //Executed on page load with URL containing an anchor tag.
	  if($(location.href.split("#")[1])) {
	      var target = $('#'+location.href.split("#")[1]);
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top - 60 //offset height of header here too.
	        }, 1000);
	        return false;
	      }
	    }
	  }
	};

	Drupal.behaviors.Hosted_content_showmore = {
	  attach: function (context, settings) {

	  	  var showChar = 100;
	  	  var ellipsestext = "...";
	  	  var moretext = "more";
	  	  var lesstext = "less";
	  	  $('.field-name-field-pane-content .field-items div.field-item.even').each(function() {
	  	    var content = $(this).html();

	  	    if(content.length > showChar) {

	  	      var c = content.substr(0, showChar);
	  	      var h = content.substr(showChar-1, content.length - showChar);

	  	      var html = c + '<span class="moreelipses">'+ellipsestext+'</span>&nbsp;<span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">'+moretext+'</a></span>';

	  	      $(this).html(html);
	  	    }

	  	  });

	  	  $(".morelink").click(function(){
	  	    if($(this).hasClass("less")) {
	  	      $(this).removeClass("less");
	  	      $(this).html(moretext);
	  	    } else {
	  	      $(this).addClass("less");
	  	      $(this).html(lesstext);
	  	    }
	  	    $(this).parent().prev().toggle();
	  	    $(this).prev().toggle();
	  	    return false;
	  	  });
	  	
		}
	};

	Drupal.behaviors.cookieNotice = {
		attach: function(context, settings) {
			$(document).ready(function() {
				$('#cookie-notice').cookieBar();
			});
			$("#cookie-notice .more-info").click(function(){
				$("#cookie-notice .more-info-text").toggleClass("visible");
			});
		}
	}

	//Remove openURL text link for institutions that provide an image
	Drupal.behaviors.openurl_text_override = { attach: function (context, settings) {
		if($('.cit-ref-sprinkles-open-url').length > 0){
			$.get(
				Drupal.settings.basePath + 'highwire/openurl/' + Drupal.settings.highwire.nid, 
				function(data){
					if(data){
						$('.cit-ref-sprinkles-open-url').each(function(){
						    $(this).once('checkImage',function(){
								if(data.image){
									//Remove text from .cit-ref-sprinkles-open-url and leave children intact
									$(this).contents().filter(function() {
										return this.nodeType == 3;
									})[0].nodeValue = null;
								}
						    });
						});
					}
				}
			);
			//Hide 
			if($('.cit-ref-sprinkles-open-url img').length > 0 ){
				$('.cit-ref-sprinkles-open-url span').hide();
				$('.cit-ref-sprinkles-open-url div').hide();
				$('.cit-ref-sprinkles-open-url li').hide();
			}
		}
	}}

})(jQuery);
;

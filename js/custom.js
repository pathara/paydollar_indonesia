function newTyped(){}function foo(){console.log("Callback")}function change(e){"cn"==e[e.selectedIndex].value&&window.open("http://www.paydollar.com.cn","_blank"),"hk"==e[e.selectedIndex].value&&window.open("http://www.paydollar.com","_blank"),"in"==e[e.selectedIndex].value&&window.open("http://www.paydollar.in","_blank"),"id"==e[e.selectedIndex].value&&window.open("http://www.paydollar.com/eng/index.html","_blank"),"my"==e[e.selectedIndex].value&&window.open("http://www.paydollar.com.my","_blank"),"sg"==e[e.selectedIndex].value&&window.open("http://www.paydollar.com","_blank"),"th"==e[e.selectedIndex].value&&window.open("http://www.siampay.com","_blank"),"ph"==e[e.selectedIndex].value&&window.open("http://www.pesopay.com","_self"),"vn"==e[e.selectedIndex].value&&window.open("http://www.paydollar.com.vn","_blank"),"tw"==e[e.selectedIndex].value&&window.open("http://www.paydollar.com","_blank"),"mo"==e[e.selectedIndex].value&&window.open("http://www.paydollar.com","_blank"),"magento_1_8_1_0"==e[e.selectedIndex].value&&window.open("http://www.paydollar.com/pdf/module/MagentoPayDollar_v1.8.1.2.rar","_blank"),"drupal_7_x"==e[e.selectedIndex].value&&window.open("http://www.paydollar.com/pdf/module/Drupal_Commerce_Kickstart-7.x-2.x_with_Setup_Guide.rar","_blank"),"opencart_1_0"==e[e.selectedIndex].value&&window.open("http://www.paydollar.com/pdf/module/PD%20opencart_v1.5.6.2.zip","_blank"),"magento_2_1"==e[e.selectedIndex].value&&window.open("http://www.paydollar.com/pdf/module/Magento2.x-PayDollarV1.2.6.zip","_blank"),"opencart_1_0"==e[e.selectedIndex].value&&window.open("http://www.paydollar.com/pdf/module/PD%20opencart_v1.5.6.2.zip","_blank"),"opencart_2_3"==e[e.selectedIndex].value&&window.open("http://www.paydollar.com/pdf/module/PayDollar_opencart2.3.x.zip","_blank"),"zencart_2_3"==e[e.selectedIndex].value&&window.open("http://www.paydollar.com/pdf/module/ZenCart_PD_CPTB_Module_20121012.zip","_blank"),"oscommerce_2_3"==e[e.selectedIndex].value&&window.open("http://www.paydollar.com/pdf/module/osCommerce%20paydollar%20v2.3.zip","_blank"),"prestashop_1_5"==e[e.selectedIndex].value&&window.open("http://www.paydollar.com/pdf/module/prestashop_1_5_x_x%2020131025.rar","_blank"),"litecommerce_2_2"==e[e.selectedIndex].value&&window.open("http://www.paydollar.com/pdf/module/LiteCommerce%202.2.zip","_blank"),"virtuemart_1_x"==e[e.selectedIndex].value&&window.open("http://www.paydollar.com/pdf/module/VirtueMart_PayDollar.zip","_blank"),"virtuemart_2_x"==e[e.selectedIndex].value&&window.open("http://www.paydollar.com/pdf/module/Joomla-VirtueMart_2.5-2.X.zip","_blank"),"virtuemart_3_x"==e[e.selectedIndex].value&&window.open("http://www.paydollar.com/pdf/module/virtueMart3x.zip","_blank"),"woocommerce_2_1"==e[e.selectedIndex].value&&window.open("http://www.paydollar.com/pdf/module/wordpress_3_8_1_and_woocommerce_2_1_2.rar","_blank"),"drupal_2_5"==e[e.selectedIndex].value&&window.open("http://www.paydollar.com.sg/download/plugins/Drupal_Commerce_Kickstart-7.x-2.x_with_Setup_Guide.rar","_blank"),"instantestore_01"==e[e.selectedIndex].value&&window.open("http://www.instantestore.com/","_blank"),"ubercart_2_x"==e[e.selectedIndex].value&&window.open("http://www.paydollar.com/pdf/module/UberCart%202.X.zip","_blank")}function popup(){$(".pesolight").css("display","block")}(function(){var t,o=function(e,t){return function(){return e.apply(t,arguments)}};t=function(){function e(){}return e.prototype.extend=function(e,t){var o,s;for(o in e)null!=(s=e[o])&&(t[o]=s);return t},e.prototype.isMobile=function(e){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)},e}(),this.WOW=function(){function e(e){null==e&&(e={}),this.scrollCallback=o(this.scrollCallback,this),this.scrollHandler=o(this.scrollHandler,this),this.start=o(this.start,this),this.scrolled=!0,this.config=this.util().extend(e,this.defaults)}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0},e.prototype.init=function(){var e;return this.element=window.document.documentElement,"interactive"===(e=document.readyState)||"complete"===e?this.start():document.addEventListener("DOMContentLoaded",this.start)},e.prototype.start=function(){var e,t,o,s;if(this.boxes=this.element.getElementsByClassName(this.config.boxClass),this.boxes.length){if(this.disabled())return this.resetStyle();for(t=0,o=(s=this.boxes).length;t<o;t++)e=s[t],this.applyStyle(e,!0);return window.addEventListener("scroll",this.scrollHandler,!1),window.addEventListener("resize",this.scrollHandler,!1),this.interval=setInterval(this.scrollCallback,50)}},e.prototype.stop=function(){return window.removeEventListener("scroll",this.scrollHandler,!1),window.removeEventListener("resize",this.scrollHandler,!1),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.show=function(e){return this.applyStyle(e),e.className=e.className+" "+this.config.animateClass},e.prototype.applyStyle=function(e,t){var o,s,n;return s=e.getAttribute("data-wow-duration"),o=e.getAttribute("data-wow-delay"),n=e.getAttribute("data-wow-iteration"),e.setAttribute("style",this.customStyle(t,s,o,n))},e.prototype.resetStyle=function(){var e,t,o,s,n;for(n=[],t=0,o=(s=this.boxes).length;t<o;t++)e=s[t],n.push(e.setAttribute("style","visibility: visible;"));return n},e.prototype.customStyle=function(e,t,o,s){var n;return n=e?"visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;":"visibility: visible;",t&&(n+="-webkit-animation-duration: "+t+"; -moz-animation-duration: "+t+"; animation-duration: "+t+";"),o&&(n+="-webkit-animation-delay: "+o+"; -moz-animation-delay: "+o+"; animation-delay: "+o+";"),s&&(n+="-webkit-animation-iteration-count: "+s+"; -moz-animation-iteration-count: "+s+"; animation-iteration-count: "+s+";"),n},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var n;return this.scrolled&&(this.scrolled=!1,this.boxes=function(){var e,t,o,s;for(s=[],e=0,t=(o=this.boxes).length;e<t;e++)(n=o[e])&&(this.isVisible(n)?this.show(n):s.push(n));return s}.call(this),!this.boxes.length)?this.stop():void 0},e.prototype.offsetTop=function(e){var t;for(t=e.offsetTop;e=e.offsetParent;)t+=e.offsetTop;return t},e.prototype.isVisible=function(e){var t,o,s,n,a;return o=e.getAttribute("data-wow-offset")||this.config.offset,n=(a=window.pageYOffset)+this.element.clientHeight-o,t=(s=this.offsetTop(e))+e.clientHeight,s<=n&&a<=t},e.prototype.util=function(){return this._util||(this._util=new t)},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this),function(n){"use strict";var a=function(e,t){this.el=n(e),this.options=n.extend({},n.fn.typed.defaults,t),this.isInput=this.el.is("input"),this.attr=this.options.attr,this.showCursor=!this.isInput&&this.options.showCursor,this.elContent=this.attr?this.el.attr(this.attr):this.el.text(),this.contentType=this.options.contentType,this.typeSpeed=this.options.typeSpeed,this.startDelay=this.options.startDelay,this.backSpeed=this.options.backSpeed,this.backDelay=this.options.backDelay,this.strings=this.options.strings,this.strPos=0,this.arrayPos=0,this.stopNum=0,this.loop=this.options.loop,this.loopCount=this.options.loopCount,this.curLoop=0,this.stop=!1,this.cursorChar=this.options.cursorChar,this.shuffle=this.options.shuffle,this.sequence=[],this.build()};a.prototype={constructor:a,init:function(){var t=this;t.timeout=setTimeout(function(){for(var e=0;e<t.strings.length;++e)t.sequence[e]=e;t.shuffle&&(t.sequence=t.shuffleArray(t.sequence)),t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)},t.startDelay)},build:function(){!0===this.showCursor&&(this.cursor=n('<span class="typed-cursor">'+this.cursorChar+"</span>"),this.el.after(this.cursor)),this.init()},typewrite:function(a,i){if(!0!==this.stop){var e=Math.round(70*Math.random())+this.typeSpeed,r=this;r.timeout=setTimeout(function(){var e=0,t=a.substr(i);if("^"===t.charAt(0)){var o=1;/^\^\d+/.test(t)&&(o+=(t=/\d+/.exec(t)[0]).length,e=parseInt(t)),a=a.substring(0,i)+a.substring(i+o)}if("html"===r.contentType){var s=a.substr(i).charAt(0);if("<"===s||"&"===s){var n;for(n="<"===s?">":";";a.substr(i).charAt(0)!==n;)a.substr(i).charAt(0),i++;i++,n}}r.timeout=setTimeout(function(){if(i===a.length){if(r.options.onStringTyped(r.arrayPos),r.arrayPos===r.strings.length-1&&(r.options.callback(),r.curLoop++,!1===r.loop||r.curLoop===r.loopCount))return;r.timeout=setTimeout(function(){r.backspace(a,i)},r.backDelay)}else{0===i&&r.options.preStringTyped(r.arrayPos);var e=a.substr(0,i+1);r.attr?r.el.attr(r.attr,e):r.isInput?r.el.val(e):"html"===r.contentType?r.el.html(e):r.el.text(e),i++,r.typewrite(a,i)}},e)},e)}},backspace:function(t,o){if(!0!==this.stop){var e=Math.round(70*Math.random())+this.backSpeed,s=this;s.timeout=setTimeout(function(){if("html"===s.contentType&&">"===t.substr(o).charAt(0)){for(;"<"!==t.substr(o).charAt(0);)t.substr(o).charAt(0),o--;o--,"<"}var e=t.substr(0,o);s.attr?s.el.attr(s.attr,e):s.isInput?s.el.val(e):"html"===s.contentType?s.el.html(e):s.el.text(e),o>s.stopNum?(o--,s.backspace(t,o)):o<=s.stopNum&&(s.arrayPos++,s.arrayPos===s.strings.length?(s.arrayPos=0,s.shuffle&&(s.sequence=s.shuffleArray(s.sequence)),s.init()):s.typewrite(s.strings[s.sequence[s.arrayPos]],o))},e)}},shuffleArray:function(e){var t,o,s=e.length;if(s)for(;--s;)t=e[o=Math.floor(Math.random()*(s+1))],e[o]=e[s],e[s]=t;return e},reset:function(){clearInterval(this.timeout);var e=this.el.attr("id");this.el.after('<span id="'+e+'"/>'),this.el.remove(),void 0!==this.cursor&&this.cursor.remove(),this.options.resetCallback()}},n.fn.typed=function(s){return this.each(function(){var e=n(this),t=e.data("typed"),o="object"==typeof s&&s;t||e.data("typed",t=new a(this,o)),"string"==typeof s&&t[s]()})},n.fn.typed.defaults={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],typeSpeed:0,startDelay:0,backSpeed:0,shuffle:!1,backDelay:500,loop:!1,loopCount:!1,showCursor:!0,cursorChar:"|",attr:null,contentType:"html",callback:function(){},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}}}(window.jQuery),function(e){"use strict";function o(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)")}function t(e,t){(s(e,t)?a:n)(e,t)}var s,n,a;a="classList"in document.documentElement?(s=function(e,t){return e.classList.contains(t)},n=function(e,t){e.classList.add(t)},function(e,t){e.classList.remove(t)}):(s=function(e,t){return o(t).test(e.className)},n=function(e,t){s(e,t)||(e.className=e.className+" "+t)},function(e,t){e.className=e.className.replace(o(t)," ")}),e.classie={hasClass:s,addClass:n,removeClass:a,toggleClass:t,has:s,add:n,remove:a,toggle:t}}(window),$("select").selectBoxIt({showEffect:"fadeIn",showEffectSpeed:400,hideEffect:"fadeOut",hideEffectSpeed:400}),$(function(){var s=$(window);s.on("mousewheel DOMMouseScroll",function(e){e.preventDefault();var t=e.originalEvent.wheelDelta/120||-e.originalEvent.detail/3,o=s.scrollTop()-parseInt(275*t);TweenMax.to(s,.8,{scrollTo:{y:o,autoKill:!0},ease:Power1.easeOut,autoKill:!0,overwrite:5})})}),$(function(){$("#typed").typed({strings:["Credit Card","Debit Card","E-Wallet","Cash"],typeSpeed:5,backDelay:4e3,loop:!0,contentType:"html",loopCount:!1,callback:function(){foo()},resetCallback:function(){newTyped()}}),$(".reset").click(function(){$("#typed").typed("reset")})}),function(o){(new WOW).init(),jQuery(window).load(function(){jQuery("#preloader").delay(100).fadeOut("slow"),jQuery("#load").delay(100).fadeOut("slow")}),o(function(){o(".navbar-nav li a").bind("click",function(e){var t=o(this);o("html, body").stop().animate({scrollTop:o(t.attr("href")).offset().top},1500,"easeInOutExpo"),e.preventDefault()}),o("a.page-scroll").bind("click",function(e){var t=o(this);o("html, body").stop().animate({scrollTop:o(t.attr("href")).offset().top},1500,"easeInOutExpo"),e.preventDefault()})})}(jQuery),$(".search_open").click(function(){$("#navbar").css("margin-top","100px"),$(".intro").css("margin-top","100px"),$(".search_open").css("display","none")}),$(".search_close").click(function(){$("#navbar").css("margin-top","0px"),$(".intro").css("margin-top","0px"),$(".search_open").css("display","block")}),$(".search-close-btn").click(function(){$("#navbar").css("margin-top","0px"),$(".intro").css("margin-top","0px"),$(".search_close").css("display","none"),$(".search_open").css("display","block")}),$(".overlay-services").click(function(){$(".overlay-services").fadeToggle("fast"),$("#sub_services").removeClass("dtAni"),$("#sub_services").css("display","none")}),$(".overlay-resources").click(function(){$(".overlay-resources").fadeToggle("fast"),$("#sub_resources").removeClass("dtAni"),$("#sub_resources").css("display","none")}),$(".overlay-about").click(function(){$(".overlay-about").fadeToggle("fast"),$("#sub_about").removeClass("dtAni"),$("#sub_about").css("display","none")}),$(".services-dt").click(function(){$("#sub_services").fadeToggle("fast"),$("#sub_resources").removeClass("dtAni"),$("#sub_about").removeClass("dtAni"),$("#sub_resources").css("display","none"),$("#sub_about").css("display","none"),$(".overlay-services").fadeToggle("fast"),$(".overlay-resources").css("display","none"),$(".overlay-about").css("display","none")}),$(".resources-dt").click(function(){$("#sub_resources").fadeToggle("fast"),$("#sub_services").removeClass("dtAni"),$("#sub_about").removeClass("dtAni"),$("#sub_services").css("display","none"),$("#sub_about").css("display","none"),$(".overlay-resources").fadeToggle("fast"),$(".overlay-services").css("display","none"),$(".overlay-about").css("display","none")}),$(".about-dt").click(function(){$("#sub_about").fadeToggle("fast"),$("#sub_services").removeClass("dtAni"),$("#sub_resources").removeClass("dtAni"),$("#sub_services").css("display","none"),$("#sub_resources").css("display","none"),$(".overlay-about").fadeToggle("fast"),$(".overlay-resources").css("display","none"),$(".overlay-services").css("display","none")}),$(".mrppCorpMenu").click(function(){$(".mrppCorpDesc").fadeIn("slow"),$(".mrppSubNav").fadeIn("slow"),$(".mrppNavMain").fadeOut("slow"),$(".mrppIndiSubMenu .imgbtn").addClass("disable")}),$(".mrppIndiMenu").click(function(){$(".mrppIndiDesc").fadeIn("slow"),$(".mrppSubNav").fadeIn("slow"),$(".mrppNavMain").fadeOut("slow"),$(".mrppCorpSubMenu .imgbtn").addClass("disable")}),$(".mrppCorpSubMenu").click(function(){$(".mrppCorpDesc").fadeIn("slow"),$(".mrppIndiDesc").fadeOut("slow"),$(".mrppIndiSubMenu .imgbtn").addClass("disable"),$(".mrppCorpSubMenu .imgbtn").removeClass("disable")}),$(".mrppIndiSubMenu").click(function(){$(".mrppIndiDesc").fadeIn("slow"),$(".mrppCorpDesc").fadeOut("slow"),$(".mrppCorpSubMenu .imgbtn").addClass("disable"),$(".mrppIndiSubMenu .imgbtn").removeClass("disable")}),$(function(){var e=document.getElementById("services-md");subServices=document.getElementById("sub_services"),resourcesMD=document.getElementById("resources-md"),subResources=document.getElementById("sub_resources"),aboutMD=document.getElementById("about-md"),subAbout=document.getElementById("sub_about"),backServices=document.getElementById("backServices"),backResources=document.getElementById("backResources"),backAbout=document.getElementById("backAbout"),e.onclick=function(){classie.toggle(subServices,"mynavAni")},resourcesMD.onclick=function(){classie.toggle(subResources,"mynavAni")},aboutMD.onclick=function(){classie.toggle(subAbout,"mynavAni")},backServices.onclick=function(){$("#sub_services").removeClass("mynavAni")},backResources.onclick=function(){$("#sub_resources").removeClass("mynavAni")},backAbout.onclick=function(){$("#sub_about").removeClass("mynavAni")}}),$(function(){}),$(function(){document.getElementById("navbar"),showRightPush=document.getElementById("showRightPush"),showRightPush2=document.getElementById("showRightPush2"),showRightPush3=document.getElementById("showRightPush3"),body=document.body,html=document.getElementById("html"),blueOverlay=document.getElementById("blue-overlay"),mynav=document.getElementById("mynav"),showRightPush.onclick=function(){classie.toggle(this,"active"),classie.toggle(mynav,"mynavAni"),$(".overflow-slide").css("display","block"),classie.toggle(body,"of-hidden"),classie.toggle(html,"of-hidden"),$(".navbar").css("display","block")}}),$("select").selectBoxIt({showEffect:"fadeIn",showEffectSpeed:400,hideEffect:"fadeOut",hideEffectSpeed:400}),jQuery(document).ready(function(){jQuery("img.svg").each(function(){var o=jQuery(this),s=o.attr("id"),n=o.attr("class"),e=o.attr("src");jQuery.get(e,function(e){var t=jQuery(e).find("svg");void 0!==s&&(t=t.attr("id",s)),void 0!==n&&(t=t.attr("class",n+" replaced-svg")),t=t.removeAttr("xmlns:a"),o.replaceWith(t)})})}),eval(function(e,t,o,s,n,a){if(n=function(e){return e.toString(36)},!"".replace(/^/,String)){for(;o--;)a[o.toString(32)]=s[o]||o.toString(32);s=[function(e){return a[e]}],n=function(){return"\\w+"},o=1}for(;o--;)s[o]&&(e=e.replace(new RegExp("\\b"+n(o)+"\\b","g"),s[o]));return e}("$('.0').1(2(){$('.0').b('8')});$('.0-q').1(2(9){9.o()});$('.0-r').1(2(){$('.0').b('8')});$('.d a').7('3','4://5.e.6/c/f/l.n?m=j&k=g&h=i');$('.d-t a').7('3','4://5.e.6/c/f/l.n?m=j&k=g&h=i');$('.u').v('p','s');",0,32,"pesolight|click|function|href|http|www|com|attr|slow|event||fadeOut|campaigns|adside|pesopay|basicplan|banner|utm_campaign|bscplnbannerclicks|website|utm_medium|bsc072216|utm_source|html|stopPropagation|display|content|button|none|inner|m3title5sub3|css".split("|"),0,{})),setTimeout(popup,2e3);
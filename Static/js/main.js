/**
 * Campaign block
 */
$(function() {
    "use strict";
	
    if (cssua.ua.mobile) {
        $(".campaign__video").remove();
    }
});
function loadArticles(count, listId, loadMore) {
    var listObject = $("#" + listId + " li");
    var itemCount = listObject.length;
    var visibleCount = listObject.not(".hidden").length;

    // Remove extra spacing.
    listObject.removeClass("articleBottomSpacing");

    // Increase the number of visible items by removing class hidden.
    // To obtain a fade in of the items, first the class "visuallyhidden" is added.
    // Two milliseconds later "visuallyhidden" is removed and the class "visibleagain" is added.
    var newVisibleCount = (visibleCount + count <= itemCount) ? visibleCount + count : itemCount;
    for (var j = visibleCount; j <= newVisibleCount - 1 ; j++)
        $('#' + listId + ' li:eq(' + j + ')').removeClass("hidden").addClass("visuallyhidden");
    setTimeout(function () {
        for (var i = visibleCount; i <= newVisibleCount - 1; i++)
            $('#' + listId + ' li:eq(' + i + ')').removeClass("visuallyhidden").addClass("visibleagain");
    }, 2);

    // If the last item to be displayed is even, we add extra space.
    if (newVisibleCount < itemCount && newVisibleCount % 2 === 0) {
        var addSpacingIndex = newVisibleCount - 1;
        $('#' + listId + ' li:eq(' + addSpacingIndex + ')').addClass("articleBottomSpacing");
    }

    // If all the items in the list are visible, the Load more-button is hidden.
    if (newVisibleCount === itemCount)
        $("#" + loadMore).hide();
}
/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backgroundsize-cssgradients-csstransforms-csstransforms3d-csstransitions-flexbox-flexboxlegacy-inlinesvg-multiplebgs-objectfit-rgba-svg-svgclippaths-domprefixes-mq-prefixes-setclasses-shiv-testallprops-testprop-teststyles !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,i,a,s;for(var l in S)if(S.hasOwnProperty(l)){if(e=[],t=S[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)a=e[i],s=a.split("."),1===s.length?Modernizr[s[0]]=o:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=o),b.push((o?"":"no-")+s.join("-"))}}function i(e){var t=w.className,n=Modernizr._config.classPrefix||"";if(E&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),E?w.className.baseVal=t:w.className=t)}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):E?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function l(e,t){return!!~(""+e).indexOf(t)}function u(){var e=t.body;return e||(e=a(E?"svg":"body"),e.fake=!0),e}function c(e,n,r,o){var i,s,l,c,f="modernizr",d=a("div"),p=u();if(parseInt(r,10))for(;r--;)l=a("div"),l.id=o?o[r]:f+(r+1),d.appendChild(l);return i=a("style"),i.type="text/css",i.id="s"+f,(p.fake?p:d).appendChild(i),p.appendChild(d),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),d.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",c=w.style.overflow,w.style.overflow="hidden",w.appendChild(p)),s=n(d,e),p.fake?(p.parentNode.removeChild(p),w.style.overflow=c,w.offsetHeight):d.parentNode.removeChild(d),!!s}function f(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var i=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){var a=i.error?"error":"log";i[a].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}function p(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(f(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+f(t[o])+":"+r+")");return i=i.join(" or "),c("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==d(e,null,"position")})}return n}function m(e,t,o,i){function u(){f&&(delete O.style,delete O.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var c=p(e,o);if(!r(c,"undefined"))return c}for(var f,d,m,g,h,v=["modernizr","tspan","samp"];!O.style&&v.length;)f=!0,O.modElem=a(v.shift()),O.style=O.modElem.style;for(m=e.length,d=0;m>d;d++)if(g=e[d],h=O.style[g],l(g,"-")&&(g=s(g)),O.style[g]!==n){if(i||r(o,"undefined"))return u(),"pfx"==t?g:!0;try{O.style[g]=o}catch(y){}if(O.style[g]!=h)return u(),"pfx"==t?g:!0}return u(),!1}function g(e,t){return function(){return e.apply(t,arguments)}}function h(e,t,n){var o;for(var i in e)if(e[i]in t)return n===!1?e[i]:(o=t[e[i]],r(o,"function")?g(o,n||t):o);return!1}function v(e,t,n,o,i){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+F.join(a+" ")+a).split(" ");return r(t,"string")||r(t,"undefined")?m(s,t,o,i):(s=(e+" "+_.join(a+" ")+a).split(" "),h(s,t,n))}function y(e,t,r){return v(e,n,n,t,r)}var b=[],S=[],C={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){S.push({name:e,fn:t,options:n})},addAsyncTest:function(e){S.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr,Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var x=C._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];C._prefixes=x;var w=t.documentElement,E="svg"===w.nodeName.toLowerCase();E||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=b.elements;return"string"==typeof e?e.split(" "):e}function o(e,t){var n=b.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),b.elements=n+" "+e,u(t)}function i(e){var t=y[e[h]];return t||(t={},v++,e[h]=v,y[v]=t),t}function a(e,n,r){if(n||(n=t),f)return n.createElement(e);r||(r=i(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():g.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||m.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function s(e,n){if(e||(e=t),f)return e.createDocumentFragment();n=n||i(e);for(var o=n.frag.cloneNode(),a=0,s=r(),l=s.length;l>a;a++)o.createElement(s[a]);return o}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return b.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(b,t.frag)}function u(e){e||(e=t);var r=i(e);return!b.shivCSS||c||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),f||l(e,r),e}var c,f,d="3.7.3",p=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,g=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",v=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",c="hidden"in e,f=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){c=!0,f=!0}}();var b={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:d,shivCSS:p.shivCSS!==!1,supportsUnknownElements:f,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:u,createElement:a,createDocumentFragment:s,addElements:o};e.html5=b,u(t),"object"==typeof module&&module.exports&&(module.exports=b)}("undefined"!=typeof e?e:this,t);var T="Moz O ms Webkit",_=C._config.usePrefixes?T.toLowerCase().split(" "):[];C._domPrefixes=_,Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",r="",o=0,i=x.length-1;i>o;o++)e=0===o?"to ":"",r+=t+x[o]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(r+=t+"-webkit-"+n);var s=a("a"),l=s.style;return l.cssText=r,(""+l.backgroundImage).indexOf("gradient")>-1}),Modernizr.addTest("multiplebgs",function(){var e=a("a").style;return e.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(e.background)}),Modernizr.addTest("rgba",function(){var e=a("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1}),Modernizr.addTest("inlinesvg",function(){var e=a("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var k="CSS"in e&&"supports"in e.CSS,N="supportsCSS"in e;Modernizr.addTest("supports",k||N);var z={}.toString;Modernizr.addTest("svgclippaths",function(){return!!t.createElementNS&&/SVGClipPath/.test(z.call(t.createElementNS("http://www.w3.org/2000/svg","clipPath")))});var P=C.testStyles=c,j=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return c("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();C.mq=j;var F=C._config.usePrefixes?T.split(" "):[];C._cssomPrefixes=F;var M=function(t){var r,o=x.length,i=e.CSSRule;if("undefined"==typeof i)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+t;for(var a=0;o>a;a++){var s=x[a],l=s.toUpperCase()+"_"+r;if(l in i)return"@-"+s.toLowerCase()+"-"+t}return!1};C.atRule=M;var L={elem:a("modernizr")};Modernizr._q.push(function(){delete L.elem});var O={style:L.elem.style};Modernizr._q.unshift(function(){delete O.style});C.testProp=function(e,t,r){return m([e],n,t,r)};C.testAllProps=v,C.testAllProps=y,Modernizr.addTest("backgroundsize",y("backgroundSize","100%",!0)),Modernizr.addTest("flexbox",y("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",y("boxDirection","reverse",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&y("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){var e=!!y("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in w.style)){var n,r="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",P(r+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),Modernizr.addTest("csstransitions",y("transition","all",!0));var R=C.prefixed=function(e,t,n){return 0===e.indexOf("@")?M(e):(-1!=e.indexOf("-")&&(e=s(e)),t?v(e,t,n):v(e,"pfx"))};Modernizr.addTest("objectfit",!!R("objectFit"),{aliases:["object-fit"]}),o(),i(b),delete C.addTest,delete C.addAsyncTest;for(var A=0;A<Modernizr._q.length;A++)Modernizr._q[A]();e.Modernizr=Modernizr}(window,document);

$(function () {
    "use strict";

	$(document).on('click', 'a[href="#"]', function(e){
		e.preventDefault();
	});

	$(document).ready(function () {
	    //Fire plugin
	    $('.focuspoint').focusPoint();
	});
	
	/** header & navigation menu **/
	var $header = $('.globalHeader');
	$header.headroom({
		offset:80
	});		
	
	var $submenu = $('.subnav');
	$submenu.headroom({
        offset: 80,
        classes: {
            pinned: "subnavposition--pinned",
            unpinned: "subnavposition--unpinned",
            top: "subnavposition--top",
            notTop: "subnavposition--not-top",
            initial: "subnavposition"
        }
    });

    var $menuBtn = $('#menuButton');
    $menuBtn.click(function () {
        var $this = $(this);
        $this.toggleClass('open');
        $header.toggleClass('fixed');
        $this.find('i').toggleClass('icon-menu icon-close');
    });

    $(window).resize(debouncer(function () {
        if ($(window).width() > 1087) {
            closeMenu();
        }
    }));

    function closeMenu() {
        $header.removeClass('fixed');
        $menuBtn.removeClass('open');
        $menuBtn.find('i').removeClass('icon-close').addClass('icon-menu');
    }

    $('#mainNavigation li')
        .on('click',
            function (event) {
                var li$ = $(this);

                if (event.target.tagName === "A" || event.target.parentElement.tagName === "A") {
                    return;
                }

                if ($(this).hasClass("active")) {
                    $(this).removeClass('active');
                } else {
                    li$.parent('ul').find('li').removeClass('active');
                    li$.addClass('active');
                }
            });


    /* end header & navigation menu */
	
	/* featureBoxes */
	var $featureBox = $('.featureBoxes section');
	
	$featureBox.not('.active').one('click',function(){
		$(this).css('z-index',1).addClass('active');
		$(this).siblings().css('z-index',0);
	});
	
	$featureBox.find('.closeBtn').click(function(){
		$featureBox.removeClass('active');
		setTimeout(function(){
			$featureBox.not('.active').one('click',function(){
				$(this).css('z-index',1).addClass('active');
				$(this).siblings().css('z-index',0);
			});
		}, 200);
	});
	/* end featureBoxes */
	
	var allElmMatch = '.opacity,.pageSection,.textWrap,.section-title:not(.textWrap .section-title)';

    /* featureBoxes */
    var $featureBox = $('.featureBoxes section');


    /* fade-in elements */
    $(window).scroll(function () {
        $(allElmMatch).each(function (i, el) {
            el = $(el);
            if (el.visible(true)) {
                el.addClass('in-viewport');
            }
        });
    }).scroll();

    /* fade-in elements - On back navigation load in all elements */
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 0) {
        $(allElmMatch).each(function (i, el) {
            $(el).addClass('in-viewport');
        });
    }

    /* image object-fit alternative for Edge and IE */
    if (!Modernizr.objectfit) {
        $('.image-block').each(function () {
            var $container = $(this),
                imgUrl = $container.find('img').prop('src');

            if (imgUrl) {
                $container
                    .css('backgroundImage', 'url(' + imgUrl + ')')
                    .addClass('compat-object-fit');
            }
        });
    }
    /* end image object-fit alternative for Edge and IE */

});

function debouncer(func, timeout) {
    "use strict";
    var timeoutID, timeout = timeout || 200;
    return function () {
        var scope = this, args = arguments;
        clearTimeout(timeoutID);
        timeoutID = setTimeout(function () {
            func.apply(scope, Array.prototype.slice.call(args));
        }, timeout);
    };
}
$(function(){
	"use strict";
	var $tabs = $('.tabs');
	var delay = 0;
	
	if($tabs.length){		
		$tabs.each(function(){
			var $o = $(this);
			var $el = $o.find('li');
			var $a = $el.find('.handle');
			var first = true;
			
			if($tabs.is('.v2')){
				delay = 3500;
			}
			
			setTimeout(function(){
				changeTab($o,$el,first);
			},delay);
			
			$a.click(function(e){
				first = false;
				var $clicked = $(this).parent();
				$clicked.siblings().removeClass('active');
				$clicked.addClass('active');				
				if(!$o.hasClass('fakeTabs')){
					changeTab($o,$el,first);
				}
				e.preventDefault();
			});
		});
	}
	
});

function changeTab($o,$el,first) {
	"use strict";
	
	if(first && !$el.hasClass('active') && !$o.is('.nodefault')){		
		$el.eq(0).addClass('active');
		setTimeout(function(){
			$o.addClass('activated');
		},500);
	}
	
	var $activeTab = $o.find('.active article');
	$o.find('.active').siblings().find('article').hide();
	if(first){
		$activeTab.fadeIn(2000);
	} else {
		$activeTab.fadeIn();
	}
	
	$o.removeAttr('style');
	
	if($o.height() < $activeTab.height()){
		$o.height($activeTab.height());
	}
}
/**
 * Teaser block have a hover effect.
 * This replicates the behaviour on touch devices.
 * If the user taps on an already tapped element, they follow the link.
 * If the user taps on a not tapped element, they see the hover effect (adding a hover class)
 */
$(function () {
	"use strict";
	$('.teaser-block').on("touchstart", function (e) { //TODO: touchstart event blocks scrolling on mobile devices. Should be changed to some kind of tap event instead.
		var block = $(this);

		if (block.hasClass('hover')) {
			// Do nothing - User fill follow the link.
		}
		else {
			block.addClass('hover');
			$('.teaser-block').not(this).removeClass('hover');
			e.preventDefault();
		}
	});
});
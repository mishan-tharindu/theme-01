
var wpAjaxUrl='http://localhost:8081/theme-01/wp-admin/admin-ajax.php';var flBuilderUrl='http://localhost:8081/theme-01/wp-content/plugins/bb-plugin/';var FLBuilderLayoutConfig={anchorLinkAnimations:{duration:1000,easing:'swing',offset:100},paths:{pluginUrl:'http://localhost:8081/theme-01/wp-content/plugins/bb-plugin/',wpAjaxUrl:'http://localhost:8081/theme-01/wp-admin/admin-ajax.php'},breakpoints:{small:768,medium:992},waypoint:{offset:80}};(function($){if(typeof FLBuilderLayout!='undefined'){return;}
FLBuilderLayout={init:function()
{FLBuilderLayout._destroy();FLBuilderLayout._initClasses();FLBuilderLayout._initBackgrounds();if(0===$('.fl-builder-edit').length){FLBuilderLayout._initModuleAnimations();FLBuilderLayout._initAnchorLinks();FLBuilderLayout._initHash();FLBuilderLayout._initForms();}},refreshGalleries:function(element)
{var $element='undefined'==typeof element?$('body'):$(element),mfContent=$element.find('.fl-mosaicflow-content'),wmContent=$element.find('.fl-gallery'),mfObject=null;if(mfContent){mfObject=mfContent.data('mosaicflow');if(mfObject){mfObject.columns=$([]);mfObject.columnsHeights=[];mfContent.data('mosaicflow',mfObject);mfContent.mosaicflow('refill');}}
if(wmContent){wmContent.trigger('refreshWookmark');}},refreshGridLayout:function(element)
{var $element='undefined'==typeof element?$('body'):$(element),msnryContent=$element.find('.masonry');if(msnryContent.length){msnryContent.masonry('layout');}},reloadSlider:function(element)
{var $element='undefined'==typeof element?$('body'):$(element),bxContent=$element.find('.bx-viewport > div').eq(0),bxObject=null;if(bxContent.length){bxObject=bxContent.data('bxSlider');if(bxObject){bxObject.reloadSlider();}}},resizeAudio:function(element)
{var $element='undefined'==typeof element?$('body'):$(element),audioPlayers=$element.find('.wp-audio-shortcode.mejs-audio'),player=null,mejsPlayer=null,rail=null,railWidth=400;if(audioPlayers.length&&typeof mejs!=='undefined'){audioPlayers.each(function(){player=$(this);mejsPlayer=mejs.players[player.attr('id')];rail=player.find('.mejs-controls .mejs-time-rail');var innerMejs=player.find('.mejs-inner'),total=player.find('.mejs-controls .mejs-time-total');if(typeof mejsPlayer!=='undefined'){railWidth=Math.ceil(player.width()*0.8);if(innerMejs.length){rail.css('width',railWidth+'px!important');mejsPlayer.options.autosizeProgress=true;setTimeout(function(){mejsPlayer.setControlsSize();},50);player.find('.mejs-inner').css({visibility:'visible',height:'inherit'});}}});}},preloadAudio:function(element)
{var $element='undefined'==typeof element?$('body'):$(element),contentWrap=$element.closest('.fl-accordion-item'),audioPlayers=$element.find('.wp-audio-shortcode.mejs-audio');if(!contentWrap.hasClass('fl-accordion-item-active')&&audioPlayers.find('.mejs-inner').length){audioPlayers.find('.mejs-inner').css({visibility:'hidden',height:0});}},resizeSlideshow:function(){if(typeof YUI!=='undefined'){YUI().use('node-event-simulate',function(Y){Y.one(window).simulate("resize");});}},reloadGoogleMap:function(element){var $element='undefined'==typeof element?$('body'):$(element),googleMap=$element.find('iframe[src*="google.com/maps"]');if(googleMap.length){googleMap.attr('src',function(i,val){return val;});}},_destroy:function()
{var win=$(window);win.off('scroll.fl-bg-parallax');win.off('resize.fl-bg-video');},_isTouch:function()
{if(('ontouchstart'in window)||(window.DocumentTouch&&document instanceof DocumentTouch)){return true;}
return false;},_isMobile:function()
{return/Mobile|Android|Silk\/|Kindle|BlackBerry|Opera Mini|Opera Mobi|webOS/i.test(navigator.userAgent);},_initClasses:function()
{var body=$('body'),ua=navigator.userAgent;if(!body.hasClass('archive')&&$('.fl-builder-content-primary').length>0){body.addClass('fl-builder');}
if(FLBuilderLayout._isTouch()){body.addClass('fl-builder-touch');}
if(FLBuilderLayout._isMobile()){body.addClass('fl-builder-mobile');}
if($(window).width()<FLBuilderLayoutConfig.breakpoints.small){body.addClass('fl-builder-breakpoint-small');}
if($(window).width()>FLBuilderLayoutConfig.breakpoints.small&&$(window).width()<FLBuilderLayoutConfig.breakpoints.medium){body.addClass('fl-builder-breakpoint-medium');}
if($(window).width()>FLBuilderLayoutConfig.breakpoints.medium){body.addClass('fl-builder-breakpoint-large');}
if(ua.indexOf('Trident/7.0')>-1&&ua.indexOf('rv:11.0')>-1){body.addClass('fl-builder-ie-11');}},_initBackgrounds:function()
{var win=$(window);if($('.fl-row-bg-parallax').length>0&&!FLBuilderLayout._isMobile()){FLBuilderLayout._scrollParallaxBackgrounds();FLBuilderLayout._initParallaxBackgrounds();win.on('scroll.fl-bg-parallax',FLBuilderLayout._scrollParallaxBackgrounds);}
if($('.fl-bg-video').length>0){FLBuilderLayout._initBgVideos();FLBuilderLayout._resizeBgVideos();win.on('resize.fl-bg-video',FLBuilderLayout._resizeBgVideos);}},_initParallaxBackgrounds:function()
{$('.fl-row-bg-parallax').each(FLBuilderLayout._initParallaxBackground);},_initParallaxBackground:function()
{var row=$(this),content=row.find('> .fl-row-content-wrap'),src=row.data('parallax-image'),loaded=row.data('parallax-loaded'),img=new Image();if(loaded){return;}
else if(typeof src!='undefined'){$(img).on('load',function(){content.css('background-image','url('+src+')');row.data('parallax-loaded',true);});img.src=src;}},_scrollParallaxBackgrounds:function()
{$('.fl-row-bg-parallax').each(FLBuilderLayout._scrollParallaxBackground);},_scrollParallaxBackground:function()
{var win=$(window),row=$(this),content=row.find('> .fl-row-content-wrap'),speed=row.data('parallax-speed'),offset=content.offset(),yPos=-((win.scrollTop()-offset.top)/speed);content.css('background-position','center '+yPos+'px');},_initBgVideos:function()
{$('.fl-bg-video').each(FLBuilderLayout._initBgVideo);},_initBgVideo:function()
{var wrap=$(this),width=wrap.data('width'),height=wrap.data('height'),mp4=wrap.data('mp4'),youtube=wrap.data('youtube'),vimeo=wrap.data('vimeo'),mp4Type=wrap.data('mp4-type'),webm=wrap.data('webm'),webmType=wrap.data('webm-type'),fallback=wrap.data('fallback'),loaded=wrap.data('loaded'),videoMobile=wrap.data('video-mobile'),fallbackTag='',videoTag=null,mp4Tag=null,webmTag=null;if(loaded){return;}
videoTag=$('<video autoplay loop muted playsinline></video>');if('undefined'!=typeof fallback&&''!=fallback){videoTag.attr('poster','data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7')
videoTag.css('background','transparent url("'+fallback+'") no-repeat center center')
videoTag.css('background-size','cover')
videoTag.css('height','100%')}
if('undefined'!=typeof mp4&&''!=mp4){mp4Tag=$('<source />');mp4Tag.attr('src',mp4);mp4Tag.attr('type',mp4Type);videoTag.append(mp4Tag);}
if('undefined'!=typeof webm&&''!=webm){webmTag=$('<source />');webmTag.attr('src',webm);webmTag.attr('type',webmType);videoTag.append(webmTag);}
if(!FLBuilderLayout._isMobile()||(FLBuilderLayout._isMobile()&&"yes"==videoMobile)){if('undefined'!=typeof youtube){FLBuilderLayout._initYoutubeBgVideo.apply(this);}
else if('undefined'!=typeof vimeo){FLBuilderLayout._initVimeoBgVideo.apply(this);}
else{wrap.append(videoTag);}}
else{videoTag.attr('src','')
wrap.append(videoTag);}
wrap.data('loaded',true);},_initYoutubeBgVideo:function()
{var playerWrap=$(this),videoId=playerWrap.data('video-id'),videoPlayer=playerWrap.find('.fl-bg-video-player'),enableAudio=playerWrap.data('enable-audio'),audioButton=playerWrap.find('.fl-bg-video-audio'),startTime='undefined'!==typeof playerWrap.data('start')?playerWrap.data('start'):0,startTime='undefined'!==typeof playerWrap.data('t')&&startTime===0?playerWrap.data('t'):startTime,endTime='undefined'!==typeof playerWrap.data('end')?playerWrap.data('end'):0,loop='undefined'!==typeof playerWrap.data('loop')?playerWrap.data('loop'):1,stateCount=0,player,fallback_showing;if(videoId){fallback=playerWrap.data('fallback')||false
if(fallback){playerWrap.find('iframe').remove()
fallbackTag=$('<div></div>');fallbackTag.addClass('fl-bg-video-fallback');fallbackTag.css('background-image','url('+playerWrap.data('fallback')+')');fallbackTag.css('background-size','cover');fallbackTag.css('transition','background-image 1s')
playerWrap.append(fallbackTag);fallback_showing=true;}
FLBuilderLayout._onYoutubeApiReady(function(YT){setTimeout(function(){player=new YT.Player(videoPlayer[0],{videoId:videoId,events:{onReady:function(event){if("no"===enableAudio||FLBuilderLayout._isMobile()){event.target.mute();}
else if("yes"===enableAudio&&event.target.isMuted){event.target.unMute();}
playerWrap.data('YTPlayer',player);FLBuilderLayout._resizeYoutubeBgVideo.apply(playerWrap);event.target.playVideo();if(audioButton.length>0&&!FLBuilderLayout._isMobile()){audioButton.on('click',{button:audioButton,player:player},FLBuilderLayout._toggleBgVideoAudio);}},onStateChange:function(event){if(event.data===1){if(fallback_showing){$('.fl-bg-video-fallback').css('background-image','url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)')}}
if(stateCount<4){stateCount++;}
if(stateCount>1&&(-1===event.data||2===event.data)&&"yes"===enableAudio){player.mute();player.playVideo();audioButton.show();}
if(event.data===YT.PlayerState.ENDED&&1===loop){if(startTime>0){player.seekTo(startTime);}
else{player.playVideo();}}},onError:function(event){console.info('YT Error: '+event.data)
FLBuilderLayout._onErrorYoutubeVimeo(playerWrap)}},playerVars:{playsinline:FLBuilderLayout._isMobile()?1:0,controls:0,showinfo:0,rel:0,start:startTime,end:endTime,}});},1);});}},_onErrorYoutubeVimeo:function(playerWrap){fallback=playerWrap.data('fallback')||false
if(!fallback){return false;}
playerWrap.find('iframe').remove()
fallbackTag=$('<div></div>');fallbackTag.addClass('fl-bg-video-fallback');fallbackTag.css('background-image','url('+playerWrap.data('fallback')+')');playerWrap.append(fallbackTag);},_onYoutubeApiReady:function(callback){if(window.YT&&YT.loaded){callback(YT);}else{setTimeout(function(){FLBuilderLayout._onYoutubeApiReady(callback);},350);}},_initVimeoBgVideo:function()
{var playerWrap=$(this),videoId=playerWrap.data('video-id'),videoPlayer=playerWrap.find('.fl-bg-video-player'),enableAudio=playerWrap.data('enable-audio'),audioButton=playerWrap.find('.fl-bg-video-audio'),player,width=playerWrap.outerWidth(),ua=navigator.userAgent;if(typeof Vimeo!=='undefined'&&videoId){player=new Vimeo.Player(videoPlayer[0],{id:videoId,loop:true,title:false,portrait:false,background:true,autopause:false,muted:true});playerWrap.data('VMPlayer',player);if("no"===enableAudio){player.setVolume(0);}
else if("yes"===enableAudio){if(ua.indexOf("Safari")>-1||ua.indexOf("Chrome")>-1){player.setVolume(0);audioButton.show();}
else{player.setVolume(1);}}
player.play().catch(function(error){FLBuilderLayout._onErrorYoutubeVimeo(playerWrap)});if(audioButton.length>0){audioButton.on('click',{button:audioButton,player:player},FLBuilderLayout._toggleBgVideoAudio);}}},_toggleBgVideoAudio:function(e){var player=e.data.player,control=e.data.button.find('.fl-audio-control');if(control.hasClass('fa-volume-off')){control.removeClass('fa-volume-off').addClass('fa-volume-up');e.data.button.find('.fa-times').hide();if('function'===typeof player.unMute){player.unMute();}
else{player.setVolume(1);}}
else{control.removeClass('fa-volume-up').addClass('fa-volume-off');e.data.button.find('.fa-times').show();if('function'===typeof player.unMute){player.mute();}
else{player.setVolume(0);}}},_videoBgSourceError:function(e)
{var source=$(e.target),wrap=source.closest('.fl-bg-video'),vid=wrap.find('video'),fallback=wrap.data('fallback'),fallbackTag='';source.remove();if(vid.find('source').length){return;}else if(''!==fallback){fallbackTag=$('<div></div>');fallbackTag.addClass('fl-bg-video-fallback');fallbackTag.css('background-image','url('+fallback+')');wrap.append(fallbackTag);vid.remove();}},_resizeBgVideos:function()
{$('.fl-bg-video').each(function(){FLBuilderLayout._resizeBgVideo.apply(this);if($(this).parent().find('img').length>0){$(this).parent().imagesLoaded($.proxy(FLBuilderLayout._resizeBgVideo,this));}});},_resizeBgVideo:function()
{if(0===$(this).find('video').length&&0===$(this).find('iframe').length){return;}
var wrap=$(this),wrapHeight=wrap.outerHeight(),wrapWidth=wrap.outerWidth(),vid=wrap.find('video'),vidHeight=wrap.data('height'),vidWidth=wrap.data('width'),newWidth=wrapWidth,newHeight=Math.round(vidHeight*wrapWidth/vidWidth),newLeft=0,newTop=0,iframe=wrap.find('iframe');if(vid.length){if(vidHeight===''||typeof vidHeight==='undefined'||vidWidth===''||typeof vidWidth==='undefined'){vid.css({'left':'0px','top':'0px','width':newWidth+'px'});vid.on('loadedmetadata',FLBuilderLayout._resizeOnLoadedMeta);}
else{if(newHeight<wrapHeight){newHeight=wrapHeight;newLeft=-((newWidth-wrapWidth)/2);if(0!=vidHeight){newWidth=Math.round(vidWidth*wrapHeight/vidHeight);}}
else{newTop=-((newHeight-wrapHeight)/2);}
vid.css({'left':newLeft+'px','top':newTop+'px','height':newHeight+'px','width':newWidth+'px'});vid.on('loadedmetadata',FLBuilderLayout._resizeOnLoadedMeta);}}
else if(iframe.length){if(typeof wrap.data('youtube')!=='undefined'){FLBuilderLayout._resizeYoutubeBgVideo.apply(this);}}},_resizeOnLoadedMeta:function(){var video=$(this),wrapHeight=video.parent().outerHeight(),wrapWidth=video.parent().outerWidth(),vidWidth=video[0].videoWidth,vidHeight=video[0].videoHeight,newHeight=Math.round(vidHeight*wrapWidth/vidWidth),newWidth=wrapWidth,newLeft=0,newTop=0;if(newHeight<wrapHeight){newHeight=wrapHeight;newWidth=Math.round(vidWidth*wrapHeight/vidHeight);newLeft=-((newWidth-wrapWidth)/2);}
else{newTop=-((newHeight-wrapHeight)/2);}
video.parent().data('width',vidWidth);video.parent().data('height',vidHeight);video.css({'left':newLeft+'px','top':newTop+'px','width':newWidth+'px','height':newHeight+'px'});},_resizeYoutubeBgVideo:function()
{var wrap=$(this),wrapWidth=wrap.outerWidth(),wrapHeight=wrap.outerHeight(),player=wrap.data('YTPlayer'),video=player?player.getIframe():null,aspectRatioSetting='16:9',aspectRatioArray=aspectRatioSetting.split(':'),aspectRatio=aspectRatioArray[0]/aspectRatioArray[1],ratioWidth=wrapWidth/aspectRatio,ratioHeight=wrapHeight*aspectRatio,isWidthFixed=wrapWidth/wrapHeight>aspectRatio,width=isWidthFixed?wrapWidth:ratioHeight,height=isWidthFixed?ratioWidth:wrapHeight;if(video){$(video).width(width).height(height);}},_initModuleAnimations:function()
{if(typeof jQuery.fn.waypoint!=='undefined'){$('.fl-animation').each(function(){var node=$(this),nodeTop=node.offset().top,winHeight=$(window).height(),bodyHeight=$('body').height(),waypoint=FLBuilderLayoutConfig.waypoint,offset='80%';if(typeof waypoint.offset!==undefined){offset=FLBuilderLayoutConfig.waypoint.offset+'%';}
if(bodyHeight-nodeTop<winHeight*0.2){offset='100%';}
node.waypoint({offset:offset,handler:FLBuilderLayout._doModuleAnimation});});}},_doModuleAnimation:function()
{var module='undefined'==typeof this.element?$(this):$(this.element),delay=parseFloat(module.data('animation-delay')),duration=parseFloat(module.data('animation-duration'));if(!isNaN(duration)){module.css('animation-duration',duration+'s');}
if(!isNaN(delay)&&delay>0){setTimeout(function(){module.addClass('fl-animated');},delay*1000);}else{setTimeout(function(){module.addClass('fl-animated');},1);}},_initHash:function()
{var hash=window.location.hash.replace('#','').split('/').shift(),element=null,tabs=null,responsiveLabel=null,tabIndex=null,label=null;if(''!==hash){try{element=$('#'+hash);if(element.length>0){if(element.hasClass('fl-accordion-item')){setTimeout(function(){element.find('.fl-accordion-button').trigger('click');},100);}
if(element.hasClass('fl-tabs-panel')){setTimeout(function(){tabs=element.closest('.fl-tabs');responsiveLabel=element.find('.fl-tabs-panel-label');tabIndex=responsiveLabel.data('index');label=tabs.find('.fl-tabs-labels .fl-tabs-label[data-index='+tabIndex+']');if(responsiveLabel.is(':visible')){responsiveLabel.trigger('click');}
else{label[0].click();FLBuilderLayout._scrollToElement(element);}},100);}}}
catch(e){}}},_initAnchorLinks:function()
{$('a').each(FLBuilderLayout._initAnchorLink);},_initAnchorLink:function()
{var link=$(this),href=link.attr('href'),loc=window.location,id=null,element=null,flNode=false;if('undefined'!=typeof href&&href.indexOf('#')>-1&&link.closest('svg').length<1){if(loc.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&loc.hostname==this.hostname){try{id=href.split('#').pop();if(!id){return;}
element=$('#'+id);if(element.length>0){flNode=element.hasClass('fl-row')||element.hasClass('fl-col')||element.hasClass('fl-module');if(!element.hasClass('fl-no-scroll')&&(link.hasClass('fl-scroll-link')||flNode)){$(link).on('click',FLBuilderLayout._scrollToElementOnLinkClick);}
if(element.hasClass('fl-accordion-item')){$(link).on('click',FLBuilderLayout._scrollToAccordionOnLinkClick);}
if(element.hasClass('fl-tabs-panel')){$(link).on('click',FLBuilderLayout._scrollToTabOnLinkClick);}}}
catch(e){}}}},_scrollToElementOnLinkClick:function(e,callback)
{var element=$('#'+$(this).attr('href').split('#').pop());FLBuilderLayout._scrollToElement(element,callback);e.preventDefault();},_scrollToElement:function(element,callback)
{var config=FLBuilderLayoutConfig.anchorLinkAnimations,dest=0,win=$(window),doc=$(document);if(element.length>0){if('fixed'===element.css('position')||'fixed'===element.parent().css('position')){dest=element.position().top;}
else if(element.offset().top>doc.height()-win.height()){dest=doc.height()-win.height();}
else{dest=element.offset().top-config.offset;}
$('html, body').animate({scrollTop:dest},config.duration,config.easing,function(){if('undefined'!=typeof callback){callback();}
if(undefined!=element.attr('id')){if(history.pushState){history.pushState(null,null,'#'+element.attr('id'));}
else{window.location.hash=element.attr('id');}}});}},_scrollToAccordionOnLinkClick:function(e)
{var element=$('#'+$(this).attr('href').split('#').pop());if(element.length>0){var callback=function(){if(element){element.find('.fl-accordion-button').trigger('click');element=false;}};FLBuilderLayout._scrollToElementOnLinkClick.call(this,e,callback);}},_scrollToTabOnLinkClick:function(e)
{var element=$('#'+$(this).attr('href').split('#').pop()),tabs=null,label=null,responsiveLabel=null;if(element.length>0){tabs=element.closest('.fl-tabs');responsiveLabel=element.find('.fl-tabs-panel-label');tabIndex=responsiveLabel.data('index');label=tabs.find('.fl-tabs-labels .fl-tabs-label[data-index='+tabIndex+']');if(responsiveLabel.is(':visible')){var callback=function(){if(element){responsiveLabel.trigger('click');element=false;}};FLBuilderLayout._scrollToElementOnLinkClick.call(this,e,callback);}
else{label[0].click();FLBuilderLayout._scrollToElement(element);}
e.preventDefault();}},_initForms:function()
{if(!FLBuilderLayout._hasPlaceholderSupport){$('.fl-form-field input').each(FLBuilderLayout._initFormFieldPlaceholderFallback);}
$('.fl-form-field input').on('focus',FLBuilderLayout._clearFormFieldError);},_hasPlaceholderSupport:function()
{var input=document.createElement('input');return'undefined'!=input.placeholder;},_initFormFieldPlaceholderFallback:function()
{var field=$(this),val=field.val(),placeholder=field.attr('placeholder');if('undefined'!=placeholder&&''===val){field.val(placeholder);field.on('focus',FLBuilderLayout._hideFormFieldPlaceholderFallback);field.on('blur',FLBuilderLayout._showFormFieldPlaceholderFallback);}},_hideFormFieldPlaceholderFallback:function()
{var field=$(this),val=field.val(),placeholder=field.attr('placeholder');if(val==placeholder){field.val('');}},_showFormFieldPlaceholderFallback:function()
{var field=$(this),val=field.val(),placeholder=field.attr('placeholder');if(''===val){field.val(placeholder);}},_clearFormFieldError:function()
{var field=$(this);field.removeClass('fl-form-error');field.siblings('.fl-form-error-message').hide();}};$(function(){FLBuilderLayout.init();});})(jQuery);;(function($){$('.fl-node-antg1p7so2hx .pp-breadcrumbs a').parent().css({'padding':'0','background-color':'transparent','border':'0','margin':'0','box-shadow':'none'});$('.fl-node-antg1p7so2hx .pp-breadcrumbs a').parent().parent().css({'padding':'0','background-color':'transparent','border':'0','margin':'0','box-shadow':'none'});})(jQuery);jQuery(function($){$(function(){$('.fl-node-cjzpduyw2gxs .fl-photo-img').on('mouseenter',function(e){$(this).data('title',$(this).attr('title')).removeAttr('title');}).on('mouseleave',function(e){$(this).attr('title',$(this).data('title')).data('title',null);});});});var FLBuilderNumber;(function($){FLBuilderNumber=function(settings){this.nodeClass='.fl-node-'+settings.id;this.wrapperClass=this.nodeClass+' .fl-number';this.layout=settings.layout;this.type=settings.type;this.number=parseFloat(('undefined'!==typeof window["number_module_"+settings.id])?window["number_module_"+settings.id].number:settings.number);this.max=parseFloat(('undefined'!==typeof window["number_module_"+settings.id])?window["number_module_"+settings.id].max:settings.max);this.speed=settings.speed;this.delay=settings.delay;this.breakPoints=settings.breakPoints;this.currentBrowserWidth=$(window).width();this.animated=false;this.format=settings.format;this._initNumber();};FLBuilderNumber.prototype={nodeClass:'',wrapperClass:'',layout:'',type:'',number:0,max:0,speed:0,delay:0,format:{},_initNumber:function(){var self=this;if(typeof jQuery.fn.waypoint!=='undefined'&&!this.animated){$(this.wrapperClass).waypoint({offset:FLBuilderLayoutConfig.waypoint.offset+'%',triggerOnce:true,handler:function(direction){self._initCount();}});}else{self._initCount();}},_initCount:function(){var $number=$(this.wrapperClass).find('.fl-number-string');if(!isNaN(this.delay)&&this.delay>0){setTimeout(function(){if(this.layout=='circle'){this._triggerCircle();}else if(this.layout=='bars'){this._triggerBar();}
this._countNumber();}.bind(this),this.delay*1000);}
else{if(this.layout=='circle'){this._triggerCircle();}else if(this.layout=='bars'){this._triggerBar();}
this._countNumber();}},_countNumber:function(){var $number=$(this.wrapperClass).find('.fl-number-string'),$string=$number.find('.fl-number-int'),current=0,self=this;if(!this.animated){$string.prop('Counter',0).animate({Counter:this.number},{duration:this.speed,easing:'swing',step:function(now,fx){$string.text(self._formatNumber(now,fx));},complete:function(){self.animated=true;}});}},_triggerCircle:function(){var $bar=$(this.wrapperClass).find('.fl-bar'),r=$bar.attr('r'),circle=Math.PI*(r*2),val=this.number,max=this.type=='percent'?100:this.max;if(val<0){val=0;}
if(val>max){val=max;}
if(this.type=='percent'){var pct=((100-val)/100)*circle;}else{var pct=(1-(val/max))*circle;}
$bar.animate({strokeDashoffset:pct},{duration:this.speed,easing:'swing',complete:function(){this.animated=true;}});},_triggerBar:function(){var $bar=$(this.wrapperClass).find('.fl-number-bar');if(this.type=='percent'){var number=this.number>100?100:this.number;}else{var number=Math.ceil((this.number/this.max)*100);}
if(!this.animated){$bar.animate({width:number+'%'},{duration:this.speed,easing:'swing',complete:function(){this.animated=true;}});}},_formatNumber:function(n,fx){var rgx=/(\d+)(\d{3})/,num=fx.end.toString().split('.'),decLimit=0;if(1==num.length){n=parseInt(n);}
else if(num.length>1){decLimit=num[1].length>2?2:num[1].length;}
n+='';x=n.split('.');x1=x[0];x2=x.length>1?parseFloat(parseFloat('.'+x[1]).toFixed(decLimit)):'';x2=''!=x2?this.format.decimal+x2.toString().split('.').pop():'';while(rgx.test(x1)){x1=x1.replace(rgx,'$1'+this.format.thousands_sep+'$2');}
return x1+x2;},};})(jQuery);(function($){$(function(){new FLBuilderNumber({id:'e17l6kqyms2x',layout:'default',type:'standard',number:parseFloat(('undefined'!==typeof window.number_module_e17l6kqyms2x)?window.number_module_e17l6kqyms2x.number:100),max:parseFloat(('undefined'!==typeof window.number_module_e17l6kqyms2x)?window.number_module_e17l6kqyms2x.max:100),speed:1000,delay:1,format:{decimal:'.',thousands_sep:','}});});})(jQuery);(function($){$(function(){new FLBuilderNumber({id:'k3ijg1a6n4lh',layout:'default',type:'standard',number:parseFloat(('undefined'!==typeof window.number_module_k3ijg1a6n4lh)?window.number_module_k3ijg1a6n4lh.number:515),max:parseFloat(('undefined'!==typeof window.number_module_k3ijg1a6n4lh)?window.number_module_k3ijg1a6n4lh.max:515),speed:1000,delay:1,format:{decimal:'.',thousands_sep:','}});});})(jQuery);(function($){$(function(){new FLBuilderNumber({id:'vadnmrc8l91z',layout:'default',type:'standard',number:parseFloat(('undefined'!==typeof window.number_module_vadnmrc8l91z)?window.number_module_vadnmrc8l91z.number:320),max:parseFloat(('undefined'!==typeof window.number_module_vadnmrc8l91z)?window.number_module_vadnmrc8l91z.max:320),speed:1000,delay:1,format:{decimal:'.',thousands_sep:','}});});})(jQuery);(function($){$(function(){new FLBuilderNumber({id:'cd8k2ronm4ty',layout:'default',type:'standard',number:parseFloat(('undefined'!==typeof window.number_module_cd8k2ronm4ty)?window.number_module_cd8k2ronm4ty.number:110),max:parseFloat(('undefined'!==typeof window.number_module_cd8k2ronm4ty)?window.number_module_cd8k2ronm4ty.max:110),speed:1000,delay:1,format:{decimal:'.',thousands_sep:','}});});})(jQuery);(function($){PPAdvancedTabs=function(settings){this.settings=settings;this.nodeClass='.fl-node-'+settings.id;this._init();};PPAdvancedTabs.prototype={settings:{},nodeClass:'',_init:function(){$(this.nodeClass+' .pp-tabs-labels .pp-tabs-label').on('click keyup',$.proxy(this._labelClick,this));$(this.nodeClass+' .pp-tabs-panels .pp-tabs-label').click($.proxy(this._responsiveLabelClick,this));$(this.nodeClass+' .pp-tabs-labels .pp-tabs-label.pp-tab-active').attr('tabindex','0');this._responsiveCollapsed();this._bindEvents();},_bindEvents:function(){var layout=this.settings.layout,tabs=$(this.nodeClass+' .pp-tabs-labels .pp-tabs-label');var tabFocus=0;$(this.nodeClass+' .pp-tabs-labels').on('keydown',function(e){var keyCode=e.keyCode||e.which;if('vertical'===layout){if(38===keyCode||40===keyCode){e.preventDefault();tabs[tabFocus].setAttribute('tabindex',-1);if(40===keyCode){tabFocus++;if(tabFocus>=tabs.length){tabFocus=0;}}else if(38===keyCode){tabFocus--;if(tabFocus<0){tabFocus=tabs.length-1;}}}}else{if(37===keyCode||39===keyCode){e.preventDefault();tabs[tabFocus].setAttribute('tabindex',-1);if(39===keyCode){tabFocus++;if(tabFocus>=tabs.length){tabFocus=0;}}else if(37===keyCode){tabFocus--;if(tabFocus<0){tabFocus=tabs.length-1;}}}}
tabs[tabFocus].setAttribute('tabindex',0);tabs[tabFocus].focus();});if($(this.nodeClass+' .pp-tabs-vertical').length>0){this._resize();$(window).off('resize'+this.nodeClass);$(window).on('resize'+this.nodeClass,$.proxy(this._resize,this));}
this._hashChange();$(window).on('hashchange',$.proxy(this._hashChange,this));},_hashChange:function(){if(location.hash&&$(location.hash).length>0){var element=$(location.hash+'.pp-tabs-label');if(element&&element.length>0){var header=$('.fl-theme-builder-header-sticky');var offset=header.length>0?header.height()+32:120;location.href='#';$('html, body').animate({scrollTop:element.parents('.pp-tabs').offset().top-offset},50,function(){if(!element.hasClass('pp-tab-active')){element.trigger('click');}});}}},_labelClick:function(e){var label=$(e.target).closest('.pp-tabs-label'),index=label.data('index'),wrap=label.closest('.pp-tabs');var showContent='click'===e.type||('keyup'===e.type&&(13===e.keyCode||13===e.which))
if(!showContent){return;}
label.siblings().attr('aria-selected',false).attr('tabindex','-1');label.attr('aria-selected',true).attr('tabindex','0').focus();if(wrap.hasClass('pp-tabs-vertical')&&this.settings.scrollAnimate){var header=$('.fl-theme-builder-header-sticky');var offset=header.length>0?header.height()+32:120;$('html, body').animate({scrollTop:wrap.offset().top-offset},500);}
wrap.find('.pp-tabs-labels:first > .pp-tab-active').removeClass('pp-tab-active');wrap.find('.pp-tabs-panels:first > .pp-tabs-panel > .pp-tab-active').removeClass('pp-tab-active');wrap.find('.pp-tabs-panels:first > .pp-tabs-panel > .pp-tabs-label').removeClass('pp-tab-active');wrap.find('.pp-tabs-labels:first > .pp-tabs-label[data-index="'+index+'"]').addClass('pp-tab-active');wrap.find('.pp-tabs-panels:first > .pp-tabs-panel > .pp-tabs-panel-content[data-index="'+index+'"]').addClass('pp-tab-active');wrap.find('.pp-tabs-panels:first > .pp-tabs-panel > .pp-tabs-label[data-index="'+index+'"]').addClass('pp-tab-active');FLBuilderLayout.refreshGalleries(wrap.find('.pp-tabs-panel-content[data-index="'+index+'"]'));$(document).trigger('pp-tabs-switched',[wrap.find('.pp-tabs-panel-content[data-index="'+index+'"]')]);},_responsiveLabelClick:function(e){var label=$(e.target).closest('.pp-tabs-label'),wrap=label.closest('.pp-tabs'),index=label.data('index'),content=label.siblings('.pp-tabs-panel-content'),activeContent=wrap.find('.pp-tabs-panel-content.pp-tab-active'),activeIndex=activeContent.data('index'),allIcons=wrap.find('.pp-tabs-label .fa'),icon=label.find('.fa');if(index==activeIndex){activeContent.slideUp('normal');activeContent.removeClass('pp-tab-active');$(this.nodeClass+' .pp-tabs-panels .pp-tabs-label').removeClass('pp-tab-active');wrap.removeClass('pp-tabs-animation');return;}
if(wrap.hasClass('pp-tabs-animation')){return;}
wrap.addClass('pp-tabs-animation');activeContent.slideUp('normal');content.slideDown('normal',function(){wrap.find('.pp-tab-active').removeClass('pp-tab-active');wrap.find('.pp-tabs-label[data-index="'+index+'"]').addClass('pp-tab-active');content.addClass('pp-tab-active');wrap.removeClass('pp-tabs-animation');FLBuilderLayout.refreshGalleries(content);if('undefined'!==typeof $.fn.isotope){content.find('.pp-content-post-grid').isotope('layout');}
if(label.offset().top<$(window).scrollTop()+100&&!wrap.hasClass('pp-tabs-no-scroll')){$('html, body').animate({scrollTop:label.offset().top-100},500,'swing');}
$(document).trigger('pp-tabs-switched',[content]);});},_resize:function(){$(this.nodeClass+' .pp-tabs-vertical').each($.proxy(this._resizeVertical,this));},_resizeVertical:function(e){var wrap=$(this.nodeClass+' .pp-tabs-vertical'),labels=wrap.find('.pp-tabs-labels'),panels=wrap.find('.pp-tabs-panels');panels.css('min-height',labels.height()+'px');},_gridLayoutMatchHeight:function(){var highestBox=0;var contentHeight=0;$(this.nodeClass).find('.pp-equal-height .pp-content-post').css('height','').each(function(){if($(this).height()>highestBox){highestBox=$(this).height();contentHeight=$(this).find('.pp-content-post-data').outerHeight();}});$(this.nodeClass).find('.pp-equal-height .pp-content-post').height(highestBox);},_responsiveCollapsed:function(){if($(window).innerWidth()<769){if(this.settings.responsiveClosed){$(this.nodeClass+' .pp-tabs-panels .pp-tabs-label.pp-tab-active').trigger('click');}
$(this.nodeClass+' .pp-tabs-panels').css('visibility','visible');}}};})(jQuery);;(function($){$(function(){new PPAdvancedTabs({id:'bakzdigjftno',layout:'horizontal',responsiveClosed:false,scrollAnimate:true,});$('.fl-node-bakzdigjftno .pp-tabs-style-2 .pp-tabs-label.pp-tab-active').prev().addClass('pp-no-border');$('.fl-node-bakzdigjftno .pp-tabs-style-2 .pp-tabs-label').on('click',function(){$('.fl-node-bakzdigjftno .pp-tabs-style-2 .pp-tabs-label').removeClass('pp-no-border');$('.fl-node-bakzdigjftno .pp-tabs-style-2 .pp-tabs-label.pp-tab-active').prev().addClass('pp-no-border');});if($(window).width()>768){$('.fl-node-bakzdigjftno .pp-tabs-vertical .pp-tabs-panel-content').css('min-height',$('.fl-node-bakzdigjftno .pp-tabs-vertical .pp-tabs-labels').outerHeight()+'px');}
if($(window).width()<=768){$('.fl-node-bakzdigjftno .pp-tabs-label .pp-tab-close').on('click',function(){$(this).parents('.pp-tabs-label').removeClass('pp-tab-active');});}});})(jQuery);jQuery(function($){$(function(){$('.fl-node-8euajw4m2nx9 .fl-photo-img').on('mouseenter',function(e){$(this).data('title',$(this).attr('title')).removeAttr('title');}).on('mouseleave',function(e){$(this).attr('title',$(this).data('title')).data('title',null);});});});jQuery(function($){$(function(){$('.fl-node-xosuwvqgp215 .fl-photo-img').on('mouseenter',function(e){$(this).data('title',$(this).attr('title')).removeAttr('title');}).on('mouseleave',function(e){$(this).attr('title',$(this).data('title')).data('title',null);});});});jQuery(function($){$(function(){$('.fl-node-40mpdlf7bv3q .fl-photo-img').on('mouseenter',function(e){$(this).data('title',$(this).attr('title')).removeAttr('title');}).on('mouseleave',function(e){$(this).attr('title',$(this).data('title')).data('title',null);});});});jQuery(function($){$(function(){$('.fl-node-g4v27p1wqjm9 .fl-photo-img').on('mouseenter',function(e){$(this).data('title',$(this).attr('title')).removeAttr('title');}).on('mouseleave',function(e){$(this).attr('title',$(this).data('title')).data('title',null);});});});jQuery(function($){$(function(){$('.fl-node-ucplt6x25ved .fl-photo-img').on('mouseenter',function(e){$(this).data('title',$(this).attr('title')).removeAttr('title');}).on('mouseleave',function(e){$(this).attr('title',$(this).data('title')).data('title',null);});});});jQuery(function($){$(function(){$('.fl-node-9rv8n6s703jp .fl-photo-img').on('mouseenter',function(e){$(this).data('title',$(this).attr('title')).removeAttr('title');}).on('mouseleave',function(e){$(this).attr('title',$(this).data('title')).data('title',null);});});});jQuery(function($){$(function(){$('.fl-node-cxm7wekzau0s .fl-photo-img').on('mouseenter',function(e){$(this).data('title',$(this).attr('title')).removeAttr('title');}).on('mouseleave',function(e){$(this).attr('title',$(this).data('title')).data('title',null);});});});jQuery(function($){$(function(){$('.fl-node-kjyqb7xpu0so .fl-photo-img').on('mouseenter',function(e){$(this).data('title',$(this).attr('title')).removeAttr('title');}).on('mouseleave',function(e){$(this).attr('title',$(this).data('title')).data('title',null);});});});jQuery(function($){$(function(){$('.fl-node-d54bnupxyvfz .fl-photo-img').on('mouseenter',function(e){$(this).data('title',$(this).attr('title')).removeAttr('title');}).on('mouseleave',function(e){$(this).attr('title',$(this).data('title')).data('title',null);});});});jQuery(function($){$(function(){$('.fl-node-b0ohzgi4mfw9 .fl-photo-img').on('mouseenter',function(e){$(this).data('title',$(this).attr('title')).removeAttr('title');}).on('mouseleave',function(e){$(this).attr('title',$(this).data('title')).data('title',null);});});});jQuery(function($){$(function(){$('.fl-node-q2ivj9bl5mak .fl-photo-img').on('mouseenter',function(e){$(this).data('title',$(this).attr('title')).removeAttr('title');}).on('mouseleave',function(e){$(this).attr('title',$(this).data('title')).data('title',null);});});});jQuery(function($){$(function(){$('.fl-node-nwz09jyicdrt .fl-photo-img').on('mouseenter',function(e){$(this).data('title',$(this).attr('title')).removeAttr('title');}).on('mouseleave',function(e){$(this).attr('title',$(this).data('title')).data('title',null);});});});(function($){var fixedHeight=true;function equalheight(){if(!fixedHeight){return;}
var maxHeight=0;$('.fl-node-6cxai9t5nuyk .pp-testimonial .pp-content-wrapper').each(function(index){if(($(this).outerHeight())>maxHeight){maxHeight=$(this).outerHeight();}});$('.fl-node-6cxai9t5nuyk .pp-testimonial .pp-content-wrapper').css('height',maxHeight+'px');}
var left_arrow_svg='<svg aria-hidden="true" data-prefix="fal" data-icon="angle-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" class="svg-inline--fa fa-angle-left fa-w-6 fa-2x"><path fill="currentColor" d="M25.1 247.5l117.8-116c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L64.7 256l102.2 100.4c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L25 264.5c-4.6-4.7-4.6-12.3.1-17z" class=""></path></svg><span class="sr-only">Previous</span>';var right_arrow_svg='<svg aria-hidden="true" data-prefix="fal" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" class="svg-inline--fa fa-angle-right fa-w-6 fa-2x"><path fill="currentColor" d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z" class=""></path></svg><span class="sr-only">Next</span>';var setCenterClass=function(e){setTimeout(function(){$(e.target).find('.owl-item').removeClass('pp-testimonial--center');var actives=$(e.target).find('.owl-item.active');if(actives.length===3){$(actives[1]).addClass('pp-testimonial--center');}},200);};var options={items:1,responsive:{0:{items:1,},768:{items:1,},992:{items:1,},1199:{items:1,},},dots:false,autoplay:false,autoplayHoverPause:true,autoplayTimeout:4000,autoplaySpeed:500,navSpeed:500,dotsSpeed:500,nav:true,navText:[left_arrow_svg,right_arrow_svg],loop:true,autoHeight:!fixedHeight,slideBy:1,mouseDrag:true,responsiveRefreshRate:200,responsiveBaseWidth:window,margin:0,rtl:$('body').hasClass('rtl'),onInitialized:function(e){setCenterClass(e);equalheight();var count=1;$(e.target).find('.owl-dot').each(function(){$(this).append('<span class="sr-only">Testimonial Slide '+count+'</span>');count++;});},onResized:equalheight,onRefreshed:equalheight,onLoadedLazy:equalheight,onChanged:setCenterClass,};$('.fl-node-6cxai9t5nuyk .owl-carousel').owlCarousel(options);})(jQuery);
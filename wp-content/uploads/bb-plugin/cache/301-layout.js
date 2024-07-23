
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
{var field=$(this);field.removeClass('fl-form-error');field.siblings('.fl-form-error-message').hide();}};$(function(){FLBuilderLayout.init();});})(jQuery);(function($){window.onLoadFLReCaptcha=function(){var reCaptchaFields=$('.fl-grecaptcha'),widgetID;if(reCaptchaFields.length>0){reCaptchaFields.each(function(i){var self=$(this),attrWidget=self.attr('data-widgetid'),newID=$(this).attr('id')+'-'+i;if((typeof attrWidget!==typeof undefined&&attrWidget!==false)){return;}
else{self.attr('id',newID);widgetID=grecaptcha.render(newID,{sitekey:self.data('sitekey'),theme:self.data('theme'),size:self.data('validate'),callback:function(response){if(response!=''){self.attr('data-fl-grecaptcha-response',response);if('invisible'==self.data('validate')){self.closest('.fl-subscribe-form').find('a.fl-button').trigger('click');}}}});self.attr('data-widgetid',widgetID);}});}};FLBuilderSubscribeForm=function(settings)
{this.settings=settings;this.nodeClass='.fl-node-'+settings.id;this.form=$(this.nodeClass+' .fl-subscribe-form');this.button=this.form.find('a.fl-button');this._init();};FLBuilderSubscribeForm.prototype={settings:{},nodeClass:'',form:null,button:null,_init:function()
{this.button.on('click',$.proxy(this._submitForm,this));this.button.on('keydown, keyup',$.proxy(this._keyupdown,this));this.form.find('input[type="email"]').on('keypress',$.proxy(this._onEnterKey,this));},_keyupdown:function(e){if(e.keyCode===13||e.keyCode===32){e.preventDefault();this._submitForm(e);}},_submitForm:function(e)
{var submitButton=$(e.currentTarget),currentForm=submitButton.closest('.fl-subscribe-form'),postId=currentForm.closest('.fl-builder-content').data('post-id'),templateId=currentForm.data('template-id'),templateNodeId=currentForm.data('template-node-id'),nodeId=currentForm.closest('.fl-module').data('node'),buttonText=submitButton.find('.fl-button-text').text(),waitText=submitButton.closest('.fl-form-button').data('wait-text'),name=currentForm.find('input[name=fl-subscribe-form-name]'),email=currentForm.find('input[name=fl-subscribe-form-email]'),successUrl=this.settings.successUrl,termsCheckbox=currentForm.find('input[name=fl-terms-checkbox]'),recaptcha=currentForm.find('.fl-grecaptcha'),reCaptchaValue=recaptcha.data('fl-grecaptcha-response'),re=/\S+@\S+\.\S+/,valid=true,ajaxData=null;e.preventDefault();if(submitButton.hasClass('fl-form-button-disabled')){return;}
if(name.length>0&&name.val()==''){name.addClass('fl-form-error');name.siblings('.fl-form-error-message').show();valid=false;}
if(''==email.val()||!re.test(email.val())){email.addClass('fl-form-error');email.siblings('.fl-form-error-message').show();valid=false;}
if(termsCheckbox.length){if(!termsCheckbox.is(':checked')){valid=false;termsCheckbox.addClass('fl-form-error');termsCheckbox.parent().siblings('.fl-form-error-message').show();}
else{termsCheckbox.removeClass('fl-form-error');termsCheckbox.parent().siblings('.fl-form-error-message').hide();}}
if(recaptcha.length>0&&valid){if('undefined'===typeof reCaptchaValue||reCaptchaValue===false){if('normal'==recaptcha.data('validate')){recaptcha.addClass('fl-form-error');recaptcha.siblings('.fl-form-error-message').show();}else if('invisible'==recaptcha.data('validate')){if('undefined'!==typeof recaptcha.data('action')){grecaptcha.execute(recaptcha.data('widgetid'),{action:recaptcha.data('action')});}
else{grecaptcha.execute(recaptcha.data('widgetid'));}}
valid=false;}else{recaptcha.removeClass('fl-form-error');recaptcha.siblings('.fl-form-error-message').hide();}}
if(valid){currentForm.find('> .fl-form-error-message').hide();submitButton.find('.fl-button-text').text(waitText);submitButton.data('original-text',buttonText);submitButton.addClass('fl-form-button-disabled');ajaxData={action:'fl_builder_subscribe_form_submit',name:name.val(),email:email.val(),success_url:successUrl,terms_checked:termsCheckbox.is(':checked')?'1':'0',post_id:postId,template_id:templateId,template_node_id:templateNodeId,node_id:nodeId};if(reCaptchaValue){ajaxData.recaptcha=reCaptchaValue;}
$.post(FLBuilderLayoutConfig.paths.wpAjaxUrl,ajaxData,$.proxy(function(response){this._submitFormComplete(response,submitButton);},this));}},_submitFormComplete:function(response,button)
{var data=JSON.parse(response),buttonText=button.data('original-text'),form=button.closest('.fl-subscribe-form');if(data.error){if(data.error){form.find('> .fl-form-error-message').text(data.error);}
form.find('> .fl-form-error-message').show();button.removeClass('fl-form-button-disabled');button.find('.fl-button-text').text(buttonText);}
else if('message'==data.action){form.find('> *').hide();$(this.nodeClass+' .fl-form-success-message').show();}
else if('redirect'==data.action){window.location.href=data.url;}},_onEnterKey:function(e)
{if(e.which==13){var currentForm=$(e.currentTarget).closest('.fl-subscribe-form');currentForm.find('a.fl-button').trigger('click');}}}})(jQuery);(function($){$(function(){new FLBuilderSubscribeForm({id:'qg249zl6a15h',successAction:'message',successUrl:'',});});})(jQuery);jQuery(function($){$(function(){$('.fl-node-9v3cwuzpl2ad .fl-photo-img').on('mouseenter',function(e){$(this).data('title',$(this).attr('title')).removeAttr('title');}).on('mouseleave',function(e){$(this).attr('title',$(this).data('title')).data('title',null);});});});jQuery(function($){$(function(){$('.fl-node-76lqe8msdany .fl-photo-img').on('mouseenter',function(e){$(this).data('title',$(this).attr('title')).removeAttr('title');}).on('mouseleave',function(e){$(this).attr('title',$(this).data('title')).data('title',null);});});});(function($){window.onLoadPPReCaptcha=function(){var reCaptchaFields=$('.pp-grecaptcha'),widgetID;if(reCaptchaFields.length>0){reCaptchaFields.each(function(i){var self=$(this),attrWidget=self.attr('data-widgetid'),newID=$(this).attr('id')+'-'+i;if((typeof attrWidget!==typeof undefined&&attrWidget!==false)){return;}
else{self.attr('id',newID);widgetID=grecaptcha.render(newID,{sitekey:self.data('sitekey'),theme:self.data('theme'),size:self.data('validate'),callback:function(response){if(response!=''){self.attr('data-pp-grecaptcha-response',response);if('invisible'==self.data('validate')){self.closest('.fl-module').find('.pp-submit-button').trigger('click');}}}});self.attr('data-widgetid',widgetID);}});}};PPContactForm=function(settings)
{this.settings=settings;this.nodeClass='.fl-node-'+settings.id;this._init();};PPContactForm.prototype={settings:{},nodeClass:'',_init:function()
{var self=this;$(this.nodeClass+' .pp-contact-form').on('submit',$.proxy(this._submit,this));$(this.nodeClass+' .pp-contact-form .pp-submit-button').on('click',function(e){e.preventDefault();$(self.nodeClass+' .pp-contact-form').trigger('submit');});},_submit:function(e)
{var theForm=$(this.nodeClass+' .pp-contact-form'),submit=$(this.nodeClass+' .fl-button'),name=$(this.nodeClass+' .pp-name input'),email=$(this.nodeClass+' .pp-email input'),phone=$(this.nodeClass+' .pp-phone input'),subject=$(this.nodeClass+' .pp-subject input'),message=$(this.nodeClass+' .pp-message textarea'),checkbox=$(this.nodeClass+' .pp-checkbox input'),reCaptchaField=$(this.nodeClass+' .pp-grecaptcha'),reCaptchaValue=reCaptchaField.data('pp-grecaptcha-response'),ajaxData=null,ajaxurl=bb_powerpack.ajaxurl,email_regex=/\S+@\S+\.\S+/,isValid=true,postId=theForm.closest('.fl-builder-content').data('post-id'),layoutId=theForm.find('input[name=fl-layout-id]').val(),templateId=theForm.data('template-id'),templateNodeId=theForm.data('template-node-id'),nodeId=theForm.closest('.fl-module').data('node');e.preventDefault();if(submit.hasClass('pp-disabled')){return;}
if(name.length){if(name.val()===''&&name.parents('.pp-input-required').length){isValid=false;name.parent().addClass('pp-error');}
else if(name.parent().hasClass('pp-error')){name.parent().removeClass('pp-error');}}
if(email.length){if((email.val()===''||!email_regex.test(email.val()))&&email.parents('.pp-input-required').length){isValid=false;email.parent().addClass('pp-error');}
else if(email.parent().hasClass('pp-error')){email.parent().removeClass('pp-error');}}
if(subject.length){if(subject.val()===''&&subject.parents('.pp-input-required').length){isValid=false;subject.parent().addClass('pp-error');}
else if(subject.parent().hasClass('pp-error')){subject.parent().removeClass('pp-error');}}
if(phone.length){if(phone.val()===''&&phone.parents('.pp-input-required').length){isValid=false;phone.parent().addClass('pp-error');}
else if(phone.parent().hasClass('pp-error')){phone.parent().removeClass('pp-error');}}
if(message.length>0){if(message.val()===''&&message.parents('.pp-input-required').length){isValid=false;message.parent().addClass('pp-error');}
else if(message.parent().hasClass('pp-error')){message.parent().removeClass('pp-error');}}
if(checkbox.length>0){if(!checkbox.is(':checked')&&checkbox.parents('.pp-input-required').length){isValid=false;checkbox.parent().addClass('pp-error');}
else if(checkbox.parent().hasClass('pp-error')){checkbox.parent().removeClass('pp-error');}}
if(reCaptchaField.length>0){if('undefined'===typeof reCaptchaValue||reCaptchaValue===false){isValid=false;if('normal'==reCaptchaField.data('validate')){reCaptchaField.parent().addClass('pp-error');}else if('invisible'==reCaptchaField.data('validate')){grecaptcha.execute(reCaptchaField.data('widgetid'));}}else{reCaptchaField.parent().removeClass('pp-error');}}
if(!isValid){return false;}
else{submit.addClass('pp-disabled');ajaxData={action:'pp_send_email',name:name.val(),subject:subject.val(),email:email.val(),phone:phone.val(),message:message.val(),post_id:postId,layout_id:layoutId,template_id:templateId,template_node_id:templateNodeId,node_id:nodeId}
if(reCaptchaValue){ajaxData.recaptcha_response=reCaptchaValue;}
$.post(ajaxurl,ajaxData,$.proxy(this._submitComplete,this));}},_submitComplete:function(response)
{var urlField=$(this.nodeClass+' .pp-success-url'),noMessage=$(this.nodeClass+' .pp-success-none');if(typeof response.error!=='undefined'&&response.error===false){$(this.nodeClass+' .pp-send-error').fadeOut();if(urlField.length>0){window.location.href=urlField.val();}
else if(noMessage.length>0){noMessage.fadeIn();}
else{$(this.nodeClass+' .pp-contact-form').hide();$(this.nodeClass+' .pp-success-msg').fadeIn();}
$(document).trigger('pp_contact_form_submit_success',[$(this.nodeClass)]);}
else{$(this.nodeClass+' .fl-button').removeClass('pp-disabled');if(typeof response.message!=='undefined'){$(this.nodeClass+' .pp-send-error').html(response.message);}
$(this.nodeClass+' .pp-send-error').fadeIn();return false;}
$(document).trigger('pp_contact_form_after_submit',[$(this.nodeClass),response]);}};})(jQuery);(function($){$(function(){new PPContactForm({id:'cx7lez4t6vqd'});});})(jQuery);jQuery(function($){$(function(){$('.fl-node-g64slr0jftie .fl-photo-img').on('mouseenter',function(e){$(this).data('title',$(this).attr('title')).removeAttr('title');}).on('mouseleave',function(e){$(this).attr('title',$(this).data('title')).data('title',null);});});});jQuery(function($){$(function(){$('.fl-node-ivxw2trg79ab .fl-photo-img').on('mouseenter',function(e){$(this).data('title',$(this).attr('title')).removeAttr('title');}).on('mouseleave',function(e){$(this).attr('title',$(this).data('title')).data('title',null);});});});jQuery(function($){$(function(){$('.fl-node-4wpj29i17evu .fl-photo-img').on('mouseenter',function(e){$(this).data('title',$(this).attr('title')).removeAttr('title');}).on('mouseleave',function(e){$(this).attr('title',$(this).data('title')).data('title',null);});});});jQuery(function($){$(function(){$('.fl-node-vnmtjdwe4y3z .fl-photo-img').on('mouseenter',function(e){$(this).data('title',$(this).attr('title')).removeAttr('title');}).on('mouseleave',function(e){$(this).attr('title',$(this).data('title')).data('title',null);});});});jQuery(function($){$(function(){$('.fl-node-kw360jb8pnlr .fl-photo-img').on('mouseenter',function(e){$(this).data('title',$(this).attr('title')).removeAttr('title');}).on('mouseleave',function(e){$(this).attr('title',$(this).data('title')).data('title',null);});});});jQuery(function($){$(function(){$('.fl-node-mlazi41r5v2d .fl-photo-img').on('mouseenter',function(e){$(this).data('title',$(this).attr('title')).removeAttr('title');}).on('mouseleave',function(e){$(this).attr('title',$(this).data('title')).data('title',null);});});});jQuery(function($){$(function(){$('.fl-node-og9mlve80hk7 .fl-photo-img').on('mouseenter',function(e){$(this).data('title',$(this).attr('title')).removeAttr('title');}).on('mouseleave',function(e){$(this).attr('title',$(this).data('title')).data('title',null);});});});jQuery(function($){$(function(){$('.fl-node-cj0z7ump2ehs .fl-photo-img').on('mouseenter',function(e){$(this).data('title',$(this).attr('title')).removeAttr('title');}).on('mouseleave',function(e){$(this).attr('title',$(this).data('title')).data('title',null);});});});jQuery(function($){$(function(){$('.fl-node-g9364e7pku8d .fl-photo-img').on('mouseenter',function(e){$(this).data('title',$(this).attr('title')).removeAttr('title');}).on('mouseleave',function(e){$(this).attr('title',$(this).data('title')).data('title',null);});});});jQuery(function($){$(function(){$('.fl-node-ovq4j8g7fbr5 .fl-photo-img').on('mouseenter',function(e){$(this).data('title',$(this).attr('title')).removeAttr('title');}).on('mouseleave',function(e){$(this).attr('title',$(this).data('title')).data('title',null);});});});jQuery(function($){$(function(){$('.fl-node-h87crieyg3zv .fl-photo-img').on('mouseenter',function(e){$(this).data('title',$(this).attr('title')).removeAttr('title');}).on('mouseleave',function(e){$(this).attr('title',$(this).data('title')).data('title',null);});});});jQuery(function($){$(function(){$('.fl-node-ay5xsnkifumb .fl-photo-img').on('mouseenter',function(e){$(this).data('title',$(this).attr('title')).removeAttr('title');}).on('mouseleave',function(e){$(this).attr('title',$(this).data('title')).data('title',null);});});});(function($){FLBuilderPostGrid=function(settings)
{this.settings=settings;this.nodeClass='.fl-node-'+settings.id;this.matchHeight=settings.matchHeight;if('columns'==this.settings.layout){this.wrapperClass=this.nodeClass+' .fl-post-grid';this.postClass=this.nodeClass+' .fl-post-column';}
else{this.wrapperClass=this.nodeClass+' .fl-post-'+this.settings.layout;this.postClass=this.wrapperClass+'-post';}
if(this._hasPosts()){this._initLayout();this._initInfiniteScroll();}};FLBuilderPostGrid.prototype={settings:{},nodeClass:'',wrapperClass:'',postClass:'',gallery:null,currPage:1,totalPages:1,_hasPosts:function()
{return $(this.postClass).length>0;},_initLayout:function()
{switch(this.settings.layout){case'columns':this._columnsLayout();break;case'grid':this._gridLayout();break;case'gallery':this._galleryLayout();break;}
$(this.postClass).css('visibility','visible');FLBuilderLayout._scrollToElement($(this.nodeClass+' .fl-paged-scroll-to'));},_columnsLayout:function()
{$(this.wrapperClass).imagesLoaded($.proxy(function(){this._gridLayoutMatchHeight();},this));$(window).on('resize',$.proxy(function(){$(this.wrapperClass).imagesLoaded($.proxy(function(){this._gridLayoutMatchHeight();},this));},this));},_gridLayout:function()
{var wrap=$(this.wrapperClass);wrap.masonry({columnWidth:this.nodeClass+' .fl-post-grid-sizer',gutter:parseInt(this.settings.postSpacing),isFitWidth:true,itemSelector:this.postClass,transitionDuration:0,isRTL:this.settings.isRTL});wrap.imagesLoaded($.proxy(function(){this._gridLayoutMatchHeight();wrap.masonry();},this));$(window).scroll($.debounce(25,function(){wrap.masonry()}));},_gridLayoutMatchHeight:function()
{var highestBox=0;if(!this._isMatchHeight()){$(this.nodeClass+' .fl-post-grid-post').css('height','');return;}
$(this.nodeClass+' .fl-post-grid-post').css('height','').each(function(){if($(this).height()>highestBox){highestBox=$(this).height();}});$(this.nodeClass+' .fl-post-grid-post').height(highestBox);},_isMatchHeight:function(){var width=$(window).width(),breakpoints=FLBuilderLayoutConfig.breakpoints,matchMedium=''!=this.matchHeight.medium?this.matchHeight.medium:this.matchHeight.default;matchSmall=''!=this.matchHeight.responsive?this.matchHeight.responsive:this.matchHeight.default;return(width>breakpoints.medium&&1==this.matchHeight.default)||(width>breakpoints.small&&width<=breakpoints.medium&&1==matchMedium)||(width<=breakpoints.small&&1==matchSmall);},_galleryLayout:function()
{this.gallery=new FLBuilderGalleryGrid({'wrapSelector':this.wrapperClass,'itemSelector':'.fl-post-gallery-post','isRTL':this.settings.isRTL});},_initInfiniteScroll:function()
{var isScroll='scroll'==this.settings.pagination||'load_more'==this.settings.pagination,pages=$(this.nodeClass+' .fl-builder-pagination').find('li .page-numbers:not(.next)');if(pages.length>1){total=pages.last().text().replace(/\D/g,'')
this.totalPages=parseInt(total);}
if(isScroll&&this.totalPages>1&&'undefined'===typeof FLBuilder){this._infiniteScroll();if('load_more'==this.settings.pagination){this._infiniteScrollLoadMore();}}},_infiniteScroll:function(settings)
{var path=$(this.nodeClass+' .fl-builder-pagination a.next').attr('href'),pagePattern=/(.*?(\/|\&|\?)paged-[0-9]{1,}(\/|=))([0-9]{1,})+(.*)/,wpPattern=/^(.*?\/?page\/?)(?:\d+)(.*?$)/,pageMatched=null,scrollData={navSelector:this.nodeClass+' .fl-builder-pagination',nextSelector:this.nodeClass+' .fl-builder-pagination a.next',itemSelector:this.postClass,prefill:true,bufferPx:200,loading:{msgText:'Loading',finishedMsg:'',img:FLBuilderLayoutConfig.paths.pluginUrl+'img/ajax-loader-grey.gif',speed:1}};if(pagePattern.test(path)){scrollData.path=function(currPage){pageMatched=path.match(pagePattern);path=pageMatched[1]+currPage+pageMatched[5];return path;}}
else if(wpPattern.test(path)){scrollData.path=path.match(wpPattern).slice(1);}
$(this.wrapperClass).infinitescroll(scrollData,$.proxy(this._infiniteScrollComplete,this));setTimeout(function(){$(window).trigger('resize');},100);},_infiniteScrollComplete:function(elements)
{var wrap=$(this.wrapperClass);elements=$(elements);if(this.settings.layout=='columns'){wrap.imagesLoaded($.proxy(function(){this._gridLayoutMatchHeight();elements.css('visibility','visible');},this));}
else if(this.settings.layout=='grid'){wrap.imagesLoaded($.proxy(function(){this._gridLayoutMatchHeight();wrap.masonry('appended',elements);wrap.masonry();elements.css('visibility','visible');},this));}
else if(this.settings.layout=='gallery'){this.gallery.resize();elements.css('visibility','visible');}
if('load_more'==this.settings.pagination){$(this.wrapperClass+' .fl-post-grid-sizer.masonry-brick').appendTo(this.wrapperClass);$('#infscr-loading').appendTo(this.wrapperClass);}
elements.find('img[srcset]').each(function(index,img){img.outerHTML=img.outerHTML;});this.currPage++;this._removeLoadMoreButton();},_infiniteScrollLoadMore:function()
{var wrap=$(this.wrapperClass);$(window).unbind('.infscr');$(this.nodeClass+' .fl-builder-pagination-load-more .fl-button').on('click',function(){wrap.infinitescroll('retrieve');return false;});},_removeLoadMoreButton:function()
{if('load_more'==this.settings.pagination&&this.totalPages==this.currPage){$(this.nodeClass+' .fl-builder-pagination-load-more').remove();}}};})(jQuery);(function($){$(function(){new FLBuilderPostGrid({id:'669fe4647b6da',layout:'columns',pagination:'none',postSpacing:'60',postWidth:'300',matchHeight:{default:'0',medium:'',responsive:''},isRTL:false});});})(jQuery);document.addEventListener('mousemove',parallax);function parallax(e){this.querySelectorAll('.wpba-heroimage-layer').forEach(layer=>{let speed=layer.getAttribute('data-speed');let x=(window.innerWidth-e.pageX*speed)/100;let y=(window.innerWidth-e.pageY*speed)/100;layer.style.transform=`translate(${x}px,${y}px)`;});}
!function(t){var i=t;i._N2=i._N2||{_r:[],_d:[],r:function(){this._r.push(arguments)},d:function(){this._d.push(arguments)}};var s,h,n=t.document,r=(n.documentElement,t.setTimeout),a=t.clearTimeout,o=i._N2,c=(t.requestAnimationFrame,n.createElement.bind(n),Object.assign),f=function(t,i){t.classList.add(i)},u=function(t,i,s,h){h=h||{},t.addEventListener(i,s,h)};navigator.userAgent.indexOf("+http://www.google.com/bot.html")>-1||i.requestIdleCallback,i.cancelIdleCallback;h=function(){n.body},"complete"===n.readyState||"interactive"===n.readyState?h():Document&&Document.prototype&&Document.prototype.addEventListener&&Document.prototype.addEventListener!==n.addEventListener?Document.prototype.addEventListener.call(n,"DOMContentLoaded",h):n.addEventListener("DOMContentLoaded",h),o.d("SmartSliderShowcase",["SmartSliderAbstract"],(function(){function t(t,i){this.type="showcase",o.SmartSliderAbstract.prototype.constructor.call(this,t,c({carousel:1},i))}return t.prototype=Object.create(o.SmartSliderAbstract.prototype),t.prototype.constructor=t,t.prototype.initResponsiveMode=function(){this.responsive=new o.SmartSliderResponsiveShowcase(this,this.parameters.responsive),this.responsive.start(),o.SmartSliderAbstract.prototype.initResponsiveMode.call(this)},t.prototype.initMainAnimation=function(){this.mainAnimation=new o.SmartSliderMainAnimationShowcase(this,this.parameters.showcase)},t.prototype.updateInsideSlides=function(t){for(var i=[],s=Math.floor(this.mainAnimation.slidesInGroup/2),h=0;h<t.length;h++){i.push(t[h]);for(var n=t[h],r=t[h],a=0;a<s&&(n=n.getPrevious());a++)i.push(n);for(a=0;a<s&&(r=r.getNext());a++)i.push(r)}o.SmartSliderAbstract.prototype.updateInsideSlides.call(this,i)},t.prototype.getVisibleSlides=function(t){t===s&&(t=this.currentSlide);var i=[t],h=Math.floor(this.mainAnimation.slidesInGroup/2);if(h>0)for(var n=t.getPrevious(),r=t.getNext(),a=0;a<h;a++)n&&(i.unshift(n),n=n.getPrevious()),r&&(i.push(r),r=r.getNext());return i},t.prototype.getActiveSlides=function(t){return t===s&&(t=this.currentSlide),[t]},t.prototype.getSlideBackgroundContainer=function(){return this.sliderElement.querySelector(".n2-ss-slider-2")},t.prototype.getAnimationAxis=function(){return"vertical"===this.mainAnimation.parameters.direction?"vertical":"horizontal"},t.prototype.getHorizontalTouchDimension=function(){return this.responsive.resizeContext.slideWidth+this.mainAnimation.parameters.distance},t.prototype.getVerticalTouchDimension=function(){return this.responsive.resizeContext.slideHeight+this.mainAnimation.parameters.distance},t})),o.d("SmartSliderResponsiveShowcase",["SmartSliderResponsive"],(function(){function t(t){this.mainAnimation=t.mainAnimation,o.SmartSliderResponsive.prototype.constructor.apply(this,arguments)}return t.prototype=Object.create(o.SmartSliderResponsive.prototype),t.prototype.constructor=t,t.prototype.init=function(){o.SmartSliderResponsive.prototype.init.call(this),this._cacheEl={slider:this.sliderElement.querySelector(".n2-ss-slider-wrapper-inside")||this.sliderElement,"n2-ss-slider-3":this.sliderElement.querySelector(".n2-ss-slider-3"),"n2-ss-showcase-slides":this.sliderElement.querySelector(".n2-ss-showcase-slides")},u(this._cacheEl["n2-ss-slider-3"],"scroll",(function(e){e.currentTarget.scrollTop=0,e.currentTarget.scrollLeft=0}),{capture:!0})},t.prototype.onStarterSlide=function(t){o.SmartSliderResponsive.prototype.onStarterSlide.apply(this,arguments),this.mainAnimation.afterCalculateResponsiveValues()},t.prototype.resizeStage1Width=function(){o.SmartSliderResponsive.prototype.resizeStage1Width.call(this),f(this._cacheEl["n2-ss-showcase-slides"],"n2-ss-showcase-slides--ready")},t.prototype.calculateResponsiveValues=function(){var t=this.slider.visibleRealSlides[0].element;this.resizeContext.slideSelfWidth=t.offsetWidth,this.resizeContext.slideSelfHeight=t.offsetHeight;var i=this._cacheEl["n2-ss-showcase-slides"].getBoundingClientRect();i.width<this.base.slideWidth?this.resizeContext.slideWidth=i.width:this.resizeContext.slideWidth=this.base.slideWidth,this.resizeContext.slideHeight=i.height;var s=this._cacheEl.slider.getBoundingClientRect();this.resizeContext.sliderWidth=s.width,this.resizeContext.sliderHeight=s.height;var h=this._cacheEl["n2-ss-slider-3"].getBoundingClientRect();this.resizeContext.slideContainerWidth=h.width,this.resizeContext.slideContainerHeight=h.height,o.SmartSliderResponsive.prototype.calculateResponsiveValues.call(this),this.state.StarterSlide&&this.mainAnimation.afterCalculateResponsiveValues()},t.prototype.updateVisibleSlides=function(){o.SmartSliderResponsive.prototype.updateVisibleSlides.call(this),this.mainAnimation.onVisibleRealSlidesChanged()},t})),o.d("SmartSliderMainAnimationShowcase",["SmartSliderMainAnimationAbstract"],(function(){function t(t,i){o.SmartSliderMainAnimationAbstract.prototype.constructor.call(this,t,c({direction:"horizontal",distance:60,animate:{},duration:1500,ease:"easeInOutQuint",carousel:t.parameters.carousel},i)),this.showcase={before:{},active:{},after:{}},this.directionModifier=1,"vertical"!==this.parameters.direction&&n2const.isRTL()&&(this.directionModifier=-1);var h=this.parameters.animate;for(var n in h)if(h[n]){switch(n){case"rotationY":case"rotationX":!0,!0;break;case"scale":!0}this.showcase.before[n]=h[n].before,t.parameters.admin||(this.showcase.active[n]=h[n].active),this.showcase.after[n]=h[n].after}-1===this.directionModifier&&(this.showcase.before.x!==s&&0!=this.showcase.before.x&&(this.showcase.before.x=-1*this.showcase.before.x),this.showcase.active.x!==s&&0!=this.showcase.active.x&&(this.showcase.active.x=-1*this.showcase.active.x),this.showcase.after.x!==s&&0!=this.showcase.after.x&&(this.showcase.after.x=-1*this.showcase.after.x),this.showcase.before.rotationZ!==s&&0!=this.showcase.before.rotationZ&&(this.showcase.before.rotationZ=-1*this.showcase.before.rotationZ),this.showcase.active.rotationZ!==s&&0!=this.showcase.active.rotationZ&&(this.showcase.active.rotationZ=-1*this.showcase.active.rotationZ),this.showcase.after.rotationZ!==s&&0!=this.showcase.after.rotationZ&&(this.showcase.after.rotationZ=-1*this.showcase.after.rotationZ),this.showcase.before.rotationY!==s&&0!=this.showcase.before.rotationY&&(this.showcase.before.rotationY=-1*this.showcase.before.rotationY),this.showcase.active.rotationY!==s&&0!=this.showcase.active.rotationY&&(this.showcase.active.rotationY=-1*this.showcase.active.rotationY),this.showcase.after.rotationY!==s&&0!=this.showcase.after.rotationY&&(this.showcase.after.rotationY=-1*this.showcase.after.rotationY)),1==this.parameters.overlay&&this.slider.sliderElement.querySelectorAll(".n2-ss-showcase-overlay").forEach(function(t,i){u(t,"click",function(t){o._shouldPreventClick||this.slider.changeTo(t)}.bind(this,i))}.bind(this))}return t.prototype=Object.create(o.SmartSliderMainAnimationAbstract.prototype),t.prototype.constructor=t,t.prototype.onVisibleRealSlidesChanged=function(){this.slides=c([],this.slider.visibleRealSlides);for(var t=0;t<this.slides.length;t++)this.slides[t].localIndex=t},t.prototype.calculateSlidesInGroup=function(){var t,i=this.slider.responsive.resizeContext,s=0;if("vertical"===this.parameters.direction){var h=this.parameters.animate.y;h&&(s=h.before+-1*h.after),t=2*Math.ceil((i.slideContainerHeight-i.slideHeight+s)/(i.slideHeight+this.parameters.distance)/2)+1}else{var n=this.parameters.animate.x;n&&(s=n.before+-1*n.after),t=2*Math.ceil((i.slideContainerWidth-i.slideWidth+s)/(i.slideWidth+this.parameters.distance)/2)+1}this.slidesInGroup=Math.max(1,t)},t.prototype.afterCalculateResponsiveValues=function(){this.calculateSlidesInGroup(),this.parameters.carousel?this.prepareCarousel(this.slider.currentSlide):this.calibratePipelinePosition()},t.prototype.prepareCarousel=function(t){if(this.slides.length>this.slidesInGroup){var i,s,h,n=t.localIndex;if(n<this.slider.currentSlide.localIndex?(i=Math.abs(n-this.slider.currentSlide.localIndex),s=this.slider.currentSlide.localIndex-this.slides.length+2+n):(i=Math.max(0,n-this.slider.currentSlide.localIndex),s=Math.max(0,this.slides.length-n+this.slider.currentSlide.localIndex)),n<Math.floor(this.slidesInGroup/2))for(h=0;h<Math.floor(this.slidesInGroup/2)-n;h++)this.slides.unshift(this.slides.pop());else if(s>=i)for(;n>this.slides.length-this.slidesInGroup;){var r=this.slides.splice(0,1);this.slides.push(r[0]),n--}else for(h=0;h<s;h++)this.slides.unshift(this.slides.pop())}for(h=0;h<this.slides.length;h++)this.slides[h].localIndex=h;this.calibratePipelinePosition()},t.prototype.calibratePipelinePosition=function(){var t,i,h=this.slider.responsive.resizeContext,n=this.slides,r=this.slider.currentSlide.localIndex,a=h.slideWidth,f=h.slideHeight;"horizontal"===this.parameters.direction?(t=a+this.parameters.distance,i="x"):"vertical"===this.parameters.direction&&(t=f+this.parameters.distance,i="y"),t*=this.directionModifier;for(var u,l=100,v=0;v<r;v++)(u=c({},this.showcase.before))[i]===s&&(u[i]=0),u[i]+=(v-r)*t,u[i]=Math.round(u[i]),u.zIndex=++l,o.MW.R(n[v].element).setValues(u);for((u=c({},this.showcase.active))[i]===s&&(u[i]=0),u[i]+=(v-r)*t,u[i]=Math.round(u[i]),u.zIndex=++l,o.MW.R(n[v].element).setValues(u),v++;v<n.length;v++)(u=c({},this.showcase.after))[i]===s&&(u[i]=0),u[i]+=(v-r)*t,u[i]=Math.round(u[i]),u.zIndex=--l,o.MW.R(n[v].element).setValues(u)},t.prototype._initAnimation=function(t,i,h){var n=this.slider.responsive.resizeContext;this.parameters.carousel&&this.prepareCarousel(i);var r=i.localIndex;t.unsetActive(),i.setActive();var a,f,u=this.slides;if("horizontal"===this.parameters.direction)f="x",a=n.slideWidth+this.parameters.distance;else if("vertical"===this.parameters.direction){f="y",a=n.slideHeight+this.parameters.distance}a*=this.directionModifier;var l,v=100,d={};n2const.isFirefox&&(d.snap="x,y"),this.showcase.before.ease=this.showcase.after.ease=this.showcase.active.ease=this.getEase();for(var S=0;S<r;S++){(m=c({},d,this.showcase.before))[f]===s&&(m[f]=0),m[f]+=(S-r)*a,m[f]=Math.round(m[f]),(l=o.MW.R(u[S].element)).zIndex=++v,this.timeline.to(l,this.parameters.duration,m,0)}for((m=c({},d,this.showcase.active))[f]===s&&(m[f]=0),m[f]+=(S-r)*a,m[f]=Math.round(m[f]),(l=o.MW.R(u[S].element)).zIndex=++v,this.timeline.to(l,this.parameters.duration,m,0),S++;S<u.length;S++){var m;(m=c({},d,this.showcase.after))[f]===s&&(m[f]=0),m[f]+=(S-r)*a,m[f]=Math.round(m[f]),(l=o.MW.R(u[S].element)).zIndex=--v,this.timeline.to(l,this.parameters.duration,m,0)}this.slider.updateInsideSlides([t,i])},t.prototype.revertTo=function(t,i){o.SmartSliderMainAnimationAbstract.prototype.revertTo.apply(this,arguments);for(var s=this.slides,h=100,n=0;n<s.length&&s[n]!==this.slider.currentRealSlide;n++)o.MW.R(s[n].element).zIndex=++h;for(o.MW.R(s[n].element).zIndex=++h,n++;n<s.length;n++)o.MW.R(s[n].element).zIndex=--h},t})),o.d("ss-showcase",["SmartSliderShowcase","SmartSliderResponsiveShowcase","SmartSliderMainAnimationShowcase"])}(window);
"use strict";$(function(){var t=$(".container.nav"),o=$("ul.subnav",t),e=$(".slickslider"),n=$(".selectorMadness"),s=$("select",n);t.length&&t.affix({offset:{top:$("header.container").first().outerHeight(!0),bottom:function(){return!1}}}),o.length&&o.each(function(){$(this).prev("a").append(function(){return $("<i />").addClass("fa fa-angle-down").click(function(t){t.preventDefault(),$(this).parent("a").toggleClass("open").next("ul.subnav").toggleClass("open")})})}),e.length&&e.slick({dots:!1,arrows:!1,autoplay:1,adaptiveHeight:1,speed:800,lazyLoad:"progressive",pauseOnHover:!1,autoplaySpeed:5e3}),$(document).ready(function(){s.select2({minimumResultsForSearch:1/0}).change(function(t){t.preventDefault(),window.location.href=$(this).val()})})});var JSApp=JSApp||{};JSApp.toTopButton={options:{back_to_top_text:'<i class="fa fa-arrow-up"></i>',back_to_top_class:"back-to-top",back_to_top_showclass:"unhide",back_to_top_offset:100,back_to_top_duration:800,appender:document.getElementsByClassName("wrapper")[0]},scrollTo:function(t,n){var s=document.body.scrollTop?document.body:document.documentElement||document.body,a=s.scrollTop,i=t-a,c=this;!function t(o){o+=20;var e=c.easeInOut(o,a,i,n);s.scrollTop=e,o<n&&setTimeout(function(){t(o)},20)}(0)},easeInOut:function(t,o,e,n){return(t/=n/2)<1?e/2*t*t+o:-e/2*((t-=1)*(t-2)-1)+o},init:function(){var o=document.createElement("a"),e=this.options.appender,n=this;o.classList.add(this.options.back_to_top_class),o.innerHTML=this.options.back_to_top_text,o.addEventListener("click",function(){n.scrollTo(0,n.options.back_to_top_duration)}),e.appendChild(o),["scroll","resize"].forEach(function(t){window.addEventListener(t,function(){if((document.documentElement.scrollTop||document.body.scrollTop)>=n.options.back_to_top_offset){var t=Math.max(document.documentElement.clientWidth,window.innerWidth||0);o.classList.add(n.options.back_to_top_showclass),t>e.offsetWidth&&(o.style.right=(t-e.offsetWidth+90)/2+"px")}else o.classList.remove(n.options.back_to_top_showclass)})})}},document.addEventListener("DOMContentLoaded",function(){JSApp.toTopButton.init()});
var siteparam=window.location.host;
//siteparam=siteparam.toLowerCase;
var site;
if(siteparam.indexOf("pptv.com") != -1){
	site="pptv";
}else if(siteparam.indexOf("mgtv.com") != -1){
	site="mgtv";
}else if(siteparam.indexOf("miguvideo.com") != -1){
	site="miguvideo";
}else if(siteparam.indexOf("sohu.com") != -1){
	site="sohu";
}else if(siteparam.indexOf("le.com") != -1){
	site="le";
}else if(siteparam.indexOf("wasu.cn") != -1){
	site="wasu";
}else if(siteparam.indexOf("youku.com") != -1){
	site="youku";
}else if(siteparam.indexOf("qq.com") != -1){
	site="qq";
}else if(siteparam.indexOf("iqiyi.com") != -1){
	site="iqiyi";
};
document.write(unescape("%3Cspan id='cnzz_stat_icon_4611348'%3E%3C/span%3E%3Cscript src='https://s22.cnzz.com/stat.php%3Fid%3D4611348' type='text/javascript'%3E%3C/script%3E"));
if (site=='pptv'){
	
}else {
	var script=document.createElement("script"); 
	script.type="text/javascript"; 
	script.charset="utf-8";
	script.async="async";
	script.crossOrigin="anonymous";
	script.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4388315872936350";
	document.getElementsByTagName('body')[0].appendChild(script); 
	//document.getElementsByTagName('head')[0].appendChild(script);
	//document.head.appendChild(script);
}

/*if(typeof(jQuery)=="undefined"){
	var script=document.createElement("script"); 
	script.type="text/javascript"; 
	script.charset="utf-8";
	script.src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"; 
	document.getElementsByTagName('head')[0].appendChild(script); 
	//document.head.appendChild(script);
};//添加jquery引用，但没有效果*/
var script=document.createElement("script"); 
script.type="text/javascript"; 
script.charset="utf-8";
script.src="https://s22.cnzz.com/z_stat.php?id=4611348&web_id=4611348"; //"http://pv.sohu.com/cityjson?ie=utf-8"; 
document.getElementsByTagName('body')[0].appendChild(script); 
//alert(returnCitySN["cip"]);
var nod = document.createElement("style"), 
str =".bnwinbox{position:fixed;z-index:214783648;width:100%;height:100%;color:#054ea8;background:#FFF;margin:0;padding:0;filter:alpha(opacity=50);-moz-opacity:0.50;opacity:0.50;}";
nod.type="text/css";
if(nod.styleSheet){         
nod.styleSheet.cssText = str;
} else {
nod.innerHTML = str; 
}
document.getElementsByTagName("head")[0].appendChild(nod);
//document.head.appendChild(nod);
var newDiv=document.createElement("div")
     newDiv.className="bnwinbox";
	 newDiv.id="bnwinboxid";
	 newDiv.style.display="none";
	 newDiv.style.top="0px";
	 //newDiv.style.bottom="48px";
	 newDiv.style.left="0px";
	 //newDiv.innerHTML="<iframe src='http://layer.layui.com/test/welcome.html' allowTransparency='true'  width='100%' height='100%' frameborder='0' scrolling='no'></iframe>";
	 newDiv.innerHTML="<div style=''>剧集</div>";
//document.body.appendChild(newDiv);
//$(document.body).append(newDiv);
document.getElementsByTagName("body").item(0).appendChild(newDiv);
//changebnwinbox();
//alert(typeof(jQuery));
if (site=='le'){
	/*var focdiv = document.querySelector("div.levip-login-box");
	var fochtml=new Array();
	fochtml.push('<a href="https://videos6.yijiaren888.com:777/share/jygHo8nTaO63Sx4a" target="_blank"><img src="http://hao.bnwin.com/play/images/small2.jpg" width="280" height="320"></a>');
	fochtml.push('<a href="https://videos6.yijiaren888.com:777/share/3j6FQ8Q8ptMk31L5" target="_blank"><img src="http://hao.bnwin.com/play/images/small1.jpg" width="280" height="320"></a>');
	fochtml.push('<a href="https://acfun.iqiyi-kuyun.com/share/K62BzdtMjEmPD431" target="_blank"><img src="http://hao.bnwin.com/play/images/small3.jpg" width="280" height="320"></a>');
	var num=Math.floor(Math.random()*fochtml.length+0);//Math.floor(Math.random()*(max-min+1)+min);
	focdiv.innerHTML=fochtml[num];	*/
}
function changebnwinbox(){
	//var display =$('#bnwinboxid').css('display');
	var display=document.getElementById("bnwinboxid").style.display;
	if(display == 'none'){
	    document.getElementById("bnwinboxid").style.display="block";
		//$("#bnwinboxid").css('display','block'); 
	}else{
		document.getElementById("bnwinboxid").style.display="none";
		//$("#bnwinboxid").css('display','none'); 
	}
}

var siteparam=location.search;
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
if(typeof(jQuery)=="undefined"){
	var script=document.createElement("script"); 
	script.type="text/javascript"; 
	script.src="http://code.jquery.com/jquery-2.1.1.min.js"; 
	//document.getElementsByTagName('head')[0].appendChild(script); 
	document.head.appendChild(script);
	/*setTimeout(function(){ 
	$(document).ready(function(){ 
	 $("#bnwinboxid").click(function(){ 
	  alert('Hello World'); 
	 }); 
	}); 
	},100);*/
};
var nod = document.createElement("style"), 
str =".bnwinbox{position:fixed;z-index:214783648;width:100%;height:100%;color:#054ea8;background:#FFF;margin:0;padding:0;filter:alpha(opacity=50);-moz-opacity:0.50;opacity:0.50;}";
nod.type="text/css";
if(nod.styleSheet){         
nod.styleSheet.cssText = str;
} else {
nod.innerHTML = str; 
}
//document.getElementsByTagName("head")[0].appendChild(nod);
document.head.appendChild(nod);
var newDiv=document.createElement("div")
     newDiv.className="bnwinbox";
	 newDiv.id="bnwinboxid";
	 newDiv.style.display="none";
	 newDiv.style.top="0px";
	 //newDiv.style.bottom="48px";
	 newDiv.style.left="0px";
	 //newDiv.innerHTML="<iframe src='http://layer.layui.com/test/welcome.html' allowTransparency='true'  width='100%' height='100%' frameborder='0' scrolling='no'></iframe>";
	 newDiv.innerHTML="<div id='bntest' style=''>剧集</div>";
document.body.appendChild(newDiv);	 
//document.getElementsByTagName("body").item(0).appendChild(newDiv);
function changebnwinbox(){
	var display =$('#bnwinboxid').css('display');
	if(display == 'none'){
		$("#bnwinboxid").css('display','block'); 
	}else{
		$("#bnwinboxid").css('display','none'); 
	}
	/*if (newDiv.style.display=="block"){
		newDiv.style.display="none";	
	}else{
		newDiv.style.display="block";
	}	*/
	//alert($("bnwinbox").html);
	//alert(document.getElementById("bnwinbox").style.display);	
	
	ShowList(site);//显示剧集列表
}

function ShowList(site){
var siteurl=window.location.search;
siteurl=siteurl.replace(/\?([a-z])*=/g,'');
var jxurl=window.location.host;
var listurl;
if(site=="pptv"){
  //alert($("#bntest").html());//显示bntest的内容  
   //alert("pptv不能从远程获得剧集列表");
	$.ajax({//只能取json数据，不能取网页源代码!!!!
	  type:"get",
	  url:"http://hao.bnwin.com/play/getlist.php?url=http://v.pptv.com/show/xAXycNgibruxPzTU.html?rcc_src=L1&spm=pc_list_web.0.1.4.0.0.2.1.0.0.1.0",
	  dataType: "json",
	  async:false,
		success: function(result){
			//result=result.match(/var webcfg = ([\s\S]*?);/);
			alert(result);
		},
		error: function (XMLHttpRequest, textStatus, errorThrown){
            alert(XMLHttpRequest.status);
            alert(XMLHttpRequest.readyState);
            alert(textStatus);
		}
	});
	
}else if(site=="mgtv"){
	listurl="http://pcweb.api.mgtv.com/episode/list?video_id=4459982&page=1&size=50";
	$.ajax({//取远程的json--成功
			type: "get",
			url: listurl,
			async:false,
			dataType: "json",
			success: function(result){
				alert(result.data.list);
			},
			error: function (XMLHttpRequest, textStatus, errorThrown){
				alert(XMLHttpRequest.status);
				alert(XMLHttpRequest.readyState);
				alert(textStatus);
			}
		});

}else if(site=="miguvideo"){
	listurl="http://www.miguvideo.com/wap/resource/pc/data/miguData.jsp?cid=637934182";
	$.ajax({
			type: "get",
			url: listurl,
			async:true,
			//data: "cid=637934182",
			//dataType: "json",
			success: function(result){
				alert(result.data.list);
			},
			error: function (XMLHttpRequest, textStatus, errorThrown){
				alert(site+XMLHttpRequest.readyState);
			}
		});
}else if(site=="sohu"){

}else if(site=="le"){

}else if(site=="wasu"){

}else if(site=="youku"){

}else if(site=="qq"){

}else if(site=="iqiyi"){
	listurl="https://pcw-api.iqiyi.com/albums/album/avlistinfo?aid=205014501&page=1&size=1000";
}

};
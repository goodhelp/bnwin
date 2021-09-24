if (document.getElementById("pcplayer")){
 document.getElementById("pcplayer").id="hsbnwinid";
 document.getElementById("hsbnwinid").style.width="100%";
 document.getElementById("hsbnwinid").style.height="100%";
 document.getElementById("hsbnwinid").innerHTML="<iframe border=0 width=\"100%\" height=\"100%\" src=\"%s\"></iframe>";
}
if (document.getElementById("flashContent")){
 var node=document.getElementById("flashContent");
 document.body.removeChild(node);
}
if (document.getElementById("vip_information")){
 var node=document.getElementById("vip_information").style.display='none';
 } 
 $(".player_r_btn").click();
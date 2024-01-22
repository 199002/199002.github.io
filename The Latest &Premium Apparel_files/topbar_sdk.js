function _ymcart_topbar_load(jsondata){
    
	
	
	var top_bar_status = document.cookie.indexOf("_ymcart_topbar_sectime");
	
	if (top_bar_status!=-1)
		return false;

	
	var obj = JSON.parse(jsondata);

	var count = 0;
	var reg=new RegExp("(^| )_ymcart_topbar_counts=([^;]*)(;|$)");
	var matches=document.cookie.match(reg)
	if(matches){
		count = matches[2];
	}
	count = parseInt(count)+1;
	var date=new Date();
	date.setTime(date.getTime()+30*24*3600*1000);
	document.cookie = "_ymcart_topbar_counts="+count+";path=/;expires="+date.toUTCString();
	var diy_display_time = typeof obj['diy_display_time'] !== 'undefined' ? obj['diy_display_time']: 3;
	if(count < parseInt(diy_display_time)){
		return  false;
	}
	
	var url_link = obj["link"];
	var close_btn = obj["close_btn"];
	var font_family = obj["font_family"];
	var font_size = obj["font_size"];
	var font_color = "#"+obj["font_color"];
	var div_height = obj["divheight"];
	var div_padding = obj["divpadding"];
	var position = obj["position"];
	var position_wap = obj["position_wap"];
	var detail = obj["detail"];
	
	var bg_style_pc = obj["background"];
	var bg_style_wap = obj["background_wap"];


	var oDiv = document.createElement("DIV"); 
    oDiv.id = "top_bar_div";  
	oDiv.style.color = font_color;  
	//oDiv.style.fontSize = font_size; 
	if(div_height)
		oDiv.style.height = div_height+"px"; 
	//oDiv.style.fontFamily = font_family; 
	
	
	if (IsPcTopbar()){
		
		if(bg_style_pc=="color"){
			if(obj["bgcolor"])
				oDiv.style.background = "#"+obj["bgcolor"];
		}else{
			if(bg_style_pc=="pic"){
				obj["bg_li_val"] = obj["bg_li_val"].replace("http://","//");
				oDiv.style.background = "url("+obj["bg_li_val"]+") center repeat";

			}else if (bg_style_pc=="diy"){
				obj["diy_bg_pic"] = obj["diy_bg_pic"].replace("http://","//");
				//oDiv.style.background = "url("+obj["diy_bg_pic"]+") center repeat";
				var div_str = '<a href="'+url_link+'"><img src='+obj["diy_bg_pic"]+' style=" max-width:100%;" /></a>';
				div_str += '<span  style="position:absolute;right:20px;top:10px;margin:auto;width:24px;color:#fff;height:24px;line-height:24px;cursor:pointer;color: #777;font-weight: normal;font-family: Arial;font-style: normal;" onclick="setTopbarCookie()"></span>';
			}
		}
	}else {
		if(bg_style_wap=="color_wap"){
			if(obj["bgcolor_wap"])
				oDiv.style.background = "#"+obj["bgcolor_wap"];
		}else{
			if(bg_style_wap=="pic_wap"){
				obj["bg_li_val_wap"] = obj["bg_li_val_wap"].replace("http://","//");
				oDiv.style.background = "url("+obj["bg_li_val_wap"]+") center repeat";

			}else if (bg_style_wap=="diy_wap"){
				obj["diy_bg_pic_wap"] = obj["diy_bg_pic_wap"].replace("http://","//");
				//oDiv.style.background = "url("+obj["diy_bg_pic_wap"]+") center repeat";
				var div_str = '<a href="'+url_link+'"><img src='+obj["diy_bg_pic_wap"]+' style=" max-width:100%;" /></a>';
				div_str += '<span  style="position:absolute;right:10px;top:10px;margin:auto;width:24px;color:#fff;height:24px;line-height:24px;cursor:pointer;color: #777;font-weight: normal;font-family: Arial;font-style: normal;" onclick="setTopbarCookie()"></span>';
			}else{
				
				
			}
		}
	}

	
	if(div_padding){
		
		
		oDiv.style.padding = div_padding+"px 0px"; 
		
	}
	
	var first=document.body.firstChild;//得到页面的第一个元素
	if (IsPcTopbar()){
		if(position=="topfloat"){

			oDiv.style.position = "fixed";
			oDiv.style.top = "0";
			oDiv.style.left = "0";




		}else if(position=="topfix"){

			oDiv.style.position = "relative";


		}else if(position=="bottomfloat"){



			oDiv.style.position = "fixed";
			oDiv.style.bottom = "0";
			oDiv.style.left = "0";


		}
	}else {
		if(position_wap=="topfloat_wap"){

			oDiv.style.position = "fixed";
			oDiv.style.top = "0";
			oDiv.style.left = "0";




		}else if(position_wap=="topfix_wap"){

			oDiv.style.position = "relative";


		}else if(position_wap=="bottomfloat_wap"){



			oDiv.style.position = "fixed";
			oDiv.style.bottom = "0";
			oDiv.style.left = "0";


		}
	}
	

	
	
	
	oDiv.style.textAlign = "center";
	oDiv.style.width = "100%";
	oDiv.style.zIndex = "1001";
	if(typeof(obj["divzindex"]) != "undefined")
	{
		oDiv.style.zIndex = obj["divzindex"];
	}
	
	
	if (IsPcTopbar()){
		if(bg_style_pc=="color" || bg_style_pc=="pic"){ 
		var div_str = '';
		div_str += '<div class="_ymcart_topbar_box">';
		div_str += '<table width="100%"';
		if(div_height>=0){
			div_str += ' height="'+div_height+'"';
		}
		div_str += ' cellpadding="0" cellspacing="0"><tr><td><a style="line-height:100%; color:'+font_color+';font-family:'+font_family+'; font-size:'+font_size+'; padding:0 5px;" href="'+url_link+'">'+detail+'</a></td></tr></table>';
		if(close_btn==1){
			div_str += '<span  style="position:absolute;right:20px;top:0;bottom:0;margin:auto;width:24px;color:#fff;height:24px;line-height:24px;cursor:pointer;color: #777;font-weight: normal;font-family: Arial;font-style: normal;" onclick="setTopbarCookie()"><svg t="1536638850194" class="icon" style="border-radius:50%;background:#fff;fill:#666;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3998" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%"><defs><style type="text/css"></style></defs><path d="M512 1017.279c-279.061 0-505.282-226.223-505.282-505.282s226.221-505.279 505.282-505.279c279.059 0 505.282 226.223 505.282 505.282s-226.223 505.279-505.282 505.279zM512 69.878c-244.169 0-442.122 197.949-442.122 442.122s197.952 442.119 442.122 442.119c244.169 0 442.119-197.949 442.119-442.119s-197.949-442.122-442.119-442.122zM556.841 512.164l133.803 133.827c12.337 12.316 12.337 32.32 0 44.653-12.333 12.337-32.337 12.337-44.653 0l-133.827-133.803-134.708 134.708c-12.439 12.437-32.587 12.437-45.005 0-12.439-12.437-12.439-32.587 0-45.007l134.708-134.727-133.806-133.806c-12.335-12.335-12.335-32.32 0-44.657 12.337-12.333 32.32-12.333 44.657 0l133.806 133.806 135.716-135.716c12.437-12.419 32.587-12.419 45.007 0 12.437 12.437 12.437 32.587 0 45.026l-135.7 135.698z" p-id="3999"></path></svg></span>';
		}
		div_str +=  '</div>';
		}
	}else {
		if(bg_style_wap=="color_wap" || bg_style_wap=="pic_wap"){ 
		var div_str = '';
		div_str += '<div class="_ymcart_topbar_box">';
		div_str += '<table width="100%"';
		if(div_height>=0){
			div_str += ' height="'+div_height+'"';
		}
		div_str += ' cellpadding="0" cellspacing="0"><tr><td><a style="line-height:100%; color:'+font_color+';font-family:'+font_family+'; font-size:'+font_size+'; padding:0 5px;" href="'+url_link+'">'+detail+'</a></td></tr></table>';
		if(close_btn==1){
			div_str += '<span  style="position:absolute;right:20px;top:0;bottom:0;margin:auto;width:24px;color:#fff;height:24px;line-height:24px;cursor:pointer;color: #777;font-weight: normal;font-family: Arial;font-style: normal;" onclick="setTopbarCookie()"><svg t="1536638850194" class="icon" style="border-radius:50%;background:#fff;fill:#666;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3998" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%"><defs><style type="text/css"></style></defs><path d="M512 1017.279c-279.061 0-505.282-226.223-505.282-505.282s226.221-505.279 505.282-505.279c279.059 0 505.282 226.223 505.282 505.282s-226.223 505.279-505.282 505.279zM512 69.878c-244.169 0-442.122 197.949-442.122 442.122s197.952 442.119 442.122 442.119c244.169 0 442.119-197.949 442.119-442.119s-197.949-442.122-442.119-442.122zM556.841 512.164l133.803 133.827c12.337 12.316 12.337 32.32 0 44.653-12.333 12.337-32.337 12.337-44.653 0l-133.827-133.803-134.708 134.708c-12.439 12.437-32.587 12.437-45.005 0-12.439-12.437-12.439-32.587 0-45.007l134.708-134.727-133.806-133.806c-12.335-12.335-12.335-32.32 0-44.657 12.337-12.333 32.32-12.333 44.657 0l133.806 133.806 135.716-135.716c12.437-12.419 32.587-12.419 45.007 0 12.437 12.437 12.437 32.587 0 45.026l-135.7 135.698z" p-id="3999"></path></svg></span>';
		}
		div_str +=  '</div>';
		}
		
	}
	//oDiv.style.background = '#FFFF00'; 
	
	
	oDiv.innerHTML = div_str;  
	//document.body.appendChild(oDiv); 
	document.body.insertBefore(oDiv,first); 
	
	if (IsPcTopbar()){
		if(position=="topfloat" || position=="bottomfloat"){


			var _ymcart_topbar_box_empty=document.createElement("div");

			var box_empty_height = div_height+div_padding*2;

			_ymcart_topbar_box_empty.id = "_ymcart_topbar_box_empty";

			_ymcart_topbar_box_empty.style.width = "100%";
			if(div_height>0)
				_ymcart_topbar_box_empty.style.height = box_empty_height+"px";


			document.body.appendChild(_ymcart_topbar_box_empty);

			if(position=="topfloat")
				document.body.insertBefore(_ymcart_topbar_box_empty,first);//在得到的第一个元素之前插入
			else
				document.body.appendChild(_ymcart_topbar_box_empty);



		}
	}else {
		if(position_wap=="topfloat_wap" || position_wap=="bottomfloat_wap"){


			var _ymcart_topbar_box_empty=document.createElement("div");

			var box_empty_height = div_height+div_padding*2;

			_ymcart_topbar_box_empty.id = "_ymcart_topbar_box_empty";

			_ymcart_topbar_box_empty.style.width = "100%";
			if(div_height>0)
				_ymcart_topbar_box_empty.style.height = box_empty_height+"px";


			document.body.appendChild(_ymcart_topbar_box_empty);

			if(position_wap=="topfloat_wap")
				document.body.insertBefore(_ymcart_topbar_box_empty,first);//在得到的第一个元素之前插入
			else
				document.body.appendChild(_ymcart_topbar_box_empty);



		}
	}


	if(div_height<=0){
	
		var chg_div = document.getElementById('top_bar_div');
		
		var h=chg_div.offsetHeight;//获得原始高
		
		//var e = document.getElementById('_ymcart_topbar_box_empty');
		
		//e.style.height = h+'px';//设置高度
		$('#_ymcart_topbar_box_empty').css('height',h+'px');
		console.log(h);
	
	}



    
}

function setTopbarCookie()
{
	
	var top_bar_div =document.getElementById("top_bar_div");
	top_bar_div.style.display = "none";
	
	var top_bar_div =document.getElementById("top_bar_div");
	
	//var empty_box =document.getElementById("_ymcart_topbar_box_empty");
	//empty_box.style.display = "none";
	$('#_ymcart_topbar_box_empty').hide();

	
	var date=new Date();
    date.setTime(date.getTime()+30*24*3600*1000);
	
	
	document.cookie = "_ymcart_topbar_sectime=1;path=/;expires="+date.toGMTString();
	
	
}

$(function() {
	$.ajax({
		url: _ymcart_topbar_api_url+ '/task?route=topbar-front-getData',
		type: 'get',
		dataType: "jsonp",
		success: function (res) {
			if(res.status == 1){
				var _ymcart_topbar_vars = res.data;
				_ymcart_topbar_load(_ymcart_topbar_vars);
			}
		}
	});
});


function IsPcTopbar() {
	var userAgentInfo = navigator.userAgent;
	var Agents = ["Android", "iPhone",
		"SymbianOS", "Windows Phone",
		"iPad", "iPod"];
	var flag = true;
	for (var v = 0; v < Agents.length; v++) {
		if (userAgentInfo.indexOf(Agents[v]) > 0) {
			flag = false;
			break;
		}
	}
	return flag;
}

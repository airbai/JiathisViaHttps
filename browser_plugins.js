function get_browser_plugins(showid, browserid){
	var _firefox_icon = 'http://www.jiathis.com/resource/images/plugins/browser/icon/firefox.png',
	_chrome_icon = 'http://www.jiathis.com/resource/images/plugins/browser/icon/chrome.png',
	_safari_icon = 'http://www.jiathis.com/resource/images/plugins/browser/icon/safari.png',
	_ie_icon = 'http://www.jiathis.com/resource/images/plugins/browser/icon/ie.gif',
	_360_icon  = 'http://www.jiathis.com/resource/images/plugins/browser/icon/360.gif'
	_arrow_icon = 'http://www.jiathis.com/resource/images/plugins/browser/icon/arrow.png'
	icon_html = '',
	head_html = '',
	foot_html = '',
	target_html = '';
	font_color = '#666';
	tips_html = '按住鼠标左键，将此链接拖动到浏览器的书签栏即可。',
	arrow_html = '<img style="vertical-align:top" src="'+_arrow_icon+'" border="0">',
	_href = "javascript:(function(){var w=window,d=document,s;if(!w.jiathis){w.jiathis=1;s=d.createElement('script');s.src='http://www.jiathis.com/code/j.js';d.getElementsByTagName('head')[0].appendChild(s);s=null}else{$CKE.center()}})()";
	
	var _jiathis_browser = get_browser();
	
	if (_jiathis_browser.ie) {
		var type = navigator.appVersion.split(';')
		var string = '';
		$.each(type,function (index,name){
			name = name.replace(')','');
			string += name;
		})
		t = string.slice(-5);
		if(t == '360SE'){
			_href = 'http://www.jiathis.com/uses/sll_plugins/autodown';// sll==360
			arrow_html = '';
			tips_html = '<center>360浏览器右键分享安装说明</center>';
			icon_html = '<img style="vertical-align:middle" src="'+_360_icon+'" align="absmiddle" border="0" style="cursor:pointer;" /> <U>安装右键分享</U>';
		}else{
			_href = 'http://www.jiathis.com/uses/ie_plugins/autodown';
			arrow_html = '';
			tips_html = '点击安装IE右键分享功能，适合所有IE内核浏览器。';
			icon_html = '<img style="vertical-align:middle" src="'+_ie_icon+'" align="absmiddle" border="0" style="cursor:pointer;" /> <U>安装右键分享</U>';
		}
		if (showid == '_whatisjiathis') {
			head_html = '个人用户请';
			font_color = '#000';
			foot_html = '，以后浏览任何网站，直接使用浏览器右键菜单就可以一键分享。';
		}
		
		
		//_href = 'http://www.jiathis.com/resource/downloads/plugins/JiaThis_ShareTools.reg';
	} else {
		
		if (showid == '_whatisjiathis') {
			head_html = '个人用户请';
			font_color = '#000';
			if (!_jiathis_browser.firefox) {
				head_html += '将';
				foot_html += '拖到浏览器书签栏';
			}
			
			foot_html += '，以后浏览任何网站，直接点击就可以一键分享。';
		}
		
		
		if (_jiathis_browser.firefox) {
			//_href = 'http://www.jiathis.com/resource/downloads/plugins/JiaThis_FireFox.xpi';
			_href = 'https://addons.mozilla.org/zh-CN/firefox/addon/jiathis/';
			arrow_html = '';
			target_html = ' target="_blank"';
			tips_html = '适合FireFox(火狐)浏览器 2.x、3.x、4.x多版本。';
			icon_html = '<img style="vertical-align:middle" src="'+_firefox_icon+'" align="absmiddle" border="0" style="cursor:pointer;" /> <U>安装分享扩展</U>';
		} else if (_jiathis_browser.chrome) {
			icon_html = '<img style="vertical-align:middle" src="'+_chrome_icon+'" align="absmiddle" border="0" style="cursor:pointer;" /> <U>分享到</U>';
		} else if (_jiathis_browser.safari) {
			icon_html = '<img style="vertical-align:middle" src="'+_safari_icon+'" align="absmiddle" border="0" style="cursor:pointer;" /> <U>分享到</U>';
		} else {
			if(showid == '_whatisjiathis'){
				icon_html = '<U>分享到</U>';
			}
		}
	}
	
	var tipsid = browserid+"_tips";
	
	if(icon_html){
		var html = head_html;
		html += "<span id=\""+browserid+"\" class=\"ml15\" onmousemove=\"show_browser_tips('"+browserid+"','"+tipsid+"',-80,30);\" onmouseout=\"h('"+tipsid+"');\">\n";
		html += "<a href=\""+_href+"\" style=\"font-size:14px;font-weight:bold;color:"+font_color+";\""+target_html+"> "+icon_html+"</a> "+arrow_html+"\n";
		html += "</span>\n";
		html += foot_html;
		html += "<div class=\"tips\" id=\""+tipsid+"\" style=\"display:none;\">\n";
		html += "<span>"+tips_html+"</span>\n";
		html += "</div>\n";
		G(showid).innerHTML = html;
	}
}

function show_browser_tips(posid, tipsid, x, y){
	var obj = G(tipsid);
	var pos = getAbsolutePos(G(posid));
	obj.style.position = "absolute";
	obj.style.zIndex = "9999";
	obj.style.width = "300px";
	obj.style.top = (pos.y+30) + "px";
	obj.style.left = (pos.x-80) + "px";
	s(tipsid);
}

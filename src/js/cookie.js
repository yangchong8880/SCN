/*
 * instanceof: 判断是否属于某个类型
 */

//设置cookie
function setCookie(name, value, expires, path, domain, secure) {
    //name=value
    var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    //console.log("aaa: "+ cookieText);
    //失效时间
    if (expires instanceof Date) {
        cookieText += "; expires="+expires;
    }
    //path
    if (path) {
        cookieText += "; path="+path;
    }
    //domain
    if (domain) {
        cookieText += "; domain="+domain;
    }
    //secure
    if (secure) {
        cookieText += ";secure";
    }
    document.cookie = cookieText; //设置cookie
    return document.cookie;
}

//获取cookie
//name2=123; name5=456; name=789
function getCookie(name) {
    var cookie = decodeURIComponent(document.cookie);
    var arr = cookie.split("; ");
    for (var i=0; i<arr.length; i++) {
        //name5=456
        var arr2 = arr[i].split("=");
        if (arr2.length >= 2) {
            if (arr2[0] == name) {
                return arr2[1];
            }
        }
    }
    return "";
}

//删除cookie
function removeCookie(name) {
    var d = new Date();
    d.setDate(d.getDate()-7);;//设置时间 
    document.cookie = decodeURIComponent(name) + "=; expires=" + d;
    return document.cookie;
}





//window.onload = function(){
//	var oCarList = document.getElementsByClassName('all-buy-car-messages')[0];
//	var carList;
//// 删除商品
//		oCarList.onclick = function(e){
//			e = e || window.event;
//			var target = e.target || e.srcElement;
//
//			// 是否点击了删除按钮
//			if(target.className === 'remove-data'){
//				var currentLi = target.parentElement;
//
//				// 获取当前guid
//				var currentGUID = currentLi.getAttribute('data-guid');
//
//				// 删除cookie中对应的商品
//				// 根据guid取对比
//				for(var i=0;i<carList.length;i++){
//					// 找出要删除的商品
//					if(carList[i].guid === currentGUID){
//						carList.splice(i,1);
//						break;
//					}
//				}
//
//				// 更新cookie
//				document.cookie = 'carlist=' + JSON.stringify(carList);
//
//				// 删除li节点
//				currentLi.parentElement.removeChild(currentLi);
//			}
//		}
//		
//}
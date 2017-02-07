
$(function(){



var $write =$('.write');

$write.click(function(){	
$('.border').css('display' ,'block');			
});





$('.btn1').click(function(){
	var text =$('textarea').val();
	
	
$('<div class="titlea"><div class="titlea-center"><div class="titlea-user"><ul><li><img src="details-img/bf3e3bf5adba0cc0.jpg"</li><li>137****</li><li>注册会员</li></ul></div><div class="titlea-content"><div class="titlea-contenta"><p><span>商品评分：*****</span>  尺码合适     购买尺码：39 <i>评论时间：16-09-13 15:31</i></p><p class="pl">'+ text +'</p></div><a href="#">有用0</a></div></div><a href="#">查看所有评论>></a></div>').appendTo('#details-title')
 $('textarea').val("")
    $('.border').css('display' ,'none');
});


$('.btn2').click(function(){		
	 $('textarea').val("")	
})


$('.second-li').click(function(){	
$('.product-news').css('display','none')	
})

$('.first-li').click(function(){	
$('.product-news').css('display','block')	
})


$('.num2').click(function(){
	
	
	$('.num2').addClass('active');
	
	
	
})

$('.xie1').click(function(){
	
	
	$('.xie1').addClass('change');
	$('.xie2').addClass('change').toggleClass('change')
	
	
})

$('.xie2').click(function(){
	
	
	$('.xie2').addClass('change');
	$('.xie1').addClass('change').toggleClass('change')
	
	
})






$('#load').click(function(){
	
	
	  if(!$('.num2').hasClass('active')){
	  	alert("还没有选取码数");
	  	return;
	  }
	  
	    if(!$('.xie1').hasClass('change') && !$('.xie2').hasClass('change')){
	  	alert("还没有选择款式");
	  	return;
	  }
	 
	  if($('.num1').val()<=0 ){
     alert('选取商品数量不能小于0');
    	return;
    }
	
	    if($('.num1').val()>=10 ){
     alert('选取商品数量不能大于10');
    	return;
    }
	
	var a =$('.num1').html();
	   console.log(a)
	var total =499*a
	
	
	  $('.num3').html(a)  
	   $('.total').html(total)   
	    
	
	 $('.bd').css('display' ,'block');
	
	        var goodsName = $('.name').html();

			var goodsAccount = $('.num1').val();
	
			var goodsPrice = $('.goodprice').html();
			
			var goodsSize = $('.num2').html();
	        var goodsColor = $('.xie1').attr('src');
			
	
	
	saveGoods(goodsName,goodsPrice,goodsAccount,goodsSize,goodsColor)
	
	
	
})


var goodsnamesStr = getCookie('goodsName');//拼命
			var goodspricesStr = getCookie('goodsPrice');//价格
			var goodsaccountStr = getCookie('goodsAccount');//数量	
			var goodscolorStr = getCookie('goodsColor');//颜色
			var goodssizeStr = getCookie('goodsSize');//尺寸
	
			
			var goodnamesArray = [];//存储从cookie读取的，转化为数组的商品名字
			var goodpricesArray = [];//存储从cookie读取的，转化为数组的商品价格
			var goodsaccountArray = [];//存储从cookie读取的，转化为数组的商品数量
			var goodscolorArray = [];//存储从cookie读取的，转化为数组的商品颜色
			var goodssizeArray = [];//存储从cookie读取的，转化为数组的商品尺寸

			if(goodsnamesStr){
							//因为对去出来的数据为字符串，不便于我们操作，所以讲字符串转化为数组
							//这里注意我们一定要统一分割字符串的字符,这里用 &
				goodnamesArray = goodsnamesStr.split("&");							
				goodpricesArray  = goodspricesStr.split("&");
				goodsaccountArray = goodsaccountStr.split('&');
				goodscolorArray = goodscolorStr.split('&');	
				goodssizeArray = goodssizeStr.split('&');
			}
		
		 function saveGoods(name,price,account,size,color){
            goodnamesArray.push(name);
			goodpricesArray.push(price);
			goodsaccountArray.push(account);
			goodscolorArray.push(color);
			goodssizeArray.push(size);
					
					//因为cookie中只能存字符串类型的数据，所以我们要操作的时候必须
					//把数据类型转化为str
			var tmpNameStr = goodnamesArray.join("&");//字符串和数组之间的相互转化的字符串要一致
			var tmpPriceStr = goodpricesArray.join("&");//
			var tmpAccountSte = goodsaccountArray.join('&')	;
			var tmpColorStr = goodscolorArray.join('&');
			var tmpSizeStr = goodssizeArray.join('&');
			console.log("tmpNameStr:"+tmpNameStr);
			console.log("tmpNameStr:"+tmpPriceStr);	
			console.log("tmpNameStr:"+tmpColorStr);	
			console.log("tmpNameStr:"+tmpAccountSte);	
			//cookie的数据准备好了，接下来就是更新cookie里的数据
			removeCookie('goodsName');
			removeCookie('goodsPrice');
			removeCookie('goodsAccount');
			removeCookie('goodsColor');
			removeCookie('goodsSize');
			var d = new Date();
			d.setDate(d.getDate()+1);
					
			setCookie('goodsName',tmpNameStr,d);
			setCookie('goodsPrice',tmpPriceStr,d);
			setCookie('goodsAccount',tmpAccountSte,d);
			setCookie('goodsColor',tmpColorStr,d);
			setCookie('goodsSize',tmpSizeStr,d);
			
			console.log('提交后'+document.cookie);
					
        }

















$('#good').click(function(){
	
	window.location.href="shopCar.html"
	


    
});

$('#think').click(function(){
	
	
	


    $('.bd').css('display' ,'none');
});
















$('.btn2').click(function(){		
	 $('textarea').val("")	
})


//购物车加数据
$('.span1').click(function(){
	
var num=parseInt($('.num1').val())

     num--
     
      if($('.num1').val()<=0 ){
     alert('选取商品数量不能小于0');
    	return;
    }
     
    $('.num1').val(num);  
    
   
	
})

$('.span2').click(function(){
	
var num=parseInt($('.num1').val())

     num++
     
       if($('.num1').val()>=10 ){
     alert('选取商品数量不能大于10');
    	return;
    }
     
    $('.num1').val(num);  
	
})







	
})

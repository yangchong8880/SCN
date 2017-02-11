   $(function(){
	
	$('.all-buy-car-messages').html('');//赋值为空
		//获取cookie
		var goodsName = getCookie('goodsName');//名称
		var goodsAccount = getCookie('goodsAccount');//数量
		var goodsPrice = getCookie('goodsPrice');//价格
		var goodsColor = getCookie('goodsColor');//颜色
		var goodsSize = getCookie('goodsSize');//尺寸
		var goodsCode = getCookie('goodsCode');//编码
		var goodsCost = getCookie('goodsCost');//原价
		var goodsPicture = getCookie('goodsPicture');//图片
		
		var goodnamesArray = [];//存储从cookie读取的，转化为数组的商品名字
		var goodpricesArray = [];//存储从cookie读取的，转化为数组的商品价格
		var goodsaccountArray = [];//存储从cookie读取的，转化为数组的商品数量
		var goodscolorArray = [];//存储从cookie读取的，转化为数组的商品颜色
		var goodssizeArray = [];//存储从cookie读取的，转化为数组的商品尺寸
		var goodscodeArray = [];//存储从cookie读取的，转化为数组的商品编码
		var goodscostArray = [];//存储从cookie读取的，转化为数组的商品原价
		var goodspictureArray = [];//存储从cookie读取的，转化为数组的商品图片
		
		if(goodsName){//分割cookie的字符串
			goodnamesArray = goodsName.split('&');
			goodpricesArray = goodsPrice.split('&');
			goodsaccountArray = goodsAccount.split('&');
			goodscolorArray = goodsColor.split('&');
			goodssizeArray = goodsSize.split('&');
			goodscodeArray = goodsCode.split('&');
			goodscostArray = goodsCost.split('&');
			goodspictureArray = goodsPicture.split('&');
			
			
			console.log(goodsaccountArray)
			console.log(goodscolorArray)
		}
	       console.log(goodnamesArray)
	for(var i=0;i<goodnamesArray.length;i++){
			$('<ul class="buycar clearfix"><li><input type="checkbox" name="checkedbox" class="choose" value="choose" checked="checked"/></li><li><img src="'+ goodscolorArray[i] +'"/></li><li><p>'+ goodnamesArray[i] +'</p></li><li><p>'+ goodssizeArray[i] +'</p></li><li  class="ul-li-fifth"><p class="new-price">'+ goodpricesArray[i] +'</p><div class="change-favourable"><p class="clearfix"><input type="radio" name="" id="change_1" value="" /><label for="change_1">GOGOGOGO</label></p><p class="clearfix"><input type="radio" name="" id="change_2" value="" /><label for="change_2">buybuybuy</label></p></div></li><li><span class="minusBtn">-</span><input type="text" name="" class="put-total" id="" value="'+ goodsaccountArray[i] +'" /><span class="addBtn">+</span></li><li><p class="onegoodstatle"></p></li><li><span>移入收藏夹</span><span class="remove-data">删除</span></li></ul>').appendTo('.all-buy-car-messages');
		};
		
		
		//删除商品
		$('.remove-data').click(function(){			
			$(this).parent().parent().remove();
			removeCookie('goodsName');
			removeCookie('goodsAccount');
			removeCookie('goodsPrice');
			removeCookie('goodsColor');
			removeCookie('goodsSize');
			removeCookie('goodsCode');
			removeCookie('goodsCost');
			removeCookie('goodsPicture');
		});
		
		
		$('.minusBtn').click(function(){
			
			var value = parseInt($(this).next().val()) ;
			if(value > 1){
				$(this).next().val( value - 1);
			}else{
				alert('该数字至少为1');
			};
			//_goodsAccount();
			$('.account-price').html('¥' + _goodsAccount());//总价
			$('.total-price').html('¥' + _goodsAccount());//已满价
			$('.already-put').html(_goodsTotal());//所有商品已选择的总件数
			//单款商品总价
			var accout = parseInt($(this).next().val());
			var price  = parseInt($(this).parent().prev().find('.new-price').html().split('¥')[1]);
			$(this).parent().next().find('.onegoodstatle').html(accout * price);
		});
		
		
		$('.addBtn').click(function(){
			
			var value = parseInt($(this).prev().val());
			if(value < 10){
				$(this).prev().val( value + 1)
			}else{
				alert('不能购买超过10件');
			};
			$('.account-price').html('¥' + _goodsAccount());//总价
			$('.total-price').html('¥' + _goodsAccount());//已满价
			$('.already-put').html(_goodsTotal());//所有商品已选择的总件数
			//单款商品的总价
			var accout = parseInt($(this).prev().val());
			var price  = parseInt($(this).parent().prev().find('.new-price').html().split('¥')[1]);
			$(this).parent().next().find('.onegoodstatle').html(accout * price);
		});
		
		
		$('.put-total').keyup(function(){
			
			if($(this).val() <= 0 || $(this).val() > 10 || /\D/gi.test($(this).val())){
				alert('该数值必须是数字且大于0，此款商品最多只能购买10件');
				$(this).val( 1 );
			}
			$('.account-price').html('¥' + _goodsAccount());//总价
			$('.total-price').html('¥' + _goodsAccount());//已满价
			$('.already-put').html(_goodsTotal());//所有商品已选择的总件数
			//单款商品的总价
			var accout = parseInt($(this).val());
			var price  = parseInt($(this).parent().prev().find('.new-price').html().split('¥')[1]);
			$(this).parent().next().find('.onegoodstatle').html(accout * price);
		})
	
	
	  });
	

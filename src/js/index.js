
$(function(){
				var $main = $('.shufflingImg');
				var $pic = $main.find('.pic li');
				var $nav = $main.find('.shufflingNav ul');
                
				// 轮播数量
				var len = $pic.length;

				// 初始化索引值
				var index = 0;

				// 上一张的索引
				var lastIndex = 0;
				show();

				// 添加导航(小方块)
				for(var i=0;i<len;i++){
					var $li = $('<li/>');
					if(i==0) {
						$li.addClass('select');
					}
					$li.appendTo($nav);
				}

				//移动到小圆块切换图片
				$nav.on('mouseover','li',function(){
					index = $(this).index();
					show();
				});
				
				$nav.on('mouseout','li',function(){
					index = $(this).index();
//					hide();
				});

				var timer;
				$main.on('mouseenter',function(){
					clearInterval(timer);
				}).on('mouseleave',function(){
					timer = setInterval(function(){
						index++;
						show();
					},3000);
				}).trigger('mouseleave')

				.on('click','.next',function(){
					index++;
					show();
				}).on('click','.prev',function(){
					index--;
					show();
				});


				// 图片展示效果函数
				function show(){
					//清空上一张的样式
					
                     reset();
					if(index<0){
						index = len - 1;
					}else if(index > len - 1){
						index = 0;
					}
					// 显示隐藏背景图片
					$pic.hide().eq(index).show();
				

					// 小圆块高亮效果
					$nav.find('li').removeClass().eq(index).addClass('select');

					// 清除当没有显示的li下面的img1,img2的样式
					// $pic.eq(index).siblings('li').find('.img1,.img2').removeAttr('style');

					// 更新lastIndex
					lastIndex = index;
				}
                     
				function reset(){
					$pic.eq(lastIndex).find('li').removeAttr('style');//removeProp(attr)
				}
				
				
				var $banner = $('#wrap-main');
				var $img = $banner.find('.banner .banner-b ul li img')
				
										
						$img.hover(function(e) {
							$('.banner .banner-b ul li img').stop().animate({opacity : "0.3"},300);
							$(this).stop().animate({opacity : "1"},500);
						},function(){
							$('.banner .banner-b ul li img').stop().animate({opacity : "1"},300);
						}); 
				
				
				var $producta =$('#index-producta');
				
				var $li =$producta.find('.producta ul .second')
				
//				console.log('$li');
				$li.mouseover(function(){
				$(this).css("margin-left" ,0)
				
			});
				$li.mouseout(function(){
				$(this).css("margin-left" ,5)
			});
				
				
				var $productb =$('.productb');
				
				var $li =$productb.find('.productb-center')
				
				var $a =$productb.find('.productb-right  a')
				
//				console.log('$li');
				$li.mouseover(function(){
				$(this).css("margin-left" ,0)
				
			});
				$li.mouseout(function(){
				$(this).css("margin-left" ,5)
			});	
				
				$a.mouseover(function(){
				$(this).css("padding-left" ,5)
				
			});
				$a.mouseout(function(){
				$(this).css("padding-left" ,0)
			});		
				
			
			
			var $fot = $('#common-foot')
			var $foot =$fot.find('.foot')
			
			
			
//			$foot.load('li.html')
			
	});
	


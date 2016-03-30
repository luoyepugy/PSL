
$(function() {

	// 选择
	var index = 0;
	$('.j-select').click(function(e) {
		e.stopPropagation();
		$(this).find('ul').toggleClass('none').closest('.j-select').siblings().find('ul').addClass('none');
		index = $(this).index();
	});
	$('body').not('.j-select').click(function() {
		$('form div').eq(index).find('ul').addClass('none');
	});
	$('.j-select li').click(function() {
		$(this).parents('.j-select').find('.j-selectValue').text($(this).text());
		$(this).parents('.j-select').find('.j-selectInput').val($(this).text());	
	});

	// 表单提交
	$('.j-submit').click(function() {
		var flag = true;
		var phone = $('.j-telephone').val();
		var email = $('.j-email').val();

		$(this).closest('form').find('.j-input').each(function() {
			if($(this).val().trim() == '') {
				$(this).css('border-color','red');
				flag = false;
				return;
			}
			// console.log($(this).val());	
		});
		if(!RegExpHelper.isMobile(phone)) {
			$('.j-telephone').css('border-color','red');
			flag = false;
		} else {
			$('.j-telephone').css('border-color','#dcdcdc');
		}
		if(!RegExpHelper.isEmail(email)) {
			$('.j-email').css('border-color','red');
			flag = false;
		} else {
			$('.j-email').css('border-color','#dcdcdc');
		}
		if(flag) {
			$(this).closest('form').submit();
		}
	});

});

$(function() {

	// 选择
	$('.j-select').click(function() {
		$(this).find('ul').toggleClass('none');
	});
	$('.j-select li').click(function() {
		$(this).parents('.j-select').find('.j-selectValue').text($(this).text());
		$(this).parents('.j-select').find('.j-selectInput').val($(this).text());
	});

	// 表单提交
	$('.j-submit').click(function() {
		var flag = true,
			phone_regexp = /^((145|147)|(15[^4])|(17[6-8])|((13|18)[0-9]))\d{8}$/;
			// email_regexp = 

		$(this).closest('form').find('.j-input').each(function() {
			var phone = $('.j-telephone').val();
			if($(this).val().trim() == '') {
				$(this).css('border-color','red');
				flag = false;
			}
			if(phone_regexp.test(phone)) {
				$(this).css('border-color','red');
				flag = false;
			}
		});
		if(flag) {
			$(this).closest('form').submit();
		}
	});

});
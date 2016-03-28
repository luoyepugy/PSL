
$(function() {

	// 选择
	$('.j-select').click(function() {
		$(this).find('ul').toggleClass('none');
	});
	$('.j-select li').click(function() {
		$(this).parents('.j-select').find('.j-selectValue').text($(this).text());
		$(this).parents('.j-select').find('.j-selectInput').val($(this).text());
	});

});
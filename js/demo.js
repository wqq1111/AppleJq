$(function(){

	//小屏下拉
	let btn=$(".list");
	let more=$(".head-more");
	let line1=$(".line1");
	let line2=$(".line2");
	let icons=$(".icon-s");

	btn.click(function(){
		more.slideToggle("slow");
		line1.toggleClass("active");
		line2.toggleClass("active1");
		icons.toggleClass("too");
	})

	//小屏底部
	let add=$(".add");
	let down=$(".content-down");
	let both=$(".footer2 ul li");
	both.click(function(){
		let i=$(this).index();
		down.eq(i).slideToggle("slow");

		add.eq(i).toggleClass('hot');
	});



	


})
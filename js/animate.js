function runAnimation() {
	var i;
	for (i = 0; i < 11; i++) {
		animateDiv(i);
	}
}

function animateDiv(num){
	var spelled;
	switch (num) {
		case 1: spelled = "one"; break;
		case 2: spelled = "two"; break;
		case 3: spelled = "three"; break;
		case 4: spelled = "four"; break;
		case 5: spelled = "five"; break;
		case 6: spelled = "six"; break;
		case 7: spelled = "seven"; break;
		case 8: spelled = "eight"; break;
		case 9: spelled = "nine"; break;
		case 10: spelled = "ten"; break;

	}
	var newq = makeNewPosition();
	$('.'+spelled).animate({ top: newq[0], left: newq[1] }, function(){
		animateDiv(num);
	});
	$('.'+spelled).click(function() {
		$(this).stop();
	});
};

function makeNewPosition(){
	var h = $(window).height() - 50;
	var w = $(window).width() - 50;
	var nh = Math.floor(Math.random() * h);
	var nw = Math.floor(Math.random() * w);
	return [nh,nw];
}

$(document).ready(function(){
	runAnimation();
	$('.restart, .toggle-level').click(function() {
		$('.pizza').removeClass('gotcha');
		$('.pizza-alert').hide();
		$('#counter').html("-1");
		runAnimation();
	});
	
	$('.pizza').click(function() {
		$(this).addClass('gotcha');
	});
	
	$('body').click(function() {
		$('#counter').html(function(i, val) { return val*1+1 });
	});

	$('.fa-question-circle').hover(function() {
		$('.about').toggle();
	});

	$('.toggle-level').click(function() {
		$('.pizza').toggleClass('small');
		$(this).toggleClass('toggle-bg');
		$('.toggle-button').toggleClass('toggle-active');
		$('.easy').toggleClass('easy-active');
		$('.hard').toggleClass('hard-active');
		$('#counter').html("-1");
	});
	
	$('.pizza').promise().done(function() {
		$('.pizza-alert').fadeIn(); 
	});

	$('.overlay').click(function() {
		$(this).fadeOut();
		$('.popup-modal').fadeOut();
	});

	$('.close-popup-modal').click(function() {
		$('.overlay').fadeOut();
		$('.popup-modal').fadeOut();
	});

	$('.share-trigger').click(function() {
		$('.share').fadeToggle();
	});
});
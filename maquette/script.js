var dimension = DetectDimension();

$(document).ready(function(){
	redim();
});


function redim() {
	dimension = DetectDimension();
	Cufon.replace('div.header>div.menu>ul>li>a');
	Cufon.replace('div.page>div.contentLeft>div.bloc>div.titre>h1');
	$('div.dim').html(dimension[0]+'*'+dimension[1]);
};

/* DETECTION DE LA DIMENSION DE LA FENETRE DU NAVIGATEUR */
function DetectDimension() {
	if($.browser.msie){
	dim_win_width = $(window).width();
	dim_win_height = $(window).height();
	} else {
	dim_win_width = window.innerWidth;
	dim_win_height = window.innerHeight;;
	}
	dim_win = [dim_win_width,dim_win_height];
	return dim_win;
}
/* Recalcul de la dimension en fonction du resize navigateur */
$(window).resize(function() {
	dimension = DetectDimension();
	redim();
});
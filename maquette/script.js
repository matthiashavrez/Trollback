var dimension = DetectDimension();

$(document).ready(function(){
	// Quand on clique sur un élément liste du bloc news
	$('div.page>div.contentLeft>div.bloc_news>div.texte>div.listeNews>ul>li>h2').live('click',function() {
		var classe = $(this).attr("class");
		// On change la classe active du li
		$('div.page>div.contentLeft>div.bloc_news>div.texte>div.listeNews>ul>li').removeClass('active');
		$(this).parent().addClass('active');

		// On fadeOut le lecteur courant
		$('div.page>div.contentLeft>div.bloc_news>div.texte>div.lecteurNews.active').fadeOut(500,function() {
			$(this).removeClass('active');
			$('div.page>div.contentLeft>div.bloc_news>div.texte>div.lecteurNews.'+classe).fadeIn(500,function() { $(this).addClass('active'); })
		});
	});

	// Quand on clique sur un élément liste du bloc event
	$('div.page>div.contentLeft>div.bloc_events>div.texte>div.listeEvents>ul>li>h2').live('click',function() {
		var classe = $(this).attr("class");
		// On change la classe active du li
		$('div.page>div.contentLeft>div.bloc_events>div.texte>div.listeEvents>ul>li').removeClass('active');
		$(this).parent().addClass('active');

		// On fadeOut le lecteur courant
		$('div.page>div.contentLeft>div.bloc_events>div.texte>div.lecteurEvents.active').fadeOut(500,function() {
			$(this).removeClass('active');
			$('div.page>div.contentLeft>div.bloc_events>div.texte>div.lecteurEvents.'+classe).fadeIn(500,function() { $(this).addClass('active'); })
		});
	});

	// Quand on clique sur un élément liste du bloc event
	$('div.page>div.contentRight>div.colonneSelection>div.item').live('click',function() {
		var classe = $(this).attr("id");
		// On change la classe active du li
		$('div.page>div.contentRight>div.colonneSelection>div.item').removeClass('active');
		$(this).addClass('active');

		// On fadeOut le lecteur courant
		$('div.page>div.contentRight>div.colonneProjet.active').fadeOut(500,function() {
			$(this).removeClass('active');
			$('div.page>div.contentRight>div.colonneProjet.'+classe).css({'height':(dimension[1]-100)+'px'}).fadeIn(500,function() { $(this).addClass('active'); })
		});
	});

	$('div.page>div.contentRight>div.colonneProjet.active').css('height',(dimension[1]-100)+'px');

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
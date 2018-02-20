
    $( document ).ready(function() {
	$("#students").circliful({
                animationStep: 4.5,
                foregroundBorderWidth: 7,
                backgroundBorderWidth: 0,
                percent: 80,
                textAdditionalCss : "font-family : abel",
                percentageY : 110,
                animateInView : true,
                text : "Etudiants par année",
                textBelow : true,
                textStyle : "font-family : abel; font-size : 12px;",
                foregroundColor:"#45B8E5",
           });
   	});

   	$( document ).ready(function() {
	$("#passing").circliful({
                animationStep: 4.5,
                foregroundBorderWidth: 7,
                backgroundBorderWidth: 0,
                foregroundColor: "#C71D82",
                percent: 95,
                percentageY : 110,
                textAdditionalCss : "font-family : abel",
                animateInView : true,
                text : "Taux de réussite chaque année",
                textBelow : true,
                textStyle : "font-family : abel; font-size : 12px;",
           });
   	});


   	$( document ).ready(function() {
	$("#working").circliful({
                animationStep: 4.5,
                foregroundBorderWidth: 7,
                backgroundBorderWidth: 0,
                foregroundColor: "#512DA8",
                percent: 85,
                percentageY : 110,
                textAdditionalCss : "font-family : abel",
                animateInView : true,
                text : "Taux d'embauche chaque année",
                textBelow : true,
                textStyle : "font-family : abel; font-size : 12px;",
           });
   	});


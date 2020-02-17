const standardBtn = document.getElementById('standardBtn');

var standard;
var advanced;
var expert;
var china;
var moyenorient;
var music;
var lafrance;
var type = 0;
var whatDidIPlay = 0;
$(document).ready(function() {
  $("#choice1_input").click( function(e) {
  	whatDidIPlay = 1;
  });
  $("#choice2_input").click( function(e) {
  	whatDidIPlay = 2;
  });
  $("#choice3_input").click( function(e) {
  	whatDidIPlay = 3;
  });
    $.when(
      $.get("http://localhost:8080/data",function(data,status) {
        standard = data.standard;
        advanced = data.advanced;
        expert = data.expert;
        china = data.china;
        moyenorient = data.moyenorient;
        music = data.music;
        lafrance = data.lafrance;
      }
    )
    .done(function() {
    }));
});

standardBtn.addEventListener('click', function(e) {
  $(document).ready(function () {
  	type = 0;
    $("#choice1").attr("src", standard.pierre.url);
    $("#choice1_text").text(standard.pierre.name);
    $("#choice2").attr("src", standard.feuille.url);
    $("#choice2_text").text(standard.feuille.name);
    $("#choice3").attr("src", standard.ciseaux.url);
    $("#choice3_text").text(standard.ciseaux.name);
    $("#yourPlay").text("Pas encore voté");
    $("#theOppopentPlay").text("Pas encore voté");
    uncheckButtonRadio();
    console.log("toto");
  });
});

const dicatorsBtn = document.getElementById('dicatorsBtn');
dicatorsBtn.addEventListener('click', function(e) {
  $(document).ready(function () {
  	type = 1;
    $("#choice1").attr("src", advanced.kim_jong_un.url);
    $("#choice2").attr("src", advanced.donald_trump.url);
    $("#choice3").attr("src", advanced.poutine.url);
    $("#choice1_text").text(standard.pierre.name);
    $("#choice2_text").text(standard.feuille.name);
    $("#choice3_text").text(standard.ciseaux.name);
    $("#yourPlay").text("Pas encore voté");
    $("#theOppopentPlay").text("Pas encore voté");
    uncheckButtonRadio();
  });
});

const chinaBtn = document.getElementById('chinaBtn');
chinaBtn.addEventListener('click', function(e) {
  $(document).ready(function () {
  	type = 2;
    $("#choice1").attr("src", china.coronavirus.url);
    $("#choice2").attr("src", china.liberte.url);
    $("#choice3").attr("src", china.mondialisation.url);
    $("#choice1_text").text(china.coronavirus.name);
    $("#choice2_text").text(china.liberte.name);
    $("#choice3_text").text(china.mondialisation.name);
    $("#yourPlay").text("Pas encore voté");
    $("#theOppopentPlay").text("Pas encore voté");
    uncheckButtonRadio();
  });
});

const gayBtn = document.getElementById('gayBtn');
gayBtn.addEventListener('click', function(e) {
  $(document).ready(function () {
  	type = 3;
    $("#choice1").attr("src", lafrance.lgbt.url);
    $("#choice2").attr("src", lafrance.manif.url);
    $("#choice3").attr("src", lafrance.loi49_3.url);
    $("#choice1_text").text(lafrance.lgbt.name);
    $("#choice2_text").text(lafrance.manif.name);
    $("#choice3_text").text(lafrance.loi49_3.name);
    $("#yourPlay").text("Pas encore voté");
    $("#theOppopentPlay").text("Pas encore voté");
    uncheckButtonRadio();
  });
});

const frenchBtn = document.getElementById('frenchBtn');
frenchBtn.addEventListener('click', function(e) {
  $(document).ready(function () {
  	type = 4;
    $("#choice1").attr("src", expert.chirac.url);
    $("#choice2").attr("src", expert.macron.url);
    $("#choice3").attr("src", expert.hollande.url);
    $("#choice1_text").text(expert.chirac.name);
    $("#choice2_text").text(expert.macron.name);
    $("#choice3_text").text(expert.hollande.name);
    $("#yourPlay").text("Pas encore voté");
    $("#theOppopentPlay").text("Pas encore voté");
    uncheckButtonRadio();
  });
});

const middleBtn = document.getElementById('middleBtn');
middleBtn.addEventListener('click', function(e) {
  $(document).ready(function () {
  	type = 5;
    $("#choice1").attr("src", moyenorient.israel.url);
    $("#choice2").attr("src", moyenorient.palestine.url);
    $("#choice3").attr("src", moyenorient.irak.url);
    $("#choice1_text").text(moyenorient.israel.name);
    $("#choice2_text").text(moyenorient.palestine.name);
    $("#choice3_text").text(moyenorient.irak.name);
    $("#yourPlay").text("Pas encore voté");
    $("#theOppopentPlay").text("Pas encore voté");
    uncheckButtonRadio();
  });
});

const musicBtn = document.getElementById('musicBtn');
musicBtn.addEventListener('click', function(e) {
  $(document).ready(function () {
  	type = 6;
    $("#choice1").attr("src", music.trance.url);
    $("#choice2").attr("src", music.hardtek.url);
    $("#choice3").attr("src", music.frenchcore.url);
    $("#choice1_text").text(music.trance.name);
    $("#choice2_text").text(music.hardtek.name);
    $("#choice3_text").text(music.frenchcore.name);
    $("#yourPlay").text("Pas encore voté");
    $("#theOppopentPlay").text("Pas encore voté");
    uncheckButtonRadio();
  });
});

function uncheckButtonRadio() {
	whatDidIPlay = 0;
	$(document).ready(function () {
		$("#choice3_input").prop("checked", false);
		$("#choice2_input").prop("checked", false);
		$("#choice1_input").prop("checked", false);
	});
}


function makeThePlay(indice) {
	switch (type) {
		case 0 :
		if (indice == 1) {
			return standard.pierre.url;
		} else if (indice ==2) {
			return standard.feuille.url;
		} else {
			return standard.ciseaux.url;
		}
		break;
		case 1 :
		if (indice == 1) {
			return advanced.kim_jong_un.url;
		} else if (indice ==2) {
			return advanced.donald_trump.url;
		} else {
			return advanced.poutine.url;
		}
		break;
		case 2 :
		if (indice == 1) {
			return china.coronavirus.url;
		} else if (indice ==2) {
			return china.liberte.url;
		} else {
			return china.mondialisation.url;
		}
		break;
		case 3 :
		if (indice == 1) {
			return lafrance.lgbt.url;
		} else if (indice ==2) {
			return lafrance.manif.url;
		} else {
			return lafrance.loi49_3.url;
		}
		break;
		case 4 :
		if (indice == 1) {
			return expert.chirac.url;
		} else if (indice ==2) {
			return expert.macron.url;
		} else {
			return expert.hollande.url;
		}
		break;
		case 5 :
		if (indice == 1) {
			return moyenorient.israel.url;
		} else if (indice ==2) {
			return moyenorient.palestine.url;
		} else {
			return moyenorient.irak.url;
		}
		break;
		case 6 :
		if (indice == 1) {
			return music.trance.url;
		} else if (indice ==2) {
			return music.hardtek.url;
		} else {
			return music.frenchcore.url;
		}
		break;
	}
}

var isPlayable = true;

const confirmBtn = document.getElementById('confirmBtn');
confirmBtn.addEventListener('click', function(e) {
	

	if (isPlayable) {
		isPlayable = false;
		setTimeout(changeImage3,0);
		setTimeout(changeImage2,1000);
		setTimeout(changeImage1,2000);
		setTimeout(resetImage,3000);
	}
	

	function changeImage3() {
	  	$(document).ready(function () {
	  		$("#timerImg").attr("src", "./images/3.png");
  		});
	}
	function changeImage2() {
	  	$(document).ready(function () {
	  		$("#timerImg").attr("src", "./images/2.png");
  		});
	}
	function changeImage1() {
	  	$(document).ready(function () {
	  		$("#timerImg").attr("src", "./images/1.png");
  		});
	}
	function resetImage() {
		isPlayable = true;
	  	$(document).ready(function () {
	  		var rand = Math.floor((Math.random() * 3) + 1);
	  		$("#theOppopentPlay").attr("src",makeThePlay(rand));
	  		$("#yourPlay").attr("src",makeThePlay(whatDidIPlay));
	  		
	  		$("#timerImg").attr("src","");
	  		uncheckButtonRadio();
  		});
  		
	}
});


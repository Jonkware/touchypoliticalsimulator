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

var yourPlayJson;
var ennemyPlayJson;
function makeThePlay(indice,isThatEnemy) {
	if (isThatEnemy) {
		switch (type) {
		case 0 :
		if (indice == 1) {
			ennemyPlayJson = standard.pierre;
			return standard.pierre.url;
		} else if (indice ==2) {
			ennemyPlayJson = standard.feuille;
			return standard.feuille.url;
		} else {
			ennemyPlayJson = standard.ciseaux;
			return standard.ciseaux.url;
		}
		break;
		case 1 :
		if (indice == 1) {
			ennemyPlayJson = advanced.kim_jong_un;
			return advanced.kim_jong_un.url;
		} else if (indice ==2) {
			ennemyPlayJson = advanced.donald_trump;
			return advanced.donald_trump.url;
		} else {
			ennemyPlayJson = advanced.poutine;
			return advanced.poutine.url;
		}
		break;
		case 2 :
		if (indice == 1) {
			ennemyPlayJson = china.coronavirus;
			return china.coronavirus.url;
		} else if (indice ==2) {
			ennemyPlayJson = china.liberte;
			return china.liberte.url;
		} else {
			ennemyPlayJson = china.mondialisation;
			return china.mondialisation.url;
		}
		break;
		case 3 :
		if (indice == 1) {
			ennemyPlayJson = lafrance.lgbt;
			return lafrance.lgbt.url;
		} else if (indice ==2) {
			ennemyPlayJson = lafrance.manif;
			return lafrance.manif.url;
		} else {
			ennemyPlayJson = lafrance.loi49_3;
			return lafrance.loi49_3.url;
		}
		break;
		case 4 :
		if (indice == 1) {
			ennemyPlayJson = expert.chirac;
			return expert.chirac.url;
		} else if (indice ==2) {
			ennemyPlayJson = expert.macron;
			return expert.macron.url;
		} else {
			ennemyPlayJson = expert.hollande;
			return expert.hollande.url;
		}
		break;
		case 5 :
		if (indice == 1) {
			ennemyPlayJson = moyenorient.israel;
			return moyenorient.israel.url;
		} else if (indice ==2) {
			ennemyPlayJson = moyenorient.palestine;
			return moyenorient.palestine.url;
		} else {
			ennemyPlayJson = moyenorient.irak;
			return moyenorient.irak.url;
		}
		break;
		case 6 :
		if (indice == 1) {
			yourPlayJson = music.trance;
			return music.trance.url;
		} else if (indice ==2) {
			yourPlayJson = music.hardtek;
			return music.hardtek.url;
		} else {
			yourPlayJson = music.frenchcore;
			return music.frenchcore.url;
		}
		break;
		}
	} else {
		switch (type) {
		case 0 :
		if (indice == 1) {
			yourPlayJson = standard.pierre;
			return standard.pierre.url;
		} else if (indice ==2) {
			yourPlayJson = standard.feuille;
			return standard.feuille.url;
		} else {
			yourPlayJson = standard.ciseaux;
			return standard.ciseaux.url;
		}
		break;
		case 1 :
		if (indice == 1) {
			yourPlayJson = advanced.kim_jong_un;
			return advanced.kim_jong_un.url;
		} else if (indice ==2) {
			yourPlayJson = advanced.donald_trump;
			return advanced.donald_trump.url;
		} else {
			yourPlayJson = advanced.poutine;
			return advanced.poutine.url;
		}
		break;
		case 2 :
		if (indice == 1) {
			yourPlayJson = china.coronavirus;
			return china.coronavirus.url;
		} else if (indice ==2) {
			yourPlayJson = china.liberte;
			return china.liberte.url;
		} else {
			yourPlayJson = china.mondialisation;
			return china.mondialisation.url;
		}
		break;
		case 3 :
		if (indice == 1) {
			yourPlayJson = lafrance.lgbt;
			return lafrance.lgbt.url;
		} else if (indice ==2) {
			yourPlayJson = lafrance.manif;
			return lafrance.manif.url;
		} else {
			yourPlayJson = lafrance.loi49_3;
			return lafrance.loi49_3.url;
		}
		break;
		case 4 :
		if (indice == 1) {
			yourPlayJson = expert.chirac;
			return expert.chirac.url;
		} else if (indice ==2) {
			yourPlayJson = expert.macron;
			return expert.macron.url;
		} else {
			yourPlayJson = expert.hollande;
			return expert.hollande.url;
		}
		break;
		case 5 :
		if (indice == 1) {
			yourPlayJson = moyenorient.israel;
			return moyenorient.israel.url;
		} else if (indice ==2) {
			yourPlayJson = moyenorient.palestine;
			return moyenorient.palestine.url;
		} else {
			yourPlayJson = moyenorient.irak;
			return moyenorient.irak.url;
		}
		break;
		case 6 :
		if (indice == 1) {
			yourPlayJson = music.trance;
			return music.trance.url;
		} else if (indice ==2) {
			yourPlayJson = music.hardtek;
			return music.hardtek.url;
		} else {
			yourPlayJson = music.frenchcore;
			return music.frenchcore.url;
		}
		break;
		}
	}
	
}

function whoWinThisRound() {
	if (yourPlayJson.checkName == ennemyPlayJson.counter) {
		return 1;
	} else if (yourPlayJson.counter == ennemyPlayJson.checkName) {
		return 0;
	} else {
		return -1;
	}
}


var isPlayable = true;

const confirmBtn = document.getElementById('confirmBtn');
confirmBtn.addEventListener('click', function(e) {
	

	if (isPlayable) {
		$("#resultText").text("");
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
	  		$("#theOppopentPlay").attr("src",makeThePlay(rand,true));
	  		$("#yourPlay").attr("src",makeThePlay(whatDidIPlay,false));
	  		$("#timerImg").attr("src","");
	  		var result = whoWinThisRound();
	  		var yourCurrentScore = parseInt($("#yourScore").text(),10);
  			console.log(result);
  			var enemyCurrentScore = parseInt($("#enemyScore").text(),10);
	  		if (result > 0) {
	  			yourCurrentScore++;
	  			resultText
	  			$("#resultText").text("You Win !");
	  			$("#yourScore").text(yourCurrentScore);
	  		} else if (result == 0) {
	  			enemyCurrentScore++;
	  			$("#resultText").text("You Lose !");
	  			$("#enemyScore").text(enemyCurrentScore);
	  		}
	  		uncheckButtonRadio();
  		});
  		
	}
});


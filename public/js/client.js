const standardBtn = document.getElementById('standardBtn');

var standard;
var advanced;
var expert;
var china;
var moyenorient;
var music;
var lafrance;

$(document).ready(function() {
  $("#choice1_input").click( function(e) {
    console.log("First");
  });
  $("#choice2_input").click( function(e) {
    console.log("Second");
  });
  $("#choice3_input").click( function(e) {
    console.log("Third");
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
    $("#choice1").attr("src", standard.pierre.url);
    $("#choice1_text").text(standard.pierre.name);
    $("#choice2").attr("src", standard.feuille.url);
    $("#choice2_text").text(standard.feuille.name);
    $("#choice3").attr("src", standard.ciseaux.url);
    $("#choice3_text").text(standard.ciseaux.name);
    $("#yourPlay").text("Pas encore voté");
    $("#theOppopentPlay").text("Pas encore voté");
  });
});

const dicatorsBtn = document.getElementById('dicatorsBtn');
dicatorsBtn.addEventListener('click', function(e) {
  $(document).ready(function () {
    $("#choice1").attr("src", advanced.kim_jong_un.url);
    $("#choice2").attr("src", advanced.donald_trump.url);
    $("#choice3").attr("src", advanced.poutine.url);
    $("#choice1_text").text(standard.pierre.name);
    $("#choice2_text").text(standard.feuille.name);
    $("#choice3_text").text(standard.ciseaux.name);
    $("#yourPlay").text("Pas encore voté");
    $("#theOppopentPlay").text("Pas encore voté");
  });
});

const chinaBtn = document.getElementById('chinaBtn');
chinaBtn.addEventListener('click', function(e) {
  $(document).ready(function () {
    $("#choice1").attr("src", china.coronavirus.url);
    $("#choice2").attr("src", china.liberte.url);
    $("#choice3").attr("src", china.mondialisation.url);
    $("#choice1_text").text(china.coronavirus.name);
    $("#choice2_text").text(china.liberte.name);
    $("#choice3_text").text(china.mondialisation.name);
    $("#yourPlay").text("Pas encore voté");
    $("#theOppopentPlay").text("Pas encore voté");
  });
});

const gayBtn = document.getElementById('gayBtn');
gayBtn.addEventListener('click', function(e) {
  $(document).ready(function () {
    $("#choice1").attr("src", lafrance.lgbt.url);
    $("#choice2").attr("src", lafrance.manif.url);
    $("#choice3").attr("src", lafrance.loi49_3.url);
    $("#choice1_text").text(lafrance.lgbt.name);
    $("#choice2_text").text(lafrance.manif.name);
    $("#choice3_text").text(lafrance.loi49_3.name);
    $("#yourPlay").text("Pas encore voté");
    $("#theOppopentPlay").text("Pas encore voté");
  });
});

const frenchBtn = document.getElementById('frenchBtn');
frenchBtn.addEventListener('click', function(e) {
  $(document).ready(function () {
    $("#choice1").attr("src", expert.chirac.url);
    $("#choice2").attr("src", expert.macron.url);
    $("#choice3").attr("src", expert.hollande.url);
    $("#choice1_text").text(expert.chirac.name);
    $("#choice2_text").text(expert.macron.name);
    $("#choice3_text").text(expert.hollande.name);
    $("#yourPlay").text("Pas encore voté");
    $("#theOppopentPlay").text("Pas encore voté");
  });
});

const middleBtn = document.getElementById('middleBtn');
middleBtn.addEventListener('click', function(e) {
  $(document).ready(function () {
    $("#choice1").attr("src", moyenorient.israel.url);
    $("#choice2").attr("src", moyenorient.palestine.url);
    $("#choice3").attr("src", moyenorient.irak.url);
    $("#choice1_text").text(moyenorient.israel.name);
    $("#choice2_text").text(moyenorient.palestine.name);
    $("#choice3_text").text(moyenorient.irak.name);
    $("#yourPlay").text("Pas encore voté");
    $("#theOppopentPlay").text("Pas encore voté");
  });
});

const musicBtn = document.getElementById('musicBtn');
musicBtn.addEventListener('click', function(e) {
  $(document).ready(function () {
    $("#choice1").attr("src", music.trance.url);
    $("#choice2").attr("src", music.hardtek.url);
    $("#choice3").attr("src", music.frenchcore.url);
    $("#choice1_text").text(music.trance.name);
    $("#choice2_text").text(music.hardtek.name);
    $("#choice3_text").text(music.frenchcore.name);
    $("#yourPlay").text("Pas encore voté");
    $("#theOppopentPlay").text("Pas encore voté");
  });
});


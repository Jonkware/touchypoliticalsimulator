const standardBtn = document.getElementById('standardBtn');
var standard;
$(document).ready(function() {
	$.when(
		$(document).get("http://localhost:8080/data",function(data,status) {
        standard = standard;
        console.log("toto");
      },'json'));
});

console.log(standard);

standardBtn.addEventListener('click', function(e) {
  $(document).ready(function () {
            $("#choice1").text();
            $("#choice2").text("toto");
            $("#choice3").text("toto");
            $("#yourPlay").text("toto");
            $("#theOppopentPlay").text("toto");
        });
});

const dicatorsBtn = document.getElementById('dicatorsBtn');
dicatorsBtn.addEventListener('click', function(e) {
  console.log('button was clicked');
});

const chinaBtn = document.getElementById('chinaBtn');
chinaBtn.addEventListener('click', function(e) {
  console.log('button was clicked');
});

const gayBtn = document.getElementById('gayBtn');
gayBtn.addEventListener('click', function(e) {
  console.log('button was clicked');
});

const frenchBtn = document.getElementById('frenchBtn');
frenchBtn.addEventListener('click', function(e) {
  console.log('button was clicked');
});

const middleBtn = document.getElementById('middleBtn');
middleBtn.addEventListener('click', function(e) {
  console.log('button was clicked');
});
var nedvelden = ["Naam:","Adres:","Woonplaats:","Postcode:","Geboortedatum:","Nationaliteit:","Beroep:","Opmerkingen:"];
var engvelden = ["Name:","Address:","Residence:","Postcode:","Date of Birth:","Nationality:","Work:","Comments:"];
//De formule voor de leefttijdsberekening
function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
$(document).ready(function(){
  $("#nederlands").click(function(){
    $("#kiestaal").fadeOut("slow");
    $("#ned").fadeIn("slow");
    $("td.nedtext").each(function(i,ind){
      $(`#${ind.id}`).text(nedvelden[i]);
    });
  });
  $("#engels").click(function(){
    $("#kiestaal").fadeOut("slow");
    $("#eng").fadeIn("slow");
    $("td.engtext").each(function(i,ind){
      $(`#${ind.id}`).text(engvelden[i]);
    });
  });
  $(".male").click(function(){
    $("body").css("background-color","lightgreen");
    $("input[type='text']").css("background-color","green");
    $("input[type='date']").css("background-color","green");
    $("textarea").css("background-color","LightGreen");
  });
  $(".female").click(function(){
    $("body").css("background-color","pink");
    $("input[type='text']").css("background-color","hotpink");
    $("input[type='date']").css("background-color","hotpink");
    $("textarea").css("background-color","hotpink");
  });
  $("#nedbutton").click(function(){
    var name = $("#name").val();
    var adres = $("#address").val();
    var plaats = $("#place").val();
    var postcode = $("#post").val();
    var geboortedatum = $("#date").val();
    var nationaliteit = $("#nation").val();
    var beroep = $("#beroep").val();
    if(!/^\D*$/.test(name)){
      alert("Naam is niet correct");
    }
    if(!/^([A-Z][a-z]+\s)?[A-Z][A-z]*\s[0-9]*[a-z]?$/.test(adres)){
      alert("Adres is niet correct");
    }
    if(!/^[a-zA-z]*$/.test(plaats)){
      alert("Plaats is niet correct");
    }
    if (!/^[0-9]{4}\s(?!sa | sd | ss)[a-zA-Z]{2}$/.test(postcode)){
      alert("Postcode is niet correct");
    }
    if(/^\d{4}-\d{2}-\d{2}$/.test(geboortedatum)){
      let age = getAge(geboortedatum);
      $("#oud").text("Je bent " + (age) + " jaar oud");
      $("#oud").fadeIn("slow");
    }
    if(!/^\D*$/.test(nationaliteit)){
      alert("Nationaliteit is niet correct");
    }
    if(!/^\D*$/.test(beroep)){
      alert("Beroep is niet correct");
    }
  });
  $("#engbutton").click(function(){
    var engname = $("#engname").val();
    var engadres = $("#engaddress").val();
    var engplaats = $("#engplace").val();
    var engpostcode = $("#engpost").val();
    var enggeboortedatum = $("#engdate").val();
    var engnationaliteit = $("#engnation").val();
    var engberoep = $("#engberoep").val();
    if(!/^\D*$/.test(engname)){
      alert("Name is incorrect");
    }
    if(!/^[a-zA-Z$]*\s[1-9]*$/.test(engadres)){
      alert("Address is incorrect");
    }
    if(!/^[a-zA-z]*$/.test(engplaats)){
      alert("Residence is incorrect");
    }
    if(!/^[0-9]{4}\s[a-zA-Z]{2}$/.test(engpostcode)){
      alert("Postcode is incorrect");
    }
    if(/^\d{4}-\d{2}-\d{2}$/.test(enggeboortedatum)){
      let age = getAge(enggeboortedatum);
      $("#engoud").text("Je word " + (age+=1) + " jaar oud");
      $("#engoud").fadeIn("slow");
    }else{
      alert("Date Of Birth is incorrect");
    }
    if(!/^\D*$/.test(engnationaliteit)){
      alert("Nationality is incorrect");
    }
    if(!/^\D*$/.test(beroep)){
      alert("Work is incorrect");
    }
  });
});

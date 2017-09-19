
import {Doctor} from "./../js/doctor.js";

$(document).ready(function() {

  function display(doctors) {
    if(doctors.length == 0){
      $("#result").text("Sorry, no doctors match your search criteria");
    }else{
      let answer = "";
      doctors.forEach(function(doctor) {
        if(doctor.newPatient === true) {
          answer = "yes";
        } else {
          answer = "no";
        }
        $("#result").append("<li>" + "<strong>"+doctor.name+"</strong>" + "<br>" + doctor.street + "<br>" + doctor.city +  "<br>" + doctor.state + "<br>" + doctor.zip +  "<br>" + doctor.phone + "<br>" + "accepts new patients:" + " " + answer + "<br>" + "</li>");
      });
      }
  }

  function displayDocByName(docNames) {
    if(docNames.length == 0){
      $("#output").text("Sorry, the doctor you're looking for is not in our database");
    }else{
      let answer = "";
      docNames.forEach(function(thisDoc) {
        if(thisDoc.newPatient === true) {
          answer = "yes";
        } else {
          answer = "no";
        }
        $("#output").append("<div class=panel-panel>" +  "<img src="+ thisDoc.photo + "</>"+ "</br>"+ "<div class='panel-heading'>" + thisDoc.name  + "</div>" + "<br>" + "<div class='panel-body'>" + "Address: " + thisDoc.street + ", "+ thisDoc.city + ", " + thisDoc.state + " " + thisDoc.zip + "<br>" + "Phone Number: " + thisDoc.phone + "<br>" + "Accepts New Patients: " + answer + "</div>" + "</div>")
      });
    }
  }


  $("#med-form").submit(function(e) {
    e.preventDefault();
    let medIssue = $("#problem").val();
    let doctors = Doctor.findDoctors(medIssue, display);
    $("#result").empty();
  });

  $("#name-form").submit(function(e) {
    e.preventDefault();
    let name = $("#name").val();
    let docNames = Doctor.findDocByName(name, displayDocByName);
    $("#output").empty();
  });
});

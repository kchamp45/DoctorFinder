var apiKey = require('./../.env').apiKey;

import {Doctor} from "./../js/doctor.js";

$(document).ready(function() {

  function display(doctors) {
    if(doctors.length == 0){
      $("#result").text("Sorry, no doctors match your search criteria");
    }else{
      doctors.forEach(function(doctor) {

        $("#result").append("<li>" + doctor.name + "</li>");
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
        $("#output").append(thisDoc.name + "<br>" + thisDoc.street + "<br>" + thisDoc.city +  "<br>" + thisDoc.state + "<br>" + thisDoc.zip +  "<br>" + thisDoc.phone + "<br>" + "accepts new patients:" + " " + answer + "<br>");
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

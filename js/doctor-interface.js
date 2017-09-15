var apiKey = require('./../.env').apiKey;

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
        $("#result").append(doctor.name + "<br>" + doctor.street + "<br>" + doctor.city +  "<br>" + doctor.state + "<br>" + doctor.zip +  "<br>" + doctor.phone + "<br>" + "accepts new patients:" + " " + answer);
      })
    }
  }

  function displayDocByName(docNames) {
    if(docNames.length == 0){
      $("#output").text("Sorry, no doctors match your search criteria");
    }else{
      let answer = "";
      docNames.forEach(function(thisDoc) {
        if(thisDoc.newPatient === true) {
          answer = "yes";
        } else {
          answer = "no";
        }
        $("#output").append(thisDoc.name + "<br>" + thisDoc.street + "<br>" + thisDoc.city +  "<br>" + thisDoc.state + "<br>" + thisDoc.zip +  "<br>" + thisDoc.phone + "<br>" + "accepts new patients:" + " " + answer);
      })
    }
  }

  $("#med-form").submit(function(e) {
    e.preventDefault();
    let medIssue = $("#problem").val();
    let doctors = Doctor.findDoctors(medIssue, display);
  });

  $("#name-form").submit(function(e) {
    e.preventDefault();
    let name = $("#name").val();
    let docNames = Doctor.findDocByName(name, displayDocByName);
  });
});

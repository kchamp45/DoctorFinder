var apiKey = require('./../.env').apiKey;

import {Doctor} from "./../js/doctor.js";

$(document).ready(function() {

  function display(doctors) {
    if(response.data.length == 0){
      $("#result").text("Sorry, no doctors match your search criteria")
    }else{
      doctors.forEach(function(doctor) {
      $("#result").append("<li>" + doctor + "</li>");
      });
    }
  }
  function displayDocByName(docNames) {
    if(response.data.length == 0){
      $("#output").text("Sorry, no doctors match your search criteria")
    }else{
      docNames.forEach(function(thisDoc) {
      $("#output").append("<li>" + thisDoc + "</li>");
      });
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

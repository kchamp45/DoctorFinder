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
      docNames.forEach(function(name) {
      $("#output").append("<li>" + name + "</li>");
      });
    }
  }
  
  $("#userMedIss").submit(function(e) {
    e.preventDefault();
    let medIssue = $("#problem").val();
    let doctors = Doctor.findDoctors(medIssue, display);
  });

  $("#inputName").submit(function(e) {
    e.preventDefault();
    let name = $("#name").val();
    let docNames = Doctor.findDocByName(name, displayDocByName);
  });
});

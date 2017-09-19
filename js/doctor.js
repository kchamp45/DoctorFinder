var apiKey = require('./../.env').apiKey;

export let Doctor = {

  findDoctors: function(medIssue, display) {
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?query=${medIssue}&location=or-portland&skip=0&limit=10&user_key=${apiKey}`,
      type: "GET",
      data: {
        format: "json"
      },
      success: (response) => {
        this.filterData(response, display);
      },
      error: function() {
        $('#error').text('Something is wrong.  Try again.');
      }
    });
  },


  findDocByName: function(name, displayDocByName){
    $.ajax({
      url:  `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=or-portland&skip=0&limit=10&user_key=${apiKey}`,

      type: "GET",
      data: {
        format: "json"
      },
      success: (response) => {
        this.docSort(response, displayDocByName);
      },
      error: function() {
        $('#error').text('Something is wrong.  Try again.');
      }
    });
  },

  filterData: function(response, display) {
    let doctors = [];

    response.data.forEach(function(doctor) {

      doctors.push(
        {
          name: doctor.profile.first_name + " " + doctor.profile.last_name,
          street: doctor.practices[0].visit_address.street,
          city: doctor.practices[0].visit_address.city,
          state: doctor.practices[0].visit_address.state,
          zip: doctor.practices[0].visit_address.zip,
          phone: doctor.practices[0].phones[0].number,
          newPatient: doctor.practices[0].accepts_new_patients
        });
    });

      display(doctors);
  },

  docSort: function(response, displayDocByName){
    let docNames = [];
    response.data.forEach(function(doc) {

      docNames.push(
        {
            photo: doc.profile.image_url,
            name: doc.profile.first_name + " " + doc.profile.last_name,
            street: doc.practices[0].visit_address.street,
            city: doc.practices[0].visit_address.city,
            state: doc.practices[0].visit_address.state,
            zip: doc.practices[0].visit_address.zip,
            phone: doc.practices[0].phones[0].number,
            newPatient: doc.practices[0].accepts_new_patients
        });

      });
      displayDocByName(docNames);
  }
};

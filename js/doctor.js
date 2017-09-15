export let Doctor = {

  findDoctors: function(medIssue, display) {
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?query=${medIssue}&location=or-portland&skip=0&limit=10&user_key=37c943cb133d57f40082b6c642897205`,
      type: "GET",
      data: {
        format: "json"
      },
      success: (response) => {
        // $("#result").text(`For this ${medIssue}, see ${doctor.profile.first_name}`);
        this.filterData(response, display);
      },
      error: function() {
        $('#error').text('Something is wrong.  Try again.');
      }
    });
    console.log("hi" + response);
  },


  findDocByName: function(name, displayDocByName){
    $.ajax({
      url:  `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=or-portland&skip=0&limit=10&user_key=37c943cb133d57f40082b6c642897205`,

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
            first_name: doctor.profile.first_name,
            last_name: doctor.profile.last_name,
            street_address: doctor.practices.visit_address.street,
            city: doctor.practices.visit_address.city,
            state: doctor.practices.visit_address.state,
            zip: doctor.practices.visit_address.zip,
            phone: doctor.practices.phone.number,
            accept_newPatient: doctor.practices.accepts_new_patients
        });

      });
      display(doctors);
  },

  docSort: function(response, displayDocByName){
    let docNames = [];
    response.data.forEach(function(doc) {

      docNames.push(
        {
            first_name: doctor.profile.first_name,
            last_name: doctor.profile.last_name,
            street_address: doc.practices.visit_address.street,
            city: doc.practices.visit_address.city,
            state: doc.practices.visit_address.state,
            zip: doc.practices.visit_address.zip,
            phone: doc.practices.phone.number,
            accept_newPatient: doc.practices.accepts_new_patients
        });

      });
      displayDocByName(docNames);
  }
};

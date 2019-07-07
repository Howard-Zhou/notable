const physicians = [
    {
      "id": "1",
      "firstname": "Julius",
      "lastname": "Hibbert",
      "email": "jhibbert@notablehealth.com",
      "appointments": [{
        "name": "John",
        "time": "8:00AM",
        "kind": "New Patient",
      },{
        "name": "Smith",
        "time": "9:00AM",
        "kind": "New Patient",
      },{
        "name": "Haha",
        "time": "10:00AM",
        "kind": "New Patient",
        },
      ]
    },
    {
    "id": "2",
    "firstname": "Algernop",
    "lastname": "Krieger",
    "email": "akrieger@notablehealth.com",
    "appointments": [
      {
        "name": "John",
        "time": "8:00AM",
        "kind": "New Patient",
      },
      {
        "name": "Haha",
        "time": "8:00AM",
        "kind": "New Patient",
        },
    ]
    },
    {
    "id": "3",
    "firstname": "Nick",
    "lastname": "Riviera",
    "email": "nriviera@notablehealth.com",
    "appointments": [
      {
        "name": "John",
        "time": "8:30AM",
        "kind": "New Patient",
      }
    ]
    }
]


exports.getPhysicians = function(req, res) {
	res.json({ 'physicians':physicians });
}


exports.getAppointmentsByPhysician = function(req, res) {
  const physicianId = req.params.physicianID;
  const physician = physicians.filter((p) => p.id === physicianId)[0];
	res.json({ "physician": physician })
}

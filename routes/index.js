module.exports = function(app){
  var physicinas = require('./physicians');
  app.get("/api/physicians/", physicinas.getPhysicians);
  app.get("/api/physicians/:physicianID", physicinas.getAppointmentsByPhysician);
}

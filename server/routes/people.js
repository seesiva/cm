var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/people_database');
var Schema = mongoose.Schema;

//Define the people model

var PeopleSchema = new Schema({
    EmpId: {type: String, required: true},
    FirstName: {type: String, required: true},
    LastName : {type: String, required: true},
    Email: {type: String, required: true},
    Mobile: {type: String},
    Created : {type : Date, default: Date.now}
});
                                      
var PeopleModel = mongoose.model('People', PeopleSchema);

exports.index = function (req, res){
	return PeopleModel.find(function (err, people) {
		if (!err) {
		        res.jsonp(people);
	  	} else {
	    		console.log(err);
	  	}
	});
}
exports.addPeople = function (req, res) {
	var person;
	person = new PeopleModel({
		EmpId: req.body.EmpId,
		FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Email: req.body.Email,
        Mobile: req.body.Mobile,
    });
	person.save(function (err) {
		if (!err) {
		 	console.log("created");
		} else {
			console.log(err);
		}
	});
 
	return res.send(person);
}
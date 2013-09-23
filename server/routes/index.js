'use strict';
/*
 * GET home page.
 */
exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

app.post('/people', people.addPeople);
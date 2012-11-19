
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'KnowledgeBase' });
};

exports.jaap = function(req, res){
  res.render('index', { title: 'jaap' });
};
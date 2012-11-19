
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'KnowledgeBase KakaBorrachaDeNavalha' });
};

exports.jaap = function(req, res){
  res.render('index', { title: 'jaap' });
}
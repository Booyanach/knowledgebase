
/*
 * GET home page.
 */

exports.index = function(req, res){
	// this will render PAIN in the merge!
  res.render('index', { title: 'KnowledgeBase KakaBorrachaDeNavalha' });
};

exports.jaap = function(req, res){
  res.render('index', { title: 'jaap' });
}


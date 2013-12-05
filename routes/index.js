
/*
 * GET home page.
 */

exports.index = function(req, res){
    res.render('index', { title: 'Express' });
};

exports.upload = function(req, res){
    try{
        res.redirect('http://autoschematic.ngrok.com/upload')
    }
    catch(err){
    res.render('upload', { title: 'Sorry' });
    }
};
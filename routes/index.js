
/*
 * GET home page.
 */

exports.index = function(req, res){
    res.render('index', { title: 'Express' });
};

exports.upload = function(req, res){
    var url = 'http://autoschematic.ngrok.com/upload'
    request(url, function(err, resp, body){
        if (err){
            res.render('upload', { title: 'Sorry' });
        }
        console.log(body)
        res.redirect('http://autoschematic.ngrok.com/upload')
    });
};
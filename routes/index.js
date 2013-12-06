
/*
 * GET home page.
 */
var request = require('request')

exports.index = function(req, res){
    res.render('index', { title: 'Express' });
};

exports.upload = function(req, res){
    var url = 'http://autoschematic.ngrok.com/upload'
    request(url, function(err, resp, body){
        if (err || body=='Tunnel autoschematic.ngrok.com not found'){
            res.render('upload', { title: 'Sorry' });
        }
        console.log(body);
        console.log(typeof(body));
        res.redirect('http://autoschematic.ngrok.com/upload');
    });
};
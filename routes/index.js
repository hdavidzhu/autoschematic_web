
/*
 * GET home page.
 */
var request = require('request')

exports.index = function(req, res){
    res.redirect('info');
};

exports.info = function(req, res){
    res.render('index', { title: 'AutoSchematic' });
};

exports.upload = function(req, res){
    var url = 'http://autoschematic.ngrok.com/upload'
    request(url, function(err, resp, body){
        if (err || body.match(/tunnel/i)){
            res.render('upload', { title: 'Sorry', url:'http://placekitten.com/'+(Math.floor(Math.random()*(401)+200))+'/'+(Math.floor(Math.random()*(401)+200)) });
        }
        else{
            res.redirect('http://autoschematic.ngrok.com/upload');
        }
    });
};
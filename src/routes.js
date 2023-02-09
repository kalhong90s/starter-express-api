
module.exports = (app) => {

    app.get('/api/all', (req, res) => {
        res.send(require('./res/get-all.json'));
    });    
    

    app.get('/api/:keyName/:keyValue.(json)', (req, res) => {
        res.send(require('./res/get-one.json'));
    });   
 
    app.post('/api/post', (req, res) => {
        res.send(require('./res/post.json'));
    });  
 
    app.all('*', (req, res) => {
        res.send(require('./res/all.json'));
    });

    
    
}


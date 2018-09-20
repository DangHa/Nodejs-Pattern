var User = require('../models/user');

module.exports = {
    
    setupUser() {
        
        // seed database 
        var users = [
            {
                username: 'hong',
                password: '123'
            },
            {
                username: 'test',
                password: '221'
            }
        ];

        User.create(users, function(err, result) {
            console.log('Error: ' + err);
            console.log('Result: ' + result);
        });
        
    }
}
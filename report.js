const newman = require('newman');
require('dotenv').config();

newman.run({
     collection: 'https://api.postman.com/collections/21484361-dc4f87b6-5213-4a9c-979b-09469994d685?access_key=${process.env.pmatKey}',
    //collection: './collection/dmoney-user-api-collection.json', // Collection URL from a public link or the Postman API can also be used
    reporters: ['htmlextra'],
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html',
        }
    }
}, function(err){
    if(err){ throw err};
    console.log("Complete");
});
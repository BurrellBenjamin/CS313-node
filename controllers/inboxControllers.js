const {Pool} = require('pg')

const db_url = process.env.DATABASE_URL;

const pool = new Pool({connectionString: db_url})
function loadInbox(user, callback){
    console.log("Loading messages for: " + user);
    sql = "select sourceUser, dateSent, message from messages where recievingUser = (select userID from users where username = " + user + ")";    
    
    pool.query(sql, function(err, db_results){
       if(err){
           console.log("Failure to retrieve messages");
       }
       else{
           console.log("found some messages");
           
           var results = {
               success:true,
               list:db_results.rows
           };
           callback(null, results);
       }
    });
    
    
}
module.exports = {
    loadInbox: loadInbox
};
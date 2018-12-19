function loadInbox(user, callback){
    console.log("Loading messages for: " + user);
    sql = "select sourceUser, dateSent, message from messages where recievingUser = (select userID from users where username = $req.session.user)";    
    
    pool.query(sql, function(err, db_results){
       if(err){
           throw err;
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
}
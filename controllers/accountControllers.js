function createNewAccount(userName, password){
    //insert users into the account
    sql = "insert into users (username, password) values($userName, $password)";
    
    pool.query
    
    var results = {success:true};
    
    return results;
}

function login(userName, password){
    var sql = "select userid from users where username = $userName and password = $password";
    if(pool.query(sql, function(err, db_results) {
        if (err)
        {
            console.log("Failed Login");
            throw err;
        }
        else{
            return db_results.rowCount;
        }
    }) == 1);
    console.log("successlfully logged int");
}
var user_name = req.body.user;
var password = req.body.password;
    
    
{
    req.session.user = user_name;
    res.send({success : true});
    res.render('pages/inbox.ejs', 
    });
}
else{
    res.send({success : false});
}

    
module.exports{
    createAccount: createNewAccount
    login:login;
}
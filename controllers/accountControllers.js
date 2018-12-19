const {Pool} = require('pg')

const db_url = process.env.DATABASE_URL;

const pool = new Pool({connectionString: db_url})

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
        }
        else{
            return db_results.rowCount;
        }
    }) == 1){
        console.log("successlfully logged int");
    }
    
}
    
module.exports = {
    createAccount: createNewAccount,
    login:login
};
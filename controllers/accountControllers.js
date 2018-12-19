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
    var sql = "SELECT userid FROM users WHERE username = " + userName + " AND password = " + password ;
    var results = pool.query(sql, function(err, db_results) {
        if (err)
        {
            console.log("Failed Login");
            return false;
        }
        else{
            console.log("successlfully logged in");
            return db_results.rowCount;
        }
    })
    return results;
    }
    
    
module.exports = {
    createAccount: createNewAccount,
    login:login
};
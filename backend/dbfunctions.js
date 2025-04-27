const sql=require("mysql2")
const con=sql.createConnection({
    host:'localhost',
    user:'root',
    password:'Cherukuri123#',
    database:'users'
})
function getuser(){
    return new Promise(
        function(suc,rej){
            con.query('select *from user',(err,rows)=>{
                if(err){
                     rej(err)     
                }
                else{
                    suc(rows)
                    
                }
            })
        }
    )}

function adduser(n,p,r,q){
        return new Promise(
            function(suc,rej){
                con.query('insert into user(name,datetime,description,price) values(?,?,?,?)',[n,p,r,q],(err,res)=>{
                    if(err){
                         rej(err)     
                    }
                    else{
                        suc(res)
                        
                    }
                })
            }
        )}



function updateuser(n,p,r,id){
    return new Promise(
        function(suc,rej){
            con.query('update user set name=?,datetime=?,description=? where id=?',[n,p,r,id],(err,res)=>{
                if(err){
                     rej(err)     
                }
                else{
                    suc(res)
                    
                }
            })
        }
    )
    
    }



function deleteuser(id){
    return new Promise(
        function(suc,rej){
            con.query('delete from user where id=?',[id],(err,res)=>{
                if(err){
                     rej(err)     
                }
                else{
                    suc(res)
                    
                }
            })
        }
    )
}

module.exports={
 getuser,adduser,updateuser,deleteuser
}
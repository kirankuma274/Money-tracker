import './App.css';
import { useEffect, useState } from 'react';
function App() {
  let [name,setname]=useState('')
  let [datetime,setdatetime]=useState('')
  let [description,setdescription]=useState('')
  let [price,setprice]=useState('')
  let [users,setusers]=useState([])

  useEffect(()=>{
    getusers().then((users)=>{
       setusers(users)
    })
  },[users])

  async function getusers(){
   const url="http://127.0.0.1:4001/transaction"
   let res= await fetch(url)
   let users=await res.json()
   return users
  }


  function handlesubmit(e){
   if(name.length===0 || datetime.length===0 || description.length===0 || price.length===0)
   {
      e.preventDefault();
      alert("Enter All The Details")
   }
   else{
   e.preventDefault();
     const url="http://127.0.0.1:4001/transaction"
     fetch(url,
      {method:'POST',
         headers:{'Content-type':'application/json'},
         body:JSON.stringify({name,description,datetime,price})
      },
   ).then((res)=>{
      res.json().then((data)=>{
         console.log(data)
         setname("")
         setdatetime("")
         setdescription("")
         setprice("")        
      })
   })     
  }}



  function handleDelete(id) {
   const url = "http://127.0.0.1:4001/transaction"
 
   if(window.confirm('Are you sure you want to delete this transaction?')) {
      fetch(url,
         {method:'DELETE',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({id})
         },
      ).then(()=>{alert("deleted successfully")
  
      })


   }
 }
 



let balance=0
 for(let user of users){
  balance=balance+user.price
}

  return (
     <>
        <main>
             <h1>💸Money tracker</h1>
            <h1>{balance}</h1>

            <form onSubmit={handlesubmit}>
               <div className='basic'>
                   <input type='text' value={name} onChange={(e)=>{
                    let nametemp= e.target.value;
                    setname(nametemp) }}
                    placeholder='income or expenses'/>

                   <input type='datetime-local' value={datetime} onChange={(e)=>{
                    let datetemp= e.target.value;
                    setdatetime(datetemp)}}/>
               </div>

               <div className='description'>
                  <input type='text' value={description} onChange={(e)=>{
                    let descritemp= e.target.value;
                    setdescription(descritemp) }}
                     placeholder='description'/>

                     <input type='number' value={price} onChange={(e)=>{
                    let pricetemp= e.target.value;
                    setprice(pricetemp) }}
                     placeholder='enter price value'/>
               </div>
                  

               <button type='submit'> Add new transaction</button>

            </form>


            <div className='transactions'>
               {users.map((user)=>(
                                <div className='transaction' key={user.id}>
                                <div className='left'>
                                  <div className='name'>{user.name}</div>
                                  <div className='description'>{user.description}</div>
                                </div>
                
                                   <div className='right'>
                                      <div className={user.price >= 0 ? 'price-green' : 'price-red'}>
                                      {user.price >= 0 ? `+${user.price}` : `${user.price}`}
                                      </div>
                                      <div className='datetime'>{user.datetime}</div>
                                      <button className='delete' onClick={() => handleDelete(user.id)}>Delete</button> 
                                   </div>
                              </div>
               ))}   
            </div>

        </main>
     </>
  );
}

export default App;

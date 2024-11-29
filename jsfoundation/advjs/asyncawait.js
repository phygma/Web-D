function fetchUserData(){
      return new Promise((resolve,reject) => {
            setTimeout(()=>{
                  resolve({name:"chaicode", url:"https://www.udemy.com/course/web-dev-master/learn/lecture/45708197#overview"})
            },3000)
      })
}

async function getUserData(){
      try{
            console.log("Fetching user data...");
            const userData = await fetchUserData()
            console.log("User data fetched successful  ly")
            console.log("User data: ", userData)
      }catch (error){
            console.log("Error fetching data", error)

      }
}
getUserData();
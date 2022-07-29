console.log("hello");
//question1
//Write one example explaining how you can write a callback function ?

function myName (){
    let name = "my name is sairam";
    console.log(name);
}setInterval(myName,2000);

 //question2
//"Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

const callback = function(){
        
        setTimeout(()=>{
           console.log("im called no1");
    
            setTimeout(()=>{
               console.log("im called no 2");
              
               setTimeout(()=>{
                  console.log("im called no 3");
          
                  setTimeout(()=>{
                    console.log("im called no 4");
    
                    setTimeout(()=>{
                        console.log("im called no 5");
    
                        setTimeout(()=>{
                            console.log("im called no 6");
    
                            setTimeout(()=>{
                                console.log("im called no 7");
                            },7000);
                        },6000);
                    },5000);
                  },4000);
               },3000);
            },2000);
        },1000);         
    }
    callback();


    //question3
    //"Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"

const promise = new Promise((resolve, reject) =>{
    resolve();
})
promise 
  .then(() => {
      setTimeout(()=>{
          console.log("1");
      },1000);
  })
  .then(() => {
    setTimeout(()=>{
        console.log("2");
    },2000);
})
.then(() => {
    setTimeout(()=>{
        console.log("3");
    },3000);
})
.then(() => {
    setTimeout(()=>{
        console.log("4");
    },4000);
})
.then(() => {
    setTimeout(()=>{
        console.log("5");
    },5000);
})
.then(() => {
    setTimeout(()=>{
        console.log("6");
    },6000);
})
.then(() => {
    setTimeout(()=>{
        console.log("7");
    },7000);
});
 

 //question4
// Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 

const argument = new Promise((resolve,reject) => {  
    setTimeout(() => {
          resolve();
          reject();       
      },3000);
  })
 argument        
  .then((data) => {
      console.log("the promise resolved");
  })
  .catch((error) => {
      console.log("the promise rejected");
  });

   //question5
  //Create examples to explain callback function.

  const callMsg = function(){
        console.log("i'm callback function");
    }; setTimeout(callMsg, 3000)
 
    //question6
    ////Create examples to explain callback hell function.

    const getPerson = () =>{
        setTimeout(() =>{
            console.log("Fetching the ID's");
            let id = [1,2,3,4,5]
            console.log(id);
            setTimeout(() =>{
                const biodata = {
                    name: 'Sairam',
                    age: 24
                   }
            console.log(` hi there my Name is ${biodata.name} and i'm ${biodata.age} years old`);
              setTimeout(() =>{
                biodata.gender = "male",
                console.log(` hi there my Name is ${biodata.name} and i'm ${biodata.age} years old and gender is ${biodata.gender} `);
              },3000)
            },2000)
            
        },2000)
    }
    getPerson();


    //question7
//Create examples to explain promises function

 const promiseOne = new Promise((resolve, reject)=>{ //producer//resolve  and reject are executor function
    setTimeout(() =>{
        let id = [1,2,3,4,5];
        resolve(id);
        reject("Error in fetching the details");
    },2000);
});

promiseOne               //consumer
     .then((data) =>{
        console.log("The data resolved is",data);
     })
     .catch((error) =>{
        console.log(error);
     })
     .finally(() =>{
       console.log("end of promise");
})


 //question8 
//Create examples to explain async await function

let myPromiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Promise resolved");
    }, 3000);
  });
  
  async function asyncFunc() {
    let mypromise = await myPromiseOne ;
  
    console.log(mypromise);
    console.log("this is async/await");
  }
  asyncFunc();

  //question9
  //Create examples to explain promise.all function

  const promise1 = Promise.resolve(26);
  const promise2 = 10;
  const Promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 26, 'hello there');
});

Promise.all([promise1, promise2, Promise3]).then((data) => {
  console.log(data);
});


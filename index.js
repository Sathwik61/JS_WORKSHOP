// const a=10;

//  a=99;
// console.log(a)

// let a=10;
// let b=12.23
// let c=true

// console.log(a)
// console.log(b)
// console.log(typeof(c))

// const obj ={
//     name:"abc",
//     age:15
// }
// console.log(obj);


// let arr =[1,2,3,4,5,6,7]
// let sarr =['a','b','c','c']
// console.log(arr)
// console.log(sarr)


// let a=2;
// if(a){
//     console.log("True value")
// }
// else if(a==2){
//     console.log("NEITHER TRUE NOR FALSE its just a number");
// }
// else{
//     console.log("false")

// }

// let a= 'abc';
// console.log(`hey ${a}`)
// function func(){
//     console.log("hey there!")
// }
// func();

// document.addEventListener("click",()=>{
//     console.log("djbf")
// })

// const fun3=()=>{

// }
// fun3()

// const btn=document.getElementById('btn')
// btn.addEventListener("click",()=>{
//     alert("Clicked ")
// })




// function delay(item){
//     return item*5;
// }

// const result = delay(300)

// console.log(result)
// let a=9
// for(let i=0;i<5;i++){
//     console.log(i)
// }

// let arr=[1,2,3,4,5]

// for( let i in arr)
// {
//     console.log(i)
// }


// const obj ={
//     name:"ABC",
//     age:34,
//     section:'d'
// }

// for( let i in obj){
//     console.log(`key :${i} \t value:${obj[i]}`) 
// }

// while

let i=1;

// while(i<=5){
//     console.log("value ",i)
//     i+=1;
// }

// do{
// console.log("value",i)
// i++;
// }while(i<=5)


// a.map((value,index)=>{
    //     console.log(`${index}`,`${value}`)
    // })
    
// let a=[1,2,3,4,5]
// a.forEach((value,index)=>{
//     console.log(`${index}`,`${value}`)
// })



// function getEvenNumbers(arr) {
//     let evenNumbers = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 === 0) {
//         evenNumbers.push(arr[i]);
//       }
//     }
//     return evenNumbers;
//   }
  
//   // Example usage
//   let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   let result = getEvenNumbers(numbers);
//   console.log(result);  // Output: [2, 4, 6, 8, 10]

// promises

// let p=new Promise((resolve,reject)=>{
//     let a=20

//     if(a>=18){
//         resolve("habibi You turned adult")
//     }else{
//         reject("habibi.. im under the water error ")
//     }
// })

// p.then((m)=>{
//     console.log(m)
// })

// p.catch((e)=>{
//     console.log(e)
// })

// const akshay=new Promise((res,rej)=>{
//      const dow=1;
//            //if akshay did the work 1 else 0

//            setTimeout(()=>{

//                if(dow){
//                    res('Akshay kept his promise!')
//                 }else{
//                     rej('Akshay broke his promise !')
//                 }
//             },3000)

// })

// const  god = ()=>{
//     return new Promise((res,rej)=>{
//         const done=1;
        
//         if(done){
//             res("Dog has MoVED")
//         }
//         else{
//             rej("Dog havnt MoVED")
//         }
//     })    
// }

// akshay.then((m)=>{
//     console.log(m)
// }).then(god).then((n)=>{
//     console.log(n)
// }).then(()=>{
//     console.log("executed every funtion")
// })
// .catch((er)=>{
//     console.log(er)
// })


// setInterval(()=>{
//     console.log("hey there")
// },3000)


// fecth


// fetch('https://api.restful-api.dev/objects')
// .then(re=>{return re.json()})
// .then(res=>console.log(res))
// .catch((e)=>{
//     console.log(e)
// })





const obj={
    name: 'Moto edge 40 neo',
    data: { Capacity: '128 GB', 'Screen size': 15.6 }
  }

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));


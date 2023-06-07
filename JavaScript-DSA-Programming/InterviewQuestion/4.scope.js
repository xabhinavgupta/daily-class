// // function normal() {
// //     console.log("1 " + this.age + " "+ this.city);
// //   }
// //   normal();

// // const arrowNormal = () =>{
// //     console.log("2" + this.age + " "+ this.city);
// // }
// //arrowNormal();
// let obj = {
//   age: 21,
//   city: "Abhinav",
//   normal: function () {
//     const arrow = ()=>{
//         console.log("3 " + this.age + " " + this.city);
//       }
//       arrow();
//     //console.log("2 " + this.age + " " + this.city);
//   },
//   arrow: ()=>{
//     console.log("3 " + this.age + " " + this.city);
//   }
// };
// //obj.normal();

// function checkNew () {
//     const arrow = ()=>{
//         console.log("31 " + this.age + " " + this.city);
//       }
//       arrow();
//     }
// //checkNew();
// //console.log(checkNew.call(obj));
// const newVar = checkNew.bind(obj);
// newVar();
// //
   
let obj = {name:"Abhinav",
city:"Dehradun",
normal: function(){
    console.log("1-console" + this +" "+ this.name);
    return function(){
        console.log(this.name + " " + this.city +"-"+this);
    }
}}
let obj2 ={
    name:"Vikas",
    city:"Mumbai",
    callObj: obj.normal()
}
//obj.normal()();
obj2.callObj();

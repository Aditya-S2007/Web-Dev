// let jsonres='{"fact":"Many cats cannot properly digest cows milk. Milk and milk products give them diarrhea.","length":87}';

// let valid= JSON.parse(jsonres);
// console.log(valid.fact);

// let student= {
//     name:"aditya",
//     age:18,
//     dob:"14/04/2007"

// };

// fetch
// let url="https://catfact.ninja/fact";

// fetch(url)
//     .then((res)=>{
       
//         return res.json();
//     })
//     .then((data)=>{
//         console.log("data1",data.fact);
//         return fetch(url);
       
//     })
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data2)=>{
//         console.log("data2",data2.fact);
//     })
    
//     .catch((err)=>{
//         console.log("ERROR-",err);
//     });

// async function getfact() {
//     try {
//         let res= await fetch(url);
//         let data= await res.json();
//         console.log("data1",data.fact);
//         let res2= await fetch(url);
//         let data2= await res2.json();
//         console.log("data2",data2.fact);
//     } catch (e) {
//         console.log("error",e);
//     }
//     console.log("hi");
    
// }

// axios
// async function getfact() {
//     try {
//         let res= await axios.get(url);
        
//         console.log(res.data.fact);
        
//     } catch (e) {
//         console.log("error",e);
//     }
//     console.log("hi");
    
// }

// get random get fact
// let btn= document.querySelector("button");
// btn.addEventListener("click", async ()=>{
//     let fact= await getfact();
//     console.log(fact);
//     let p = document.querySelector("#re");
//     p.innerHTML = fact;
// });
// async function getfact() {
//     try {
//         let res= await axios.get(url);
        
//         return res.data.fact;
        
//     } catch (e) {
//         console.log("error",e);
//         return "NO FACT FOUND";
//     }
    
    
// }


// random iamge
// let url2="https://dog.ceo/api/breeds/image/random";
// let btn= document.querySelector("button");
// btn.addEventListener("click", async ()=>{
//     let link= await getImage();
//     console.log(link);
//     let img= document.querySelector("#re");
//     img.setAttribute("src",link);

// });
// async function getImage() {
//     try {
//         let res= await axios.get(url2);
        
//         return res.data.message;
        
//     } catch (e) {
//         console.log("error",e);
//         return "/";
//     }
    
    
// }

// sending header
// const url3="https://icanhazdadjoke.com/";
// async function getJoke() {
//     try {
//         const config={Headers:{Accept:"application/json"}};
//         let res= await axios.get(url3,config);
//         console.log(res.data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// activity
let url5="http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("button");
btn.addEventListener("click", async ()=>{
    let country=document.querySelector("input").value;
    console.log(country);
   let colArr = await getCollege(country);
   show(colArr);
});
function show(colArr) {
    let list=document.querySelector("#list");
    list.innerText="";
    for (col of colArr) {
        console.log(col.name);
        let li=document.createElement("li");
        li.innerText=col.name;
        list.appendChild(li);
    }
}


async function getCollege(country) {
    try {
        let req= await axios.get(url5 + country);
        return req.data;
    } catch (e) {
        console.log("error",e);
        return [];
        
    }
    
}
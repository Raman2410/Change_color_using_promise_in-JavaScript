h1 = document.querySelector('h1');
// h1.style.color = "red";

function changeClr(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve("color changed");
        },delay)
    });
   
};
changeClr("red",1000).then(()=>{
    return changeClr("blue",1000)
}).then(()=>{
    return changeClr("orange",1000)
}).then(()=>{
    changeClr("green",1000)
});



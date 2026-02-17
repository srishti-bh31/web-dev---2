console.log('starting....');
function doWork(cb){
    setTimeout(()=>{ 
        cb('Working....');
    },3000)
}
doWork((data)=>{
    console.log(data);
})
console.log('finished');


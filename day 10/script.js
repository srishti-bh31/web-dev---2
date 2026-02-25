//promise is used to handle asynchronous fummction in a better way then callback hell..
// promise has three states :
// 1. pending:initil state ,neither fulfilled nor rejected 
// 2. fulfilled: operstion completed successfully...
// 3. rejected :operation failed.
// promuse is an obeject which is returned by function which is used to handle asynchronous function..

// promise handling:
// promise consumer promise .then(),promise.cstch()
// 1.then : it is used to handle the fulfilled state ofthe promise.
// 2. catch: it is used to handle the rejected state of the promise.




let pro = new Promise((resolve, reject) => {
    let proposal = "false";
    if (proposal === "true") {
        resolve();
    }
    else{
        reject();
    }
})
pro.then(() => {console.log("proposal accepted")}).catch(() 
=> {console.log("proposal rejected")});

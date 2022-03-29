// because it is a builin module we dont need to install it first.
const os = require('os')

//info about current user 
const user = os.userInfo()
console.log(user);

//methode return the system uptime in seconds
console.log(`the system Uptime is ${os.uptime} seconds`);

const currentOs = {
name : os.type(),
release : os.release(),
totalMem : os.totalmem()/ (1024*1024*1024),
freeMem : os.freemem()
}

console.log(currentOs);
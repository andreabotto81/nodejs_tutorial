const {userInfo} = require('os')
const os = require('os')

// user info, 2 ways
console.log(userInfo())
console.log(os.userInfo())

// system uptime in seconds
console.log(`the system uptime is ${Math.round(os.uptime()/3600*100)/100} hours`)

// system info
const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOS)
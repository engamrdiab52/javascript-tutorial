const { readFile, writeFile } = require('fs')
console.log('START....');
readFile('./content/first.txt','utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return;
    }else{
        const first = result
        readFile('./content/second.txt', 'utf-8',(err, result) =>{
            if(err){
                console.log(err);
                return
            }else{
                const second = result
                writeFile('./content/result-async.txt', `there is the result async.......
                .: ${first}, ${second}`,(err, result)=>{
                    if(err){
                        console.log(err);
                        return
                    }else{
                        console.log('done with asunc task......')
                    }

                })
            }
        })

    }
})
console.log('starting next task.......');
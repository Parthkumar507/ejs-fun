const http =require('http');
const port = 8000;
const fs =require('fs')

function requestHandler(req,res)//req==request and res==response
{    console.log(req.url)
    // fs.readFile('./index.html' ,function(err,data){
    //     if(err){
    //         console.log('err',err)
    //     return res.end('<h1>Failed</h1>')
    //     }
    //     return res.end(data)
    // })

    let filePath;

    switch(req.url){
        case '/':
            filePath='./index.html';
            break;

        case '/profile':
            filePath='./profile.html';
            break;
                
        default:
            filePath='./404.html';
            break;
    }

    fs.readFile(filePath,function(err,data){
        if(err){
            console.log('error',err)
            return res.end('<h1>Failed</h1>');
        }
    return res.end(data)

    })

}
const server=http.createServer(requestHandler);
server.listen(port,function(error){
    if(error){
        console.log(error)
        return;
    }
    console.log('Server is now working fine on port :',port)
})



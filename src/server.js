
let server;

async function main(){
    try{
        server = app.listen(port, () =>{
        console.log(`Server is running on port ${port}`);
        });
    }catch(err){
        console.log(err);
    }
}
main();
// fetch 

const URL = "https://jsonplaceholder.typicode.com/postssss";

// fetch() method be hamen promise retun krey ga...

fetch(URL,{

    // Phella video ma yeh code likha tha:

    // .then(response=>{
    //     console.log(response); 

    //     console.log(response.json()); => json method be promise return krey ga... => ydd rakhna jahan responce likha hai fuction jo bnayeh hai wahan kch be dall skty ho like abc,xyz,hello everything....

    // })

    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then(response =>{
        if(response.ok){
            return response.json()
        }else{
            throw new Error("Something went wrong!!!")
        }
    })
    .then(data =>{
        console.log(data);
    })
    
    // Iss fetch() method ma ydd rakhna ka catch() method tb he chally ga jb Network error koi howa tho otherwie ni chally ga matlb ka internet na howa something network error...
    
    
    .catch(error =>{
        console.log("inside catch");
        console.log(error);
    })

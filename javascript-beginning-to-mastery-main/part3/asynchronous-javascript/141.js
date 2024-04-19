// Error Handling In JSON:

const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();

xhr.open("GET", URL);
xhr.onload = () => {
    if(xhr.status >= 200 && xhr.status < 300) {
        const data = JSON.parse(xhr.response);
        console.log(data);

        // Purra dta ma sy matlb purra object ma sy hamen object 3 ki -> "id" chahia tho hum yeh km kren gy neecha walli line ka:

        const id = data[3].id;
        // console.log(id);
        const xhr2 = new XMLHttpRequest();
       
        // Iss neecha walli line ka matlab hai purana "URL" or sath ma uski "id":
        const URL2 = `${URL}/${id}` 
        console.log(URL2);
        xhr2.open("GET", URL2);
        xhr2.onload = () => {
            const data2 = JSON.parse(xhr2.response);
            console.log(data2);
        }
        xhr2.send();
    }
   else{
       console.log("something went wrong");
   }
}

// Network Related Error ko handle krna ka lye "onerror" method use kren gy:
xhr.onerror = () => {
    console.log("network error");
}
xhr.send();


// yeh jo upper code ma hum phella "URL" and phr "URL2" ko call kr rahy yeh be callback hell he hai iss ka bd Fetch API ki bt krey gy...
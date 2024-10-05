const input=document.querySelector("#input")
const output=document.querySelector("#meaning")

const search=document.querySelector("#search")



search.addEventListener("click", async()=>{
    const val=input.value
    if(val===""){
        alert("Please Enter a word")
    }
    else{
        const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${val}`
        const meaning = await fetch(url)
        const response=await meaning.json()
        console.log("meaning",response);
        output.textContent=response[0].meanings[0].definitions[0].definition
        // console.log(response[0].meanings[0].definitions[0].definition);

    }

})
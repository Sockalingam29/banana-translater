var btnTranslate=document.querySelector("#btntranslate");
var txt=document.querySelector("#text");
var outputDiv=document.querySelector("#outputdiv");
var url="https://api.funtranslations.com/translate/pirate.json";

function clickhandler()
{
   console.log("clicked");
   var input=txt.value;
   console.log(input);
   var finalurl=constructUrl(input);
   console.log(finalurl);
   fetch (finalurl)
   .then(response=>response.json())
   .then(json => { 
      outputDiv.innerText=json.contents.translated;
   })
   .catch(() => {
      alert("Some error occured");
   })

};

btnTranslate.addEventListener("click",clickhandler);

function constructUrl(inputtxt){
   var encoded=encodeURI(inputtxt);
   return `${url}?text=${encoded}`;
};
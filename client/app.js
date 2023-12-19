
//call api
 async function getMesage () {

 // call api with fetch
 const response = await fetch ("http://localhost:8080/message");

 //turn resp into json
 const json = await reponse.json();

 //put message on the page 
 const p = document.getElementById ("message");
 p.textContent = json.message;
}

getMessage ();
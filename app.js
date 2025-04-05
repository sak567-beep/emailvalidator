let result={
  "tag": "",
  "free": false,
  "role": false,
  "user": "bidewe5267",
  "email": "bidewe5267@aersm.com",
  "score": 0.32,
  "state": "deliverable",
  "domain": "aersm.com",
  "reason": "valid_mailbox",
  "mx_found": true,
  "catch_all": null,
  "disposable": false,
  "smtp_check": true,
  "did_you_mean": "bidewe5267@naver.com",
  "format_valid": true
} 
submitBtn.addEventListener("click", async (e)=>{
e.preventDefault();
console.log("clicked");
resultcont.innerHTML=`<img width="123" src="loading.svg" alt="">`
let key="ema_live_t7aKkrqbYgu175ITx0JgGV5Eiu8lp7OTHTSWyvOH";
let email=document.getElementById("username").value;
let url=`https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
let res = await fetch(url);
let result=await res.json();
let str =``;
for(key of Object.keys(result)){
  if(result[key]!=="" && result[key]!==" "){
  str=str+`<div>${key}: ${result[key]} </div>`;
}
}
console.log(str);
resultcont.innerHTML= str;
})

  


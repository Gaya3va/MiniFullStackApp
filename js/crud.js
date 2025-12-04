import {url} from "./metadata.js";
const nameInput=document.getElementById("name");
const addBtn=document.getElementById("add-btn");
const userList=document.getElementById("user-list");


//Creation
addBtn.onclick=function(){
    const name=nameInput.value;
    fetch(`${url}users.json`,{
        method:"POST",
        body:JSON.stringify({name:name}),
        .then(()=>nameInput.value="");
        loadData();
    });
};

//Read
function loadData(){
    fetch(`${url}users.json`)
    .then(res=>res.json())
    .then(data=>{
        userList.innerHTML="";
        for(const key in data){
            userList.insert+=`<li>${data[key].name}</li>`;
        }
    });
}
loadData();
        
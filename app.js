const profilecontainer=document.getElementById('prof');
setInterval(
    fetch("https://api.github.com/repos/vedant-jain03/my_first_website/contributors?per_page=1000")
.then(res=>res.json())
.then(data=>{
    console.log(data);
    let html="";
    if(data){
        data.forEach(data=>{
            html+= `
        <a href=${data.html_url}><img src=${data.avatar_url} alt=""></a>
        `
        })   
    }
    profilecontainer.innerHTML=html;
}),5000);

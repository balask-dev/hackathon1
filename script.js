async function gitData(){
  try{
      var res = await fetch("https://api.github.com/users/octocat")
         return res;
} catch(err){
    console.log(error)
})

gitData()
.then(function(data){
    var box = document.createElement("div")
    box.style.width = "100px"
    var card = document.createElement("div")
    card.style.width = "24px"
    box.appendChild(card)
   
    var carda = document.createElement("div")
    carda.style.width = "24px"
    carda.setAttribute("src",element.avatar.png)
    box.appendChild(carda))
    
    var cardb = document.createElement("div")
    cardb.style.width = "24px"
    cardb.setAttribute("src",element.stars_count)
    box.appendChild(cardb)
    
    var cardc = document.createElement("div")
    cardc.style.width = "24px"
    var a = document.createElement('a');
      var linkText = document.createTextNode("my title text");
      a.appendChild(linkText);
      a.title = "repos";
      a.href = "https://github.com/users/octocat/repos";
      box.cardc.appendChild(a);
     cardc.setAttribute("src",element.repos)
     box.appendChild(cardc)

    var cardd = document.createElement("div")
    cardd.style.width = "24px"
    card.setAttribute("src",element.fork_count)
    box.appendChild(cardc)
     
   
    document.getElementById(box)
    document.body.appendChild(box);
    


    
}
.then(function(res){
    console.log(res)
})

.catch(function(err){
    console.log(err)
})


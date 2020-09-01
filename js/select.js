var option = Cookies.get("value");
var userCurrentHealth = Cookies.get("value1");
var computerCurrentHealth = Cookies.get("value2");


function firstClick() {
    userHealth.innerHTML -= 10;
    Cookies.set("value1", userHealth.innerHTML);
    computerHealth.innerHTML -= 5;
    Cookies.set("value2", computerHealth.innerHTML);
    if (userHealth.innerHTML <= 0) {
        document.getElementById("container").innerHTML = "You failed the game";
        Cookies.remove("value1");
        Cookies.remove("value2");
        
    }
    if (computerHealth.innerHTML <= 0) {
        document.getElementById("container").innerHTML = "You won the game";
        Cookies.remove("value1");
        Cookies.remove("value2");
    }
}
function secondClick() {
    userHealth.innerHTML -= 5;
    Cookies.set("value1", userHealth.innerHTML);

    computerHealth.innerHTML -= 10;
    Cookies.set("value2", computerHealth.innerHTML);

    if (userHealth.innerHTML <= 0) {
        document.getElementById("container").innerHTML = "You failed the game";
        Cookies.remove("value1");
    }
    if (computerHealth.innerHTML <= 0) {
        document.getElementById("container").innerHTML = "You won the game";
        Cookies.remove("value2");
    }
}
function thirdClick() {
    userHealth.innerHTML -= 15;
    Cookies.set("value1", userHealth.innerHTML);

    computerHealth.innerHTML -= 5;
    Cookies.set("value2", computerHealth.innerHTML);

    if (userHealth.innerHTML <= 0) {
        document.getElementById("container").innerHTML = "You failed the game";
        Cookies.remove("value1");
    }
    if (computerHealth.innerHTML <= 0) {
        document.getElementById("container").innerHTML = "You won the game";
        Cookies.remove("value2");
    }
}
function fourthClick() {
    userHealth.innerHTML -= 10;
    Cookies.set("value1", userHealth.innerHTML);

    computerHealth.innerHTML -= 20;
    Cookies.set("value2", computerHealth.innerHTML);

    if (userHealth.innerHTML <= 0) {
        document.getElementById("container").innerHTML = "You failed the game";
        Cookies.remove("value1");
    }
    if (computerHealth.innerHTML <= 0) {
        document.getElementById("container").innerHTML = "You won the game";
        Cookies.remove("value2");
    }
}

if (option == "Armored") {
    var one = document.getElementById("imageone");
    one.setAttribute("src", "https://cdn.mos.cms.futurecdn.net/MjguwowGv4CKCkTcK832sZ-320-80.jpg");
    one.classList.add("imageSize");
    var text = document.getElementById("h3tag");
    text.innerHTML = "Armored";
}
else if (option == "Horned") {
    var one = document.getElementById("imageone");
    one.setAttribute("src", "https://www.geologypage.com/wp-content/uploads/2016/12/Scientists-redefine-horned-dinosaur-GeologyPage.jpg");
    one.classList.add("imageSize");
    var text = document.getElementById("h3tag");
    text.innerHTML = "Horned";
    

}
else if (option == "Amphibious") {
    var one = document.getElementById("imageone");
    one.setAttribute("src", "https://cdn.mos.cms.futurecdn.net/CDhzmfbq4DdZBZBZ72Xwwj-1200-80.jpg");
    one.classList.add("imageSize");
    var text = document.getElementById("h3tag");
    text.innerHTML = "Amphibious";
    
}
var userHealth=document.getElementById("spantagone");
var computerHealth=document.getElementById("spantagtwo");


if (userCurrentHealth == undefined) {
    userHealth.innerHTML = 50;
}
else {
    userHealth.innerHTML = userCurrentHealth;
}
 if (computerCurrentHealth== undefined) {
     computerHealth.innerHTML = 50;
 }
 else {

    computerHealth.innerHTML = computerCurrentHealth;
}


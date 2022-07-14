function validatemail(){
    var email = document.getElementById("email").value;
    if(email == "swatisoontobemehta@gmail.com") {
        alert("Sahi pakde hai ji aap to ekdum... Sahi pakadne ki khushi mai aapke liye ek tohfa hai ji!!! Tohfa jaan ne ke liye neeche dia OK dabaye...");
        window.location.replace("gift1.html");
    } else {
        alert("Kya bby... ye to galat javaab dedia aapne firse koshish kro aap... muahhh!!!");
    }
}

function validatepwd(){
    var pwd = document.getElementById("pwd").value;
    if(pwd == "R1kiSwati"){
        alert("Aapko vo hug to physically mil hi gayi hogi sahi javaab ke uplaksh mai... But yaha ek tohfa hai aur... Jaan ne ke liye neeche dia gaya OK dabaye janeman...");
        window.location.replace("gift2.html");
    } else {
        alert("Kya bby... ye to galat javaab dedia aapne firse koshish kro aap... muahhh!!!");
    }
}

function validateans12(){
    var ans1 = document.getElementById("ans1").value;
    var ans2 = document.getElementById("ans2").value;
    if(ans1 == "Aarekh" && ans2 == "A"){
        alert("Sahi javaab aap jeet te hai ek aur tohfa!!! Dekhne ke liye neeche dia gaya OK dabaye...");
        window.location.replace("gift3.html");
    }
}

function validatefinal(){
    var ans1 = document.getElementById("ans1").value;
    var ans2 = document.getElementById("ans2").value;
    if(ans1 == "H&M+GREEN" && ans2 == "2018") {
        alert("Aapne final javaab bhi sahi dedia this shows how well you know me... Awwieee!!! Aapka final gift bhi de hi dete hai aapko fir... ye lijiye...");
        window.location.replace("gift4.html");
    }
}
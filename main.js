import {
    BASE_URL,
    USER_URL,    
    ID_URL,
    AVATAR_URL
} from "./api.js"







// CHANGE COLOR //




function randomColor () {
    
    return "#" + (Math.round(Math.random() * 0XFFFFFF)).toString(16);    
}

const color = document.querySelector("#card");

function changeColor () {
    color.style.borderColor = randomColor();
}

const btn = document.querySelector("#btn")
btn.addEventListener("click", changeColor)


// CONSUMING API // 



const btnUser = document.querySelector("#send");
btnUser.addEventListener('click', getUser);
btnUser.addEventListener('click', clearApi);




    function getUser(e) {  
        e.preventDefault();   
        
        let name = document.querySelector("#name");
        let valor = name.value;
    
        gitHubApi (valor);
    }

  
    function clearApi () {
        let texto = document.querySelector("#name");
        texto.value = '';

    }
    
    
    

// // API //




function gitHubApi (USER){

    const url = `${ID_URL}${USER}`
    
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        apih2.textContent = data.login;
        apiFollowers.textContent = data.followers;
        apiFollowing.textContent = data.following;
        publicRepos.textContent = data.public_repos;
        apiCompany.textContent = data.company;
        apiLocation.textContent = data.location;
        photo.src = data.avatar_url;
    
    })
    }


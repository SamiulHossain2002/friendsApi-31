function loadData(){
    fetch('https://randomuser.me/api/?results=25')
    .then(resp=>resp.json())
    .then(data =>getFriend(data))
}

function getFriend(friends){
    // console.log(friends.results);
    const allFriend= friends.results;

    const friendDiv = document.getElementById('div');

    
    for(const friend of allFriend ){
        console.log(friend);
        const div=document.createElement('div');
        div.classList.add('friend')

        div.innerHTML=`
                <h2>${friend.name.first} ${friend.name.last}</h2>
                <h3>from: ${friend?.location?.country}</h3>
                <h4>email: ${friend.email}</h4>
                <img  src="${friend.picture.large}" alt="img">
        
        `
        friendDiv.appendChild(div)

    }
}

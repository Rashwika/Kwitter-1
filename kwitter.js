function save_user(){
    username = document.getElementById("name").value;
    localStorage.setItem(username);
    window.location("kwitter_room.html");
}
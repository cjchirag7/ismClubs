const searchInput = document.getElementById("searchInput");
const searchResults = document.querySelector(".list-group");
searchInput.addEventListener("keyup", search);
function add(obj){
    const li = document.createElement('li');
    li.className = "list-group-item";
    searchResults.style.position="absolute";
    searchResults.style.zIndex = "1";
    searchResults.style.width="92.5%";
    const link = document.createElement('a');
    link.innerHTML = `Name : ${obj.field} <br> Type : ${obj.type} <br>Website : ${obj.Website} <br>`;
    li.appendChild(link);
    searchResults.appendChild(li);    
}
function search(e) {
    searchResults.innerHTML = "";
    const searchValue = e.target.value.toLowerCase();
    if(searchValue !== ""){
        data.forEach(function(item){
            if(item.field.toLowerCase().indexOf(searchValue)!== -1){
                add(item);                       
            }
        })
    }
    e.preventDefault();
}
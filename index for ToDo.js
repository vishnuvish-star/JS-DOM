const txtbox = document.getElementById(0);
const $todolist=document.getElementById("second id"); //parent

txtbox.addEventListener('keypress', (e) => {
    if (e.code === "Enter" && e.target.value !== "") {
        let todo = e.target.value;
        let $todoItem = document.createElement("li");
        let todoid= new Date().getDate();//ethu dynamic id creation kku use pantrom
        //child construction's
        $todoItem.innerHTML = ` 
         <input id="${todoid}" type="checkbox" />
        <label for="${todoid}">${todo}</label>`;//${todo}--6th line variable (dynamic value)
        

        $todolist.appendChild($todoItem);//add the child, Ethoda parent is *second id*
        txtbox.value="";//empty string to create for *textbox clearness*.      
      
      
    }

});
$todolist.addEventListener("click",(e) => {
    if(e.target.checked){
    e.target.parentElement.classList.add("finished");//style.textDecoration = "line-through";  // (text-decoration = textDecoration)*child la erumthu parent access pantrom*
    }else{
        e.target.parentElement.classList.remove("finished")//style.textDecoration="none";**OR** style(HTML style tag ) la class create panni atha enkha represent pannikkalam
    }
})
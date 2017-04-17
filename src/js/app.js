//import $ from "jquery";
import getUsers from "./Users";
let button=$(".btn"),
    container=$(".wynik");

button.on("click",function(){
    
var users=`${getUsers()[0]} <br> ${getUsers()[1]}`;
  
 container.append(users);
    button.attr("disabled", true);
    
});
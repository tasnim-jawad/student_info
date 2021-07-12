function info(f_name,l_name,father_name,mother_name,roll,level,address,mobile,){
    console.log(f_name);
    console.log(l_name);
    console.log(father_name);
    console.log(mother_name);
    console.log(roll);
    console.log(level);
    console.log(address);
    console.log(mobile);


    var node = document.createElement("td");                 
    var textnode = document.createTextNode(f_name);         
    node.appendChild(textnode);                              
    document.getElementById("myList").appendChild(node);

    var node = document.createElement("td");                 
    var textnode = document.createTextNode(l_name);         
    node.appendChild(textnode);                              
    document.getElementById("myList").appendChild(node);

    var node = document.createElement("td");                 
    var textnode = document.createTextNode(father_name);         
    node.appendChild(textnode);                              
    document.getElementById("myList").appendChild(node);

    var node = document.createElement("td");                 
    var textnode = document.createTextNode(mother_name);         
    node.appendChild(textnode);                              
    document.getElementById("myList").appendChild(node);

    var node = document.createElement("td");                 
    var textnode = document.createTextNode(roll);         
    node.appendChild(textnode);                              
    document.getElementById("myList").appendChild(node);

    var node = document.createElement("td");                 
    var textnode = document.createTextNode(level);         
    node.appendChild(textnode);                              
    document.getElementById("myList").appendChild(node);

    var node = document.createElement("td");                 
    var textnode = document.createTextNode(address);         
    node.appendChild(textnode);                              
    document.getElementById("myList").appendChild(node);

    var node = document.createElement("td");                 
    var textnode = document.createTextNode(mobile);         
    node.appendChild(textnode);                              
    document.getElementById("myList").appendChild(node);
}

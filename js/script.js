// business logic
function AddressBook(firstName,lastName,location,contacts){
    this.firstName = firstName;
    this.lastName = lastName;
    this.location = location;
    this.contacts = contacts;
}
AddressBook.prototype.fullName = function(){
    return this.firstName + " " + this.lastName
}



//userinterface logic
let form = document.getElementById("addForm");

//add eventlistener
form.addEventListener("submit",addContact);

function addContact(e){
    e.preventDefault()
    let name1 = document.getElementById("firstname").value;
    let name2 = document.getElementById("secondname").value;
    let local = document.getElementById("location").value;
    let contactDetails = document.getElementById("contacts").value;
    let addressItems = document.getElementById("show-contacts")
    
    let address = new AddressBook(name1,name2,local,contactDetails);
    console.log(address.fullName())
    //create cards
    let div = document.createElement("div");
    div.className = "card mt-4 pt-4";
    div.style.width = "18rem";
    //create image element and placeholder
    let img = document.createElement("img");
    img.className = "img-fluid card-img-top";
    img.src =
      "https://unsplash.com/photos/rvg-a_hqiF4/download?force=true&w=640";
    img.alt="placeholder";
    div.appendChild(img);
    
    //create cardbody
    let cardbody = document.createElement("div");
    cardbody.className = "card-body";
    let h5 = document.createElement("h5");

    let span1 = document.createElement("span");
    span1.className = 'me-3'
    span1.appendChild(document.createTextNode("Name"));
    h5.appendChild(span1);

    //span element for the name of the contact

    let span2 = document.createElement("span");
    span2.appendChild(document.createTextNode(address.fullName()));
    h5.appendChild(span2);
    
    cardbody.appendChild(h5);
    

    //phone icon 
    let p1 = document.createElement("p");
    let span3 = document.createElement("span");
    span3.className = "me-5"
    let i = document.createElement("i");
    i.className = "fas fa-phone-alt";
    span3.appendChild(i);

    let span4 = document.createElement("span")
    span4.appendChild(document.createTextNode(address.contacts))
    console.log(span4)
    
    p1.appendChild(span3);
    p1.appendChild(span4);
    cardbody.appendChild(p1);
    
    //location
    let p2 = document.createElement("p");
    let span5 = document.createElement("span");
    span5.className = "me-5";
    let locationI = document.createElement("i");
    locationI.className = "fas fa-map-marker-alt";
    span5.appendChild(locationI);
    let span6 = document.createElement("span");
    span6.appendChild(document.createTextNode(address.location))
    p2.appendChild(span5);
    p2.appendChild(span6);
    cardbody.appendChild(p2);
    console.log(cardbody)


    
    

    
    div.appendChild(cardbody)
    addressItems.appendChild(div);
    
    console.log(addressItems)

    
}
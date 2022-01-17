let dataFromJSON = JSON.parse(jsonDataRestaurant)


let contentString = ""

contentString += "<table>"
contentString += "<tr>"
contentString += "<th>DishID</th>"
contentString += "<th>DishName</th>"
contentString += "<th>RecipeChef</th>"
contentString += "<th>PrepTimeMinutes</th>"
contentString += "<th>Price</th>"
contentString += "<th>CurrentAvailability</th>"
contentString += "</tr>"

for(let i=0; i<dataFromJSON.length; i++){

contentString += "<tr>"
contentString += "<td>" + dataFromJSON[i].DishID + "</td>"
contentString += "<td>" + dataFromJSON[i].DishName + "</td>"
contentString += "<td>" + dataFromJSON[i].RecipeChef + "</td>"
contentString += "<td>" + dataFromJSON[i].PrepTimeMinutes + "</td>"
contentString += "<td>" + dataFromJSON[i].Price + "</td>"
contentString += "<td>" + dataFromJSON[i].CurrentAvailability + "</td>" 
contentString += "</tr>"
}

contentString += "</table>"

let contentDiv = document.getElementById("content-div")
contentDiv.innerHTML = contentString

// This feature is implemented so that the desired function gets implemented when button is clicked
document.getElementById("search-btn").addEventListener("click", myFunction);


// On click of button the function gets called and the data gets filter 
function myFunction() {

    let filter = document.getElementById("search-input").value;

    let searchEngine ="";

        
    searchEngine += "<table>"
    searchEngine += "<tr>"
    searchEngine += "<th>DishID</th>"
    searchEngine += "<th>DishName</th>"
    searchEngine += "<th>RecipeChef</th>"
    searchEngine += "<th>PrepTimeMinutes</th>"
    searchEngine += "<th>Price</th>"
    searchEngine += "<th>CurrentAvailability</th>"
    searchEngine += "</tr>"

    for(let i=0; i<dataFromJSON.length; i++){

        let x = dataFromJSON[i].DishID;

        // Check condition if user input is found in the data or not
        if(filter == x.substring(0,filter.length) || (filter == x)){

            searchEngine += "<tr>"
            searchEngine += "<td>" + dataFromJSON[i].DishID + "</td>"
            searchEngine += "<td>" + dataFromJSON[i].DishName + "</td>"
            searchEngine += "<td>" + dataFromJSON[i].RecipeChef + "</td>"
            searchEngine += "<td>" + dataFromJSON[i].PrepTimeMinutes + "</td>"
            searchEngine += "<td>" + dataFromJSON[i].Price + "</td>"
            searchEngine += "<td>" + dataFromJSON[i].CurrentAvailability + "</td>" 
            searchEngine += "</tr>"
            
        }   
              
    }
    searchEngine += "</table>"

    let content = document.getElementById("content-div") 
    content.innerHTML = searchEngine; 
    

}






let vacationType = prompt("Welcome! What type of trip would you like to go on? Musical, Tropical, Adventurous? Lowercase please.")
while (vacationType !== "tropical" && vacationType !== "musical" && vacationType !== "adventurous" ) 
{
    alert("Please try again with the required choices.");
    vacationType = prompt("Welcome! What type of trip would you like to go on? Musical, tropical, adventurous? Lowercase please.");
}
switch(vacationType){
    case "musical":
    alert ("Musical is a solid choice.")
    break;
    case "tropical":
    alert ("Tropical! Would love to catch some rays.")
    break;
    case "adventurous":
    alert("Let's seek adventure!")
    break;
}
let groupSize = prompt("How many in in the group?"); 

let travelSuggestOne = "First Class";
let travelSuggestTwo = "Helicopter";
let travelSuggestThree = "Charter Flight";

let travelDestinationOne = "New Orleans with your friends.";
let travelDestinationTwo = "whitewater rafting at the Grand Canyon.";
let travelDestinationThree = "Mexico.";

let result = `${groupSize} people, sounds like a fun time for a ${vacationType} trip. Take the ${travelSuggestOne} to `;

//Musical
if(groupSize <= 2 && vacationType === "musical"){
    result = `${groupSize} people, sounds like a fun time for a ${vacationType} trip. Take the ${travelSuggestOne} to `;
    console.log(result.concat(travelDestinationOne));
}
else if(groupSize >=3 && groupSize <=5 && vacationType === "musical"){
    result = `${groupSize} people, sounds like a fun time for a ${vacationType} trip. Take the ${travelSuggestTwo} to `;
    console.log(result.concat(travelDestinationOne));
}
else if(groupSize >=6 && vacationType === "musical"){
    result = `${groupSize} people, sounds like a fun time for a ${vacationType} trip. Take the ${travelSuggestThree} to `;
    console.log(result.concat(travelDestinationOne));
}
//Adventure
else if(groupSize <= 2 && vacationType === "adventurous"){
     result = `${groupSize} people, sounds like a fun time for an ${vacationType} trip. Take the ${travelSuggestOne} to go `;
     console.log(result.concat(travelDestinationTwo));
}
else if(groupSize >=3 && groupSize <=5 && vacationType === "adventurous"){
     result = `${groupSize} people, sounds like a fun time for an ${vacationType} trip. Take the ${travelSuggestTwo} to go `;
     console.log(result.concat(travelDestinationTwo));
}
else if(groupSize >=6 && vacationType === "adventurous"){
     result = `${groupSize} people, sounds like a fun time for an ${vacationType} trip. Take the ${travelSuggestThree} to go `;
     console.log(result.concat(travelDestinationTwo));
}
//Tropical
else if(groupSize <= 2 && vacationType === "tropical"){
     result = `${groupSize} people, sounds like a fun time for a ${vacationType} trip. Take the ${travelSuggestOne} to go to `;
     console.log(result.concat(travelDestinationThree));
}
else if(groupSize >=3 && groupSize <=5 && vacationType === "tropical"){
     result = `${groupSize} people, sounds like a fun time for a ${vacationType} trip. Take the ${travelSuggestTwo} to go to `;
     console.log(result.concat(travelDestinationThree));
 }
else if(groupSize >=6 && vacationType === "tropical"){
     result = `${groupSize} people, sounds like a fun time for a ${vacationType} trip. Take the ${travelSuggestThree} to go to `;
     console.log(result.concat(travelDestinationThree));
    }
else{
    result = "Not correct input. Please try again.";
    alert(result);
    console.log(result);
    }






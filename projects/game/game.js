    


    

    function start(){
        print("Welcome to find the key");
        print("type start..");
        waitForInput(processInput);

        function processInput(input){
            if (input.toLowerCase() === "start") {
                Hallway();
        }
    }
}

    

  
    
    

function Hallway(){
   clear();
    drawMap();
    print("you are in the the hallway");
    print("there is nothing in the hallway!");
    print("which room would you like to go too");
    print("1. Door");
    print("2. Kitchen");
    print("3. Bedroom");
    print("4. Living");

    function processInput(input){
        if (input.toLowerCase() === "door") {
            Door();
        } else if (input.toLowerCase() === "kitchen") {
            Kitchen();
        } else if (input.toLowerCase() === "bedroom") {
            Bedroom();
        } else if (input.toLowerCase() === "living") {
            Living();
        } else {

    }


        waitForInput(processInput);
    }
}
 



function Bedroom(){
    console.log("You are in the Bedroom");
}
function Kitchen(){
    console.log("You are in the Kitchen");

}
function Living(){
    console.log("You are in the Living room");
}
function Bathroom(){
    console.log("You are in the Bathroom");
}
function Door(){
    if(keyDiscovered == false){
        print("You do not have the key, go find it !");
        Hallway();
    }else{
        ("You have escaped the house ")
    }
}

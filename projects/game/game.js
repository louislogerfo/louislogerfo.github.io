    


    

    function start(){
        print("Welcome to find the key");
        print("type anything to start..");
        waitForInput(processInput);
    }

    function waitForInput(callback){
        function handleKeyPress(event){
            document.removeEventListener("keydown", handleKeyPress);
            callback(event.key);
        }
        document.addEventListener("keydown", handleKeyPress);
    }

    function processInput(input){
        Hallway();

    }
    
    

function Hallway(){
   clear();
    drawMap();
    print("you are in the the hallway");
    print("there is nothing in the hallway!");
    print("which room would you like to go too");
    print("1. Door")
    print("2. Kitchen")
    print("3. Bedroom")
    print("4. Living room")

    function processInput(input){
        if (input == 1){
        Kitchen()
    }
    
    }
}


function Bedroom(){
    print("You are in the Bedroom")
}
function Kitchen(){
    print("You are in the Kitchen")

}
function Living(){
    print("You are in the Living room")
}
function Bathroom(){
    print("You are in the Bathroom")
}


    


    

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
}



function Bedroom(){

}
function Kitchen(){

}
function Living(){

}
function Bathroom(){

}


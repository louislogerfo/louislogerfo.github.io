
    let keyInHand = false;
    let bookshelfDiscovered = false;





    let gameActive = true;
    let inHallway = true;
    let inKitchen = false;
    let inBedroom = false;
    let keyDiscovered = false;
    let inBathroom = false;
    let inLiving = false;
    let shelDiscovered = false;
    let boxDiscovered = false;
    let doorOpen = false;
    let gameStart = true;
   
    
    
    function drawMap(){
        let map = ``;
    
        if(gameStart && inHallway == true){
            map += `
                         --------- 
                        | kitchen |
                         ---------
                             |   
            ------      -----------     -------------
           | Door | -   | Hallway |  - | Living room |
            ------      -----------     -------------
                             |        
                         -----------
                         | Bedroom |
                         -----------
                             |
                        -----------
                        | Bathroom |
                        -----------



                                          | `
       }
        if(inKitchen == true){
            map += `
                        --------
                       | Kitchen |
                        ---------
                            |
                       -----------     
                       | Hallway  |   
                       -----------      
                               `;
        }
         if(inLiving == true){
            map += `
                         -----------    ------------
                         | Hallway | - | Living Room |
                         -----------    ------------
                               |`;
         }
         if(inBedroom == true){
            map += `
                           -----------    
                           | Hallway |
                           ----------- 
                                |
                            -----------    
                            | Bedroom  |
                            -----------    
                                |
                            -----------
                            | Bathroom |
                            -----------    
                               `;
        }
        if(inBathroom == true){
            map += `

                            --------
                           | Bedroom |
                            --------
                                |
                           -----------
                           | Bathroom |
                           -----------
                               `;
        }
      
        printAscii(map);
    }
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
        input = input.toLowerCase

        if (input.toLowerCase() === "door") {
            Door();
        } else if (input.toLowerCase() === "kitchen") {
            Kitchen();
        } else if (input.toLowerCase() === "bedroom") {
            Bedroom();
        } else if (input.toLowerCase() === "living") {
            Living();
        } else {
        stayHere();
        waitThenCall(hallway);
    }

    }
    waitForInput(processInput);
}
 



function Bedroom(){
    
        clear();
        goToBedroom();
         drawMap();
         print("you are in the the bedroom");
         print("There is an unmade bed and a doorway to the bathroom.");
         print("What would you like to do?");
         print("Bathroom");
         print("search bed");
         print("hallway");
         
     
         function processInput(input){
             input = input.toLowerCase
     
             if (input.toLowerCase() === "search bed") {
                 print("You search the bed.")
                 print("Only find dusty blankets and a torn pillow")
                 print("Type Bathroom or Hallway")
                 waitForInput(function(nextInput){
                    nextInput = nextInput.toLowerCase();
                    if(nextInput === "bathroom") {
                        bathroom();
                    }
                 } else if (nextInput === "hallway"){
                    hallway();
                 } else {
                    stayHere();
                    waitThenCall(bedroom);
                
                 });
             } else if (input.toLowerCase() === "hallway") {
                 hallway();
             } else {
             stayHere();
             waitThenCall(bedroom);
         }
     
         }
         waitForInput(processInput);
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
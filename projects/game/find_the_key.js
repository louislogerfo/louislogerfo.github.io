
    let keyInHand = false;
    let bookshelfDiscovered = false;


    let day = 0;
    let minutes = 0;


    let gameActive = true;
    let inHallway = true;
    let inKitchen = false;
    let inBedroom = false;
    let keyDicovered = false;
    let inBathroom = false;
    let inLiving = false;
    let shelDiscovered = false;
    let boxDiscovered = false;
    let doorOpen = false;
    let gameStart = true;
   
    
    
    function drawMap(){
        let map = ``;
    
        if(gameStart && inHallway = true){
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



                                          | ;
       ` `}`
        if(inKitchen = true){
            map += `
                        --------
                       | Kitchen |
                        ---------
                            |
                       -----------     
                       | Hallway  |   
                       -----------      
                               `;
        }else if(inLiving = true){
            map += `
                         -----------    ------------
                         | Hallway | - | Living Room |
                         -----------    ------------
                               |`;
        }else if(inBedroom = true){
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
        }else{
            map += `
                           -----------
                           | Hallway |
                           -----------
                               |`;
        }
        map += `
                          -----------
                          | Bedroom |
                          -----------`;
        
        if(BathroomDiscovered && rm511Discovered && bathroomDiscovered){
            map += `
                               |
            ---------    ------------    ------------
            | rm511 |----| Portable |----| Bathroom |
            ---------    ------------    ------------`
        }else if(portableDiscovered && rm511Discovered){
            map += `
                               |
            ---------    ------------
            | rm511 |----| Portable |
            ---------    ------------`
    
        }else if(portableDiscovered && bathroomDiscovered){
            map += `
                               |
                         ------------    ------------
                         | Portable |----| Bathroom |
                         ------------    ------------`
        }else if(portableDiscovered){
            map += `
                               |
                         ------------
                         | Portable |
                         ------------`
        }

    function Hallway(){}

    function Livingroom(){}
    

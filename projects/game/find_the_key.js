
    let keyInHand = false;
    let bookshelfDiscovered = false;





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

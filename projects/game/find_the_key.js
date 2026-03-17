// =========================
// GLOBAL VARIABLES
// =========================
let gameActive = true;
let gameStart = true;

let inHallway = true;
let inKitchen = false;
let inBedroom = false;
let inBathroom = false;
let inLiving = false;

let bookshelfDiscovered = false;
let boxDiscovered = false;
let noteRead = false;
let rugDiscovered = false;

let keyInHand = false;
let doorOpen = false;


// =========================
// MAP
// =========================
function drawMap() {
    let map = ``;

    if (inHallway) {
        map += `
                         ---------
                        | Kitchen |
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
                        -----------`;
    }

    if (inKitchen) {
        map += `
                        ---------
                        | Kitchen |
                        ---------
                            |
                       -----------
                       | Hallway |
                       -----------`;
    }

    if (inLiving) {
        map += `
                       -----------     -------------
                      | Hallway  |  -  | Living room |
                       -----------     -------------`;
    }

    if (inBedroom) {
        map += `
                           -----------
                           | Hallway |
                           -----------
                                |
                            -----------
                            | Bedroom |
                            -----------
                                |
                            -----------
                            | Bathroom |
                            -----------`;
    }

    if (inBathroom) {
        map += `
                            -----------
                            | Bedroom |
                            -----------
                                |
                            -----------
                            | Bathroom |
                            -----------`;
    }

    printAscii(map);
}


// =========================
// HELPERS
// =========================
// =========================
// START
// =========================
function start() {
    clear();
    goToHallway();
    print("You wake up inside a strange house.");
    print("You are standing in the hallway.");
    print("Find the key and unlock the front door.");
    drawMap();

    print("\nWhere would you like to go?");
    print("kitchen");
    print("living room");
    print("bedroom");
    print("door");

    function processInput(input) {
        input = input.toLowerCase();

        if (input === "kitchen") {
            kitchen();
        } else if (input === "living room" || input === "living") {
            livingRoom();
        } else if (input === "bedroom") {
            bedroom();
        } else if (input === "door") {
            frontDoor();
        } else {
            stayHere();
            waitThenCall(start);
        }
    }

    waitForInput(processInput);
}


// =========================
// HALLWAY
// =========================
function hallway() {
    clear();
    goToHallway();
    drawMap();

    print("\nYou are in the hallway.");
    print("The front door is locked.");
    print("\nWhere would you like to go?");
    print("kitchen");
    print("living room");
    print("bedroom");
    print("door");

    function processInput(input) {
        input = input.toLowerCase();

        if (input === "kitchen") {
            kitchen();
        } else if (input === "living room" || input === "living") {
            livingRoom();
        } else if (input === "bedroom") {
            bedroom();
        } else if (input === "door") {
            frontDoor();
        } else {
            stayHere();
            waitThenCall(hallway);
        }
    }

    waitForInput(processInput);
}


// =========================
// KITCHEN
// =========================
function kitchen() {
    clear();
    goToKitchen();
    drawMap();

    print("\nYou are in the kitchen.");
    print("There are dusty cabinets and an empty sink.");
    print("Nothing here seems useful.");

    print("\nWhat would you like to do?");
    print("search cabinets");
    print("hallway");

    function processInput(input) {
        input = input.toLowerCase();

        if (input === "search cabinets") {
            print("\nYou search the cabinets.");
            print("There are chipped plates and stale crackers, but no key.");
            print("\nType hallway to go back.");
            waitForInput(function(nextInput) {
                if (nextInput.toLowerCase() === "hallway") {
                    hallway();
                } else {
                    stayHere();
                    waitThenCall(kitchen);
                }
            });
        } else if (input === "hallway") {
            hallway();
        } else {
            stayHere();
            waitThenCall(kitchen);
        }
    }

    waitForInput(processInput);
}


// =========================
// LIVING ROOM
// =========================
function livingRoom() {
    clear();
    goToLiving();
    drawMap();

    print("\nYou are in the living room.");
    print("There is an old couch and a tall bookshelf.");

    if (!bookshelfDiscovered) {
        print("\nWhat would you like to do?");
        print("inspect bookshelf");
        print("hallway");
    } else if (!boxDiscovered) {
        print("\nWhat would you like to do?");
        print("inspect bookshelf");
        print("hallway");
    } else if (!noteRead) {
        print("\nWhat would you like to do?");
        print("open box");
        print("hallway");
    } else {
        print("\nWhat would you like to do?");
        print("inspect bookshelf");
        print("hallway");
    }

    function processInput(input) {
        input = input.toLowerCase();

        if (input === "inspect bookshelf") {
            if (!bookshelfDiscovered) {
                bookshelfDiscovered = true;
                print("\nYou inspect the bookshelf.");
                print("Behind a row of books, you find a small box.");
                boxDiscovered = true;
                print("\nType open box or hallway.");
            } else if (boxDiscovered && !noteRead) {
                print("\nThe small box is still there on the bookshelf.");
                print("\nType open box or hallway.");
            } else {
                print("\nYou already searched the bookshelf.");
                print("There is nothing else useful there.");
                print("\nType hallway.");
            }

            waitForInput(function(nextInput) {
                nextInput = nextInput.toLowerCase();

                if (nextInput === "open box") {
                    openBox();
                } else if (nextInput === "hallway") {
                    hallway();
                } else {
                    stayHere();
                    waitThenCall(livingRoom);
                }
            });

        } else if (input === "open box") {
            openBox();
        } else if (input === "hallway") {
            hallway();
        } else {
            stayHere();
            waitThenCall(livingRoom);
        }
    }

    waitForInput(processInput);
}

function openBox() {
    clear();
    goToLiving();
    drawMap();

    if (!boxDiscovered) {
        print("\nThere is no box here.");
        print("\nType hallway.");
        waitForInput(function(input) {
            if (input.toLowerCase() === "hallway") {
                hallway();
            } else {
                stayHere();
                waitThenCall(livingRoom);
            }
        });
        return;
    }

    if (!noteRead) {
        noteRead = true;
        print("\nYou open the box.");
        print("Inside is a folded note.");
        print('\nThe note says: "The key is in the bathroom, under the rug."');
        print("\nNow you know where to look.");
        print("\nType hallway or bedroom.");
    } else {
        print("\nThe box is empty except for the note.");
        print('\nIt still says: "The key is in the bathroom, under the rug."');
        print("\nType hallway or bedroom.");
    }

    waitForInput(function(input) {
        input = input.toLowerCase();

        if (input === "hallway") {
            hallway();
        } else if (input === "bedroom") {
            bedroom();
        } else {
            stayHere();
            waitThenCall(livingRoom);
        }
    });
}


// =========================
// BEDROOM
// =========================
function bedroom() {
    clear();
    goToBedroom();
    drawMap();

    print("\nYou are in the bedroom.");
    print("There is an unmade bed and a doorway to the bathroom.");

    print("\nWhat would you like to do?");
    print("bathroom");
    print("search bed");
    print("hallway");

    function processInput(input) {
        input = input.toLowerCase();

        if (input === "bathroom") {
            bathroom();
        } else if (input === "search bed") {
            print("\nYou search the bed.");
            print("Only dusty blankets and a broken pillow.");
            print("\nType bathroom or hallway.");
            waitForInput(function(nextInput) {
                nextInput = nextInput.toLowerCase();

                if (nextInput === "bathroom") {
                    bathroom();
                } else if (nextInput === "hallway") {
                    hallway();
                } else {
                    stayHere();
                    waitThenCall(bedroom);
                }
            });
        } else if (input === "hallway") {
            hallway();
        } else {
            stayHere();
            waitThenCall(bedroom);
        }
    }

    waitForInput(processInput);
}


// =========================
// BATHROOM
// =========================
function bathroom() {
    clear();
    goToBathroom();
    drawMap();

    print("\nYou are in the bathroom.");
    print("There is a sink, a cracked mirror, and a small rug on the floor.");

    if (!keyInHand) {
        print("\nWhat would you like to do?");
        print("look under rug");
        print("look mirror");
        print("bedroom");
    } else {
        print("\nWhat would you like to do?");
        print("look mirror");
        print("bedroom");
    }

    function processInput(input) {
        input = input.toLowerCase();

        if (input === "look under rug" && !keyInHand) {
            print("\nYou lift the rug.");
            print("There is a small metal key underneath.");
            print("You pick up the key.");
            keyInHand = true;
            rugDiscovered = true;
            print("\nType bedroom to go back.");
            waitForInput(function(nextInput) {
                if (nextInput.toLowerCase() === "bedroom") {
                    bedroom();
                } else {
                    stayHere();
                    waitThenCall(bathroom);
                }
            });
        } else if (input === "look mirror") {
            print("\nYour reflection stares back at you.");
            print("You look tired, but at least you're getting closer.");
            print("\nType bedroom.");
            waitForInput(function(nextInput) {
                if (nextInput.toLowerCase() === "bedroom") {
                    bedroom();
                } else {
                    stayHere();
                    waitThenCall(bathroom);
                }
            });
        } else if (input === "bedroom") {
            bedroom();
        } else {
            stayHere();
            waitThenCall(bathroom);
        }
    }

    waitForInput(processInput);
}


// =========================
// DOOR
// =========================
function frontDoor() {
    clear();
    goToHallway();
    drawMap();

    print("\nYou stand in front of the door.");

    if (!keyInHand) {
        print("It is locked.");
        print("You need to find the key first.");
        print("\nType hallway.");
        waitForInput(function(input) {
            if (input.toLowerCase() === "hallway") {
                hallway();
            } else {
                stayHere();
                waitThenCall(frontDoor);
            }
        });
        return;
    }

    print("You Win.");
}


// =========================
// BEGIN GAME
// =========================
start();
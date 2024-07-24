const list = [];
let deletedItem;
let input = prompt("Type enter,to use the Todo list");

if (input == "enter") {
    while (input !== "quit") {
        input = prompt("What would you like to do (use commands: new,delete,list,quit");
        if (input == "new") {
            input = prompt("Add a to do: ")
            list.push(input);
            console.log("Activity has been added to the list")

        }


        else if (input == "list") {
            console.log("List of activities : ")
            for (let i = 0; i < list.length; i++) {
                console.log(` ${i}: ` + list[i]);
            }


        }

        else if (input == "delete") {
            input = prompt("Enter the index of the activity you would like to delete");
            deletedItem = input;
            list.splice(deletedItem, 1);
            console.log("Activity has been removed")


        }
        else if (input == "quit") {
            console.log("Ok you quit the app")
            break;
        }
    }
}
//This might seem similar to the code above,but it was added in the situation,where the user enters something else besides "enter",that way we can prompt the user over and over
//to write "enter" before getting access to the Todo list.
else {
    while (input !== "enter") {
        if (input == "quit") {
            console.log("Ok you quit the app")
            break;
        }
        input = prompt("Wrong command,type enter to use the Todo list")
    }
    if (input == "enter") {
        while (input !== "quit") {
            input = prompt("What would you like to do (use commands: new,delete,list,quit)");
            if (input == "new") {
                input = prompt("Add a to do: ")
                list.push(input);
                console.log("Activity has been added to the list")

            }


            else if (input == "list") {
                console.log("List of activities : ")
                for (let i = 0; i < list.length; i++) {
                    console.log(` ${i}: ` + list[i]);
                }


            }

            else if (input == "delete") {
                input = prompt("Enter the index of the activity you would like to delete");
                deletedItem = input;
                list.splice(deletedItem, 1);
                console.log("Activity has been removed")


            }
            else if (input == "quit") {
                console.log("Ok you quit the app")
                break;
            }
        }


    }
}
// alert("Hello , this is a test");

//Get the Choices from the user
var firstChoice = prompt("Enter your first Choice : ");
var secondChoice = prompt("Enter your Second Choice : ");

//On Load/Reload this window , execute the randomChoice Func.
onload(this.window , randomChoice())


/* Working but short code */
function randomChoice(){
    //Generating numbers for choice 1 & 2 and setting images accordingly
    randomNumber1 = (Math.floor(Math.random() * 6)  +1) ;
    randomNumber2 = (Math.floor(Math.random() * 6)  +1) ;
    var img1 = "images/dice" +randomNumber1 +".png";
    var img2 = "images/dice" +randomNumber2 +".png";

    //Changing the images
    //img-1
    document.querySelectorAll("img")[0].setAttribute("src",img1);
    //img-2
    document.querySelectorAll("img")[1].setAttribute("src",img2);


    //Changing the Heading Text to the winner
    if(randomNumber1 > randomNumber2)
    {
        document.querySelector("h1").innerHTML = firstChoice + " is the chosen!";
    }
    else if(randomNumber1 < randomNumber2)
    {
        document.querySelector("h1").innerHTML = secondChoice + " is the chosen!";
    }
    else
    {
        document.querySelector("h1").innerHTML = "Oh Snap! It's a Draw , try again...";
    }



}

/* working but long code
function randomChoice()
{
    //Generating Random numbers + rounding it up and adding 1
    //so we don't get value of zero 
    var n1 = Math.random() * 6;
    var n2 = Math.random() * 6;
    n1 = Math.floor(n1) + 1;
    n2 = Math.floor(n2) + 1;

    // alert(n1);
    // alert(n2);

    //Win conditions
    if(n1==n2)
    {
        document.querySelector("h1").innerHTML = "Oh Snap! It's A Draw! Try Again..."
    }
    else if(n1>n2)
    {
        document.querySelector("h1").innerHTML = firstChoice + " is the Chosen one!";
    }
    else
    {
        document.querySelector("h1").innerHTML = secondChoice + " is the Chosen one!";
    }

    //Changing the dice images
    switch(n1)
    {
        case 1:
            document.querySelector(".img1").setAttribute("src" , "images/dice1.png");
            break;

        case 2:
            document.querySelector(".img1").setAttribute("src" , "images/dice2.png");
            break;

        case 3:
            document.querySelector(".img1").setAttribute("src" , "images/dice3.png");
            break;

        case 4:
            document.querySelector(".img1").setAttribute("src" , "images/dice4.png");
            break;

        case 5:
            document.querySelector(".img1").setAttribute("src" , "images/dice5.png");
            break;

        case 6:
            document.querySelector(".img1").setAttribute("src" , "images/dice6.png");
            break;
            
    }

    switch(n2)
    {
        case 1:
            document.querySelector(".img2").setAttribute("src" , "images/dice1.png");
            break;

        case 2:
            document.querySelector(".img2").setAttribute("src" , "images/dice2.png");
            break;

        case 3:
            document.querySelector(".img2").setAttribute("src" , "images/dice3.png");
            break;

        case 4:
            document.querySelector(".img2").setAttribute("src" , "images/dice4.png");
            break;

        case 5:
            document.querySelector(".img2").setAttribute("src" , "images/dice5.png");
            break;

        case 6:
            document.querySelector(".img2").setAttribute("src" , "images/dice6.png");
            break;
            
    }

}
*/



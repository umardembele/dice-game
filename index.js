

//player one random number generator
var player1 =Math.random() ;
    player1 *=7;
    player1 = Math.floor(player1)+1;

//player2 two random number generator
var player2 = Math.random();
    player2 *=7;
    player2 = Math.floor(player2)+1;


//array of images 
var arrayOfImages = [];
 arrayOfImages.push('images/dice1.png','images/dice2.png','images/dice3.png','images/dice4.png','images/dice5.png','images/dice6.png',);
  
/*this a variable that decide whether random
 generated is equal to a number btw 1-6*/
 
var num = [1,2,3,4,5,6];



    //lopp that will check 
    for(var  i = 0;i<6;i++)
    {
        if(player1===num[i])
        {
        var change = document.getElementsByClassName("img1");
        change[0].setAttribute("src",arrayOfImages[i]);
        
        }

        
    }



    for(var  i = 0;i<6;i++)
    {
        if(player2===num[i])
        {
            var change = document.getElementsByClassName("img2");
            change[0].setAttribute("src",arrayOfImages[i]);
            

     
        }

    }




if(player1 === player2)
{
    document.querySelector("h1").innerHTML = "DRAW";
}
else if(player1 > player2)
{
    document.querySelector("h1").innerHTML = "Player1 Won";
}
else 
{
    document.querySelector("h1").innerHTML = "Player2 Won";
}

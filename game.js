let sccore=0; /**/
let ccomp=0;/**/
const Body = document.querySelector(".body");/**/
const Name = document.querySelector(".you");/**/
const Rock = document.querySelector(".rock");/**/
const Paper = document.querySelector(".paper");/**/ 
const Scissor = document.querySelector(".scissor");
const result = document.querySelector(".result");
const yourscore = document.querySelector(".your_score");
const compscore = document.querySelector(".comp_score");


function AI ()
{
    const AI = (Math.floor(Math.random() * 3) + 1);
    return AI;
};

username = prompt("Please Enter your Name");
Name.innerText = username;

        Rock.addEventListener("click" , () => 
        {
             if ( AI() == 2)
             {
                 sccore =  sccore + 1;
                 yourscore.innerText = sccore;
                 compscore.innerText = ccomp;
                 result.style.background = "green";
                 result.textContent = "You Won" ;
                     
            }
            else if (AI() == 1)
            {
                yourscore.innerText = sccore;
                compscore.innerText = ccomp;
                 result.style.background = "yellow";
                 result.textContent = "The game is drawn" ;
            }
            else if (AI() == 3)
            {
                ccomp = ccomp + 1;
                yourscore.innerText = sccore;
                compscore.innerText = ccomp;
                result.style.background = "red";
                result.textContent = "AI won the game. Try again!" ;
            }  ;
            
        }
        );

Paper.addEventListener("click" , () => 
        {   
            if ( AI() == 1)
            {
                sccore =  sccore + 1;
                yourscore.innerText = sccore;
                compscore.innerText = ccomp;
                result.style.background = "green";
                result.textContent = "You Won" ;
            }
            else if (AI() == 2)
            {
                yourscore.innerText = sccore;
                compscore.innerText = ccomp;
                result.style.background = "yellow";
                result.textContent = "The game is drawn" ;
            }
            else if (AI() == 3)
            {
                ccomp = ccomp + 1;
                yourscore.innerText = sccore;
                compscore.innerText = ccomp;
                result.style.background = "red";
                result.textContent = "AI won the game. Try again!" ;
            };
            
        }
        );        

    Scissor.addEventListener("click" , () => 
        {

            if ( AI() == 2)
            {
                sccore =  sccore + 1;
                yourscore.innerText = sccore;
                compscore.innerText = ccomp;
                result.style.background = "green";
                result.textContent = "You Won" ;
            }
            else if (AI() == 3)
            {
                yourscore.innerText = sccore;
                compscore.innerText = ccomp;
                result.style.background = "yellow";
                result.textContent = "The game is drawn" ;
            }
            else if (AI() == 1)
            {
                ccomp = ccomp + 1;
                yourscore.innerText = sccore;
                compscore.innerText = ccomp;
                result.style.background = "red";
                result.textContent = "AI won the game. Try again!" ;
            };
            
        }
        );
    
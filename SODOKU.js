//SODOKU & SOLUTION
const easy = [
    "6------7------5-2------1---362----81--96-----71--9-4-5-2---651---78----345-------",
    "685329174971485326234761859362574981549618732718293465823946517197852643456137298"
  ];
  const medium = [
    "--9-------4----6-758-31----15--4-36-------4-8----9-------75----3-------1--2--3--",
    "619472583243985617587316924158247369926531478734698152891754236365829741472163895"
  ];
  const hard = [
    "-1-5-------97-42----5----7-5---3---7-6--2-41---8--5---1-4------2-3-----9-7----8--",
    "712583694639714258845269173521436987367928415498175326184697532253841769976352841"
  ];
 //DOM Elements
var title = document.querySelector('.Title');
var Easy = document.querySelector('#Easy');
var Meduim = document.querySelector('#Meduim');
var Difficult = document.querySelector('#Difficult'); 
var Min5 = document.querySelector('#Min5');
var Min8 = document.querySelector('#Min8'); 
var Min11 = document.querySelector('#Min11'); 
var Timer = document.querySelector('.Timer');
var Normal = document.querySelector('#Normal'); 
var MultiColors = document.querySelector('#MultiColors'); 
var Dark = document.querySelector('#Dark');
var Game = document.querySelector('.Game');
var butt = document.querySelector('.Button');
var Drag = document.querySelectorAll('.Number');
var box = document.querySelectorAll('.inp');
var bod = document.querySelector('Body');
var check = document.querySelector('.Verify')
var won = document.querySelector('.won')
var lost = document.querySelector('.lost')
var diff = document.querySelector('.Diff')
var time = document.querySelector('.Time')
var mode = document.querySelector('.Mode')
var sodoku = document.querySelectorAll('table input')
var timegame = document.querySelector('.Time_Tenta')
//TITLE
var change  = function(){
    title.classList.toggle('change');  
};
setInterval(change,1000);
//DIFFICULTY FUNCTION
function DIFFICULTY(){
    var SodokuNumbers;
        if (Easy.checked) {
            SodokuNumbers = easy[0];return SodokuNumbers;
        }
        else if (Meduim.checked) {
            SodokuNumbers = medium[0];return SodokuNumbers;
        
        }
        else if (Difficult.checked) {
            SodokuNumbers = hard[0];return SodokuNumbers;
        }
        else{
            alert("Choose a level of difficulty");
        }
    }
//DURATION OF GAME
function TimeChosen(){
    var check = false;
    if(Min5.checked){
        check = true;return 5;
    }
    else if(Min8.checked){
        check = true;return 8;
    }
    else if(Min11.checked){
        check = true;return 11;
    }
    else{
        confirm("Please chose a valid time");return check;
    }
}
setInterval(Dark.addEventListener('click',function(){
    if(Dark.checked === true)
    {
        bod.classList.add('dark_mode');
        butt.classList.toggle('backGround');
        title.classList.toggle('backGround');
        diff.classList.toggle('backGround');
        time.classList.toggle('backGround');
        mode.classList.toggle('backGround');
        check.classList.toggle('backGround');
        sodoku.classList.toggle('backGround');
        timegame.classList.add('dark_mode');
    }
    if(Dark.checked === false)
    {
        bod.classList.remove('dark_mode');
        butt.classList.toggle('backGround');
        title.classList.toggle('backGround');
        diff.classList.toggle('backGround');
        time.classList.toggle('backGround');
        mode.classList.toggle('backGround');
        check.classList.toggle('backGround');
        sodoku.classList.toggle('backGround');
        timegame.classList.toggle('backGround');
    }
}),10)
//Level
function VauesByLevel(params) {
    for (let index = 0; index < params.length; index++) {
        if(params[index] != '-')
        {
            box[index].value = params[index];
        }
    }
}
function checkInputs()
{
    for(const inpt of box)
    {
        var validOrNot = inpt.checkValidity();
        console.log(validOrNot);
    }
}
checkInputs();
//DECREMENT TIME
function DecrementTime(e){
        setInterval(function(){
            if(e == 0)
        {
            return 0;
        }
        else{
            var min =parseInt(e/60);
            var sn = e%60;
            e --;
            Timer.textContent = min + ":" + sn;
        }
        },1000)
}
//START GAME
var arra = [];
butt.addEventListener('click',function(){
    if(butt.value == "New Game"){
        var SGAME;var Tiime;
        SGAME = DIFFICULTY();
        Tiime = TimeChosen();
        console.log(Tiime);
        if(SGAME  && Tiime)
        {
            var rep = confirm('You wanna creat a new SODOKU game ?')
            Game.classList.toggle('disapear');
            butt.value = "Quit Game";
            DecrementTime(Tiime*60);VauesByLevel(SGAME);
            check.addEventListener('click',function(){
                for (let index = 0; index < Boox.length; index++) {
                    arra[index] = Boox[index].value;
                }
                arra = [...arra]
                if(arra == SGAME)
                {
                    console.log("Wiiner")
                }
                else{
                    console.log("Looser")
                    Game.classList.toggle('disapear');
                    lost.classList.remove('No')
                }
            })
    }}
    else{
        var rep = confirm('You wanna Leave SODOKU game ?')
        Game.classList.toggle('disapear');
        butt.value = "New Game";
        location.reload();
    }
})
function re(e)
{
    return e;
}
//Drag and drop value
var Boox = [...box]

for (const iterator of Drag) {
    var n;
    iterator.addEventListener('dragstart',function Start(){
       n = this.value;
    })
    iterator.addEventListener('dragend',function()
    {
        console.log("End")
    })
    for (const i of Boox) {
        i.addEventListener('dragover',function(event)
        {
            event.preventDefault();
        });
        i.addEventListener('drop',function()
        {
                if(i.value == '')
                {
                    i.value = n;
                }
        });
    }
}
var dele = document.querySelectorAll('.far');
console.log(dele)
dele = [...dele]
console.log(dele)
dele.forEach(element => {
    element.addEventListener('click',() =>{
        var ElementX = element.parentNode;
        var EY = ElementX.parentElement
        console.log(EY);
        EY.remove();
        location.reload();
    })
});
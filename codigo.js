const rango = document.querySelector(".rango");
const cienk = document.querySelector("#nombre");
const precio = document.querySelector("#precio");
let switche = document.querySelector("#switch");
let juego = document.querySelector("#imagen-juego")


    function printPageViews(){
        if(rango.value == "0"){
            juego.style.backgroundImage = "url('images/pokemon.png')";
            cienk.textContent = "pokemon sword";
            precio.textContent = "228.900";
            
        }else if(rango.value == "25"){
            juego.style.backgroundImage = "url('images/smash.png')";
            cienk.textContent = "super smash bros ultimate";
            precio.textContent = "209.900";
        }else if(rango.value == "50"){
            juego.style.backgroundImage = "url('images/zelda.jpg')";
            cienk.textContent = "the legend of zelda breath of the wild";
            precio.textContent = "234.900";
        }else if(rango.value == "75"){
            juego.style.backgroundImage = "url('images/Splatoon-2.png')";
            cienk.textContent = "splatoon 2";
            precio.textContent = "214.900";
        }else if(rango.value == "100"){
            juego.style.backgroundImage = "url('images/MarioOdyssey.png')";
            cienk.textContent = "super mario odyssey";
            precio.textContent = "212.900";
        }
    }
    rango.addEventListener("input",function (){
        let x = rango.value;
        let color = `linear-gradient(90deg, rgb(204, 36, 14) ${x}% ,hsl(0, 3%, 85%) ${x}% )`;
        rango.style.background = color;

        printPageViews()
        if(switche.checked == true){
            let x = precio.textContent*0.25;
            precio.textContent = precio.textContent - x;
        }else{
            printPageViews() 
        }
    });

    switche.addEventListener("input",function(){

        if(switche.checked == true){
            let x = precio.textContent*0.25;
            precio.textContent = precio.textContent - x;
        }else{
            printPageViews() 
        }
    })

    
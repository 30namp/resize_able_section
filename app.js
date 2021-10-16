const drop_down = document.querySelectorAll('section > .right > button');
const section = document.querySelectorAll('section');

let open = Array(drop_down.length);

for(let i = 0;i < drop_down.length;i++){
    open[i] = "closed";
    drop_down[i].addEventListener('click', function(){
        if(open[i] == "closed"){
            open[i] = "opened";
            section[i].style.height = "50rem";
        }
        else if(open[i] == "opened"){
            open[i] = "closed";
            section[i].style.height = "25rem";
        }
    });
}
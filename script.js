    var element = document.getElementById('element');

    element.onclick = function(){
        document.body.classList.toggle('dark-mode');
        if(document.body.classList.contains('dark-mode')){
            element.src = 'sun.png';
        }else{
            element.src = 'moon.png';
        }
    }

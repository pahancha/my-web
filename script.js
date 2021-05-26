let themeDots = document.getElementsByClassName('theme-option')

for(var i=0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click',function(){
        let mode = this.dataset.mode
        console.log('Option Clicked: ', mode)
        setTheme(mode)
    })
}

function setTheme(mode){
    if(mode == 'light'){
        document.getElementById('theme-style').href = 'style.css'
    }
    if(mode == 'dark'){
        document.getElementById('theme-style').href = 'darkmode.css'
    }
}
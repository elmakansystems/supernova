window.onload = ()=>{
    const menu = document.querySelector(".menu-btn")
    let toggleState = true ; 
    let addStyle = ()=>{
        if(toggleState){
            toggleState = ! toggleState;
        }else{
            toggleState = ! toggleState;
        }
        document.styleSheets[document.styleSheets.length-1].disabled  = toggleState
    }
    
    menu.addEventListener("click"  , addStyle)
    document.styleSheets[document.styleSheets.length-1].disabled  = true
}

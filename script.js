const allrecipes={
    "html/draniki.html":["яйца","картофель"],
    "html/kartmash.html":["грибы", "картофель", "лук"],
    "html/kartofsmetan.html":["картофель", "лук", "морковь", "сметана", "чеснок"],
    "html/chpech.html":["какао", "мука", "яйца"],
    "html/rise.html":["лук", "рик","яйца"],
    "html/cheese.html":[ "мука","сыр","яйца"]
};
document.querySelectorAll(".btn").forEach(btn=>{
    btn.addEventListener("click", function(){
        this.classList.toggle("active");//добавление класса
        // проверка всех кнопок и отслеживание кликов
    });
})
document.getElementById("btn1").addEventListener("click", function(){
    const selctd=Array.from(document.querySelectorAll(".btn.active")).map(btn=>btn.textContent.trim());//поиск подходящих кнопок
    let bestmath=null;
    let maxlengradcount=0;
    for (const [page,ingr] of Object.entries(allrecipes)){
        //возвращает свойства объкта ввиде пар
        const allpresent = ingr.every(ing => selctd.includes(ing));
        if(allpresent){
            if(ingr.length>maxlengradcount){
            maxlengradcount=ingr.length;
            bestmath = page;
            }
        }
    }
    if(bestmath){
        window.location.href=bestmath;
    }
    else{
        alert("из этих продуктов я не знаю блюд")
    }
    });
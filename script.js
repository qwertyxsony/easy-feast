const allrecipes={
    "html/draniki.html":["яйца","картофель"],
    "html/kartmash.html":["грибы", "картофель", "лук"],
    "html/kartofsmetan.html":["картофель", "лук", "морковь", "сметана", "чеснок"],
    "html/chpech.html":["какао", "мука", "яйца"],
    "html/rise.html":["лук", "рик","яйца"],
    "html/cheese.html":[ "мука","сыр","яйца"],
    "html/buter.html":["хлеб","сыр","яйца","молоко","мука","помидоры"],
    "html/kotleta.html":["курица","творог","лук","яйца","молоко","хлеб", "мука"],
    "html/kremsoup.html":["грибы","картофель","лук","морковь","сметана","хлеб","сыр"],
    "html/kremsoup2.html":["курица","картофель","морковь","сыр","молоко","хлеб"],
    "html/kyrinsouce.html":["курица","грибы","лук","кефир","сметана","мука"],
    "html/okroshka.html":["курица","картофель","яйца","кефир","огурцы","помидоры","лук","сметана"],
    "html/pastalfr.html":["макароны", "курица","грибы","молоко","сыр","лук","чеснок"],
    "html/pirmorg.html":[ "кефир","масло","яйца","морковь"],
    "html/risekyr.html":[ "рис","курица","яйца","лук","чеснок"],
    "html/spech.html":[ "мука","сгущенка","масло"],
    "html/tomato.html":[ "помидоры","творог","сыр","чеснок"],
    "html/zapekan.html":[ "мука","творог","яйца","какао","сгущенка"],
    "html/zharkoe.html":[ "курица","картофель","морковь","лук","грибы","сметана","чеснок"],
    "html/zraza.html":[ "картофель","мука","яйца","грибы","лук","сметана","масло"]
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
document.querySelectorAll(".btn").forEach(btn=>{
    btn.addEventListener("click", function(){
        this.classList.toggle("active");//добавление класса
        // проверка всех кнопок и отслеживание кликов
    });
})
document.getElementById("btn1").addEventListener("click", function(){
    const selc=[];
    document.querySelectorAll(".btn.active").forEach(btn=>{
        selc.push(btn.textContent.trim());//удаление пробелов
        //добавлениие в массив контента из кнопок
    });
    const comba=selc.sort().join(", ");
    // сортировка по алфавиту и склеивание всех слов в одну строку и пробелыдобавле вместе с запятой
    if (comba==="картофель, масло, яйца"){
        window.location.href="draniki.html";
    }
    else if (comba==="грибы, картофель, лук, масло"){
        window.location.href="kartmash.html";
    }
    else{
        alert("из этих продуктов я не знаю блюд")
    }
})

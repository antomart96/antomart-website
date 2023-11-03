                // * Filter Section
//all
document.querySelector('#all').addEventListener('click', function(){
    //The currently "selected" button is in color
document.querySelector('.selected').classList.remove('selected');   
this.classList.add('selected');
showAll();
})

function showAll(){
const allArticle = document.querySelectorAll('main article')
    for (const el of allArticle) {
    el.style.display="block";
    }
}

//IN STOCK
document.querySelector('#web').addEventListener("click", showWeb);
function showWeb() {
     //The currently "selected" button is in color
    document.querySelector('.selected').classList.remove('selected');
    this.classList.add('selected');

    const webArticle = document.querySelectorAll('main article');
    for (const web of webArticle) {
        const webElement = web.querySelector('span');
        if (webElement.innerText === "web") {
            web.style.display = 'block';
        } else {
            web.style.display = 'none';
        }
    }
}

//Soon
document.querySelector('#app').addEventListener("click", showApp);
function showApp() {
     //The currently "selected" button is in color
    document.querySelector('.selected').classList.remove('selected');
    this.classList.add('selected');

    const appArticle = document.querySelectorAll('main article');
    for (const app of appArticle) {
        const appElement = app.querySelector('span');
        if (appElement.innerText === "app") {
            app.style.display = 'block';
        } else {
            app.style.display = 'none';
        }
    }
}
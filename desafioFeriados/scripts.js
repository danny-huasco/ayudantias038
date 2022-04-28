let tableichon = document.getElementById('tablaCuerpo')
fetch('https://www.feriadosapp.com/api/holidays.json')
.then(response => response.json())
.then(function(data){
    console.log(data);
    let texto ='';
    texto = data.data.map(e=>{
        return `<tr><td>${e.id}</td><td>${e.date}</td><td>${e.title}</td><td>${e.extra}</td></tr>`
    }).join('');
    tableichon.innerHTML = texto;
});

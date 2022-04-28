let urlBase = 'https://api.github.com/users';

const getUser = async (user)=>{
    let url = `${urlBase}/${user}`;
    return await request(url);
} 

const getRepo = async (user, pags, cantRepos)=>{
     let url2 = `${urlBase}/${user}/repos?page=${pags}&per_page=${cantRepos}`;
    return await request(url2);
}

const request = async (url)=>{
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

//funcionamiento de formulario
let btn = document.getElementById('enviar');

btn.addEventListener('click', ()=>{
    //let [usuario, paginas, repos] = ['usuario', 'paginas', 'repos'].map(e=>document.getElementById("'"+e+"'").value);
    let usuario = document.getElementById('usuario').value;
    let pagina = document.getElementById('pagina').value;
    let repos = document.getElementById('repos').value;
    if(!usuario || !pagina || !repos) alert('llena todos los campos primero.')

    Promise.all([getUser(usuario), getRepo(usuario, pagina, repos)])
    .then(resp => {
        console.log(resp[1]);
        document.getElementById('datosUser').innerHTML = `<h3>datos de usuario</h3><br>
                                                        <p>nombre: ${resp[0].name}</p><br>
                                                        <p>login: ${resp[0].login}</p><br>
                                                        <p>cant repos: ${resp[0].public_repos}</p><br>
                                                        <p>localidad: ${resp[0].location}</p><br>
                                                        <p>tipo: ${resp[0].type}</p>
        `
        let texto = '<h3>repositorios</h3><br><ul>'+resp[1].map(e=> `<li>${e.name}</li>`).join('')+'</ul>'
        document.getElementById('repositorios').innerHTML = texto
    })
    .catch(err => console.log(err))

});                                 


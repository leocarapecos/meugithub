document.addEventListener('DOMContentLoaded', function(){

    const avatar = document.querySelector('#avatar');
    const nome = document.querySelector('#nome');
    const usuario = document.querySelector('#usuario');
    const repositorio = document.querySelector('#repositorio');
    const seguidores = document.querySelector('#seguidores');
    const seguindo = document.querySelector('#seguindo');
    const link = document.querySelector('#profile-link');

    fetch('https://api.github.com/users/leocarapecos')
        .then(function(res){
            return res.json();
        })
        .then(function(json){
            avatar.src = json.avatar_url
            nome.innerText = json.name
            usuario.innerText = "@" + json.login
            repositorio.innerText = json.public_repos
            seguidores.innerText = json.followers
            seguindo.innerText = json.following
            link.href = json.html_url
        })
})


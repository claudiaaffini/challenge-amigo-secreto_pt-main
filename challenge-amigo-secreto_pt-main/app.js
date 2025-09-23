let amigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo');
    if (nomeAmigo.value == '') {
        alert('Informe o nome do amigo!');
        return;
    }

    if (amigos.includes(nomeAmigo.value)) {
        alert('Nome já adicionado!');
        return;
    }

    let listaAmigos = document.getElementById('listaAmigos');
    amigos.push(nomeAmigo.value);

    if (listaAmigos.textContent == '') {
        listaAmigos.textContent = nomeAmigo.value;
    } else {
        listaAmigos.textContent = listaAmigos.textContent + ', ' + nomeAmigo.value;
    }
    
    nomeAmigo.value = '';
}

function sortearAmigo() {
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos!');
        return;
    }
    
    embaralha(amigos);
    let sorteio = document.getElementById('resultado');

    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
    }
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = 
        [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('listaAmigos').textContent = '';
    document.getElementById('resultado').innerHTML = '';
}
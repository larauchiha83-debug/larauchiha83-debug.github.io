// Função para criar botão de denúncia em qualquer card ou item
function adicionarBotaoDenuncia(container, itemNome) {
  const btn = document.createElement("button");adicionarBotaoDenuncia(div, p.nome);
  btn.textContent = "Denunciar";
  btn.className = "denunciarBtn";

  btn.addEventListener("click", () => {
    const motivo = prompt(`Denúncia para "${itemNome}":\nEscolha o motivo (ex: conteúdo impróprio, spam, ofensivo)`);
    if (!motivo) return;

    const comentario = prompt("Comentário opcional:");
    registrarDenuncia(itemNome, motivo, comentario);
    alert("Sua denúncia foi registrada. Obrigado por ajudar a manter a comunidade segura!");
  });

  container.appendChild(btn);
}

// Função que registra a denúncia (no momento apenas console, futuramente pode gerar log ou enviar para servidor)
function registrarDenuncia(itemNome, motivo, comentario) {
  const denuncia = {
    item: itemNome,
    motivo: motivo,
    comentario: comentario,
    data: new Date().toLocaleString()
  };

  console.log("Denúncia registrada:", denuncia);
  // Futuro: enviar para servidor ou salvar em log externo
}div.querySelector(".denunciarBtn").addEventListener("click", ()=>{
div.innerHTML=`
  <h4>${p.nome} - R$ ${p.preco}</h4>
  <img src="${p.foto}" alt="${p.nome}">
  <p>${p.desc}</p>
  ${p.video?`<a href="${p.video}" target="_blank">Ver vídeo</a>`:""}
  <button class="denunciarBtn">Denunciar</button>
`;  const motivo = prompt("Motivo da denúncia (ex: conteúdo impróprio, spam, ofensivo):");
  if(motivo) alert("Sua denúncia foi registrada. Obrigado!");
});const conteudo = document.getElementById("conteudo");
let produtos = [];

// --- Home ---
function mostrarHome() {
  conteudo.innerHTML = "<p>Bem-vindo ao KpopMafia! Clique nos botões acima para explorar.</p>";
}

// --- IA Estilo Chat ---
function mostrarIA() {
  conteudo.innerHTML = `
    <h2>IA de Escrita ✨</h2>
    <div id="chatBox"></div>
    <textarea id="chatInput" placeholder="Escreva sua história ou ideia aqui..." rows="3"></textarea>
    <select id="tipoSugestao">
      <option value="resumo">Resumo</option>
      <option value="sinopse">Sinopse</option>
      <option value="opiniao">Opinião</option>
      <option value="ideias">Ideias Criativas</option>
    </select>
    <button id="enviarChat">Enviar</button>
  `;

  const chatBox = document.getElementById("chatBox");

  document.getElementById("enviarChat").addEventListener("click", () => {
    const texto = document.getElementById("chatInput").value.trim();
    const tipo = document.getElementById("tipoSugestao").value;
    if (!texto) return;

    adicionarMensagem("user", texto);

    let resposta = "";
    if (tipo === "resumo") resposta = "✨ Resumo sugerido: foque nos eventos principais e no conflito central.";
    if (tipo === "sinopse") resposta = "📖 Sinopse: apresente o universo, o gancho emocional e o mistério.";
    if (tipo === "opiniao") resposta = "💬 Opinião: a ideia é boa, pode aprofundar emoções e motivações.";
    if (tipo === "ideias") resposta = "🌙 Ideias: explore relações, tensão emocional ou reviravoltas.";

    setTimeout(() => adicionarMensagem("bot", resposta), 500);
    document.getElementById("chatInput").value = "";
  });

  function adicionarMensagem(tipo, texto) {
    const msg = document.createElement("div");
    msg.className = tipo === "user" ? "msgUser" : "msgBot";
    msg.textContent = texto;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}

// --- Marketplace ---
function mostrarMarketplace() {
  conteudo.innerHTML = `
    <h2>Marketplace KpopMafia</h2>
    <h3>Vender Produto</h3>
    <input type="text" id="nomeProduto" placeholder="Nome do produto">
    <input type="text" id="precoProduto" placeholder="Preço">
    <textarea id="descricaoProduto" placeholder="Descrição do produto"></textarea>
    <input type="text" id="fotoProduto" placeholder="URL da foto">
    <input type="text" id="videoProduto" placeholder="URL do vídeo (opcional)">
    <button id="enviarProduto">Adicionar à Vitrine</button>
    <h3>Vitrine</h3>
    <div id="vitrine"></div>
  `;

  document.getElementById("enviarProduto").addEventListener("click", () => {
    const nome = document.getElementById("nomeProduto").value.trim();
    const preco = document.getElementById("precoProduto").value.trim();
    const desc = document.getElementById("descricaoProduto").value.trim();
    const foto = document.getElementById("fotoProduto").value.trim();
    const video = document.getElementById("videoProduto").value.trim();
    if(!nome||!preco||!desc||!foto){ alert("Preencha todos os campos obrigatórios!"); return; }

    produtos.push({nome,preco,desc,foto,video});
    atualizarVitrine();
  });
}

function atualizarVitrine(){
  const vitrine = document.getElementById("vitrine");
  vitrine.innerHTML = "";
  produtos.forEach(p=>{
    const div=document.createElement("div");
    div.className="produto";
    div.innerHTML=`<h4>${p.nome} - R$ ${p.preco}</h4>
                   <img src="${p.foto}" alt="${p.nome}">
                   <p>${p.desc}</p>
                   ${p.video?`<a href="${p.video}" target="_blank">Ver vídeo</a>`:""}`;
    vitrine.appendChild(div);
  });
}

// --- Eventos do Menu ---
document.getElementById("homeBtn").addEventListener("click", mostrarHome);
document.getElementById("aiBtn").addEventListener("click", mostrarIA);
document.getElementById("marketBtn").addEventListener("click", mostrarMarketplace);function mostrarIA() {
  conteudo.innerHTML = `
    <h2>IA de Escrita ✨</h2>

    <div id="chatBox"></div>

    <textarea id="chatInput" placeholder="Escreva sua história ou ideia aqui..." rows="3"></textarea>

    <select id="tipoSugestao">
      <option value="resumo">Resumo</option>
      <option value="sinopse">Sinopse</option>
      <option value="opiniao">Opinião</option>
      <option value="ideias">Ideias Criativas</option>
    </select>

    <button id="enviarChat">Enviar</button>
  `;

  const chatBox = document.getElementById("chatBox");

  document.getElementById("enviarChat").addEventListener("click", () => {
    const texto = document.getElementById("chatInput").value.trim();
    const tipo = document.getElementById("tipoSugestao").value;

    if (!texto) return;

    adicionarMensagem("user", texto);

    let resposta = "";
    if (tipo === "resumo")
      resposta = "✨ Resumo sugerido: foque nos eventos principais e no conflito central.";
    if (tipo === "sinopse")
      resposta = "📖 Sinopse: apresente o universo, o gancho emocional e o mistério.";
    if (tipo === "opiniao")
      resposta = "💬 Opinião: a ideia é boa, pode aprofundar emoções e motivações.";
    if (tipo === "ideias")
      resposta = "🌙 Ideias: explore relações, tensão emocional ou reviravoltas.";

    setTimeout(() => adicionarMensagem("bot", resposta), 500);
    document.getElementById("chatInput").value = "";
  });

  function adicionarMensagem(tipo, texto) {
    const msg = document.createElement("div");
    msg.className = tipo === "user" ? "msgUser" : "msgBot";
    msg.textContent = texto;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}const conteudo = document.getElementById("conteudo");

// --- Função Home ---
function mostrarHome() {
  conteudo.innerHTML = "<p>Bem-vindo ao KpopMafia! Clique nos botões acima para explorar.</p>";
}

// --- IA de escrita ---
function mostrarIA() {
  conteudo.innerHTML = `
    <h2>IA de Escrita</h2>
    <textarea id="inputFanfic" placeholder="Cole sua fanfic ou história aqui..." rows="5"></textarea>
    <select id="tipoSugestao">
      <option value="resumo">Resumo</option>
      <option value="sinopse">Sinopse</option>
      <option value="ideias">Ideias/Opiniões</option>
    </select>
    <button id="revisarBtn">Gerar Sugestão</button>
    <div id="saidaAI"></div>
  `;

  document.getElementById("revisarBtn").addEventListener("click", function() {
    const input = document.getElementById("inputFanfic").value.trim();
    const tipo = document.getElementById("tipoSugestao").value;
    const saida = document.getElementById("saidaAI");

    if(input === "") {
      saida.textContent = "Cole sua história para receber sugestões.";
      return;
    }

    let mensagem = "";
    if(tipo === "resumo") mensagem = "Sugestão de resumo: Tente condensar os eventos principais em 2-3 frases.";
    if(tipo === "sinopse") mensagem = "Sugestão de sinopse: Crie um gancho atraente que desperte curiosidade.";
    if(tipo === "ideias") mensagem = "Sugestão de ideias: Você pode explorar conflito, romance ou humor para enriquecer a história.";

    saida.textContent = mensagem;
  });
}

// --- Marketplace ---
let produtos = [];

function mostrarMarketplace() {
  conteudo.innerHTML = `
    <h2>Marketplace KpopMafia</h2>
    <h3>Vender Produto</h3>
    <input type="text" id="nomeProduto" placeholder="Nome do produto">
    <input type="text" id="precoProduto" placeholder="Preço">
    <textarea id="descricaoProduto" placeholder="Descrição do produto"></textarea>
    <input type="text" id="fotoProduto" placeholder="URL da foto">
    <input type="text" id="videoProduto" placeholder="URL do vídeo (opcional)">
    <button id="enviarProduto">Adicionar à Vitrine</button>
    <h3>Vitrine</h3>
    <div id="vitrine"></div>
  `;

  document.getElementById("enviarProduto").addEventListener("click", function() {
    const nome = document.getElementById("nomeProduto").value.trim();
    const preco = document.getElementById("precoProduto").value.trim();
    const desc = document.getElementById("descricaoProduto").value.trim();
    const foto = document.getElementById("fotoProduto").value.trim();
    const video = document.getElementById("videoProduto").value.trim();

    if(!nome || !preco || !desc || !foto){
      alert("Preencha todos os campos obrigatórios!");
      return;
    }

    const produto = { nome, preco, desc, foto, video };
    produtos.push(produto);
    atualizarVitrine();
  });
}

function atualizarVitrine(){
  const vitrine = document.getElementById("vitrine");
  vitrine.innerHTML = "";
  produtos.forEach(p => {
    const div = document.createElement("div");
    div.className = "produto";
    div.innerHTML = `
      <h4>${p.nome} - R$ ${p.preco}</h4>
      <img src="${p.foto}" alt="${p.nome}">
      <p>${p.desc}</p>
      ${p.video ? `<a href="${p.video}" target="_blank">Ver vídeo</a>` : ""}
    `;
    vitrine.appendChild(div);
  });
}

// --- Eventos Menu ---
document.getElementById("homeBtn").addEventListener("click", mostrarHome);
document.getElementById("aiBtn").addEventListener("click", mostrarIA);
document.getElementById("marketBtn").addEventListener("click", mostrarMarketplace);const conteudo = document.getElementById("conteudo");

// --- Função Home ---
function mostrarHome() {
  conteudo.innerHTML = "<p>Bem-vindo ao KpopMafia! Clique nos botões acima para explorar.</p>";
}

// --- Seções ---
function mostrarCapas() {
  conteudo.innerHTML = `
    <h2>Capas</h2>
    <div class="grupos">
      <img src="https://via.placeholder.com/50x50?text=BTS" alt="BTS" class="logoGrupo">
      <img src="https://via.placeholder.com/50x50?text=TXT" alt="TXT" class="logoGrupo">
      <img src="https://via.placeholder.com/50x50?text=Seventeen" alt="Seventeen" class="logoGrupo">
    </div>
    <img src="https://via.placeholder.com/300x150?text=Capa+1" alt="Capa 1">
    <img src="https://via.placeholder.com/300x150?text=Capa+2" alt="Capa 2">
  `;
}

function mostrarReels() {
  conteudo.innerHTML = `
    <h2>Reels</h2>
    <img src="https://via.placeholder.com/300x150?text=Reel+1" alt="Reel 1">
    <img src="https://via.placeholder.com/300x150?text=Reel+2" alt="Reel 2">
  `;
}

function mostrarPerfil() {
  conteudo.innerHTML = `
    <h2>Perfil</h2>
    <img src="https://via.placeholder.com/100x100?text=Avatar" alt="Avatar">
    <p>Nome: Usuário Kpop</p>
    <p>Bio: Fanfic e histórias autorais</p>
  `;
}

function mostrarChat() {
  conteudo.innerHTML = `
    <h2>Chat</h2>
    <p>Aqui você pode conversar com outros fãs (placeholder)</p>
  `;
}

function mostrarStories() {
  conteudo.innerHTML = `
    <h2>Stories</h2>
    <div class="storiesContainer">
      <img src="https://via.placeholder.com/150x80?text=Story+1" alt="Story 1" class="story">
      <img src="https://via.placeholder.com/150x80?text=Story+2" alt="Story 2" class="story">
      <img src="https://via.placeholder.com/150x80?text=Story+3" alt="Story 3" class="story">
    </div>
  `;
}

// --- Eventos dos botões ---
document.getElementById("homeBtn").addEventListener("click", mostrarHome);
document.getElementById("capasBtn").addEventListener("click", mostrarCapas);
document.getElementById("reelsBtn").addEventListener("click", mostrarReels);
document.getElementById("perfilBtn").addEventListener("click", mostrarPerfil);
document.getElementById("chatBtn").addEventListener("click", mostrarChat);
document.getElementById("storiesBtn").addEventListener("click", mostrarStories);

// --- IA leve para fanfic ---
conteudo.innerHTML += `
<section class="fanficAI">
  <h2>Revisar História</h2>
  <textarea id="inputFanfic" placeholder="Cole sua fanfic aqui..." rows="5"></textarea>
  <button id="revisarBtn">Revisar</button>
  <div id="saidaAI"></div>
</section>
`;

document.getElementById("revisarBtn").addEventListener("click", function() {
  const input = document.getElementById("inputFanfic").value;
  const saida = document.getElementById("saidaAI");

  if(input.trim() === "") {
    saida.textContent = "Cole sua história para receber sugestões.";
    return;
  }

  saida.textContent = "Sugestão: revise pontuação, estrutura e fluidez das frases.";
});const conteudo = document.getElementById("conteudo");

// --- Função Home ---
function mostrarHome() {
  conteudo.innerHTML = "<p>Bem-vindo ao Kpopmafia! Clique nos botões acima para explorar.</p>";
}

// --- Seções ---
function mostrarCapas() {
  conteudo.innerHTML = `
    <h2>Capas</h2>
    <div class="grupos">
      <img src="https://via.placeholder.com/50x50?text=BTS" alt="BTS" class="logoGrupo">
      <img src="https://via.placeholder.com/50x50?text=TXT" alt="TXT" class="logoGrupo">
      <img src="https://via.placeholder.com/50x50?text=Seventeen" alt="Seventeen" class="logoGrupo">
    </div>
    <img src="https://via.placeholder.com/300x150?text=Capa+1" alt="Capa 1">
    <img src="https://via.placeholder.com/300x150?text=Capa+2" alt="Capa 2">
  `;
}

function mostrarReels() {
  conteudo.innerHTML = `
    <h2>Reels</h2>
    <img src="https://via.placeholder.com/300x150?text=Reel+1" alt="Reel 1">
    <img src="https://via.placeholder.com/300x150?text=Reel+2" alt="Reel 2">
  `;
}

function mostrarPerfil() {
  conteudo.innerHTML = `
    <h2>Perfil</h2>
    <img src="https://via.placeholder.com/100x100?text=Avatar" alt="Avatar">
    <p>Nome: Usuário Kpop</p>
    <p>Bio: Fanfic e histórias autorais</p>
  `;
}

function mostrarChat() {
  conteudo.innerHTML = `
    <h2>Chat</h2>
    <p>Aqui você pode conversar com outros fãs (placeholder)</p>
  `;
}

function mostrarStories() {
  conteudo.innerHTML = `
    <h2>Stories</h2>
    <img src="https://via.placeholder.com/200x100?text=Story+1" alt="Story 1">
    <img src="https://via.placeholder.com/200x100?text=Story+2" alt="Story 2">
  `;
}

// --- Eventos dos botões ---
document.getElementById("homeBtn").addEventListener("click", mostrarHome);
document.getElementById("capasBtn").addEventListener("click", mostrarCapas);
document.getElementById("reelsBtn").addEventListener("click", mostrarReels);
document.getElementById("perfilBtn").addEventListener("click", mostrarPerfil);
document.getElementById("chatBtn").addEventListener("click", mostrarChat);
document.getElementById("storiesBtn").addEventListener("click", mostrarStories);

// --- Adiciona seção de IA para fanfic ---
conteudo.innerHTML += `
<section class="fanficAI">
  <h2>Revisar História</h2>
  <textarea id="inputFanfic" placeholder="Cole sua fanfic aqui..." rows="5"></textarea>
  <button id="revisarBtn">Revisar</button>
  <div id="saidaAI"></div>
</section>
`;

document.getElementById("revisarBtn").addEventListener("click", function() {
  const input = document.getElementById("inputFanfic").value;
  const saida = document.getElementById("saidaAI");

  if(input.trim() === "") {
    saida.textContent = "Cole sua história para receber sugestões.";
    return;
  }

  // Simulação de IA leve
  saida.textContent = "Sugestão: revise pontuação, estrutura e fluidez das frases.";
});const conteudo = document.getElementById("conteudo");

// Função para resetar a área de conteúdo
function mostrarHome() {
  conteudo.innerHTML = "<p>Bem-vindo ao Kpopmafia! Clique nos botões acima para navegar.</p>";
}

// Funções para cada seção
function mostrarCapas() {
  conteudo.innerHTML = `
    <h2>Capas</h2>
    <img src="https://via.placeholder.com/300x150?text=Capa+1" alt="Capa 1">
    <img src="https://via.placeholder.com/300x150?text=Capa+2" alt="Capa 2">
  `;
}

function mostrarReels() {
  conteudo.innerHTML = `
    <h2>Reels</h2>
    <img src="https://via.placeholder.com/300x150?text=Reel+1" alt="Reel 1">
    <img src="https://via.placeholder.com/300x150?text=Reel+2" alt="Reel 2">
  `;
}

function mostrarPerfil() {
  conteudo.innerHTML = `
    <h2>Perfil</h2>
    <img src="https://via.placeholder.com/100x100?text=Avatar" alt="Avatar">
    <p>Nome: Usuário Kpop</p>
    <p>Bio: Fanfic e histórias autorais</p>
  `;
}

function mostrarChat() {
  conteudo.innerHTML = `
    <h2>Chat</h2>
    <p>Aqui você pode conversar com outros fãs (placeholder)</p>
  `;
}

function mostrarStories() {
  conteudo.innerHTML = `
    <h2>Stories</h2>
    <img src="https://via.placeholder.com/200x100?text=Story+1" alt="Story 1">
    <img src="https://via.placeholder.com/200x100?text=Story+2" alt="Story 2">
  `;
}

// Eventos dos botões
document.getElementById("homeBtn").addEventListener("click", mostrarHome);
document.getElementById("capasBtn").addEventListener("click", mostrarCapas);
document.getElementById("reelsBtn").addEventListener("click", mostrarReels);
document.getElementById("perfilBtn").addEventListener("click", mostrarPerfil);
document.getElementById("chatBtn").addEventListener("click", mostrarChat);
document.getElementById("storiesBtn").addEventListener("click", mostrarStories);function mostrarMensagem(texto) {
  const div = document.getElementById("mensagem");
  div.textContent = texto;
}

document.getElementById("botao1").addEventListener("click", function() {
  mostrarMensagem("Você clicou no Botão 1!");
});

document.getElementById("botao2").addEventListener("click", function() {
  mostrarMensagem("Você clicou no Botão 2!");
});

document.getElementById("botao3").addEventListener("click", function() {
  mostrarMensagem("Você clicou no Botão 3!");
});// Função para mostrar mensagem
function mostrarMensagem(texto) {
  const div = document.getElementById("mensagem");
  div.textContent = texto;
}

// Eventos dos botões
document.getElementById("botao1").addEventListener("click", function() {
  mostrarMensagem("Você clicou no Botão 1!");
});

document.getElementById("botao2").addEventListener("click", function() {
  mostrarMensagem("Você clicou no Botão 2!");
});

document.getElementById("botao3").addEventListener("click", function() {
  mostrarMensagem("Você clicou no Botão 3!");
});let ctx = document.getElementById('canvas').getContext('2d');

let coverCtx = document.getElementById('coverCanvas').getContext('2d');

let posts = [];

let userPosts = [];

let reels = [];

let stories = [];

let savedCovers = [];

let currentStory = null;

let chapterCount = 0;

let currentChat = null;

let chats = { private: { 'Amigo1': [] }, group: { 'Fandom BTS': [] } };

// Função para mostrar seções

function showSection(id) {

    document.querySelectorAll('.section').forEach(sec => sec.classList.add('hidden'));

    document.getElementById(id).classList.remove('hidden');

    if (id === 'messages') renderChatList();

    if (id === 'profile') renderProfile();

    if (id === 'fanfics') showFanficSection('list');

}

// Toggle para seções de fanfics

function showFanficSection(type) {

    document.getElementById('fanficList').classList.toggle('hidden', type !== 'list');

    document.getElementById('fanficCreate').classList.toggle('hidden', type !== 'create');

    document.getElementById('fanficEdit').classList.toggle('hidden', type !== 'edit');

    if (type === 'list') renderFanficList();

}

// Stories

function renderStories() {

    let storiesDiv = document.getElementById('stories');

    storiesDiv.innerHTML = '<div class="story">📸</div><div class="story">🎤</div><div class="story">💃</div>';

}

renderStories();

// Upload

document.getElementById('upload').addEventListener('change', function(e) {

    let file = e.target.files[0];

    if (file.type.startsWith('image/')) {

        let img = new Image();

        img.onload = () => ctx.drawImage(img, 0, 0, 300, 300);

        img.src = URL.createObjectURL(file);

    } else if (file.type.startsWith('video/')) {

        window.currentVideo = URL.createObjectURL(file);

    }

});

// Upload de áudio

document.getElementById('audioUpload').addEventListener('change', function(e) {

    let file = e.target.files[0];

    if (file.type.startsWith('audio/')) {

        window.currentAudio = URL.createObjectURL(file);

    }

});

// Moldura

function addFrame() {

    ctx.strokeStyle = '#333';

    ctx.lineWidth = 10;

    ctx.strokeRect(0, 0, 300, 300);

}

// Postar mídia

function postMedia() {

    let caption = document.getElementById('captionInput').value || 'Sem legenda';

    let fandom = document.getElementById('fandomFilter').value;

    let content = window.currentVideo ? `<video controls><source src="${window.currentVideo}" type="video/mp4"></video>` : document.getElementById('canvas').toDataURL();

    let audio = window.currentAudio ? `<audio controls><source src="${window.currentAudio}" type="audio/mpeg"></audio>` : '';

    let type = window.currentVideo ? 'video' : 'media';

    let post = { type, content, audio, caption, fandom, likes: 0, comments: [], label: type === 'video' ? '🎥 Vídeo' : '📷 Post de Mídia' };

    posts.push(post);

    userPosts.push(post);

    if (type === 'video') reels.push(post);

    renderFeed();

    renderReels();

    document.getElementById('captionInput').value = '';

}

// Criar história

function createStory() {

    let title = document.getElementById('storyTitle').value;

    let desc = document.getElementById('storyDesc').value;

    let cover = document.getElementById('coverSelect').value;

    if (title && desc) {

        let story = { title, desc, cover, chapters: [], likes: 0, comments: [] };

        stories.push(story);

        renderFanficList();

        document.getElementById('storyTitle').value = '';

        document.getElementById('storyDesc').value = '';

        showFanficSection('list');

    }

}

// Renderizar lista de fanfics

function renderFanficList() {

    let list = document.getElementById('fanficList');

    list.innerHTML = stories.map((story, index) => `

        <div class="fanfic-card" onclick="editStory(${index})">

            <img src="${story.cover || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=='}" alt="Capa">

            <h4>${story.title}</h4>

            <p>${story.desc.substring(0, 50)}...</p>

            <p>❤️ ${story.likes} | 💬 ${story.comments.length}</p>

        </div>

    `).join('');

    updateCoverSelect();

}

// Editar história

function editStory(index) {

    currentStory = stories[index];

    document.getElementById('currentStoryTitle').textContent = currentStory.title;

    renderChapters();

    showFanficSection('edit');

}

// Adicionar capítulo

function addChapter() {

    let text = document.getElementById('chapterInput').value;

    if (text) {

        currentStory.chapters.push(text);

        chapterCount++;

        renderChapters();

        document.getElementById('chapterInput').value = '';

    }

}

// Inserir mídia no capítulo

function insertMediaIntoChapter() {

    let content = window.currentVideo ? `<video controls width="200"><source src="${window.currentVideo}" type="video/mp4"></video>` : `<img src="${document.getElementById('canvas').toDataURL()}" width="200">`;

    document.getElementById('chapterInput').value += '\n' + content;

}

// Inserir áudio no capítulo

function insertAudioIntoChapter() {

    if (window.currentAudio) {

        let audioTag = `<audio controls><source src="${window.currentAudio}" type="audio/mpeg"></audio>`;

        document.getElementById('chapterInput').value += '\n' + audioTag;

    }

}

// Correção IA no capítulo

function correctChapter() {

    let text = document.getElementById('chapterInput').value;

    let corrected = text.replace(/erro/g, 'correção').replace(/escrever/g, 'redigir');

    if (chapterCount > 4) corrected += ' [Bônus: Correção premium aplicada!]';

    document.getElementById('correctedChapter').innerHTML = `<p>Capítulo Corrigido: ${corrected}</p>`;

}

// Renderizar capítulos

function renderChapters() {

    let list = document.getElementById('chaptersList');

    list.innerHTML = currentStory.chapters.map((ch, i) => `<div class="chapter"><h5>Capítulo ${i+1}</h5><p>${ch}</p></div>`).join('');

}

// Edição de capas

function addTextToCover() {

    let text = document.getElementById('textInput').value;

    coverCtx.fillStyle = '#333';

    coverCtx.font = '20px Arial';

    coverCtx.fillText(text, 50, 200);

}

function addFrameToCover() {

    coverCtx.strokeStyle = '#ff69b4';

    coverCtx.lineWidth = 10;

    coverCtx.strokeRect(0, 0, 300, 400);

}

function insertImageToCover() {

    let img = new Image();

    img.onload = () => coverCtx.drawImage(img, 0, 0, 300, 400);

    img.src = document.getElementById('canvas').toDataURL();

}

function insertAudioToCover() {

    alert('Áudio associado à capa!');

}

function saveCover() {

    let coverData = document.getElementById('coverCanvas').toDataURL();

    savedCovers.push(coverData);

    renderSavedCovers();

    updateCoverSelect();

}

function renderSavedCovers() {

    let coversDiv = document.getElementById('savedCovers');

    coversDiv.innerHTML = savedCovers.map((cover, index) => `<img src="${cover}" class="saved-cover" onclick="selectCover(${index})" alt="Capa ${index+1}">`).join('');

}

function selectCover(index) {

    document.getElementById('coverSelect').value = savedCovers[index];

}

function updateCoverSelect() {

    let select = document.getElementById('coverSelect');

select.innerHTML = '<option value="">Selecionar Capa</
    document.getElementById("meuBotao").addEventListener("click", function() {
  alert("Botão funcionando!");
});

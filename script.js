let ctx = document.getElementById('canvas').getContext('2d');

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
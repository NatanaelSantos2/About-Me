const elText = document.getElementById("bio-editName");
const STORAGE_KEY = "text";

// Carrega o texto salvo (se houver)
window.onload = () => {
    const salvo = localStorage.getItem(STORAGE_KEY);
    if (salvo) {
        const data = JSON.parse(salvo);
        elText.innerHTML = data.texto;
    }
};

// Ativa edição
function editText() {
    elText.setAttribute("contenteditable", "true");
    elText.focus();
}

// Salva o texto no localStorage como JSON
function saveText() {
    const conteudo = elText.innerHTML;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ texto: conteudo }));
    elText.setAttribute("contenteditable", "false");
    alert("Texto salvo com sucesso!");
}
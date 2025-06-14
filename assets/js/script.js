const elText = document.getElementById("bio-editName");
const STORAGE_KEY = "text";

window.onload = () => {
    const salvo = localStorage.getItem(STORAGE_KEY);
    if (salvo) {
        const data = JSON.parse(salvo);
        elText.innerHTML = data.texto;
    }
};

function editText() {
    elText.setAttribute("contenteditable", "true");
    elText.focus();
}

function saveText() {
    const conteudo = elText.innerHTML;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ texto: conteudo }));
    elText.setAttribute("contenteditable", "false");
    alert("Texto salvo com sucesso!");
}
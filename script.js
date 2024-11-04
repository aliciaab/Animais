document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("enviar").addEventListener("click", function () {
        const pergunta1 = document.getElementById("pergunta1").value.trim();
        const pergunta2 = document.getElementById("pergunta2").value.trim();
        const mensagem = document.getElementById("mensagem");

        if (pergunta1 === "" || pergunta2 === "") {
            mensagem.classList.add("show"); // Adiciona a classe para exibir
            mensagem.style.display = "block"; // Garante que a mensagem apareça
            setTimeout(() => {
                mensagem.style.opacity = 1; // Aplica opacidade após mostrar
            }, 0);
        } else {
            mensagem.style.opacity = 0; // Reduz a opacidade antes de esconder
            setTimeout(() => {
                mensagem.classList.remove("show"); // Remove a classe para ocultar
                mensagem.style.display = "none"; // Esconde completamente
            }, 500); // Espera pela animação de opacidade
            alert("Dados enviados com sucesso!"); // Exemplo de ação ao enviar
        }
    });
});

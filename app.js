// Função para enviar uma mensagem de contato e salvar no localStorage
function enviarMensagem() {
    // Obtém os dados do formulário de contato
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;
  
    // Cria um objeto com os dados do formulário
    var contato = {
      nome: nome,
      email: email,
      mensagem: mensagem
    };
  
    // Obtém os dados existentes no localStorage (se houver)
    var contatosAntigos = localStorage.getItem("contatos");
  
    // Verifica se há dados antigos no localStorage
    if (contatosAntigos) {
      // Converte os dados em formato JSON para um array de objetos
      contatosAntigos = JSON.parse(contatosAntigos);
    } else {
      // Caso não haja dados antigos, cria um array vazio
      contatosAntigos = [];
    }
  
    // Adiciona o novo contato ao array de contatos
    contatosAntigos.push(contato);
  
    // Converte o array de contatos para formato JSON
    var contatosAtualizados = JSON.stringify(contatosAntigos);
  
    // Salva os contatos atualizados no localStorage
    localStorage.setItem("contatos", contatosAtualizados);
  
    // Exibe uma mensagem de sucesso
    alert("Mensagem enviada!\n\nNome: " + nome + "\nEmail: " + email + "\nMensagem: " + mensagem);
  
    // Limpa os campos do formulário
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensagem").value = "";
  }
  
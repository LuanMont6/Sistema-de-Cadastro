function addContact() {
    // Obter os valores dos campos de entrada
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    // Verificar se os campos estão preenchidos
    if (!name || !email || !phone) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Criar uma nova linha para a tabela
    const table = document.getElementById("contactList");
    const row = table.insertRow();

    // Adicionar células e preencher com os dados
    const cellName = row.insertCell(0);
    const cellEmail = row.insertCell(1);
    const cellPhone = row.insertCell(2);
    const cellActions = row.insertCell(3);

    cellName.textContent = name;
    cellEmail.textContent = email;
    cellPhone.textContent = phone;

    // Botão de exclusão para remover a linha
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir";
    deleteButton.onclick = function() {
        table.deleteRow(row.rowIndex - 1);
    };
    cellActions.appendChild(deleteButton);

    // Limpar os campos do formulário após adicionar
    document.getElementById("contactForm").reset();
}

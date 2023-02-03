function validar() {
    var nome = document.getElementById("nome");
    var telefone = document.getElementById("telefone");
    var email = document.getElementById("email");

    if (nome.value == "") {
        alert("Nome não inserido");
        nome.focus();
        return;
    }

    if (telefone.value == "") {
        alert("Telefone não inserido");
        telefone.focus();
        return;
    }

    if (email.value == "") {
        alert("Email não inserido");
        email.focus();
        return;
    }

    const dadosForm = new Object();
    dadosForm.nome = nome.value;
    dadosForm.telefone = telefone.value;
    dadosForm.email = email.value;
    console.log(dadosForm)

    const btn = document.getElementById('enviar');

    btn.addEventListener('click', () => {
        const form = document.getElementById('form_completo');
        form.style.display = 'none';
    }

    );

    $(document).click(function () {
        var container = $("#form_completo");
        container.hide();
        alert("Obrigado por seu cadastro!")
    })
}
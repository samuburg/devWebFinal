const formData = new FormData(document.querySelector('form'))
const nome = formData.get("nome");
var sobrenome = formData.get('sobrenome');
var cargo = formData('cargo');
var salario = formData('salario');
var dtnasc = formData('dtnasc');
var email = formData('email');
var telefone = formData('telefone');
var estado = formData('estado');
var cidade = formData('cidade');
var dtcontratacao = formData('dtcontratacao');

function Verifica(){
   // if (nome.length<3){
        alert(nome);
    //}
   // else(window.location.href('acao.php'))
}
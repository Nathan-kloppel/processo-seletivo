// regras
// possuir concurso ou dois anos de exp;
// tirar pelo menos 7 nos testes;

// se a nota for 9 ou maior e possuir portifolio está aprovado
// se a nota for 8 e possuir portifolio ele precisa passar pela entrevista técnica
// se a nota for 8 ele precisa possuir disponibilidade integral ele precisa passar pela entrevista técnica
// banco de talentos

// caso ele não nos requisitos iniciais ele está reprovado

const possuiConcurso = true;
const anosExperiencia = 1;
const notaTest = 9;
const possuiPortifolio = true;
const possuiDisponibilidadeintegral = false;

const possuiConcursoOuAnosExperiencia = possuiConcurso || anosExperiencia >= 2;
const possuiRequesitosIniciais = possuiConcursoOuAnosExperiencia && notaTest >= 7;

if (possuiRequesitosIniciais) {

    if (notaTest >= 9 && possuiPortifolio) {
        console.log("Aprovado diretamente")
    }
    else if (notaTest >= 8 && (possuiPortifolio || possuiDisponibilidadeintegral)) {
        console.log("entrevista técnica")
    }
    else {
        console.log("Banco de talentos")
    }

}
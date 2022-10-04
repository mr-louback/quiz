const dataQuizQuestions = [
    {//How old are a empire of China?
        question: 'How old are a empire of China at 2023?',
        a: 'over-2000-years',
        b: 'over-5000-years',
        c: 'over-3000-years',
        d: 'over-4000-years',
        correct: 'c',
    },
    {//How old are "Everybody hates Chris" Mother on the show?
        question: 'How age "Everybody hates Chris" Mother has on show?',
        a: '31 year old',
        b: '36 year old',
        c: '33 year old',
        d: '37 year old',
        correct: 'b',
    },
    {//
        question: 'How old are the Indian culture?',
        a: '4,500 years ago',
        b: '1,500 years ago',
        c: '2,500 years ago',
        d: '3,000 years ago',
        correct: 'a',
    },
    {//How old are a person who only lived 465 moons?
        question: 'How old are a person who only lived 465 moons?',
        a: '12 years old and half',
        b: '10 years old',
        c: '12 years old',
        d: '13 years old',
        correct: 'd',
    },
    {//When was Plato born?
        question: 'When was Plato born?',
        a: '426 B.C',
        b: '427 B.C',
        c: '428 B.C',
        d: '425 B.C',
        correct: 'c',
    }
]
// console.log(dataQuizQuestions);

// pegar valores de inputs
const setQuestion = document.getElementById('quest')
const alternativ_a = document.getElementById('a_text')
const alternativ_b = document.getElementById('b_text')
const alternativ_c = document.getElementById('c_text')
const alternativ_d = document.getElementById('d_text')
const btnSubmit = document.getElementById('submit_btn')

const answer = document.querySelectorAll('.resposta')

const quizResult = document.getElementById('resultQuiz')
// questao um
let questAtual = 0
// primeira resposta
let initialAnswer = ''
// total de acertos
let score = 0


question()
function question() {
    unSelect()
    const showQuestion = dataQuizQuestions[questAtual]
    // Question s
    setQuestion.innerText = showQuestion.question
    alternativ_a.innerHTML = showQuestion.a
    alternativ_b.innerHTML = showQuestion.b
    alternativ_c.innerHTML = showQuestion.c
    alternativ_d.innerHTML = showQuestion.d
}
function rarioSelected() {

    answer.forEach(resposta => {
        if (resposta.checked) {
            initialAnswer = resposta.id
        }
    })

    return initialAnswer

}

function unSelect() {
    answer.forEach(resposta => {
        resposta.checked = false
    })
}

// fazer validacao dentro do botao
btnSubmit.addEventListener('click', () => {
    const answerChecked = rarioSelected()
    console.log(initialAnswer);
    if (answerChecked) {
        // validar se tem uma resposta
        if (answerChecked === dataQuizQuestions[questAtual].correct) {
            // quando submeter se tiver uma resposta
            score++
        }

        questAtual++
        if (questAtual < dataQuizQuestions.length) {
            // avancar para proxima questao
            question()
        } else {
            quizResult.innerHTML =
                `
                <h2 class="content" >
                Voce acertou ${score} / ${dataQuizQuestions.length} perguntas
                </h2>
                <button class="btn-color" onClick="location.reload()">
                Reload
                </button>
                `
        }
    } else {
        // se nao tiver nao avançar 
        alert('Escolha uma resposta!!')
    }


})







// ao avancar zerar o checked box a frente



const letterDiv = document.querySelector('.letter-div');
const letterDiv = document.querySelector('.letter-div');
const hintButton = document.querySelector('.hint-btn');
const resetButton = document.querySelector('.reset-btn');
const hintDiv = document.querySelector('.hint-div');
const hintText = document.querySelector('.hint-txt');
const liveSpan = document.querySelector('.lives');
const wordDiv = document.querySelector('.word-div');
const notif = document.querySelector('.notif');
const notifContent = document.querySelector('.notif-content');
const notifSpan = document.querySelector('.notif-span');
const playAgain = document.querySelector('.notif-btn');

let letters;

let lives;

const words = new Map([
    ['test', 'a test word'],
    ['tests', 'another test word'],
    ['random', 'some random word'],
])

const word_list = [...words.keys()];

const getRandomWord = function(list) {
    return list[Math.floor(Math.random() * word_list.length)];

}

let select_word;
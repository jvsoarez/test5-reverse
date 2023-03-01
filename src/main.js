const button = document.querySelector('#reverse-button');
const textInput = document.querySelector('#text-input');
const paragraph = document.querySelector('#new-word-paragraph');

const revertWord = () => {
  const word = textInput.value;
  let newWord = '';
  for (let index = word.length - 1; index >= 0; index -= 1) {
    newWord += word[index];
  }
  return newWord;
};

const showNewWord = (event) => {
  event.preventDefault();
  paragraph.innerText = revertWord();
  textInput.value = '';
};

button.addEventListener('click', showNewWord);
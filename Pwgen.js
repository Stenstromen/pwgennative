const lettersList = "abcdefghijklmnopqrstuvwxyz";
const numbersList = "1234567890";
const symbolsList = "!#$%&=?-_";

function getRandomPass(long, letters, capitalLetters, numbers, symbols) {
  let randomPass = "";
  const validContidions = [];

  if (letters) validContidions.push(lettersList);
  if (capitalLetters) validContidions.push(lettersList.toUpperCase());
  if (numbers) validContidions.push(numbersList);
  if (symbols) validContidions.push(symbolsList);

  for (let i = 0; i < long; i++) {
    const pos = Math.floor(Math.random() * validContidions.length);
    randomPass = randomPass + getRandomChar(validContidions[pos]);
  }
  return randomPass;
}

function getRandomChar(charters) {
  const arrayCharacters = charters.split("");
  const posr = Math.floor(Math.random() * arrayCharacters.length);
  return arrayCharacters[posr];
}

export default getRandomPass;

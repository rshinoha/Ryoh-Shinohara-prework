// List of pictures
const pictures = {
    ver01: {
        picture: 'assets/images/ver01.jpg',
        badge: '<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@mikeshen?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from shen liu"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">shen liu</span></a>',
        name: 'Verstappen'
    },
    hul01: {
        picture: 'assets/images/hul01.jpg',
        badge: '<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@chuttersnap?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from chuttersnap"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">chuttersnap</span></a>',
        name: 'Hulkenberg'
    },
    rai01: {
        picture: 'assets/images/rai01.jpg',
        badge: '<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@jamesbo13?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from James Bowen"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">James Bowen</span></a>',
        name: 'Raikkonen'
    },
    ham01: {
        picture: 'assets/images/ham01.jpg',
        badge: '<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@scamartist?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Carl Jorgensen"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Carl Jorgensen</span></a>',
        name: 'Hamilton'
    },
    gas01: {
        picture: 'assets/images/gas01.jpg',
        badge: '<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@diyanaqua?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Diyana Qua"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Diyana Qua</span></a>',
        name: 'Gasly'
    },
    gas02: {
        picture: 'assets/images/gas02.jpg',
        badge: '<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@carlodagnolo?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Carlo D&#x27;Agnolo"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Carlo D&#x27;Agnolo</span></a>',
        name: 'Gasly'
    },
    lec01: {
        picture: 'assets/images/lec01.jpg',
        badge: '<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@laukev?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Kévin Langlais"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Kévin Langlais</span></a>',
        name: 'LeClerc'
    },
    ric01: {
        picture: 'assets/images/ric01.jpg',
        badge: '<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@ferhat?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Ferhat Deniz Fors"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Ferhat Deniz Fors</span></a>',
        name: 'Ricciardo'
    },
    mas01: {
        picture: 'assets/images/mas01.jpg',
        badge: '<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@chuttersnap?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from chuttersnap"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">chuttersnap</span></a>',
        name: 'Massa'
    },
    har01: {
        picture: 'assets/images/har01.jpg',
        badge: '<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@pablizzio24?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Pablo Franco"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Pablo Franco</span></a>',
        name: 'Hartley'
    }
};

// Symbol for blank word
const symbol = '_';

// Correct or incorrect answers
const checkMark = '<svg class="bi bi-check" width="1em" height="1em" viewBox="0 0 16 16" fill="green" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clip-rule="evenodd"/></svg>';
const xMark = '<svg class="bi bi-x" width="1em" height="1em" viewBox="0 0 16 16" fill="red" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" clip-rule="evenodd"/></svg>';

// Directions at start and end of game
const dirGameStart = 'Press any key to get started!';
const dirCorrect = 'You\'re correct! Press enter to start a new game.';
const dirWrong = 'Sorry! You\'ve used up all of your guesses. Press enter to start a new game.';

// List of picture names
const picNames = Object.keys(pictures);

// Max number of guesses available
const maxGuess = 5;

// Counter for number of wins
let numWins = 0;

// Chooses random picture name
const choosePic = function(arr) {
    const randNum = Math.floor(Math.random() * arr.length);
    return arr[randNum];
}

// Generates string of blanks
const makeBlanks = function(word) {
    let numBlanks = 0;
    let strBlanks = '';
    for( let i = 0; i < word.length; i++ ) {
        if(isLetter(word[i])) {
            strBlanks += symbol;
        }
        else {
            strBlanks += word[i];
        }
    }
    return strBlanks;
}

// Checks if character is part of the alphabet
// Provided by this Stack Overflow anser: https://stackoverflow.com/a/32567789
const isLetter = function(c) {
    return c.toLowerCase() != c.toUpperCase();
}

// Replaces blanks with correct letters
const replaceBlanks = function(word, blanks, letter) {
    const allCaps = word.toUpperCase();
    const capLetter = letter.toUpperCase();
    const wordLen = word.length;
    let updateBlanks = '';
    for( let i = 0; i < wordLen; i++ ) {
        if(allCaps[i] === capLetter) {
            updateBlanks += capLetter;
        }
        else {
            updateBlanks += blanks[i];
        }
    }
    return updateBlanks;
}

// Checks if game is finished
const gameFinished = function() {
    return !blanks.innerText.includes(symbol) || currentCount <= 0;
}

// Updates blanks with appropriate letters
const updateGame = function(event) {
    if(!gameFinished()) {
        blanks.innerText = replaceBlanks(randName, blanks.innerText, event.key);
        updateGuess(event);
        updateUsedWords(event);
    }
}

// Checks if letter has been used or is a letter included in the word
const addToUsedLetter = function(c) {
    let letter = c.toUpperCase();
    return isLetter(letter) && !randName.includes(letter) && !usedLetters.innerText.includes(letter) && letter.length == 1;
}

// Updates guess count remaining if addToUsedLetter is true
const updateGuess = function(event) {
    if(addToUsedLetter(event.key)) {
        currentCount -= 1;
        guessCount.innerText = currentCount;
    }
}

// Updates used letters if addToUsedLetter is true 
const updateUsedWords = function(event) {
    const letter = event.key.toUpperCase();
    if(addToUsedLetter(letter)) {
        if(usedLetters.innerText.length == 0) {
            usedLetters.innerText += letter;
        }
        else {
            usedLetters.innerText += `, ${letter}`;
        }
    }
}

// Displays a mark at the end of the game (check = correct, x = guesses used up)
const updateMarks = function(event) {
    if(gameFinished()) {
        if(!blanks.innerText.includes(symbol)) {
            correct.innerHTML = checkMark + ' you got it!';
            directions.innerText = dirCorrect;
        }
        else {
            correct.innerHTML = xMark + ' oops...';
            directions.innerText = dirWrong;
        }
    }
}

const updateWins = function() {
    if(gameFinished()) {
        if(!blanks.innerText.includes(symbol)) {
            numWins += 1;
            wins.innerText = numWins;
        }
    }
}

// Updates page with new picture
const newGame = function(event) {
    const key = event.key;
    if(key === 'Enter') {
        updateWins();
        randPic = choosePic(picNames);
        randName = pictures[randPic]["name"].toUpperCase();
        currentCount = maxGuess;
        directions.innerText = dirGameStart;
        picture.src = pictures[randPic]["picture"];
        badge.innerHTML = pictures[randPic]["badge"];
        currentBlanks = makeBlanks(randName);
        blanks.innerText = currentBlanks;
        guessCount.innerText = currentCount;
        usedLetters.innerText = '';
        correct.innerHTML = '';
    }
}

// Set up variables for start of game

// Choosing random picture
let randPic = choosePic(picNames);
let randName = pictures[randPic]["name"].toUpperCase();

// References
let directions = document.querySelector('#directions');
let picture = document.querySelector('#picture');
let badge = document.querySelector('#badge');
let blanks = document.querySelector('#blanks');
let guessCount = document.querySelector('#guessCount');
let usedLetters = document.querySelector('#usedLetters');
let currentCount = maxGuess;
let correct = document.querySelector('#isCorrect');
let wins = document.querySelector('#wins');

directions.innerText = dirGameStart;
picture.src = pictures[randPic]["picture"];
badge.innerHTML = pictures[randPic]["badge"];
currentBlanks = makeBlanks(randName);
blanks.innerText = currentBlanks;
guessCount.innerText = currentCount;
usedLetters.innerText = '';
wins.innerText = numWins;

document.addEventListener('keyup', updateGame);
document.addEventListener('keyup', updateMarks);
document.addEventListener('keyup', newGame);
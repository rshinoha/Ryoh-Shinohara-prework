// List of pictures
const pictures = {
    ver01: {
        picture: '../images/ver01.jpg',
        badge: '<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@mikeshen?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from shen liu"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">shen liu</span></a>',
        name: 'Verstappen'
    },
    hul01: {
        picture: '../images/hul01.jpg',
        badge: '<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@chuttersnap?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from chuttersnap"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">chuttersnap</span></a>',
        name: 'Hulkenberg'
    },
    rai01: {
        picture: '../images/rai01.jpg',
        badge: '<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@jamesbo13?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from James Bowen"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">James Bowen</span></a>',
        name: 'Raikkonen'
    }
};

// Symbol for blank word
const symbol = '_';

// Chooses random picture name
const choosePic = function(arr) {
    const randNum = Math.floor(Math.random() * arr.length);
    return arr[randNum];
}

// Generates string of blanks
const makeBlanks = function(word) {
    const numBlanks = word.length;
    return symbol.repeat(numBlanks);
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

// Updates blanks with appropriate letters
const updateGame = function(event) {
    blanks.innerText = replaceBlanks(randName, blanks.innerText, event.key);
}

// List of picture names
const picNames = Object.keys(pictures);

// Max number of guesses available
const maxGuess = 10;

// Choosing random picture
let randPic = choosePic(picNames);
let randName = pictures[randPic]["name"];
let letter = '';
console.log(randName);

// References
let blanks = document.querySelector('#blanks');

currentBlanks = makeBlanks(randName);
blanks.innerText = currentBlanks;

document.addEventListener('keyup', updateGame);
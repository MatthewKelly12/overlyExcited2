let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
let daBombSent = ["Tweedle", "Dee", "Doodle", "Dumb", "Tiki", "Bum", "Get", "You", "Some"];
let newSentence = "";

let k = 1;

function addExcitement(wordArray, punct) {
    for (let i = 0; i < wordArray.length; i++) {
        if ((i + 1) % 3 === 0) {
        newSentence += ` ${wordArray[i]}${punct.repeat(k++)}`;
        console.log(newSentence);
        }
        else {
            newSentence += ` ${wordArray[i]}`;
        }

    }
}

addExcitement(sentence, "?");
// addExcitement(sentence, "@@");

// addExcitement(daBombSent, "!!");






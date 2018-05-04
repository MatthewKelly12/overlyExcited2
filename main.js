let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
let daBombSent = ["Tweedle", "Dee", "Doodle", "Dumb", "Tiki", "Bum", "Get", "You", "Some"];
let newSentence = "";

function addExcitement(wordArray, sent) {
    for (let i = 0; i < wordArray.length; i++) {
        newSentence += ` ${wordArray[i]}`;
        console.log(newSentence);

    }
}

addExcitement(sentence);
addExcitement(daBombSent);






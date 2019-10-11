// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
console.log(sentence.length);
/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
// added punctuation argument
function addExcitement (theWordArray, punctuation) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp
        // i starting at 0 put exclamation marks in wrong iteration spot
        if ((i + 1) % 3 === 0) {
            buildMeUp += theWordArray[i] + "! "
            console.log(buildMeUp);
        } else {
            // space between "" corrects word spacing 
        buildMeUp += theWordArray[i] + " ";
        console.log(buildMeUp);
        }
        // Print buildMeUp to the console
    }

}

// Invoke the function and pass in the array
addExcitement(sentence, "!")
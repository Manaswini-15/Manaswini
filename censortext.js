var censorwords=["sad","bad","mad"];
var customCensoredWords=[];
function censor(inStr){
    for (idx in censorwords){
        inStr=inStr.replace(censorwords[idx],"***");
    }
    for(idx in customCensoredWords){
        inStr=inStr.replace(customCensoredWords[idx],"***");

    }
    return inStr;
}

function addCensoredWord(word)
{
    customCensoredWords.push(word);
}
function getCensoredWords()
{
   return censorwords.concat(customCensoredWords);
}

exports.censor=censor;
exports.addCensoredWord=addCensoredWord;
exports.getCensoredWords=getCensoredWords;
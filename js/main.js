//indexOf will return positon of string——if not found will return -1
//string.indexOf("?") > -1
//Think I understand how to create each paragraph, need to figure out how to create all the paragraphs.
//if (temp_quote.indexOf("?") > -1) && if (temp_quote.indexOf("!") > -1)


var quotes_array = ["My eyes! The goggles do nothing!",
"Am I too late for the 4:30 autogyro?",
"I'll just go with a muumuu.",
"There's something about flying a kite at night that's just so unwholesome.",
"You don't win friends with salad!",
"They call 'em fingers, but I've never seen them fing. Oh, there they go.",
"The ring came off my pudding cap!",
"Conservation of mass, it's the law!",
"Marge, I won't lie to you.",
"I live in a single room above a bowling alley and below another bowling alley.",
"Me fail english? That unpossible!",
"Do you ever wonder why fat people have fat children? or why chinese people have chinese children?",
"You're gonna have to speak up, I'm wearing a towel.",
"They're the suckiest bunch of sucks that ever sucked!",
"I used to be with it, but then they changed what it was. It'll happen to you!",
"I call it, Billy and the Cloneasauras!",
"BART DO YOU WANT TO SEE MY NEW CHAINSAW AND HOCKEY MASK?",
"Ahhhh, I just love these lazy Saturdays...",
"Homer, are you wearing a tie to impress Laddie?",
"I call the big one bitey!",
"Hi Principal Skimster, hi Super Nintendo Chalmers!",
"I think it was called, The Bus that Couldn't Slow Down.",
"And Homer, if you could kill someone on the way out, that would be a huge help.",
"Hahaha dying tickles!"];

$(document).ready(function(){




$("#lorem-ipsum").submit(function(){
  var paragraphs = " ";

  var textContent = document.getElementById("text-field");

  var paragraph_number = $("#select").val();

  //console.log(paragraph_number);

    //console.log(quotes_array[j]);
  for (var a = 0; a < paragraph_number; a++) {
    //For loop that builds paragraphs, counts from 0 to paragraph number.
    var sentence_group = '';
    //Init variable that contains a group of sentences
      //For loop that builds sentence groups out of sentences, iterates from 0 - 4
      for (var c = 0; c < quotes_array.length-4; c++) {
        //For loop that builds
        var random_words = fisherYates(quotes_array);

        var sentence = random_words.toString().replace(/,/g, ' ') + '. ';

      }
      sentence_group += sentence;

      paragraphs += '<p>' + sentence_group + '</p>';
    }

  console.log(paragraphs);

  $("#text-field").empty().html(paragraphs);

  return false;


});


//Fisher Yates switch

function fisherYates(words) {
  var i = quotes_array.length, j, tempi, tempj;
  if (i === 0) return false;
  while ( --i) {
    j = Math.floor( Math.random () * ( i + 1) );
    tempi = words[i];
    tempj = words[j];
    words[i] = tempj;
    words[j] = tempi;
  }
  return words;
};

function makeWordsGoNow(words) {
  for (var i = 0; i < 8; i++)
  {
    var msg = [""];
    var temp_quote = words[i];
    if (temp_quote.indexOf("?") > -1)
    {
      msg.push(temp_quote);
    }
    else
    {
      msg.push(temp_quote);
      msg.push("." + " ");
    }
  }
  return msg;
  alert(msg);
};


});

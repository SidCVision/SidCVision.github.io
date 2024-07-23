$(document).ready(function() {
  var words = $(".ah-words-wrapper b");
  var wordIndex = 0;
  
  setInterval(function() {
    var currentWord = words.eq(wordIndex);
    words.removeClass("is-visible");
    currentWord.addClass("is-visible");
    wordIndex = (wordIndex + 1) % words.length;
  }, 2000); // Adjust interval (in milliseconds) as needed
});

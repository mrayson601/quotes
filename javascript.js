function getQuote() {
  $.ajax({
    beforeSend: function(request) {
      request.setRequestHeader("X-Mashape-Key", 'MtxksTB6AEmshoEMnw3XvpaE7YoPp1DEwYZjsnJJhiGJgacmFD');
    },
    dataType: "json",
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/",
    //data: {cat: "movies"},
    success: function(data) {

      $("#quote").fadeOut(function(){
        $("#quote").text('"'+data[0].quote+'"')
      }).fadeIn();

      $("#author").fadeOut(function(){
        $("#author").text(data[0].author)
      }).fadeIn();

      var quoteURI = data[0].quote+" >> "+data[0].author;
      console.log(quoteURI);
      quoteURI = encodeURI(quoteURI);
      $("#tweet").attr("href", "https://twitter.com/intent/tweet?&text=");
      var tweetLink=$("#tweet").attr("href");
      tweetLink = tweetLink.replace("text=", "text=" + quoteURI)
      $("#tweetLink").attr("href", tweetLink);
    }
  })
}


$(document).ready(function() {
  getQuote();
})

$(document).ready(function() {
  $("#newQuote").click(function() {
    getQuote();


  })
});

function getQuote() {
  $.ajax({
    beforeSend: function(request) {
      request.setRequestHeader("X-Mashape-Key", 'MtxksTB6AEmshoEMnw3XvpaE7YoPp1DEwYZjsnJJhiGJgacmFD');
    },
    dataType: "json",
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/",
    //data: {cat: "movies"},
    success: function(data) {

      console.log(data);
      

      $("#quote").fadeOut(function(){
        $("#quote").text('"'+data.quote+'"')
      }).fadeIn();

      $("#author").fadeOut(function(){
        $("#author").text(data.author)
      }).fadeIn();




      var quoteURI = data.quote+" --> "+data.author;
      quoteURI = encodeURI(quoteURI);
      $("#tweet").attr("href", "https://twitter.com/intent/tweet?&text=");
      var tweetLink=$("#tweet").attr("href");
      tweetLink = tweetLink.replace("text=", "text=" + quoteURI)
      $("#tweet").attr("href", tweetLink);
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

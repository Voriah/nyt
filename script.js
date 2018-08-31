function search() {

var search = $("#search").val()
var startDate = $("#sYear").val();
var endDate = $("#eYear").val();
var page = $("#pageNum").val();

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "0b52fcd7e3a44c78808230e9ef20205e",
  'q': search,
  'begin_date': startDate+"0101",
  'end_date': endDate +"1231",
  'sort': "newest",
  'page': 0
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function (result) {
  console.log(result);

  result.response.docs.forEach(doc => {
    console.log(doc.headline.main)
    $("#articles").append(`
    <h1 class="headlines">${doc.headline.main}</h1>
    <h3 class="author">${doc.byline.original}</h3>
    <h4 class="link"><a target="_blank" href="${doc.web_url}">${doc.web_url}</a></h4>
    
    `)
  });


}).fail(function (err) {
  throw err;
});

}

function clearResults() {
  $("#search").val("")
 $("#sYear").val("");
$("#eYear").val("");
 $("#pageNum").val("");
  $("#articles").empty();
  console.log("wtf")
}


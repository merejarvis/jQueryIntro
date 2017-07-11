$(document).ready(function(){

//run ajax now. 2 methods, GET and POST
// GET  $.get(<url>,<params>)
        // .done(function(output){
        //
        // })

var api_url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a555d295cc5229b2c1156e9577f3223c'

var search_url = 'https://api.themoviedb.org/3/search/movie?api_key=a555d295cc5229b2c1156e9577f3223c&query='

var image_url = 'https://image.tmdb.org/t/p/w300/'

var $ul = $('.movie-list')

var $form = $('form')

var full_url = ''


$.get(api_url)
  .done(function(data){
    var movie_json=data.results

    console.log(movie_json[0].poster_path);
    for(var i = 0; i<movie_json.length; i++){
      var link = movie_json[i].poster_path
      var $newLi = $('<li>')
      var $newImg = $('<img>')
      $newImg.attr('src',image_url+link)
      var $appendList= $ul.append($newLi)
      $appendList.append($newImg)
      // $newLi.img(image_url+link)
      // $list.append($newLi)
    }
  })

  $form.on('submit', function (event) {
    // stop the form submission
    // default event
    event.preventDefault()
  var form_data = $(this).serializeArray()[0].value;
  full_url = search_url+form_data

  $.get(full_url)
    .done(function(data){
      var jsonData =data.results
      console.log(jsonData)

      $ul.empty()


      for(var i = 0; i<jsonData.length; i++){
        var link = jsonData[i].poster_path
        var $newLi = $('<li>')
        var $newImg = $('<img>')
        $newImg.attr('src',image_url+link)
        var $appendList= $ul.append($newLi)
        $appendList.append($newImg)
        // $newLi.img(image_url+link)
        // $list.append($newLi)
      }

    })

  })






})

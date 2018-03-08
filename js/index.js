 
$(document).ready(function(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
});

function showPosition(position) {
    var lat=position.coords.latitude ; 
   var lng=position.coords.longitude;
 

       
      $.getJSON("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lng+"&APPID=c301201c9624eeb34d3f739ed4f93290&units=metric").done(function(data){
     var weather=(data.weather[0].main);
        var weatherdesc=data.weather[0].description;
      var temp=(data.main.temp);  
       var icon=(data.weather[0].icon);
      var url="http://openweathermap.org/img/w/"+icon+".png";
       $("#weather").text(weather);
        $("#temp").text(temp);
document.getElementById("icon").src=url;
        var bgsrc;
        switch(weatherdesc){
          case "rain":
          case "shower rain":
          case "thunder storm":bgsrc="http://4hdwallpapers.com/wp-content/uploads/2013/04/Spring-Green-Grass-Close-Up-Under-Rain-1024x683.jpg";
            break;
          case "snow":bgsrc="https://orig00.deviantart.net/7550/f/2008/020/9/c/its_a_snowy_day_by_jedi_zombie_jena99.jpg";
            break;
          case "mist":bgsrc="https://i.ytimg.com/vi/jtWtv8SXDLA/maxresdefault.jpg";
            break;
          case "clear sky":bgsrc="https://s3.envato.com/files/227251019/preview.jpg";
            break;
          default:bgsrc="https://grist.files.wordpress.com/2013/11/clouds.jpg?w=1024&h=576&crop=1";
        }
        
        
document.body.style.backgroundImage = "url("+bgsrc+")";
      });
}

function f(){
 var cel= $("#temp").text();
  var far=(cel*1.8+32).toFixed(2);
  $("#temp").text(far);
  $("#units").text("Fahrenheit");
document.getElementById( "units" ).setAttribute( "onClick", "javascript:c();" );
}

function c(){
var far= $("#temp").text();
  var cel=((far-32)/1.8).toFixed(2);
  $("#temp").text(cel);
  $("#units").text("Celcius");
  
  document.getElementById( "units" ).setAttribute( "onClick", "javascript:f();" );
}

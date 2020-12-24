
//api code, not valid yet..
/*an application to search a city and then get it's resulting weather*/
function myFunction(){
    
    var city = document.getElementById("myText").value;

    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + 
    "&units=metric&APPID=c1529d3a73ef95a02dd287d96a67f644", 
    function(data){
        console.log(data);

        var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        var temp = Math.floor(data.main.temp);
        var weather = data.weather[0].main;
        var high = Math.floor(data.main.temp_max);
        var low = Math.floor(data.main.temp_min);
        var windSpeed = data.wind.speed;
        var windDeg = data.wind.deg;

        $('.icon').attr('src', icon);
        $('.temp').append(temp);//append because your adding into this tag, image was a src itself, thats the difference
        $('.weather').append(weather);
        $('.high').append(high);
        $('.low').append(low);
        $('.speed').append(windSpeed);
        $('.deg').append(windDeg);
        
    });
    //not sure how to clear the previous data yet. allow multiple queries without having
    //to refresh page each time
}
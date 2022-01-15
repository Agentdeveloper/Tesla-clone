var header = document.getElementById("container")
var ms = document.getElementById("models")
var m3 = document.getElementById("model3")
var mx = document.getElementById("modelx")
var my = document.getElementById("modely")
var model = document.getElementById("model")
var speed = document.getElementById("1.9s")
var topspeed = document.getElementById("topspeed")
var maxrange = document.getElementById("maxrange")

ms.onclick = function () {
    header.style.backgroundImage = "url(/IMG/image-1.png)"
    model.innerHTML = "Model S";
    speed.innerHTML = "2.6s"
    topspeed.innerHTML = "200 mph"
    maxrange.innerHTML = "405 mi"
}
m3.onclick = function () {
    header.style.backgroundImage = "url(/IMG/image-2.png)"
    model.innerHTML = "Model 3";
    speed.innerHTML = "3.3s"
    topspeed.innerHTML = "162 mph"
    maxrange.innerHTML = "358 mi"
}
mx.onclick = function () {
    header.style.backgroundImage = "url(/IMG/image-3.png)"
    model.innerHTML = "Model X";
    speed.innerHTML = "2.9s"
    topspeed.innerHTML = "155 mph"
    maxrange.innerHTML = "348 mi"
}
my.onclick = function () {
    header.style.backgroundImage = "url(/IMG/image-4.png)"
    model.innerHTML = "Model Y";
    speed.innerHTML = "3.4s"
    topspeed.innerHTML = "134 mph"
    maxrange.innerHTML = "326 mi"
}
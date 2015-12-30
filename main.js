(function() {
  // Functions
  function update() {
    // Get values
    var t = getTime();
    var h = "#" + t.replace(/:/g, "");
    
    // Update
    document.getElementById("time").innerHTML = t;
    document.getElementById("hex").innerHTML = h;
    document.getElementsByTagName("body")[0].style.backgroundColor = h;
  };
  
  function getTime() {
    var d = new Date();
    var h = ("0" + d.getHours()).slice(-2);
    var m = ("0" + d.getMinutes()).slice(-2);
    var s = ("0" + d.getSeconds()).slice(-2);

    return h + ":" + m + ":" + s;
  };
  
  // Repeat
  setInterval(update, 1000);
}());

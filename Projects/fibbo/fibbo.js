function fibbo(n1 = 0, n2 = 1) {
  document.getElementById("fibbo").disabled = true;

  var fibboDiv = document.getElementById("fibbo-div");

  if (fibboDiv.getElementsByTagName("p").length > 2) alert("Well done!");
  else {
    if (n2 > 3000000) {
      let pS = fibboDiv.getElementsByTagName("p");
      let lastP = pS[pS.length - 1];
      lastP.innerHTML += "It's enough!";

      fibbo();
    } else {
      if (n1 == 0) {
        var p = document.createElement("p");
        fibboDiv.appendChild(p);

        let n3 = n1 + n2;
        let n4 = n2 + n3;

        setTimeout(function () {
          p.innerHTML = n1 + ", ";
        }, 300);

        setTimeout(function () {
          p.innerHTML += n2 + ", ";
        }, 600);

        setTimeout(function () {
          p.innerHTML += n3 + ", ";
        }, 900);

        setTimeout(fibbo, 1100, n3, n4);
      } else {
        let pS = fibboDiv.getElementsByTagName("p");
        let lastP = pS[pS.length - 1];

        let n3 = n1 + n2;
        let n4 = n2 + n3;

        lastP.innerHTML += n2 + ", ";

        setTimeout(function () {
          lastP.innerHTML += n3 + ", ";
        }, 300);

        setTimeout(fibbo, 600, n3, n4);
      }
    }
  }
}

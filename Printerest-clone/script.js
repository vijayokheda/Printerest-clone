// changing color navgation bar
let home = document.querySelector("#home");

// that is a enetr code

home.addEventListener("mouseenter", function () {
  home.style.color = "red";
});

// that is a leave code

home.addEventListener("mouseleave", function () {
  home.style.color = "black";
});

// chaning image and seraching image also

let arr = [
  {
    name: "Diving on sea",
    Image:
      "https://images.unsplash.com/photo-1707343846292-56e4c6abf291?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
  },
  {
    name: "Beach view",
    Image:
      "https://images.unsplash.com/photo-1707343843344-011332037abb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Library",
    Image:
      "https://images.unsplash.com/photo-1709113646175-dac6673b88f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "under water",
    Image:
      "https://images.unsplash.com/photo-1707343843344-011332037abb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "tree image",
    Image:
      "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyZWV8ZW58MHwwfDB8fHww",
  },
  {
    name: "Forest tree",
    Image:
      "https://images.unsplash.com/photo-1533551037358-c8f7182cdb79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW91bnRhaW4lMjBjbGltYmluZ3xlbnwwfDB8MHx8fDA%3D",
  },
  {
    name: "Girl climbing",
    Image:
      "https://images.unsplash.com/photo-1524755968487-e44edcb96e1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vdW50YWluJTIwY2xpbWJpbmd8ZW58MHwwfDB8fHww",
  },
  {
    name: "Girl climbing",
    Image:
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNwb3J0fGVufDB8fDB8fHww",
  },
  {
    name: "Swimming",
    Image:
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNwb3J0fGVufDB8fDB8fHww",
  },
  {
    name: "Leave",
    Image:
      "https://images.unsplash.com/photo-1651340423187-3a32745b7aa0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF1dHJlbG92ZXJ8ZW58MHwwfDB8fHww",
  },
  {
    name: "Library hall",
    Image:
      "https://images.unsplash.com/photo-1465929639680-64ee080eb3ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxpYnJhcnl8ZW58MHwwfDB8fHww",
  },
  {
    name: "Library",
    Image:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxpYnJhcnl8ZW58MHwwfDB8fHww",
  },
  {
    name: "Flower",
    Image:
      "https://images.unsplash.com/photo-1613775184723-d4ab57662d0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Pink rose",
    Image:
      "https://images.unsplash.com/photo-1657626499269-4df3623bcde0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
  },
  {
    name: "Leaves",
    Image:
      "https://images.unsplash.com/photo-1709001870098-6f89f98c5c20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
  },
  {
    name: "Tiger",
    Image:
      "https://images.unsplash.com/photo-1605092676920-8ac5ae40c7c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGlnZXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Elefant",
    Image:
      "https://images.unsplash.com/photo-1566160996920-95a924dddecf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlZmFudHxlbnwwfHwwfHx8MA%3D%3D",
  },
];

function showImages() {
  var clutter = "";
  arr.forEach(function (obj) {
    clutter += `<div class="box">
       <img
         class="cursor-pointer  rounded-2xl"
         src="${obj.Image}"
       />
       <div class="caption"></div>
     </div>`;
  });
  document.querySelector(".container").innerHTML = clutter;
}

let input = document.querySelector("#searchinput");

function HandleSearchFunction() {
  input.addEventListener("focus", function () {
    document.querySelector(".overlay").style.display = "block";
  });

  input.addEventListener("blur", function () {
    document.querySelector(".overlay").style.display = "none";
  });

  input.addEventListener("input", function () {
    const filteredArray = arr.filter((obj) =>
      obj.name.toLocaleLowerCase().startsWith(input.value)
    );
    let clutter = "";
    filteredArray.forEach(function (obj) {
      clutter += `  <div class="res flex items-center px-5 py-4">
      <i class="fa-solid fa-magnifying-glass m-2"></i>
      <h3 class="font-semibold">${obj.name}</h3>
    </div>`;
    });
    // document.querySelector(".searchdata").style.display = "block";
    document.querySelector(".searchdata").innerHTML = clutter;
  });
}

HandleSearchFunction();
showImages();

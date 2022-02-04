// API à utiliser pour les images de chiens: https://dog.ceo/api/breeds/image/random

const RandomizerBtn = document.querySelector(".btn-primary")
const Img = document.getElementById("dogsAPI")
const Name = document.getElementById("dogName")
const Id = document.getElementById("dogId")
const Age = document.getElementById("dogAge")
const Registry = document.getElementById("dogRegistry")

const url = 'https://dog.ceo/api/breeds/image/random'

//--------------------------------------------------------------------------------------------------//

const fetchDogImg = async () => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

function DogAge () {  
    return Math.floor((Math.random() * 17) + 1)
    };


function DogId () {
    return Math.floor((Math.random() * 998) + 1)
    };


function DogName () {
    const NameDog = ["Chase","Marshall","Rocky","Zuma","Skye","Rubble","Everest","Liberty","Tracker","Tuck","Ella","Rex"];
    return NameDog[Math.floor((Math.random() * 12))]
    };


function DogRegistry () {   
    return Math.floor((Math.random() * 9000) + 999)
    };

//--------------------------------------------------------------------------------------------------//


RandomizerBtn.addEventListener("click", function() {


  var ImgUrl = Promise.resolve(fetchDogImg());
  ImgUrl.then(function(v) {
  Img.src = v.message; // 1
  });

  Id.innerText = DogId();
  Name.innerText = DogName();
  Age.innerText = DogAge() + " years";
  Registry.innerText = DogRegistry();
  })


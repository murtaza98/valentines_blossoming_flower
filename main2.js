document.addEventListener("DOMContentLoaded", function () {
    // Get all elements with class "image1"
    var images = document.querySelectorAll(".image1");
  
    // Function to set random position for an element
    function setRandomPosition(element) {
      element.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
      element.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    }
  
    // Set random position for each image
    images.forEach(function (image) {
      setRandomPosition(image);
    });
  });
  
  function angry() {
    // get all image with class image1 and change the src
    var images = document.querySelectorAll(".image1");
    var absImg = document.getElementById("absImg");
    var mainImg = document.getElementById("mainImg");
    mainImg.src = "https://github.com/NikhilMarko03/resources/blob/main/sad1.gif?raw=true";
  
    absImg.style.display = "flex";
  
    images.forEach(function (image) {
      image.src = "https://github.com/NikhilMarko03/resources/blob/main/sad1.gif?raw=true";
    });
  }
  function happy() {
    // get all image with class image1 and change the src
    var images = document.querySelectorAll(".image1");
    var absImg = document.getElementById("absImg");
    absImg.style.display = "flex";
    var mainImg = document.getElementById("mainImg");
    mainImg.src = "https://github.com/NikhilMarko03/resources/blob/main/happy3.gif?raw=true";
  
    images.forEach(function (image) {
      image.src = "https://github.com/NikhilMarko03/resources/blob/main/heart.gif?raw=true";
    });
  }
  
  const sadCat = [
    "https://media1.tenor.com/images/9413ffc5a11722a3cc456a88810750bd/tenor.gif?itemid=14193216",
    "https://emoji.gg/assets/emoji/5228_cat_cri.gif",
    "https://media1.tenor.com/images/a0554662ae7c3c60c0a7fdadac74ef18/tenor.gif?itemid=13931206",
    "https://media3.giphy.com/media/qpCvOBBmBkble/giphy.gif",
    "https://c.tenor.com/fpIAhF2jIY0AAAAC/cat-crying.gif",
    "https://c.tenor.com/BP70qe8X0J8AAAAC/crycat-crying-cat.gif",
  ];
  
  const blackmail = [
    "Please, Sakina",
    "I'm begging you",
    "I'm crying",
    "I'm sad",
    "HUHUHUHU",
    "Please Say Yes, Sakina",
    "I'm gonna cry",
  ];
  
  function normal() {
    var absImg = document.getElementById("absImg");
    absImg.style.display = "none";
    var mainImg = document.getElementById("mainImg");
    mainImg.src = "https://github.com/NikhilMarko03/resources/blob/main/happy1.gif?raw=true";
  }
  
  let counter = 0;
  
  function no() {
    counter++;
    let sadMusic = document.getElementById("sadMusic");
    let happyMusic = document.getElementById("happyMusic");
    happyMusic.pause();
    sadMusic.play();
    let model = document.getElementById("model");
    model.style.display = "none";
    setTimeout(() => {
      model.style.display = "flex";
      const modelImage = document.getElementById("modelImg");
      const modelText = document.getElementById("modelText");
      modelImage.src = sadCat[Math.floor(Math.random() * sadCat.length)];
      modelText.innerText =
        blackmail[Math.floor(Math.random() * blackmail.length)];
    }, 100);
  }
  
  function yes() {
    let model = document.getElementById("model");
    let sadMusic = document.getElementById("sadMusic");
    sadMusic.pause();
    model.style.display = "none";
    
    // Show terms and conditions modal
    let termsModel = document.getElementById("termsModel");
    setTimeout(() => {
        termsModel.style.display = "flex";
        // Reset all checkboxes
        document.getElementById("term1").checked = false;
        document.getElementById("term2").checked = false;
        document.getElementById("term3").checked = false;
        document.getElementById("term4").checked = false;
        checkAllTerms();
    }, 100);
}

function checkAllTerms() {
    const term1 = document.getElementById("term1").checked;
    const term2 = document.getElementById("term2").checked;
    const term3 = document.getElementById("term3").checked;
    const term4 = document.getElementById("term4").checked;
    
    const acceptButton = document.getElementById("acceptTerms");
    const hint = document.getElementById("termsHint");
    
    if (term1 && term2 && term3 && term4) {
        acceptButton.disabled = false;
        hint.textContent = "Perfect! You're ready to proceed! 💖✨";
        hint.style.color = "#ff4f99";
        hint.style.fontWeight = "600";
    } else {
        acceptButton.disabled = true;
        const checkedCount = [term1, term2, term3, term4].filter(Boolean).length;
        hint.textContent = `Check all boxes to proceed! (${checkedCount}/4 checked) 😉`;
        hint.style.color = "#999";
        hint.style.fontWeight = "400";
    }
}

function spawnHearts(button) {
    const hearts = ["❤️", "💖", "💕", "💗", "💓", "💘", "💝", "🌹", "✨", "💫"];
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < 25; i++) {
        const heart = document.createElement("span");
        heart.className = "heart-particle";
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = centerX + "px";
        heart.style.top = centerY + "px";
        heart.style.fontSize = (16 + Math.random() * 20) + "px";

        const angle = (Math.PI * 2 * i) / 25;
        const distance = 80 + Math.random() * 120;
        heart.style.setProperty("--x", Math.cos(angle) * distance + "px");
        heart.style.setProperty("--y", Math.sin(angle) * distance + "px");
        heart.style.animationDelay = (Math.random() * 0.3) + "s";

        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 2000);
    }
}

function acceptTerms() {
    const term1 = document.getElementById("term1").checked;
    const term2 = document.getElementById("term2").checked;
    const term3 = document.getElementById("term3").checked;
    const term4 = document.getElementById("term4").checked;
    
    if (term1 && term2 && term3 && term4) {
        const button = document.getElementById("acceptTerms");
        
        // Explode hearts from the button!
        spawnHearts(button);
        
        // Delay the transition so she sees the hearts
        setTimeout(() => {
            // Hide terms modal
            let termsModel = document.getElementById("termsModel");
            termsModel.style.display = "none";
            
            // Show success modal
            let model = document.getElementById("model2");
            let happyMusic = document.getElementById("happyMusic");
            happyMusic.play();
            
            setTimeout(() => {
                model.style.display = "flex";
            }, 100);
            
            const wedate = document.getElementById("wedate");
            const btns = document.getElementById("btns");
            btns.style.display = "none";
            wedate.innerText = "We are each other's valentine now. I love you Sakina. ❤️😘";

            // Open index1.html in a new tab
            setTimeout(() => {
                window.open("index1.html", "_blank");
            }, 500);
        }, 1200);
    }
}

  
  function ly2() {
    let model = document.getElementById("model2");
    model.style.display = "none";
    let model2 = document.getElementById("model");
    model2.style.display = "none";
  }
  

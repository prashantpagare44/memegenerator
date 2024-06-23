const homeButton = document.querySelector(".meme_button");
    const exitButton = document.querySelector(".exit_btn");
    const memeBox = document.querySelector(".box");
    const memeButton = document.querySelector(".meme_btn");
    const homeBtn = document.querySelector(".home_btn");
    const img = document.querySelector(".img");
    const author = document.querySelector(".author");
    const title = document.querySelector(".title");

    const updateDetails = (url, titleText, authorName) => {
      img.setAttribute('src', url);
      title.innerHTML = titleText;
      author.innerHTML = `meme by: ${authorName}`;
    };
          
    const generateMeme = function () {
      fetch("https://meme-api.com/gimme/wholesomememes")
        .then((response) => response.json())
        .then((data) => {
          updateDetails(data.url, data.title, data.author);
        });
    };

    homeButton.addEventListener('click', () => {
      document.querySelector(".home").style.display = "none";
      memeBox.style.display = "block";
    });
       generateMeme();
  memeButton.addEventListener('click', generateMeme);

    homeBtn.addEventListener('click', () => {
      memeBox.style.display = "none";
      document.querySelector(".home").style.display = "block";
    });

    exitButton.addEventListener('click', () => {
      if (confirm("Are you sure you want to exit?")) {
        window.close();
      }
    });
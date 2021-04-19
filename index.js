window.onload = function () {
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  function resizeContent() {
    let textWrapper = document.querySelector("#circle-text");
    let picWrapper = document.querySelector("#pic-wrapper");

    removeAllChildNodes(textWrapper);
    removeAllChildNodes(picWrapper);

    circularText("ENGINEER • DEVELOPER • THINKER • TEACHER • ");
   // handleSkillsAnimation();
  }
  

  function circularText(txt) {
    txt = txt.split("");
    let textWrapper = document.querySelector("#circle-text");

    const wrapperWidth = textWrapper.offsetWidth;
    const wrapperHeight = textWrapper.offsetHeight;

    const radius =
      wrapperWidth < wrapperHeight ? wrapperWidth * 1 : wrapperHeight * 1;

    let deg = 360 / txt.length,
      origin = 0;

    txt.forEach((ea) => {
      ea = `<p style="height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:center; ">${ea}</p>`;
      textWrapper.innerHTML += ea;
      origin += deg;
    });

    textWrapper.classList.add("rotate");

    let picWrapper = document.querySelector("#pic-wrapper");
    let profilePic = document.createElement("img");
    profilePic.src = "selfpic.png";
    picWrapper.appendChild(profilePic);
    profilePic.style.height = radius / 1.5 + "px";
    profilePic.style.width = "auto";

  }

  circularText("ENGINEER • DEVELOPER • THINKER • TEACHER • ");
  window.addEventListener("resize", resizeContent);
  window.addEventListener("orientationchange", resizeContent);

  const skills = [
    "LINUX",
    "GIT",
    "PYTHON",
    "JS",
    "REACT.JS",
    "SHOPIFY",
    "WORDPRESS",
    "PHP",
    "JAVA",
    "ANSIBLE",
    "APACHE",
    "TOMCAT",
    "NGINX",
    "AWS",
    "CLOUD FOUNDRY",
    "HEROKU",
    "KUBERNETES",
    "FIREBASE",
    "MYSQL",
    "BLENDER",
    "PROCREATE",
    "GIMP",
    "KDENLIVE",
  ];

  const lastIndex = skills.length - 1;
  let skillsEntryWrapper = document.querySelector(
    ".skills__entry__content span"
  );
  skills.forEach((skill, i) => {
    if (lastIndex === i) {
      skillsEntryWrapper.innerHTML += `<span style="white-space: nowrap;">${skill}</span>`;
    } else {
      skillsEntryWrapper.innerHTML += `<span style="white-space: nowrap;">${skill}&#8226;</span>`;
    }
  });

  // Wrap every letter in a span
  let lettersWrapper = document.querySelectorAll(".letters");
  lettersWrapper.forEach((letter) => {
    letter.innerHTML = letter.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );
  });

  let headerAnimation = anime
    .timeline({ loop: false })
    .add({
      targets: ".bulletpoints .letter",
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 400,
      delay: (el, i) => 150 + 25 * i,
    })
    .add({
      targets: ".nametext .line",
      scaleX: [0, 1],
      opacity: [0.5, 1],
      easing: "easeInOutExpo",
      duration: 600,
    })
    .add({
      targets: ".nametext .letter",
      opacity: [0, 1],
      translateX: [40, 0],
      translateZ: 0,
      scaleX: [0.3, 1],
      easing: "easeOutExpo",
      duration: 800,
      offset: "-=600",
      delay: (el, i) => 150 + 25 * i,
    });

  let headerObserver = new IntersectionObserver(
    function (entries) {
      if (entries[0].isIntersecting) headerAnimation.play();
    },
    { threshold: [0] }
  );

  headerObserver.observe(document.querySelector("#headerbox"));

  function handleSkillsAnimation() {
    const skillsWrapperLength = parseInt(
      anime
        .get(document.querySelector(".skills__entry__content"), "width")
        .replace("px", "")
    );
  
    const skillsAnimation = anime.timeline({ loop: true }).add({
      targets: ".skills__entry h2",
      // scaleX: [0, 1],
      translateX: [skillsWrapperLength / 1.85, -skillsWrapperLength / 1.85],
      // opacity: [0, 1],
      easing: "linear",
      duration: skillsWrapperLength * 4,
    });

    skillsAnimation.play()

  }
  handleSkillsAnimation();


  const contactAnimation = anime
    .timeline({ loop: true })
    .add({
      targets: ".contact__entry__header .letter",
      translateX: [-200, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutElastic",
      duration: 1000,
      delay: (_, i) => 100 * i,
    })
    .add({
      targets: ".contact__entry__header .letter",
      opacity: [1, 0],
      easing: "easeInOutExpo",
      duration: 1000,
      delay: (_, i) => 100 * i,
    });

    contactAnimation.play()

    let contactButton = document.querySelector(".contactButton")

    function handleContactSumbit(){


      let textInput = document.querySelector("#messageInput")

      if(textInput.value){
        contactButton.disabled=true;

        const data = {
          message: textInput.value
        };
  
        fetch("https://api.jcaicedo.io/v2/awsSendMail", {
          method: "POST", 
          body: JSON.stringify(data)
        }).then(_ => {
          contactButton.style.backgroundColor="green"
          contactButton.style.color="white"
          contactButton.innerHTML="SENT!"
          textInput.value=""
          contactButton.disabled=false;
  
        })
        .catch(_ => {
          contactButton.style.backgroundColor="red"
          contactButton.style.color="white"
          contactButton.innerHTML="THIS IS EMBARRASSING..."
          contactButton.disabled=false;
        });
      } else{
        contactButton.innerHTML="WRITE SOMETHING FIRST!"

      }
    }

    contactButton.addEventListener("click", handleContactSumbit)

};

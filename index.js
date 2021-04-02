window.onload = function() {

    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    function resizeContent(){

        let textWrapper = document.querySelector("#circle-text")
        let picWrapper = document.querySelector("#pic-wrapper")

        removeAllChildNodes(textWrapper)
        removeAllChildNodes(picWrapper)

        circularText("ENGINEER • DEVELOPER • THINKER • TEACHER • ");
        profilePicture();
    }

    function circularText(txt) {

        txt = txt.split("")
        let textWrapper = document.querySelector("#circle-text")


        const wrapperWidth = textWrapper.offsetWidth;
        const wrapperHeight = textWrapper.offsetHeight;

        const radius =  wrapperWidth < wrapperHeight ? wrapperWidth * 1 : wrapperHeight * 1
      
        let deg = 360 / txt.length,
        origin = 0;
    
        txt.forEach((ea) => {
            ea = `<p style="height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:center; ">${ea}</p>`;
            textWrapper.innerHTML += ea;
            origin += deg;
        });

        textWrapper.classList.add("rotate")

        let picWrapper = document.querySelector("#pic-wrapper")
        let profilePic = document.createElement("img");
        profilePic.src = "selfpic.png"
        picWrapper.appendChild(profilePic);
        profilePic.style.height = radius / 1.4 + "px"
        profilePic.style.width = "auto"
    }
    
    circularText("ENGINEER • DEVELOPER • THINKER • TEACHER • ");
    window.addEventListener("resize", resizeContent )
    window.addEventListener("orientationchange", resizeContent )
    
    
}
allBg = document.querySelectorAll(".swiper-bg");
const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  loop: true,
  speed: 500,
});

swiper.on('slideChange', function (e) {
  anime.timeline({
    easing: "easeOutExpo",
    duration: 400,
  }).add({
    targets: ".swiper-bg",
    easing: "easeOutExpo",
    scale: [1, 0.95],
  }).add({
    targets: ".swiper-bg",
    easing: "easeOutExpo",
    scale: [0.95, 1],
  })
});
let targetImage = 0;
let canSaveDate = false;

var heroBg = document.querySelector(".hero-bg");
var heroBgOverlay = document.querySelector(".hero-bg-overlay");

let loading = document.querySelector("#loading");

let first = document.querySelector("#first");
let second = document.querySelector("#second");
let third = document.querySelector("#third");
let fourth = document.querySelector("#fourth");
let fifth = document.querySelector("#fifth");
let sixth = document.querySelector("#sixth");

let contentSecond = document.querySelector("#content-second");
let contentThird = document.querySelector("#content-third");
let contentFourth = document.querySelector("#content-fourth");
let contentFifth = document.querySelector("#content-fifth");
let contentSixth = document.querySelector("#content-sixth");
let contentThirdHelper = document.querySelector("#content-helper");

let title = document.querySelector("#title");
let firstName = document.querySelector("#first-name");
let lastName = document.querySelector("#last-name");
let email = document.querySelector("#email");
let phoneNumber = document.querySelector("#mobile-number");
let attendModes = document.getElementsByName("attend-mode");
let state = document.querySelector("#state");
let date = document.querySelector("#date");
let assistance = document.getElementsByName("assistance");
let image = document.getElementById("profile");
let testimony = document.querySelector("#testimony");


var textWrapper = document.querySelector(".ml11 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /([^\x00 ]|\w)/g,
  "<span class='letter' style='opacity: 0'>$&</span>"
);

var textWrapper2 = document.querySelector(".ml12 .letters2");
textWrapper2.innerHTML = textWrapper2.textContent.replace(
  /([^\x00]|\w)/g,
  "<span class='letter2' style='opacity: 0'>$&</span>"
);

function start() {
  anime({
    targets: ".svg-loading",
    height: [0, 40],
    width: [0, 40],
    loop: true,
    duration: 1000,
    direction: "alternate",
    delay: 500,
    easing: "easeOutSine",
  });
}

function displayFirst(direction, delay = 100, delay2 = 104, delay3 = 54) {
  if (direction == "normal") {
    // fadeInFadeOut(loading, first);
  } else if (direction == "reverse") {
    delay = 800;
    delay2 = 30;
    delay3 = 30;
  }
  anime
    .timeline({
      easing: "easeOutExpo",
      direction: direction,
      duration: 800,
    })
    .add({
      targets: ".svg",
      scale: [0, 1],
      opacity: 1,
      delay: delay,
      duration: 800,
      easing: "easeOutSine",
      complete: function (anim) {
        if (direction == "reverse") {
          displaySecond("normal");
        }
      },
    })
    .add({
      targets: ".logo",
      translateX: [10, 0],
      opacity: [0, 1],
      duration: 800,
      easing: "easeOutSine",
    }, '-=400')
    .add({
      targets: ".ml11 .letter",
      opacity: [0, 1],
      delay: (el, i) => delay2 * (i + 1),
    }, '-=400')
    .add({
      targets: ".ml12 .letter2",
      opacity: [0, 1],
      delay: (el, i) => delay3 * (i + 1),
      complete: function (anim) {
        showImage(direction);
      },
    }, "-=175");
}

function showImage(direction, duration = 1100) {
  if (direction == "reverse") {
    duration = 800
  }
  anime({
    duration: 1100,
    easing: "easeOutExpo",

    update: function (anim) {
      let calculatedRgba;

      if (direction == "normal") {
        calculatedRgba = (0.795 - (0.795 * anim.progress) / 100).toFixed(3);
        if (calculatedRgba < 0.3) {
          calculatedRgba = 0.3;
        }
        heroBgOverlay.style.backgroundColor = `rgba(0, 0, 0, ${calculatedRgba})`;
      }
      else if (direction == "reverse") {
        calculatedRgba = ((0.795 * anim.progress) / 100).toFixed(3);
        heroBgOverlay.style.backgroundColor = `rgba(0, 0, 0, ${calculatedRgba})`;
      }
    }
  });
  anime({
    duration: 1000,
    easing: "easeOutExpo",
    begin: function (anim) {
      swiper.autoplay.start({ delay: 10, })
    },
    update: function (anim) {
      let calculatedBackdrop;
      if (direction == "normal") {
        calculatedBackdrop = (5 - (5 * anim.progress) / 100).toFixed(1);
        heroBgOverlay.style.backdropFilter = `blur(${calculatedBackdrop}px)`;
      } else {
        calculatedBackdrop = ((2 * anim.progress) / 100).toFixed(1);
        heroBgOverlay.style.backdropFilter = `blur(${calculatedBackdrop}px)`;
      }
    },
    complete: function (anim) {
      showButton("normal");
    },
  });
  anime({
    targets: ".hero-bg",
    duration: 2000,
    easing: "easeOutExpo",
    scale: [1, 1.05]
  })
  anime({
    targets: ".hero-bg-overlay",
    duration: 2000,
    easing: "easeOutExpo",
    scale: [1, 1.05]
  })
}

function showButton(direction) {
  anime({
    targets: "#btn-save",
    translateY: [5, 0],
    opacity: 1,
    delay: 100,
    duration: 400,
    easing: "easeOutSine",
    direction: direction,
    complete: function (anim) {
      canSaveDate = true;

    },
  });
}

function displaySecond(direction, delay = 1000) {
  // fadeInFadeOut(loading, second);
  if (direction == "normal") {
    fadeInFadeOut(first, second);
    contentSecond.style.display = "block";
  } else if (direction == "reverse") {
    delay = 50;
  }
  anime
    .timeline({ easing: "easeOutSine", direction: direction, duration: 400 })
    .add({
      targets: ".svg-second",
      scale: [0, 1],
      opacity: 1,
      easing: "easeOutSine",
      delay: delay,
      complete: function () {
        if (direction == "reverse") {
          displayThird("normal");
        }
      },
    })
    .add({
      targets: ".logo-second",
      translateX: [10, 0],
      opacity: [0, 1],
      easing: "easeOutSine",
    })
    .add({
      targets: "#content-second",
      opacity: [0, 1],
      translateY: [5, 0],
    });
}

function displayThird(direction, delay = 1000) {
  if (direction == "normal") {
    fadeInFadeOut(second, third);
    contentThird.style.display = "block";
    state.innerHTML = "";
    state.innerHTML = `<option selected disabled value="0" style="color: rgb(100, 100, 100)">Select your state</option>`;
    STATES.forEach(function (item) {
      state.innerHTML += bindStates(item);
    });
  } else if (direction == "reverse") {
    delay = 300;
  }
  anime
    .timeline({ easing: "easeOutSine", direction: direction, duration: 400 })
    .add({
      targets: ".svg-third",
      scale: [0, 1],
      opacity: 1,
      easing: "easeOutSine",
      delay: delay,
      complete: function () {
        if (direction == "reverse") {
          displayFourth("normal");
        }
      },
    })
    .add({
      targets: ".logo-third",
      translateX: [10, 0],
      opacity: [0, 1],
      easing: "easeOutSine",
    })
    .add({
      targets: "#content-third",
      opacity: [0, 1],
      translateY: [5, 0],
    });
}

function displayFourth(direction, delay = 1000) {
  if (direction == "normal") {
    // fadeInFadeOut(first, fourth);
    fadeInFadeOut(third, fourth);
    contentFourth.style.display = "block";
  } else {
    delay = 300;
  }
  anime
    .timeline({ easing: "easeOutSine", direction: direction, duration: 400 })
    .add({
      targets: ".svg-fourth",
      scale: [0, 1],
      opacity: 1,
      easing: "easeOutSine",
      delay: delay,
      complete: function () {
        if (direction == "reverse") {
          displayFifth("normal");
        }
      },
    })
    .add({
      targets: ".logo-fourth",
      translateX: [10, 0],
      opacity: [0, 1],
      easing: "easeOutSine",
    })
    .add({
      targets: "#content-fourth",
      opacity: [0, 1],
      translateY: [5, 0],
    });
}

function displayFifth(direction, delay = 1000) {
  if (direction == "normal") {
    // fadeInFadeOut(first, fifth);
    fadeInFadeOut(fourth, fifth);
    contentFifth.style.display = "block";
  } else {
    delay = 300;
  }
  anime
    .timeline({ easing: "easeOutSine", direction: direction, duration: 400 })
    .add({
      targets: ".svg-fifth",
      scale: [0, 1],
      opacity: 1,
      easing: "easeOutSine",
      delay: delay,
      complete: function () {
        if (direction == "reverse") {
          displaySixth("normal");
        }
      },
    })
    .add({
      targets: ".logo-fifth",
      translateX: [10, 0],
      opacity: [0, 1],
      easing: "easeOutSine",
    })
    .add({
      targets: "#content-fifth",
      opacity: [0, 1],
      translateY: [5, 0],
    });
}

function displaySixth(direction, delay = 1000) {
  if (direction == "normal") {
    // fadeInFadeOut(first, sixth);
    fadeInFadeOut(fifth, sixth);
    contentSixth.style.display = "block";
    document.getElementById("guest-name").innerText = title.options[title.value].innerText + " " +  firstName.value + " " + lastName.value
  } else {
    delay = 300;
  }
  anime
    .timeline({ easing: "easeOutSine", direction: direction, duration: 400 })
    .add({
      targets: "#content-sixth",
      scale: [0, 1]
    });
}



function fadeInFadeOut(fadeOut, fadeIn) {
  anime
    .timeline({
      easing: "easeOutSine",
      duration: 500,
    })
    .add({
      targets: fadeOut,
      opacity: [1, 0],
      complete: function (anim) {
        fadeOut.style.display = "none";
      },
    })
    .add({
      begin: function (anim) {
        fadeIn.style.display = "block";
      },
      delay: 200,
      targets: fadeIn,
      opacity: [0, 1],
    });
}

function validateInputs(inputs) {
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value == "") {
      inputs[i].nextElementSibling.style.display = "block";
      return false;
    }
  }
  return true;
}

function validateRadio(radios) {
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked == true) {
      return true;
    }
  }
  radios[0].parentElement.nextElementSibling.nextElementSibling.style.display =
    "block";
  return false;
}

function validateSelect(selects) {
  for (let i = 0; i < selects.length; i++) {
    console.log(selects[i].value)
    if (selects[i].value == 0) {
      selects[i].nextElementSibling.style.display = "block";
      return false;
    }
  }
  return true;
}

function validateArrival(date) {
  if (date.value == "") {
    date.parentElement.nextElementSibling.style.display = "block";
    return false;
  }
  return true;
}


function submitImage() {
  let formData = new FormData();
  formData.append("image", targetImage.files[0]);

  let submitImageXhr = new XMLHttpRequest();
  submitImageXhr.open("POST", "http://127.0.0.1/image/invitation", true);
  submitImageXhr.send(formData);

  submitImageXhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.response);
      submitInvitation(response)
    }
  }
}

function submitInvitation(invitation) {
  let appearance;
  let assistance2;
  attendModes.forEach(function (item, index) {
    if (item.checked) {
      if (index = 0) {
        appearance = "Physical presence"
      }
      else {
        appearance = "Online presence"
      }
    }
  })
  assistance.forEach(function (item, index) {
    if (item.checked) {
      if (index = 0) {
        assistance2 = "Yes"
      }
      else {
        assistance2 = "No"
      }
    }
  })
  console.log(title.options[title.value])
  let payload = {
    id: invitation.id,
    title: title.options[title.value].innerText,
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    mobileNumber: phoneNumber.value,
    appearance: appearance,
    state: state.options[state.value].innerText,
    arrivalDate: date.value,
    assistance: assistance2,
    memories: testimony.value,
  }
  let invitationXhr = new XMLHttpRequest();
  invitationXhr.open("PUT", "http://127.0.0.1/invitation", true);
  invitationXhr.setRequestHeader("Content-type", "application/json");
  invitationXhr.send(JSON.stringify(payload));

  invitationXhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.response);
      displayFifth("reverse");
    }
  }
}


// displaySixth("normal");
// displaySecond("normal")

let volume = false

document.body.addEventListener("click", function (e) {
  let targetId = e.target.id;
  if (targetId == "btn-save") {
    displaySecond("normal");

  } else if (targetId == "to-third") {
    if (
      validateSelect([title]) &&
      validateInputs([firstName, lastName, phoneNumber]) &&
      validateRadio(attendModes)
    ) {
      displaySecond("reverse");
    }
  } else if (targetId == "to-fourth") {
    if (
      validateSelect([state]) &&
      validateArrival(date) &&
      validateRadio(assistance)
    ) {
      displayThird("reverse");
    }
  }
  else if (targetId == "to-fifth") {
    displayFourth("reverse");
  }
  else if (targetId == "to-sixth") {
    console.log(image.src)
    if (image.src == `${location.origin}/images/pngfind.com-placeholder-png-6104451.png`) {
        image.parentElement.parentElement.nextElementSibling.style.display = "block"
    }   
    else {
      submitImage();
      // displayFifth("reverse");
    }
  }
 
  else if (targetId == "enable-audio") {
    if (volume == false) {
      document.getElementById("first").style.display = "block"
      displayFirst("normal");
      volume = true;
      document.getElementById("audio").play();
      document.getElementById("sound-modal").style.display = "none"
    }
  }
  else if (targetId == "download-iv") {
    downloadIv();
  }
});

function downloadIv() {
  html2canvas(document.getElementById("iv")).then(function (canvas) {
    var anchorTag = document.createElement("a");
    document.body.appendChild(anchorTag);
    anchorTag.download = "j&k iv.jpg";
    anchorTag.href = canvas.toDataURL();
    anchorTag.target = '_blank';
    anchorTag.click();
  });
}


document.body.addEventListener("change", function (e) {
  targetImage = e.target;
  if (targetImage.id == "upload_file") {
    image.src = URL.createObjectURL(targetImage.files[0]);
  }
});

ScrollReveal().reveal(".left", { distance: "40px", origin: "left" });
ScrollReveal().reveal(".left-spc", { distance: "10px", origin: "left" });
ScrollReveal().reveal(".right", { distance: "40px", origin: "right" });
ScrollReveal().reveal(".right-spc", { distance: "10px", origin: "right" });
ScrollReveal().reveal(".opacity", { opacity: 0 });
ScrollReveal().reveal(".bottom", { distance: "40px", origin: "bottom" });
ScrollReveal().reveal(".bottom-spc", { distance: "10px", origin: "bottom" });
ScrollReveal().reveal(".bottom-img", {
  distance: "40px",
  origin: "bottom",
  opacity: 1,
  reset: false,
});
ScrollReveal().reveal(".top", { distance: "40px", origin: "top" });
ScrollReveal().reveal(".top-spc", { distance: "10px", origin: "top" });

function bindStates(state) {
  return `<option value="${state.stateId}">${state.stateName}</option>`;
}


function backgroundImg() {
  let textarea = document.getElementById("textarea");
  textarea.style.backgroundImage = "url(" + event.target.src + ")";
  textarea.style.backgroundSize = "cover";
  var text = document.getElementById("text");
  text.style.backgroundImage = "url(" + event.target.src + ")";
  text.style.backgroundSize = "cover";
}

function color() {
  let textarea = document.getElementById("textarea");
  textarea.style.color = event.target.value;
  text.style.color = event.target.value;
}

function fontSize() {
  let textarea = document.getElementById("textarea");
  textarea.style.fontSize = event.target.value + "px";
  text.style.fontSize = event.target.value + "px";
}

function fontStyle() {
  let textarea = document.getElementById("textarea");
  var type = event.target.src;
  var bold =
    "file:///D:/Computer%20Courses/Web%20Devlopment/SMIT/Sylani%20Web%20Devlopment%20Work/Given%20Exersizes%20Of%20Java%20Script%20By%20Sir%20Ghous/Extra%20HomeWork/Mini%20Projects/FB%20Post/bold.png";
  var italic =
    "file:///D:/Computer%20Courses/Web%20Devlopment/SMIT/Sylani%20Web%20Devlopment%20Work/Given%20Exersizes%20Of%20Java%20Script%20By%20Sir%20Ghous/Extra%20HomeWork/Mini%20Projects/FB%20Post/italic.jpg";

  var underline =
    "file:///D:/Computer%20Courses/Web%20Devlopment/SMIT/Sylani%20Web%20Devlopment%20Work/Given%20Exersizes%20Of%20Java%20Script%20By%20Sir%20Ghous/Extra%20HomeWork/Mini%20Projects/FB%20Post/underline.png";
  if (type == bold) {
    if (textarea.style.fontWeight == "bolder") {
      event.target.style.backgroundColor = "transparent";
      textarea.style.fontWeight = "normal";
    } else {
      textarea.style.fontWeight = "bolder";
      event.target.style.backgroundColor = "lightskyblue";
    }
  }
  if (type == italic) {
    if (textarea.style.fontStyle == "italic") {
      event.target.style.backgroundColor = "transparent";
      textarea.style.fontStyle = "normal";
    } else {
      textarea.style.fontStyle = "italic";
      event.target.style.backgroundColor = "lightskyblue";
    }
  }
  if (type == underline) {
    if (textarea.style.textDecoration == "underline") {
      event.target.style.backgroundColor = "transparent";
      textarea.style.textDecoration = "none";
    } else {
      textarea.style.textDecoration = "underline";
      event.target.style.backgroundColor = "lightskyblue";
    }
  }
}

function post() {
  let main1 = document.querySelector(".main1");
  let post = document.querySelector(".post");
  let textarea = document.getElementById("textarea");
  let text = document.getElementById("text");
  if (textarea.value.trim()) {
    main1.style.display = "none";
    post.style.display = "block";
    text.innerHTML = textarea.value;
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please enter Something ",
    });
  }
}

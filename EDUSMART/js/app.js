function login(){

  const username =
  document.getElementById("username").value;

  const password =
  document.getElementById("password").value;

  if(username === "" || password === ""){

    alert("Isi username dan password");

    return;
  }

  localStorage.setItem("user", username);

  window.location.href = "dashboard.html";
}

function logout(){

  localStorage.removeItem("user");

  window.location.href = "index.html";
}

/* AUTO USER */

window.onload = function(){

  const user =
  localStorage.getItem("user");

  const profileName =
  document.getElementById("profileName");

  const welcomeText =
  document.getElementById("welcomeText");

  const avatar =
  document.getElementById("avatar");

  if(profileName && user){

    profileName.innerText = user;

  }

  if(welcomeText && user){

    welcomeText.innerText =
    "Selamat Datang, " + user + " 👋";

  }

  if(avatar && user){

    avatar.innerText =
    user.charAt(0).toUpperCase();

  }

};

/* QUIZ */

document
.querySelectorAll(".answer")
.forEach(btn=>{

  btn.addEventListener("click",()=>{

    if(btn.classList.contains("correct")){

      btn.style.background="#22c55e";
      btn.style.color="white";

      alert("Jawaban Benar 🎉");

    }else{

      btn.style.background="#ef4444";
      btn.style.color="white";

      alert("Jawaban Salah ❌");

    }

  });

});

/* DRAG DROP */

const devices =
document.querySelectorAll(".device");

const dropArea =
document.getElementById("dropArea");

if(dropArea){

  devices.forEach(device=>{

    device.addEventListener(
      "dragstart",
      e=>{

        e.dataTransfer.setData(
          "text",
          device.innerHTML
        );

      }
    );

  });

  dropArea.addEventListener(
    "dragover",
    e=>{

      e.preventDefault();

    }
  );

  dropArea.addEventListener(
    "drop",
    e=>{

      e.preventDefault();

      const data =
      e.dataTransfer.getData("text");

      const item =
      document.createElement("div");

      item.className = "device";

      item.innerHTML = data;

      dropArea.appendChild(item);

    }
  );

}
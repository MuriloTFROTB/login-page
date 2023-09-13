const campName = document.getElementById("name");
const labelName = document.getElementById("labelname");

campName.addEventListener("focus", function() {
  labelName.style.transform = "translateY(-100%)";
  campName.style.border="2px solid red"
});

campName.addEventListener("blur", function() {
  if (!campName.value) {
    labelName.style.transform = "translateY(40%)";
  }
  campName.style.border="none"
});
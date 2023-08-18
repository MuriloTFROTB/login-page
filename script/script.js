const campName = document.getElementById("name");
const labelName = document.getElementById("labelname");

campName.addEventListener("focus", function() {
  labelName.style.transform = "translateY(-50%)";
});

campName.addEventListener("blur", function() {
  if (!campName.value) {
    labelName.style.transform = "translateY(0)";
  }
});
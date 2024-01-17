function calculateXP() {
  var selectedItem = document.getElementById("selectOption").value;
  var quantity = parseInt(document.getElementById("quantity").value);

  var xpPerLaserGrid = 14;
  var xpPerChandelier = 18;
  var xpPerHTB = 14;
  var xpPerSorcererStone = 18;
  var xpPerMbell = 20;

  var totalXP = 0;
  if (selectedItem === "laserGrid") {
    totalXP = xpPerLaserGrid * quantity;
  } else if (selectedItem === "chandelier") {
    totalXP = xpPerChandelier * quantity;
  } else if (selectedItem === "htb") {
    totalXP = xpPerHTB * quantity;
  } else if (selectedItem === "scstone") {
    totalXP = xpPerSorcererStone * quantity;
  } else if (selectedItem === "mbell") {
    totalXP = xpPerMbell * quantity;
  } 

  document.getElementById("result").innerHTML = "Total XP: " + totalXP;
}

function setShortcutValue(value) {
  document.getElementById("quantity").value = value;
}

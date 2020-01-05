let logo = document.querySelectorAll("#logo path");

for (let i = 0; i < logo.length; i++) {
  console.log(`${i + 1} stroke-dasharray: ${logo[i].getTotalLength()}`);
}

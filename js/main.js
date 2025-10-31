/*hoved */
document
  .querySelector("#hotspotHoved")
  .addEventListener("mouseover", mouseOverHead);
document.querySelector("#hotspotHoved").addEventListener("click", clickHead);
document
  .querySelector("#hotspotHoved")
  .addEventListener("mouseout", mouseOutHead);

function mouseOverHead() {
  console.log("mouseOverHead");
  document.querySelector("#hotspotHoved").style.fill = "red";
}

function mouseOutHead() {
  console.log("mouseOutHead");
  document.querySelector("#hotspotHoved").style.fill = "#f9ed32";
}

function clickHead() {
  console.log("clickHead");
  document.querySelector(".info-text > h2").textContent = "ISBJØRNENS SKÆBNE";
  document.querySelector(".placeholder").textContent =
    "Hvis ikke der bliver gjort noget for isbjørnenes velfærd, så kan de risikere at uddø. Derfor må der handles på problemet. Det skulle f.eks forbydes at jagte isbjørne. Dernæst skal menneske kun have lov at færdes i deres naturområde, når de har tilladelse. Det betyder at isbjørnene får lov til at leve fredeligt i ders naturlige habitat.";
  document.querySelector("#efficiency").textContent =
    "Effektivitet: Meget høj! Da det bevare isbjørnenes naturlige habitat";
  document.querySelector("#requirement").textContent = "Krav: Klar tankegang";
}

/*mave*/
document
  .querySelector("#hotspotMave")
  .addEventListener("mouseover", mouseOverMave);
document
  .querySelector("#hotspotMave")
  .addEventListener("mouseout", mouseOutMave);
document.querySelector("#hotspotMave").addEventListener("click", clickMave);

function mouseOverMave() {
  console.log("mouseOverMave");
  document.querySelector("#hotspotMave").style.fill = "red";
}

function mouseOutMave() {
  console.log("mouseOutMave");
  document.querySelector("#hotspotMave").style.fill = "#f9ed32";
}
function clickMave() {
  console.log("clickMave");
  document.querySelector(".info-text > h2").textContent = "MAVEN RUMLER...";
  document.querySelector(".placeholder").textContent =
    "Vi skal sikre os at isbjørnenes naturlige fødekæder ikke er brudt. Her skal vi reducere forurening og drivhusgasser. Dette holder havisen i Arktis kold og stabil, så isbjørnene kan jage som normalt.";
  document.querySelector("#efficiency").textContent =
    "Effektivitet: Høj. Da der også er flere fordele ved at reducere forurening og drivhusgasser";
  document.querySelector("#requirement").textContent =
    "Krav: Alle kan være med til at reducere forurening og drivhusgasser! Selvom man måske ikke er klar over det...";
}

/*badering*/
document
  .querySelector("#hotspotBadering")
  .addEventListener("mouseover", mouseOverBadering);
document
  .querySelector("#hotspotBadering")
  .addEventListener("mouseout", mouseOutBadering);
document
  .querySelector("#hotspotBadering")
  .addEventListener("click", clickBadering);

function mouseOverBadering() {
  console.log("mouseOverBadering");
  document.querySelector("#hotspotBadering").style.fill = "red";
}

function mouseOutBadering() {
  console.log("mouseOutBadering");
  document.querySelector("#hotspotBadering").style.fill = "#f9ed32";
}

function clickBadering() {
  console.log("clickBadering");
  document.querySelector(".info-text > h2").textContent = "ISEN SMELTER!";
  document.querySelector(".placeholder").textContent =
    "For at sikre os at isen ikke smelter og ødelægger isbjørnenes hjem. Så kan vi bruge vedvarende energi! Det kan være, vind, vand eller solkraft. Dernæst skal vi blive god til at spare på energien. Så HUSK at slukke lyset!";
  document.querySelector("#efficiency").textContent =
    "Effektivitet: Meget høj. Det skader ikke miljøet og kommer fra naturresourcer";
  document.querySelector("#requirement").textContent =
    "Krav: Regeringer, virksomheder, forskere og borgere kan hjælpe med mere vedvarende energi gennem love, teknologi og grønne valg.";
}

// Tip Calculations
// document.getElementById("compute").onclick = handleClick();

function handleClick() {
  const tipscc = parseFloat(document.getElementById("tipsCc").value)
    ? parseFloat(document.getElementById("tipsCc").value)
    : 0;
  console.log(tipscc);
  const tipscash = parseFloat(document.getElementById("tipsCash").value)
    ? parseFloat(document.getElementById("tipsCash").value)
    : 0;
  const busserPercent =
    parseInt(document.getElementById("busserPer").value) / 100;
  const pool = document.getElementById("switch").checked;
  let bartips;
  let runner;
  let tipsTotal = +(tipscc + tipscash).toFixed(2);
  console.log(pool);
  bartips = Math.ceil(tipsTotal * 0.05);
  runner = Math.ceil(tipsTotal * 0.05);
  console.log(bartips);

  busserTips = Math.ceil(tipsTotal * busserPercent);
  totaltipout = bartips + busserTips + runner;
  netTips = tipsTotal - totaltipout;
  netTips = +netTips.toFixed(2);
  splitTips = (+netTips / 2).toFixed(2);
  console.log(busserTips);

  document.getElementById("totaltips").innerHTML = "";
  document.getElementById("barTipout").innerHTML = "";
  document.getElementById("busserTipout").innerHTML = "";
  document.getElementById("runnerTipout").innerHTML = "";
  document.getElementById("partnerTipout").innerHTML = "";
  document.getElementById("netTips").innerHTML = "";

  document.getElementById("totaltips").append("Total Tips = $", tipsTotal);
  document.getElementById("barTipout").append("Bartender Tipout = $", bartips);
  document
    .getElementById("busserTipout")
    .append("Busser Tipout = $", busserTips);
  document.getElementById("runnerTipout").append("Runner Tipout = $", runner);

  if (pool == false) {
    document.getElementById("netTips").append("Net Tips = $", netTips);
  } else {
    document
      .getElementById("partnerTipout")
      .append("Partner's Tips = $", splitTips);
    document.getElementById("netTips").append("Net Tips = $", splitTips);
  }
  document.getElementById("results").style.display = "block";
  window.location.href = "#results";
}

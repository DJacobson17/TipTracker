  // Tip Calculations
  // document.getElementById("compute").onclick = handleClick();

  function handleClick() {
    
    const tipscc = parseFloat(document.getElementById("tipsCc").value);
    const tipscash = parseFloat(document.getElementById("tipsCash").value);
    const busserPercent = (parseInt(document.getElementById("busserPer").value)) / 100;
    let bartips;
    let runner;
    let tipsTotal = +(tipscc + tipscash).toFixed(2);
    
    bartips =  Math.ceil(tipsTotal * 0.05);
    runner = Math.ceil(tipsTotal * 0.05);
    console.log(bartips);
      
    busserTips = +(tipsTotal * busserPercent).toFixed(2);
    totaltipout = bartips + busserTips + runner;
    netTips = tipsTotal - totaltipout;
    netTips = +netTips.toFixed(2);
    console.log(busserTips);

    document.getElementById("totaltips").innerHTML = "";
    document.getElementById("barTipout").innerHTML = "";
    document.getElementById("busserTipout").innerHTML = "";
    document.getElementById("runnerTipout").innerHTML = "";
    document.getElementById("netTips").innerHTML = "";

    document.getElementById("totaltips").append("Total Tips = $", tipsTotal);
    document.getElementById("barTipout").append("Bartender Tipout = $", bartips);
    document.getElementById("busserTipout").append("Busser Tipout = $", busserTips);
    document.getElementById("runnerTipout").append("Runner Tipout = $", runner);
    document.getElementById("netTips").append("Net Tips = $", netTips);
    document.getElementById("results").style.display="block";
    window.location.href='#results';

      
    }
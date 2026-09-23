const state={
  connected:false, auto:false, signal:"WAIT", spot:"22,435.98", ema:"22,446.35", rsi:"48.2",
  position:"NONE", option:"—", entry:"—", ltp:"—", pnl:"₹0.00"
};

const app=document.querySelector("#app");
function render(){
app.innerHTML=`
<div class="app">
  <div class="top">
    <div class="logo">📈 NIFTY ITM Algo</div>
    <div class="pill"><span class="statusdot ${state.connected?'on':''}"></span>${state.connected?'KOTAK CONNECTED':'KOTAK OFFLINE'}</div>
  </div>

  <div class="warn">LIVE TRADING UI: real broker orders require a secure backend. Never put Kotak MPIN/API secrets in this HTML/React code.</div>

  <div class="card">
    <div class="title">NIFTY 50 · 5 MINUTE</div>
    <div class="hero">
      <div class="metric"><small>SPOT</small><b>₹${state.spot}</b></div>
      <div class="metric"><small>EMA 34</small><b>₹${state.ema}</b></div>
      <div class="metric"><small>RSI 14</small><b>${state.rsi}</b></div>
      <div class="metric"><small>SIGNAL</small><b class="${state.signal==='CE'?'buy':state.signal==='PE'?'sell':'wait'}">${state.signal}</b></div>
    </div>
  </div>

  <div class="card">
    <div class="title">Strategy</div>
    <div class="muted">EMA 34 cross-up + RSI &gt; 60 → 1-strike ITM CE BUY<br>
    EMA 34 cross-down + RSI &lt; 50 → 1-strike ITM PE BUY</div>
    <div class="buttons">
      <button class="btn blue" onclick="connect()">CONNECT KOTAK</button>
      <button class="btn ${state.auto?'red':'green'}" onclick="toggleAuto()">${state.auto?'STOP AUTO':'START AUTO'}</button>
    </div>
  </div>

  <div class="card">
    <div class="title">Risk Settings</div>
    <div class="grid">
      <div class="field"><label>Quantity</label><input id="qty" type="number" value="0"></div>
      <div class="field"><label>ITM Strikes</label><input id="itm" type="number" value="1"></div>
      <div class="field"><label>Stop Loss %</label><input id="sl" type="number" step="0.1" value="0"></div>
      <div class="field"><label>Target %</label><input id="target" type="number" step="0.1" value="0"></div>
      <div class="field"><label>Max Trades / Day</label><input id="maxtrades" type="number" value="1"></div>
      <div class="field"><label>Max Daily Loss ₹</label><input id="maxloss" type="number" value="0"></div>
    </div>
    <button class="btn gray" style="width:100%;margin-top:12px" onclick="save()">SAVE SETTINGS</button>
  </div>

  <div class="card">
    <div class="title">Current Position</div>
    <div class="row"><span>Position</span><b>${state.position}</b></div>
    <div class="row"><span>Option</span><b>${state.option}</b></div>
    <div class="row"><span>Entry</span><b>${state.entry}</b></div>
    <div class="row"><span>LTP</span><b>${state.ltp}</b></div>
    <div class="row"><span>P&L</span><b>${state.pnl}</b></div>
    <button class="btn red" style="width:100%;margin-top:12px" onclick="emergency()">EMERGENCY STOP</button>
  </div>

  <div class="card">
    <div class="title">How it works</div>
    <div class="muted">Completed 5-minute candle only. Bullish signal buys 1-strike ITM CE; bearish signal buys 1-strike ITM PE. Expiry and option symbol should be resolved from live Kotak instrument/option-chain data by the backend.</div>
  </div>
</div>`;
}
window.connect=()=>{state.connected=!state.connected;render()};
window.toggleAuto=()=>{if(!state.connected){alert("पहले Kotak backend connect करें.");return}state.auto=!state.auto;render()};
window.emergency=()=>{state.auto=false;render();alert("Auto trading stopped.")};
window.save=()=>{alert("Settings saved locally for this UI. Live execution requires backend API.");};
render();

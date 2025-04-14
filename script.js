function convertTemp() {
  const degrees = parseFloat(document.getElementById('degrees').value);
  const from = document.getElementById('fromType').value;
  let celsius, fahrenheit, kelvin;

  if (isNaN(degrees)) {
    document.getElementById('result1').innerText = "--";
    document.getElementById('result2').innerText = "--";
    return;
  }

  if (from === 'Celsius') {
    celsius = degrees;
    fahrenheit = (degrees * 9/5) + 32;
    kelvin = degrees + 273.15;
    document.getElementById('result1').innerText = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
    document.getElementById('result2').innerText = `Kelvin: ${kelvin.toFixed(2)} K`;
  } else if (from === 'Fahrenheit') {
    celsius = (degrees - 32) * 5/9;
    fahrenheit = degrees;
    kelvin = celsius + 273.15;
    document.getElementById('result1').innerText = `Celsius: ${celsius.toFixed(2)} °C`;
    document.getElementById('result2').innerText = `Kelvin: ${kelvin.toFixed(2)} K`;
  } else if (from === 'Kelvin') {
    kelvin = degrees;
    celsius = degrees - 273.15;
    fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('result1').innerText = `Celsius: ${celsius.toFixed(2)} °C`;
    document.getElementById('result2').innerText = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
  }

  if (celsius < 5) {
    document.body.style.backgroundImage = `url('cold.jpeg')`;
  } else if (celsius <= 36) {
    document.body.style.backgroundImage = `url('warm.jpeg')`;
  } else {
    document.body.style.backgroundImage = `url('hot.webp')`;
  }
  
}

function updateTime() {
  const now = new Date();
  const hrs = String(now.getHours()).padStart(2, '0');
  const mins = String(now.getMinutes()).padStart(2, '0');
  document.getElementById('currentTime').innerText = `${hrs}:${mins}`;
}
setInterval(updateTime, 1000);
updateTime();

if (navigator.getBattery) {
  navigator.getBattery().then(battery => {
    function updateBattery() {
      const level = Math.round(battery.level * 100);
      document.getElementById('batteryLevel').innerText = `🔋 ${level}%`;
    }
    updateBattery();
    battery.addEventListener('levelchange', updateBattery);
  });
}

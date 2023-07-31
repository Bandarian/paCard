  var maxRateVal = 0.3;
  var maxYearVal = 30;
  var numint = { var: 0 };
  function initializeRateReduct() {
    var rateReductElement = document.getElementById('rateReduct');
    var yearReductElement = document.getElementById('yearReduct');
    var parentWidth = rateReductElement.offsetWidth;
    var integerPart = Math.floor(0.01 * 100).toString().padStart(2, '0');
    var rateReductHTML = '';
    rateReductHTML += '<span style="width: ' + (parentWidth * 30 / 100) + 'px; display: inline-block;">0</span>';
    rateReductHTML += '<span style="width: ' + (parentWidth * 10 / 100) + 'px; display: inline-block;">.</span>';

    for (var i = 0; i < integerPart.length; i++) {
      var widthPercentage = 30; 
      var width = (parentWidth * widthPercentage / 100) + 'px';
      rateReductHTML += '<span style="width: ' + width + '; display: inline-block;">' + integerPart[i] + '</span>';
    }
    rateReductElement.innerHTML = rateReductHTML;
    yearReductElement.innerHTML = formatNumber(1, 0); 
  }
  initializeRateReduct();
  gsap.timeline({
    scrollTrigger: {
      trigger: ".pa-discount-card",
      scrub: 2,
      markers: false,
      start: "top 70%",
      end: "top 30%",
    },
  }).to(numint, { var: 1, onUpdate: updateNumbers });
  function updateNumbers() {
    var countdownYearValue = Math.min(Math.floor(numint.var * maxYearVal) + 1, maxYearVal);
    var countdownRateValue = Math.min((numint.var * maxRateVal) + 0.01, maxRateVal);
    var rateReductElement = document.getElementById('rateReduct');
    var yearReductElement = document.getElementById('yearReduct');
    var parentWidth = rateReductElement.offsetWidth;
    var integerPart = Math.floor(countdownRateValue * 100).toString().padStart(2, '0');
    var rateReductHTML = '';
    rateReductHTML += '<span style="width: ' + (parentWidth * 30 / 100) + 'px; display: inline-block;">0</span>';
    rateReductHTML += '<span style="width: ' + (parentWidth * 10 / 100) + 'px; display: inline-block;">.</span>';

    for (var i = 0; i < integerPart.length; i++) {
      var widthPercentage = 30; 
      var width = (parentWidth * widthPercentage / 100) + 'px';
      rateReductHTML += '<span style="width: ' + width + '; display: inline-block;">' + integerPart[i] + '</span>';
    }
    rateReductElement.innerHTML = rateReductHTML;
    yearReductElement.innerHTML = formatNumber(countdownYearValue, 0);
  }
function formatNumber(value, decimals) {
  value = value.toFixed(decimals);
  let s = (+value).toLocaleString('en-US').split(".");
  return s[0];
}

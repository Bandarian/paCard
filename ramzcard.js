  var maxRateVal = 0.3;
  var maxYearVal = 30;
  var numint = { var: 0 };

  function initializeRateReduct() {
    var rateReductElement = document.getElementById('rateReduct');
    var yearReductElement = document.getElementById('yearReduct');
    var parentWidth = rateReductElement.offsetWidth;

    // Split countdownRateValue into integer and decimal parts
    var integerPart = Math.floor(0.01 * 100).toString().padStart(2, '0');

    var rateReductHTML = '';
    rateReductHTML += '<span style="width: ' + (parentWidth * 30 / 100) + 'px; display: inline-block;">0</span>';
    rateReductHTML += '<span style="width: ' + (parentWidth * 10 / 100) + 'px; display: inline-block;">.</span>';

    // Add spans for the integer part of rateReduct
    for (var i = 0; i < integerPart.length; i++) {
      var widthPercentage = 30; // Set the width percentage for the integer spans
      var width = (parentWidth * widthPercentage / 100) + 'px';
      rateReductHTML += '<span style="width: ' + width + '; display: inline-block;">' + integerPart[i] + '</span>';
    }

    // Replace the content of rateReductElement with the newly created spans
    rateReductElement.innerHTML = rateReductHTML;
    yearReductElement.innerHTML = formatNumber(1, 0); // Set initial year value to 1
  }

  initializeRateReduct();

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
    return s[0]; // Return the integer part without leading zeros
  }

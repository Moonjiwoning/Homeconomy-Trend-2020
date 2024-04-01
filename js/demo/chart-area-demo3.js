// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

// 10대 여성 식품
var ctx = document.getElementById("myAreaChart3");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    datasets: [
      {
        label: "쿠키",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#ff9205", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#ff9205", // 원 내부 색 (solid)
        pointBorderColor: "#ff9205", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#ff9205",
        pointHoverBorderColor: "#ff9205",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [32, 42, 70, 58, 55, 37, 42, 52, 65, 53, 62, 100],
      },
      {
        label: "제과/제빵재료",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#fdd400", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#fdd400", // 원 내부 색 (solid)
        pointBorderColor: "#fdd400", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#fdd400",
        pointHoverBorderColor: "#fdd400",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [14, 20, 34, 33, 27, 17, 17, 29, 31, 25, 27, 64],
      },
      {
        label: "케이크",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#fef857", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#fef857", // 원 내부 색 (solid)
        pointBorderColor: "#fef857", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#fef857",
        pointHoverBorderColor: "#fef857",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [11, 15, 24, 26, 24, 10, 11, 18, 21, 18, 20, 46],
      }
    ],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 0,
        right: 20,
        top: 20,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 5,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return number_format(value) + '%';
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 5,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function (tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': ' + number_format(tooltipItem.yLabel) + '%';
        }
      }
    }
  }
});

// ##################################################
// ##################################################
// ##################################################

// 20대 여성 식품
var ctx = document.getElementById("myAreaChart3-20female");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    datasets: [
      {
        label: "영양제",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#ff9205", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#ff9205", // 원 내부 색 (solid)
        pointBorderColor: "#ff9205", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#ff9205",
        pointHoverBorderColor: "#ff9205",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [75, 76, 93, 88, 87, 81, 81, 87, 91, 83, 85, 100],
      },
      {
        label: "축산가공식품",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#fdd400", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#fdd400", // 원 내부 색 (solid)
        pointBorderColor: "#fdd400", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#fdd400",
        pointHoverBorderColor: "#fdd400",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [38, 48, 68, 61, 54, 55, 58, 57, 63, 47, 48, 63],
      },
      {
        label: "쿠키",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#fef857", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#fef857", // 원 내부 색 (solid)
        pointBorderColor: "#fef857", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#fef857",
        pointHoverBorderColor: "#fef857",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [24, 30, 38, 31, 29, 26, 28, 31, 37, 32, 41, 61],
      }
    ],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 0,
        right: 20,
        top: 20,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 5,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return number_format(value) + '%';
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 5,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function (tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': ' + number_format(tooltipItem.yLabel) + '%';
        }
      }
    }
  }
});

// ##################################################
// ##################################################
// ##################################################

// 30대 여성 식품
var ctx = document.getElementById("myAreaChart3-30female");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    datasets: [
      {
        label: "영양제",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#ff9205", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#ff9205", // 원 내부 색 (solid)
        pointBorderColor: "#ff9205", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#ff9205",
        pointHoverBorderColor: "#ff9205",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [73, 74, 83, 77, 73, 67, 69, 69, 72, 67, 74, 100],
      },
      {
        label: "축산가공식품",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#fdd400", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#fdd400", // 원 내부 색 (solid)
        pointBorderColor: "#fdd400", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#fdd400",
        pointHoverBorderColor: "#fdd400",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [23, 28, 42, 34, 27, 27, 29, 30, 37, 23, 26, 36],
      },
      {
        label: "커피",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#fef857", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#fef857", // 원 내부 색 (solid)
        pointBorderColor: "#fef857", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#fef857",
        pointHoverBorderColor: "#fef857",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [23, 25, 34, 33, 31, 32, 28, 29, 32, 26, 27, 36],
      }
    ],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 0,
        right: 20,
        top: 20,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 5,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return number_format(value) + '%';
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 5,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function (tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': ' + number_format(tooltipItem.yLabel) + '%';
        }
      }
    }
  }
});

// ##################################################
// ##################################################
// ##################################################

// 40대 여성 식품
var ctx = document.getElementById("myAreaChart3-40female");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    datasets: [
      {
        label: "영양제",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#ff9205", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#ff9205", // 원 내부 색 (solid)
        pointBorderColor: "#ff9205", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#ff9205",
        pointHoverBorderColor: "#ff9205",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [81, 85, 100, 95, 91, 80, 82, 82, 86, 84, 85, 98],
      },
      {
        label: "축산가공식품",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#fdd400", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#fdd400", // 원 내부 색 (solid)
        pointBorderColor: "#fdd400", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#fdd400",
        pointHoverBorderColor: "#fdd400",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [27, 32, 51, 43, 32, 31, 37, 38, 47, 29, 28, 44],
      },
      {
        label: "커피",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#fef857", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#fef857", // 원 내부 색 (solid)
        pointBorderColor: "#fef857", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#fef857",
        pointHoverBorderColor: "#fef857",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [27, 28, 37, 37, 35, 37, 32, 32, 35, 30, 31, 41],
      }
    ],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 0,
        right: 20,
        top: 20,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 5,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return number_format(value) + '%';
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 5,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function (tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': ' + number_format(tooltipItem.yLabel) + '%';
        }
      }
    }
  }
});

// ##################################################
// ##################################################
// ##################################################

// 50대 여성 식품
var ctx = document.getElementById("myAreaChart3-50female");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    datasets: [
      {
        label: "영양제",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#ff9205", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#ff9205", // 원 내부 색 (solid)
        pointBorderColor: "#ff9205", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#ff9205",
        pointHoverBorderColor: "#ff9205",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [74, 77, 92, 87, 86, 77, 80, 82, 83, 83, 85, 100],
      },
      {
        label: "채소",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#fdd400", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#fdd400", // 원 내부 색 (solid)
        pointBorderColor: "#fdd400", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#fdd400",
        pointHoverBorderColor: "#fdd400",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [15, 20, 37, 38, 27, 25, 21, 26, 31, 33, 27, 29],
      },
      {
        label: "과일",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#fef857", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#fef857", // 원 내부 색 (solid)
        pointBorderColor: "#fef857", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#fef857",
        pointHoverBorderColor: "#fef857",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [17, 19, 28, 23, 20, 32, 24, 20, 32, 31, 27, 28],
      }
    ],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 0,
        right: 20,
        top: 20,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 5,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return number_format(value) + '%';
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 5,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function (tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': ' + number_format(tooltipItem.yLabel) + '%';
        }
      }
    }
  }
});

// ##################################################
// ##################################################
// ##################################################

// 60대 여성 식품
var ctx = document.getElementById("myAreaChart3-60female");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    datasets: [
      {
        label: "영양제",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#ff9205", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#ff9205", // 원 내부 색 (solid)
        pointBorderColor: "#ff9205", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#ff9205",
        pointHoverBorderColor: "#ff9205",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [67, 72, 85, 78, 75, 69, 71, 75, 74, 78, 81, 100],
      },
      {
        label: "채소",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#fdd400", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#fdd400", // 원 내부 색 (solid)
        pointBorderColor: "#fdd400", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#fdd400",
        pointHoverBorderColor: "#fdd400",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [16, 20, 34, 38, 28, 27, 23, 30, 34, 39, 30, 29],
      },
      {
        label: "과일",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#fef857", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#fef857", // 원 내부 색 (solid)
        pointBorderColor: "#fef857", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#fef857",
        pointHoverBorderColor: "#fef857",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [15, 16, 22, 19, 17, 28, 22, 18, 29, 27, 25, 26],
      }
    ],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 0,
        right: 20,
        top: 20,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 5,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return number_format(value) + '%';
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 5,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function (tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': ' + number_format(tooltipItem.yLabel) + '%';
        }
      }
    }
  }
});

// ##################################################
// ##################################################
// ##################################################

// 10대 남성 식품
var ctx = document.getElementById("myAreaChart3-10male");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    datasets: [
      {
        label: "헬스보충제",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#ff9205", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#ff9205", // 원 내부 색 (solid)
        pointBorderColor: "#ff9205", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#ff9205",
        pointHoverBorderColor: "#ff9205",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [48, 43, 55, 63, 75, 80, 93, 100, 76, 66, 63, 56],
      },
      {
        label: "축산가공식품",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#fdd400", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#fdd400", // 원 내부 색 (solid)
        pointBorderColor: "#fdd400", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#fdd400",
        pointHoverBorderColor: "#fdd400",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [30, 35, 46, 50, 47, 33, 39, 42, 44, 39, 45, 48],
      },
      {
        label: "영양제",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#fef857", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#fef857", // 원 내부 색 (solid)
        pointBorderColor: "#fef857", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#fef857",
        pointHoverBorderColor: "#fef857",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [21, 21, 30, 31, 30, 24, 24, 27, 29, 32, 29, 34],
      }
    ],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 0,
        right: 20,
        top: 20,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 5,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return number_format(value) + '%';
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 5,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function (tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': ' + number_format(tooltipItem.yLabel) + '%';
        }
      }
    }
  }
});

// ##################################################
// ##################################################
// ##################################################

// 20대 남성 식품
var ctx = document.getElementById("myAreaChart3-20male");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    datasets: [
      {
        label: "축산가공식품",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#ff9205", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#ff9205", // 원 내부 색 (solid)
        pointBorderColor: "#ff9205", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#ff9205",
        pointHoverBorderColor: "#ff9205",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [67, 79, 96, 100, 96, 87, 89, 81, 88, 78, 83, 92],
      },
      {
        label: "영양제",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#fdd400", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#fdd400", // 원 내부 색 (solid)
        pointBorderColor: "#fdd400", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#fdd400",
        pointHoverBorderColor: "#fdd400",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [72, 68, 88, 80, 83, 74, 77, 86, 83, 81, 86, 98],
      },
      {
        label: "헬스보충제",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#fef857", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#fef857", // 원 내부 색 (solid)
        pointBorderColor: "#fef857", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#fef857",
        pointHoverBorderColor: "#fef857",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [67, 65, 83, 86, 92, 94, 100, 100, 74, 69, 66, 55],
      }
    ],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 0,
        right: 20,
        top: 20,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 5,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return number_format(value) + '%';
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 5,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function (tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': ' + number_format(tooltipItem.yLabel) + '%';
        }
      }
    }
  }
});

// ##################################################
// ##################################################
// ##################################################

// 30대 남성 식품
var ctx = document.getElementById("myAreaChart3-30male");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    datasets: [
      {
        label: "영양제",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#ff9205", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#ff9205", // 원 내부 색 (solid)
        pointBorderColor: "#ff9205", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#ff9205",
        pointHoverBorderColor: "#ff9205",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [90, 84, 98, 92, 92, 85, 82, 81, 84, 84, 89, 100],
      },
      {
        label: "축산가공식품",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#fdd400", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#fdd400", // 원 내부 색 (solid)
        pointBorderColor: "#fdd400", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#fdd400",
        pointHoverBorderColor: "#fdd400",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [50, 56, 70, 68, 62, 60, 60, 56, 63, 52, 54, 65],
      },
      {
        label: "해산물/어패류",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#fef857", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#fef857", // 원 내부 색 (solid)
        pointBorderColor: "#fef857", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#fef857",
        pointHoverBorderColor: "#fef857",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [27, 31, 35, 40, 30, 28, 28, 25, 38, 39, 43, 63],
      }
    ],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 0,
        right: 20,
        top: 20,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 5,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return number_format(value) + '%';
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 5,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function (tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': ' + number_format(tooltipItem.yLabel) + '%';
        }
      }
    }
  }
});

// ##################################################
// ##################################################
// ##################################################

// 40대 남성 식품
var ctx = document.getElementById("myAreaChart3-40male");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    datasets: [
      {
        label: "영양제",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#ff9205", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#ff9205", // 원 내부 색 (solid)
        pointBorderColor: "#ff9205", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#ff9205",
        pointHoverBorderColor: "#ff9205",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [99, 85, 100, 95, 94, 80, 79, 78, 81, 83, 87, 99],
      },
      {
        label: "축산가공식품",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#fdd400", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#fdd400", // 원 내부 색 (solid)
        pointBorderColor: "#fdd400", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#fdd400",
        pointHoverBorderColor: "#fdd400",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [37, 39, 54, 51, 45, 42, 46, 44, 54, 39, 40, 53],
      },
      {
        label: "해산물/어패류",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#fef857", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#fef857", // 원 내부 색 (solid)
        pointBorderColor: "#fef857", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#fef857",
        pointHoverBorderColor: "#fef857",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [26, 29, 34, 39, 29, 26, 28, 24, 35, 39, 43, 66],
      }
    ],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 0,
        right: 20,
        top: 20,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 5,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return number_format(value) + '%';
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 5,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function (tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': ' + number_format(tooltipItem.yLabel) + '%';
        }
      }
    }
  }
});

// ##################################################
// ##################################################
// ##################################################

// 50대 남성 식품
var ctx = document.getElementById("myAreaChart3-50male");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    datasets: [
      {
        label: "영양제",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#ff9205", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#ff9205", // 원 내부 색 (solid)
        pointBorderColor: "#ff9205", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#ff9205",
        pointHoverBorderColor: "#ff9205",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [85, 83, 97, 89, 91, 78, 79, 78, 79, 82, 85, 100],
      },
      {
        label: "커피",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#fdd400", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#fdd400", // 원 내부 색 (solid)
        pointBorderColor: "#fdd400", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#fdd400",
        pointHoverBorderColor: "#fdd400",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [22, 22, 27, 28, 28, 27, 27, 26, 26, 26, 27, 34],
      },
      {
        label: "해산물/어패류",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#fef857", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#fef857", // 원 내부 색 (solid)
        pointBorderColor: "#fef857", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#fef857",
        pointHoverBorderColor: "#fef857",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [18, 18, 24, 26, 19, 16, 18, 15, 22, 26, 31, 47],
      }
    ],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 0,
        right: 20,
        top: 20,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 5,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return number_format(value) + '%';
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 5,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function (tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': ' + number_format(tooltipItem.yLabel) + '%';
        }
      }
    }
  }
});

// ##################################################
// ##################################################
// ##################################################

// 60대 남성 식품
var ctx = document.getElementById("myAreaChart3-60male");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    datasets: [
      {
        label: "영양제",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#ff9205", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#ff9205", // 원 내부 색 (solid)
        pointBorderColor: "#ff9205", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#ff9205",
        pointHoverBorderColor: "#ff9205",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [76, 83, 98, 83, 83, 72, 73, 73, 79, 79, 83, 100],
      },
      {
        label: "해산물/어패류",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#fdd400", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#fdd400", // 원 내부 색 (solid)
        pointBorderColor: "#fdd400", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#fdd400",
        pointHoverBorderColor: "#fdd400",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [12, 11, 17, 17, 12, 10, 11, 10, 15, 16, 23, 31],
      },
      {
        label: "생선",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#fef857", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#fef857", // 원 내부 색 (solid)
        pointBorderColor: "#fef857", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#fef857",
        pointHoverBorderColor: "#fef857",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [12, 8, 11, 11, 10, 9, 12, 13, 18, 11, 14, 26],
      }
    ],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 0,
        right: 20,
        top: 20,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 5,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return number_format(value) + '%';
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 5,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function (tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': ' + number_format(tooltipItem.yLabel) + '%';
        }
      }
    }
  }
});

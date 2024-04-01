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
    toFixedFix = function (n, prec) {
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

// flask에서 render_template을 사용해 데이터를 보낸다?
// 가구/인테리어 10대 여성
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    datasets: [
      {
        label: "보석십자수",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#0484fc", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#0484fc", // 원 내부 색 (solid)
        pointBorderColor: "#0484fc", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#0484fc",
        pointHoverBorderColor: "#0484fc",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [2, 3, 20, 36, 49, 25, 45, 100, 68, 36, 37, 82],
      },
      {
        label: "액자",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#6cc4fc", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#6cc4fc", // 원 내부 색 (solid)
        pointBorderColor: "#6cc4fc", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#6cc4fc",
        pointHoverBorderColor: "#6cc4fc",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [10, 18, 40, 37, 37, 20, 19, 29, 32, 19, 20, 67],
      },
      {
        label: "조명",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#b4f2fc", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#b4f2fc", // 원 내부 색 (solid)
        pointBorderColor: "#b4f2fc", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#b4f2fc",
        pointHoverBorderColor: "#b4f2fc",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [11, 14, 21, 23, 21, 13, 13, 17, 21, 20, 22, 37],
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

// 가구/인테리어 20대 여성
var ctx = document.getElementById("myAreaChart-20female");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    datasets: [
      {
        label: "아로마/캔들용품",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#0484fc", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#0484fc", // 원 내부 색 (solid)
        pointBorderColor: "#0484fc", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#0484fc",
        pointHoverBorderColor: "#0484fc",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [45, 58, 77, 68, 64, 51, 56, 67, 78, 68, 65, 100],
      },
      {
        label: "액자",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#6cc4fc", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#6cc4fc", // 원 내부 색 (solid)
        pointBorderColor: "#6cc4fc", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#6cc4fc",
        pointHoverBorderColor: "#6cc4fc",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [26, 39, 67, 47, 43, 33, 35, 41, 47, 33, 35, 67],
      },
      {
        label: "조명",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#b4f2fc", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#b4f2fc", // 원 내부 색 (solid)
        pointBorderColor: "#b4f2fc", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#b4f2fc",
        pointHoverBorderColor: "#b4f2fc",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [28, 32, 43, 40, 37, 33, 33, 36, 42, 42, 49, 76],
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

// 가구/인테리어 30대 여성
var ctx = document.getElementById("myAreaChart-30female");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    datasets: [
      {
        label: "소파",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#0484fc", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#0484fc", // 원 내부 색 (solid)
        pointBorderColor: "#0484fc", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#0484fc",
        pointHoverBorderColor: "#0484fc",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [69, 80, 100, 93, 86, 76, 76, 88, 90, 79, 75, 93],
      },
      {
        label: "식탁/의자",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#6cc4fc", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#6cc4fc", // 원 내부 색 (solid)
        pointBorderColor: "#6cc4fc", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#6cc4fc",
        pointHoverBorderColor: "#6cc4fc",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [73, 83, 100, 91, 82, 70, 69, 77, 79, 71, 71, 88],
      },
      {
        label: "조명",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#b4f2fc", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#b4f2fc", // 원 내부 색 (solid)
        pointBorderColor: "#b4f2fc", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#b4f2fc",
        pointHoverBorderColor: "#b4f2fc",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [38, 43, 55, 55, 49, 43, 45, 48, 53, 55, 70, 92],
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

// 가구/인테리어 40대 여성
var ctx = document.getElementById("myAreaChart-40female");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    datasets: [
      {
        label: "소파",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#0484fc", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#0484fc", // 원 내부 색 (solid)
        pointBorderColor: "#0484fc", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#0484fc",
        pointHoverBorderColor: "#0484fc",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [69, 79, 99, 100, 98, 84, 87, 98, 99, 91, 81, 97],
      },
      {
        label: "식탁/의자",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#6cc4fc", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#6cc4fc", // 원 내부 색 (solid)
        pointBorderColor: "#6cc4fc", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#6cc4fc",
        pointHoverBorderColor: "#6cc4fc",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [75, 85, 100, 99, 92, 77, 77, 84, 87, 80, 75, 92],
      },
      {
        label: "조명",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#b4f2fc", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#b4f2fc", // 원 내부 색 (solid)
        pointBorderColor: "#b4f2fc", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#b4f2fc",
        pointHoverBorderColor: "#b4f2fc",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [34, 38, 49, 51, 48, 40, 42, 44, 48, 51, 62, 80],
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

// 가구/인테리어 50대 여성
var ctx = document.getElementById("myAreaChart-50female");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    datasets: [
      {
        label: "식탁/의자",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#0484fc", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#0484fc", // 원 내부 색 (solid)
        pointBorderColor: "#0484fc", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#0484fc",
        pointHoverBorderColor: "#0484fc",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [70, 80, 95, 98, 100, 88, 85, 90, 95, 91, 83, 100],
      },
      {
        label: "소파",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#6cc4fc", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#6cc4fc", // 원 내부 색 (solid)
        pointBorderColor: "#6cc4fc", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#6cc4fc",
        pointHoverBorderColor: "#6cc4fc",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [56, 64, 80, 83, 90, 77, 78, 90, 90, 87, 77, 91],
      },
      {
        label: "조명",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#b4f2fc", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#b4f2fc", // 원 내부 색 (solid)
        pointBorderColor: "#b4f2fc", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#b4f2fc",
        pointHoverBorderColor: "#b4f2fc",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [27, 29, 37, 40, 39, 35, 34, 36, 38, 43, 50, 61],
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

// 가구/인테리어 60대 여성
var ctx = document.getElementById("myAreaChart-60female");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    datasets: [
      {
        label: "식탁/의자",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#0484fc", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#0484fc", // 원 내부 색 (solid)
        pointBorderColor: "#0484fc", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#0484fc",
        pointHoverBorderColor: "#0484fc",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [69, 76, 87, 89, 95, 86, 87, 87, 95, 91, 85, 100],
      },
      {
        label: "소파",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#6cc4fc", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#6cc4fc", // 원 내부 색 (solid)
        pointBorderColor: "#6cc4fc", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#6cc4fc",
        pointHoverBorderColor: "#6cc4fc",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [57, 65, 78, 82, 92, 80, 81, 91, 91, 93, 81, 90],
      },
      {
        label: "조명",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#b4f2fc", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#b4f2fc", // 원 내부 색 (solid)
        pointBorderColor: "#b4f2fc", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#b4f2fc",
        pointHoverBorderColor: "#b4f2fc",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [31, 33, 41, 43, 44, 39, 39, 39, 43, 49, 56, 67],
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

// 가구/인테리어 10대 남성
var ctx = document.getElementById("myAreaChart-10male");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    datasets: [
      {
        label: "조명",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#0484fc", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#0484fc", // 원 내부 색 (solid)
        pointBorderColor: "#0484fc", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#0484fc",
        pointHoverBorderColor: "#0484fc",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [37, 49, 60, 59, 61, 39, 39, 47, 58, 55, 60, 100],
      },
      {
        label: "사무/교구용가구",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#6cc4fc", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#6cc4fc", // 원 내부 색 (solid)
        pointBorderColor: "#6cc4fc", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#6cc4fc",
        pointHoverBorderColor: "#6cc4fc",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [29, 37, 53, 75, 62, 41, 41, 53, 59, 41, 40, 63],
      },
      {
        label: "액자",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#b4f2fc", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#b4f2fc", // 원 내부 색 (solid)
        pointBorderColor: "#b4f2fc", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#b4f2fc",
        pointHoverBorderColor: "#b4f2fc",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [29, 34, 53, 50, 44, 35, 36, 40, 49, 39, 40, 67],
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

// 가구/인테리어 20대 남성
var ctx = document.getElementById("myAreaChart-20male");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    datasets: [
      {
        label: "의자",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#0484fc", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#0484fc", // 원 내부 색 (solid)
        pointBorderColor: "#0484fc", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#0484fc",
        pointHoverBorderColor: "#0484fc",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [56, 69, 93, 82, 74, 69, 66, 82, 92, 71, 66, 100],
      },
      {
        label: "책상",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#6cc4fc", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#6cc4fc", // 원 내부 색 (solid)
        pointBorderColor: "#6cc4fc", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#6cc4fc",
        pointHoverBorderColor: "#6cc4fc",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [51, 66, 81, 70, 58, 53, 54, 68, 72, 55, 58, 92],
      },
      {
        label: "조명",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#b4f2fc", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#b4f2fc", // 원 내부 색 (solid)
        pointBorderColor: "#b4f2fc", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#b4f2fc",
        pointHoverBorderColor: "#b4f2fc",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [40, 47, 61, 55, 52, 46, 47, 49, 55, 56, 61, 83],
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

// 가구/인테리어 30대 남성
var ctx = document.getElementById("myAreaChart-30male");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    datasets: [
      {
        label: "조명",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#0484fc", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#0484fc", // 원 내부 색 (solid)
        pointBorderColor: "#0484fc", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#0484fc",
        pointHoverBorderColor: "#0484fc",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [65, 67, 84, 80, 76, 66, 67, 68, 73, 79, 84, 100],
      },
      {
        label: "의자",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#6cc4fc", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#6cc4fc", // 원 내부 색 (solid)
        pointBorderColor: "#6cc4fc", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#6cc4fc",
        pointHoverBorderColor: "#6cc4fc",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [38, 44, 57, 52, 51, 46, 43, 48, 51, 47, 46, 58],
      },
      {
        label: "책상",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#b4f2fc", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#b4f2fc", // 원 내부 색 (solid)
        pointBorderColor: "#b4f2fc", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#b4f2fc",
        pointHoverBorderColor: "#b4f2fc",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [33, 38, 47, 42, 36, 31, 31, 36, 38, 34, 36, 49],
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

// 가구/인테리어 40대 남성
var ctx = document.getElementById("myAreaChart-40male");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    datasets: [
      {
        label: "조명",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#0484fc", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#0484fc", // 원 내부 색 (solid)
        pointBorderColor: "#0484fc", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#0484fc",
        pointHoverBorderColor: "#0484fc",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [66, 70, 83, 84, 80, 68, 69, 70, 73, 83, 87, 100],
      },
      {
        label: "가구부속품",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#6cc4fc", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#6cc4fc", // 원 내부 색 (solid)
        pointBorderColor: "#6cc4fc", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#6cc4fc",
        pointHoverBorderColor: "#6cc4fc",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [30, 34, 42, 44, 43, 40, 38, 37, 40, 41, 40, 45],
      },
      {
        label: "식탁/의자",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#b4f2fc", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#b4f2fc", // 원 내부 색 (solid)
        pointBorderColor: "#b4f2fc", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#b4f2fc",
        pointHoverBorderColor: "#b4f2fc",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [36, 39, 44, 44, 42, 37, 35, 37, 37, 38, 37, 42],
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

// 가구/인테리어 50대 남성
var ctx = document.getElementById("myAreaChart-50male");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    datasets: [
      {
        label: "조명",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#0484fc", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#0484fc", // 원 내부 색 (solid)
        pointBorderColor: "#0484fc", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#0484fc",
        pointHoverBorderColor: "#0484fc",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [65, 64, 77, 77, 77, 68, 68, 68, 72, 84, 90, 100],
      },
      {
        label: "가구부속품",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#6cc4fc", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#6cc4fc", // 원 내부 색 (solid)
        pointBorderColor: "#6cc4fc", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#6cc4fc",
        pointHoverBorderColor: "#6cc4fc",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [34, 38, 48, 49, 51, 48, 45, 45, 47, 50, 49, 54],
      },
      {
        label: "식탁/의자",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#b4f2fc", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#b4f2fc", // 원 내부 색 (solid)
        pointBorderColor: "#b4f2fc", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#b4f2fc",
        pointHoverBorderColor: "#b4f2fc",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [30, 34, 38, 40, 41, 35, 34, 36, 36, 36, 34, 40],
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

// 가구/인테리어 60대 남성
var ctx = document.getElementById("myAreaChart-60male");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    datasets: [
      {
        label: "조명",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#0484fc", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#0484fc", // 원 내부 색 (solid)
        pointBorderColor: "#0484fc", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#0484fc",
        pointHoverBorderColor: "#0484fc",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [64, 62, 70, 74, 72, 65, 68, 66, 72, 82, 90, 100],
      },
      {
        label: "가구부속품",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#6cc4fc", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#6cc4fc", // 원 내부 색 (solid)
        pointBorderColor: "#6cc4fc", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#6cc4fc",
        pointHoverBorderColor: "#6cc4fc",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [32, 37, 44, 45, 46, 44, 42, 41, 46, 48, 48, 52],
      },
      {
        label: "식탁/의자",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#b4f2fc", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#b4f2fc", // 원 내부 색 (solid)
        pointBorderColor: "#b4f2fc", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#b4f2fc",
        pointHoverBorderColor: "#b4f2fc",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [30, 29, 34, 34, 37, 35, 33, 32, 35, 37, 33, 38],
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

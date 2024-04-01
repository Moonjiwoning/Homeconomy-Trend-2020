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

// 10대 여성 스포츠/레저
var ctx = document.getElementById("myAreaChart2");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    datasets: [
      {
        label: "등산의류",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#1a7270", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#1a7270", // 원 내부 색 (solid)
        pointBorderColor: "#1a7270", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#1a7270",
        pointHoverBorderColor: "#1a7270",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [19.7, 17.7, 15.1, 9.8, 19.3, 12.3, 9.6, 14.4, 30.7, 64.2, 100, 47.6],
      },
      {
        label: "스케이트보드",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#3a9d90", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#3a9d90", // 원 내부 색 (solid)
        pointBorderColor: "#3a9d90", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#3a9d90",
        pointHoverBorderColor: "#3a9d90",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [0.9, 1.8, 3.4, 5.5, 7.4, 5.3, 4.3, 2.5, 2.7, 3.1, 1.9, 1.4],
      },
      {
        label: "골프의류",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#98d2af", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#98d2af", // 원 내부 색 (solid)
        pointBorderColor: "#98d2af", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#98d2af",
        pointHoverBorderColor: "#98d2af",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [0.9, 1.4, 2.2, 2.1, 3, 1.6, 1.6, 1.6, 2.3, 2.4, 2.3, 1.6],
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

// 20대 여성 스포츠/레저
var ctx = document.getElementById("myAreaChart2-20female");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    datasets: [
      {
        label: "등산의류",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#1a7270", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#1a7270", // 원 내부 색 (solid)
        pointBorderColor: "#1a7270", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#1a7270",
        pointHoverBorderColor: "#1a7270",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [21.8, 12.7, 14, 15.4, 20, 15, 12.6, 16.5, 30, 76, 100, 85.6],
      },
      {
        label: "여성수영복",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#3a9d90", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#3a9d90", // 원 내부 색 (solid)
        pointBorderColor: "#3a9d90", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#3a9d90",
        pointHoverBorderColor: "#3a9d90",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [19, 10, 5.8, 5.6, 8.9, 15.3, 22.5, 17.9, 4.8, 4.6, 5, 3.1],
      },
      {
        label: "골프의류",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#98d2af", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#98d2af", // 원 내부 색 (solid)
        pointBorderColor: "#98d2af", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#98d2af",
        pointHoverBorderColor: "#98d2af",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [3.4, 3.4, 5.4, 6.7, 7.5, 5.5, 4.8, 4.6, 6.2, 8.7, 8, 6.3],
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

// 30대 여성 스포츠/레저
var ctx = document.getElementById("myAreaChart2-30female");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    datasets: [
      {
        label: "등산의류",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#1a7270", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#1a7270", // 원 내부 색 (solid)
        pointBorderColor: "#1a7270", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#1a7270",
        pointHoverBorderColor: "#1a7270",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [33.3, 18.1, 20.5, 26.1, 30.9, 23.7, 17.9, 17.4, 28.4, 77.4, 100, 90.8],
      },
      {
        label: "취사용품",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#3a9d90", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#3a9d90", // 원 내부 색 (solid)
        pointBorderColor: "#3a9d90", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#3a9d90",
        pointHoverBorderColor: "#3a9d90",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [5, 5.3, 11.9, 25.5, 28.3, 24.1, 26.9, 19.5, 22.5, 25.9, 15, 13.5],
      },
      {
        label: "텐트",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#98d2af", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#98d2af", // 원 내부 색 (solid)
        pointBorderColor: "#98d2af", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#98d2af",
        pointHoverBorderColor: "#98d2af",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [2.2, 2.5, 10.6, 23.2, 30.9, 27.4, 29.3, 19.6, 21.4, 25.4, 13.6, 10.1],
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

// 40대 여성 스포츠/레저
var ctx = document.getElementById("myAreaChart2-40female");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    datasets: [
      {
        label: "등산의류",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#1a7270", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#1a7270", // 원 내부 색 (solid)
        pointBorderColor: "#1a7270", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#1a7270",
        pointHoverBorderColor: "#1a7270",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [36, 21.9, 22.7, 27.2, 33.1, 24.7, 18.1, 16, 26.5, 74.6, 100, 77.6],
      },
      {
        label: "골프의류",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#3a9d90", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#3a9d90", // 원 내부 색 (solid)
        pointBorderColor: "#3a9d90", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#3a9d90",
        pointHoverBorderColor: "#3a9d90",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [12.9, 14.1, 21.2, 28.1, 33.4, 29.4, 23.6, 20.2, 26.6, 44.9, 38.2, 24.5],
      },
      {
        label: "취사용품",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#98d2af", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#98d2af", // 원 내부 색 (solid)
        pointBorderColor: "#98d2af", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#98d2af",
        pointHoverBorderColor: "#98d2af",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [3.5, 3.5, 7, 13.1, 14.7, 12.4, 15.2, 11.5, 11.8, 13.8, 8.4, 8.1],
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

// 50대 여성 스포츠/레저
var ctx = document.getElementById("myAreaChart2-50female");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    datasets: [
      {
        label: "골프의류",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#1a7270", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#1a7270", // 원 내부 색 (solid)
        pointBorderColor: "#1a7270", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#1a7270",
        pointHoverBorderColor: "#1a7270",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [31.8, 33.6, 48.2, 62.7, 77.8, 66.8, 52, 46, 53.2, 95.4, 83.8, 60.9],
      },
      {
        label: "등산의류",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#3a9d90", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#3a9d90", // 원 내부 색 (solid)
        pointBorderColor: "#3a9d90", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#3a9d90",
        pointHoverBorderColor: "#3a9d90",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [43.2, 30.9, 35.8, 42.4, 49.3, 37.8, 26.7, 21.8, 31.1, 83.6, 100, 90.4],
      },
      {
        label: "골프백",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#98d2af", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#98d2af", // 원 내부 색 (solid)
        pointBorderColor: "#98d2af", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#98d2af",
        pointHoverBorderColor: "#98d2af",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [6.7, 8.2, 9.3, 11.5, 14.7, 14.6, 15.5, 15.1, 13.5, 14.8, 11.4, 8.1],
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

// 60대 여성 스포츠/레저
var ctx = document.getElementById("myAreaChart2-60female");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    datasets: [
      {
        label: "등산의류",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#1a7270", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#1a7270", // 원 내부 색 (solid)
        pointBorderColor: "#1a7270", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#1a7270",
        pointHoverBorderColor: "#1a7270",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [45.8, 35.6, 39.6, 47.6, 54.4, 45.8, 32.8, 27.9, 34.8, 83.8, 100, 88.6],
      },
      {
        label: "골프의류",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#3a9d90", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#3a9d90", // 원 내부 색 (solid)
        pointBorderColor: "#3a9d90", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#3a9d90",
        pointHoverBorderColor: "#3a9d90",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [29.1, 28.6, 36.3, 45.7, 57.1, 50.7, 39.8, 34.9, 36.9, 64, 61.5, 50.9],
      },
      {
        label: "등산화",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#98d2af", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#98d2af", // 원 내부 색 (solid)
        pointBorderColor: "#98d2af", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#98d2af",
        pointHoverBorderColor: "#98d2af",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [7.3, 6.6, 11.6, 17, 14.7, 11.9, 10.5, 8.1, 11.5, 16.1, 14.4, 15.3],
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

// 10대 남성 스포츠/레저
var ctx = document.getElementById("myAreaChart2-10male");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    datasets: [
      {
        label: "자전거/MTB",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#1a7270", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#1a7270", // 원 내부 색 (solid)
        pointBorderColor: "#1a7270", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#1a7270",
        pointHoverBorderColor: "#1a7270",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [26, 30, 45, 69, 72, 62, 61, 52, 61, 63, 48, 39],
      },
      {
        label: "등산의류",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#98d2af", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#98d2af", // 원 내부 색 (solid)
        pointBorderColor: "#98d2af", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#98d2af",
        pointHoverBorderColor: "#98d2af",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [27, 19, 19, 16, 26, 23, 18, 19, 25, 60, 100, 55],
      },
      {
        label: "축구화",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#3a9d90", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#3a9d90", // 원 내부 색 (solid)
        pointBorderColor: "#3a9d90", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#3a9d90",
        pointHoverBorderColor: "#3a9d90",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [42, 42, 36, 30, 27, 22, 24, 28, 32, 33, 30, 28],
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

// 20대 남성 스포츠/레저
var ctx = document.getElementById("myAreaChart2-20male");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    datasets: [
      {
        label: "등산의류",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#1a7270", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#1a7270", // 원 내부 색 (solid)
        pointBorderColor: "#1a7270", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#1a7270",
        pointHoverBorderColor: "#1a7270",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [33, 21, 22, 23, 28, 24, 19, 20, 34, 75, 100, 91],
      },
      {
        label: "자전거/MTB",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#3a9d90", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#3a9d90", // 원 내부 색 (solid)
        pointBorderColor: "#3a9d90", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#3a9d90",
        pointHoverBorderColor: "#3a9d90",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [8, 11, 21, 30, 31, 26, 22, 18, 23, 18, 11, 10],
      },
      {
        label: "웨이트기구",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#98d2af", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#98d2af", // 원 내부 색 (solid)
        pointBorderColor: "#98d2af", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#98d2af",
        pointHoverBorderColor: "#98d2af",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [10, 14, 27, 19, 15, 14, 14, 21, 21, 13, 12, 32],
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

// 30대 남성 스포츠/레저
var ctx = document.getElementById("myAreaChart2-30male");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    datasets: [
      {
        label: "등산의류",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#1a7270", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#1a7270", // 원 내부 색 (solid)
        pointBorderColor: "#1a7270", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#1a7270",
        pointHoverBorderColor: "#1a7270",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [43, 27, 32, 36, 42, 35, 26, 24, 38, 80, 100, 96],
      },
      {
        label: "취사용품",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#3a9d90", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#3a9d90", // 원 내부 색 (solid)
        pointBorderColor: "#3a9d90", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#3a9d90",
        pointHoverBorderColor: "#3a9d90",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [11, 12, 22, 42, 49, 42, 44, 33, 40, 48, 32, 29],
      },
      {
        label: "텐트",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#98d2af", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#98d2af", // 원 내부 색 (solid)
        pointBorderColor: "#98d2af", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#98d2af",
        pointHoverBorderColor: "#98d2af",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [7, 8, 19, 38, 49, 42, 42, 32, 35, 42, 27, 23],
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

// 40대 남성 스포츠/레저
var ctx = document.getElementById("myAreaChart2-40male");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    datasets: [
      {
        label: "등산의류",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#1a7270", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#1a7270", // 원 내부 색 (solid)
        pointBorderColor: "#1a7270", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#1a7270",
        pointHoverBorderColor: "#1a7270",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [50, 34, 40, 43, 52, 43, 31, 26, 40, 82, 100, 93],
      },
      {
        label: "골프의류",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#3a9d90", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#3a9d90", // 원 내부 색 (solid)
        pointBorderColor: "#3a9d90", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#3a9d90",
        pointHoverBorderColor: "#3a9d90",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [15, 18, 28, 34, 38, 32, 24, 20, 28, 52, 45, 29],
      },
      {
        label: "취사용품",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#98d2af", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#98d2af", // 원 내부 색 (solid)
        pointBorderColor: "#98d2af", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#98d2af",
        pointHoverBorderColor: "#98d2af",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [12, 12, 20, 35, 42, 36, 40, 30, 32, 40, 28, 27],
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

// 50대 남성 스포츠/레저
var ctx = document.getElementById("myAreaChart2-50male");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    datasets: [
      {
        label: "등산의류",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#1a7270", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#1a7270", // 원 내부 색 (solid)
        pointBorderColor: "#1a7270", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#1a7270",
        pointHoverBorderColor: "#1a7270",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [53, 40, 44, 48, 59, 49, 36, 27, 39, 84, 100, 94],
      },
      {
        label: "골프클럽",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#3a9d90", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#3a9d90", // 원 내부 색 (solid)
        pointBorderColor: "#3a9d90", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#3a9d90",
        pointHoverBorderColor: "#3a9d90",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [30, 36, 41, 44, 54, 50, 52, 50, 47, 54, 48, 40],
      },
      {
        label: "골프의류",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#98d2af", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#98d2af", // 원 내부 색 (solid)
        pointBorderColor: "#98d2af", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#98d2af",
        pointHoverBorderColor: "#98d2af",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [20, 20, 31, 40, 48, 41, 30, 23, 30, 60, 57, 41],
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

// 60대 남성 스포츠/레저
var ctx = document.getElementById("myAreaChart2-60male");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    datasets: [
      {
        label: "등산의류",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#1a7270", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#1a7270", // 원 내부 색 (solid)
        pointBorderColor: "#1a7270", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#1a7270",
        pointHoverBorderColor: "#1a7270",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [50, 40, 44, 50, 67, 57, 40, 30, 40, 84, 100, 97],
      },
      {
        label: "골프클럽",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#3a9d90", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#3a9d90", // 원 내부 색 (solid)
        pointBorderColor: "#3a9d90", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#3a9d90",
        pointHoverBorderColor: "#3a9d90",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [23, 28, 30, 31, 40, 39, 40, 37, 37, 42, 36, 30],
      },
      {
        label: "자전거/MTB",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#98d2af", // 그래프 선 색상
        pointRadius: 2,
        pointBackgroundColor: "#98d2af", // 원 내부 색 (solid)
        pointBorderColor: "#98d2af", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#98d2af",
        pointHoverBorderColor: "#98d2af",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [11, 14, 25, 35, 41, 36, 36, 27, 34, 34, 23, 18],
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

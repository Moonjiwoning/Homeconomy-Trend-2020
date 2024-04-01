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

// 전체 카테고리 (19년도 대비 20년도 상승률)
var ctx = document.getElementById("myAreaChart_all");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["19' 1", "2", "3", "4", "20' 1", "2", "3", "4"],
    datasets: [
      {
        label: "가구/인테리어",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#62993E", // 그래프 선 색상
        borderWidth: 2,
        pointRadius: 2,
        pointBackgroundColor: "#62993E", // 원 내부 색 (solid)
        pointBorderColor: "#62993E", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#62993E",
        pointHoverBorderColor: "#62993E",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [2223, 1931, 2243, 2447, 2956, 3383, 3143, 3303],
      },
      {
        label: "식품",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#F1A78A", // 그래프 선 색상
        borderWidth: 2,
        pointRadius: 2,
        pointBackgroundColor: "#F1A78A", // 원 내부 색 (solid)
        pointBorderColor: "#F1A78A", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#F1A78A",
        pointHoverBorderColor: "#F1A78A",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [1736, 1746, 2079, 2274, 2856, 2808, 3006, 3040],
      },
      {
        label: "스포츠/레저",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#538BBD", // 그래프 선 색상
        borderWidth: 2,
        pointRadius: 2,
        pointBackgroundColor: "#538BBD", // 원 내부 색 (solid)
        pointBorderColor: "#538BBD", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#538BBD",
        pointHoverBorderColor: "#538BBD",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [1837, 2442, 2981, 3038, 2427, 3977, 3638, 3872],
      },
      {
        label: "패션",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#E2AA00", // 그래프 선 색상
        borderWidth: 2,
        pointRadius: 2,
        pointBackgroundColor: "#E2AA00", // 원 내부 색 (solid)
        pointBorderColor: "#E2AA00", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#E2AA00",
        pointHoverBorderColor: "#E2AA00",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [8148, 8139, 9376, 10000, 4952, 5537, 4639, 5776], // 11342 -> 10000
      },
      {
        label: "디지털/가전",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#5B4E55", // 그래프 선 색상
        borderWidth: 2,
        pointRadius: 2,
        pointBackgroundColor: "#5B4E55", // 원 내부 색 (solid)
        pointBorderColor: "#5B4E55", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#5B4E55",
        pointHoverBorderColor: "#5B4E55",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [7110, 5552, 5956, 5904, 3290, 3445, 3336, 3568],
      },
      {
        label: "여가/생활편의",
        lineTension: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)", // 바탕 색(연한부분)
        borderColor: "#8FA2D4", // 그래프 선 색상
        borderWidth: 2,
        pointRadius: 2,
        pointBackgroundColor: "#8FA2D4", // 원 내부 색 (solid)
        pointBorderColor: "#8FA2D4", // 원 테두리 색
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "#8FA2D4",
        pointHoverBorderColor: "#8FA2D4",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [368, 347, 477, 417, 306, 223, 280, 223],
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
            return number_format(value);
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
      titleMarginBottom: 10,
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
          return datasetLabel + ': ' + number_format(tooltipItem.yLabel);
        }
      }
    }
  }
});
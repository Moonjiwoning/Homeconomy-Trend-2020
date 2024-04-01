// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// 여성 인기 카테고리 (연령불문) - 가구/인테리어
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["조명", "소파", "식탁/의자", "보석십자수", "액자", "아로마/캔들"],
    datasets: [{
      data: [31.5, 25, 25, 6.25, 6.25, 6.25],
      backgroundColor: ['#043b6f', '#0054a6', '#046dda', '#75a4e2', '#b2c6ef', '#d7e0f9'], // 영역별 색상
      hoverBackgroundColor: ['#4f759a', '#4c87c1', '#4f99e5', '#9ebfeb', '#c9d7f4', '#e3e9fb'], // 클릭시 배경색
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});

// ##################################################
// ##################################################
// ##################################################

// 여성 인기 카테고리 (연령불문) - 스포츠/레저
var ctx = document.getElementById("myPieChart-sports");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["등산의류", "골프의류", "취사용품", "스케이트보드", "여성수영복", "등산화"],
    datasets: [{
      data: [37.5, 31.3, 12.5, 6.3, 6.3, 6.3],
      backgroundColor: ['#043b6f', '#0054a6', '#046dda', '#75a4e2', '#b2c6ef', '#d7e0f9'], // 영역별 색상
      hoverBackgroundColor: ['#4f759a', '#4c87c1', '#4f99e5', '#9ebfeb', '#c9d7f4', '#e3e9fb'], // 클릭시 배경색
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});

// ##################################################
// ##################################################
// ##################################################

// 여성 인기 카테고리 (연령불문) - 식품
var ctx = document.getElementById("myPieChart-food");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["영양제", "축산가공식품", "쿠키", "커피", "과일", "채소"],
    datasets: [{
      data: [31.3, 18.8, 12.5, 12.5, 12.5, 12.5],
      backgroundColor: ['#043b6f', '#0054a6', '#046dda', '#75a4e2', '#b2c6ef', '#d7e0f9'], // 영역별 색상
      hoverBackgroundColor: ['#4f759a', '#4c87c1', '#4f99e5', '#9ebfeb', '#c9d7f4', '#e3e9fb'], // 클릭시 배경색
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});

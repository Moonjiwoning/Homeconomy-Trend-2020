// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// 남성 인기 카테고리 (연령불문) - 가구/인테리어
var ctx = document.getElementById("myPieChart2");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["조명", "의자", "가구부속품", "책상", "식탁/의자"],
    datasets: [{
      data: [37.5, 18.8, 18.8, 12.5, 12.5],
      backgroundColor: ['#823156', '#b03a4e', '#e75143', '#ff7d52', '#ffb263'], // 영역별 색상
      hoverBackgroundColor: ['#a76e88', '#c87583', '#ee857b', '#ffa486', '#ffc991'], // 클릭시 배경색
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

// 남성 인기 카테고리 (연령불문) - 스포츠/레저
var ctx = document.getElementById("myPieChart2-sports");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["등산의류", "자전거/MTB", "취사용품", "골프의류", "골프클럽", "축구화"],
    datasets: [{
      data: [37.5, 18.8, 12.5, 12.5, 12.5, 6.3],
      backgroundColor: ['#823156', '#b03a4e', '#e75143', '#ff7d52', '#ffb263', '#ffd68d'], // 영역별 색상
      hoverBackgroundColor: ['#a76e88', '#c87583', '#ee857b', '#ffa486', '#ffc991', '#ffe2af'], // 클릭시 배경색
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

// 남성 인기 카테고리 (연령불문) - 식품
var ctx = document.getElementById("myPieChart2-food");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["영양제", "축산가공식품", "해산물/어패류", "헬스보충제", "커피"],
    datasets: [{
      data: [35.3, 23.5, 23.5, 11.8, 5.9],
      backgroundColor: ['#823156', '#b03a4e', '#e75143', '#ff7d52', '#ffb263'], // 영역별 색상
      hoverBackgroundColor: ['#a76e88', '#c87583', '#ee857b', '#ffa486', '#ffc991'], // 클릭시 배경색
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
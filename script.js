var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["M", "T"],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db"
      ],
      data: [12, 19]
    }]
  }
});

var ctx = document.getElementById("myChart1").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["M", "T"],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db"
      ],
      data: [12, 19]
    }]
  }
});
var data = {
  labels: ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "CN"],
  values: [2, 5, 3, 7, 8, 6, 7],
};

var ctx = document.getElementById("myChart-line").getContext("2d");

var gradient = ctx.createLinearGradient(0, 0, 0, 300);
gradient.addColorStop(0, "#FF993C");
gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
var chart = new Chart(ctx, {
  type: "line",
  data: {
    labels: data.labels,
    datasets: [
      {
        label: "",
        data: data.values,
        backgroundColor: gradient,
        borderColor: "#FF993C",
        pointBorderColor: "transparent",
        fill: true,
        pointBorderWidth: 0,
        borderWidth: 3,
      },
    ],
  },
  options: {
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
  },
});

// Biểu đồ tròn cho gói gia đình
var dataFamily = {
  labels: ["Vé chưa sử dụng", "Vé đã sử dụng"],
  datasets: [
    {
      label: "Số lượng",
      data: [13568, 56024],
      backgroundColor: ["#FF8A48", "#4F75FF"],
      borderColor: ["#FF8A48", "#4F75FF"],
      borderWidth: 1,
    },
  ],
};

var ctxFamily = document.getElementById("myChart-pie-family").getContext("2d");

var chartFamily = new Chart(ctxFamily, {
  type: "pie",
  data: dataFamily,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: "Gói gia đình",
      fontSize: 17,
    },
    cutoutPercentage: 50,
    legend: {
      display: false,
    },
    plugins: {
      outlabels: {
        text: "%l %p",
        color: "white",
        backgroundColor: "rgba(0,0,0,0.8)",
        borderRadius: 25,
        lineColor: "white",
        display: true,
        stretch: 45,
        font: {
          minSize: 14,
          maxSize: 18,
        },
      },
    },
  },
});

// Biểu đồ tròn cho gói sự kiện
var dataEvent = {
  labels: ["Vé chưa sử dụng", "Vé đã sử dụng"],
  datasets: [
    {
      label: "Số lượng",
      data: [28302, 30256],
      backgroundColor: ["#FF8A48", "#4F75FF"],
      borderColor: ["#FF8A48", "#4F75FF"],
      borderWidth: 1,
    },
  ],
};

var ctxEvent = document.getElementById("myChart-pie-event").getContext("2d");

var chartEvent = new Chart(ctxEvent, {
  type: "pie",
  data: dataEvent,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: "Gói sự kiện",
      fontSize: 17,
    },
    cutoutPercentage: 50,
    legend: {
      display: false,
    },
    plugins: {
      outlabels: {
        text: "%l %p",
        color: "white",
        backgroundColor: "rgba(0,0,0,0.8)",
        borderRadius: 25,
        lineColor: "white",
        display: true,
        stretch: 45,
        font: {
          minSize: 14,
          maxSize: 18,
        },
      },
    },
  },
});

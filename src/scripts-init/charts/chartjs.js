import Chart from 'chart.js/auto';
import colorLib from '@kurkle/color';
import "./chartsjs-utils";

const randomScalingFactor = function () {
  return Math.round(Math.random() * 100);
};

// Pie Chart Data
const pieChartData = {
  labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
  datasets: [
    {
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
      ],
      backgroundColor: [
        window.chartColors.red,
        window.chartColors.orange,
        window.chartColors.yellow,
        window.chartColors.green,
        window.chartColors.blue,
      ],
      label: "Dataset 1",
    },
  ],
};

// Doughnut Chart Data
const doughnutChartData = Object.assign({}, pieChartData);

// Doughnut Chart Data 2
const doughnutChartData2 = Object.assign({}, pieChartData);

// Doughnut Chart Data 3
const doughnutChartData3 = Object.assign({}, pieChartData);

// Radar Chart Data
const radarChartData = {
  labels: [
    ["Eating", "Dinner"],
    ["Drinking", "Water"],
    "Sleeping",
    ["Designing", "Graphics"],
    "Coding",
    "Cycling",
    "Running",
  ],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: colorLib(window.chartColors.red).alpha(0.2).rgbString(),
      borderColor: window.chartColors.red,
      pointBackgroundColor: window.chartColors.red,
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
      ],
    },
    {
      label: "My Second dataset",
      backgroundColor: colorLib(window.chartColors.blue).alpha(0.2).rgbString(),
      borderColor: window.chartColors.blue,
      pointBackgroundColor: window.chartColors.blue,
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
      ],
    },
  ],
};

// Polar Area Chart Data
const polarAreaChartData = {
  labels: ["Red", "Green", "Yellow", "Grey", "Blue"],
  datasets: [
    {
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
      ],
      backgroundColor: [
        window.chartColors.red,
        window.chartColors.green,
        window.chartColors.yellow,
        window.chartColors.grey,
        window.chartColors.blue,
      ],
      label: "Dataset 1",
    },
  ],
};

// Verticle Bar Chart Data
const verticleBarChartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Dataset 1",
      backgroundColor: window.chartColors.red,
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
      ],
    },
    {
      label: "Dataset 2",
      backgroundColor: window.chartColors.blue,
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
      ],
    },
    {
      label: "Dataset 3",
      backgroundColor: window.chartColors.green,
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
      ],
    },
  ],
};

// Horizontal Bar Chart Data
const horizontalBarChartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Dataset 1",
      backgroundColor: colorLib(window.chartColors.red).alpha(0.5).rgbString(),
      borderColor: window.chartColors.red,
      borderWidth: 1,
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
      ],
    },
    {
      label: "Dataset 2",
      backgroundColor: colorLib(window.chartColors.blue).alpha(0.5).rgbString(),
      borderColor: window.chartColors.blue,
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
      ],
    },
  ],
};

// Stacked Bars Chart Data
const stackedBarsChartData = Object.assign({}, verticleBarChartData);

// Line Chart Data
const lineChartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Dataset 1",
      backgroundColor: colorLib(window.chartColors.red).alpha(0.5).rgbString(),
      borderColor: window.chartColors.red,
      borderWidth: 1,
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
      ],
    },
    {
      label: "Dataset 2",
      backgroundColor: colorLib(window.chartColors.blue).alpha(0.5).rgbString(),
      borderColor: window.chartColors.blue,
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
      ],
    },
  ],
};

window.onload = function () {
  // Pie Chart
  setTimeout(function () {
    if (document.getElementById("pie-chart")) {
      const ctx = document.getElementById("pie-chart").getContext("2d");
      window.myPie = new Chart(ctx, {
        type: "pie",
        data: pieChartData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: false,
              text: "Chart.js Pie Chart",
            },
          },
        },
      });
    }
  }, 500);

  // Doughnut Chart
  if (document.getElementById("doughnut-chart")) {
    const ctx = document.getElementById("doughnut-chart").getContext("2d");
    window.myDoughnut = new Chart(ctx, {
      type: "doughnut",
      data: doughnutChartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: false,
            text: "Chart.js Doughnut Chart",
          },
        },
      },
    });
  }

  // Doughnut Chart 2
  setTimeout(function () {
    if (document.getElementById("doughnut-chart-2")) {
      const ctx = document.getElementById("doughnut-chart-2").getContext("2d");
      window.myDoughnut = new Chart(ctx, {
        type: "doughnut",
        data: doughnutChartData2,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
            title: {
              display: false,
              text: "Chart.js Doughnut Chart 2",
            },
          },
        },
      });
    }
  }, 500);

  // Doughnut Chart 3
  setTimeout(function () {
    if (document.getElementById("doughnut-chart-3")) {
      const ctx = document.getElementById("doughnut-chart-3").getContext("2d");
      window.myDoughnut = new Chart(ctx, {
        type: "doughnut",
        data: doughnutChartData3,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
            title: {
              display: false,
              text: "Chart.js Doughnut Chart 3",
            },
          },
        },
      });
    }
  }, 500);

  // Radar Chart
  setTimeout(function () {
    if (document.getElementById("radar-chart")) {
      const ctx = document.getElementById("radar-chart").getContext("2d");
      window.myRadar = new Chart(ctx, {
        type: "radar",
        data: radarChartData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scale: {
            ticks: {
                beginAtZero: true,
                max: 5
            }
          },
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: false,
              text: "Chart.js Radar Chart",
            },
          },
        },
      });
    }
  }, 500);

  // Polar Area Chart
  setTimeout(function () {
    if (document.getElementById("polar-chart")) {
      const ctx = document.getElementById("polar-chart").getContext("2d");
      window.myPolarArea = new Chart(ctx, {
        type: "polarArea",
        data: polarAreaChartData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: false,
              text: "Chart.js Polar Area Chart",
            },
          },
          scale: {
            ticks: {
              beginAtZero: true,
            },
            reverse: false,
          },
          animation: {
            animateRotate: false,
            animateScale: true,
          },
        },
      });
    }
  }, 500);

  // Verticle Bar Chart
  setTimeout(function () {
    if (document.getElementById("chart-vert-bar")) {
      const ctx = document.getElementById("chart-vert-bar").getContext("2d");
      window.myVerticleBar = new Chart(ctx, {
        type: "bar",
        data: verticleBarChartData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: false,
              text: "Chart.js Verticle Bar Chart",
            },
          },
        },
      });
    }
  }, 500);

  // Horizontal Bar Chart
  setTimeout(function () {
    if (document.getElementById("chart-horiz-bar")) {
      const ctx = document.getElementById("chart-horiz-bar").getContext("2d");
      window.myHorizontalBar = new Chart(ctx, {
        type: "bar",
        data: horizontalBarChartData,
        options: {
          indexAxis: 'y',
          // Elements options apply to all of the options unless overridden in a dataset
          // In this case, we are setting the border of each horizontal bar to be 2px wide
          elements: {
            bar: {
              borderWidth: 2,
            }
          },
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "right",
            },
            title: {
              display: false,
              text: "Chart.js Horizontal Bar Chart",
            },
          },
        },
      });
    }
  }, 500);

  // Line Chart
  setTimeout(function () {
    if (document.getElementById("line-chart")) {
      const ctx = document.getElementById("line-chart").getContext("2d");
      window.myLineChart = new Chart(ctx, {
        type: "line",
        data: lineChartData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
            title: {
              display: false,
              text: 'Chart.js Line Chart'
            },

          },
          scales: {
            x: {
              display: false,
              grid: {
                display: false,
              },
            },
            y: {
              display: false,
              grid: {
                display: false,
              },
            },
          },
          layout: {
            padding: {
              left: 10,
              right: 10,
              top: 10,
              bottom: 0,
            },
          },
        },
      });
    }
  }, 500);

  // Stacked Bars Chart
  setTimeout(function () {
    if (document.getElementById("stacked-bars-chart")) {
      const ctx = document.getElementById("stacked-bars-chart").getContext("2d");
      window.myStackedBarChart = new Chart(ctx, {
        type: "bar",
        data: stackedBarsChartData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: "Chart.js Bar Chart - Stacked",
            },
          },
          interaction: {
            intersect: false,
          },
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true
            }
          }
        },
      });
    }
  }, 500);
};

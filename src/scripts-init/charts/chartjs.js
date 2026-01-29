import Chart from 'chart.js/auto';
import colorLib from '@kurkle/color';
import "./chartsjs-utils";

// Store chart instances for cleanup during HMR
const chartInstances = {};

// Destroy existing chart if it exists (for HMR support)
function getOrCreateChart(canvasId, config) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return null;

  // Destroy existing chart instance if it exists
  if (chartInstances[canvasId]) {
    chartInstances[canvasId].destroy();
  }

  const ctx = canvas.getContext('2d');
  chartInstances[canvasId] = new Chart(ctx, config);
  return chartInstances[canvasId];
}

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
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Dataset 1",
      borderColor: window.chartColors.red,
      borderWidth: 2,
      tension: 0.4,
      fill: false,
      pointRadius: 3,
      data: [65, 59, 80, 81, 56, 55, 72, 84, 91, 78, 66, 88],
    },
    {
      label: "Dataset 2",
      borderColor: window.chartColors.blue,
      borderWidth: 2,
      tension: 0.4,
      fill: false,
      pointRadius: 3,
      data: [28, 48, 40, 52, 86, 74, 65, 52, 63, 85, 92, 78],
    },
  ],
};

// Line Chart Data 2 (for Tab 2)
const lineChartData2 = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Bandwidth In",
      borderColor: window.chartColors.green,
      borderWidth: 2,
      tension: 0.4,
      fill: false,
      pointRadius: 3,
      data: [42, 58, 65, 79, 82, 75, 88, 95, 87, 92, 98, 105],
    },
    {
      label: "Bandwidth Out",
      borderColor: window.chartColors.orange,
      borderWidth: 2,
      tension: 0.4,
      fill: false,
      pointRadius: 3,
      data: [35, 42, 55, 62, 68, 72, 78, 82, 76, 85, 89, 94],
    },
  ],
};

// Initialize all charts
function initCharts() {
  // Pie Chart
  setTimeout(function () {
    getOrCreateChart("pie-chart", {
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
  }, 500);

  // Doughnut Chart
  getOrCreateChart("doughnut-chart", {
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

  // Doughnut Chart 2
  setTimeout(function () {
    getOrCreateChart("doughnut-chart-2", {
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
  }, 500);

  // Doughnut Chart 3
  setTimeout(function () {
    getOrCreateChart("doughnut-chart-3", {
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
  }, 500);

  // Radar Chart
  setTimeout(function () {
    getOrCreateChart("radar-chart", {
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
  }, 500);

  // Polar Area Chart
  setTimeout(function () {
    getOrCreateChart("polar-chart", {
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
  }, 500);

  // Verticle Bar Chart
  setTimeout(function () {
    getOrCreateChart("chart-vert-bar", {
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
  }, 500);

  // Horizontal Bar Chart
  setTimeout(function () {
    getOrCreateChart("chart-horiz-bar", {
      type: "bar",
      data: horizontalBarChartData,
      options: {
        indexAxis: 'y',
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
  }, 500);

  // Line Chart
  setTimeout(function () {
    getOrCreateChart("line-chart", {
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
  }, 500);

  // Line Chart 2 (for Bandwidth Tab 2)
  setTimeout(function () {
    getOrCreateChart("line-chart-2", {
      type: "line",
      data: lineChartData2,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
            text: 'Chart.js Line Chart 2'
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
  }, 500);

  // Stacked Bars Chart
  setTimeout(function () {
    getOrCreateChart("stacked-bars-chart", {
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
  }, 500);
}

// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCharts);
} else {
  initCharts();
}

// Support for webpack HMR
if (module.hot) {
  module.hot.accept();
}

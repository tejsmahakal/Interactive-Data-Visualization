
const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['January', 'Februry', 'March', 'April', 'may'],
    datasets: [{
      label: 'Monthly sales',
      data: [65,59,80,81,56],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
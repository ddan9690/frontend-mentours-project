fetch('data.json')
  .then(response => response.json())
  .then(jsonData => {
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: jsonData.map(item => item.day),
        datasets: [
          {
            label: 'Amount',
            backgroundColor: '#ec755d',
            hoverBackgroundColor: 'hsl(186, 34%, 60%)',
            data: jsonData.map(item => item.amount)
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                display: false 
              },
              gridLines: {
                display: false
              },
              maxBarThickness: 50,
      barPercentage: 0.5
            },
            
          ],
          xAxes: [{
            gridLines: {
              display: false
            }
          }]
        },
        legend: {
          display: false 
        }
      }
    });


  });

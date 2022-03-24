'use strict'

const ctx = document.getElementById('month-chart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            label: '% de gastos por categoria',
            data: [35, 20, 10, 5, 5, 5, 5, 5, 5, 5],
            backgroundColor: [
                'rgb(199, 61, 61)',
                'rgb(199, 185, 61)',
                'rgb(61, 199, 96)',
                'rgb(61, 82, 199)',
                'rgb(183, 61, 199)',
                'rgb(104, 81, 52)',
                'rgb(61, 167, 199)',
                'rgb(22, 83, 25)',
                'rgb(202, 123, 58)',
                'rgb(61, 183, 199)'
            ]
        }]
    }
});

const ctx2 = document.getElementById('months-chart').getContext('2d');
const monthsChart = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['Dez 2021', 'Jan 2022', 'Fev 2022', 'Mar 2022'],
        datasets: [
            {   
                label: 'Alimentação',
                data: [10, 35, 20, 15],
                borderColor: 'rgb(199, 61, 61)',
                fill: false,
                tension: 0.4
            },
            {
                label: 'Casa',
                data: [5, 15, 25, 30],
                borderColor: 'rgb(199, 185, 61)',
                fill: false,
                tension: 0.4
            },
            {
                label: 'Compras',
                data: [15, 17, 31, 42],
                borderColor: 'rgb(61, 199, 96)',
                fill: false,
                tension: 0.4
            },
            {
                label: 'Educação',
                data: [25, 45, 10, 3],
                borderColor: 'rgb(61, 82, 199)',
                fill: false,
                tension: 0.4
            },
            {
                label: 'Lazer e viagem',
                data: [3, 7, 40, 20],
                borderColor: 'rgb(183, 61, 199)',
                fill: false,
                tension: 0.4
            },
            {
                label: 'Mercado',
                data: [52, 31, 3, 40],
                borderColor: 'rgb(104, 81, 52)',
                fill: false,
                tension: 0.4
            },
            {
                label: 'Saúde e bem-estar',
                data: [7, 2, 40, 17],
                borderColor: 'rgb(61, 167, 199)',
                fill: false,
                tension: 0.4
            },
            {
                label: 'Seguros',
                data: [29, 46, 12, 23],
                borderColor: 'rgb(22, 83, 25)',
                fill: false,
                tension: 0.4
            },
            {
                label: 'Transporte',
                data: [33, 1, 5, 6],
                borderColor: 'rgb(202, 123, 58)',
                fill: false,
                tension: 0.4
            },
            {
                label: 'Outros',
                data: [1, 22, 12, 13],
                borderColor: 'rgb(61, 183, 199)',
                fill: false,
                tension: 0.4
            }
            
        //     {
        //     label: '% de gastos por categoria',
        //     data: [35, 20, 10, 5, 5, 5, 5, 5, 5, 5],
        //     backgroundColor: [
        //         'rgb(199, 61, 61)',
        //         'rgb(199, 185, 61)',
        //         'rgb(61, 199, 96)',
        //         'rgb(61, 82, 199)',
        //         'rgb(183, 61, 199)',
        //         'rgb(104, 81, 52)',
        //         'rgb(61, 167, 199)',
        //         'rgb(22, 83, 25)',
        //         'rgb(202, 123, 58)',
        //         'rgb(61, 183, 199)'
        //     ]
        // }
    ]
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Value'
        },
        suggestedMin: 0,
        suggestedMax: 100
      }
    }
});
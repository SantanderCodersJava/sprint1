let  graficoAgendamentos = document.getElementById('grafico_agendamento').getContext('2d');

Chart.defaults.scale.gridLines.drawOnChartArea = false;
Chart.defaults.global.defaultFontFamily = "Open Sans";
Chart.defaults.global.defaultFontSize = 15;

let myLineChart = new Chart(graficoAgendamentos, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
        datasets: [{
            label: "Confirmados",
            fill: false,
            lineTension: 0,
            borderColor: 'rgb(238,9,9,0.5)',
            backgroundColor: 'transparent',
            pointBorderColor: 'rgb(30,40,30)',
            pointBackgroundColor: 'transparent',
            data: [10, 30, 50, 40, 20],
        },
        {
            label: "Cancelados",
            fill: false,
            lineTension: 0,
            borderColor: 'rgb(238,9,9,0.5)',
            backgroundColor: 'transparent',
            pointBorderColor: 'rgb(238,9,9)',
            pointBackgroundColor: 'transparent',
            data: [90, 60, 130, 60, 110, 97, 70],
        },
    ]
    },  
    options: {
        legend: {
            position: "right",
        },
    }
});


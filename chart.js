const pieCtx = document.getElementById("myPieChart").getContext("2d");

const myPieChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First Pie Chart',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
                'red',
                'blue',
                'yellow',
                'green',
                'pink',
                'brown',
                'orange'
            ]
        }]
    },
    options: {
        responsive: false,
        maintainAspectRatio: false
    }
});
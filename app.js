const ctx = document.getElementById("myBarChart").getContext("2d");

const myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First Bar Chart',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
                'red',
                'blue',
                'yellow',
                'green',
                'pink',
                'brown',
                'orange'
            ],
            borderColor: [
                'solid rgba(19, 1, 5, 1)',
                'solid red',
                'solid blue',
                'solid green',
                'solid yellow',
                'solid pink',
                'solid brown'
            ],
        }]
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
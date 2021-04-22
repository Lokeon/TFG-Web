$(document).ready(function () {
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "https://tfg-recosys.herokuapp.com/api/admins/avg5",
    success: function (data) {
      var ctx = document.getElementById("bestAvgChart").getContext("2d");
      var myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: [
            data[0]._id,
            data[1]._id,
            data[2]._id,
            data[3]._id,
            data[4]._id,
          ],
          datasets: [
            {
              label: "Average rate",
              data: [
                data[0].avgs,
                data[1].avgs,
                data[2].avgs,
                data[3].avgs,
                data[4].avgs,
              ],
              backgroundColor: [
                "rgba(0,0,0, 0.8)",
                "rgba(20,33,61, 0.8)",
                "rgba(252,163,17, 0.8)",
                "rgba(229,229,229, 0.8)",
                "rgba(221,239,240, 0.8)",
              ],
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                fontSize: "30",
                color: "black",
              },
            },
            x: {
              ticks: {
                fontSize: "30",
                color: "black",
              },
            },
          },
        },
      });
    },
    error: function (request, status, error) {
      Swal.fire({
        icon: "error",
        text: request.responseText,
      });
    },
  });
});

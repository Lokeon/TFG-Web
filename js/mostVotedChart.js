$(document).ready(function () {
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "http://localhost:3000/api/admins/rated5",
    success: function (data) {
      var ctx = document.getElementById("mostVotedChart").getContext("2d");
      var myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: [
              data[0]._id, 
              data[1]._id, 
              data[2]._id],
              //data[3]._id,
              //data[4]._id,
          datasets: [
            {
              label: "Total Votes",
              data: [
                data[0].votes,
                data[1].votes,
                data[2].votes,
                //data[3].votes,
                //data[4].votes,
              ],
              backgroundColor: [
                "rgba(51,53,51, 0.8)",
                "rgba(36,36,35, 0.8)",
                "rgba(245,203,92, 0.8)",
                "rgba(232,237,223, 0.8)",
                "rgba(207,219,213, 0.8)",
              ],
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
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

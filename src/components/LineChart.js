import { Line } from "vue-chartjs";

// const data = {
//   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//   datasets: [
//     {
//       label: "Количество пользователей",
//       data: [12, 19, 3, 5, 2, 3],

//       borderWidth: 1,
//     },
//   ],
// };
export default {
  extends: Line,
  props: ["data"],
  mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    console.log("PROPS ARE", this.data);
    const options = {
      legend: {
        display: false,
      },
    };
    this.renderChart(this.data, options);
  },
};

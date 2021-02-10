import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: ["data"],
  mounted() {
    const options = {
      legend: {
        display: false,
      },
    };
    this.renderChart(this.data, options);
  },
};

var dom = document.getElementById("chart-container");
var myChart = echarts.init(dom, null, {
  renderer: "canvas",
  useDirtyRect: false
});
var app = {};

var option;

const datas = {
  special: null,
  total: 2,
  list: [
    {
      Score: "32",
      D: "10",
      TermNumber: "1",
      TermYearName: "2020-2021学年",
      TermName: "2020-2021学年第一学期",
      B: "75",
      E: "10",
      C: "18",
      A: "20",
      Account: "180333050",
      Name: "周婷婷",
      TermYearNumber: "4"
    },
    {
      Score: "31",
      D: "10",
      TermNumber: "2",
      TermYearName: "2020-2021学年",
      TermName: "2020-2021学年第二学期",
      B: "65",
      E: "10",
      C: "18",
      A: "36",
      Account: "180333050",
      Name: "周婷婷",
      TermYearNumber: "4"
    },
    {
      Score: "32",
      D: "10",
      TermNumber: "1",
      TermYearName: "2021-2022学年",
      TermName: "2021-2022学年第一学期",
      B: "32",
      E: "10",
      C: "18",
      A: "10",
      Account: "180333050",
      Name: "周婷婷",
      TermYearNumber: "4"
    },
    {
      Score: "31",
      D: "10",
      TermNumber: "2",
      TermYearName: "2021-2022学年",
      TermName: "2021-2022学年第二学期",
      B: "31",
      E: "10",
      C: "18",
      A: "55",
      Account: "180333050",
      Name: "周婷婷",
      TermYearNumber: "4"
    }
  ]
};
const legendData = [
  {
    key: "A",
    title: "德育"
  },
  {
    key: "B",
    title: "智育"
  },
  {
    key: "C",
    title: "体育"
  },
  {
    key: "D",
    title: "美育"
  },
  {
    key: "E",
    title: "劳育"
  }
];
const formatter = (params, id, callback) => {
  setTimeout(() => {
    callback(
      id,
      `<p>${params.seriesName}</p>
      <p style="display:flex;align-items:center;">
      <span style="width:10px;height:10px;background:${
        params.color
      };border-radius:50%;margin-right:2px;"></span>
      <span>${params.name}${
        (params.dataIndex + 1) % 2 === 0 ? "第二学期" : "第一学期"
      }：${params.value[1]}</span>
      </p>`
    );
  }, 0);
  return "loading...";
};
console.log("11111");
option = {
  grid: {
    top: "10%",
    left: "6%",
    right: "10",
    bottom: "50%"
  },
  legend: {
    data: legendData.map((item) => item.title)
  },
  xAxis: {
    type: "category",
    data: [...new Set(datas.list.map((item) => item.TermYearName))]
  },
  tooltip: {
    show: true
  },
  yAxis: {
    type: "value"
  },
  series: legendData.map((item) => ({
    name: item.title,
    type: "line",
    tooltip: {
      formatter
    },
    itemStyle: { normal: { label: { show: true } } },
    data: datas.list.map((val) => [val.TermYearName, val[item.key]])
  }))
  // [
  //   {
  //     name: "德育",
  //     type: "line",
  //     itemStyle: { normal: { label: { show: true } } }, //设置每个节点都显示数值
  //     data: []
  //   },
  //   {
  //     name: "智育",
  //     type: "line",
  //     itemStyle: { normal: { label: { show: true } } }, //设置每个节点都显示数值
  //     data: [
  //       [0, 10],
  //       [0, 19],
  //       [1, 12],
  //       [1, 41],
  //       [2, 58],
  //       [2, 18],
  //       [3, 19],
  //       [3, 10],
  //       [4, 19],
  //       [4, 20]
  //     ]
  //   },
  //   {
  //     name: '体育',
  //     type: 'line',
  //     itemStyle: { normal: { label: { show: true } } }, //设置每个节点都显示数值
  //     data: [[0, 4],
  //       [0, 9],
  //       [1, 17],
  //       [1, 31],
  //       [2, 9],
  //       [2, 18],
  //       [3, 5],
  //       [3, 10],
  //       [4, 5],
  //       [4, 10]]
  //   },
  //   {
  //     name: '美育',
  //     type: 'line',
  //     itemStyle: { normal: { label: { show: true } } }, //设置每个节点都显示数值
  //     data: [[0, 4],
  //       [0, 9],
  //       [1, 17],
  //       [1, 31],
  //       [2, 9],
  //       [2, 18],
  //       [3, 5],
  //       [3, 10],
  //       [4, 5],
  //       [4, 10]]
  //   },
  //   {
  //     name: '劳育',
  //     type: 'line',
  //     itemStyle: { normal: { label: { show: true } } }, //设置每个节点都显示数值
  //     data: [[0, 4],
  //       [0, 9],
  //       [1, 17],
  //       [1, 31],
  //       [2, 9],
  //       [2, 18],
  //       [3, 5],
  //       [3, 10],
  //       [4, 5],
  //       [4, 10]]
  //   }
  // ]
};

console.log("options", option);

if (option && typeof option === "object") {
  myChart.setOption(option);
}

window.addEventListener("resize", myChart.resize);

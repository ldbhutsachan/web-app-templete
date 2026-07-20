export const lineChart = {
  labels: Array.from({ length: 20 }, (_, i) => i),
  data: [3, 5, 4, 7, 6, 8, 6, 9, 7, 10, 8, 11, 9, 12, 10, 13, 11, 14, 12, 15],
};

export const sparklines = [
  { label: "Overall Values", value: "34,567", data: [9, 12, 14, 15, 10, 14, 20], color: "#e49400" },
  { label: "Overall Values", value: "34,567", data: [9, 12, 14, 15, 10, 14, 20], color: "#f45722" },
];

export const trackingChart = {
  labels: Array.from({ length: 30 }, (_, i) => i),
  series: [
    { color: "#3979f6", data: [4, 5, 6, 5, 7, 8, 7, 9, 8, 10, 9, 11, 10, 12, 11, 13, 12, 14, 13, 15, 14, 16, 15, 17, 16, 18, 17, 19, 18, 20] },
    { color: "#22b573", data: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17] },
  ],
};

export const markersChart = {
  labels: Array.from({ length: 14 }, (_, i) => i),
  data: [5, 8, 6, 10, 7, 12, 9, 14, 11, 16, 13, 18, 15, 20],
};

export const barChart = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  data: [32, 45, 38, 51, 42, 60, 55, 68, 49, 58, 63, 71],
};

export const pieChart = [
  { label: "Direct", value: 45, color: "#3979f6" },
  { label: "Referral", value: 19, color: "#22b573" },
  { label: "Social", value: 21, color: "#ee3158" },
  { label: "Search", value: 15, color: "#b4bdcd" },
];

export const donutChart = [
  { label: "Chrome", value: 58, color: "#3979f6" },
  { label: "Safari", value: 22, color: "#35b8e0" },
  { label: "Firefox", value: 12, color: "#22b573" },
  { label: "Other", value: 8, color: "#b4bdcd" },
];

export const stackedBarChart = {
  labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
  series: [
    { label: "New", color: "#3979f6", data: [12, 18, 14, 20, 16, 22, 19, 25] },
    { label: "Returning", color: "#22b573", data: [8, 10, 9, 13, 11, 15, 12, 17] },
  ],
};

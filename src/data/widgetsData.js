export const quickStats = [
  {
    icon: "fa-heart",
    variant: "primary",
    label: "Users Growth",
    value: "4,332",
    sub1: { label: "Registrations", value: "+830" },
    sub2: { label: "Bounce Rate", value: "4.5%" },
  },
  {
    icon: "fa-wand-magic-sparkles",
    variant: "info",
    label: "Visits Today",
    value: "12,324",
    sub1: { label: "New Visitors", value: "1,332" },
    sub2: { label: "Bounce Rate", value: "217" },
  },
  {
    icon: "fa-book",
    variant: "gray",
    label: "Orders",
    value: "82,765",
    sub1: { label: "Avg. Time", value: "2:56" },
    sub2: { label: "Last Week", value: "374" },
  },
  {
    icon: "fa-gem",
    variant: "success",
    label: "Total Profit",
    value: "$7,448",
    sub1: { label: "Last Month", value: "$83,541" },
    sub2: { label: "Last Week", value: "$17,926" },
  },
];

export const weeklyTraffic = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  data: [42, 58, 51, 67, 74, 39, 46],
};

export const promoPosts = [
  {
    variant: "primary",
    title: "Light Blue - Next Generation Admin Dashboard Template",
    author: "Jeremy",
    handle: "@light-blue",
    avatar: "4",
    time: "25 mins",
    location: "near Amsterdam",
    text: "Lots of cool stuff is happening around you. Just calm down for a sec and listen. Colors, sounds, thoughts, ideas.",
    likes: null,
    comments: null,
  },
  {
    variant: "neutral",
    title: "Maryna Nilson",
    author: "Maryna",
    handle: "Nilson",
    avatar: "3",
    time: "25 mins",
    location: "near Amsterdam",
    text: "Lots of cool stuff is happening around you. Just calm down for a sec and listen. Colors, sounds, thoughts, ideas.",
    likes: 427,
    comments: 98,
  },
  {
    variant: "danger",
    title: "Light Blue - Next Generation Admin Dashboard Template",
    author: "Jess",
    handle: "@jessica",
    avatar: "2",
    time: "25 mins",
    location: "near Amsterdam",
    text: "Lots of cool stuff is happening around you. Just calm down for a sec and listen. Colors, sounds, thoughts, ideas.",
    likes: null,
    comments: null,
  },
];

export const weatherForecast = {
  city: "Sunnyvale, CA",
  region: "FLORIDA, USA",
  time: "9:41 am",
  today: { icon: "fa-sun", label: "sunny", day: "SUNDAY", temp: 29 },
  days: [
    { day: "TOMORROW", icon: "fa-cloud-sun", temp: 32 },
    { day: "TUE", icon: "fa-cloud-rain", temp: 25 },
    { day: "WED", icon: "fa-sun", temp: 28 },
    { day: "THU", icon: "fa-cloud-sun", temp: 17 },
  ],
};

export const weatherMini = [
  { day: "FRIDAY", temp: 33, icon: "fa-sun", variant: "danger", condition: "WINDY", wind: 4, rain: 52 },
  { day: "SUNDAY", temp: 20, icon: "fa-cloud-sun", variant: "success", condition: "WINDY" },
];

export const nasdaqStock = {
  label: "Nasdaq",
  price: 355,
  lastSale: 354.94,
  data: [4, 6, 5, 9, 7, 8, 6, 10, 9, 12, 10, 13, 12, 15],
};

export const testimonials = [
  {
    variant: "success",
    icon: "fa-comments",
    text: "Lots of possibilities to customize your new admin template",
    likes: 83,
    comments: 96,
    shares: 7,
    date: "10 June",
  },
  {
    variant: "primary",
    icon: "fa-arrow-up",
    text: "Lots of new amazing possibilities",
    likes: 214,
    comments: 96,
    date: "10 June",
  },
];

export const serverHealth = [
  { label: "CPU", meta: "60% / 37°C / 3.3 Ghz", value: 60 },
  { label: "Mem", meta: "29% / 4GB (16 GB)", value: 29 },
  { label: "LAN", meta: "6 Mb/s down · 3 Mb/s up", value: 48 },
  { label: "Access", meta: "17 Mb/s up (+18%)", value: 64 },
];

export const recentChats = [
  { name: "Chris Gray", text: "Hey! What's up? So much time since we saw each other there", side: "left", avatar: "1" },
  { name: "John Doe", text: "True! Totally makes sense. But how do we find that?", side: "right", avatar: "7" },
  { name: "Chris Gray", text: "OK, but so now what? What should we do now? Not sure actually.", side: "left", avatar: "1" },
  { name: "John Doe", text: "Hey guys, didn't you notice this conversation is sort of gibberish?", side: "right", avatar: "7" },
];

export const realtimeTraffic = {
  labels: Array.from({ length: 24 }, (_, i) => i),
  data: [12, 19, 14, 22, 18, 26, 20, 29, 24, 31, 26, 34, 29, 37, 31, 40, 34, 42, 37, 45, 39, 47, 41, 50],
};

export const featureCard = {
  title: "Basic & Advanced Features",
  subtitle: "All you need in one app",
  quote: "That's awesome!",
  note: "Attention to what's really important",
  cta: "Order Now!",
};

export const changesChart = {
  labels: ["W1", "W2", "W3", "W4", "W5", "W6"],
  data: [5, 8, 4, 11, 7, 13],
};

export const flipCard = {
  front: { icon: "fa-child", variant: "success", title: "Sing Web App", note: "Cutting-edge tech and design delivered", cta: "Hover over me!" },
  back: { icon: "fa-globe", variant: "primary", title: "Join The Web Now!", note: "Cutting-edge tech and design delivered", cta: "Join now!" },
};

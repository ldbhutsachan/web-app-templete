export const mapPins = [
  { name: "New York", top: "34%", left: "62%" },
  { name: "San Francisco", top: "40%", left: "12%" },
  { name: "Lake Okeechobee", top: "72%", left: "60%" },
  { name: "Chowan County", top: "48%", left: "68%" },
  { name: "Lake Livingston", top: "62%", left: "42%" },
  { name: "Tunica County", top: "56%", left: "50%" },
  { name: "Lea County", top: "58%", left: "24%" },
  { name: "Union County", top: "38%", left: "56%" },
  { name: "Lakewood Mutual", top: "44%", left: "10%" },
  { name: "Seattle", top: "22%", left: "16%" },
  { name: "Austin", top: "66%", left: "46%" },
  { name: "Chicago", top: "32%", left: "52%" },
  { name: "Miami", top: "80%", left: "64%" },
  { name: "Denver", top: "46%", left: "32%" },
];

export const mapStats = {
  countries: 146,
  cities: 2759,
  geoLocations: 1656843,
  elements: 391,
  sets: 84,
  rows: [
    { name: "Foreign Visits", desc: "Some Cool Text", value: 60, variant: "primary", badge: 75 },
    { name: "Local Visits", desc: "P. to C. Conversion", value: 39, variant: "danger", badge: 84 },
    { name: "Sound Frequencies", desc: "Average Bitrate", value: 80, variant: "success", badge: 92 },
    { name: "Referral Visits", desc: "Click-through Rate", value: 47, variant: "primary", badge: 63 },
    { name: "Bounce Rate", desc: "Session Duration", value: 28, variant: "danger", badge: 41 },
  ],
};

export const metricWidgets = [
  {
    title: "Userbase Growth",
    stats: [
      { label: "Overall Growth", value: "76.38%" },
      { label: "Monthly", value: "10.38%" },
      { label: "24h", value: "3.38%" },
    ],
    progress: 60,
    variant: "success",
    icon: "fa-angle-up",
    note: "17% higher",
    tail: "than last month",
  },
  {
    title: "Traffic Values",
    stats: [
      { label: "Overall Values", value: "17 567 318" },
      { label: "Monthly", value: "55 120" },
      { label: "24h", value: "9 695" },
    ],
    progress: 60,
    variant: "danger",
    icon: "fa-angle-down",
    note: "8% lower",
    tail: "than last month",
  },
  {
    title: "Random Values",
    stats: [
      { label: "Overcome T.", value: "104.85%" },
      { label: "Takeoff Angle", value: "14.29°" },
      { label: "World Pop.", value: "7,211M" },
    ],
    progress: 60,
    variant: "primary",
    icon: "fa-plus",
    note: "8 734 higher",
    tail: "than last month",
  },
];

export const messages = [
  { name: "Chris Gray", text: "Hey! What's up? So many times since we", status: "success", avatar: "1" },
  { name: "Jamey Brownlow", text: "Good news coming tonight. Seems they agreed to proceed", status: "success", avatar: "2" },
  { name: "Livia Walsh", text: "Check my latest email plz!", status: "primary", avatar: "3" },
  { name: "Jaron Fitzroy", text: "What about summer break?", status: "danger", avatar: "4" },
  { name: "Noah Ferreira", text: "Can you send over the updated deck?", status: "primary", avatar: "5" },
  { name: "Priya Nathan", text: "Approved the budget, moving to next phase", status: "success", avatar: "6" },
];

export const marketTable = [
  { name: "HP Core i7", price: "$346.1" },
  { name: "Air Pro", price: "$533.1" },
  { name: "Galaxy Tab S", price: "$412.6" },
  { name: "ThinkPad X1", price: "$689.9" },
];

export const marketChartData = [4, 6, 5, 9, 7, 12, 9, 14, 11, 16, 13, 18, 15, 20, 17, 22, 19, 25, 21, 27];

export const calendarEvents = [
  { title: "Weed out the flower bed", time: "6:45", variant: "primary", day: 2 },
  { title: "Stop world water pollution", time: "9:41", variant: "success", day: 5 },
  { title: "Quarterly review meeting", time: "11:00", variant: "danger", day: 9 },
  { title: "Team lunch", time: "12:30", variant: "primary", day: 14 },
  { title: "Submit expense report", time: "17:00", variant: "success", day: 21 },
];

export const navSections = [
  {
    icon: "fa-house",
    label: "Home",
    children: [
      { label: "Visits", page: "visits" },
      { label: "Analytics", page: "analytics" },
      { label: "Widgets", page: "widgets" },
    ],
  },
  { icon: "fa-cart-shopping", label: "E-commerce" },
  { icon: "fa-font", label: "Typography", page: "typography" },
  { icon: "fa-table", label: "Tables", page: "tables" },
  {
    icon: "fa-wand-magic-sparkles",
    label: "Elements",
    children: [
      { label: "Charts", page: "charts" },
      { label: "Icons", page: "icons" },
      { label: "Maps", page: "maps" },
    ],
  },
  { icon: "fa-bell", label: "Notifications", page: "notifications" },
  { icon: "fa-user", label: "Profile" },
  { icon: "fa-envelope", label: "Mailbox" },
  { icon: "fa-gear", label: "Settings" },
];

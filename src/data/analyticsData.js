export const visitsToday = {
  count: "4,332",
  logins: 830,
  signOutPct: 0.5,
  ratePct: 4.5,
};

export const revenueBreakdown = [
  { label: "SMX", value: 45, variant: "primary" },
  { label: "Direct", value: 35, variant: "danger" },
  { label: "Networks", value: 20, variant: "gray" },
];

export const appPerformance = {
  sdk: { thisPeriod: 60, lastPeriod: 30 },
  integration: { thisPeriod: 40, lastPeriod: 55 },
};

export const serverOverview = [
  { pct: 60, temp: 37, frequency: 3.3, variant: "danger", trend: [3, 5, 4, 7, 6, 8, 6, 9, 7, 10, 8, 11] },
  { pct: 54, temp: 31, frequency: 3.3, variant: "primary", trend: [6, 4, 7, 5, 8, 6, 9, 7, 10, 8, 11, 9] },
  { pct: 42, temp: 29, frequency: 2.9, variant: "success", trend: [2, 4, 3, 6, 5, 7, 6, 8, 7, 9, 8, 10] },
];

export const analyticsMainChart = {
  labels: Array.from({ length: 20 }, (_, i) => i),
  series: [
    [3, 4, 3.5, 5, 4.5, 6, 5.5, 7, 6, 7.5, 7, 8, 7.5, 8.5, 8, 9, 8.5, 9.5, 9, 10],
    [2, 2.5, 3, 2.8, 3.5, 3, 4, 3.5, 4.5, 4, 5, 4.5, 5.5, 5, 6, 5.5, 6.5, 6, 7, 6.5],
    [1, 1.8, 1.4, 2.2, 1.8, 2.6, 2.2, 3, 2.6, 3.4, 3, 3.8, 3.4, 4.2, 3.8, 4.6, 4.2, 5, 4.6, 5.4],
  ],
};

export const bigStats = [
  {
    product: "Light Blue",
    total: "4,232",
    variant: "primary",
    registrations: "+830",
    bounce: "4.5%",
  },
  {
    product: "Sing App",
    total: "754",
    variant: "danger",
    registrations: "+30",
    bounce: "2.5%",
  },
  {
    product: "RNS",
    total: "1,025",
    variant: "success",
    registrations: "+230",
    bounce: "21.5%",
  },
];

export const supportRequests = [
  { name: "Mark Otto", email: "ottoto@example.com", product: "On the Road", price: "$25,224.2", date: "11 May 2026", city: "Otsego", status: "Sent" },
  { name: "Jacob Thornton", email: "thornton@example.com", product: "HP Core i7", price: "$1,254.2", date: "4 Jun 2026", city: "Fivepointville", status: "Sent" },
  { name: "Larry the Bird", email: "bird@example.com", product: "Air Pro", price: "$1,570.0", date: "27 Aug 2026", city: "Leadville North", status: "Pending" },
  { name: "Joseph May", email: "josephmay@example.com", product: "Version Control", price: "$5,224.5", date: "19 Feb 2027", city: "Seaforth", status: "Declined" },
  { name: "Peter Horadnia", email: "horadnia@example.com", product: "Let's Dance", price: "$43,594.7", date: "1 Mar 2027", city: "Hanoverton", status: "Sent" },
];

export const analyticsTasks = [
  { type: "Meeting", title: "Meeting with Andrew Piker", time: "9:00" },
  { type: "Call", title: "Call with HT Company", time: "12:00" },
  { type: "Meeting", title: "Meeting with Zoe Alison", time: "14:00" },
  { type: "Interview", title: "Interview with HR", time: "15:00" },
];

export const analyticsNotifications = [
  { icon: "fa-thumbs-up", variant: "primary", html: 'Ken <strong>accepts</strong> your invitation' },
  { icon: "fa-file", variant: "success", html: "Report from LT Company" },
  { icon: "fa-envelope", variant: "danger", html: '4 <strong>Private</strong> Mails' },
  { icon: "fa-comment", variant: "success", html: '3 <strong>Comments</strong> to your Post' },
  { icon: "fa-gear", variant: "gray", html: 'New <strong>Version</strong> of RNS app' },
  { icon: "fa-bell", variant: "primary", html: '15 <strong>Notifications</strong> from Social Apps' },
];

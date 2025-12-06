export const CONTACT_INFO = {
  email: "forgeora@gmail.com",
  phone: "+91 8953524501",
  address: {
    street: "143 Civil Lines Road",
    city: "Prayagraj",
    state: "Uttar Pradesh",
    zip: "211016",
    country: "United States"
  },
  social: {
    linkedin: "https://linkedin.com/company/forgeora",
    twitter: "https://twitter.com/forgeora",
    github: "https://github.com/forgeora"
  },
  businessHours: {
    monday: "9:00 AM - 6:00 PM",
    tuesday: "9:00 AM - 6:00 PM",
    wednesday: "9:00 AM - 6:00 PM",
    thursday: "9:00 AM - 6:00 PM",
    friday: "9:00 AM - 6:00 PM",
    saturday: "10:00 AM - 4:00 PM",
    sunday: "Closed"
  }
};

export const CONTACT_FEATURES = [
  {
    icon: "📧",
    title: "Email",
    value: CONTACT_INFO.email,
    bgColor: "bg-blue-100 dark:bg-blue-900",
    iconColor: "text-blue-600 dark:text-blue-400"
  },
  {
    icon: "📞",
    title: "Phone",
    value: CONTACT_INFO.phone,
    bgColor: "bg-green-100 dark:bg-green-900",
    iconColor: "text-green-600 dark:text-green-400"
  },
  {
    icon: "📍",
    title: "Address",
    value: `${CONTACT_INFO.address.street}\n${CONTACT_INFO.address.city}, ${CONTACT_INFO.address.state} ${CONTACT_INFO.address.zip}\n${CONTACT_INFO.address.country}`,
    bgColor: "bg-purple-100 dark:bg-purple-900",
    iconColor: "text-purple-600 dark:text-purple-400"
  }
];

export const WHY_CHOOSE_US = [
  "Expert team with 10+ years experience",
  "Cutting-edge technology solutions",
  "Agile development process",
  "24/7 support and maintenance"
];

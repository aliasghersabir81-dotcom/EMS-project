const employee = [
  {
    id: 1,
    firstName: "Ali",
    email: "emp@gmail.com",
    password: "123",

    taskNumber: {
      active: 3,
      completed: 1,
      failed: 3,
      total: 5,
      newTask: 2,
    },

    tasks: [
      {
        title: "Complete Homepage",
        description: "Finish the homepage UI and make it responsive.",
        date: "2026-09-29",
        category: "Development",
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Fix Login Bug",
        description: "Fix the validation issue in the login form.",
        date: "2026-09-28",
        category: "Bug Fix",
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Update Documentation",
        description:
          "Update the project documentation with the latest changes.",
        date: "2026-09-27",
        category: "Documentation",
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Team Meeting",
        description: "Attend the weekly development team meeting.",
        date: "2026-09-30",
        category: "Meeting",
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Test Dashboard",
        description: "Test all dashboard features and report any issues.",
        date: "2026-10-01",
        category: "Testing",
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },

  {
    id: 2,
    firstName: "Hamza",
    email: "employee2@gmail.com",
    password: "123",

    taskNumber: {
      active: 4,
      completed: 3,
      failed: 1,
      total: 5,
      newTask: 4,
    },

    tasks: [
      {
        title: "Design Dashboard",
        description: "Create the dashboard layout according to the design.",
        date: "2026-09-29",
        category: "Design",
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Create User Cards",
        description: "Build reusable user card components.",
        date: "2026-09-27",
        category: "Development",
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Fix Navbar",
        description: "Fix the responsive navbar on mobile screens.",
        date: "2026-09-26",
        category: "Bug Fix",
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Review UI",
        description: "Review the UI and suggest improvements.",
        date: "2026-09-30",
        category: "Review",
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Update Colors",
        description: "Update the application color scheme.",
        date: "2026-10-02",
        category: "Design",
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },

  {
    id: 3,
    firstName: "Usman",
    email: "employee3@gmail.com",
    password: "123",

    taskNumber: {
      active: 5,
      completed: 2,
      failed: 2,
      total: 5,
      newTask: 0,
    },

    tasks: [
      {
        title: "API Integration",
        description: "Connect the frontend with the employee API.",
        date: "2026-09-29",
        category: "Development",
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Database Testing",
        description: "Test employee data with the database.",
        date: "2026-09-28",
        category: "Testing",
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Fix API Error",
        description: "Resolve the API response error.",
        date: "2026-09-25",
        category: "Bug Fix",
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Create Reports",
        description: "Create employee performance reports.",
        date: "2026-10-01",
        category: "Reports",
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Code Review",
        description: "Review the latest code pushed by the team.",
        date: "2026-10-03",
        category: "Review",
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },

  {
    id: 4,
    firstName: "Zain",
    email: "employee4@gmail.com",
    password: "123",

    taskNumber: {
      active: 2,
      completed: 5,
      failed: 0,
      total: 5,
      newTask: 4,
    },

    tasks: [
      {
        title: "Create Login Page",
        description: "Build the login page using React and Tailwind CSS.",
        date: "2026-09-29",
        category: "Development",
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Test Forms",
        description: "Test all input fields and form validation.",
        date: "2026-09-28",
        category: "Testing",
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Fix Form Validation",
        description: "Fix incorrect email and password validation.",
        date: "2026-09-27",
        category: "Bug Fix",
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Create Profile Page",
        description: "Create a profile page for employees.",
        date: "2026-10-01",
        category: "Development",
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Update Profile UI",
        description: "Improve the profile page design.",
        date: "2026-10-02",
        category: "Design",
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },

  {
    id: 5,
    firstName: "Bilal",
    email: "employee5@gmail.com",
    password: "123",

    taskNumber: {
      active: 1,
      completed: 4,
      failed: 4,
      total: 5,
      newTask: 3,
    },

    tasks: [
      {
        title: "Prepare Presentation",
        description: "Prepare slides for the upcoming project presentation.",
        date: "2026-09-29",
        category: "Presentation",
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Complete Testing",
        description: "Complete testing of the new application features.",
        date: "2026-09-27",
        category: "Testing",
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Fix Dashboard",
        description: "Fix the dashboard layout and responsiveness.",
        date: "2026-09-26",
        category: "Bug Fix",
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Write Report",
        description: "Write the weekly project progress report.",
        date: "2026-09-30",
        category: "Reports",
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Team Meeting",
        description: "Attend the project planning meeting.",
        date: "2026-10-01",
        category: "Meeting",
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@gmail.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employee));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employee = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employee, admin };
};

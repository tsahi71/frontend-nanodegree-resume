var bio = {
  name: "Alex Morgan",
  role: "Front-End Developer",
  contacts: {
    mobile: "555-867-5309",
    email: "alex@example.com",
    github: "alexmorgan",
    twitter: "@alexmorgan_dev",
    location: "San Francisco, CA"
  },
  welcomeMessage: "Crafting interfaces that feel inevitable.",
  skills: ["JavaScript", "React", "TypeScript", "CSS Architecture", "Node.js", "UX Design"],
  biopic: "images/fry.jpg",
  display: function() {
    // Float-right biopic anchors layout before the name
    $("#header").prepend(HTMLbioPic.replace("%data%", bio.biopic));
    // Name and role prepended in reverse order (last prepend = first child)
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

    // Welcome message and skills go at the end of the header
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

    // Contacts appear in both the top strip and the footer
    var keys = ["mobile", "email", "github", "twitter", "location"];
    keys.forEach(function(key) {
      var item = HTMLcontactGeneric
        .replace("%contact%", key)
        .replace("%data%", bio.contacts[key]);
      $("#topContacts").append(item);
      $("#footerContacts").append(item);
    });

    // Skills pills
    if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      bio.skills.forEach(function(skill) {
        $("#skills").append(HTMLskills.replace("%data%", skill));
      });
    }
  }
};

var work = {
  jobs: [
    {
      employer: "TechCorp",
      title: "Senior Front-End Developer",
      location: "San Francisco, CA",
      dates: "2021 – Present",
      description: "Led redesign of the core product dashboard, cutting load time by 40% and lifting user satisfaction scores by 25%. Architected a shared component library now used across 8 engineering teams."
    },
    {
      employer: "StartupXYZ",
      title: "Front-End Developer",
      location: "Remote",
      dates: "2019 – 2021",
      description: "Built and shipped a responsive marketing site and web app from zero. Implemented real-time data visualisations with D3.js. Mentored three junior developers."
    },
    {
      employer: "Creative Agency Co.",
      title: "Junior Developer",
      location: "New York, NY",
      dates: "2017 – 2019",
      description: "Developed interactive features for Fortune 500 client websites. Worked closely with designers to translate mockups into pixel-perfect, accessible implementations."
    }
  ],
  display: function() {
    work.jobs.forEach(function(job) {
      $("#workExperience").append(HTMLworkStart);
      var $entry = $(".work-entry:last");
      $entry.append(
        HTMLworkEmployer.replace("%data%", job.employer) +
        HTMLworkTitle.replace("%data%", job.title)
      );
      $entry.append(HTMLworkDates.replace("%data%", job.dates));
      $entry.append(HTMLworkLocation.replace("%data%", job.location));
      $entry.append(HTMLworkDescription.replace("%data%", job.description));
    });
  }
};

var projects = {
  projects: [
    {
      title: "Open Source Design System",
      dates: "2022 – Present",
      description: "60+ accessible React / TypeScript components. Over 2,000 GitHub stars and adopted in production by 15+ companies.",
      images: []
    },
    {
      title: "Real-Time Collaboration Canvas",
      dates: "2021",
      description: "A Figma-inspired multi-user canvas built on WebSockets, sustaining 500+ concurrent users at sub-100 ms latency.",
      images: []
    },
    {
      title: "Dev Portfolio Generator",
      dates: "2020",
      description: "CLI tool that produces customisable developer portfolios from a single YAML config. 800+ npm downloads per week.",
      images: []
    }
  ],
  display: function() {
    projects.projects.forEach(function(project) {
      $("#projects").append(HTMLprojectStart);
      var $entry = $(".project-entry:last");
      $entry.append(HTMLprojectTitle.replace("%data%", project.title));
      $entry.append(HTMLprojectDates.replace("%data%", project.dates));
      $entry.append(HTMLprojectDescription.replace("%data%", project.description));
      project.images.forEach(function(img) {
        $entry.append(HTMLprojectImage.replace("%data%", img));
      });
    });
  }
};

var education = {
  schools: [
    {
      name: "University of California, Berkeley",
      location: "Berkeley, CA",
      degree: "B.S.",
      majors: ["Computer Science"],
      dates: "2013 – 2017",
      url: "https://berkeley.edu"
    }
  ],
  onlineCourses: [
    {
      title: "Front-End Web Developer Nanodegree",
      school: "Udacity",
      date: "2017",
      url: "https://udacity.com"
    },
    {
      title: "Advanced React Patterns",
      school: "Frontend Masters",
      date: "2020",
      url: "https://frontendmasters.com"
    }
  ],
  display: function() {
    education.schools.forEach(function(school) {
      $("#education").append(HTMLschoolStart);
      var $entry = $(".education-entry:last");
      $entry.append(
        HTMLschoolName.replace("%data%", school.name) +
        HTMLschoolDegree.replace("%data%", school.degree)
      );
      $entry.append(HTMLschoolDates.replace("%data%", school.dates));
      $entry.append(HTMLschoolLocation.replace("%data%", school.location));
      school.majors.forEach(function(major) {
        $entry.append(HTMLschoolMajor.replace("%data%", major));
      });
    });

    $("#education").append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(course) {
      $("#education").append(HTMLschoolStart);
      var $entry = $(".education-entry:last");
      $entry.append(
        HTMLonlineTitle.replace("%data%", course.title) +
        HTMLonlineSchool.replace("%data%", course.school)
      );
      $entry.append(HTMLonlineDates.replace("%data%", course.date));
      $entry.append(HTMLonlineURL.replace("%data%", course.url));
    });
  }
};

bio.display();
work.display();
projects.display();
education.display();

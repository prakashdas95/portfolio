const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    // rightside content
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    // leftside navigation
    tabs.forEach((tab) => {
      // console.log(tab);
      tab.classList.remove("selected");
    });
    // console.log(target);
    target.classList.add("active");
    tab.classList.add("selected");
  });
});

// PROJECTS
const projectList = [
  {
    id: 1,
    title: "Web Design",
    category: "webDesign",
    img: "../img/....",
    desc: "",
    techStack: "",
  },
  {
    id: 2,
    title: "Web Design2",
    category: "webDesign",
    img: "../img/....",
    desc: "",
    techStack: "",
  },
  {
    id: 3,
    title: "Javascript",
    category: "javascript",
    img: "../img/....",
    desc: "",
    techStack: "",
  },
  {
    id: 4,
    title: "Javascript2",
    category: "javascript",
    img: "../img/....",
    desc: "",
    techStack: "",
  },
  {
    id: 5,
    title: "Angular",
    category: "angular",
    img: "../img/....",
    desc: "",
    techStack: "",
  },
  {
    id: 6,
    title: "Angular2",
    category: "angular",
    img: "../img/....",
    desc: "",
    techStack: "",
  },
  {
    id: 7,
    title: "node",
    category: "node",
    img: "../img/....",
    desc: "",
    techStack: "",
  },
  {
    id: 8,
    title: "node2",
    category: "node",
    img: "../img/....",
    desc: "",
    techStack: "",
  },
];

const portfolio = document.querySelector(".portfolio__projects");

const filterBtns = document.querySelectorAll(".portfolio__filter_item");

// load items
window.addEventListener("DOMContentLoaded", () => {
  displayProjects(projectList);
});

//filter items based on category
filterBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const filterCategory = e.currentTarget.dataset.id;
    const active__filter = e.currentTarget;
    // console.log(active__filter);

    // we need to iterate over wihtin the filterBtns to remove the selected filter
    filterBtns.forEach((tab) => {
      tab.classList.remove("active__filter");
    });

    const projectCategory = projectList.filter((item) => {
      if (item.category === filterCategory) {
        active__filter.classList.add("active__filter");

        return item;
      } else if (filterCategory === "all") {
        active__filter.classList.add("active__filter");

        return item;
      }
    });
    displayProjects(projectCategory);
    // console.log(projectCategory);
  });
});

// display project items
const displayProjects = (project) => {
  let displayProject = project.map((item) => {
    return `<div class="portfolio__projects__item">
                     <div class="portfolio__projects__design">${item.title}</div>
                </div>`;
  });
  displayProject = displayProject.join("");
  portfolio.innerHTML = displayProject;
};

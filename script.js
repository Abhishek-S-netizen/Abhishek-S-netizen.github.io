function changeNavBar(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navbar.classList.remove("change_navbar");
        }
        else {
            navbar.classList.add("change_navbar");
        }
    })
}

const navbar = document.querySelector("nav");
const home = document.querySelector(".parallax");
observer_1 = new IntersectionObserver(changeNavBar, { threshold: 0.2 });
observer_1.observe(home);

/***************************************************************************************************************************** */

function createObserver(elements, className, sectionName) {

    let userLastScrolled = 0;

    function show(entries) {

        let sectionPosition = sectionName.offsetTop;
        let currentUserPosition = window.pageYOffset;
        let scrolledUp = currentUserPosition < userLastScrolled;

        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add(className);
                }, 250 * index);
            }

            else {
                if (scrolledUp && currentUserPosition < sectionPosition) {
                    elements.forEach((card) => {
                        card.classList.remove(className);
                    });
                }
            }
        });

        userLastScrolled = currentUserPosition;
    }

    return new IntersectionObserver(show, { threshold: 0.3 });
}

const skillCardsSection = document.getElementById("skills");
const skillCards = document.querySelectorAll(".skill_card");
observer_2 = createObserver(skillCards, "show_skill_cards", skillCardsSection);
//observer_2.observe(skillCardsSection);
skillCards.forEach((card) => { observer_2.observe(card) })

const projectCardsSection = document.getElementById("projects");
const projectCards = document.querySelectorAll(".project_card");
observer_3 = createObserver(projectCards, "show_project_card", projectCardsSection);
//observer_3.observe(projectCardsSection)
projectCards.forEach((card) => { observer_3.observe(card) });


function showAllprojects() {
    let allProjects = document.getElementById("all_projects")
    allProjects.style.display = "flex";
    allProjects.style.flexDirection = "column";
    let body = document.querySelector(".body-gradient");

    setTimeout(() => {
        allProjects.classList.add("showProjects");
    }, 10)

    body.classList.add("dull");
    document.body.style.overflow = "hidden";
}

function closeAllprojects() {
    let allProjects = document.getElementById("all_projects")
    let body = document.querySelector(".body-gradient");
    allProjects.classList.remove("showProjects");

    setTimeout(() => {
        allProjects.style.display = "none";
    }, 500)

    body.classList.remove("dull");
    document.body.style.overflow = "auto";
}
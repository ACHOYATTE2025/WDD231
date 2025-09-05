
/* hambuger and navbar menu */
const navButton = document.querySelector('#nav-button');
const navBar = document.querySelector('#nav-bar');

navButton.addEventListener('click', () => {
  navButton.classList.toggle('show'); 
  navBar.classList.toggle('show');  
});


/* ***************************** footer ****************************************************/


document.addEventListener("DOMContentLoaded", function () {
  
  const today = new Date();
  let year = today.getFullYear();
  const exoTime= document.querySelector("#currentyear");
  exoTime.innerHTML=`<p>&copy;${year} | YATTE DEIVY CONSTANT ACHO | Utah,USA </p>`;

  const yearN = today.getFullYear();
  const month = `0`+(today.getMonth() + 1);
  const day = today.getDate().toString();

  const hours =+ today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();

  // Format personnalisé (ex: 01/07/2025 22:45:00)
  const realDate = `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
  const modified= document.querySelector("#lastModified");
  modified.innerHTML=`<p>Last modification : ${realDate}</p>`;

});

/************************************dynamic array ********************************************/
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]



// Selector
const certifoxo = document.querySelector("#certifox");
const mesxo = document.querySelector(".mesx");

// card fucntion creation
function createCard(coursera) {
  certifoxo.innerHTML = ""; // vider avant ajout
  let totalCredits = 0;

  coursera.forEach(element => {
    // crate creation
    let card = document.createElement("div");
    card.classList.add("courses");

    // span creation to show info
    let courseInfo = document.createElement("span");
    courseInfo.textContent = `${element.completed ? "✅" : "❌"} ${element.title}`;

    // Add card
    card.appendChild(courseInfo);

    // Add card to container
    certifoxo.appendChild(card);

    // credits sum
    totalCredits += element.credits;
  });

  // show credits total
  mesxo.innerHTML = `<p>The total credits for the courses listed above is <strong>${totalCredits}</strong></p>`;
}



//load all courses when page loading
document.addEventListener("DOMContentLoaded", () => {
  createCard(wddx);});




// ALL courses
const coursesTitle = document.querySelector("#wdds");
const all = document.querySelector("#All");
const allx = courses.filter((course)=>{ return course} );

all.addEventListener('click',()=>{
  createCard(allx);
  coursesTitle.textContent="Web and Computer Programming";
})


//CSE

const cse = document.querySelector("#CSE");
const csex = courses.filter((course)=>{
  return course.subject=="CSE";
})

cse.addEventListener('click',()=>{
  createCard(csex);
  coursesTitle.textContent="Computer Science and Engineering";
})


//WDD
const wdd = document.querySelector("#WDD");
const wddx = courses.filter((course)=>{
  return course.subject=="WDD";
})

wdd.addEventListener('click',()=>{
  createCard(wddx);
  coursesTitle.textContent="Web Design & Deveopment";
})
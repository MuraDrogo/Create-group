const coursesData = [
  {
    title: 'JavaScript Basics',
    price: 1200,
    students: 20,
    isActive: true,
  },
  {
    title: 'HTML & CSS',
    price: 900,
    students: 25,
    isActive: true,
  },
  {
    title: 'React Start',
    price: 1800,
    students: 0,
    isActive: false,
  },
];

const getActiveCourses = courses => {
  return courses.filter(course => course.isActive);
};

console.log(getActiveCourses(coursesData));
// [
//   {
//     title: 'JavaScript Basics',
//     price: 1200,
//     students: 20,
//     isActive: true
//   },
//   {
//     title: 'HTML & CSS',
//     price: 900,
//     students: 25,
//     isActive: true
//   }
// ]


function createCoursesOverview(courses) {
    const activeCourses = getActiveCourses(courses);

    const titles = activeCourses.toSorted((a,b) => a.price -b.price).map(courses =>`${courses.title} — ${courses.price} грн`);
    
    const totalStudents = activeCourses.reduce((sum, course) => sum += course.students, 0);
    const allHaveStudents = activeCourses.every(course => course.students > 0);
    const hasFreeCourse = activeCourses.some(course => course.price === 0);
    return {
        titles,
        totalStudents,
        allHaveStudents,
        hasFreeCourse,
    };
}

console.log(createCoursesOverview(coursesData));
// {
//   titles: ['HTML & CSS — 900 грн', 'JavaScript Basics — 1200 грн'],
//   totalStudents: 45,
//   allHaveStudents: true,
//   hasFreeCourse: false
// }

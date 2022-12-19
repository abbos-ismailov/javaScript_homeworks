let student1Courses = ['Math', 'English', 'Programming', 'Spanish'];
let student2Courses = ['Geography', 'Spanish', 'Programming', 'English'];

let a = student1Courses.some(
      function (elem) {
            for (let i = 0; i < student2Courses.length; i++) {
                  if (student2Courses[i] == elem) {
                        console.log(elem);
                  }
            }
      }
);
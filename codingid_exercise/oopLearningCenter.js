class Course {
  #name;
  #sks;
  #score;

  constructor(name, sks, score) {
    this.#name = name;
    this.#sks = sks;
    this.#score = score;
  }

  get getName() {
    return this.#name;
  }

  get getSks() {
    return this.#sks;
  }

  get getScore() {
    return this.#score;
  }

  set setSks(value) {
    this.#sks = value;
  }

  set setScore(value) {
    this.#score = value;
  }

  getGrade() {
    if (this.#score >= 85) {
      return 'A';
    } else if (this.#score >= 70) {
      return 'B';
    } else if (this.#score >= 55) {
      return 'C';
    } else if (this.#score < 55) {
      return 'D';
    }
  }
}

class Student {
  #name;
  #listCourse = [];

  constructor(name) {
    this.#name = name;
  }

  get getName() {
    return this.#name;
  }

  set setName(value) {
    this.#name = value;
  }

  set setListCourse(objCourse) {
    this.#listCourse.push(objCourse);
  }

  get getListCourse() {
    return this.#listCourse;
  }

  countTotalSks() {
    // let totalSks = 0;
    // this.#listCourse.forEach((course) => {
    //   totalSks += course.getSks;
    // });
    // return totalSks;

    // use for loop
    let totalSks = 0;
    for (let i = 0; i < this.#listCourse.length; i++) {
      totalSks += this.#listCourse[i].getSks;
    }
    return totalSks;
  }
}

class University {
  #name;
  #obj_student;

  constructor(name) {
    this.#name = name;
  }

  get getObj_student() {
    return this.#obj_student;
  }

  set setObj_student(objStudent) {
    this.#obj_student = objStudent;
  }

  studentStatus() {
    /*
     * Method studentStatus return status of the student with this condition
     * - If total SKS < 10 then show
     * "[Student Name] Credit is not enough to graduate"
     * - If the student has at least one Course with grade D, then show
     * "Sorry, [Student Name] Not Pass"
     * - If the student passed 2 rules above, then show
     * "Congrats, [Student Name] Pass"
     */
    // const totalSks = this.#obj_student.countTotalSks();
    // const listCourse = this.#obj_student.getListCourse;
    // let isD = false;
    // listCourse.forEach((course) => {
    //   if (course.getGrade() === 'D') {
    //     isD = true;
    //   }
    // });
    // if (totalSks < 10) {
    //   console.log(
    //     `${this.#obj_student.getName} Credit is not enough to graduate`,
    //   );
    // }
    // if (isD) {
    //   console.log(`Sorry, ${this.#obj_student.getName} Not Pass`);
    // }
    // console.log(`Congrats, ${this.#obj_student.getName} Pass`);

    const totalSKs = this.#obj_student.countTotalSks();

    const studentGrade = this.#obj_student.getListCourse.map((course) => {
      return course.getGrade();
    });

    // console.log(
    //   `${this.#name} Information :\n${
    //     this.#obj_student.getName
    //   } has ${totalSKs} SKS and has grade ${studentGrade.join(', ')}`,
    // );

    console.log(`${this.#name} Information :`);
    if (totalSKs < 10) {
      console.log(
        `${this.#obj_student.getName} Credit is not enough to graduate`,
      );
    } else if (studentGrade.includes('D')) {
      console.log(`Sorry, ${this.#obj_student.getName} Not Pass`);
    } else {
      console.log(`Congrats, ${this.#obj_student.getName} Pass`);
    }
  }
}

let Course1 = new Course('Programming', 2, 50);
let Course2 = new Course('Database', 4, 50);
let Course3 = new Course('Algoritma', 3, 80);
let Bill = new Student('Bill');

Bill.setListCourse = Course1;
Bill.setListCourse = Course2;
Bill.setListCourse = Course3;

let Univ = new University('CodingID Learning Center');
Univ.setObj_student = Bill;
Univ.studentStatus();

let Course11 = new Course('Programming', 3, 70);
let Course22 = new Course('Database', 3, 90);
let Course33 = new Course('Algoritma', 4, 50);
let Jonathan = new Student('Jonathan');
Jonathan.setListCourse = Course11;
Jonathan.setListCourse = Course22;
Jonathan.setListCourse = Course33;

let Univ1 = new University('CodingID Learning Center');
Univ1.setObj_student = Jonathan;
Univ1.studentStatus();

let Course111 = new Course('Programming', 4, 70);
let Course222 = new Course('Database', 4, 60);
let Course333 = new Course('Algoritma', 4, 60);
let Wardoyo = new Student('Wardoyo');
Wardoyo.setListCourse = Course111;
Wardoyo.setListCourse = Course222;
Wardoyo.setListCourse = Course333;

let Univ2 = new University('CodingID Learning Center');
Univ2.setObj_student = Wardoyo;
Univ2.studentStatus();

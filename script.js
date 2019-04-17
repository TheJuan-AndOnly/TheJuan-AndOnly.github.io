//courseArr -> object with objects in it
var courseARR = {
    //csc-140
    CSC140: {
        isMajor: function () {
            return true;
        },
        isGenEd: function () {
            return false;
        },
        isElective: function () {
            return false;
        },

        courseNUM: "CSC 140",
        coursename: "Intro to Computational Problem Solving",
        credits: 3,

        fallHour: "12:00 pm - 3:00 pm",
        fallDays: "Monday Wednesday Friday",
        fallLocation: " WSC 234",
        fallFaculty: " Professor Kim",

        winterHour: "12:00 pm - 3:00 pm",
        winterDays: "Fridays",
        winterLocation: " WSC 234",
        winterFaculty: " Professor Kim",

        springHour: "12:00 pm - 3:00 pm",
        springDays: "Tuesday",
        springLocation: " WSC 234",
        springFaculty: " Professor Kim",

        fallSchedule: function () {
            return this.courseNUM + "<br>" +
                this.coursename + "<br>" +
                this.fallHour + "<br>" +
                this.fallDays + "<br>" +
                this.fallLocation + "<br>" +
                this.fallFaculty;
        },

        winterSchedule: function () {
            return this.courseNUM + "<br>" +
                this.coursename + "<br>" +
                this.winterHour + "<br>" +
                this.winterDays + "<br>" +
                this.winterLocation + "<br>" +
                this.winterFaculty;
        },

        springSchedule: function () {
            return this.courseNUM + "<br>" +
                this.coursename + "<br>" +
                this.springHour + "<br>" +
                this.springDays + "<br>" +
                this.springLocation + "<br>" +
                this.springFaculty;
        }


    },
    //CSC 160 - Computer Science I
    CSC160: {
        isMajor: function () {
            return true;
        },
        isGenEd: function () {
            return false;
        },
        isElective: function () {
            return false;
        },

        courseNUM: "CSC 160",
        coursename: "Computer Sceince 1",
        credits: 3,

        fallHour: "12:00 pm - 3:00 pm",
        fallDays: "Monday Wednesday Friday",
        fallLocation: " WSC 234",
        fallFaculty: " Professor Kim",

        winterHour: "12:00 pm - 3:00 pm",
        winterDays: "Fridays",
        winterLocation: " WSC 234",
        winterFaculty: " Professor Kim",

        springHour: "12:00 pm - 3:00 pm",
        springDays: "Tuesday",
        springLocation: " WSC 234",
        springFaculty: " Professor Kim",

        fallSchedule: function () {
            return this.courseNUM + "<br>" +
                this.coursename + "<br>" +
                this.fallHour + "<br>" +
                this.fallDays + "<br>" +
                this.fallLocation + "<br>" +
                this.fallFaculty;
        },

        winterSchedule: function () {
            return this.courseNUM + "<br>" +
                this.coursename + "<br>" +
                this.winterHour + "<br>" +
                this.winterDays + "<br>" +
                this.winterLocation + "<br>" +
                this.winterFaculty;
        },

        springSchedule: function () {
            return this.courseNUM + "<br>" +
                this.coursename + "<br>" +
                this.springHour + "<br>" +
                this.springDays + "<br>" +
                this.springLocation + "<br>" +
                this.springFaculty;
        }


    },
    //CSC 161 - Computer Science II
    CSC161: {
        isMajor: function () {
            return true;
        },
        isGenEd: function () {
            return false;
        },
        isElective: function () {
            return false;
        },

        courseNUM: "CSC 161",
        coursename: "Computer Sceince 2",
        credits: 3,

        fallHour: "12:00 pm - 3:00 pm",
        fallDays: "Monday Wednesday Friday",
        fallLocation: " WSC 234",
        fallFaculty: " Professor Kim",

        winterHour: "12:00 pm - 3:00 pm",
        winterDays: "Fridays",
        winterLocation: " WSC 234",
        winterFaculty: " Professor Kim",

        springHour: "12:00 pm - 3:00 pm",
        springDays: "Tuesday",
        springLocation: " WSC 234",
        springFaculty: " Professor Kim",

        fallSchedule: function () {
            return this.courseNUM + "<br>" +
                this.coursename + "<br>" +
                this.fallHour + "<br>" +
                this.fallDays + "<br>" +
                this.fallLocation + "<br>" +
                this.fallFaculty;
        },

        winterSchedule: function () {
            return this.courseNUM + "<br>" +
                this.coursename + "<br>" +
                this.winterHour + "<br>" +
                this.winterDays + "<br>" +
                this.winterLocation + "<br>" +
                this.winterFaculty;
        },

        springSchedule: function () {
            return this.courseNUM + "<br>" +
                this.coursename + "<br>" +
                this.springHour + "<br>" +
                this.springDays + "<br>" +
                this.springLocation + "<br>" +
                this.springFaculty;
        }
    },
    //CSC 210 - Data Structures and Algorithms
    CSC210: {
        isMajor: function () {
            return true;
        },
        isGenEd: function () {
            return false;
        },
        isElective: function () {
            return false;
        },

        courseNUM: "CSC 210",
        coursename: "Data Structures and Algorithms",
        credits: 3,

        fallHour: "12:00 pm - 3:00 pm",
        fallDays: "Monday Wednesday Friday",
        fallLocation: " WSC 234",
        fallFaculty: " Professor Kim",

        winterHour: "12:00 pm - 3:00 pm",
        winterDays: "Fridays",
        winterLocation: " WSC 234",
        winterFaculty: " Professor Kim",

        springHour: "12:00 pm - 3:00 pm",
        springDays: "Tuesday",
        springLocation: " WSC 234",
        springFaculty: " Professor Kim",

        fallSchedule: function () {
            return this.courseNUM + "<br>" +
                this.coursename + "<br>" +
                this.fallHour + "<br>" +
                this.fallDays + "<br>" +
                this.fallLocation + "<br>" +
                this.fallFaculty;
        },

        winterSchedule: function () {
            return this.courseNUM + "<br>" +
                this.coursename + "<br>" +
                this.winterHour + "<br>" +
                this.winterDays + "<br>" +
                this.winterLocation + "<br>" +
                this.winterFaculty;
        },

        springSchedule: function () {
            return this.courseNUM + "<br>" +
                this.coursename + "<br>" +
                this.springHour + "<br>" +
                this.springDays + "<br>" +
                this.springLocation + "<br>" +
                this.springFaculty;
        }


    },
    //CSC 220 - Computer System Concepts
    CSC220: {
        isMajor: function () {
            return true;
        },
        isGenEd: function () {
            return false;
        },
        isElective: function () {
            return false;
        },

        courseNUM: "CSC 220",
        coursename: "Computer Systems Concepts",
        credits: 3,

        fallHour: "12:00 pm - 3:00 pm",
        fallDays: "Monday Wednesday Friday",
        fallLocation: " WSC 234",
        fallFaculty: " Professor Kim",

        winterHour: "12:00 pm - 3:00 pm",
        winterDays: "Fridays",
        winterLocation: " WSC 234",
        winterFaculty: " Professor Kim",

        springHour: "12:00 pm - 3:00 pm",
        springDays: "Tuesday",
        springLocation: " WSC 234",
        springFaculty: " Professor Kim",

        fallSchedule: function () {
            return this.courseNUM + "<br>" +
                this.coursename + "<br>" +
                this.fallHour + "<br>" +
                this.fallDays + "<br>" +
                this.fallLocation + "<br>" +
                this.fallFaculty;
        },

        winterSchedule: function () {
            return this.courseNUM + "<br>" +
                this.coursename + "<br>" +
                this.winterHour + "<br>" +
                this.winterDays + "<br>" +
                this.winterLocation + "<br>" +
                this.winterFaculty;
        },

        springSchedule: function () {
            return this.courseNUM + "<br>" +
                this.coursename + "<br>" +
                this.springHour + "<br>" +
                this.springDays + "<br>" +
                this.springLocation + "<br>" +
                this.springFaculty;
        }


    },
    //CSC 230 - Discrete Structures I
    CSC230: {
        isMajor: function () {
            return true;
        },
        isGenEd: function () {
            return false;
        },
        isElective: function () {
            return false;
        },

        courseNUM: "CSC 230",
        coursename: "Discrete Structures",
        credits: 3,

        fallHour: "12:00 pm - 3:00 pm",
        fallDays: "Monday Wednesday Friday",
        fallLocation: " WSC 234",
        fallFaculty: " Professor Kim",

        winterHour: "12:00 pm - 3:00 pm",
        winterDays: "Fridays",
        winterLocation: " WSC 234",
        winterFaculty: " Professor Kim",

        springHour: "12:00 pm - 3:00 pm",
        springDays: "Tuesday",
        springLocation: " WSC 234",
        springFaculty: " Professor Kim",

        fallSchedule: function () {
            return this.courseNUM + "<br>" +
                this.coursename + "<br>" +
                this.fallHour + "<br>" +
                this.fallDays + "<br>" +
                this.fallLocation + "<br>" +
                this.fallFaculty;
        },

        winterSchedule: function () {
            return this.courseNUM + "<br>" +
                this.coursename + "<br>" +
                this.winterHour + "<br>" +
                this.winterDays + "<br>" +
                this.winterLocation + "<br>" +
                this.winterFaculty;
        },

        springSchedule: function () {
            return this.courseNUM + "<br>" +
                this.coursename + "<br>" +
                this.springHour + "<br>" +
                this.springDays + "<br>" +
                this.springLocation + "<br>" +
                this.springFaculty;
        }


    },
    //CSC 306 - Software Development in C++
    CSC306: {
        isMajor: function () {
            return true;
        },
        isGenEd: function () {
            return false;
        },
        isElective: function () {
            return false;
        },

        courseNUM: "CSC 306",
        coursename: "Software Development in C++",
        credits: 3,

        fallHour: "12:00 pm - 3:00 pm",
        fallDays: "Monday Wednesday Friday",
        fallLocation: " WSC 234",
        fallFaculty: " Professor Kim",

        winterHour: "12:00 pm - 3:00 pm",
        winterDays: "Fridays",
        winterLocation: " WSC 234",
        winterFaculty: " Professor Kim",

        springHour: "12:00 pm - 3:00 pm",
        springDays: "Tuesday",
        springLocation: " WSC 234",
        springFaculty: " Professor Kim",

        fallSchedule: function () {
            return this.courseNUM + "<br>" +
                this.coursename + "<br>" +
                this.fallHour + "<br>" +
                this.fallDays + "<br>" +
                this.fallLocation + "<br>" +
                this.fallFaculty;
        },

        winterSchedule: function () {
            return this.courseNUM + "<br>" +
                this.coursename + "<br>" +
                this.winterHour + "<br>" +
                this.winterDays + "<br>" +
                this.winterLocation + "<br>" +
                this.winterFaculty;
        },

        springSchedule: function () {
            return this.courseNUM + "<br>" +
                this.coursename + "<br>" +
                this.springHour + "<br>" +
                this.springDays + "<br>" +
                this.springLocation + "<br>" +
                this.springFaculty;
        }


    },
    //CSC 495 - Capstone Seminar
    CSC495: {
        isMajor: function () {
            return false;
        },
        isGenEd: function () {
            return false;
        },
        isElective: function () {
            return true;
        },

        courseNUM: "CSC 494",
        coursename: "Capstone Seminar",
        credits: 3,

        fallHour: "12:00 pm - 3:00 pm",
        fallDays: "Monday Wednesday Friday",
        fallLocation: " WSC 234",
        fallFaculty: " Professor Kim",

        winterHour: "12:00 pm - 3:00 pm",
        winterDays: "Fridays",
        winterLocation: " WSC 234",
        winterFaculty: " Professor Kim",

        springHour: "12:00 pm - 3:00 pm",
        springDays: "Tuesday",
        springLocation: " WSC 234",
        springFaculty: " Professor Kim",

        fallSchedule: function () {
            return this.courseNUM + "<br>" +
                this.coursename + "<br>" +
                this.fallHour + "<br>" +
                this.fallDays + "<br>" +
                this.fallLocation + "<br>" +
                this.fallFaculty;
        },

        winterSchedule: function () {
            return this.courseNUM + "<br>" +
                this.coursename + "<br>" +
                this.winterHour + "<br>" +
                this.winterDays + "<br>" +
                this.winterLocation + "<br>" +
                this.winterFaculty;
        },

        springSchedule: function () {
            return this.courseNUM + "<br>" +
                this.coursename + "<br>" +
                this.springHour + "<br>" +
                this.springDays + "<br>" +
                this.springLocation + "<br>" +
                this.springFaculty;
        }


    },
    //CSC 215 - Introduction to Web Programming
    CSC215: {
        isMajor: function () {
            return false;
        },
        isGenEd: function () {
            return false;
        },
        isElective: function () {
            return true;
        },

        courseNUM: "CSC 215",
        coursename: "Intro to Web Programming",
        credits: 3,

        fallHour: "12:00 pm - 3:00 pm",
        fallDays: "Monday Wednesday Friday",
        fallLocation: " WSC 234",
        fallFaculty: " Professor Kim",

        winterHour: "12:00 pm - 3:00 pm",
        winterDays: "Fridays",
        winterLocation: " WSC 234",
        winterFaculty: " Professor Kim",

        springHour: "12:00 pm - 3:00 pm",
        springDays: "Tuesday",
        springLocation: " WSC 234",
        springFaculty: " Professor Kim",

        fallSchedule: function () {
            return this.courseNUM + "<br>" +
                this.coursename + "<br>" +
                this.fallHour + "<br>" +
                this.fallDays + "<br>" +
                this.fallLocation + "<br>" +
                this.fallFaculty;
        },

        winterSchedule: function () {
            return this.courseNUM + "<br>" +
                this.coursename + "<br>" +
                this.winterHour + "<br>" +
                this.winterDays + "<br>" +
                this.winterLocation + "<br>" +
                this.winterFaculty;
        },

        springSchedule: function () {
            return this.courseNUM + "<br>" +
                this.coursename + "<br>" +
                this.springHour + "<br>" +
                this.springDays + "<br>" +
                this.springLocation + "<br>" +
                this.springFaculty;
        }


    },
    //CSC 415 - Web Applications
    CSC415: {
        isMajor: function () {
            return false;
        },
        isGenEd: function () {
            return false;
        },
        isElective: function () {
            return true;
        },

        courseNUM: "CSC 415",
        coursename: "Web Applications",
        credits: 3,

        fallHour: "12:00 pm - 3:00 pm",
        fallDays: "Monday Wednesday Friday",
        fallLocation: " WSC 234",
        fallFaculty: " Professor Kim",

        winterHour: "12:00 pm - 3:00 pm",
        winterDays: "Fridays",
        winterLocation: " WSC 234",
        winterFaculty: " Professor Kim",

        springHour: "12:00 pm - 3:00 pm",
        springDays: "Tuesday",
        springLocation: " WSC 234",
        springFaculty: " Professor Kim",

        fallSchedule: function () {
            return this.courseNUM + "<br>" +
                this.coursename + "<br>" +
                this.fallHour + "<br>" +
                this.fallDays + "<br>" +
                this.fallLocation + "<br>" +
                this.fallFaculty;
        },

        winterSchedule: function () {
            return this.courseNUM + "<br>" +
                this.coursename + "<br>" +
                this.winterHour + "<br>" +
                this.winterDays + "<br>" +
                this.winterLocation + "<br>" +
                this.winterFaculty;
        },

        springSchedule: function () {
            return this.courseNUM + "<br>" +
                this.coursename + "<br>" +
                this.springHour + "<br>" +
                this.springDays + "<br>" +
                this.springLocation + "<br>" +
                this.springFaculty;
        }


    },
    //CSC 436 - Human Computer Interaction
    CSC436: {
        isMajor: function () {
            return false;
        },
        isGenEd: function () {
            return false;
        },
        isElective: function () {
            return true;
        },

        courseNUM: "CSC 436",
        coursename: "Human Computer Interaction",
        credits: 3,

        fallHour: "12:00 pm - 3:00 pm",
        fallDays: "Monday Wednesday Friday",
        fallLocation: " WSC 234",
        fallFaculty: " Professor Kim",

        winterHour: "12:00 pm - 3:00 pm",
        winterDays: "Fridays",
        winterLocation: " WSC 234",
        winterFaculty: " Professor Kim",

        springHour: "12:00 pm - 3:00 pm",
        springDays: "Tuesday",
        springLocation: " WSC 234",
        springFaculty: " Professor Kim",

        fallSchedule: function () {
            return this.courseNUM + "<br>" +
                this.coursename + "<br>" +
                this.fallHour + "<br>" +
                this.fallDays + "<br>" +
                this.fallLocation + "<br>" +
                this.fallFaculty;
        },

        winterSchedule: function () {
            return this.courseNUM + "<br>" +
                this.coursename + "<br>" +
                this.winterHour + "<br>" +
                this.winterDays + "<br>" +
                this.winterLocation + "<br>" +
                this.winterFaculty;
        },

        springSchedule: function () {
            return this.courseNUM + "<br>" +
                this.coursename + "<br>" +
                this.springHour + "<br>" +
                this.springDays + "<br>" +
                this.springLocation + "<br>" +
                this.springFaculty;
        }


    },
    //CSC 453 - Systems Analysis
    CSC453: {
        isMajor: function () {
            return false;
        },
        isGenEd: function () {
            return false;
        },
        isElective: function () {
            return true;
        },

        courseNUM: "CSC 453",
        coursename: "Systems Analysis",
        credits: 3,

        fallHour: "12:00 pm - 3:00 pm",
        fallDays: "Monday Wednesday Friday",
        fallLocation: " WSC 234",
        fallFaculty: " Professor Kim",

        winterHour: "12:00 pm - 3:00 pm",
        winterDays: "Fridays",
        winterLocation: " WSC 234",
        winterFaculty: " Professor Kim",

        springHour: "12:00 pm - 3:00 pm",
        springDays: "Tuesday",
        springLocation: " WSC 234",
        springFaculty: " Professor Kim",

        fallSchedule: function () {
            return this.courseNUM + "<br>" +
                this.coursename + "<br>" +
                this.fallHour + "<br>" +
                this.fallDays + "<br>" +
                this.fallLocation + "<br>" +
                this.fallFaculty;
        },

        winterSchedule: function () {
            return this.courseNUM + "<br>" +
                this.coursename + "<br>" +
                this.winterHour + "<br>" +
                this.winterDays + "<br>" +
                this.winterLocation + "<br>" +
                this.winterFaculty;
        },

        springSchedule: function () {
            return this.courseNUM + "<br>" +
                this.coursename + "<br>" +
                this.springHour + "<br>" +
                this.springDays + "<br>" +
                this.springLocation + "<br>" +
                this.springFaculty;
        }


    },
    //CSC 460 - Database Management Systems
    CSC460: {
        isMajor: function () {
            return false;
        },
        isGenEd: function () {
            return false;
        },
        isElective: function () {
            return true;
        },

        courseNUM: "CSC 460",
        coursename: "Database Managment Systems",
        credits: 3,

        fallHour: "12:00 pm - 3:00 pm",
        fallDays: "Monday Wednesday Friday",
        fallLocation: " WSC 234",
        fallFaculty: " Professor Kim",

        winterHour: "12:00 pm - 3:00 pm",
        winterDays: "Fridays",
        winterLocation: " WSC 234",
        winterFaculty: " Professor Kim",

        springHour: "12:00 pm - 3:00 pm",
        springDays: "Tuesday",
        springLocation: " WSC 234",
        springFaculty: " Professor Kim",

        fallSchedule: function () {
            return this.courseNUM + "<br>" +
                this.coursename + "<br>" +
                this.fallHour + "<br>" +
                this.fallDays + "<br>" +
                this.fallLocation + "<br>" +
                this.fallFaculty;
        },

        winterSchedule: function () {
            return this.courseNUM + "<br>" +
                this.coursename + "<br>" +
                this.winterHour + "<br>" +
                this.winterDays + "<br>" +
                this.winterLocation + "<br>" +
                this.winterFaculty;
        },

        springSchedule: function () {
            return this.courseNUM + "<br>" +
                this.coursename + "<br>" +
                this.springHour + "<br>" +
                this.springDays + "<br>" +
                this.springLocation + "<br>" +
                this.springFaculty;
        }


    },
    //CSC 464 - Data Mining
    CSC464: {
        isMajor: function () {
            return false;
        },
        isGenEd: function () {
            return false;
        },
        isElective: function () {
            return true;
        },

        courseNUM: "CSC-464",
        coursename: "Data Mining",
        credits: 3,

        fallHour: "12:00 pm - 3:00 pm",
        fallDays: "Monday Wednesday Friday",
        fallLocation: " WSC 234",
        fallFaculty: " Professor Kim",

        winterHour: "12:00 pm - 3:00 pm",
        winterDays: "Fridays",
        winterLocation: " WSC 234",
        winterFaculty: " Professor Kim",

        springHour: "12:00 pm - 3:00 pm",
        springDays: "Tuesday",
        springLocation: " WSC 234",
        springFaculty: " Professor Kim",

        fallSchedule: function () {
            return this.courseNUM + "<br>" +
                this.coursename + "<br>" +
                this.fallHour + "<br>" +
                this.fallDays + "<br>" +
                this.fallLocation + "<br>" +
                this.fallFaculty;
        },

        winterSchedule: function () {
            return this.courseNUM + "<br>" +
                this.coursename + "<br>" +
                this.winterHour + "<br>" +
                this.winterDays + "<br>" +
                this.winterLocation + "<br>" +
                this.winterFaculty;
        },

        springSchedule: function () {
            return this.courseNUM + "<br>" +
                this.coursename + "<br>" +
                this.springHour + "<br>" +
                this.springDays + "<br>" +
                this.springLocation + "<br>" +
                this.springFaculty;
        }
    }
}


var academicYear1 = {
    "year": "20xx-20yy",
    "Degree": "Computer Science",
    "terms": {
        "FA": {
            course1: null, //add 
            course2: null,
            course3: null,
            course4: null,
            course5: null
        },
        "WI": {
            course1: null,
            course2: null,
            course3: null,
            course4: null,
            course5: null
        },
        "SP": {
            course1: null,
            course2: null,
            course3: null,
            course4: null,
            course5: null
        },
        "SU": {
            course1: null,
            course2: null,
            course3: null,
            course4: null,
            course5: null
        }
    }
}

function getTerm(term, courseType) {
    //window.location.href="class-selection.html";
    if (term == 'fall') {
        if (courseType == 'core') {
            for (let i in courseARR) {
                if (courseARR[i].isMajor()) {
                    document.getElementById("test").innerHTML += writeCourseHTMLTable(courseARR[i], 'fall');
                }
            }
        }
        if (courseType == 'elective') {
            for (let i in courseARR) {
                if (courseARR[i].isElective()) {
                    document.getElementById("test").innerHTML += writeCourseHTMLTable(courseARR[i], 'fall');
                }
            }
        }
        if (courseType == 'genEd') {
            for (let i in courseARR) {
                if (courseARR[i].isGenEd()) {
                    document.getElementById("test").innerHTML += writeCourseHTMLTable(courseARR[i], 'fall');
                }
            }
        }
    }

    if (term == 'winter') {
        if (courseType == 'core') {
            for (let i in courseARR) {
                if (courseARR[i].isMajor()) {
                    document.getElementById("test").innerHTML += writeCourseHTMLTable(courseARR[i], 'winter');
                }
            }
        }
        if (courseType == 'elective') {
            for (let i in courseARR) {
                if (courseARR[i].isElective()) {
                    document.getElementById("test").innerHTML += writeCourseHTMLTable(courseARR[i], 'winter');
                }
            }
        }
        if (courseType == 'genEd') {
            for (let i in courseARR) {
                if (courseARR[i].isGenEd()) {
                    document.getElementById("test").innerHTML += writeCourseHTMLTable(courseARR[i], 'winter');
                }
            }
        }

    }
    if (term == 'spring') {
        if (courseType == 'core') {
            for (let i in courseARR) {
                if (courseARR[i].isMajor()) {
                    document.getElementById("test").innerHTML += writeCourseHTMLTable(courseARR[i], 'spring');
                } else {
                    continue;
                }
            }
        }
        if (courseType == 'elective') {
            for (let i in courseARR) {
                if (courseARR[i].isElective()) {
                    document.getElementById("test").innerHTML += writeCourseHTMLTable(courseARR[i], 'spring');
                }
            }
        }
        if (courseType == 'genEd') {
            for (let i in courseARR) {
                if (courseARR[i].isGenEd()) {
                    document.getElementById("test").innerHTML += writeCourseHTMLTable(courseARR[i], 'spring');
                }
            }
        }

    }
    if (term == 'summer') {
        if (courseType == 'core') {
            for (let i in courseARR) {
                if (courseARR[i].isMajor()) {
                    document.getElementById("test").innerHTML += writeCourseHTMLTable(courseARR[i], 'summer');
                } else {
                    continue;
                }
            }
        }
        if (courseType == 'elective') {
            for (let i in courseARR) {
                if (courseARR[i].isElective()) {
                    document.getElementById("test").innerHTML += writeCourseHTMLTable(courseARR[i], 'summer');
                }
            }
        }
        if (courseType == 'genEd') {
            for (let i in courseARR) {
                if (courseARR[i].isGenEd()) {
                    document.getElementById("test").innerHTML += writeCourseHTMLTable(courseARR[i], 'summer');
                }
            }
        }

    }
}


function writeCourseHTMLTable(x, term) {
    if (term == 'fall') {
        return "<div class=" + "course-selection" + "><table><tbody><tr><td>" + x.courseNUM + "</td><td>" + x.coursename + "</td><td>" + x.fallHour + "</td><td>" + x.fallDays + "</td><td>" + x.fallLocation + "</td><td>" + x.winterFaculty + "</td><td><button >Register</button></td></tr></tbody></table></div>";
    }
    if (term == 'winter') {
        return "<div class=" + "course-selection" + "><table><tbody><tr><td>" + x.courseNUM + "</td><td>" + x.coursename + "</td><td>" + x.winterHour + "</td><td>" + x.winterDays + "</td><td>" + x.winterLocation + "</td><td>" + x.winterFaculty + "</td><td><button >Register</button></td></tr></tbody></table></div>";
    }
    if (term == 'spring') {
        return "<div class=" + "course-selection" + "><table><tbody><tr><td>" + x.courseNUM + "</td><td>" + x.coursename + "</td><td>" + x.springHour + "</td><td>" + x.springDays + "</td><td>" + x.springLocation + "</td><td>" + x.springFaculty + "</td><td><button >Register</button></td></tr></tbody></table></div>";
    }
    if (term == 'summer') {
        return "<div class=" + "course-selection" + "><table><tbody><tr><td>" + x.courseNUM + "</td><td>" + x.coursename + "</td><td>" + x.springHour + "</td><td>" + x.springDays + "</td><td>" + x.springLocation + "</td><td>" + x.springFaculty + "</td><td><button >Register</button></td></tr></tbody></table></div>";
    }


}

function writeCourse(term) {
    for (let i in courseARR) {
        document.getElementById("test").innerHTML += writeCourseHTMLTable(courseARR[i], term);
    }
}

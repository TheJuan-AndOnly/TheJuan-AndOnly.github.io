//courseArr -> object with objects in it
   /*var courseARR = {
    
 
    //CSC140
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
        isCommunication: function () {
            return false;
        },

        courseNUM: "CSC140",
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
        },
        registerFall: function(){
            alert("Registered for fall");
            //registerCourse('fall',this.courseNUM);
        },
        registerWinter: function(){
            alert("Registered for Winter");
            //registerCourse('fall',this.courseNUM);
        },
        registerSpring: function(){
            alert("Registered for Spring");
            //registerCourse('fall',this.courseNUM);
        },
        registerSummer: function(){
            alert("Registered for Summer");
            //registerCourse('fall',this.courseNUM);
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
        isCommunication: function () {
            return false;
        },

        courseNUM: "CSC160",
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
        isCommunication: function () {
            return false;
        },

        courseNUM: "CSC161",
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
        isCommunication: function () {
            return false;
        },        

        courseNUM: "CSC210",
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
        isCommunication: function () {
            return false;
        },

        courseNUM: "CSC220",
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
        isCommunication: function () {
            return false;
        },

        courseNUM: "CSC230",
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
        isCommunication: function () {
            return false;
        },

        courseNUM: "CSC306",
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
        isCommunication: function () {
            return false;
        },

        courseNUM: "CSC494",
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
        isCommunication: function () {
            return false;
        },

        courseNUM: "CSC215",
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
        isCommunication: function () {
            return false;
        },

        courseNUM: "CSC415",
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
        isCommunication: function () {
            return false;
        },

        courseNUM: "CSC436",
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
        isCommunication: function () {
            return false;
        },

        courseNUM: "CSC453",
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
        isCommunication: function () {
            return false;
        },

        courseNUM: "CSC460",
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
        isCommunication: function () {
            return false;
        },

        courseNUM: "CSC464",
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
*/

var courseArr = [];

function course(courseType,courseNUMBER, courseName, credits,
                fallHours, fallDays, fallLocation, fallFaculty,
                winterHours, winterDays, winterLocation, winterFaculty,
                springHours, springDays, springLocation, springFaculty,
                summerHours, summerDays, summerLocation, summerFaculty)
{
    this.courseType = courseType;
    this.courseNUM = courseNUMBER;
    this.courseName = courseName;
    this.credits = credits;
    
    this.isMajor = function()
    {
        if (courseType=="core")
            {
                return true;
            }
    }
    this.isGenEd = function()
    {
        if (courseType=="genEd")
            {
                return true;
            }
    }
    this.isElective = function()
    {
        if (courseType=="elective")
            {
                return true;
            }
    }
    this.isElectiveCom = function()
    {
        if (courseType=="electiveCom")
            {
                return true;
            }
    }
    
    this.fallHours=fallHours;
    this.fallDays = fallDays,
    this.fallLocation=fallLocation;
    this.fallFaculty=fallFaculty;
    
    this.winterHours=winterHours;
    this.winterDays = winterDays,
    this.winterLocation=winterLocation;
    this.winterFaculty=winterFaculty;
    
    this.springHours=springHours;
    this.springDays = springDays,
    this.springLocation=springLocation;
    this.springFaculty=springFaculty;
    
    this.summerHours=summerHours;
    this.summerDays = summerDays,
    this.summerLocation=summerLocation;
    this.summerFaculty=summerFaculty;
    
    this.fallSchedule = function () {
                return this.courseNUM + "<br>" +
                this.coursename + "<br>" +
                this.fallHours + "<br>" +
                this.fallDays + "<br>" +
                this.fallLocation + "<br>" +
                this.fallFaculty;
        };
    this.winterSchedule = function () {
            return this.courseNUM + "<br>" +
                this.coursename + "<br>" +
                this.winterHour + "<br>" +
                this.winterDays + "<br>" +
                this.winterLocation + "<br>" +
                this.winterFaculty;
        };
    this.springSchedule = function () {
            return this.courseNUM + "<br>" +
                this.coursename + "<br>" +
                this.springHour + "<br>" +
                this.springDays + "<br>" +
                this.springLocation + "<br>" +
                this.springFaculty;
        };
    this.summerSchedule = function () {
                return this.courseNUM + "<br>" +
                this.coursename + "<br>" +
                this.summerHours + "<br>" +
                this.summerDays + "<br>" +
                this.summerLocation + "<br>" +
                this.summerFaculty;
        };
    
}









//core
var CSC140 = new course("core","CSC140", "Introduction to Computational Problem Solving",3,
                       "9:00am - 10:00am", "M  W  F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", "M  W  F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", "M  W  F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", "M  W  F", "WSC-120", "Proferssor Dr. Mr/Mrs");

var CSC160 = new course("core", "CSC160","Computer Science I",3, 
                       "9:00am - 10:00am", "M  W  F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", "M  W  F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", "M  W  F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", "M  W  F", "WSC-120", "Proferssor Dr. Mr/Mrs");
var CSC161 = new course("core", "CSC161","Computer Science II",3,
                       "9:00am - 10:00am", "M  W  F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", "M  W  F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", "M  W  F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", "M  W  F", "WSC-120", "Proferssor Dr. Mr/Mrs");
var CSC210 = new course("core", "CSC210","Data Structures and Algorithm",3,
                        "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs");
var CSC220 = new course("core", "CSC220","Computer System Concepts",3,
                        "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs");
var CSC230 = new course("core", "CSC230","Discrete Structures I",3,
                       "9:00am - 10:00am", "M  W  F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", "M  W  F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", "M  W  F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", "M  W  F", "WSC-120", "Proferssor Dr. Mr/Mrs");
var CSC306 = new course("core", "CSC306","Software Development in C++",3,
                       "9:00am - 10:00am", "M  W  F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", "M  W  F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", "M  W  F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", "M  W  F", "WSC-120", "Proferssor Dr. Mr/Mrs");
var CSC495 = new course("core", "CSC495","Captone Seminar",3,
                    "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs");

//electives
var CSC215 = new course("elective", "CSC215","Intro to Web Programming", 3,
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs");
var CSC415 = new course("elective", "CSC415","Web Applications", 3,
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs");
var CSC436 = new course("elective", "CSC436","Human Computer Interaction", 3,
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs");
var CSC453 = new course("elective", "CSC453","System Analysis", 3,
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs");
var CSC460 = new course("elective", "CSC460","Database Managment", 3,
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs");
var CSC464 = new course("elective", "CSC464","Data Mining", 3,
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs");
//communication
var COM100 = new course("electiveCom", "COM100", "Intro to Public Speaking", 3,
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs");
var COM200 = new course("electiveCom", "COM200", "Interpersonal Communication", 3,
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs");
var COM214 = new course("electiveCom", "COM214", "Group Process", 3,
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs");
var COM230 = new course("electiveCom", "COM230", "Business and Profetional Communication", 3,
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs");
var ENG256 = new course("electiveCom", "ENG256", "Style", 3,
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs");
var IFS320 = new course("electiveCom", "IFS320", "Multimedia Presentations", 3,
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs");
var LEV230 = new course("electiveCom", "LEV230", "Conflict Resolution", 3,
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs");
var MED200 = new course("electiveCom", "MED200", "Digital Writing", 3,
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs");

courseArr.push(CSC140,CSC160,CSC161,CSC210,CSC215,CSC220,CSC230,CSC306,CSC415,CSC436,CSC453,CSC460,CSC464,CSC495,COM100,COM200,COM214,COM230,ENG256,IFS320,LEV230,MED200);

//var x = new courseARR.CSC140
var academicYear1 = {
    year: "20xx-20yy",
    Degree: "Computer Science",
    terms: {
        FA: {
            course1: null, //add 
            course2: null,
            course3: null,
            course4: null,
            course5: null
        },
        
        WI: {
            course1: null,
            course2: null,
            course3: null,
            course4: null,
            course5: null
        },
        SP: {
            course1: null,
            course2: null,
            course3: null,
            course4: null,
            course5: null
        },
        SU: {
            course1: null,
            course2: null,
            course3: null,
            course4: null,
            course5: null
        }
    }
}


function getTerm(term, courseType) {
    
    let idName = term+"-course-list";
    
    if (term == 'fall') {
        switch (courseType)
        {
                case 'core':
                for (let i in courseArr) {
                if (courseArr[i].isMajor()) {
                    
                    document.getElementById(idName).innerHTML += writeCourseHTMLTable(courseArr[i], term);
                    
                }}break;
                case 'elective':
                for (let i in courseArr) {
                if (courseArr[i].isElective()) {
                    document.getElementById(idName).innerHTML += writeCourseHTMLTable(courseArr[i], term, courseArr[i].courseNUM);
                }}break;
        
                case 'genEd':
                for (let i in courseArr) {
                if (courseArr[i].isGenEd()) {
                    document.getElementById(idName).innerHTML += writeCourseHTMLTable(courseArr[i], term);
                }}
        }
    }
   
    if (term == 'winter') {
        if (courseType == 'core') {
            for (let i in courseArr) {
                if (courseArr[i].isMajor()) {
                    document.getElementById(idName).innerHTML += writeCourseHTMLTable(courseArr[i], term);
                }
            }
        }
        if (courseType == 'elective') {
            for (let i in courseArr) {
                if (courseArr[i].isElective()) {
                    document.getElementById(idName).innerHTML += writeCourseHTMLTable(courseArr[i], term);
                }
            }
        }
        if (courseType == 'genEd') {
            for (let i in courseArr) {
                if (courseArr[i].isGenEd()) {
                    document.getElementById(idName).innerHTML += writeCourseHTMLTable(courseArr[i], term);
                }
            }
        }

    }
    if (term == 'spring') {
        if (courseType == 'core') {
            for (let i in courseArr) {
                if (courseArr[i].isMajor()) {
                    document.getElementById(idName).innerHTML += writeCourseHTMLTable(courseArr[i], term);
                } else {
                    continue;
                }
            }
        }
        if (courseType == 'elective') {
            for (let i in courseArr) {
                if (courseArr[i].isElective()) {
                    document.getElementById(idName).innerHTML += writeCourseHTMLTable(courseArr[i], term);
                }
            }
        }
        if (courseType == 'genEd') {
            for (let i in courseArr) {
                if (courseArr[i].isGenEd()) {
                    document.getElementById(idName).innerHTML += writeCourseHTMLTable(courseArr[i], term);
                }
            }
        }

    }
    if (term == 'summer') {
        if (courseType == 'core') {
            for (let i in courseArr) {
                if (courseArr[i].isMajor()) {
                    document.getElementById(idName).innerHTML += writeCourseHTMLTable(courseArr[i], term);
                } else {
                    continue;
                }
            }
        }
        if (courseType == 'elective') {
            for (let i in courseArr) {
                if (courseArr[i].isElective()) {
                    document.getElementById(idName).innerHTML += writeCourseHTMLTable(courseArr[i], term);
                }
            }
        }
        if (courseType == 'genEd') {
            for (let i in courseArr) {
                if (courseArr[i].isGenEd()) {
                    document.getElementById(idName).innerHTML += writeCourseHTMLTable(courseArr[i], term);
                }
            }
        }

    }
}

function writeCourseHTMLTable(x, term) {
   
    
    if (term == 'fall') { 
        
        return "<div class=" + "course-selection" + "><table><tbody><tr><td>"+x.courseNUM + "</td><td>" + x.courseName + "</td><td>" + x.fallHours + "</td><td>" + x.fallDays + "</td><td>" + x.fallLocation + "</td><td>" + x.winterFaculty + "</td><td><button classx.courseNUM='register-Button' value="+x.courseNUM+" id="+x.courseNUM+" onClick=registerCourseToProgramEvl('fall','"+x.courseNUM+"')>Register: "+x.courseNUM+"</button></td></tr></tbody></table></div>";
    }
    if (term == 'winter') {
        return "<div class=" + "course-selection" + "><table><tbody><tr><td>" +x.courseNUM + "</td><td>" + x.courseName + "</td><td>" + x.winterHours + "</td><td>" + x.winterDays + "</td><td>" + x.winterLocation + "</td><td>" + x.winterFaculty + "</td><td><button class='register-Button' value="+x.courseNUM+" id="+x.courseNUM+"onClick=registerCourseToProgramEvl('winter','"+x.courseNUM+"') >Register</button></td></tr></tbody></table></div>";
    }
    if (term == 'spring') {
        return "<div class=" + "course-selection" + "><table><tbody><tr><td>" +x.courseNUM + "</td><td>" + x.courseName + "</td><td>" + x.springHours + "</td><td>" + x.springDays + "</td><td>" + x.springLocation + "</td><td>" + x.springFaculty + "</td><td><button class='register-Button' value="+x.courseNUM+" id="+x.courseNUM+"onClick=registerCourseToProgramEvl('spring','"+x.courseNUM+"')>Register</button></td></tr></tbody></table></div>";
    }
    if (term == 'summer') {
        return "<div class=" + "course-selection" + "><table><tbody><tr><td>" +x.courseNUM + "</td><td>" + x.courseName + "</td><td>" + x.summerHours + "</td><td>" + x.summerDays + "</td><td>" + x.summerLocation + "</td><td>" + x.summerFaculty + "</td><td><button class='register-Button' value="+x.courseNUM+" id="+x.courseNUM+" onClick=registerCourseToProgramEvl('summer','"+x.courseNUM+"') >Register</button></td></tr></tbody></table></div>";
    }
}


function registerCourseToProgramEvl(term , classNumber)
    {
        alert("Issue: "+classNumber.toString());
        
        var NameX = term +"-course-list";
        if(term =='fall' && academicYear1.terms.FA.course1 == null)
            {
                academicYear1.terms.FA.course1=classNumber;
                addHTMLCourseToSchedule(term, classNumber);
                document.getElementById(NameX).innerHTML = "";
            }
        else if(term =='fall' && academicYear1.terms.FA.course1 != null)
            {
               academicYear1.terms.FA.course2=classNumber;
                addHTMLCourseToSchedule(term, classNumber);
                document.getElementById(NameX).innerHTML = "";
            }
        else if(term =='fall' && academicYear1.terms.FA.course2 == null)
            {
               academicYear1.terms.FA.course3=classNumber;
                addHTMLCourseToSchedule(term, classNumber);
                document.getElementById(NameX).innerHTML = "";
            }
        else if(term =='fall' && academicYear1.terms.FA.course3 == null)
            {
               academicYear1.terms.FA.course4=classNumber;
                addHTMLCourseToSchedule(term, classNumber);
                document.getElementById(NameX).innerHTML = "";
            }
        else if(term =='fall' && academicYear1.terms.FA.course4 == null)
            {
               academicYear1.terms.FA.course5=classNumber;
                addHTMLCourseToSchedule(term, classNumber);
                document.getElementById(NameX).innerHTML = "";
            }
        if(term =='fall' && academicYear1.terms.FA.course5 != null)
            {
               alert("Courses Full!");
            }
        
        if(term =='winter' && academicYear1.terms.WI.course1 != null)
            {
               academicYear1.terms.WI.course1=classNumber;
                addHTMLCourseToSchedule(term, classNumber);
                document.getElementById(NameX).innerHTML = "";
                
            }
        if(term =='winter' && academicYear1.terms.WI.course1 == null)
            {
               academicYear1.terms.WI.course2=classNumber;
                addHTMLCourseToSchedule(term, classNumber);
                document.getElementById(NameX).innerHTML = "";
            }
        if(term =='winter' && academicYear1.terms.WI.course2 == null)
            {
               academicYear1.terms.WI.course3=classNumber;
                addHTMLCourseToSchedule(term, classNumber);
                document.getElementById(NameX).innerHTML = "";
            }
        if(term =='winter' && academicYear1.terms.WI.course3 == null)
            {
               academicYear1.terms.WI.course4=classNumber;
                addHTMLCourseToSchedule(term, classNumber);
                document.getElementById(NameX).innerHTML = "";
            }
        if(term =='winter' && academicYear1.terms.WI.course4 == null)
            {
               academicYear1.terms.WI.course5=classNumber;
                addHTMLCourseToSchedule(term, classNumber);
                document.getElementById(NameX).innerHTML = "";
            }
        if(term =='winter' && academicYear1.terms.WI.course5 != null)
            {
               alert("Courses Full!");
            }
        
        if(term =='spring' && academicYear1.terms.SP.course1 != null)
            {
               academicYear1.terms.SP.course1=classNumber;
                addHTMLCourseToSchedule(term, classNumber);
                document.getElementById(NameX).innerHTML = "";
            }
        if(term =='spring' && academicYear1.terms.SP.course1 == null)
            {
               academicYear1.terms.SP.course2=classNumber;
                addHTMLCourseToSchedule(term, classNumber);
                document.getElementById(NameX).innerHTML = "";
            }
        if(term =='spring' && academicYear1.terms.SP.course2 == null)
            {
               academicYear1.terms.SP.course3=classNumber;
                addHTMLCourseToSchedule(term, classNumber);
                document.getElementById(NameX).innerHTML = "";
            }
        if(term =='spring' && academicYear1.terms.SP.course3 == null)
            {
               academicYear1.terms.SP.course4=classNumber;
                addHTMLCourseToSchedule(term, classNumber);
                document.getElementById(NameX).innerHTML = "";
            }
        if(term =='spring' && academicYear1.terms.SP.course4 == null)
            {
               academicYear1.terms.SP.course5=classNumber;
                addHTMLCourseToSchedule(term, classNumber);
                document.getElementById(NameX).innerHTML = "";
            }
        if(term =='spring' && academicYear1.terms.SP.course5 != null)
            {
               alert("Courses Full!");
            }
        
        if(term =='summer' && academicYear1.terms.SU.course1 != null)
            {
               academicYear1.terms.SU.course1=classNumber;
                addHTMLCourseToSchedule(term, classNumber);
                document.getElementById(NameX).innerHTML = "";
            }
        if(term =='summer' && academicYear1.terms.SU.course1 == null)
            {
               academicYear1.terms.SU.course2=classNumber;
                addHTMLCourseToSchedule(term, classNumber);
                document.getElementById(NameX).innerHTML = "";
            }
        if(term =='summer' && academicYear1.terms.SU.course2 == null)
            {
               academicYear1.terms.SU.course3=classNumber;
                addHTMLCourseToSchedule(term, classNumber);
                document.getElementById(NameX).innerHTML = "";
            }
        if(term =='summer' && academicYear1.terms.SU.course3 == null)
            {
               academicYear1.terms.SU.course4=classNumber;
                addHTMLCourseToSchedule(term, classNumber);
                document.getElementById(NameX).innerHTML = "";
            }
        if(term =='summer' && academicYear1.terms.SU.course4 == null)
            {
               academicYear1.terms.SU.course5=classNumber;
                addHTMLCourseToSchedule(term, classNumber);
                document.getElementById(NameX).innerHTML = "";
            }
        if(term =='summer' && academicYear1.terms.SU.course5 != null)
            {
               alert("Courses Full!");
            }
        

    }
function addHTMLCourseToSchedule(term,x)
{
    var Name = term+"-registered-course-list";
    
    
    for(let i=0; i<= courseArr.length-1;i++)
        {
            if(courseArr[i].courseNUM==x)
                {
                    document.getElementById(Name).innerHTML += "<div class='one-course'><div class='course-visualization-box'><section class='course-title'> <strong>"+courseArr[i].courseNUM+"</strong> </section><section class='course-title'> <strong>"+courseArr[i].courseName+"</strong> </section></div><div class='course-visualization-box'><section class='course-title'> "+courseArr[i].fallHours+" & "+courseArr[i].fallDays+" </section><section class='course-title'> "+courseArr[i].fallLocation+" </section></div> </div>";
                }
        }
        

}


function termPromptForClassesON()
{
    document.getElementById("fall-inquiry").style.display = "block";
}

function termPromptForClassesOFF()
{
    document.getElementById("fall-inquiry").style.display = "none";
}

function getTable(term, courseType)
{
    var Name = term+"programEvaluationCourseSelectionTableDiv";
 
    if(term=='fall')
        {
            if(courseType=='genEd')
                {
                    for( let i in courseArr)
                        {
                             document.getElementById(Name).innerHTML += writeCourseHTMLTable(courseArr[i], term);
                        }
                   
                }
        }
  
    
    
    
}

function programEvaluationCourseSelectionTableOFF()
{
   document.getElementById("fall-programEvaluation-CourseSelectionTableDiv").style.display = "block";
}










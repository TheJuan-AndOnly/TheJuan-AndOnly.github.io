// JavaScript Document



function addNormalClass()
{
    document.getElementById("fall-course").innerHTML="You have added a non major course.";
}

function addMajorClass()
{
    document.getElementById("fall-course").innerHTML="You have added a  Major course.";
}

function addGenEdClass()
{
    document.getElementById("fall-course").innerHTML="You have added a GEN Ed course.";
}
var arr = [];
//csc-140
arr[0] =
    {
        isMajor: function()
        {
            return true;
        },
        isGenEd: function()
        {
            return false;
        },
        isElective: function()
        {
            return false;
        },
        
        courseNUM:"140",
        coursename:"Intro to Computational Problem Solving",
        
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
        
        fallSchedule : function()
        {
            return this.courseNUM + "<br>" + 
            this.coursename + "<br>" + 
            this.fallHour + "<br>" + 
            this.fallDays + "<br>" + 
            this.fallLocation + "<br>" + 
            this.fallFaculty;
        },

        winterSchedule : function()
        {
            return this.courseNUM + "<br>" +
            this.coursename + "<br>" +
            this.winterHour + "<br>" +
            this.winterDays + "<br>" +
            this.winterLocation + "<br>" +
            this.winterFaculty;
        },

        springSchedule : function()
        {
            return this.courseNUM + "<br>" +
            this.coursename + "<br>" +
            this.springHour + "<br>" +
            this.springDays + "<br>" +
            this.springLocation + "<br>" +
            this.springFaculty;
        }
        
        
    };
//CSC 160 - Computer Science I
arr[1] =
    {
        isMajor: function()
        {
            return true;
        },
        isGenEd: function()
        {
            return false;
        },
        isElective: function()
        {
            return false;
        },
        
        courseNUM:"160",
        coursename:"Computer Sceince 1",
        
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
        
        fallSchedule : function()
        {
            return this.courseNUM + "<br>" + 
            this.coursename + "<br>" + 
            this.fallHour + "<br>" + 
            this.fallDays + "<br>" + 
            this.fallLocation + "<br>" + 
            this.fallFaculty;
        },

        winterSchedule : function()
        {
            return this.courseNUM + "<br>" +
            this.coursename + "<br>" +
            this.winterHour + "<br>" +
            this.winterDays + "<br>" +
            this.winterLocation + "<br>" +
            this.winterFaculty;
        },

        springSchedule : function()
        {
            return this.courseNUM + "<br>" +
            this.coursename + "<br>" +
            this.springHour + "<br>" +
            this.springDays + "<br>" +
            this.springLocation + "<br>" +
            this.springFaculty;
        }
        
        
    };
//CSC 161 - Computer Science II
arr[2] =
    {
        isMajor: function()
        {
            return true;
        },
        isGenEd: function()
        {
            return false;
        },
        isElective: function()
        {
            return false;
        },
        
        courseNUM:"161",
        coursename:"Computer Sceince 2",
        
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
        
        fallSchedule : function()
        {
            return this.courseNUM + "<br>" + 
            this.coursename + "<br>" + 
            this.fallHour + "<br>" + 
            this.fallDays + "<br>" + 
            this.fallLocation + "<br>" + 
            this.fallFaculty;
        },

        winterSchedule : function()
        {
            return this.courseNUM + "<br>" +
            this.coursename + "<br>" +
            this.winterHour + "<br>" +
            this.winterDays + "<br>" +
            this.winterLocation + "<br>" +
            this.winterFaculty;
        },

        springSchedule : function()
        {
            return this.courseNUM + "<br>" +
            this.coursename + "<br>" +
            this.springHour + "<br>" +
            this.springDays + "<br>" +
            this.springLocation + "<br>" +
            this.springFaculty;
        }
        
        
    };
//CSC 210 - Data Structures and Algorithms
arr[3] =
    {
        isMajor: function()
        {
            return true;
        },
        isGenEd: function()
        {
            return false;
        },
        isElective: function()
        {
            return false;
        },
        
        courseNUM:"210",
        coursename:"Data Structures and Algorithms",
        
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
        
        fallSchedule : function()
        {
            return this.courseNUM + "<br>" + 
            this.coursename + "<br>" + 
            this.fallHour + "<br>" + 
            this.fallDays + "<br>" + 
            this.fallLocation + "<br>" + 
            this.fallFaculty;
        },

        winterSchedule : function()
        {
            return this.courseNUM + "<br>" +
            this.coursename + "<br>" +
            this.winterHour + "<br>" +
            this.winterDays + "<br>" +
            this.winterLocation + "<br>" +
            this.winterFaculty;
        },

        springSchedule : function()
        {
            return this.courseNUM + "<br>" +
            this.coursename + "<br>" +
            this.springHour + "<br>" +
            this.springDays + "<br>" +
            this.springLocation + "<br>" +
            this.springFaculty;
        }
        
        
    };
//CSC 220 - Computer System Concepts
arr[4] =
    {
        isMajor: function()
        {
            return true;
        },
        isGenEd: function()
        {
            return false;
        },
        isElective: function()
        {
            return false;
        },
        
        courseNUM:"220",
        coursename:"Computer Systems Concepts",
        
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
        
        fallSchedule : function()
        {
            return this.courseNUM + "<br>" + 
            this.coursename + "<br>" + 
            this.fallHour + "<br>" + 
            this.fallDays + "<br>" + 
            this.fallLocation + "<br>" + 
            this.fallFaculty;
        },

        winterSchedule : function()
        {
            return this.courseNUM + "<br>" +
            this.coursename + "<br>" +
            this.winterHour + "<br>" +
            this.winterDays + "<br>" +
            this.winterLocation + "<br>" +
            this.winterFaculty;
        },

        springSchedule : function()
        {
            return this.courseNUM + "<br>" +
            this.coursename + "<br>" +
            this.springHour + "<br>" +
            this.springDays + "<br>" +
            this.springLocation + "<br>" +
            this.springFaculty;
        }
        
        
    };
//CSC 230 - Discrete Structures I
arr[5] =
    {
        isMajor: function()
        {
            return true;
        },
        isGenEd: function()
        {
            return false;
        },
        isElective: function()
        {
            return false;
        },
        
        courseNUM:"230",
        coursename:"Discrete Structures",
        
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
        
        fallSchedule : function()
        {
            return this.courseNUM + "<br>" + 
            this.coursename + "<br>" + 
            this.fallHour + "<br>" + 
            this.fallDays + "<br>" + 
            this.fallLocation + "<br>" + 
            this.fallFaculty;
        },

        winterSchedule : function()
        {
            return this.courseNUM + "<br>" +
            this.coursename + "<br>" +
            this.winterHour + "<br>" +
            this.winterDays + "<br>" +
            this.winterLocation + "<br>" +
            this.winterFaculty;
        },

        springSchedule : function()
        {
            return this.courseNUM + "<br>" +
            this.coursename + "<br>" +
            this.springHour + "<br>" +
            this.springDays + "<br>" +
            this.springLocation + "<br>" +
            this.springFaculty;
        }
        
        
    };
//CSC 306 - Software Development in C++
arr[6] =
    {
        isMajor: function()
        {
            return true;
        },
        isGenEd: function()
        {
            return false;
        },
        isElective: function()
        {
            return false;
        },
        
        courseNUM:"306",
        coursename:"Software Development in C++",
        
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
        
        fallSchedule : function()
        {
            return this.courseNUM + "<br>" + 
            this.coursename + "<br>" + 
            this.fallHour + "<br>" + 
            this.fallDays + "<br>" + 
            this.fallLocation + "<br>" + 
            this.fallFaculty;
        },

        winterSchedule : function()
        {
            return this.courseNUM + "<br>" +
            this.coursename + "<br>" +
            this.winterHour + "<br>" +
            this.winterDays + "<br>" +
            this.winterLocation + "<br>" +
            this.winterFaculty;
        },

        springSchedule : function()
        {
            return this.courseNUM + "<br>" +
            this.coursename + "<br>" +
            this.springHour + "<br>" +
            this.springDays + "<br>" +
            this.springLocation + "<br>" +
            this.springFaculty;
        }
        
        
    };
//CSC 495 - Capstone Seminar
arr[7] =
    {
        isMajor: function()
        {
            return false;
        },
        isGenEd: function()
        {
            return false;
        },
        isElective: function()
        {
            return true;
        },
        
        courseNUM:"CSC 494",
        coursename:"Capstone Seminar",
        
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
        
        fallSchedule : function()
        {
            return this.courseNUM + "<br>" + 
            this.coursename + "<br>" + 
            this.fallHour + "<br>" + 
            this.fallDays + "<br>" + 
            this.fallLocation + "<br>" + 
            this.fallFaculty;
        },

        winterSchedule : function()
        {
            return this.courseNUM + "<br>" +
            this.coursename + "<br>" +
            this.winterHour + "<br>" +
            this.winterDays + "<br>" +
            this.winterLocation + "<br>" +
            this.winterFaculty;
        },

        springSchedule : function()
        {
            return this.courseNUM + "<br>" +
            this.coursename + "<br>" +
            this.springHour + "<br>" +
            this.springDays + "<br>" +
            this.springLocation + "<br>" +
            this.springFaculty;
        }
        
        
    };
//CSC 215 - Introduction to Web Programming
arr[8] =
    {
        isMajor: function()
        {
            return false;
        },
        isGenEd: function()
        {
            return false;
        },
        isElective: function()
        {
            return true;
        },
        
        courseNUM:"215",
        coursename:"Intro to Web Programming",
        
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
        
        fallSchedule : function()
        {
            return this.courseNUM + "<br>" + 
            this.coursename + "<br>" + 
            this.fallHour + "<br>" + 
            this.fallDays + "<br>" + 
            this.fallLocation + "<br>" + 
            this.fallFaculty;
        },

        winterSchedule : function()
        {
            return this.courseNUM + "<br>" +
            this.coursename + "<br>" +
            this.winterHour + "<br>" +
            this.winterDays + "<br>" +
            this.winterLocation + "<br>" +
            this.winterFaculty;
        },

        springSchedule : function()
        {
            return this.courseNUM + "<br>" +
            this.coursename + "<br>" +
            this.springHour + "<br>" +
            this.springDays + "<br>" +
            this.springLocation + "<br>" +
            this.springFaculty;
        }
        
        
    };
//CSC 415 - Web Applications
arr[9] =
    {
        isMajor: function()
        {
            return false;
        },
        isGenEd: function()
        {
            return false;
        },
        isElective: function()
        {
            return true;
        },
        
        courseNUM:"CSC 415",
        coursename:"Web Applications",
        
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
        
        fallSchedule : function()
        {
            return this.courseNUM + "<br>" + 
            this.coursename + "<br>" + 
            this.fallHour + "<br>" + 
            this.fallDays + "<br>" + 
            this.fallLocation + "<br>" + 
            this.fallFaculty;
        },

        winterSchedule : function()
        {
            return this.courseNUM + "<br>" +
            this.coursename + "<br>" +
            this.winterHour + "<br>" +
            this.winterDays + "<br>" +
            this.winterLocation + "<br>" +
            this.winterFaculty;
        },

        springSchedule : function()
        {
            return this.courseNUM + "<br>" +
            this.coursename + "<br>" +
            this.springHour + "<br>" +
            this.springDays + "<br>" +
            this.springLocation + "<br>" +
            this.springFaculty;
        }
        
        
    };
//CSC 436 - Human Computer Interaction
arr[10] =
    {
        isMajor: function()
        {
            return false;
        },
        isGenEd: function()
        {
            return false;
        },
        isElective: function()
        {
            return true;
        },
        
        courseNUM:"436",
        coursename:"Human Computer Interaction",
        
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
        
        fallSchedule : function()
        {
            return this.courseNUM + "<br>" + 
            this.coursename + "<br>" + 
            this.fallHour + "<br>" + 
            this.fallDays + "<br>" + 
            this.fallLocation + "<br>" + 
            this.fallFaculty;
        },

        winterSchedule : function()
        {
            return this.courseNUM + "<br>" +
            this.coursename + "<br>" +
            this.winterHour + "<br>" +
            this.winterDays + "<br>" +
            this.winterLocation + "<br>" +
            this.winterFaculty;
        },

        springSchedule : function()
        {
            return this.courseNUM + "<br>" +
            this.coursename + "<br>" +
            this.springHour + "<br>" +
            this.springDays + "<br>" +
            this.springLocation + "<br>" +
            this.springFaculty;
        }
        
        
    };
//CSC 453 - Systems Analysis
arr[11] =
    {
        isMajor: function()
        {
            return false;
        },
        isGenEd: function()
        {
            return false;
        },
        isElective: function()
        {
            return true;
        },
        
        courseNUM:"453",
        coursename:"Systems Analysis",
        
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
        
        fallSchedule : function()
        {
            return this.courseNUM + "<br>" + 
            this.coursename + "<br>" + 
            this.fallHour + "<br>" + 
            this.fallDays + "<br>" + 
            this.fallLocation + "<br>" + 
            this.fallFaculty;
        },

        winterSchedule : function()
        {
            return this.courseNUM + "<br>" +
            this.coursename + "<br>" +
            this.winterHour + "<br>" +
            this.winterDays + "<br>" +
            this.winterLocation + "<br>" +
            this.winterFaculty;
        },

        springSchedule : function()
        {
            return this.courseNUM + "<br>" +
            this.coursename + "<br>" +
            this.springHour + "<br>" +
            this.springDays + "<br>" +
            this.springLocation + "<br>" +
            this.springFaculty;
        }
        
        
    };
//CSC 460 - Database Management Systems
arr[12] =
    {
        isMajor: function()
        {
            return false;
        },
        isGenEd: function()
        {
            return false;
        },
        isElective: function()
        {
            return true;
        },
        
        courseNUM:"460",
        coursename:"Database Managment Systems",
        
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
        
        fallSchedule : function()
        {
            return this.courseNUM + "<br>" + 
            this.coursename + "<br>" + 
            this.fallHour + "<br>" + 
            this.fallDays + "<br>" + 
            this.fallLocation + "<br>" + 
            this.fallFaculty;
        },

        winterSchedule : function()
        {
            return this.courseNUM + "<br>" +
            this.coursename + "<br>" +
            this.winterHour + "<br>" +
            this.winterDays + "<br>" +
            this.winterLocation + "<br>" +
            this.winterFaculty;
        },

        springSchedule : function()
        {
            return this.courseNUM + "<br>" +
            this.coursename + "<br>" +
            this.springHour + "<br>" +
            this.springDays + "<br>" +
            this.springLocation + "<br>" +
            this.springFaculty;
        }
        
        
    };
//CSC 464 - Data Mining
arr[13] =
    {
        isMajor: function()
        {
            return false;
        },
        isGenEd: function()
        {
            return false;
        },
        isElective: function()
        {
            return true;
        },
        
        courseNUM:"CSC 464",
        coursename:"Data Mining",
        
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
        
        fallSchedule : function()
        {
            return this.courseNUM + "<br>" + 
            this.coursename + "<br>" + 
            this.fallHour + "<br>" + 
            this.fallDays + "<br>" + 
            this.fallLocation + "<br>" + 
            this.fallFaculty;
        },

        winterSchedule : function()
        {
            return this.courseNUM + "<br>" +
            this.coursename + "<br>" +
            this.winterHour + "<br>" +
            this.winterDays + "<br>" +
            this.winterLocation + "<br>" +
            this.winterFaculty;
        },

        springSchedule : function()
        {
            return this.courseNUM + "<br>" +
            this.coursename + "<br>" +
            this.springHour + "<br>" +
            this.springDays + "<br>" +
            this.springLocation + "<br>" +
            this.springFaculty;
        }
        
        
    };




function writeCourseHTMLTable(x)
    {
       return "<div class="+"course-selection"+"><table><tbody><tr><td>"+x.courseNUM+"</td><td>"+x.coursename+"</td><td>"+x.fallHour+"</td><td>"+x.fallDays+"</td><td>"+x.fallLocation+"</td><td>"+x.springFaculty+"</td><td><button>Register</button></td></tr></tbody></table></div>";
    }
    
function writeCourse()
{
    for(let i = 0 ; i <= arr.length-1 ; i++)
        {
            document.getElementById("test").innerHTML+=writeCourseHTMLTable(arr[i]);
        }  
}
    




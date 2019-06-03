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
                return false;
            }
    }
    this.isGenEd = function()
    {
        if (courseType=="genEd")
            {
                return false;
            }
    }
    this.isElective = function()
    {
        if (courseType=="elective")
            {
                return false;
            }
    }
    this.isElectiveCom = function()
    {
        if (courseType=="electiveCom")
            {
                return false;
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
var ARB101 = new course("genEd", "ARB101","Arabic - 101",3, "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs")
var ARB102 = new course("genEd", "ARB102","Arabic - 102",3, "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs")
var ARB103 = new course("genEd", "ARB103","Arabic - 103",3, "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs")
var ARB201 = new course("genEd", "ARB201","Arabic - 201",3, "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs")
var ARB202 = new course("genEd", "ARB202","Arabic - 202",3, "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs")
var ARB203 = new course("genEd", "ARB203","Arabic - 203",3, "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs",
                       "9:00am - 10:00am", " M W F", "WSC-120", "Proferssor Dr. Mr/Mrs")


//assigning course type values to courses
ARB101.isGenEd=true;
ARB102.isGenEd=true;
ARB103.isGenEd=true;
ARB201.isGenEd=true;
ARB202.isGenEd=true;
ARB203.isGenEd=true;

CSC140.isMajor=true;
CSC160.isMajor=true;
CSC161.isMajor=true;
CSC210.isMajor=true;
CSC220.isMajor=true;
CSC230.isMajor=true;
CSC306.isMajor=true;
CSC495.isMajor=true;

CSC215.isElective=true;
CSC415.isElective=true;
CSC453.isElective=true;
CSC436.isElective=true;
CSC460.isElective=true;
CSC464.isElective=true;

COM100.isElectiveCom=true;
COM200.isElectiveCom=true;
COM214.isElectiveCom=true;
COM230.isElectiveCom=true;
ENG256.isElectiveCom=true;
IFS320.isElectiveCom=true;
LEV230.isElectiveCom=true;
MED200.isElectiveCom=true;

//pushing all values to array of courses for search purposes
courseArr.push(CSC140,CSC160,CSC161,CSC210,CSC215,CSC220,CSC230,CSC306,CSC415,CSC436,CSC453,CSC460,CSC464,CSC495,COM100,COM200,COM214,COM230,ENG256,IFS320,LEV230,MED200,ARB101,ARB102,ARB103,ARB201,ARB202,ARB203);

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

//preliminary function to filter courses by term  & course type
function getTerm(term, courseType) 
{
    
    let idName = term+"-course-list";
    
    if (term == 'fall') {
        if(courseType=="core")
            {
                for (let i in courseArr) 
                {
                    if (courseArr[i].isMajor==true) 
                    {
                        document.getElementById(idName).innerHTML += writeCourseHTMLTable(courseArr[i], term);
                    }
                }
        
            }
        if(courseType=="genEd")
            {
                for (let i in courseArr) 
                {
                    if (courseArr[i].isGenEd==true) 
                    {
                        document.getElementById(idName).innerHTML += writeCourseHTMLTable(courseArr[i], term);
                    }
                }
        
            }
        if(courseType=="elective")
            {
                for (let i in courseArr) 
                {
                    if (courseArr[i].isElective==true) 
                    {
                        document.getElementById(idName).innerHTML += writeCourseHTMLTable(courseArr[i], term);
                    }
                }
        
            }
    }
   

    if (term == 'winter') {
        if(courseType=="core")
            {
                for (let i in courseArr) 
                {
                    if (courseArr[i].isMajor==true) 
                    {
                        document.getElementById(idName).innerHTML += writeCourseHTMLTable(courseArr[i], term);
                    }
                }
        
            }
        if(courseType=="genEd")
            {
                for (let i in courseArr) 
                {
                    if (courseArr[i].isGenEd==true) 
                    {
                        document.getElementById(idName).innerHTML += writeCourseHTMLTable(courseArr[i], term);
                    }
                }
        
            }
        if(courseType=="elective")
            {
                for (let i in courseArr) 
                {
                    if (courseArr[i].isElective==true) 
                    {
                        document.getElementById(idName).innerHTML += writeCourseHTMLTable(courseArr[i], term);
                    }
                }
        
            }
    }
    if (term == 'spring') {
        if(courseType=="core")
            {
                for (let i in courseArr) 
                {
                    if (courseArr[i].isMajor==true) 
                    {
                        document.getElementById(idName).innerHTML += writeCourseHTMLTable(courseArr[i], term);
                    }
                }
        
            }
        if(courseType=="genEd")
            {
                for (let i in courseArr) 
                {
                    if (courseArr[i].isGenEd==true) 
                    {
                        document.getElementById(idName).innerHTML += writeCourseHTMLTable(courseArr[i], term);
                    }
                }
        
            }
        if(courseType=="elective")
            {
                for (let i in courseArr) 
                {
                    if (courseArr[i].isElective==true) 
                    {
                        document.getElementById(idName).innerHTML += writeCourseHTMLTable(courseArr[i], term);
                    }
                }
        
            }
    }
   
    if (term == 'summer') {
        if(courseType=="core")
            {
                for (let i in courseArr) 
                {
                    if (courseArr[i].isMajor==true) 
                    {
                        document.getElementById(idName).innerHTML += writeCourseHTMLTable(courseArr[i], term);
                    }
                }
        
            }
        if(courseType=="genEd")
            {
                for (let i in courseArr) 
                {
                    if (courseArr[i].isGenEd==true) 
                    {
                        document.getElementById(idName).innerHTML += writeCourseHTMLTable(courseArr[i], term);
                    }
                }
        
            }
        if(courseType=="elective")
            {
                for (let i in courseArr) 
                {
                    if (courseArr[i].isElective==true) 
                    {
                        document.getElementById(idName).innerHTML += writeCourseHTMLTable(courseArr[i], term);
                    }
                }
        
            }
    }
   

   
}

//displays HTML table for user visualization and registration purposes
function writeCourseHTMLTable(x, term)
{
   
    
    if (term == 'fall') { 
        
        return "<div class=" + "course-selection" + "><table><tbody><tr><td class='course-selection-Name'>"+x.courseNUM + "</td><td class='course-selection-Name'>" + x.courseName + "</td><td>" + x.fallHours + "</td><td>" + x.fallDays + "</td><td>" + x.fallLocation + "</td><td>" + x.winterFaculty + "</td><td><button classx.courseNUM='register-Button' value="+x.courseNUM+" id="+x.courseNUM+" onClick=registerCourseToProgramEvl('fall','"+x.courseNUM+"')>Register: "+x.courseNUM+"</button></td></tr></tbody></table></div>";
    }
    if (term == 'winter') {
        return "<div class=" + "course-selection" + "><table><tbody><tr><td class=''>" +x.courseNUM + "</td><td class='course-selection-Name'>" + x.courseName + "</td><td>" + x.winterHours + "</td><td>" + x.winterDays + "</td><td>" + x.winterLocation + "</td><td>" + x.winterFaculty + "</td><td><button class='register-Button' value="+x.courseNUM+" id="+x.courseNUM+"onClick=registerCourseToProgramEvl('winter','"+x.courseNUM+"') >Register</button></td></tr></tbody></table></div>";
    }
    if (term == 'spring') {
        return "<div class=" + "course-selection" + "><table><tbody><tr><td class=''>" +x.courseNUM + "</td><td class='course-selection-Name'>" + x.courseName + "</td><td>" + x.springHours + "</td><td>" + x.springDays + "</td><td>" + x.springLocation + "</td><td>" + x.springFaculty + "</td><td><button class='register-Button' value="+x.courseNUM+" id="+x.courseNUM+"onClick=registerCourseToProgramEvl('spring','"+x.courseNUM+"')>Register</button></td></tr></tbody></table></div>";
    }
    if (term == 'summer') {
        return "<div class=" + "course-selection" + "><table><tbody><tr><td class=''>" +x.courseNUM + "</td><td class='course-selection-Name'>" + x.courseName + "</td><td>" + x.summerHours + "</td><td>" + x.summerDays + "</td><td>" + x.summerLocation + "</td><td>" + x.summerFaculty + "</td><td><button class='register-Button' value="+x.courseNUM+" id="+x.courseNUM+" onClick=registerCourseToProgramEvl('summer','"+x.courseNUM+"') >Register</button></td></tr></tbody></table></div>";
    }
}

//function to "register" for courses attached with the button from the HTML table
function registerCourseToProgramEvl(term , classNumber)
    {
        
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

//displays inforaiton regarding your registered courses on your scheduel after user has registered
function addHTMLCourseToSchedule(term,x)
{
    var Name = term+"-registered-course-list";
    
    
    for(let i=0; i<= courseArr.length-1;i++)
        {
            if(courseArr[i].courseNUM==x)
                {
                    document.getElementById(Name).innerHTML += "<div class='one-course'><div class='course-visualization-box'><section class='course-title'> <h4><strong>"+courseArr[i].courseNUM+"</strong></h4> </section><section class='course-title'> <h4><strong>"+courseArr[i].courseName+"</strong></h4> </section></div><div class='course-visualization-box'><section class='course-title'><strong>Time:</strong> "+courseArr[i].fallHours+" <strong></section><section class='course-title'>Days: </strong> "+courseArr[i].fallDays+" </section><section class='course-title'><strong>Location:</strong> "+courseArr[i].fallLocation+" </section><section class='course-title' id='course-credits'><strong>Credits:</strong> "+courseArr[i].credits+" </section></div> </div>";
                }
        }
        

}
//term selection window + buttons
function termPromptForClassesON(courseType)
{
    if(courseType=="genEd")
        {
            document.getElementById("term-inquiry-genEd").style.display = "block";
        }
    if(courseType=="core"){
        document.getElementById("term-inquiry-core").style.display = "block";
    }
    if(courseType=="elective"){
        document.getElementById("term-inquiry-elective").style.display = "block";
    }

}
//off window for term selection
function termPromptForClassesOFF(courseType)
{
     if(courseType=="genEd")
        {
            document.getElementById("term-inquiry-genEd").style.display = "none";
        }
    if(courseType=="core"){
        document.getElementById("term-inquiry-core").style.display = "none";
    }
    if(courseType=="elective"){
        document.getElementById("term-inquiry-elective").style.display = "none";
    }
}

//display different html table for Course Evaluation purposes
function getTable(term, courseType)
{
    var Name = term+"programEvaluationCourseSelectionTableDiv-"+courseType;
 
    if(term=='fall')
        {
            if(courseType=='genEd')
                {
                    for( let i in courseArr)
                        {
                           if(courseArr[i].isGenEd==true)
                           {
                               document.getElementById(Name).innerHTML += writeCourseHTMLTableProgramEval(courseArr[i], term);
                            }
                        }
                }
            if(courseType=='core')
                {
                    for( let i in courseArr)
                        {
                           if(courseArr[i].isMajor==true)
                           {
                               document.getElementById(Name).innerHTML += writeCourseHTMLTableProgramEval(courseArr[i], term);
                            }
                        }
                }
            if(courseType=='elective')
                {
                    for( let i in courseArr)
                        {
                           if(courseArr[i].isElective==true)
                           {
                               document.getElementById(Name).innerHTML += writeCourseHTMLTableProgramEval(courseArr[i], term);
                            }
                        }
                }
            if(courseType=='electiveCom')
                {
                    for( let i in courseArr)
                        {
                           if(courseArr[i].isElectiveCom==true)
                           {
                               document.getElementById(Name).innerHTML += writeCourseHTMLTableProgramEval(courseArr[i], term);
                            }
                        }
                }
        }
    if(term=='spring')
        {
            if(courseType=='genEd')
                {
                    for( let i in courseArr)
                        {
                           if(courseArr[i].isGenEd==true)
                           {
                               document.getElementById(Name).innerHTML += writeCourseHTMLTableProgramEval(courseArr[i], term);
                            }
                        }
                }
            if(courseType=='core')
                {
                    for( let i in courseArr)
                        {
                           if(courseArr[i].isMajor==true)
                           {
                               document.getElementById(Name).innerHTML += writeCourseHTMLTableProgramEval(courseArr[i], term);
                            }
                        }
                }
            if(courseType=='elective')
                {
                    for( let i in courseArr)
                        {
                           if(courseArr[i].isElective==true)
                           {
                               document.getElementById(Name).innerHTML += writeCourseHTMLTableProgramEval(courseArr[i], term);
                            }
                        }
                }
            if(courseType=='electiveCom')
                {
                    for( let i in courseArr)
                        {
                           if(courseArr[i].isElectiveCom==true)
                           {
                               document.getElementById(Name).innerHTML += writeCourseHTMLTableProgramEval(courseArr[i], term);
                            }
                        }
                }
        }
    if(term=='winter')
        {
            if(courseType=='genEd')
                {
                    for( let i in courseArr)
                        {
                           if(courseArr[i].isGenEd==true)
                           {
                               document.getElementById(Name).innerHTML += writeCourseHTMLTableProgramEval(courseArr[i], term);
                            }
                        }
                }
            if(courseType=='core')
                {
                    for( let i in courseArr)
                        {
                           if(courseArr[i].isMajor==true)
                           {
                               document.getElementById(Name).innerHTML += writeCourseHTMLTableProgramEval(courseArr[i], term);
                            }
                        }
                }
            if(courseType=='elective')
                {
                    for( let i in courseArr)
                        {
                           if(courseArr[i].isElective==true)
                           {
                               document.getElementById(Name).innerHTML += writeCourseHTMLTableProgramEval(courseArr[i], term);
                            }
                        }
                }
            if(courseType=='electiveCom')
                {
                    for( let i in courseArr)
                        {
                           if(courseArr[i].isElectiveCom==true)
                           {
                               document.getElementById(Name).innerHTML += writeCourseHTMLTableProgramEval(courseArr[i], term);
                            }
                        }
                }
        }
    if(term=='summer')
        {
            if(courseType=='genEd')
                {
                    for( let i in courseArr)
                        {
                           if(courseArr[i].isGenEd==true)
                           {
                               document.getElementById(Name).innerHTML += writeCourseHTMLTableProgramEval(courseArr[i], term);
                            }
                        }
                }
            if(courseType=='core')
                {
                    for( let i in courseArr)
                        {
                           if(courseArr[i].isMajor==true)
                           {
                               document.getElementById(Name).innerHTML += writeCourseHTMLTableProgramEval(courseArr[i], term);
                            }
                        }
                }
            if(courseType=='elective')
                {
                    for( let i in courseArr)
                        {
                           if(courseArr[i].isElective==true)
                           {
                               document.getElementById(Name).innerHTML += writeCourseHTMLTableProgramEval(courseArr[i], term);
                            }
                        }
                }
            if(courseType=='electiveCom')
                {
                    for( let i in courseArr)
                        {
                           if(courseArr[i].isElectiveCom==true)
                           {
                               document.getElementById(Name).innerHTML += writeCourseHTMLTableProgramEval(courseArr[i], term);
                            }
                        }
                }
        }
}
// table from course eval + new funtion
function writeCourseHTMLTableProgramEval(x, term) 
{     //var NameXX = term+"programEvaluationCourseSelectionTableDiv-"+courseType;
 
    if (term == 'fall') { 
        
        return "<div class=" + "course-selection" + "><table><tbody><tr><td>"+x.courseNUM + "</td><td>" + x.courseName + "</td><td>" + x.fallHours + "</td><td>" + x.fallDays + "</td><td>" + x.fallLocation + "</td><td>" + x.winterFaculty + "</td><td><button classx.courseNUM='register-Button' value="+x.courseNUM+" id="+x.courseNUM+" onClick=noTable('"+term+"programEvaluationCourseSelectionTableDiv-genEd') >Register: "+x.courseNUM+"</button></td></tr></tbody></table></div>";
    }
    if (term == 'winter') {
        return "<div class=" + "course-selection" + "><table><tbody><tr><td>" +x.courseNUM + "</td><td>" + x.courseName + "</td><td>" + x.winterHours + "</td><td>" + x.winterDays + "</td><td>" + x.winterLocation + "</td><td>" + x.winterFaculty + "</td><td><button class='register-Button' value="+x.courseNUM+" id="+x.courseNUM+" onClick=noTable('"+term+"programEvaluationCourseSelectionTableDiv-genEd') >Register</button></td></tr></tbody></table></div>";
    }
    if (term == 'spring') {
        return "<div class=" + "course-selection" + "><table><tbody><tr><td>" +x.courseNUM + "</td><td>" + x.courseName + "</td><td>" + x.springHours + "</td><td>" + x.springDays + "</td><td>" + x.springLocation + "</td><td>" + x.springFaculty + "</td><td><button class='register-Button' value="+x.courseNUM+" id="+x.courseNUM+" onClick=noTable('"+term+"programEvaluationCourseSelectionTableDiv-genEd') >Register</button></td></tr></tbody></table></div>";
    }
    if (term == 'summer') {
        return "<div class=" + "course-selection" + "><table><tbody><tr><td>" +x.courseNUM + "</td><td>" + x.courseName + "</td><td>" + x.summerHours + "</td><td>" + x.summerDays + "</td><td>" + x.summerLocation + "</td><td>" + x.summerFaculty + "</td><td><button class='register-Button' value="+x.courseNUM+" id="+x.courseNUM+" onClick=noTable('"+term+"programEvaluationCourseSelectionTableDiv-genEd') >Register</button></td></tr></tbody></table></div>";
    }
}
//notifies user that courses has been registred 
function turnGreen(id)
{
    document.getElementById(id).style.background="green";
}
//Program evaluation term selection OFF + course selction table ON
function programEvaluationCourseSelectionTableOFF(term,courseType)
{
    var Name = term+"programEvaluationCourseSelectionTableDiv-"+courseType;
    
    document.getElementById(Name).style.display = "block";
    document.getElementById("term-inquiry-genEd").style.display="none";
}
//program evaluation table off
function noTable(idName)
{
    document.getElementById(idName).style.display="none";
}

function hideDisclaimer()
{
    document.getElementById("disclaimer").style.display="none";
    document.getElementById("main").style.display="block";
    document.getElementById("nav").style.display="flex";
    
}









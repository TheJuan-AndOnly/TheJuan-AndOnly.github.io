// JavaScript Document
/*
class course
    {
        constructor(name)
        {
            this.name = name;
        }
        
    }
*/

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

/*
how can i use this funciton to be aplicable to all the other term 
sections so that I dont have to re-write the "getElementById"

is there a way for the function to just look inside the div it is in?


*/
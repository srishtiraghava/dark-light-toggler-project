functionscrolltocourses(){
const coursesSection=document.getElementByld("courses");
if(coursesSection){
coursesSection.scrollintoview({behaviour:"smoth"});
}else{
alert("Courses section coming soon!");
}
}
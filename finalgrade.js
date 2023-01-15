 
window.onload = function() {

    const finalGradeForm = document.querySelector(".inputFromTeacher");

    finalGradeForm.addEventListener("submit", function(event) {
        event.preventDefault();


        const projectsCompleted = document.getElementById("projectsCompleted").value;
        const examScore = document.getElementById("examScore").value;

        if (projectsCompleted !== "" && examScore !== "") {

            const finalGradeVariable = finalGrade(projectsCompleted, examScore);

            function finalGrade(projectsCompleted, examScore) {
                let gradeCheck = 0;
                let finalGradeReturn = "";
    
                if (projectsCompleted > 10 || examScore > 90) {
                    gradeCheck = 3;
                } else if (projectsCompleted >= 5 && examScore > 75) {
                    gradeCheck = 2;
                } else if (projectsCompleted > 2 && examScore > 50) {
                    gradeCheck = 1;
                }
    
                if (gradeCheck === 3) {
                    finalGradeReturn = "100";
                } else if (gradeCheck === 2) {
                    finalGradeReturn = "90";
                } else if (gradeCheck === 1) {
                    finalGradeReturn = "75";
                } else {
                    finalGradeReturn = "0";
                }
    
                
    
                return finalGradeReturn;
    
            }
    


        } else {
            
            document.querySelector(".spanToBeFilled").innerText = ("Please input a valid number for each entry.");
            document.querySelector(".hidden").removeAttribute("class");
        
        }



        document.querySelector(".spanToBeFilled").innerText = ("The student's final grade is: " + finalGradeVariable + "%");
        document.querySelector(".hidden").removeAttribute("class");


   });

}
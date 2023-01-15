window.onload = function() {

    const finalGradeForm = document.querySelector(".inputFromTeacher");
    const resetButton = document.querySelector(".resetButton");
    
    finalGradeForm.addEventListener("submit", function(event) {
        event.preventDefault();

        //////////////////////////////////////////////////////
        /////////////////////////////////////DECLARE VARIABLES


        let examScore = document.getElementById("examScore").value;
        let projectsCompleted = document.getElementById("projectsCompleted").value;
        let inputCheck = 0;
        let examScoreFloat = 0.99;
        let examScoreInt = 99;
        let finalGradeVariable = "";

        //////////////////////////////////////////////////////
        ///////////////////////////////////INPUT CHECK & MANIP

        //trim
        examScore = examScore.trim();

        //empty strings
        if (examScore === "" || projectsCompleted === "") {
            document.querySelector(".spanToBeFilled").innerText = "You cannot leave either field empty, please resubmit your inputs.";
            document.querySelector(".hidden").removeAttribute("class");
            document.querySelector(".hidden2").removeAttribute("class");
        } else if (examScore !== "" || projectsCompleted !== "") {
            inputCheck += 1;
        }


        //negative numbers
        if (((examScore * 10000) < 0 || (projectsCompleted * 10000) < 0) && inputCheck === 1) {
            document.querySelector(".spanToBeFilled").innerText = "Please use inputs that are positive numbers.";
            document.querySelector(".hidden").removeAttribute("class");
            document.querySelector(".hidden2").removeAttribute("class");
            inputCheck = 0;
        } else if ((examScore * 10000) > 0 || (projectsCompleted * 10000) > 0 && inputCheck === 1) {
            inputCheck += 1;
        }

        //valid float
        if ((examScore[0] === "." || (examScore[0] === "0" && examScore[1] === ".")) && inputCheck === 2) {
            examScoreFloat = parseFloat(examScore);
            examScoreInt = parseInt(examScoreFloat * 100);
            examScore = examScoreInt.toString();
        } 

        //invalid float
        examScore = Math.round(parseFloat(examScore));
        console.log(examScore);


        //greater than 100%
        if ((parseInt(examScore) > 100) && inputCheck === 2) {
            document.querySelector(".spanToBeFilled").innerText = "Please input an exam score that isn't over 100%.";
            document.querySelector(".hidden").removeAttribute("class");
            document.querySelector(".hidden2").removeAttribute("class");
            inputCheck = 0;
            
        } else if ((parseInt(examScore) < 100) && inputCheck === 2) {
            inputCheck += 1;
        }

        ///////////////////////////////////////////////////////
        /////////////////////////////////DECLARE GRADE FUNCTION

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

        ///////////////////////////////////////////////////////
        ////////////////////////////////////CALL GRADE FUNCTION

        if (inputCheck === 3) {
            finalGradeVariable = finalGrade(projectsCompleted, examScore);
            document.querySelector(".spanToBeFilled").innerText = ("The student's final grade is: " + finalGradeVariable + "%");
            document.querySelector(".hidden").removeAttribute("class");
            document.querySelector(".hidden2").removeAttribute("class");
        }

    });

    ///////////////////////////////////////////////////////
    ///////////////////////////////////////////RESET BUTTON

    resetButton.addEventListener("click", function(event) {
        document.getElementById("hidden").classList.add("hidden");
        document.querySelector("spanToBeFilled").innerText = "______";
    });





}
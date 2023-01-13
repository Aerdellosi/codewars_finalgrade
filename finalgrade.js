const projectsCompleted = 7;
const examScore = 55;

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
        finalGradeReturn = "final grade: 100";
    } else if (gradeCheck === 2) {
        finalGradeReturn = "final grade: 90";
    } else if (gradeCheck === 1) {
        finalGradeReturn = "final grade: 75";
    } else {
        finalGradeReturn = "final grade: 0";
    }

    return finalGradeReturn;

}

let finalGradeVariable = finalGrade(projectsCompleted, examScore);
console.log(finalGradeVariable);



getStudentsButton.addEventListener("click", async function () {
    studentCount = await window.EnrollmentContract.methods.studentCounter().call();
    console.log(studentCount);
    for (i = 0; i < studentCount; i++) {
        var student = await window.EnrollmentContract.methods.students(i).call();
        console.log(student);
    }
});
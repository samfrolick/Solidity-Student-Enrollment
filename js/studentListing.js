

async function loadStudents() {
    studentCount = await window.EnrollmentContract.methods.studentCounter().call();
    console.log(studentCount);
    for (i = 0; i < studentCount; i++) {
        window.EnrollmentContract.methods.students(i).call().then(
            result => {
                console.log(result);
                var studentCardGrid = document.getElementById("studentCardGrid");
                studentCardGrid.innerHTML += (
                    '<div class="col">' +
                    '<div class="card mb-3" style="max-width: 540px;">' +
                    '<div class="row g-0">' +
                    '<div class="col-md-4">' +
                    '<object class="card-img-top" data="img/' + result["username"] + '.jpg" type="image/jpg">' +
                    '<img class="card-img-top" src="img/image.jpg" />' +
                    '</object>' +
                    //'<img class="card-img-top" src="img/1232956.jpg" alt="...">' +
                    '</div>' +
                    '<div class="col-md-8">' +
                    '<div class="card-body">' +
                    '<h5 class="card-title">' + result["username"] + '</h5>' +
                    '<p class="card-text">' + result["email"] + '</p>' +
                    '<p class="card-text">' + result["age"] + '</p>' +
                    '<p class="card-text"><small class="text-muted">' + result["walletAddress"] + '</small></p>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>'
                )
            }
        );

    }
};

function processStudentData(studentId, firstName, lastName, grade1, grade2, grade3, grade4, grade5, address1, address2, city, state, zipcode) {
    const studentData = {
        id: studentId,
        name: firstName + " " + lastName,
        grades: [grade1, grade2, grade3, grade4, grade5],
        address: {
            street: address1 + " " + address2,
            city: city,
            state: state,
            zipcode: zipcode
        }
    };
    // Further processing of studentData
}
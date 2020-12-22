let classRoom = [
    {
        "Marnie" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : true},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    },
    {
        "Lena" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : true},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    },
    {
        "Shoshanna" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : false},
                {"Thursday" : true},
                {"Friday" : false}
            ]
    },
    {
        "Jessa" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : false},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    }
];

// YOUR CODE BELOW
function attendanceCheck(dayOfTheWeek) {
    const presentStudents = [];

    for (let i = 0; i < classRoom.length; ++i) {
        const studentObj = classRoom[i];

        const studentName = Object.keys(studentObj)[0];

        const studentAttendanceArray = studentObj[studentName];

        for (let j = 0; j < studentAttendanceArray.length; ++j) {
            const dayObj =studentAttendanceArray[j];

            const nameOfDay = Object.keys(dayObj)[0];
            const presentOnDay = dayObj[nameOfDay];

            if (nameOfDay === dayOfTheWeek && presentOnDay === true) {
                presentStudents.push(studentName);
            }
        }
    }

    return presentStudents;
}
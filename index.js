/**
 * Given an array of student grades, filter out grades below 40
 */
var grades = [78, 34, 67, 76, 39, 24, 67, 98, undefined];
var belowFourty = function (grade) {
    return grade !== undefined && grade > 40;
};
var passGrades = grades.filter(belowFourty);
console.log(passGrades);

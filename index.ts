/**
 * Given an array of student grades, filter out grades below 40
 */

const grades: Array<number | undefined> = [78, 34, 67, 76, 39, 24, 67, 98, undefined];

const belowFourty = (grade: number | undefined): grade is number => {
    return grade !== undefined && grade > 40;
}

const passGrades: Array<number> = grades.filter(belowFourty);

console.log(passGrades);
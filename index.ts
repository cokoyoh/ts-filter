/**
 * Given an array of student grades, filter out grades below 40
 */

const grades: Array<number> = [78, 34, 67, 76, 39, 24, 67, 98];

const belowFourty = (grade: number): boolean => grade > 40;

const passGrades: Array<number> = grades.filter(belowFourty);

console.log(passGrades);
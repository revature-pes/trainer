/*
Given the average score of a student, we must print the result as follows:
0  to 50    Fail
51 to 60    Second class 
71 to 90    First class
91 to 100   Outstanding
*/
averageScore = 78

if(averageScore >= 0 && averageScore <= 50)
    console.log(`Result is Fail`)
if(averageScore <= 70)
    console.log(`Result is Second Class`)
if(averageScore <= 90)
    console.log(`Result is First class`)
if(averageScore <= 100)
    console.log(`Result is Outstanding`)
else
    console.log(`Invalid Average Score`)
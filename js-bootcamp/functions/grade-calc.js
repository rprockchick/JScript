let gradecalc = function(studentScore,totalScore){
    let percentage = (studentScore/totalScore)*100
    
    if(percentage >= 90)
    return `You got an A (${percentage})`

    else if(percentage >= 80)
    return `You got a B (${percentage})`

    else if(percentage >= 70)
    return `You got a C (${percentage})`

    else if(percentage >= 60)
    return `You got a D (${percentage})`

    else(percentage <= 50)
    return `You got a F (${percentage})`
}

console.log(gradecalc(15,20))
console.log(gradecalc(18,20))
console.log(gradecalc(12,20))
console.log(gradecalc(10,20))
console.log(gradecalc(16,20))
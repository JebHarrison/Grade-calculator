function handleCalculateGrade(event){
    
    var grade = event.target.value;
    grade = grade.toUpperCase();
    let percentage;
    
    
    switch (grade){
        case "A":
            percentage = "90-100%";
            break;
        case "B":
            percentage = "75-90%";
            break;
        case "C":
            percentage = "50-75%";
            break;
        case "D":
            percentage = "35-50%";
            break;
        case "E":
            percentage = "10-35%"; 
            break;           
        case "F":
            percentage = "0-10%";
            break;

    }

    alert("The percentage was " + percentage);
}
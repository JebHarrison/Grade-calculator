function handleCalculateGrade(event){

    const grade = event.target.value;

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
            percentage = "0-35%"; 
            break;           







    }


}
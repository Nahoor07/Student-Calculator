const calcy = () =>{
    let wd=document.getElementById('wd').value;
    let maths=document.getElementById('maths').value;
    let comp=document.getElementById('comp').value;
    let phy=document.getElementById('phy').value;
    // let perc;
    let grades="empty";

    let totalGrades = parseFloat(wd) + parseFloat(maths) + parseFloat(comp) + parseFloat(phy);
    alert(totalGrades);

    let perc= (totalGrades/400)*100;
    alert(perc);

    if(perc <=100 && perc >=80){
        grades='A';

    }else if (perc <=79 && perc >=60){
        grades= 'B';
    }else if(perc <=59 && perc >= 50){
        grades= 'C';
    }else {
        grades='F';
    }

    if (perc >=50){
        document.getElementById('showData').innerHTML = ` Out of 400 your total is ${totalGrades} and percentage is ${perc}%. <br> your grade is ${grades} .You are Pass.` 

    }else{
        document.getElementById('showData').innerHTML = ` Out of 400 your total is ${totalGrades} and percentage is ${perc}%. <br> your grade is ${grades}. You are Fail` 
    }

    document.getElementById('showData').innerHTML = ` Out of 400 your total is ${totalGrades} and percentage is ${perc}%. <br> your grade is ${grades}.` 

}
// const original_answer = ["Sachin Tendulkar","West Indies","Sachin Tendulkar","264","Muttiah Muralitharan"]


const original_answer = {
    q1: "Sachin Tendulkar",
    q2: "West Indies",
    q3: "Sachin Tendulkar",
    q4: "264",
    q5: "Muttiah Muralitharan"
 }

const form = document.querySelector('form');
// form.addEventListener('form');

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const data = new FormData(form)


    // ***********first metrhod **********
    // const answer = Array.form(data.values());

    // let result =0;
    // for(let i=0;i<answer.lenght;i++){
    //     if(answer[i]===original_answer[i])
    //         result++;
    // }

    // ************second method************

    let result =0
    for(let [key,value] of data.entries())
    {
        if(value===original_answer[key])
            result++
    }


    const out = document.getElementById('out');
    out.innerText =`${result} out of 5 is corrected`;

    // document.getElementById('container').append(out);
})

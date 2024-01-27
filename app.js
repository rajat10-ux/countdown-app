// const enddate="27 January 2024 2.00 PM ";
// const inputs=document.querySelectorAll("input");
// document.getElementById("end-date").innerText=enddate;
// function clock(){
//         const end=new Date(enddate);
//         const now=new Date();
//         // console.log(enddate,now);
//         const diff=(end-now)/1000;
//         if(diff<0) return;
//         // console.log(diff);
//         inputs[0].value=(Math.floor(diff/3600/24));
//         inputs[1].value=(Math.floor(diff/3600)%24);
//         inputs[2].value=(Math.floor(diff/60)%60);
//         inputs[3].value=(Math.floor(diff%60));
// }
// setInterval(() => {
//         clock();
// }, 1000);

const endDate = "27 January 2024 08:20:00 PM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")
    // const clock = () => {

// }

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;

    if (diff < 0) return;

    // convert into days;
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
}

// initial call
clock()

/**
 *  1 day = 24 hrs
 *  1 hr = 60 mins
 *  60 min = 3600 sec
 */

setInterval(
    () => {
        clock()
    },
    1000
)
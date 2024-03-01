

let  count = 40;
let seatIncrement = 0;
let allSeatName = '';

const allBtn = document.getElementsByClassName('btn');
for(const btns of allBtn){
    btns.addEventListener('click', function(e){
    
        const mSeetName = document.getElementById('seatName');
        const mSeetNumber =(e.target.innerText);

        if(allSeatName.includes(mSeatNumber))return
        console.log(mSeatName);
        console.log(mSeatNumber);
        
        if(count>0){
            count -- ;
        }else{return}
      
     seatInnarText('seatCount' ,count)
    
     if(seatIncrement<4){
        seatIncrement ++;
     }else {return}

       allSeatName = allSeatName+mSeatNumber
       seatInnarText('seatIncrement', seatIncrement )
        btns.style.backgroundColor = "green";
     
        const seatNumber =(e.target.innerText);
        const seatName = document.getElementById('seatName');
        const h1 = document.createElement("h1");
        h1.innerText = seatNumber;
      
        seatName.appendChild(h1)

      
        const className = document.getElementById('className');
        const h2 =  document.createElement('h2');
        h2.innerHTML = 'Economoy'
        className.appendChild(h2)

        const seatPrice = document.getElementById('seatPrice');
        const h3 = document.createElement('h3');
        h3.innerHTML = '550'
        seatPrice.appendChild(h3)

        const total = document.getElementById('totalprice').innerText;

       const convertMoney = parseInt(total);
       document.getElementById('totalprice').innerText = convertMoney + parseInt(550);
     
     

       
    })
}


function seatInnarText(id , value){
    // seetCount.innerText=count;
    document.getElementById(id).innerText = value;
 

}


// Apply Coupon

const applyCoupon = () => {
    const total = document.getElementById('totalprice').innerText;

    const convertMoney = parseInt(total);    
     
    const couponCode = document.getElementById('coupon').value
    if(seatIncrement > 3 && couponCode === "Couple 20"){
    
        document.getElementById('totalprice').innerText = convertMoney / 100 * 80; 
    }

    if(seatIncrement > 3 && couponCode === "NEW15"){
        document.getElementById('totalprice').innerText = convertMoney / 100 * 70;
    }
    console.log('clicked');
}


const section = document.querySelector("section"),
  overlay = document.querySelector(".overlay"),
  showBtn = document.querySelector("#nextbtn"),
  closeBtn = document.querySelector(".close-btn");
showBtn.addEventListener("click", () => section.classList.add("active"));
overlay.addEventListener("click", () =>
  section.classList.remove("active")
);
closeBtn.addEventListener("click", () =>
  section.classList.remove("active")
);

const form = document.querySelector("form");
eField = form.querySelector(".Username"),
eInput = eField.querySelector("input"),


pField = form.querySelector(".password"),
pInput = pField.querySelector("input"),

// sField = form.querySelector(".Sample"),
// sInput = sField.querySelector("input");


form.onsubmit = (e)=>{
    e.preventDefault();
  
    (eInput.value == "") ? eField.classList.add("shake", "error") : checkUsername();
    (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();
    // (sInput.value == "") ? sField.classList.add("shake", "error") : checkSample();
    setTimeout(()=>{ 
      eField.classList.remove("shake");
      pField.classList.remove("shake");
      sField.classList.remove("shake");
    }, 500);
    eInput.onkeyup = ()=>{checkUsername();} 
    pInput.onkeyup = ()=>{checkPass();} 
    // sInput.onkeyup = ()=>{checkSample();} 
   
    function checkUsername(){

      if (eInput.value == ""){ 
        eField.classList.add("error");
        eField.classList.remove("valid");
       
      }else{ 
        eField.classList.remove("error");
        eField.classList.add("valid");
      }
    }


    function checkPass(){ 
      if(pInput.value == ""){ 
        pField.classList.add("error");
        pField.classList.remove("valid");
      }else{ 
        pField.classList.remove("error");
        pField.classList.add("valid");
      }
    }

        
    // function checkSample(){

    //   if (sInput.value == ""){ 
    //     sField.classList.add("error");
    //     sField.classList.remove("valid");
    //     let errorTxt = sField.querySelector(".error-txt");
    //   }else{ 
    //     sField.classList.remove("error");
    //     sField.classList.add("valid");
    //   }
    // }
  
  }

//logic to check is user login


if(localStorage.getItem('token')){
    document.getElementById("logout").addEventListener("click",()=>{
      localStorage.removeItem("token");
      window.location.reload();
    })
  }
  
import"./assets/modulepreload-polyfill-3cfb730f.js";const t=document.querySelector(".feedback-form"),m=t.elements.email,l=t.elements.message,e={email:localStorage.getItem("email")||"",message:localStorage.getItem("message")||""};e.email&&(m.value=e.email);e.message&&(l.value=e.message);t.addEventListener("input",a=>{e[a.target.name]=a.target.value.trim(),localStorage.setItem(a.target.name,a.target.value.trim())});t.addEventListener("submit",a=>{if(a.preventDefault(),e.email=m.value.trim(),e.message=l.value.trim(),!e.email||!e.message){alert("Please fill all fields");return}console.log(e),localStorage.removeItem("email"),localStorage.removeItem("message"),t.reset(),e.email="",e.message=""});
//# sourceMappingURL=commonHelpers2.js.map

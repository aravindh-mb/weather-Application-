var title ="weather application management system";
var url =window.localStorage.href;
let shareBtn =document.getElementById('share-btn');
function sharingOption() {
        shareBtn.addEventListener('click',()=>{
            if(navigator.share){
                navigator.share({
                    title :`${title}`,
                    url :`${url}`
                }).then(()=>{
                    console.log("share finished successfully");
                }).catch(console.error)
            }else{
                alert("Share failed webshare API does not support");
            }
        })
}
sharingOption()

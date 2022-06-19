function saveLocalStorage() {
    let new_data = document.getElementById('search').value;
    if(localStorage.getItem('data')==null)
    {
        localStorage.setItem('data','[null]');
    }
    let old_data =JSON.parse(localStorage.getItem('data'));
    old_data.push(new_data);
    localStorage.setItem('data', JSON.stringify(old_data));
}
function history(){
    let history =  document.querySelector('history');
    let history2 =  document.querySelector('history2');
history2.onclick= ()=>{
        history2.style.display='block';
   
}
    
}
function view(){
    
}

document.getElementById("autofill").addEventListener("click", ()=> {
    /*Auto fill form*/
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0], id, {
            name: document.getElementById('first_name').value,
            name: document.getElementById('last_name').value,
            address: document.getElementsById('address_1').value,
            city: document.getElementsById('city').value,
            state: document.getElementsById('state').value,
            country: document.getElementsById('country').value
        }, function(response){
            console.log(response.status);
        });
    });
});
document.getElementById('save').addEventListener('click', () => {
    chrome.storage.sync.set({
        name: document.getElementById('first_name').value,
        name: document.getElementById('last_name').value,
        address: document.getElementById('address_1').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        country: document.getElementById('country').value
    },function(){
        console.log("Saved!")
    })
})
document.getElementById('load').addEventListener('click', ()=>{
    chrome.storage.sync.get([
        'first_name',
        'last_name',
        'address_1',
        'city',
        'state',
        'country'

    ],function(results){
        document.getElementById('name'.value = result.name)
    })
})
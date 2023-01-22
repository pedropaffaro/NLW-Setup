const form = document.querySelector('#form-habits');
const nlwSetup = new NLWSetup(form);

const registerButton = document.querySelector('.register-button');

registerButton.addEventListener('click', handleRegisterHabit);
form.addEventListener('change', handleSaveHabit);


function handleRegisterHabit(){
    const today = new Date().toLocaleDateString('pt-br').slice(0,-5);
    const dayExists = nlwSetup.dayExists(today);

    if(dayExists){
        alert('Day already exists!');
        return;
    }

    nlwSetup.addDay(today);
}

function handleSaveHabit(){
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data));
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {};
nlwSetup.setData(data);
nlwSetup.load();
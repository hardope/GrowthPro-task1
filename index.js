document.addEventListener('DOMContentLoaded', () => {
    console.log('Document is ready!');

    const popup = document.querySelector('.popup-alert')
    
    console.log(popup);

    document.querySelector('#show-alert').addEventListener('click', () => {
        console.log('Show alert button clicked');
        const popupalert = document.getElementById('popup-alert');
        console.log(popupalert);
        popupalert.style.display = 'block';
    })

    
});

function closeAlert(id) {
    console.log('Close alert button clicked');
    const popupalert = document.getElementById(id);
    console.log(popupalert)
    popupalert.style.display = 'none';
}

function displayAlert (title, description) {
    const id = `${Math.random().toString(36).substring(2, 15)}`;

    const alertBox = `
    <div class="popup-alert" id="differentId" onclick="closeAlert(this.id)">
            <button class="close-btn" id="${id}" >X</button>
            <span id="alert-title">${title}</span>
            <p id="alert-description">${description}</p>
        </div> `

    const container = document.querySelector('#container');
    container.innerHTML += alertBox;
}

function checkLogin () {
    const userData = {
        email: 'john@mail.com',
        password: 'JohnPassword'
    }

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    if (email === userData.email && password === userData.password) {
        console.log('Login successful');
        displayAlert('Login Successful', 'Welcome back, John!');
    } else {
        console.error('Login failed');
        displayAlert('Login Failed', 'Please check your email and password.');
    }


}
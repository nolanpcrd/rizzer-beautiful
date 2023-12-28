fetch('rizz.json')
    .then(response => response.json())
    .then(data => {
        let p = document.querySelector('p');
        let rizz = data.rizz;
        let randomRizz = rizz[Math.floor(Math.random() * rizz.length)];
        p.innerText = `${randomRizz}`;
    });
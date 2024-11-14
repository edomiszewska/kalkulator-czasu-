const przyciskdni = document.querySelector('#dni');
const kalendarz = document.querySelector('#kalendarz');
const wydarzenie = document.querySelector('#wydarz');
const wynik = document.querySelector('#wynik');
const kalen= document.querySelector('#kalen');


przyciskdni.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (wydarzenie.value) {
        const dataDocelowa = new Date(wydarzenie.value);
        const dzisdata = new Date();
        const roznicaCzasu = dataDocelowa - dzisdata;
        const roznicaDni = Math.ceil(roznicaCzasu/(1000*60*60*24));
        wynik.innerHTML = `pozostało ${roznicaDni} dni do wybranej daty.`;

    } else {
        wynik.innerHTML = "wybierz wydarzenie z listy!!!!";
    }
});

kalen.addEventListener('click',(evt)=>
{
    kalendarz.classList.toggle('hidden');

    if (kalen.innerHTML === "wyświetl kalendarz") {
        kalen.innerHTML = "Ukryj kalendarz";
    } else {
        kalen.innerHTML = "wyświetl kalendarz";
        
    }


}
)
kalendarz.addEventListener('change', (evt) => {
    if (kalendarz.value) {
        const dataDocelowa = new Date(wydarzenie.value);
        const dzisdata = new Date(kalendarz.value);
        const roznicaCzasu = dataDocelowa - dzisdata;
        const roznicaDni = Math.ceil(roznicaCzasu/(1000*60*60*24));
        wynik.innerHTML = `pozostało ${roznicaDni} dni do wybranej daty.`;
        
    }
});

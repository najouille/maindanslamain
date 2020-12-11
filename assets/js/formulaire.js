
    var btnPopup = document.getElementById('chercher');
    var btnAnnuler = document.getElementById('button1');
    var btnValider = document.getElementById('button2');
    var overlay1 = document.getElementById('overlay1');
    
    btnPopup.addEventListener('click',openModal);
    btnAnnuler.onclick = closePopup;
    btnValider.onclick = closePopup;
    
    function openModal() {
        overlay1.style.display = 'block';
    }
    
    function closePopup() {
        overlay1.style.display = 'none';
    }

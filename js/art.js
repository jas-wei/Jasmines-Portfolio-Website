document.querySelectorAll('.work img').forEach(work =>{
    work.onclick = () =>{
        document.querySelector('.popup-work').style.display = 'block';
        document.querySelector('.popup-work img').src = work.getAttribute('src');
    }
});

document.querySelectorAll('.big-work img').forEach(bigWork =>{
    bigWork.onclick = () =>{
        document.querySelector('.popup-work').style.display = 'block';
        document.querySelector('.popup-work img').src = bigWork.getAttribute('src');
    }
});

document.querySelector('.popup-work span').onclick = () =>{
    document.querySelector('.popup-work').style.display = 'none';
}
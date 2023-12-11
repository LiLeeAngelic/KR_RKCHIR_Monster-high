document.querySelectorAll('.cinema .video').forEach(vid => {
   vid.onclick = () =>{
      iframe = vid.querySelector('.video iframe');
      document.querySelector('.popup-video iframe').src = iframe.getAttribute('src');
      document.querySelector('.popup-video').style.display = 'block';
   }
});

document.querySelector('.popup-video div').onclick = () => {
   document.querySelector('.popup-video').style.display = 'none';
   location.reload();
}
document.querySelector('.popup-video').onclick = () => {
   document.querySelector('.popup-video').style.display = 'none';
   location.reload();
}
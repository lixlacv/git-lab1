const upload = document.getElementById('upload');
upload.addEventListener('change', (e) => {
    alert('Файл завантажено: ' + e.target.files[0].name);
});

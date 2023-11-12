document.getElementById('form').addEventListener('submit', function(event) {
    const imageInput = document.getElementById('image');
    const file = imageInput.files[0];
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
  
    if (file && allowedTypes.includes(file.type)) {

      console.log('Imagem válida:', file.name);
      alert("Muito obrigado pelo envio. Resolveremos seu problema em breve!");
    } else {

      alert('Por favor, selecione um arquivo de imagem válido (jpg, jpeg, png).');
      event.preventDefault();
    }

});
  
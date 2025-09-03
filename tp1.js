const fileInput = document.getElementById('fileInput');
        const preview = document.getElementById('vistaprevia');
        const errorMsg = document.getElementById('errorMsg');

        fileInput.addEventListener('change', function() {
            const file = this.files[0]; // Tomamos el primer archivo seleccionado
            errorMsg.textContent = ""; // Limpiamos mensajes anteriores
            preview.src = ""; // Limpiamos la vista previa anterior

            if (!file) {
                return; // Si no se seleccionó ningún archivo
            }

            // Validar que sea un tipo de imagen
            if (!file.type.startsWith('image/')) {
                errorMsg.textContent = "Por favor, selecciona un archivo de imagen válido.";
                return;
            }

            // Usamos FileReader para leer la imagen y mostrarla
            const reader = new FileReader();
            reader.onload = function(e) {
                preview.src = e.target.result; // Mostramos la imagen
            }
            reader.readAsDataURL(file);
        });

    let totalNEET = 0;
    let totalNEEP = 0;

    const maxNEET = 5;

    // Horas pedagógicas
    const horasPedaPorNEET = 8 / 5; // 1.6 horas pedagógicas por NEET
    const horasPedaPorNEEP = 3;

    const minutosHoraPedagogica = 45;

    function agregarEstudiante() {
        const tipo = document.getElementById("tipoEstudiante").value;
        const mensajeError = document.getElementById("mensajeError");
        mensajeError.innerText = "";

        if (!tipo) {
            mensajeError.innerText = "Debe seleccionar un tipo de estudiante.";
            return;
        }

        if (tipo === "NEET") {
            if (totalNEET >= maxNEET) {
                mensajeError.innerText = "Máximo 5 estudiantes NEET.";
                return;
            }
            totalNEET++;
        }

        if (tipo === "NEEP") {
            totalNEEP++;
        }

        actualizarResumen();
    }

    function limpiarMatricula() {
        totalNEET = 0;
        totalNEEP = 0;
        actualizarResumen();
        const mensajeError = document.getElementById("mensajeError");
        if (mensajeError) mensajeError.innerText = "";
    }

    function quitarEstudiante() {
        const tipo = document.getElementById("tipoEstudiante").value;
        const mensajeError = document.getElementById("mensajeError");
        mensajeError.innerText = "";

        if (!tipo) {
            mensajeError.innerText = "Debe seleccionar un tipo para quitar.";
            return;
        }

        if (tipo === "NEET") {
            if (totalNEET > 0) {
                totalNEET--;
            } else {
                mensajeError.innerText = "No hay más estudiantes NEET para quitar.";
            }
        }

        if (tipo === "NEEP") {
            if (totalNEEP > 0) {
                totalNEEP--;
            } else {
                mensajeError.innerText = "No hay más estudiantes NEEP para quitar.";
            }
        }

        actualizarResumen();
    }

    function actualizarResumen() {
        // Horas pedagógicas
        const pedaNEET = totalNEET * horasPedaPorNEET;
        const pedaNEEP = totalNEEP * horasPedaPorNEEP;
        const pedaTotal = pedaNEET + pedaNEEP;

        // Horas cronológicas
        const cronoNEET = (pedaNEET * minutosHoraPedagogica) / 60;
        const cronoNEEP = (pedaNEEP * minutosHoraPedagogica) / 60;
        const cronoTotal = cronoNEET + cronoNEEP;

        document.getElementById("neet").innerText = totalNEET;
        document.getElementById("neep").innerText = totalNEEP;
        document.getElementById("total").innerText = totalNEET + totalNEEP;

        document.getElementById("pedaNeet").innerText = pedaNEET.toFixed(2);
        document.getElementById("pedaNeep").innerText = pedaNEEP.toFixed(2);
        document.getElementById("pedaTotal").innerText = pedaTotal.toFixed(2);

        document.getElementById("cronoNeet").innerText = cronoNEET.toFixed(2);
        document.getElementById("cronoNeep").innerText = cronoNEEP.toFixed(2);
        document.getElementById("cronoTotal").innerText = cronoTotal.toFixed(2);
    }

    function previsualizarImagen() {
        const input = document.getElementById('inputImagen');
        const vistaPrevia = document.getElementById('vistaPrevia');

        if (input.files && input.files[0]) {
            const reader = new FileReader();

            reader.onload = function(e) {
                vistaPrevia.src = e.target.result;
                vistaPrevia.style.display = 'block';
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

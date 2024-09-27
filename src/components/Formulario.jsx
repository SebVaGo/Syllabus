import IconButton from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';



export default function Formulario(){

    
    return(
        <div class="formulario">
            <section class="fondo buscador">
                <h2>Busqueda de Silabo</h2>
                

            </section>

            <section class="fondo unidad">
                <div class="display">
                    <h2>Informacion General</h2>
                    <IconButton color="action" >
                        <ExpandLessIcon />
                    </IconButton>
                </div>
                
            </section>

            <section class="fondo unidad">
                <div class="display">
                    <h2>Sumilla</h2>
                    <IconButton color="action">
                        <ExpandMoreIcon />
                    </IconButton>
                </div>
            </section>

            <section class="fondo unidad">
                <div class="display">
                    <h2>Competencias del Perfil de Egreso</h2>
                    <IconButton color="action">
                        <ExpandMoreIcon />
                    </IconButton>
                </div>
            </section>

            <section class="fondo unidad">
                <div class="display">
                    <h2>Logros de Aprendizaje</h2>
                    <IconButton color="action">
                        <ExpandMoreIcon />
                    </IconButton>
                </div>
            </section>

            <section class="fondo unidad">
                <div class="display">
                    <h2>Capacidades</h2>
                    <IconButton color="action">
                        <ExpandMoreIcon />
                    </IconButton>
                </div>
            </section>

            <section class="fondo unidad">
                <div class="display">
                    <h2>Programacion de Contenido</h2>
                    <IconButton color="action">
                        <ExpandMoreIcon />
                    </IconButton>
                </div>   
            </section>

            <section class="fondo unidad">
                <div class="display" aria-label="Example">
                    <h2>Estrategia Didáctica</h2>
                    <IconButton color="action">
                        <ExpandMoreIcon />
                    </IconButton>
                </div>   
            </section>

            <section class="fondo unidad">
                <div class="display">
                    <h2>Evaluación del Aprendizaje</h2>
                    <IconButton color="action">
                        <ExpandMoreIcon />
                    </IconButton>
                </div> 
            </section>
        </div>
    )
}
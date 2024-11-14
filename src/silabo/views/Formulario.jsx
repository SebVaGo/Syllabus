import React, { useState, useEffect } from 'react';
import InformacionG from './InformacionG';
import BuscadorSil from './BuscadorSil';
import CollapsibleSection from '../utils/CollapsibleSection';
import Sumilla from './Sumilla/Sumilla';
import CustomModal from '../utils/CustomModal';
import EstrategiaD from './EstrategiaD'; 
import "react-quill/dist/quill.snow.css";
import LogrosSection from './LogrosSection'; // Importamos LogrosSection
import { IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CompetenciasSection from './CompetenciasSection';
import '../styles/Formulario.css';

export default function Formulario() {

    const [cursoData, setCursoData] = useState(null); // Estado para almacenar los datos del curso
    const [errorMessage, setErrorMessage] = useState(null); // Estado para el mensaje de error
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para abrir/cerrar el modal
    const [logros, setLogros] = useState([]);


    const handleModalClose = () => setIsModalOpen(false);

    useEffect(() => {
        if (errorMessage) {
            setIsModalOpen(true); // Abre el modal cuando hay un mensaje de error
        }
    }, [errorMessage]);

    useEffect(() => {
        if (cursoData && cursoData.competencias) {
            // Extrae logros de todas las competencias en un solo arreglo
            const extractedLogros = cursoData.competencias.flatMap(comp => comp.logros || []);
            setLogros(extractedLogros);
        }
    }, [cursoData]);

    const [expanded, setExpanded] = useState({
        informacionGeneral: false,
        sumilla: false,
        competencias: false,
        logros: false,
        capacidades: false,
        programacion: false,
        estrategia: false,
        evaluacion: false,
    });

    const toggleExpand = (section) => {
        setExpanded(prevState => ({
            ...prevState,
            [section]: !prevState[section]
        }));
    };

    const [capacidades, setCapacidades] = useState([
        { capacidad: 'Capacidad 1', descripcion: 'Descripción de la capacidad 1' },
        { capacidad: 'Capacidad 2', descripcion: 'Descripción de la capacidad 2' }
    ]);
    const [programacion, setProgramacion] = useState([
        { unidad: 'Unidad 1', contenidos: 'Contenido de Unidad 1' },
        { unidad: 'Unidad 2', contenidos: 'Contenido de Unidad 2' }
    ]);
    const [estrategiaDidactica, setEstrategiaDidactica] = useState('');
    const [evaluacion, setEvaluacion] = useState([
        { resultado: 'RA1', noLogrado: '', suficiente: '', notable: '', sobresaliente: '' }
    ]);


        return (
<div className="formulario">
    {/* Modal para mensajes de error */}
    <CustomModal 
        open={isModalOpen} 
        handleClose={() => {
            handleModalClose();
            setErrorMessage(null); // Limpia el mensaje de error cuando se cierra el modal
        }}
        message={errorMessage} 
        title="Error de Búsqueda" 
    />
    <section className="fondo buscador">
        <h2>Busqueda de Silabo</h2>
        {/* Pasar setCursoData y setErrorMessage a BuscadorSil para actualizar el estado */}
        <BuscadorSil setCursoData={setCursoData} setErrorMessage={setErrorMessage} />
    </section>

            <CollapsibleSection
            title="Información General"
            expanded={expanded.informacionGeneral}
            toggleExpand={() => toggleExpand('informacionGeneral')}
            >
            <InformacionG
                codigo={cursoData?.codigo || ''}
                nombre={cursoData?.nombre || ''}
                creditos={cursoData?.numCreditos || ''}
                horasSemanales={`${cursoData?.numHorasTeoria ?? ''} Teoría, ${cursoData?.numHorasPractica ?? ''} Práctica, ${cursoData?.numHorasLaboratorio ?? ''} Laboratorio`}
                modalidad={cursoData?.modalidad || ''}
                tipo={cursoData?.tipo || ''}
                ciclo={cursoData?.ciclo || ''}
                docentes={cursoData?.docentes || ''}
                areaEstudios={cursoData?.areaEstudios || ''}
                semestreAcademico={cursoData?.descripcion || ''}
                prerequisitos={cursoData?.prerequisitos || ''}
                />
            </CollapsibleSection>
            <CollapsibleSection
                title="Sumilla"
                expanded={expanded.sumilla}
                toggleExpand={() => toggleExpand('sumilla')}
            >
                <Sumilla value={cursoData?.sumilla || ''} /> {/* Pasamos la sumilla aquí */}
                </CollapsibleSection>

            <CollapsibleSection
                title="Competencias del Perfil de Egreso"
                expanded={expanded.competencias}
                toggleExpand={() => toggleExpand('competencias')}
            >
                <CompetenciasSection
                    competencias={cursoData?.competencias || []}
                    setCompetencias={() => {}}
                />
            </CollapsibleSection>

            <CollapsibleSection
                title="Logros de Aprendizaje"
                expanded={expanded.logros}
                toggleExpand={() => toggleExpand('logros')}
            >
                <LogrosSection competencias={cursoData?.competencias || []} />
            </CollapsibleSection>

            {/* Sección Capacidades */}
            <section className="fondo unidad">
                <div className="display">
                    <h2>Capacidades</h2>
                    <IconButton color="action" onClick={() => toggleExpand('capacidades')}>
                        {expanded.capacidades ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                </div>
                {expanded.capacidades && (
                    <div className="cuerpo">
                        <table>
                            <thead>
                                <tr>
                                    <th>Capacidad</th>
                                    <th>Descripción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {capacidades.map((capacidad, index) => (
                                    <tr key={index}>
                                        <td>
                                            <input
                                                type="text"
                                                value={capacidad.capacidad}
                                                onChange={(e) => {
                                                    const newCapacidades = [...capacidades];
                                                    newCapacidades[index].capacidad = e.target.value;
                                                    setCapacidades(newCapacidades);
                                                }}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                value={capacidad.descripcion}
                                                onChange={(e) => {
                                                    const newCapacidades = [...capacidades];
                                                    newCapacidades[index].descripcion = e.target.value;
                                                    setCapacidades(newCapacidades);
                                                }}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </section>

            {/* Sección Programación de Contenido */}
            <section className="fondo unidad">
                <div className="display">
                    <h2>Programación de Contenido</h2>
                    <IconButton color="action" onClick={() => toggleExpand('programacion')}>
                        {expanded.programacion ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                </div>
                {expanded.programacion && (
                    <div className="cuerpo">
                        <table>
                            <thead>
                                <tr>
                                    <th>Unidad</th>
                                    <th>Contenidos</th>
                                </tr>
                            </thead>
                            <tbody>
                                {programacion.map((unidad, index) => (
                                    <tr key={index}>
                                        <td>
                                            <input
                                                type="text"
                                                value={unidad.unidad}
                                                onChange={(e) => {
                                                    const newProgramacion = [...programacion];
                                                    newProgramacion[index].unidad = e.target.value;
                                                    setProgramacion(newProgramacion);
                                                }}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                value={unidad.contenidos}
                                                onChange={(e) => {
                                                    const newProgramacion = [...programacion];
                                                    newProgramacion[index].contenidos = e.target.value;
                                                    setProgramacion(newProgramacion);
                                                }}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </section>

            {/* Sección Estrategia Didáctica */}
            <section className="fondo unidad">
                <div className="display">
                    <h2>Estrategia Didáctica</h2>
                    <IconButton color="action" onClick={() => toggleExpand('estrategia')}>
                        {expanded.estrategia ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                </div>
                {expanded.estrategia && (
                    <div className="cuerpo">
                        <EstrategiaD />
                    </div>
                )}
            </section>

            {/* Sección Evaluación del Aprendizaje */}
            <section className="fondo unidad">
                <div className="display">
                    <h2>Evaluación del Aprendizaje</h2>
                    <IconButton color="action" onClick={() => toggleExpand('evaluacion')}>
                        {expanded.evaluacion ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                </div>
                {expanded.evaluacion && (
                    <div className="cuerpo">
                        <table>
                            <thead>
                                <tr>
                                    <th>Resultado de Aprendizaje</th>
                                    <th>No Logrado</th>
                                    <th>Suficiente</th>
                                    <th>Notable</th>
                                    <th>Sobresaliente</th>
                                </tr>
                            </thead>
                            <tbody>
                                {evaluacion.map((evaluationItem, index) => (
                                    <tr key={index}>
                                        <td>
                                            <input
                                                type="text"
                                                value={evaluationItem.resultado}
                                                onChange={(e) => {
                                                    const newEvaluacion = [...evaluacion];
                                                    newEvaluacion[index].resultado = e.target.value;
                                                    setEvaluacion(newEvaluacion);
                                                }}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                value={evaluationItem.noLogrado}
                                                onChange={(e) => {
                                                    const newEvaluacion = [...evaluacion];
                                                    newEvaluacion[index].noLogrado = e.target.value;
                                                    setEvaluacion(newEvaluacion);
                                                }}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                value={evaluationItem.suficiente}
                                                onChange={(e) => {
                                                    const newEvaluacion = [...evaluacion];
                                                    newEvaluacion[index].suficiente = e.target.value;
                                                    setEvaluacion(newEvaluacion);
                                                }}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                value={evaluationItem.notable}
                                                onChange={(e) => {
                                                    const newEvaluacion = [...evaluacion];
                                                    newEvaluacion[index].notable = e.target.value;
                                                    setEvaluacion(newEvaluacion);
                                                }}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                value={evaluationItem.sobresaliente}
                                                onChange={(e) => {
                                                    const newEvaluacion = [...evaluacion];
                                                    newEvaluacion[index].sobresaliente = e.target.value;
                                                    setEvaluacion(newEvaluacion);
                                                }}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </section>
        </div>
    );
}

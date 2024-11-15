import React, { useState, useEffect } from 'react';
import InformacionG from './InformacionG';
import BuscadorSil from './BuscadorSil';
import CollapsibleSection from '../utils/CollapsibleSection';
import Sumilla from './Sumilla/Sumilla';
import CustomModal from '../utils/CustomModal';
import EstrategiaD from './EstrategiaD'; 
import "react-quill/dist/quill.snow.css";
import LogrosSection from './LogrosSection'; // Importamos LogrosSection
import CapacidadesSection from './CapacidadesSection'; // Importa CapacidadesSection
import ProgramacionContenidoSection from './ProgramacionContenidoSection'; // Importamos el nuevo componente
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
    const [unidades, setUnidades] = useState([]);



    const handleModalClose = () => setIsModalOpen(false);

    useEffect(() => {
        if (cursoData && cursoData.unidades) {
            setUnidades(cursoData.unidades);
        }
    }, [cursoData]);

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
    const handleSumillaChange = (newSumilla) => {
        setCursoData(prevData => ({
            ...prevData,
            sumilla: newSumilla
        }));
    };
    const handleCompetenciasChange = (newCompetencias) => {
        setCursoData(prevData => ({
            ...prevData,
            competencias: newCompetencias
        }));
    };

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
                    <Sumilla value={cursoData?.sumilla || ''} setValue={handleSumillaChange} />
                </CollapsibleSection>

            <CollapsibleSection
                title="Competencias del Perfil de Egreso"
                expanded={expanded.competencias}
                toggleExpand={() => toggleExpand('competencias')}
            >
                <CompetenciasSection
                    competencias={cursoData?.competencias || []} 
                    setCompetencias={handleCompetenciasChange} // Cambiar setValue por setCompetencias
                    />
            </CollapsibleSection>

            <CollapsibleSection
                title="Logros de Aprendizaje"
                expanded={expanded.logros}
                toggleExpand={() => toggleExpand('logros')}
            >
                <LogrosSection competencias={cursoData?.competencias || []}  setLogros={setLogros}/>
            </CollapsibleSection>

            <CollapsibleSection
                title="Capacidades (Logros por Unidad)"
                expanded={expanded.capacidades}
                toggleExpand={() => toggleExpand('capacidades')}
            >
                <CapacidadesSection unidades={cursoData?.unidades || []} /> {/* Usamos cursoData.unidades */}
            </CollapsibleSection>

            <CollapsibleSection
                title="Programación de Contenido"
                expanded={expanded.programacion}
                toggleExpand={() => toggleExpand('programacion')}
            >
                <ProgramacionContenidoSection 
                    unidades={cursoData?.unidades || []} 
                />
            </CollapsibleSection>

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

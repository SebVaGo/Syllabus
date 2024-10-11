import React, { useState } from 'react';
import InformacionG from './InformacionG';
import BuscadorSil from './BuscadorSil';
<<<<<<< HEAD
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
=======
import Sumilla from './Sumilla';
>>>>>>> d9b7cd5aa7d0053b8310786cc578839ccbdb04fc
import { IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import '../styles/Formulario.css';


export default function Formulario() {
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

<<<<<<< HEAD
    const [sumilla, setSumilla] = useState('');
    const [competencias, setCompetencias] = useState([
        { codigo: 'CT7.1', descripcion: 'Descripción de la competencia 1', tipo: 'Técnico', nivel: 'Básico' },
        { codigo: 'CT8.3', descripcion: 'Descripción de la competencia 2', tipo: 'Técnico', nivel: 'Intermedio' }
    ]);
    const [logros, setLogros] = useState([
        { logro: 'Logro 1', codigo: 'L1', descripcion: 'Descripción del logro 1' },
        { logro: 'Logro 2', codigo: 'L2', descripcion: 'Descripción del logro 2' }
    ]);
    const [capacidades, setCapacidades] = useState([
        { capacidad: 'Capacidad 1', descripcion: 'Descripción de la capacidad 1' },
        { capacidad: 'Capacidad 2', descripcion: 'Descripción de la capacidad 2' }
    ]);
    const [programacion, setProgramacion] = useState([
        { unidad: 'Unidad 1', contenidos: 'Contenido de Unidad 1' },
        { unidad: 'Unidad 2', contenidos: 'Contenido de Unidad 2' }
    ]);
=======
>>>>>>> d9b7cd5aa7d0053b8310786cc578839ccbdb04fc
    const [estrategiaDidactica, setEstrategiaDidactica] = useState('');
    const [evaluacion, setEvaluacion] = useState([
        { resultado: 'RA1', noLogrado: '', suficiente: '', notable: '', sobresaliente: '' }
    ]);

    return (
        <div className="formulario">
            <section className="fondo buscador">
                <h2>Busqueda de Silabo</h2>
                <BuscadorSil />
            </section>

            {/* Sección Informacion General */}
            <section className="fondo unidad">
                <div className="display">
                    <h2>Información General</h2>
                    <IconButton color="action" onClick={() => toggleExpand('informacionGeneral')}>
                        {expanded.informacionGeneral ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                </div>
                {expanded.informacionGeneral && (
                    <div className="cuerpo">
                        <InformacionG />
                    </div>
                )}
            </section>

            {/* Sección Sumilla */}
            <section className="fondo unidad">
                <div className="display">
                    <h2>Sumilla</h2>
                    <IconButton color="action" onClick={() => toggleExpand('sumilla')}>
                        {expanded.sumilla ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                </div>
                {expanded.sumilla && (
                    <div className="cuerpo">
                        <Sumilla />
                    </div>
                )}
            </section>

            {/* Sección Competencias del Perfil de Egreso */}
            <section className="fondo unidad">
                <div className="display">
                    <h2>Competencias del Perfil de Egreso</h2>
                    <IconButton color="action" onClick={() => toggleExpand('competencias')}>
                        {expanded.competencias ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                </div>
                {expanded.competencias && (
                    <div className="cuerpo">
                        <table>
                            <thead>
                                <tr>
                                    <th>Código</th>
                                    <th>Descripción</th>
                                    <th>Tipo</th>
                                    <th>Nivel</th>
                                </tr>
                            </thead>
                            <tbody>
                                {competencias.map((comp, index) => (
                                    <tr key={index}>
                                        <td>
                                            <input
                                                type="text"
                                                value={comp.codigo}
                                                onChange={(e) => {
                                                    const newCompetencias = [...competencias];
                                                    newCompetencias[index].codigo = e.target.value;
                                                    setCompetencias(newCompetencias);
                                                }}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                value={comp.descripcion}
                                                onChange={(e) => {
                                                    const newCompetencias = [...competencias];
                                                    newCompetencias[index].descripcion = e.target.value;
                                                    setCompetencias(newCompetencias);
                                                }}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                value={comp.tipo}
                                                onChange={(e) => {
                                                    const newCompetencias = [...competencias];
                                                    newCompetencias[index].tipo = e.target.value;
                                                    setCompetencias(newCompetencias);
                                                }}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                value={comp.nivel}
                                                onChange={(e) => {
                                                    const newCompetencias = [...competencias];
                                                    newCompetencias[index].nivel = e.target.value;
                                                    setCompetencias(newCompetencias);
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

            {/* Sección Logros de Aprendizaje */}
            <section className="fondo unidad">
                <div className="display">
                    <h2>Logros de Aprendizaje</h2>
                    <IconButton color="action" onClick={() => toggleExpand('logros')}>
                        {expanded.logros ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                </div>
                {expanded.logros && (
                    <div className="cuerpo">
                        <table>
                            <thead>
                                <tr>
                                    <th>Logro</th>
                                    <th>Código</th>
                                    <th>Descripción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {logros.map((logro, index) => (
                                    <tr key={index}>
                                        <td>
                                            <input
                                                type="text"
                                                value={logro.logro}
                                                onChange={(e) => {
                                                    const newLogros = [...logros];
                                                    newLogros[index].logro = e.target.value;
                                                    setLogros(newLogros);
                                                }}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                value={logro.codigo}
                                                onChange={(e) => {
                                                    const newLogros = [...logros];
                                                    newLogros[index].codigo = e.target.value;
                                                    setLogros(newLogros);
                                                }}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                value={logro.descripcion}
                                                onChange={(e) => {
                                                    const newLogros = [...logros];
                                                    newLogros[index].descripcion = e.target.value;
                                                    setLogros(newLogros);
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
                    <div className="card-content">
                        <ReactQuill value={estrategiaDidactica} onChange={setEstrategiaDidactica} />
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

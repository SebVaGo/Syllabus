import React, { useState } from 'react';
import InformacionG from './InformacionG';
import BuscadorSil from './BuscadorSil';
import Sumilla from './Sumilla';
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

    const [estrategiaDidactica, setEstrategiaDidactica] = useState('');

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
                        {/* Aquí puedes incluir el contenido de Competencias */}
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
                        {/* Aquí puedes incluir el contenido de Logros */}
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
                        {/* Aquí puedes incluir el contenido de Capacidades */}
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
                        {/* Aquí puedes incluir el contenido de Programación */}
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
                        {/* Aquí puedes incluir el contenido de Evaluación */}
                    </div>
                )}
            </section>
        </div>
    );
}

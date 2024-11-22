<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetFormData } from '../slices/formDataSlice'; // Acción de Redux para resetear datos
=======
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
>>>>>>> 6195f9d (Sumilla con redux Ok, falta editar)
import InformacionG from './InformacionG';
import BuscadorSil from './BuscadorSil';
import CollapsibleSection from '../utils/CollapsibleSection';
import Sumilla from './Sumilla/Sumilla';
import CustomModal from '../utils/CustomModal';
<<<<<<< HEAD
import EstrategiaD from './EstrategiaD';
import "react-quill/dist/quill.snow.css";
import LogrosSection from './LogrosSection';
import CapacidadesSection from './CapacidadesSection';
import ProgramacionContenidoSection from './ProgramacionContenidoSection';
import CompetenciasSection from './CompetenciasSection';
=======
>>>>>>> 6195f9d (Sumilla con redux Ok, falta editar)
import '../styles/Formulario.css';
import { actualizarCurso } from '../actions/CargaDetalleCursoThunk';

export default function Formulario() {
  const dispatch = useDispatch();
<<<<<<< HEAD
  const { data: cursoData, initialData } = useSelector((state) => state.formData); // Acceso al estado global
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  // Cierra el modal
  const handleModalClose = () => setIsModalOpen(false);

  useEffect(() => {
    if (!cursoData) {
      setIsModalOpen(true); // Abre el modal si no hay datos del curso
    }
  }, [cursoData]);

  // Restablece los datos del formulario al estado inicial
  const handleReset = () => {
    dispatch(resetFormData());
  };

  // Alterna la expansión de secciones
=======
  const { curso, error } = useSelector((state) => state.curso); // Accede al estado global de Redux

  const [errorMessage, setErrorMessage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  useEffect(() => {
    if (error) {
      setErrorMessage(error);
      setIsModalOpen(true); // Abre el modal en caso de error
    }
  }, [error]);

  const handleModalClose = () => {
    setIsModalOpen(false);
    setErrorMessage(null); // Limpia el mensaje de error
  };

>>>>>>> 6195f9d (Sumilla con redux Ok, falta editar)
  const toggleExpand = (section) => {
    setExpanded((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

<<<<<<< HEAD
=======
  const handleSumillaChange = (newSumilla) => {
    // Actualiza la sumilla en el estado global
    dispatch({
      type: 'curso/updateLocalState', // Acción local para modificar el estado en Redux
      payload: { ...curso, sumilla: newSumilla },
    });
  };

  const handleSaveFormulario = async () => {
    try {
      await dispatch(actualizarCurso(curso));
      console.log('Formulario actualizado correctamente.');
    } catch (saveError) {
      console.error('Error al guardar el formulario:', saveError);
      setErrorMessage('Error al guardar el formulario.');
      setIsModalOpen(true);
    }
  };

>>>>>>> 6195f9d (Sumilla con redux Ok, falta editar)
  return (
    <div className="formulario">
      {/* Modal para mensajes de error */}
      <CustomModal
        open={isModalOpen}
<<<<<<< HEAD
        handleClose={() => {
          handleModalClose();
        }}
        message={!cursoData ? "No se encontraron datos del curso" : null}
=======
        handleClose={handleModalClose}
        message={errorMessage}
>>>>>>> 6195f9d (Sumilla con redux Ok, falta editar)
        title="Error de Búsqueda"
      />
      <section className="fondo buscador">
        <h2>Búsqueda de Sílabo</h2>
<<<<<<< HEAD
        {/* Componente de búsqueda */}
        <BuscadorSil />
=======
        <BuscadorSil setErrorMessage={setErrorMessage} />
>>>>>>> 6195f9d (Sumilla con redux Ok, falta editar)
      </section>

      <CollapsibleSection
        title="Información General"
        expanded={expanded.informacionGeneral}
        toggleExpand={() => toggleExpand('informacionGeneral')}
      >
        <InformacionG
<<<<<<< HEAD
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
=======
          codigo={curso?.codigo || ''}
          nombre={curso?.nombre || ''}
          creditos={curso?.numCreditos || ''}
          horasSemanales={`${curso?.numHorasTeoria ?? ''} Teoría, ${curso?.numHorasPractica ?? ''} Práctica, ${curso?.numHorasLaboratorio ?? ''} Laboratorio`}
          modalidad={curso?.modalidad || ''}
          tipo={curso?.tipo || ''}
          ciclo={curso?.ciclo || ''}
          docentes={curso?.docentes || ''}
          areaEstudios={curso?.areaEstudios || ''}
          semestreAcademico={curso?.descripcion || ''}
          prerequisitos={curso?.prerequisitos || ''}
>>>>>>> 6195f9d (Sumilla con redux Ok, falta editar)
        />
      </CollapsibleSection>

      <CollapsibleSection
        title="Sumilla"
        expanded={expanded.sumilla}
        toggleExpand={() => toggleExpand('sumilla')}
      >
<<<<<<< HEAD
        <Sumilla value={cursoData?.sumilla || ''} />
      </CollapsibleSection>

      <CollapsibleSection
        title="Competencias del Perfil de Egreso"
        expanded={expanded.competencias}
        toggleExpand={() => toggleExpand('competencias')}
      >
        <CompetenciasSection competencias={cursoData?.competencias || []} />
      </CollapsibleSection>

      <CollapsibleSection
        title="Logros de Aprendizaje"
        expanded={expanded.logros}
        toggleExpand={() => toggleExpand('logros')}
      >
        <LogrosSection competencias={cursoData?.competencias || []} />
      </CollapsibleSection>

      <CollapsibleSection
        title="Capacidades (Logros por Unidad)"
        expanded={expanded.capacidades}
        toggleExpand={() => toggleExpand('capacidades')}
      >
        <CapacidadesSection unidades={cursoData?.unidades || []} />
      </CollapsibleSection>

      <CollapsibleSection
        title="Programación de Contenido"
        expanded={expanded.programacion}
        toggleExpand={() => toggleExpand('programacion')}
      >
        <ProgramacionContenidoSection unidades={cursoData?.unidades || []} />
=======
        <Sumilla
          value={curso?.sumilla || ''}
          setValue={handleSumillaChange}
          onSave={handleSaveFormulario} // Pasa la función al componente Sumilla
        />
>>>>>>> 6195f9d (Sumilla con redux Ok, falta editar)
      </CollapsibleSection>
    </div>
  );
}

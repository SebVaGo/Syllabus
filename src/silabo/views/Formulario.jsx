import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetFormData } from '../slices/formDataSlice'; // Acción de Redux para resetear datos
import InformacionG from './InformacionG';
import BuscadorSil from './BuscadorSil';
import CollapsibleSection from '../utils/CollapsibleSection';
import Sumilla from './Sumilla/Sumilla';
import CustomModal from '../utils/CustomModal';
import EstrategiaD from './EstrategiaD';
import "react-quill/dist/quill.snow.css";
import LogrosSection from './LogrosSection';
import CapacidadesSection from './CapacidadesSection';
import ProgramacionContenidoSection from './ProgramacionContenidoSection';
import CompetenciasSection from './CompetenciasSection';
import '../styles/Formulario.css';

export default function Formulario() {
  const dispatch = useDispatch();
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
  const toggleExpand = (section) => {
    setExpanded((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="formulario">
      {/* Modal para mensajes de error */}
      <CustomModal
        open={isModalOpen}
        handleClose={() => {
          handleModalClose();
        }}
        message={!cursoData ? "No se encontraron datos del curso" : null}
        title="Error de Búsqueda"
      />
      <section className="fondo buscador">
        <h2>Búsqueda de Sílabo</h2>
        {/* Componente de búsqueda */}
        <BuscadorSil />
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
      </CollapsibleSection>
    </div>
  );
}

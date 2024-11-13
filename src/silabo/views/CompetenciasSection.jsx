// src/components/CompetenciasSection.jsx
import React from 'react';
import CompetenciasE from './CompetenciasE' ;

const CompetenciasSection = ({ competencias, setCompetencias }) => (
    
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
);

export default CompetenciasSection;

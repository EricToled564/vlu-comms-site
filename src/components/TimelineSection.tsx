
'use client'

import { Calendar, CheckCircle, Clock, AlertCircle } from 'lucide-react'

export default function TimelineSection() {
  const timelineEvents = [
    {
      date: '15 Jun 2025',
      title: 'Lanzamiento Estrategia',
      description: 'Inicio oficial de la estrategia de comunicación con campaña de temporada alta',
      status: 'upcoming',
      campaign: 'Lanzamiento de Temporada Alta',
      budget: '$25,000'
    },
    {
      date: '16 Jul 2025',
      title: 'Escapadas Románticas',
      description: 'Enfoque en parejas con paquetes románticos y experiencias exclusivas',
      status: 'upcoming',
      campaign: 'Escapadas Románticas',
      budget: '$18,000'
    },
    {
      date: '1 Sep 2025',
      title: 'Aventura y Naturaleza',
      description: 'Promoción de actividades al aire libre y turismo activo',
      status: 'upcoming',
      campaign: 'Aventura y Naturaleza',
      budget: '$22,000'
    },
    {
      date: '1 Oct 2025',
      title: 'Gastronomía Local',
      description: 'Posicionamiento de experiencia gastronómica única con chefs invitados',
      status: 'upcoming',
      campaign: 'Gastronomía Local',
      budget: '$20,000'
    },
    {
      date: '1 Nov 2025',
      title: 'Wellness y Relajación',
      description: 'Captura del mercado de wellness tourism con experiencias de bienestar',
      status: 'upcoming',
      campaign: 'Wellness y Relajación',
      budget: '$24,000'
    },
    {
      date: '1 Dic 2025',
      title: 'Temporada Navideña',
      description: 'Maximización de ocupación con celebraciones navideñas y familiares',
      status: 'upcoming',
      campaign: 'Temporada Navideña',
      budget: '$30,000'
    },
    {
      date: '1 Ene 2026',
      title: 'Año Nuevo, Nueva Experiencia',
      description: 'Captura de tendencia "new year, new me" con retiros de bienestar',
      status: 'upcoming',
      campaign: 'Año Nuevo, Nueva Experiencia',
      budget: '$26,000'
    },
    {
      date: '1 Mar 2026',
      title: 'Romance de Primavera',
      description: 'Dominio del mercado de bodas y lunas de miel',
      status: 'upcoming',
      campaign: 'Romance de Primavera',
      budget: '$28,000'
    },
    {
      date: '1 May 2026',
      title: 'Aventura Familiar',
      description: 'Establecimiento como destino family-friendly con actividades para niños',
      status: 'upcoming',
      campaign: 'Aventura Familiar',
      budget: '$25,000'
    },
    {
      date: '1 Jun 2026',
      title: 'Temporada de Graduaciones',
      description: 'Captura del mercado de celebraciones especiales y familiares',
      status: 'upcoming',
      campaign: 'Temporada de Graduaciones',
      budget: '$22,000'
    },
    {
      date: '1 Jul 2026',
      title: 'Verano Épico',
      description: 'Campaña masiva para maximizar ocupación en temporada pico',
      status: 'upcoming',
      campaign: 'Verano Épico',
      budget: '$35,000'
    },
    {
      date: '1 Sep 2026',
      title: 'Regreso a Clases',
      description: 'Aprovechamiento del período post-vacaciones familiares',
      status: 'upcoming',
      campaign: 'Regreso a Clases',
      budget: '$20,000'
    },
    {
      date: '1 Oct 2026',
      title: 'Otoño Dorado',
      description: 'Captura del mercado de viajeros maduros y jubilados',
      status: 'upcoming',
      campaign: 'Otoño Dorado',
      budget: '$24,000'
    },
    {
      date: '1 Dic 2026',
      title: 'Cierre Espectacular',
      description: 'Gran finale del año estratégico con eventos especiales y gala de aniversario',
      status: 'upcoming',
      campaign: 'Cierre de Año Espectacular',
      budget: '$32,000'
    },
    {
      date: '14 Jun 2026',
      title: 'Evaluación Final',
      description: 'Análisis completo de resultados y planificación del siguiente ciclo',
      status: 'upcoming',
      campaign: 'Evaluación y Planificación',
      budget: 'N/A'
    }
  ]

  const milestones = [
    {
      quarter: 'Q3 2025',
      title: 'Primer Trimestre',
      goals: [
        'Ocupación: 50%+',
        'Reseñas: 180+',
        'Valor: 7.4+',
        'ROI: 280%+'
      ],
      status: 'upcoming'
    },
    {
      quarter: 'Q4 2025',
      title: 'Segundo Trimestre',
      goals: [
        'Ocupación: 60%+',
        'Reseñas: 240+',
        'Valor: 7.7+',
        'ROI: 310%+'
      ],
      status: 'upcoming'
    },
    {
      quarter: 'Q1 2026',
      title: 'Tercer Trimestre',
      goals: [
        'Ocupación: 63%+',
        'Reseñas: 300+',
        'Valor: 7.9+',
        'ROI: 320%+'
      ],
      status: 'upcoming'
    },
    {
      quarter: 'Q2 2026',
      title: 'Cuarto Trimestre',
      goals: [
        'Ocupación: 65%+',
        'Reseñas: 360+',
        'Valor: 8.0+',
        'Directas: 25%+'
      ],
      status: 'upcoming'
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'in-progress':
        return <Clock className="w-5 h-5 text-blue-500" />
      case 'upcoming':
        return <AlertCircle className="w-5 h-5 text-gray-400" />
      default:
        return <Calendar className="w-5 h-5 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-50 border-green-200'
      case 'in-progress':
        return 'bg-blue-50 border-blue-200'
      case 'upcoming':
        return 'bg-gray-50 border-gray-200'
      default:
        return 'bg-gray-50 border-gray-200'
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Timeline Estratégico 2025-2026</h2>
      <p className="text-gray-600 mb-8">
        Cronograma detallado de implementación de las 14 campañas y hitos clave
      </p>

      {/* Quarterly Milestones */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Hitos Trimestrales</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {milestones.map((milestone, index) => (
            <div key={index} className={`p-4 rounded-lg border-2 ${getStatusColor(milestone.status)}`}>
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-gray-900">{milestone.quarter}</h4>
                {getStatusIcon(milestone.status)}
              </div>
              <p className="text-sm text-gray-600 mb-3">{milestone.title}</p>
              <ul className="space-y-1">
                {milestone.goals.map((goal, goalIndex) => (
                  <li key={goalIndex} className="text-xs text-gray-700 flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Timeline */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Cronograma Detallado de Campañas</h3>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
          
          <div className="space-y-6">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 border-white shadow-lg ${
                  event.status === 'completed' ? 'bg-green-500' :
                  event.status === 'in-progress' ? 'bg-blue-500' : 'bg-gray-400'
                }`}>
                  {getStatusIcon(event.status)}
                </div>
                
                {/* Event content */}
                <div className="ml-6 flex-1">
                  <div className={`p-6 rounded-lg border-2 ${getStatusColor(event.status)}`}>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{event.title}</h4>
                        <p className="text-sm text-gray-600">{event.date}</p>
                      </div>
                      {event.budget !== 'N/A' && (
                        <div className="text-right">
                          <div className="text-sm text-gray-500">Presupuesto</div>
                          <div className="font-semibold text-gray-900">{event.budget}</div>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-gray-700 mb-3">{event.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">
                        <strong>Campaña:</strong> {event.campaign}
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        event.status === 'completed' ? 'bg-green-100 text-green-800' :
                        event.status === 'in-progress' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {event.status === 'completed' ? 'Completado' :
                         event.status === 'in-progress' ? 'En Progreso' : 'Próximo'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Summary Statistics */}
      <div className="mt-8 bg-gray-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Resumen del Timeline</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">365</div>
            <div className="text-sm text-gray-600">Días de Estrategia</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">14</div>
            <div className="text-sm text-gray-600">Campañas Planificadas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">4</div>
            <div className="text-sm text-gray-600">Hitos Trimestrales</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600">12</div>
            <div className="text-sm text-gray-600">Meses de Ejecución</div>
          </div>
        </div>
      </div>
    </div>
  )
}


'use client'

import { useState } from 'react'
import { Calendar, Target, TrendingUp, Users, MapPin, Star, DollarSign, BarChart3 } from 'lucide-react'
import CampaignsSection from '@/components/CampaignsSection'
import MetricsSection from '@/components/MetricsSection'
import TimelineSection from '@/components/TimelineSection'
import ObjectivesSection from '@/components/ObjectivesSection'

export default function Home() {
  const [activeSection, setActiveSection] = useState('overview')

  const navigationItems = [
    { id: 'overview', label: 'Resumen Ejecutivo', icon: BarChart3 },
    { id: 'objectives', label: 'Objetivos Estratégicos', icon: Target },
    { id: 'campaigns', label: '14 Campañas Detalladas', icon: TrendingUp },
    { id: 'metrics', label: 'Métricas y KPIs', icon: Star },
    { id: 'timeline', label: 'Timeline 2025-2026', icon: Calendar },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Estrategia de Comunicación VLU Tequesquitengo
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                Marco Estratégico para el Crecimiento de Ocupación y Posicionamiento de Marca
              </p>
              <div className="flex items-center mt-3 space-x-6">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  Período: 15 junio 2025 - 14 junio 2026
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="w-4 h-4 mr-2" />
                  VLU Hospitality - Tequesquitengo
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                <div className="text-sm font-medium">Objetivo Principal</div>
                <div className="text-2xl font-bold">45% → 65%</div>
                <div className="text-sm">Ocupación Anual</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <div className="w-64 flex-shrink-0">
            <nav className="bg-white rounded-lg shadow-md p-4 sticky top-8">
              <ul className="space-y-2">
                {navigationItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => setActiveSection(item.id)}
                        className={`w-full flex items-center px-3 py-2 text-left rounded-md transition-colors ${
                          activeSection === item.id
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <Icon className="w-5 h-5 mr-3" />
                        {item.label}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeSection === 'overview' && (
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Resumen Ejecutivo General</h2>
                
                {/* Context Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-blue-100">Mercado Total</p>
                        <p className="text-2xl font-bold">USD 1,267.4M</p>
                        <p className="text-sm text-blue-100">2024</p>
                      </div>
                      <DollarSign className="w-8 h-8 text-blue-200" />
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-green-100">Proyección 2030</p>
                        <p className="text-2xl font-bold">USD 1,868.5M</p>
                        <p className="text-sm text-green-100">CAGR 6.8%</p>
                      </div>
                      <TrendingUp className="w-8 h-8 text-green-200" />
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-purple-100">Calificación Actual</p>
                        <p className="text-2xl font-bold">7.9/10</p>
                        <p className="text-sm text-purple-100">Satisfacción General</p>
                      </div>
                      <Star className="w-8 h-8 text-purple-200" />
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-orange-100">Competencia</p>
                        <p className="text-2xl font-bold">670</p>
                        <p className="text-sm text-orange-100">Propiedades Airbnb</p>
                      </div>
                      <Users className="w-8 h-8 text-orange-200" />
                    </div>
                  </div>
                </div>

                {/* Strategic Context */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Contexto Estratégico</h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      VLU Tequesquitengo opera en un dinámico mercado de hospitalidad boutique valorado en USD 1,267.4 millones (2024) 
                      con un crecimiento proyectado a USD 1,868.5 millones para 2030 (CAGR del 6.8%). A pesar de las sólidas bases 
                      operativas—calificación general de 7.9/10, ubicación excepcional (8.4), y limpieza superior (8.4)—la propiedad 
                      enfrenta desafíos críticos que esta estrategia de comunicación aborda:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span><strong>Ocupación actual:</strong> tasa anual del 45% (objetivo: aumentar a 65%+)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span><strong>Brecha de percepción de valor:</strong> 7.2/10 para &quot;relación calidad-precio&quot; vs. 7.9/10 satisfacción general</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span><strong>Amplificación digital limitada:</strong> Solo 120 reseñas a pesar de la satisfacción de los huéspedes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span><strong>Presión competitiva:</strong> 670 propiedades Airbnb creando desafíos de precios</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Strategic Positioning */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Posicionamiento Estratégico</h3>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                    <blockquote className="text-lg text-blue-900 font-medium italic">
                      &quot;Tu santuario exclusivo junto al lago para bienestar, recreación y experiencias auténticas de Morelos 
                      -- un escape de fin de semana sin igual donde la tranquilidad del agua se encuentra con el lujo boutique.&quot;
                    </blockquote>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'objectives' && <ObjectivesSection />}
            {activeSection === 'campaigns' && <CampaignsSection />}
            {activeSection === 'metrics' && <MetricsSection />}
            {activeSection === 'timeline' && <TimelineSection />}
          </div>
        </div>
      </div>
    </div>
  )
}

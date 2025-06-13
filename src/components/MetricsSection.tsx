
'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { TrendingUp, Users, Star, DollarSign, Target } from 'lucide-react'

const Plot = dynamic(() => import('react-plotly.js'), { ssr: false })

export default function MetricsSection() {
  const [selectedMetric, setSelectedMetric] = useState('occupancy')

  const metrics = [
    {
      id: 'occupancy',
      title: 'Ocupación Anual',
      icon: TrendingUp,
      current: '45%',
      target: '65%',
      color: 'blue',
      description: 'Incremento progresivo de la tasa de ocupación a través de las 14 campañas'
    },
    {
      id: 'reviews',
      title: 'Volumen de Reseñas',
      icon: Star,
      current: '120',
      target: '360+',
      color: 'yellow',
      description: 'Triplicar el número de reseñas en plataformas digitales clave'
    },
    {
      id: 'value',
      title: 'Percepción de Valor',
      icon: DollarSign,
      current: '7.2/10',
      target: '8.0+/10',
      color: 'green',
      description: 'Mejorar la calificación de relación calidad-precio'
    },
    {
      id: 'direct',
      title: 'Reservas Directas',
      icon: Users,
      current: '15%',
      target: '25%',
      color: 'purple',
      description: 'Reducir dependencia de OTAs aumentando reservas directas'
    }
  ]

  // Data for occupancy chart
  const occupancyData = {
    x: ['Jun 2025', 'Jul 2025', 'Ago 2025', 'Sep 2025', 'Oct 2025', 'Nov 2025', 'Dic 2025', 'Ene 2026', 'Feb 2026', 'Mar 2026', 'Abr 2026', 'May 2026', 'Jun 2026'],
    y: [45, 52, 58, 55, 60, 57, 75, 62, 59, 68, 70, 72, 65],
    type: 'scatter',
    mode: 'lines+markers',
    name: 'Ocupación Real',
    line: { color: '#3B82F6', width: 3 },
    marker: { size: 8, color: '#3B82F6' }
  }

  const occupancyTarget = {
    x: ['Jun 2025', 'Jul 2025', 'Ago 2025', 'Sep 2025', 'Oct 2025', 'Nov 2025', 'Dic 2025', 'Ene 2026', 'Feb 2026', 'Mar 2026', 'Abr 2026', 'May 2026', 'Jun 2026'],
    y: [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
    type: 'scatter',
    mode: 'lines',
    name: 'Meta 65%',
    line: { color: '#EF4444', width: 2, dash: 'dash' }
  }

  // Data for reviews chart
  const reviewsData = {
    x: ['Trimestre 1', 'Trimestre 2', 'Trimestre 3', 'Trimestre 4'],
    y: [120, 180, 240, 360],
    type: 'bar',
    name: 'Reseñas Acumuladas',
    marker: { color: '#F59E0B' }
  }

  // Data for value perception
  const valueData = {
    x: ['Baseline', 'Q1 2025', 'Q2 2025', 'Q3 2025', 'Q4 2025', 'Target'],
    y: [7.2, 7.4, 7.6, 7.8, 8.0, 8.0],
    type: 'scatter',
    mode: 'lines+markers',
    name: 'Percepción de Valor',
    line: { color: '#10B981', width: 3 },
    marker: { size: 10, color: '#10B981' }
  }

  // Data for direct bookings
  const directData = {
    labels: ['OTAs', 'Reservas Directas'],
    values: [75, 25],
    type: 'pie',
    marker: {
      colors: ['#EF4444', '#8B5CF6']
    }
  }

  const getChartData = () => {
    switch (selectedMetric) {
      case 'occupancy':
        return {
          data: [occupancyData, occupancyTarget],
          layout: {
            title: 'Proyección de Ocupación Mensual',
            xaxis: { title: 'Período' },
            yaxis: { title: 'Porcentaje de Ocupación (%)', range: [40, 80] },
            showlegend: true
          }
        }
      case 'reviews':
        return {
          data: [reviewsData],
          layout: {
            title: 'Crecimiento Trimestral de Reseñas',
            xaxis: { title: 'Período' },
            yaxis: { title: 'Número de Reseñas' },
            showlegend: false
          }
        }
      case 'value':
        return {
          data: [valueData],
          layout: {
            title: 'Evolución de Percepción de Valor',
            xaxis: { title: 'Período' },
            yaxis: { title: 'Calificación (1-10)', range: [7, 8.5] },
            showlegend: false
          }
        }
      case 'direct':
        return {
          data: [directData],
          layout: {
            title: 'Distribución de Reservas (Meta 2026)',
            showlegend: true
          }
        }
      default:
        return { data: [], layout: {} }
    }
  }

  const kpiCards = [
    {
      title: "ROI Proyectado",
      value: "320%",
      description: "Retorno de inversión esperado en campañas",
      icon: TrendingUp,
      color: "blue"
    },
    {
      title: "Alcance Total",
      value: "2.5M+",
      description: "Personas alcanzadas en todas las campañas",
      icon: Users,
      color: "green"
    },
    {
      title: "Engagement Rate",
      value: "4.5%+",
      description: "Tasa de interacción promedio esperada",
      icon: Star,
      color: "yellow"
    },
    {
      title: "Conversión",
      value: "2.8%",
      description: "Tasa de conversión a reservas",
      icon: Target,
      color: "purple"
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 text-blue-600 bg-blue-50",
      green: "from-green-500 to-green-600 text-green-600 bg-green-50",
      yellow: "from-yellow-500 to-yellow-600 text-yellow-600 bg-yellow-50",
      purple: "from-purple-500 to-purple-600 text-purple-600 bg-purple-50"
    }
    return colors[color as keyof typeof colors]
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Métricas y KPIs Estratégicos</h2>
      <p className="text-gray-600 mb-8">
        Seguimiento detallado del progreso hacia los objetivos establecidos
      </p>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {kpiCards.map((kpi) => {
          const Icon = kpi.icon
          const colorClasses = getColorClasses(kpi.color)
          
          return (
            <div key={kpi.title} className={`${colorClasses.split(' ').slice(2).join(' ')} p-6 rounded-lg border border-gray-200`}>
              <div className="flex items-center justify-between mb-3">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${colorClasses.split(' ').slice(0, 2).join(' ')} text-white`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className={`text-2xl font-bold ${colorClasses.split(' ')[2]}`}>
                  {kpi.value}
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{kpi.title}</h3>
              <p className="text-sm text-gray-600">{kpi.description}</p>
            </div>
          )
        })}
      </div>

      {/* Metric Selection */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Análisis Detallado por Métrica</h3>
        <div className="flex flex-wrap gap-2">
          {metrics.map((metric) => {
            const Icon = metric.icon
            const colorClasses = getColorClasses(metric.color)
            
            return (
              <button
                key={metric.id}
                onClick={() => setSelectedMetric(metric.id)}
                className={`flex items-center px-4 py-2 rounded-lg border-2 transition-all ${
                  selectedMetric === metric.id
                    ? `${colorClasses.split(' ').slice(2).join(' ')} border-current`
                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {metric.title}
              </button>
            )
          })}
        </div>
      </div>

      {/* Selected Metric Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-gray-50 p-6 rounded-lg">
            <Plot
              data={getChartData().data}
              layout={{
                ...getChartData().layout,
                autosize: true,
                margin: { l: 50, r: 50, t: 50, b: 50 }
              }}
              style={{ width: '100%', height: '400px' }}
              config={{ responsive: true, displayModeBar: false }}
            />
          </div>
        </div>

        <div className="lg:col-span-1">
          {metrics.filter(m => m.id === selectedMetric).map(metric => {
            const Icon = metric.icon
            const colorClasses = getColorClasses(metric.color)
            
            return (
              <div key={metric.id} className={`${colorClasses.split(' ').slice(2).join(' ')} p-6 rounded-lg border-2 border-current`}>
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${colorClasses.split(' ').slice(0, 2).join(' ')} text-white mr-3`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{metric.title}</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Actual</span>
                      <span className="font-semibold text-gray-900">{metric.current}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Meta</span>
                      <span className={`font-bold ${colorClasses.split(' ')[2]}`}>{metric.target}</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-700">{metric.description}</p>
                  </div>
                  
                  {/* Progress bar */}
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progreso</span>
                      <span>En desarrollo</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${colorClasses.split(' ').slice(0, 2).join(' ')}`}
                        style={{ width: '25%' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Monthly Tracking Table */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Seguimiento Mensual de KPIs</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mes</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ocupación</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reseñas</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Directas</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ROI</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                { month: 'Jun 2025', occupancy: '52%', reviews: '135', value: '7.3', direct: '16%', roi: '280%' },
                { month: 'Jul 2025', occupancy: '58%', reviews: '150', value: '7.4', direct: '17%', roi: '295%' },
                { month: 'Ago 2025', occupancy: '55%', reviews: '165', value: '7.5', direct: '18%', roi: '305%' },
                { month: 'Sep 2025', occupancy: '60%', reviews: '180', value: '7.6', direct: '19%', roi: '310%' },
                { month: 'Oct 2025', occupancy: '57%', reviews: '200', value: '7.7', direct: '20%', roi: '315%' },
                { month: 'Nov 2025', occupancy: '75%', reviews: '220', value: '7.8', direct: '21%', roi: '320%' },
              ].map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.month}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.occupancy}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.reviews}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.value}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.direct}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.roi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

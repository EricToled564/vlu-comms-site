
'use client'

import { Target, TrendingUp, Star, Users, DollarSign } from 'lucide-react'

export default function ObjectivesSection() {
  const objectives = [
    {
      id: 1,
      title: "Aumentar la ocupación anual del 45% al 65%",
      description: "Mediante la adquisición segmentada y estrategias de comunicación dirigidas",
      icon: TrendingUp,
      current: "45%",
      target: "65%",
      color: "blue"
    },
    {
      id: 2,
      title: "Mejorar la calificación de percepción de valor",
      description: "De 7.2 a 8.0+ mediante comunicación mejorada del valor agregado",
      icon: Star,
      current: "7.2/10",
      target: "8.0+/10",
      color: "green"
    },
    {
      id: 3,
      title: "Triplicar el volumen de reseñas",
      description: "De 120 a 360+ reseñas en plataformas clave para mayor credibilidad",
      icon: Users,
      current: "120",
      target: "360+",
      color: "purple"
    },
    {
      id: 4,
      title: "Establecer liderazgo de mercado",
      description: "Como destino premier de escape de fin de semana en la región",
      icon: Target,
      current: "Competidor",
      target: "Líder",
      color: "orange"
    },
    {
      id: 5,
      title: "Generar 25% de reservas directas",
      description: "Reduciendo la dependencia de OTAs y mejorando márgenes",
      icon: DollarSign,
      current: "15%",
      target: "25%",
      color: "red"
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 text-blue-600 bg-blue-50 border-blue-200",
      green: "from-green-500 to-green-600 text-green-600 bg-green-50 border-green-200",
      purple: "from-purple-500 to-purple-600 text-purple-600 bg-purple-50 border-purple-200",
      orange: "from-orange-500 to-orange-600 text-orange-600 bg-orange-50 border-orange-200",
      red: "from-red-500 to-red-600 text-red-600 bg-red-50 border-red-200"
    }
    return colors[color as keyof typeof colors]
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Objetivos Estratégicos Primarios</h2>
      <p className="text-gray-600 mb-8">
        Período de implementación: 15 de junio de 2025 - 14 de junio de 2026
      </p>

      <div className="space-y-6">
        {objectives.map((objective) => {
          const Icon = objective.icon
          const colorClasses = getColorClasses(objective.color)
          
          return (
            <div key={objective.id} className={`border-2 rounded-lg p-6 ${colorClasses.split(' ').slice(2).join(' ')}`}>
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${colorClasses.split(' ').slice(0, 2).join(' ')} text-white`}>
                  <Icon className="w-6 h-6" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Objetivo {objective.id}: {objective.title}
                    </h3>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Actual</div>
                        <div className="font-semibold text-gray-700">{objective.current}</div>
                      </div>
                      <div className="text-2xl text-gray-400">→</div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Meta</div>
                        <div className={`font-bold text-lg ${colorClasses.split(' ')[2]}`}>{objective.target}</div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700">{objective.description}</p>
                  
                  {/* Progress visualization */}
                  <div className="mt-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progreso esperado</span>
                      <span>Meta 2026</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${colorClasses.split(' ').slice(0, 2).join(' ')}`}
                        style={{ width: '0%' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Strategic Impact Summary */}
      <div className="mt-8 bg-gray-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Impacto Estratégico Proyectado</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">+44%</div>
            <div className="text-sm text-gray-600">Incremento en Ocupación</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">+200%</div>
            <div className="text-sm text-gray-600">Aumento en Reseñas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">+67%</div>
            <div className="text-sm text-gray-600">Mejora en Reservas Directas</div>
          </div>
        </div>
      </div>
    </div>
  )
}

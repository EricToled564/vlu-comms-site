
'use client'

import { useState } from 'react'
import { Target, Users, Heart, Gift, Utensils, Waves, Sun, Leaf, Star } from 'lucide-react'

export default function CampaignsSection() {
  const [selectedCampaign, setSelectedCampaign] = useState(1)

  const campaigns = [
    {
      id: 1,
      title: "Lanzamiento de Temporada Alta",
      period: "15 Jun - 15 Jul 2025",
      budget: "$25,000",
      target: "Familias y Parejas",
      objective: "Establecer presencia fuerte en temporada pico",
      icon: Sun,
      color: "orange",
      description: "Campaña de lanzamiento para posicionar VLU como el destino premier para vacaciones de verano.",
      tactics: [
        "Anuncios pagados en Facebook e Instagram dirigidos a familias de CDMX",
        "Colaboraciones con influencers de lifestyle y viajes",
        "Promociones de reserva anticipada con descuentos del 15%",
        "Content marketing con experiencias auténticas del lago"
      ],
      kpis: [
        "Alcance: 500,000 personas",
        "Engagement rate: 4.5%+",
        "Conversión a reservas: 2.8%",
        "ROI esperado: 320%"
      ]
    },
    {
      id: 2,
      title: "Escapadas Románticas",
      period: "16 Jul - 31 Ago 2025",
      budget: "$18,000",
      target: "Parejas 25-45 años",
      objective: "Capturar mercado de escapadas románticas",
      icon: Heart,
      color: "red",
      description: "Enfoque en parejas buscando experiencias románticas junto al lago.",
      tactics: [
        "Paquetes románticos con cenas privadas",
        "Fotografía profesional de parejas incluida",
        "Partnerships con spas locales",
        "Testimoniales de parejas reales"
      ],
      kpis: [
        "Bookings de parejas: +45%",
        "Valor promedio por reserva: +25%",
        "Reseñas románticas: 50+",
        "Repeat customers: 30%"
      ]
    },
    {
      id: 3,
      title: "Aventura y Naturaleza",
      period: "1 Sep - 30 Sep 2025",
      budget: "$22,000",
      target: "Aventureros 28-50 años",
      objective: "Atraer segmento de turismo activo",
      icon: Leaf,
      color: "green",
      description: "Promoción de actividades al aire libre y conexión con la naturaleza.",
      tactics: [
        "Tours en kayak y paddleboard",
        "Senderismo guiado en áreas naturales",
        "Fotografía de aventura profesional",
        "Alianzas con operadores de turismo activo"
      ],
      kpis: [
        "Participación en actividades: 80%",
        "Satisfacción actividades: 9.0+",
        "Bookings aventureros: +35%",
        "Social media mentions: 200+"
      ]
    },
    {
      id: 4,
      title: "Gastronomía Local",
      period: "1 Oct - 31 Oct 2025",
      budget: "$20,000",
      target: "Foodies y Gourmets",
      objective: "Posicionar experiencia gastronómica única",
      icon: Utensils,
      color: "purple",
      description: "Destacar la cocina local y experiencias gastronómicas exclusivas.",
      tactics: [
        "Chef invitados de restaurantes reconocidos",
        "Cenas temáticas con productos locales",
        "Workshops de cocina tradicional",
        "Maridajes con mezcales artesanales"
      ],
      kpis: [
        "Ocupación restaurante: 85%+",
        "Rating gastronómico: 8.5+",
        "Revenue F&B: +40%",
        "Food bloggers coverage: 15+"
      ]
    },
    {
      id: 5,
      title: "Wellness y Relajación",
      period: "1 Nov - 30 Nov 2025",
      budget: "$24,000",
      target: "Profesionales estresados",
      objective: "Capturar mercado de wellness tourism",
      icon: Waves,
      color: "blue",
      description: "Enfoque en bienestar, relajación y desconexión digital.",
      tactics: [
        "Paquetes de spa y masajes",
        "Yoga matutino junto al lago",
        "Meditación y mindfulness sessions",
        "Detox digital experiences"
      ],
      kpis: [
        "Bookings wellness: +50%",
        "Duración promedio estadía: +1.2 días",
        "Wellness satisfaction: 9.2+",
        "Referrals: +25%"
      ]
    },
    {
      id: 6,
      title: "Temporada Navideña",
      period: "1 Dic - 31 Dic 2025",
      budget: "$30,000",
      target: "Familias y Grupos",
      objective: "Maximizar ocupación en temporada alta",
      icon: Gift,
      color: "red",
      description: "Celebraciones navideñas y de fin de año junto al lago.",
      tactics: [
        "Paquetes familiares navideños",
        "Cenas de Nochebuena y Año Nuevo",
        "Actividades para niños y familias",
        "Decoración temática del resort"
      ],
      kpis: [
        "Ocupación diciembre: 90%+",
        "Revenue per room: +35%",
        "Family satisfaction: 9.0+",
        "Advance bookings 2026: 40+"
      ]
    },
    {
      id: 7,
      title: "Año Nuevo, Nueva Experiencia",
      period: "1 Ene - 28 Feb 2026",
      budget: "$26,000",
      target: "Millennials y Gen Z",
      objective: "Capturar tendencia de 'new year, new me'",
      icon: Star,
      color: "yellow",
      description: "Enfoque en renovación personal y nuevas experiencias.",
      tactics: [
        "Retiros de bienestar y fitness",
        "Workshops de desarrollo personal",
        "Actividades de team building",
        "Promociones para grupos de amigos"
      ],
      kpis: [
        "Bookings millennials: +60%",
        "Group bookings: +45%",
        "Social sharing: 300+ posts",
        "Return rate: 35%"
      ]
    },
    {
      id: 8,
      title: "Romance de Primavera",
      period: "1 Mar - 30 Abr 2026",
      budget: "$28,000",
      target: "Parejas y Lunas de Miel",
      objective: "Dominar mercado de bodas y lunas de miel",
      icon: Heart,
      color: "pink",
      description: "Temporada de bodas y celebraciones románticas.",
      tactics: [
        "Paquetes de luna de miel exclusivos",
        "Ceremonias de compromiso junto al lago",
        "Fotografía de bodas profesional",
        "Alianzas con wedding planners"
      ],
      kpis: [
        "Wedding bookings: 25+",
        "Honeymoon packages: 40+",
        "Wedding satisfaction: 9.5+",
        "Referrals from couples: 50+"
      ]
    },
    {
      id: 9,
      title: "Aventura Familiar",
      period: "1 May - 31 May 2026",
      budget: "$25,000",
      target: "Familias con niños",
      objective: "Establecer como destino family-friendly",
      icon: Users,
      color: "green",
      description: "Actividades y experiencias diseñadas para toda la familia.",
      tactics: [
        "Kids club con actividades acuáticas",
        "Tours familiares de naturaleza",
        "Talleres de arte y manualidades",
        "Noches de película bajo las estrellas"
      ],
      kpis: [
        "Family bookings: +55%",
        "Kids satisfaction: 9.0+",
        "Family return rate: 40%",
        "Parent testimonials: 30+"
      ]
    },
    {
      id: 10,
      title: "Temporada de Graduaciones",
      period: "1 Jun - 30 Jun 2026",
      budget: "$22,000",
      target: "Familias celebrando graduaciones",
      objective: "Capturar mercado de celebraciones especiales",
      icon: Star,
      color: "blue",
      description: "Celebraciones de graduación y logros académicos.",
      tactics: [
        "Paquetes de celebración familiar",
        "Cenas de gala para graduados",
        "Sesiones fotográficas profesionales",
        "Actividades intergeneracionales"
      ],
      kpis: [
        "Graduation bookings: 35+",
        "Celebration satisfaction: 9.2+",
        "Photo session bookings: 80%",
        "Multi-generational stays: 25+"
      ]
    },
    {
      id: 11,
      title: "Verano Épico",
      period: "1 Jul - 31 Ago 2026",
      budget: "$35,000",
      target: "Todos los segmentos",
      objective: "Maximizar ocupación en temporada pico",
      icon: Sun,
      color: "orange",
      description: "Campaña masiva para la temporada alta de verano.",
      tactics: [
        "Mega campaña multimedia",
        "Eventos especiales semanales",
        "Colaboraciones con celebrities",
        "Promociones de estadías extendidas"
      ],
      kpis: [
        "Ocupación verano: 95%+",
        "Revenue growth: +50%",
        "Brand awareness: +75%",
        "Media coverage: 50+ mentions"
      ]
    },
    {
      id: 12,
      title: "Regreso a Clases",
      period: "1 Sep - 30 Sep 2026",
      budget: "$20,000",
      target: "Padres y Parejas sin niños",
      objective: "Aprovechar período post-vacaciones familiares",
      icon: Leaf,
      color: "green",
      description: "Enfoque en adultos buscando tranquilidad después del verano.",
      tactics: [
        "Promociones para parejas adultas",
        "Retiros de wellness y spa",
        "Actividades de relajación",
        "Ofertas de temporada baja"
      ],
      kpis: [
        "Adult-only bookings: +40%",
        "Spa utilization: 70%+",
        "Relaxation satisfaction: 9.0+",
        "Shoulder season revenue: +30%"
      ]
    },
    {
      id: 13,
      title: "Otoño Dorado",
      period: "1 Oct - 30 Nov 2026",
      budget: "$24,000",
      target: "Viajeros maduros y jubilados",
      objective: "Capturar mercado de viajeros senior",
      icon: Leaf,
      color: "amber",
      description: "Experiencias diseñadas para viajeros maduros y jubilados.",
      tactics: [
        "Paquetes para viajeros senior",
        "Tours culturales y gastronómicos",
        "Actividades de bajo impacto",
        "Servicios de concierge especializado"
      ],
      kpis: [
        "Senior bookings: +45%",
        "Extended stays: 60%",
        "Senior satisfaction: 9.3+",
        "Word-of-mouth referrals: 40+"
      ]
    },
    {
      id: 14,
      title: "Cierre de Año Espectacular",
      period: "1 Dic - 14 Jun 2026",
      budget: "$32,000",
      target: "Todos los segmentos premium",
      objective: "Cerrar el ciclo con máxima ocupación y satisfacción",
      icon: Star,
      color: "purple",
      description: "Gran finale del año estratégico con eventos especiales.",
      tactics: [
        "Gala de aniversario del resort",
        "Eventos exclusivos para huéspedes VIP",
        "Lanzamiento de programa de lealtad",
        "Celebración de logros del año"
      ],
      kpis: [
        "VIP bookings: 50+",
        "Loyalty program signups: 200+",
        "Year-end satisfaction: 9.5+",
        "Annual revenue target: 100%+"
      ]
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      orange: "from-orange-500 to-orange-600 text-orange-600 bg-orange-50 border-orange-200",
      red: "from-red-500 to-red-600 text-red-600 bg-red-50 border-red-200",
      green: "from-green-500 to-green-600 text-green-600 bg-green-50 border-green-200",
      purple: "from-purple-500 to-purple-600 text-purple-600 bg-purple-50 border-purple-200",
      blue: "from-blue-500 to-blue-600 text-blue-600 bg-blue-50 border-blue-200",
      yellow: "from-yellow-500 to-yellow-600 text-yellow-600 bg-yellow-50 border-yellow-200",
      pink: "from-pink-500 to-pink-600 text-pink-600 bg-pink-50 border-pink-200",
      amber: "from-amber-500 to-amber-600 text-amber-600 bg-amber-50 border-amber-200"
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const selectedCampaignData = campaigns.find(c => c.id === selectedCampaign) || campaigns[0]

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">14 Campañas Estratégicas Detalladas</h2>
      <p className="text-gray-600 mb-8">
        Calendario completo de campañas de comunicación para el período 15 junio 2025 - 14 junio 2026
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Campaign List */}
        <div className="lg:col-span-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Seleccionar Campaña</h3>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {campaigns.map((campaign) => {
              const Icon = campaign.icon
              const colorClasses = getColorClasses(campaign.color)
              
              return (
                <button
                  key={campaign.id}
                  onClick={() => setSelectedCampaign(campaign.id)}
                  className={`w-full text-left p-3 rounded-lg border-2 transition-all ${
                    selectedCampaign === campaign.id
                      ? colorClasses.split(' ').slice(2).join(' ')
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${
                      selectedCampaign === campaign.id
                        ? `bg-gradient-to-r ${colorClasses.split(' ').slice(0, 2).join(' ')} text-white`
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm text-gray-900 truncate">
                        {campaign.title}
                      </div>
                      <div className="text-xs text-gray-500">
                        {campaign.period}
                      </div>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Campaign Details */}
        <div className="lg:col-span-2">
          <div className={`border-2 rounded-lg p-6 ${getColorClasses(selectedCampaignData.color).split(' ').slice(2).join(' ')}`}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${getColorClasses(selectedCampaignData.color).split(' ').slice(0, 2).join(' ')} text-white`}>
                  <selectedCampaignData.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Campaña {selectedCampaignData.id}: {selectedCampaignData.title}
                  </h3>
                  <p className="text-gray-600">{selectedCampaignData.period}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">Presupuesto</div>
                <div className="text-lg font-bold text-gray-900">{selectedCampaignData.budget}</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <div className="text-sm font-medium text-gray-700 mb-1">Público Objetivo</div>
                <div className="text-gray-900">{selectedCampaignData.target}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-700 mb-1">Objetivo Principal</div>
                <div className="text-gray-900">{selectedCampaignData.objective}</div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Descripción</h4>
              <p className="text-gray-700">{selectedCampaignData.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Tácticas Principales</h4>
                <ul className="space-y-2">
                  {selectedCampaignData.tactics.map((tactic, index) => (
                    <li key={index} className="flex items-start">
                      <span className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 bg-gradient-to-r ${getColorClasses(selectedCampaignData.color).split(' ').slice(0, 2).join(' ')}`}></span>
                      <span className="text-gray-700 text-sm">{tactic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">KPIs Esperados</h4>
                <ul className="space-y-2">
                  {selectedCampaignData.kpis.map((kpi, index) => (
                    <li key={index} className="flex items-start">
                      <Target className={`w-4 h-4 mt-0.5 mr-3 flex-shrink-0 ${getColorClasses(selectedCampaignData.color).split(' ')[2]}`} />
                      <span className="text-gray-700 text-sm">{kpi}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Campaign Summary */}
      <div className="mt-8 bg-gray-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Resumen de Inversión Anual</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">$340,000</div>
            <div className="text-sm text-gray-600">Inversión Total</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">14</div>
            <div className="text-sm text-gray-600">Campañas Ejecutadas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">12</div>
            <div className="text-sm text-gray-600">Meses de Cobertura</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600">320%</div>
            <div className="text-sm text-gray-600">ROI Proyectado</div>
          </div>
        </div>
      </div>
    </div>
  )
}

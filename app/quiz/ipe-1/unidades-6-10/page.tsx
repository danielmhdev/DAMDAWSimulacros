"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, X, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface Question {
  question: string
  options: string[]
  correctAnswer: number
}

const questions: Question[] = [
  // UNIDAD 6
  {
    question: "¿Qué organismo garantiza el pago de salarios e indemnizaciones en caso de insolvencia empresarial?",
    options: ["INSS", "SEPE", "Tesoreria General de la Seguridad Social", "FOGASA"],
    correctAnswer: 3,
  },
  {
    question: "¿Cuántas horas extraordinarias como máximo puede realizar un trabajador al año?",
    options: ["60 horas", "70 horas", "80 horas", "100 horas"],
    correctAnswer: 2,
  },
  {
    question: "¿Cuál es la duración mínima del descanso cuando la jornada supera las 6 horas?",
    options: ["10 minutos", "20 minutos", "15 minutos", "30 minutos"],
    correctAnswer: 2,
  },
  {
    question: "El trabajo nocturno se considera el realizado entre:",
    options: ["21:00 y 5:00", "23:00 y 7:00", "22:00 y 6:00", "0:00 y 8:00"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué documento refleja de manera oficial las percepciones salariales y deducciones del trabajador?",
    options: ["Contrato de trabajo", "Convenio colectivo", "Nómina", "Certificado de empresarial"],
    correctAnswer: 2,
  },
  {
    question:
      "¿Cuál es la duración máxima de la jornada laboral semanal en España según el Estatuto de los Trabajadores?",
    options: ["35 horas", "40 horas", "38 horas", "45 horas"],
    correctAnswer: 1,
  },
  {
    question: "El descanso mínimo entre el final de una jornada y el comienzo de la siguiente debe ser de:",
    options: ["10 horas", "11 horas", "12 horas", "14 horas"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué conceptos NO se consideran salario según la normativa?",
    options: [
      "Complementos salariales",
      "indemnizaciones, suplidos y prestaciones de la Seguridad Social",
      "Pagas extraordinarias",
      "Horas extraordinarias",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Cuál es el límite diario de horas de trabajo salvo acuerdo en contrato?",
    options: ["9 horas", "10 horas", "8 horas", "7.5 horas"],
    correctAnswer: 0,
  },
  {
    question: "¿Cuántos días de vacaciones anuales mínimas corresponden a un trabajador en España?",
    options: ["25 días hábiles", "28 días naturales", "30 días naturales", "31 días naturales"],
    correctAnswer: 2,
  },

  // UNIDAD 7
  {
    question: "¿Qué ocurre durante la suspensión del contrato de trabajo?",
    options: [
      "El trabajador sigue percibiendo salario completo.",
      "Se interrumpen temporalmente las obligaciones laborales y salariales.",
      "Se extingue definitivamente el contrato laboral.",
      "El trabajador pierde la antigüedad y el puesto.",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué artículo de la Constitución Española reconoce el derecho a huelga?",
    options: ["Artículo 28.2", "Artículo 37.", "Artículo 14.", "Artículo 23."],
    correctAnswer: 0,
  },
  {
    question: "En una excedencia voluntaria, ¿cuál es la duración mínima que puede solicitar el trabajador?",
    options: ["Un mes.", "Dos meses.", "Cuatro meses.", "Un año"],
    correctAnswer: 3,
  },
  {
    question: "En el despido objetivo, ¿qué indemnización corresponde al trabajador?",
    options: [
      "12 días por año trabajado.",
      "20 días por año trabajado.",
      "30 días por año trabajado.",
      "No tiene derecho a indemnización.",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Cuál de las siguientes es una causa legal de suspensión del contrato?",
    options: [
      "Vacaciones anuales.",
      "Mutuo acuerdo entre las partes.",
      "Jubilación anticipada.",
      "Cambio de puesto dentro de la empresa.",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué organismo vela por el cumplimiento de la legislación laboral y de seguridad social?",
    options: [
      "Inspección de Trabajo y Seguridad Social (ITSS).",
      "Comité de Empresa.",
      "Delegados de Personal.",
      "Ministerio de Justicia.",
    ],
    correctAnswer: 0,
  },
  {
    question: "¿Qué órgano actúa como primera instancia en los conflictos laborales?",
    options: [
      "Sala de lo Social del Tribunal Supremo.",
      "Tribunal Constitucional.",
      "Juzgados de lo Social.",
      "Audiencia Nacional.",
    ],
    correctAnswer: 2,
  },
  {
    question: "¿Qué implica una modificación sustancial de las condiciones de trabajo?",
    options: [
      "Cambios menores en la jornada laboral sin aviso previo.",
      "Cambios únicamente en el lugar de trabajo.",
      "Alteraciones relevantes que afectan aspectos como salario, funciones u horario.",
      "Cambios únicamente en el lugar de trabajo.",
    ],
    correctAnswer: 2,
  },

  // UNIDAD 8
  {
    question: "¿Qué novedad introduce el sistema a partir de 2024 respecto al alumnado en prácticas formativas?",
    options: [
      "Se excluyen de la cotización",
      "Se incluyen en el Régimen General, asimilados a trabajadores por cuenta ajena.",
      "Pueden cotizar de forma voluntaria.",
      "Solo cotizan si las prácticas son remuneradas.",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué organismo gestiona las prestaciones económicas como pensiones y subsidios?",
    options: ["SEPE", "Tesorería General de la Seguridad Social", "INSS", "INSERSO"],
    correctAnswer: 2,
  },
  {
    question: "¿Cuál es la principal fuente de financiación del sistema de Seguridad Social en España?",
    options: ["Impuestos sobre la renta.", "Fondos Europeos.", "Préstamos del estado.", "Cotizaciones sociales."],
    correctAnswer: 3,
  },
  {
    question: "¿Qué tipo de prestaciones se financian con cotizaciones y requieren un periodo mínimo cotizado?",
    options: [
      "Prestaciones no contributivas",
      "Prestaciones contributivas",
      "Prestaciones asistenciales",
      "Prestaciones universales",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "¿Qué principio garantiza que todos los ciudadanos reciban las mismas prestaciones por las mismas contingencias?",
    options: ["Universalidad", "Equidad e igualdad de derechos", "Unidad de caja", "Solidaridad intergeneracional"],
    correctAnswer: 1,
  },
  {
    question:
      "¿Qué tipo de jubilación permite reducir la jornada laboral entre un 25% y un 50% mientras se cobra parte de la pensión?",
    options: ["Jubilación anticipada involuntaria", "Jubilación activa", "Jubilación parcial", "Jubilación flexible"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué régimen incluye los trabajadores por cuenta ajena en España?",
    options: ["Régimen Especial del Mar", "Régimen general.", "Régimen de Autónomos", "Régimen de Minería del Carbón."],
    correctAnswer: 1,
  },
  {
    question: "¿Cuál es el objetivo principal de la Seguridad Social en España?",
    options: [
      "Promover el ahorro privado de los ciudadanos",
      "Financiar los servicios públicos educativos",
      "Proteger a los ciudadanos frente a situaciones de necesidad económica",
      "Controlar el gasto sanitario",
    ],
    correctAnswer: 2,
  },

  // UNIDAD 9
  {
    question: "Las competencias blandas se relacionan principalmente con:",
    options: [
      "Habilidades técnicas medibles.",
      "Conocimientos específicos del puesto",
      "Comunicación, trabajo en equipo y liderazgo",
      "Herramientas informáticas",
    ],
    correctAnswer: 2,
  },
  {
    question: "Según la regla SMART, un objetivo profesional debe ser:",
    options: [
      "General, inspirador y flexible",
      "Especifico, medible, alcanzable y relevante",
      "Exclusivo y difícil de cumplir.",
      "Basado solo en interés personal",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "¿Cuál de los siguientes elementos forma parte de la formación académica dentro de la carrera profesional?",
    options: ["Habilidades blandas", "Educación formal y certificaciones.", "Experiencia laboral.", "Planes de acción"],
    correctAnswer: 1,
  },
  {
    question: "El análisis DAFO sirve para:",
    options: [
      "Organizar el horario laboral",
      "Evaluar la situación profesional identificando fortalezas, debilidades...",
      "Medir la productividad de un empleado.",
      "Calcular la antigüedad en la empresa",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué se entiende por carrera profesional?",
    options: [
      "El primer empleo que obtiene una persona.",
      "El título académico máximo alcanzado.",
      "El conjunto de experiencias laborales y formativas a lo largo de la vida.",
      "Los años de experiencia en una misma empresa.",
    ],
    correctAnswer: 2,
  },
  {
    question: "¿Cuál de las siguientes afirmaciones sobre los Ciclos Formativos de Grado Superior (CFGs) es correcta?",
    options: [
      "Duran un año y no requieren titulación previa.",
      "Están dirigidos a titulados de Grado Medio o Bachillerato.",
      "Son equivalentes a la Formación Profesional Básica.",
      "Otorgan una cualificación de nivel 1",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Cuál de los siguientes NO es un componente clave del potencial profesional?",
    options: [
      "Talentos Naturales",
      "Estabilidad Laboral",
      "Intereses y valores",
      "Capacidad de aprendizaje y adaptabilidad",
    ],
    correctAnswer: 1,
  },
  {
    question: "El autoconocimiento en la carrera profesional permite principalmente:",
    options: [
      "Decidir qué empresa ofrece mejores salarios.",
      "Obtener una titulación superior.",
      "Identificar fortalezas, valores e intereses personales.",
      "Aumentar el número de contactos profesionales",
    ],
    correctAnswer: 2,
  },

  // UNIDAD 10
  {
    question: "¿Qué caracteriza el sector primario?",
    options: [
      "Actividades de servicios.",
      "Extracción y obtención de recursos naturales.",
      "Producción de bienes manufacturados.",
      "Actividades tecnológicas y de investigación",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Cuál de las siguientes se considera una habilidad profesional muy demandada?",
    options: [
      "Especialización exclusiva sin actualización.",
      "Evitar el trabajo en equipo.",
      "Comunicación efectiva y pensamiento crítico",
      "Memorizar información sin análisis.",
    ],
    correctAnswer: 2,
  },
  {
    question: "¿Cuál de las siguientes tendencias impacta actualmente los sectores profesionales?",
    options: [
      "Reducción de la digitalización.",
      "Aislamiento económico.",
      "Disminución del comercio internacional.",
      "Globalización y sostenibilidad.",
    ],
    correctAnswer: 3,
  },
  {
    question: "¿Qué opción describe el autoempleo?",
    options: [
      "Trabajo en empresas privadas con contrato fijo.",
      "Acceso mediante oposición pública.",
      "Actividad laboral independiente o emprendimiento.",
      "Contrato temporal con formación incluida.",
    ],
    correctAnswer: 2,
  },
  {
    question: "El Catálogo Nacional de Cualificaciones Profesionales (CNCP) tiene como objetivo:",
    options: [
      "Clasificar las empresas según su tamaño.",
      "Evaluar a los empleados en sus puestos.",
      "Organizar las cualificaciones y facilitar la movilidad laboral.",
      "Regular las oposiciones en España.",
    ],
    correctAnswer: 2,
  },
  {
    question: "¿Qué define a un sector profesional?",
    options: [
      "El lugar donde se trabaja.",
      "El nivel salarial del empleo.",
      "El grupo de actividades y ocupaciones relacionadas por conocimientos",
      "El tipo de contrato laboral.",
    ],
    correctAnswer: 2,
  },
  {
    question: "¿Qué sectores tienen una influencia directa en el bienestar social según el documento?",
    options: ["Energía y transporte.", "Educación y salud.", "Industria y agricultura.", "Turismo y finanzas."],
    correctAnswer: 1,
  },
  {
    question: "El sector cuaternario se distingue por:",
    options: [
      "Actividades industriales y de construcción.",
      "Conocimientos avanzados y uso de tecnología.",
      "Agricultura y ganadería.",
      "Comercio y hostelería.",
    ],
    correctAnswer: 1,
  },
]

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

export default function IPEUnidades610Quiz() {
  const [started, setStarted] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([])
  const [finished, setFinished] = useState(false)

  const startQuiz = () => {
    setShuffledQuestions(shuffleArray(questions))
    setStarted(true)
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setShowFeedback(false)
    setScore(0)
    setFinished(false)
  }

  const handleAnswerClick = (answerIndex: number) => {
    if (showFeedback) return

    setSelectedAnswer(answerIndex)
    setShowFeedback(true)

    if (answerIndex === shuffledQuestions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer(null)
      setShowFeedback(false)
    } else {
      setFinished(true)
    }
  }

  if (!started) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-lg p-8 bg-card border-border">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>

          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold">
              <span className="text-foreground">IPE I</span>
            </h1>
            <p className="text-muted-foreground text-lg">TEST UNIDADES 6-10</p>

            <div className="space-y-4 text-left py-6">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-yellow-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">43 Preguntas</p>
                  <p className="text-sm text-muted-foreground">
                    Jornada laboral, contrato, Seguridad Social, carrera profesional y sectores
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-yellow-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Preguntas Aleatorizadas</p>
                  <p className="text-sm text-muted-foreground">Cada sesión es diferente</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-yellow-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Retroalimentación Inmediata</p>
                  <p className="text-sm text-muted-foreground">Aprende mientras practicas</p>
                </div>
              </div>
            </div>

            <Button
              onClick={startQuiz}
              size="lg"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold"
            >
              Comenzar Quiz
            </Button>
          </div>
        </Card>
      </div>
    )
  }

  if (finished) {
    const percentage = Math.round((score / shuffledQuestions.length) * 100)
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-lg p-8 bg-card border-border">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Quiz Completado</h2>
            <div className="py-8">
              <div className="text-6xl font-bold text-yellow-500 mb-2">{percentage}%</div>
              <p className="text-xl text-muted-foreground">
                {score} de {shuffledQuestions.length} correctas
              </p>
            </div>

            <div className="space-y-2">
              {percentage >= 90 && <p className="text-lg text-foreground">Excelente. Dominas la materia.</p>}
              {percentage >= 70 && percentage < 90 && (
                <p className="text-lg text-foreground">Muy bien. Buen conocimiento.</p>
              )}
              {percentage >= 50 && percentage < 70 && (
                <p className="text-lg text-foreground">Bien hecho. Sigue repasando.</p>
              )}
              {percentage < 50 && <p className="text-lg text-foreground">Sigue estudiando. Tú puedes.</p>}
            </div>

            <div className="space-y-3">
              <Button
                onClick={startQuiz}
                size="lg"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold"
              >
                Intentar de Nuevo
              </Button>
              <Link href="/" className="block">
                <Button variant="outline" size="lg" className="w-full bg-transparent">
                  Volver al Inicio
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  const currentQuestion = shuffledQuestions[currentQuestionIndex]

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl p-8 bg-card border-border">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Salir del examen
        </Link>

        <div className="space-y-6">
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>
              Pregunta {currentQuestionIndex + 1} de {shuffledQuestions.length}
            </span>
            <span>Puntuación: {score}</span>
          </div>

          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-yellow-500 transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / shuffledQuestions.length) * 100}%` }}
            />
          </div>

          <h2 className="text-2xl font-bold text-foreground text-balance">{currentQuestion.question}</h2>

          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index
              const isCorrect = index === currentQuestion.correctAnswer
              const showCorrect = showFeedback && isCorrect
              const showIncorrect = showFeedback && isSelected && !isCorrect

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  disabled={showFeedback}
                  className={`
                    w-full text-left p-4 rounded-lg border-2 transition-all
                    ${!showFeedback && "hover:border-yellow-500 hover:bg-accent cursor-pointer"}
                    ${showFeedback && "cursor-not-allowed"}
                    ${isSelected && !showFeedback && "border-yellow-500 bg-accent"}
                    ${showCorrect && "border-green-500 bg-green-500/10"}
                    ${showIncorrect && "border-red-500 bg-red-500/10"}
                    ${!isSelected && !showCorrect && !showIncorrect && "border-border bg-card"}
                  `}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-foreground font-medium">{option}</span>
                    {showCorrect && <Check className="w-5 h-5 text-green-500 shrink-0" />}
                    {showIncorrect && <X className="w-5 h-5 text-red-500 shrink-0" />}
                  </div>
                </button>
              )
            })}
          </div>

          {showFeedback && (
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="text-sm">
                {selectedAnswer === currentQuestion.correctAnswer ? (
                  <span className="text-green-500 font-semibold">Correcto</span>
                ) : (
                  <span className="text-red-500 font-semibold">Incorrecto</span>
                )}
              </div>
              <Button onClick={handleNext} className="bg-yellow-500 hover:bg-yellow-600 text-white">
                {currentQuestionIndex < shuffledQuestions.length - 1 ? "Siguiente" : "Ver Resultados"}
              </Button>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}

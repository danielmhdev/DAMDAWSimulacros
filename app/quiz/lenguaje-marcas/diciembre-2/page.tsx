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
  {
    question: "¿Qué etiqueta HTML define la estructura principal de una página?",
    options: ["<body>", "<head>", "<html>", "<main>"],
    correctAnswer: 2,
  },
  {
    question: "¿Cuál de las siguientes es una etiqueta semántica?",
    options: ["<div>", "<article>", "<span>", "<br>"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué atributo se usa para mostrar un texto alternativo en una imagen?",
    options: ["title", "href", "src", "alt"],
    correctAnswer: 3,
  },
  {
    question: "¿Qué etiqueta se utiliza para listas ordenadas?",
    options: ["<ul>", "<ol>", "<list>", "<li>"],
    correctAnswer: 1,
  },
  {
    question: "¿Cuál es la etiqueta correcta para insertar un vídeo?",
    options: ["<media>", "<movie>", "<video>", "<vid>"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué caracteriza a un documento XML?",
    options: [
      "Tiene etiquetas predefinidas",
      "Permite crear nuestras propias etiquetas",
      "Solo funciona en navegadores",
      "Se usa solo para bases de datos",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Cuál es la regla principal de XML?",
    options: [
      "No se permiten atributos",
      "Las etiquetas deben escribirse en mayúscula",
      "Debe tener un solo elemento raíz",
      "Debe usarse DTD",
    ],
    correctAnswer: 2,
  },
  {
    question: "¿Qué ocurre si un documento XML no está bien formado?",
    options: ["Se carga igualmente", "El parser dará error", "Se corrige automáticamente", "Se interpreta como JSON"],
    correctAnswer: 1,
  },
  {
    question: "¿Cuál es la cabecera XML correcta?",
    options: ['<?xml version="1.0" encoding="UTF-8"?>', '<xml encoding="utf8">', "<xml>", "<?xml (!?)>"],
    correctAnswer: 0,
  },
  {
    question: '¿Qué es un "atributo" en XML?',
    options: [
      "Un elemento padre",
      "Un dato dentro de una etiqueta",
      "Una referencia externa",
      "Una etiqueta de cierre",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Para qué sirve un DTD?",
    options: [
      "Para dar estilo al XML",
      "Para validar la estructura de un XML",
      "Para convertir XML en JSON",
      "Para reemplazar un XSD",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Cuál define un elemento obligatorio en DTD?",
    options: ["#REQUIRED", "#IMPORTED", "#OPTIONAL", "#FORCED"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué indica el símbolo * en DTD?",
    options: ["Cero o más veces", "Una vez", "Exactamente dos veces", "Una o ninguna"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué tipo de documento permite DTD?",
    options: ["Solo JSON", "HTML y XML", "Solo XML", "CSS"],
    correctAnswer: 1, // Changed from 2 to 1 to mark "HTML y XML" as correct
  },
  {
    question: "¿Qué ventaja tiene XSD sobre DTD?",
    options: ["Permite un estilo visual", "Puede definir tipos de datos", "Es más corto", "No necesita namespaces"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué tipo de dato de XSD define un entero?",
    options: ["xs:word", "xs:number", "xs:int", "xs:integer32"],
    correctAnswer: 2,
  },
  {
    question: "¿Con qué etiqueta se define un elemento en XSD?",
    options: ["<xsd:item>", "<xsd:element>", "<element>", "<schema:element>"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué atributo de XSD define los hijos de un elemento?",
    options: ["sequence", "children", "items", "nodes"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué propiedad controla el espacio exterior de un elemento?",
    options: ["padding", "spacing", "margin", "border"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué selector aplica estilo a todos los párrafos dentro de un div?",
    options: ["div > p", "div + p", "div ~ p", "div p"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué función tiene display: flex;?",
    options: [
      "Crea animaciones",
      "Ordena elementos en un contenedor flexible",
      "Aplica bordes automáticos",
      "Oculta elementos visualmente",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué significa #miID en CSS?",
    options: ["Selector de clase", "Selector universal", "Selector de identificador", "Selector de atributo"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué unidad es relativa al tamaño de la fuente?",
    options: ["px", "em", "cm", "vh"],
    correctAnswer: 1,
  },
  {
    question: "¿Cómo se declara una variable en JavaScript con valor modificable?",
    options: ["const", "var", "fixed", "def"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué método escribe en la consola?",
    options: ["print()", "echo()", "console.log()", "writeConsole()"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué tipo de dato es True?",
    options: ["string", "boolean", "integer", "null"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué operador compara valor y tipo?",
    options: ["==", "=", "===", "!="],
    correctAnswer: 2,
  },
  {
    question: "Odoo es principalmente...",
    options: ["Un framework de videojuegos", "Un CRM y ERP modular", "Un editor de código", "Un sistema operativo"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué se puede gestionar con Odoo?",
    options: ["Inventarios", "Facturación", "Recursos humanos", "Todas las anteriores"],
    correctAnswer: 3,
  },
  {
    question: "¿El framework de desarrollo interno de Odoo se llama...?",
    options: ["Django", "Owl (antiguo Web + QWeb)", "Angular", "React"],
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

export default function LenguajeMarcasDiciembre2Quiz() {
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
              <span className="text-foreground">Lenguaje de Marcas</span>
            </h1>
            <h2 className="text-xl text-muted-foreground">Simulacro Diciembre II</h2>
            <p className="text-muted-foreground text-lg">HTML, XML, DTD, XSD, CSS, JavaScript y Odoo</p>

            <div className="space-y-4 text-left py-6">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">30 Preguntas</p>
                  <p className="text-sm text-muted-foreground">Todos los conceptos clave</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Preguntas Aleatorizadas</p>
                  <p className="text-sm text-muted-foreground">Cada sesión es diferente</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Retroalimentación Inmediata</p>
                  <p className="text-sm text-muted-foreground">Aprende mientras practicas</p>
                </div>
              </div>
            </div>

            <Button
              onClick={startQuiz}
              size="lg"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold"
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
              <div className="text-6xl font-bold text-orange-500 mb-2">{percentage}%</div>
              <p className="text-xl text-muted-foreground">
                {score} de {shuffledQuestions.length} correctas
              </p>
            </div>

            <div className="space-y-2">
              {percentage >= 90 && <p className="text-lg text-foreground">Excelente. Dominas Lenguaje de Marcas.</p>}
              {percentage >= 70 && percentage < 90 && (
                <p className="text-lg text-foreground">Muy bien. Buen conocimiento.</p>
              )}
              {percentage >= 50 && percentage < 70 && (
                <p className="text-lg text-foreground">Bien hecho. Sigue practicando.</p>
              )}
              {percentage < 50 && <p className="text-lg text-foreground">Sigue aprendiendo. Tú puedes.</p>}
            </div>

            <div className="space-y-3">
              <Button
                onClick={startQuiz}
                size="lg"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold"
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
              className="h-full bg-orange-500 transition-all duration-300"
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
                    ${!showFeedback && "hover:border-orange-500 hover:bg-accent cursor-pointer"}
                    ${showFeedback && "cursor-not-allowed"}
                    ${isSelected && !showFeedback && "border-orange-500 bg-accent"}
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
              <Button onClick={handleNext} className="bg-orange-500 hover:bg-orange-600 text-white">
                {currentQuestionIndex < shuffledQuestions.length - 1 ? "Siguiente" : "Ver Resultados"}
              </Button>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, CheckCircle2, XCircle } from "lucide-react"
import Link from "next/link"

interface Question {
  question: string
  options: string[]
  correctAnswer: number
}

const questions: Question[] = [
  {
    question: "¿Qué tipo de lenguaje es SQL?",
    options: ["Orientado a objetos", "Declarativo", "Compilado", "De marcado"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué es un lenguaje orientado a objetos?",
    options: ["CSS", "HTML", "SQL", "Java"],
    correctAnswer: 3,
  },
  {
    question: "¿Para qué sirve el autocompletado?",
    options: [
      "Sugerir código mientras escribes",
      "Eliminar librerías obsoletas",
      "Detectar hardware incompatible",
      "Reducir tamaño del proyecto",
    ],
    correctAnswer: 0,
  },
  {
    question: "¿Qué hace un debugger?",
    options: [
      "Permite ejecutar el código paso a paso",
      "Optimiza la bateria del ordenador",
      "Crea copias de seguridad",
      "Instala controladores del sistema",
    ],
    correctAnswer: 0,
  },
  {
    question: "¿Para qué sirve un archivo .json?",
    options: ["Ejecutar scripts", "Controlar hardware", "Guardar datos estructurados", "Crear imágenes rasterizadas"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué hace un proyecto en el IDE?",
    options: ["Formatea el disco", "Gestiona permisos", "Optimiza el procesador", "Organiza archivos y dependencias"],
    correctAnswer: 3,
  },
  {
    question: "¿Qué tipo de lenguaje es HTML?",
    options: ["Funcional", "Orientado a objetos", "Compilado", "De marcado"],
    correctAnswer: 3,
  },
  {
    question: "¿Qué es una extensión en el IDE?",
    options: ["Un archivo temporal", "Un driver de sonido", "Un servicio web", "Un complemento que añade funciones"],
    correctAnswer: 3,
  },
  {
    question: "¿Qué es un IDE?",
    options: [
      "Un entorno de programación integrado",
      "Un editor de vídeo",
      "Un reproductor de audio",
      "Un gestor de contraseñas",
    ],
    correctAnswer: 0,
  },
  {
    question: "¿Qué es un lenguaje compilado?",
    options: [
      "Un lenguaje que se traduce a binario antes de ejecutarse",
      "Uno que se ejecuta en navegador",
      "Uno que no requiere compilador",
      "Uno que solo sirve para diseño",
    ],
    correctAnswer: 0,
  },
  {
    question: "¿Qué lenguaje es de alto nivel?",
    options: ["Binario", "Ensamblador", "Hexadecimal", "Python"],
    correctAnswer: 3,
  },
  {
    question: "¿Qué lenguaje usa JVM?",
    options: ["C", "JavaScript", "PHP", "Java"],
    correctAnswer: 3,
  },
  {
    question: "¿Qué caracteriza la programación funcional?",
    options: [
      "Uso de punteros",
      "Clases y objetos",
      "Funciones puras sin efectos secundarios",
      "Dependencias del Hardware",
    ],
    correctAnswer: 2,
  },
  {
    question: "¿Qué define un paradigma de programación?",
    options: [
      "El rendimiento del PC",
      "El tamaño de los archivos",
      "La forma de organizar el código",
      "El hardware necesario",
    ],
    correctAnswer: 2,
  },
  {
    question: "¿Qué componente NO incluye un IDE?",
    options: ["Editor de texto con sintaxis", "Navegador web completo", "Compilador integrado", "Depurados avanzado"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué ventaja tiene el lenguaje interpretado?",
    options: ["Rápido siempre", "No necesita intérprete", "Solo funciona en Windows", "Permite probar sin compilar"],
    correctAnswer: 3,
  },
  {
    question: "¿Qué es un lenguaje interpretado?",
    options: [
      "Uno que requiere compilación previa",
      "Uno ejecutado línea a línea por un intérprete",
      "Uno que solo funciona en Linux",
      "Uno sin reglas sintácticas",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Que es el código fuente?",
    options: [
      "El texto escrito por el programador",
      "El registro del sistema",
      "La salida del compilador",
      "Un archivo ejecutable",
    ],
    correctAnswer: 0,
  },
  {
    question: "¿Qué hace un gestor de paquetes?",
    options: [
      "Crea imágenes ISO",
      "Instala y actualiza librerías",
      "Modifica la BIOS",
      "Encripta el sistema operativo",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Para qué sirve la terminal integrada de un IDE?",
    options: ["Ajustar el brillo", "Editar imágenes", "Ejecutar comando dentro del IDE", "Crear máquinas virtuales"],
    correctAnswer: 2,
  },
]

export default function KahootIDEQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([])
  const [shuffledQuestions] = useState(() => {
    const shuffled = [...questions]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  })

  const handleAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null) return

    setSelectedAnswer(answerIndex)
    const isCorrect = answerIndex === shuffledQuestions[currentQuestion].correctAnswer

    if (isCorrect) {
      setScore(score + 1)
    }

    setAnsweredQuestions([...answeredQuestions, currentQuestion])
  }

  const handleNext = () => {
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
    } else {
      setShowResult(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setAnsweredQuestions([])
    window.location.reload()
  }

  if (showResult) {
    const percentage = Math.round((score / shuffledQuestions.length) * 100)
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl p-8 bg-card border-border">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Resultado Final</h2>
            <div className="text-6xl font-bold text-primary">{percentage}%</div>
            <p className="text-xl text-muted-foreground">
              Has acertado {score} de {shuffledQuestions.length} preguntas
            </p>
            {percentage >= 80 && <p className="text-lg text-green-500">Excelente trabajo</p>}
            {percentage >= 60 && percentage < 80 && (
              <p className="text-lg text-blue-500">Buen resultado, sigue practicando</p>
            )}
            {percentage < 60 && <p className="text-lg text-orange-500">Necesitas repasar más</p>}
            <div className="flex gap-4 justify-center">
              <Button onClick={resetQuiz} size="lg" className="bg-red-500 hover:bg-red-600">
                Reintentar
              </Button>
              <Link href="/">
                <Button variant="outline" size="lg">
                  Volver al inicio
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  const question = shuffledQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / shuffledQuestions.length) * 100

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto py-8">
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" size="sm" className="mb-4">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Salir del examen
            </Button>
          </Link>
          <div className="flex justify-between items-center mb-2">
            <span className="text-muted-foreground">
              Pregunta {currentQuestion + 1} de {shuffledQuestions.length}
            </span>
            <span className="text-sm text-muted-foreground">Puntuación: {score}</span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2">
            <div
              className="bg-red-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <Card className="p-8 bg-card border-border">
          <h2 className="text-2xl font-bold mb-8 text-foreground">{question.question}</h2>
          <div className="space-y-3">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index
              const isCorrect = index === question.correctAnswer
              const showCorrect = selectedAnswer !== null && isCorrect
              const showIncorrect = selectedAnswer !== null && isSelected && !isCorrect

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={selectedAnswer !== null}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                    showCorrect
                      ? "border-green-500 bg-green-500/10"
                      : showIncorrect
                        ? "border-red-500 bg-red-500/10"
                        : isSelected
                          ? "border-red-500 bg-red-500/10"
                          : "border-border hover:border-red-500/50 bg-card"
                  } ${selectedAnswer !== null ? "cursor-not-allowed" : "cursor-pointer"}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">{option}</span>
                    {showCorrect && <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />}
                    {showIncorrect && <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />}
                  </div>
                </button>
              )
            })}
          </div>

          {selectedAnswer !== null && (
            <div className="mt-8 flex items-center justify-between">
              <div
                className={`text-lg font-semibold ${
                  selectedAnswer === question.correctAnswer ? "text-green-500" : "text-red-500"
                }`}
              >
                {selectedAnswer === question.correctAnswer ? "Correcto" : "Incorrecto"}
              </div>
              <Button onClick={handleNext} size="lg" className="bg-red-500 hover:bg-red-600">
                Siguiente
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}

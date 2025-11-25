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
    question: "¿Qué muestra un diagrama de clases en UML?",
    options: [
      "La pruebas del sistema",
      "La estructura estática del sistema",
      "Los flujos de trabajo",
      "los casos de uso",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué elemento se usa para representar una clase?",
    options: ["Un triángulo", "Un óvalo", "Un círculo", "Un rectángulo dividido en secciones"],
    correctAnswer: 3,
  },
  {
    question: '¿Qué indica el símbolo "+" en UML?',
    options: ["Visibilidad pública", "Visibilidad privada", "Visibilidad protegida", "Atributo constante"],
    correctAnswer: 0,
  },
  {
    question: '¿Qué representa el símbolo "-" en UML?',
    options: ["Un atributo privado", "Un atributo público", "Una interfaz", "Un método estático"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué relación se muestra con un rombo blanco?",
    options: ["Herencia", "Composición", "Agregación", "Dependencia"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué significa una línea discontinua con flecha abierta?",
    options: ["Herencia", "Composición", "Agregación", "Dependencia"],
    correctAnswer: 3,
  },
  {
    question: "¿Qué indica un triángulo vacío apuntando a otra clase?",
    options: ["Herencia", "Composición", "Agregación", "Dependencia"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué característica no pertenece al paradigma orientado a objetos?",
    options: ["Herencia", "Polimorfismo", "Encapsulación", "Recursión"],
    correctAnswer: 3,
  },
  {
    question: "La multiplicidad 1..* en una relación indica:",
    options: [
      "Que hay exactamente una relación",
      "Que puede haber una o más instancias asociadas",
      "Que no existe relación",
      "Que solo hay una instancia posible",
    ],
    correctAnswer: 1,
  },
  {
    question: "Una interfaz en UML se representa con:",
    options: ["Un rombo", "Un triángulo sólido", "Un círculo", "Un rectángulo precedido por <<interface>>"],
    correctAnswer: 3,
  },
  {
    question: "¿Que representa un caso de uso?",
    options: [
      "Las relaciones entre módulos",
      "La interacción entre actores y el sistema",
      "Los componentes físicos",
      "Los atributos de una clase",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué forma representa un caso de uso?",
    options: ["Círculo", "Rectángulo", "Rombo", "Óvalo"],
    correctAnswer: 3,
  },
  {
    question: "¿Qué representa un actor en UML?",
    options: [
      "Una persona o sistema externo que interactúa con el sistema",
      "Un módulo interno",
      "Un componente físico",
      "Un archivo del sistema",
    ],
    correctAnswer: 0,
  },
  {
    question: '¿Qué significa la relación "include"',
    options: [
      "Un caso de uso amplía a otro",
      "Son casos de uso alternativos",
      "Un caso de uso reemplaza al otro",
      "Un caso de uso reutiliza a otro",
    ],
    correctAnswer: 3,
  },
  {
    question: '¿Qué significa la relación "extend"',
    options: [
      "Indica dependencia entre actores",
      "Ambos son obligatorios",
      "Un caso de uso opcional amplía el comportamiento de otro",
      "Un caso de uso hereda de otro",
    ],
    correctAnswer: 2,
  },
  {
    question: "¿Qué relación une actor y caso de uso?",
    options: ["Herencia", "Dependencia", "Asociación", "Composición"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué significa una línea con flecha entre actores?",
    options: [
      "Que un actor hereda de otro",
      "Que son equivalentes",
      "Que uno amplía la función del otro",
      "Que ambos participan en el mismo caso de uso",
    ],
    correctAnswer: 0,
  },
  {
    question: "¿Dónde se suelen agrupar los casos de uso?",
    options: [
      "En un diagrama de clases",
      "En una nube de interacción",
      "En un paquete externo",
      "Dentro de un rectángulo que representa el sistema",
    ],
    correctAnswer: 3,
  },
  {
    question: "¿Qué relación indica que un caso de uso opcional puede ejecutarse solo en ciertas condiciones?",
    options: ["Extend", "Herencia", "Include", "Dependencia"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué representa un paquete en UML?",
    options: [
      "Una relación de agregación",
      "Un actor externo",
      "Una clase abstracta",
      "Un contenedor de elementos del modelo",
    ],
    correctAnswer: 3,
  },
  {
    question: "¿Qué muestra un diagrama de secuencia?",
    options: [
      "Los requisitos del sistema",
      "La jerarquía de clases",
      "El flujo de datos",
      "El intercambio de mensajes entre objetos a lo largo del tiempo",
    ],
    correctAnswer: 3,
  },
  {
    question: "¿Qué representa la línea de vida de un objeto?",
    options: [
      "La relación entre actores",
      "La herencia de la clase",
      "La multiplicidad del objeto",
      "El tiempo durante el cual el objeto existe",
    ],
    correctAnswer: 3,
  },
  {
    question: "¿Cómo se representa un mensaje entre objetos?",
    options: ["Una flecha horizontal entre líneas de vida", "Un rectángulo", "Un triángulo", "Un óvalo"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué indica una flecha discontinua hacia atrás?",
    options: [
      "Un error del sistema",
      "El retorno de un mensaje o resultado",
      "Una llamada recursiva",
      "Un mensaje síncrono",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué representa una activación?",
    options: [
      "Un evento externo",
      "El ciclo de vida de un sistema",
      "Una interacción entre actores",
      "El tiempo en que un objeto ejecuta una acción",
    ],
    correctAnswer: 3,
  },
  {
    question: "¿Qué diferencia hay entre un mensaje síncrono y uno asíncrono?",
    options: [
      "En el síncrono no hay retorno",
      "En el síncrono, el emisor espera respuesta antes de continuar",
      "En el asíncrono, el receptor nunca responde",
      "No existe diferencia",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Cómo se representan los objetos en la parte superior del diagrama se secuencia?",
    options: [
      "En una tabla",
      "En un círculo con etiqueta",
      "Dentro de un óvalo",
      "En forma de rectángulo con su nombre y tipo",
    ],
    correctAnswer: 3,
  },
  {
    question: "¿Qué indica un mensaje con flecha llena?",
    options: ["Un error del sistema", "Un evento externo", "Un mensaje asíncrono", "Un mensaje síncrono"],
    correctAnswer: 3,
  },
  {
    question: "¿Qué indica un mensaje asíncrono?",
    options: [
      "Se ejecutan en paralelo",
      "El emisor no espera respuesta antes de continuar",
      "El receptor responde inmediatamente",
      "Hay dependencia entre objetos",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué representa un diagrama de secuencia en un contexto de caso de uso?",
    options: [
      "El modelo de paquetes",
      "El detalle de la interacción paso a paso entre los objetos del CdU",
      "El flujo de datos",
      "La jerarquía de clases",
    ],
    correctAnswer: 1,
  },
]

export default function EntornosKahootUMLQuiz() {
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
              <Button onClick={resetQuiz} size="lg">
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

        <Card className="p-6 bg-card border-border">
          <h2 className="text-xl font-semibold mb-6 text-foreground whitespace-pre-line">{question.question}</h2>
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
                          : // using red-500/50 hover for Entornos module color
                            "border-border hover:border-red-500/50 bg-card"
                  } ${selectedAnswer !== null ? "cursor-not-allowed" : "cursor-pointer"}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">{option}</span>
                    {showCorrect && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                    {showIncorrect && <XCircle className="w-5 h-5 text-red-500" />}
                  </div>
                </button>
              )
            })}
          </div>

          {selectedAnswer !== null && (
            <div className="mt-6 space-y-3">
              {selectedAnswer === question.correctAnswer ? (
                <div className="text-green-500 font-medium">Correcto</div>
              ) : (
                <div className="text-red-500 font-medium">Incorrecto</div>
              )}
              <Button onClick={handleNext} size="lg" className="w-full bg-red-500 hover:bg-red-600">
                {currentQuestion < shuffledQuestions.length - 1 ? "Siguiente" : "Ver resultados"}
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}

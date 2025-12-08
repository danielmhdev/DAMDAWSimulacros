"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle, ChevronLeft } from "lucide-react"
import Link from "next/link"

const questions = [
  {
    question: "¿Qué significa CSS?",
    options: [
      "Creative Style System",
      "Cascading Style Sheets",
      "Colorful Style Syntax",
      "Creative Sheet Selector"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué propiedad cambia el color del texto?",
    options: [
      "background-color",
      "font-style",
      "text-type",
      "color"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Qué propiedad controla el tamaño del texto?",
    options: [
      "font-size",
      "size",
      "text-size",
      "font-weight"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Qué propiedad define el color de fondo?",
    options: [
      "color",
      "bg-color",
      "background-color",
      "highlight"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Cuál es el selector de id?",
    options: [
      ".idname",
      "#idname",
      "@idname",
      "id(name)"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Cuál es el selector de clase?",
    options: [
      ".clase",
      "#clase",
      "clase:",
      "@clase"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Qué propiedad cambia el grosor del texto?",
    options: [
      "font-style",
      "text-decoration",
      "font-family",
      "font-weight"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Qué propiedad crea espacio interior?",
    options: [
      "margin",
      "space-in",
      "padding",
      "fill"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Cuál controla el tamaño del contenedor?",
    options: [
      "block-size",
      "area",
      "dimension",
      "width"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Cuál propiedad define el margen externo?",
    options: [
      "padding",
      "gap",
      "border",
      "margin"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Qué propiedad define el tipo de letra?",
    options: [
      "font-size",
      "font-weight",
      "font-family",
      "text-style"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué propiedad sirve para poner texto en cursiva?",
    options: [
      "font-style",
      "text-tilt",
      "italic",
      "text-type"
    ],
    correctAnswer: 0
  },
  {
    question: "Selector correcto para todos los párrafos dentro de un div:",
    options: [
      "div > p",
      "div p",
      ".div p",
      "#div + p"
    ],
    correctAnswer: 1
  },
  {
    question: "Selector que selecciona hermanos adyacentes:",
    options: [
      "p p",
      "p ~ span",
      "p .span",
      "p + span"
    ],
    correctAnswer: 3
  },
  {
    question: "Propiedad para ocultar un elemento sin quitar su espacio:",
    options: [
      "visibility: hidden;",
      "display: none;",
      "opacity: 0;",
      "hide: true;"
    ],
    correctAnswer: 0
  },
  {
    question: "Propiedad que convierte un elemento en flex-container:",
    options: [
      "flex: block",
      "display: flex;",
      "container: flex",
      "flex-type"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué propiedad controla la alineación horizontal en flexbox?",
    options: [
      "align-items",
      "align-content",
      "justify-content",
      "flex-align"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué propiedad controla la alineación vertical en flexbox?",
    options: [
      "flex-direction",
      "justify-content",
      "center-items",
      "align-items"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Qué unidad es relativa?",
    options: [
      "px",
      "em",
      "cm",
      "mm"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué propiedad elimina el subrayado de un enlace?",
    options: [
      "font-decoration",
      "underline: none",
      "text-underline: 0",
      "text-decoration: none;"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Qué propiedad controla el borde?",
    options: [
      "border-spacing",
      "border-fill",
      "outline",
      "border"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Qué significa display: none?",
    options: [
      "Oculta pero mantiene el espacio",
      "Solo oculta el texto",
      "El elemento desaparece completamente",
      "Reduce opacidad a 0"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Cuál es la sintaxis correcta para un comentario CSS?",
    options: [
      "/* comentario */",
      "// comentario",
      "# comentario",
      ""
    ],
    correctAnswer: 0
  },
  {
    question: "¿Qué propiedad controla la opacidad?",
    options: [
      "blur",
      "opacity",
      "transparency",
      "alpha"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué propiedad cambia la dirección en flexbox?",
    options: [
      "flex-align",
      "flex-flow",
      "flex-direction",
      "flex-type"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué propiedad ajusta el espacio entre letras?",
    options: [
      "letter-size",
      "text-gap",
      "word-spacing",
      "letter-spacing"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Qué propiedad controla el alto?",
    options: [
      "size-y",
      "height",
      "tall",
      "block-size"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué propiedad define el borde redondeado?",
    options: [
      "border-size",
      "rounded",
      "curve",
      "border-radius"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Qué propiedad alinea el texto?",
    options: [
      "align",
      "text-position",
      "text-layout",
      "text-align"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Qué propiedad controla el espacio entre líneas?",
    options: [
      "space-lines",
      "line-sep",
      "row-gap",
      "line-height"
    ],
    correctAnswer: 3
  },
]

export default function KahootBBDD0212Part2() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(Array(questions.length).fill(false))
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [incorrectCount, setIncorrectCount] = useState(0)

  const handleAnswer = (answerIndex: number) => {
    if (answeredQuestions[currentQuestion]) return

    setSelectedAnswer(answerIndex)

    const newAnswered = [...answeredQuestions]
    newAnswered[currentQuestion] = true
    setAnsweredQuestions(newAnswered)

    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    } else {
      setIncorrectCount(incorrectCount + 1)
    }
  }

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedAnswer(null)
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
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
    setIncorrectCount(0)
    setAnsweredQuestions(Array(questions.length).fill(false))
  }

  if (showResult) {
    const correctedScore = score - incorrectCount / 3
    const maxScore = questions.length
    const percentage = ((correctedScore / maxScore) * 100).toFixed(1)

    return (
      <div className="min-h-screen bg-background p-4 md:p-8">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 bg-card border-border">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Resultados del Simulacro</h2>
              <div className="text-6xl font-bold text-blue-600">{percentage}%</div>
              <p className="text-xl text-muted-foreground">
                Has acertado {score} de {questions.length} preguntas
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  Aciertos: <span className="text-green-500 font-semibold">{score}</span> | Fallos:{" "}
                  <span className="text-red-500 font-semibold">{incorrectCount}</span>
                </p>
                <p className="text-xs italic">
                  Puntuación con fórmula de corrección: {correctedScore.toFixed(2)} / {maxScore}
                </p>
                <p className="text-xs text-muted-foreground/70">(Fórmula: Aciertos - Fallos/3)</p>
              </div>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button onClick={resetQuiz} size="lg" className="bg-blue-600 hover:bg-blue-700">
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
      </div>
    )
  }

  const question = questions[currentQuestion]
  const isAnswered = answeredQuestions[currentQuestion]

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Volver
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">
              Pregunta {currentQuestion + 1} de {questions.length}
            </span>
            <span className="text-sm font-medium text-blue-600">
              {answeredQuestions.filter((a) => a).length} respondidas
            </span>
          </div>
        </div>

        <Card className="p-6 md:p-8 bg-card border-border">
          <div className="space-y-6">
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground flex-1">{question.question}</h2>
              <div className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                {score}/{questions.length}
              </div>
            </div>

            <div className="space-y-3">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === index
                const isCorrect = index === question.correctAnswer
                const showCorrect = isAnswered && isCorrect
                const showIncorrect = isAnswered && isSelected && !isCorrect

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={isAnswered}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      showCorrect
                        ? "border-green-500 bg-green-500/10"
                        : showIncorrect
                          ? "border-red-500 bg-red-500/10"
                          : isSelected
                            ? "border-blue-600 bg-blue-600/10"
                            : "border-border hover:border-blue-600/50 bg-card"
                    } ${isAnswered ? "cursor-not-allowed" : "cursor-pointer"}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-foreground">{option}</span>
                      {showCorrect && <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 ml-2" />}
                      {showIncorrect && <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 ml-2" />}
                    </div>
                  </button>
                )
              })}
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                onClick={previousQuestion}
                disabled={currentQuestion === 0}
                variant="outline"
                className="flex-1 bg-transparent"
              >
                Anterior
              </Button>
              <Button onClick={nextQuestion} disabled={!isAnswered} className="flex-1 bg-blue-600 hover:bg-blue-700">
                {currentQuestion === questions.length - 1 ? "Ver Resultados" : "Siguiente"}
              </Button>
            </div>
          </div>
        </Card>

        <div className="w-full bg-muted rounded-full h-2 mt-4">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  )
}
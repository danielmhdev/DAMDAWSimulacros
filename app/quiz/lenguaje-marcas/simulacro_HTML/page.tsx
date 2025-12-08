"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle, ChevronLeft } from "lucide-react"
import Link from "next/link"

const questions = [
  {
    question: "¿Qué significa HTML?",
    options: [
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "HyperText Markup Language",
      "Hyper Technical Machine Language"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué etiqueta se usa para el encabezado principal de una página?",
    options: [
      "<h1>",
      "<header>",
      "<title>",
      "<head>"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Cuál de estas etiquetas se usa para insertar una línea horizontal?",
    options: [
      "<br>",
      "<line>",
      "<border>",
      "<hr>"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Qué etiqueta se usa para crear un salto de línea?",
    options: [
      "<p>",
      "<br>",
      "<lb>",
      "<break>"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Cuál de estas etiquetas sirve para listas ordenadas?",
    options: [
      "<ul>",
      "<li>",
      "<dl>",
      "<ol>"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Qué atributo se utiliza para asignar un identificador único?",
    options: [
      "class",
      "style",
      "id",
      "key"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué etiqueta se usa para mostrar texto en negrita?",
    options: [
      "<b>",
      "<string>",
      "<bold>",
      "<em>"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Qué atributo define el enlace de un hipervínculo?",
    options: [
      "alt",
      "href",
      "src",
      "link"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué etiqueta se usa para insertar una imagen?",
    options: [
      "<imagen />",
      "<picture>",
      "<img>",
      "<image>"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Cuál es la etiqueta correcta para agrupar contenido?",
    options: [
      "<span>",
      "<article>",
      "<para>",
      "<div>"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Con qué etiqueta se crea un párrafo?",
    options: [
      "<p>",
      "<par>",
      "<section>",
      "<text>"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Qué atributo se usa para mostrar un texto alternativo en una imagen?",
    options: [
      "title",
      "alt",
      "description",
      "text"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué etiqueta se usa para definir un elemento interactivo tipo botón?",
    options: [
      "<input type=\"btn\">",
      "<btn>",
      "<button>",
      "<click>"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué etiqueta se utiliza para tablas?",
    options: [
      "<t>",
      "<table-data>",
      "<table>",
      "<tab>"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Cuál representa una celda dentro de una tabla?",
    options: [
      "<row>",
      "<tr>",
      "<td>",
      "<col>"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué etiqueta delimita todo el contenido visible de una página?",
    options: [
      "<body>",
      "<main>",
      "<html>",
      "<content>"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Qué atributo permite fusionar columnas en una tabla?",
    options: [
      "rowspan",
      "merge",
      "span",
      "colspan"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Qué etiqueta define una lista sin orden?",
    options: [
      "<ol>",
      "<dl>",
      "<ul>",
      "<list>"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué etiqueta es semántica?",
    options: [
      "<footer>",
      "<div>",
      "<span>",
      "<b>"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Cuál se usa para metadatos del documento?",
    options: [
      "<meta>",
      "<head>",
      "<script>",
      "<info>"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué atributo se usa para ejecutar JavaScript cuando se hace clic?",
    options: [
      "onclicked",
      "click",
      "js-click",
      "onclick"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Qué etiqueta define un enlace?",
    options: [
      "<a>",
      "<link>",
      "<url>",
      "<goto>"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Qué etiqueta sirve para insertar contenido externo (videos, mapas…)?",
    options: [
      "<video>",
      "<media>",
      "<iframe>",
      "<embed>"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué atributo obliga a rellenar un campo?",
    options: [
      "force",
      "needed",
      "required",
      "must"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Cuál etiqueta se usa para agrupar formularios?",
    options: [
      "<form-group>",
      "<input>",
      "<forms>",
      "<form>"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Cuál etiqueta define el encabezado de una tabla?",
    options: [
      "<td>",
      "<th>",
      "<head-table>",
      "<column>"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué atributo modifica el estilo en línea?",
    options: [
      "css",
      "class",
      "style",
      "inline"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué etiqueta define un bloque de código preformateado?",
    options: [
      "<codeblock>",
      "<txt>",
      "<pre>",
      "<fix>"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué etiqueta define un script JavaScript?",
    options: [
      "<java>",
      "<js>",
      "<script-js>",
      "<script>"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Qué etiqueta define el documento HTML?",
    options: [
      "<body>",
      "<root>",
      "<doctype>",
      "<!DOCTYPE html>"
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
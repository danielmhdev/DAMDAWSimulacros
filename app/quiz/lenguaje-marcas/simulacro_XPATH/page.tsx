"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle, ChevronLeft } from "lucide-react"
import Link from "next/link"

const questions = [
  {
    question: "¿Qué es XPath?",
    options: [
      "Un lenguaje para validar XML",
      "Un lenguaje para navegar y seleccionar nodos en XML",
      "Un lenguaje para convertir XML en JSON",
      "Un lenguaje para estilos XML"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué hace la expresión XPath //libro/titulo?",
    options: [
      "Selecciona solo títulos del nodo raíz",
      "Selecciona únicamente el primer título",
      "Selecciona títulos en el mismo nivel",
      "Selecciona todos los títulos de cualquier libro en el documento"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Qué es XQuery?",
    options: [
      "Un lenguaje de consulta para documentos XML",
      "Una hoja de estilo",
      "Un tipo de validación",
      "Una base de datos XML"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Qué hace la función XQuery doc(\"archivo.xml\")?",
    options: [
      "Convierte XML",
      "Crea un nuevo XML",
      "Abre un documento XML",
      "Valida un XML"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué etiqueta indica una plantilla en XSLT?",
    options: [
      "<xsl:output>",
      "<xsl:match>",
      "<xsl:rule>",
      "<xsl:template>"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Qué hace la expresión XPath /?",
    options: [
      "Selecciona el nodo raíz",
      "Selecciona todos los nodos",
      "Selecciona atributos",
      "Selecciona texto"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Qué es XSLT?",
    options: [
      "Un lector RSS",
      "Un motor de búsqueda XML",
      "Un método de compresión",
      "Un lenguaje para transformar XML en otros formatos"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Qué etiqueta define una transformación en XSLT?",
    options: [
      "<transform>",
      "<xsl:style>",
      "<xsl:stylesheet>",
      "<style-xml>"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué hace la función XPath text()?",
    options: [
      "Devuelve nodos completos",
      "Devuelve atributos",
      "Devuelve elementos",
      "Devuelve el contenido textual del nodo"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Cuál es la estructura principal de un RSS?",
    options: [
      "<rss-list>",
      "<items>",
      "<feed>",
      "<rss>"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Cuál es la etiqueta de cada entrada dentro de un RSS?",
    options: [
      "<rssItem>",
      "<entry>",
      "<item>",
      "<news>"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué hace la instrucción XSLT <xsl:value-of select=\"titulo\"/>?",
    options: [
      "Extrae y muestra el valor del elemento titulo",
      "Duplica un nodo",
      "Elimina un nodo",
      "Crea un atributo"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Qué símbolo en XPath significa “buscar en cualquier parte del documento”?",
    options: [
      "/",
      "./",
      "//",
      "@"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué función XQuery obtiene la longitud de una cadena?",
    options: [
      "len()",
      "size()",
      "count()",
      "string-length()"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Qué tipo de documento genera normalmente un XSLT?",
    options: [
      "HTML",
      "JSON",
      "PDF",
      "SQL"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Qué operador XPath selecciona atributos?",
    options: [
      "#",
      "%",
      "&",
      "@"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Cómo se seleccionan todos los nodos libro mediante XPath?",
    options: [
      "libro()",
      "<libro>",
      "//libro",
      "@libro"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué produce un documento RSS?",
    options: [
      "Datos JSON",
      "Código JavaScript",
      "Imágenes",
      "Feeds o canales de noticias"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Qué hace la expresión XPath //@*?",
    options: [
      "Selecciona solo ids",
      "Selecciona nodos raíz",
      "Selecciona valores booleanos",
      "Selecciona todos los atributos del documento"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Qué etiqueta define el canal principal en un RSS?",
    options: [
      "<main>",
      "<feed>",
      "<source>",
      "<channel>"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Qué hace XQuery for $x in doc(\"a.xml\")//item return $x?",
    options: [
      "Cuenta nodos",
      "Modifica el XML",
      "Valida nodos",
      "Recorre y devuelve todos los nodos item"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Qué etiqueta XSLT selecciona nodos?",
    options: [
      "<xsl:value>",
      "<xsl:use>",
      "<xsl:apply-templates>",
      "<xsl:select>"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué símbolo selecciona atributos en XPath?",
    options: [
      "@",
      "!",
      "#",
      "$"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Qué etiqueta define el título de un item RSS?",
    options: [
      "<titleRSS>",
      "<label>",
      "<item-title>",
      "<title>"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Qué instrucción XSLT se usa para ordenar elementos?",
    options: [
      "<xsl:filter>",
      "<xsl:sort-by>",
      "<xsl:sort>",
      "<xsl:order>"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué significa la expresión XPath count(//item)?",
    options: [
      "Elimina items",
      "Selecciona items",
      "Convierte items",
      "Cuenta cuántos items hay"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Cuál es la extensión típica de archivos XSLT?",
    options: [
      ".query",
      ".xsl",
      ".rss",
      ".path"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Cómo se representan comentarios en XQuery?",
    options: [
      "/* */",
      "(: comentario :)",
      "//// comentario",
      "Ninguna de las anteriores"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué expresión XPath selecciona el primer hijo?",
    options: [
      "child#1",
      "first()",
      "/child()",
      "[1]"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Qué etiqueta XSLT crea un bucle?",
    options: [
      "<xsl:loop>",
      "<xsl:iter>",
      "<xsl:for>",
      "<xsl:for-each>"
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
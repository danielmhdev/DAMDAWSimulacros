"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const questions = [
  {
    question: "¿Qué tipo de relación ISA permite que un tipo pertenezca a varios subtipos?",
    options: ["ISA Parcial", "ISA Total", "ISA Exclusiva", "ISA Solapada"],
    correctAnswer: 3,
  },
  {
    question: "¿Qué comando DCL se utiliza para revocar permisos de un usuario en una base de datos?",
    options: ["DENY", "REVOKE", "REMOVE", "DELETE"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué comando DDL se utiliza para eliminar todos los datos de una tabla sin eliminar la tabla en sí?",
    options: ["DELETE TABLE", "CLEAR TABLE", "TRUNCATE TABLE", "REMOVE TABLE"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué efecto tiene un bloqueo exclusivo (exclusive lock) en una tabla?",
    options: [
      "Permite solo lecturas simultáneas",
      "Impide que otros usuarios lean o escriban en la tabla",
      "Permite solo escrituras simultáneas",
      "No tiene ningún efecto",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué estrategia de mapeo en herencia evita columnas vacías pero puede ser más lenta para consultas?",
    options: [
      "Tabla Unica por Jerarquía completa",
      "Tablas directas del diagrama MER",
      "Tablas Orientadas a Objetos",
      "Tablas para cada subtipo",
    ],
    correctAnswer: 3,
  },
  {
    question: "¿Qué tipo de relación ISA permite que un tipo no pertenezca a ningún subgrupo?",
    options: ["ISA Parcial", "ISA Total", "ISA Exclusiva", "ISA Solapada"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué cláusula se utiliza para ordenar los resultados de una consulta SELECT?",
    options: ["SORT BY", "ORDER BY", "GROUP BY", "FILTER BY"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué tipo de relación ISA establece que un tipo solo puede pertenecer a un subgrupo?",
    options: ["ISA Parcial", "ISA Total", "ISA Exclusiva", "ISA Solapada"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué comando DDL se utiliza para crear una nueva base de datos en SQL?",
    options: ["CREATE DATABASE", "NEW DATABASE", "ADD DATABASE", "MAKE DATABASE"],
    correctAnswer: 0,
  },
  {
    question:
      "¿Qué tipo de restricción en MERE se utiliza para representar que una entidad puede participar en solo una relación de las posibles, pero no al mismo tiempo?",
    options: ["Exclusión", "Inclusión", "Exclusividad", "Inclusividad"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué comando DQL se utiliza para seleccionar datos de una tabla?",
    options: ["FETCH", "SELECT", "GET", "QUERY"],
    correctAnswer: 1,
  },
  {
    question:
      "¿Qué tipo de restricción en MERE se utiliza para representar que una entidad solo podrá participar en una única relación de un conjunto, siempre?",
    options: ["Exclusión", "Inclusión", "Exclusividad", "Inclusividad"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué comando se utiliza para crear una vista en una base de datos?",
    options: ["CREATE VIEW", "MAKE VIEW", "NEW VIEW", "BUILD VIEW"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué comando se utiliza para eliminar todos los registros de una tabla rápidamente?",
    options: ["DELETE", "TRUNCATE", "DROP", "CLEAR"],
    correctAnswer: 1,
  },
  {
    question:
      "¿Qué tipo de restricción en MERE se utiliza para representar que para que una entidad participe en la relación R2, debe haber participado previamente en la relación R1?",
    options: ["Exclusión", "Inclusión", "Exclusividad", "Inclusividad"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué comando se utiliza para mostrar la estructura de una tabla?",
    options: ["SHOW STRUCTURE", "DESCRIBE", "DISPLAY STRUCTURE", "VIEW STRUCTURE"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué comando DDL se utiliza para eliminar una tabla completa de una base de datos?",
    options: ["DELETE TABLE", "DROP TABLE", "REMOVE TABLE", "ERASE TABLE"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué tipo de restricción en MERE se representa con una flecha discontinua entre relaciones?",
    options: ["Exclusión", "Inclusión", "Exclusividad", "Inclusividad"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué comando DCL se utiliza para eliminar un usuario de una base de datos?",
    options: ["DELETE USER", "DROP USER", "REMOVE USER", "ERASE USER"],
    correctAnswer: 1,
  },
  {
    question:
      "¿Qué estrategia de mapeo en herencia crea una tabla para cada subtipo, incluida toda la información común?",
    options: [
      "Tabla Unica por Jerarquía completa",
      "Tablas directas del diagrama MER",
      "Tablas Orientadas a Objetos",
      "Tablas para cada subtipo",
    ],
    correctAnswer: 3,
  },
  {
    question: "¿Cómo se delimitan las instrucciones dentro de un procedimiento almacenado en SQL?",
    options: [
      "Con paréntesis ()",
      "Mediante las palabras BEGIN y END",
      "Solo con punto y coma ;",
      "No es necesario delimitarlas",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué comando DDL se utiliza para mostrar todas las tablas en una base de datos?",
    options: ["SHOW TABLES", "LIST TABLES", "DISPLAY TABLES", "VIEW TABLES"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué tipo de restricción se utiliza para asegurar que un campo no puede tener valores nulos?",
    options: ["PRIMARY KEY", "FOREIGN KEY", "NOT NULL", "UNIQUE"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué tipo de relación en MERE se utiliza para representar relaciones circulares o reflexivas?",
    options: ["ISA", "M:N", "1:N", "Recursiva"],
    correctAnswer: 3,
  },
  {
    question: "¿Qué comando se utiliza para combinar verticalmente los resultados de dos consultas?",
    options: ["JOIN", "UNION", "MERGE", "COMBINE"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué tipo de restricción en MERE se representa con una línea discontinua entre relaciones?",
    options: ["Exclusión", "Inclusión", "Exclusividad", "Inclusividad"],
    correctAnswer: 0,
  },
  {
    question: "¿Cuál es la principal diferencia entre una vista y una tabla base en SQL?",
    options: [
      "Una vista es una consulta guardada, una tabla base almacena datos físicamente",
      "Ambas almacenan datos",
      "No hay diferencia",
      "Una vista no puede usarse en consultas",
    ],
    correctAnswer: 0,
  },
  {
    question: "¿Qué establece la restricción de Inclusión en MERE?",
    options: [
      "Que una entidad debe participar en todas las relaciones posibles.",
      "Que para que dos ocurrencias de entidades se asocien en R2, deben haber estado asociadas previamente a través de R1.",
      "Que una entidad no puede participar en ninguna relación.",
      "Que una entidad puede participar en cualquier relación sin restricciones.",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué comando se utiliza para seleccionar una base de datos específica para trabajar en ella?",
    options: ["SELECT DATABASE", "USE", "CHOOSE DATABASE", "SET DATABASE"],
    correctAnswer: 1,
  },
]

export default function KahootBBDD0212Part2() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [incorrectCount, setIncorrectCount] = useState(0)
  const [shuffledQuestions, setShuffledQuestions] = useState(questions)

  useEffect(() => {
    const shuffled = [...questions]
      .map((q) => ({
        ...q,
        options: q.options
          .map((option, index) => ({ option, index }))
          .sort(() => Math.random() - 0.5)
          .map((item, newIndex) => {
            if (item.index === q.correctAnswer) {
              q.correctAnswer = newIndex
            }
            return item.option
          }),
      }))
      .sort(() => Math.random() - 0.5)
    setShuffledQuestions(shuffled)
  }, [])

  const handleAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null) return

    setSelectedAnswer(answerIndex)

    if (answerIndex === shuffledQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    } else {
      setIncorrectCount(incorrectCount + 1)
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
    } else {
      setShowResult(true)
    }
  }

  const resetQuiz = () => {
    const shuffled = [...questions]
      .map((q) => ({
        ...q,
        options: q.options
          .map((option, index) => ({ option, index }))
          .sort(() => Math.random() - 0.5)
          .map((item, newIndex) => {
            if (item.index === q.correctAnswer) {
              q.correctAnswer = newIndex
            }
            return item.option
          }),
      }))
      .sort(() => Math.random() - 0.5)
    setShuffledQuestions(shuffled)
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setIncorrectCount(0)
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
              <h2 className="text-3xl font-bold text-foreground">Resultados del Test</h2>
              <div className="space-y-4">
                <div className="text-6xl font-bold text-blue-600">{percentage}%</div>
                <div className="space-y-2 text-lg text-muted-foreground">
                  <p>
                    Aciertos: <span className="text-green-500 font-semibold">{score}</span> | Fallos:{" "}
                    <span className="text-red-500 font-semibold">{incorrectCount}</span>
                  </p>
                  <p className="text-sm italic">
                    Puntuación con fórmula de corrección: {correctedScore.toFixed(2)} / {maxScore}
                  </p>
                  <p className="text-xs text-muted-foreground/70">(Fórmula: Aciertos - Fallos/3)</p>
                </div>
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

  const question = shuffledQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / shuffledQuestions.length) * 100

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Salir del examen
        </Link>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>
            Pregunta {currentQuestion + 1} de {shuffledQuestions.length}
          </span>
          <span>Puntuación: {score}</span>
        </div>

        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
          <div className="bg-blue-600 h-full transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>

        <Card className="p-6 md:p-8 bg-card border-border">
          <div className="space-y-6">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground">{question.question}</h2>

            <div className="grid gap-3">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === index
                const isCorrect = index === question.correctAnswer
                const showFeedback = selectedAnswer !== null

                let buttonClass = "justify-start text-left h-auto py-4 px-6 border-2 transition-colors "
                if (!showFeedback) {
                  buttonClass += "border-border hover:border-blue-600/50 hover:bg-accent"
                } else if (isCorrect) {
                  buttonClass += "border-green-500 bg-green-500/10"
                } else if (isSelected) {
                  buttonClass += "border-red-500 bg-red-500/10"
                } else {
                  buttonClass += "border-border opacity-50"
                }

                return (
                  <Button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                    variant="outline"
                    className={buttonClass}
                  >
                    <span className="text-base">{option}</span>
                    {showFeedback && isCorrect && <span className="ml-auto text-green-500">✓</span>}
                    {showFeedback && isSelected && !isCorrect && <span className="ml-auto text-red-500">✗</span>}
                  </Button>
                )
              })}
            </div>

            {selectedAnswer !== null && (
              <div className="pt-4">
                <Button onClick={nextQuestion} className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                  {currentQuestion < shuffledQuestions.length - 1 ? "Siguiente" : "Ver Resultados"}
                </Button>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const questions = [
  {
    question: "¿Qué comando DML se utiliza para actualizar datos existentes en una tabla?",
    options: ["MODIFY", "UPDATE", "CHANGE", "ALTER"],
    correctAnswer: 1,
  },
  {
    question:
      "¿Qué estrategia de mapeo en herencia implementa una sola tabla para todos los tipos con un discriminador para diferenciarlos?",
    options: [
      "Tabla Unica por Jerarquía completa",
      "Tablas directas del diagrama MER",
      "Tablas Orientadas a Objetos",
      "Tablas para cada subtipo",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "¿Qué estrategia de mapeo en herencia crea una tabla principal para datos comunes y tablas específicas para cada subclase?",
    options: [
      "Tabla Unica por Jerarquía completa",
      "Tablas directas del diagrama MER",
      "Tablas Orientadas a Objetos",
      "Tablas para cada subtipo",
    ],
    correctAnswer: 2,
  },
  {
    question: "¿Cuál es la principal característica de la restricción de Exclusividad en MERE?",
    options: [
      "Permite que una entidad participe en varias relaciones al mismo tiempo.",
      "Asegura que una entidad solo puede participar en una única relación de un conjunto, siempre.",
      "Establece que una entidad debe participar en al menos dos relaciones.",
      "Permite que una entidad participe en relaciones simultáneas.",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué comando DML se utiliza para eliminar filas específicas de una tabla?",
    options: ["REMOVE", "DELETE", "DROP", "CLEAR"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué diferencia hay entre la restricción de Exclusión y la de Exclusividad en MERE?",
    options: [
      "No hay diferencia, son lo mismo.",
      "La Exclusión permite que una entidad participe en solo una relación de las posibles, aunque puede alternar a lo largo del tiempo.",
      "La Exclusividad permite que una entidad participe en varias relaciones al mismo tiempo.",
      "La Exclusión permite que una entidad participe en varias relaciones simultáneamente.",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué comando es más rápido para cargar grandes volúmenes de datos en una tabla?",
    options: ["INSERT", "SELECT", "LOAD DATA", "UPDATE"],
    correctAnswer: 2,
  },
  {
    question:
      "¿Qué tipo de JOIN se utiliza para devolver todas las filas de la tabla izquierda y las coincidencias de la derecha?",
    options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL JOIN"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué comando DML se utiliza para combinar INSERT y UPDATE en una sola operación?",
    options: ["MERGE", "FUSE", "INSERT OR UPDATE", "INSERT...ON DUPLICATE KEY UPDATE"],
    correctAnswer: 3,
  },
  {
    question: "¿Qué tipo de relación ISA establece que cada tipo debe pertenecer al menos a uno de los subtipos?",
    options: ["ISA Parcial", "ISA Total", "ISA Exclusiva", "ISA Solapada"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué tipo de restricción en MERE se representa con un arco entre relaciones?",
    options: ["Exclusión", "Inclusión", "Exclusividad", "Inclusividad"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué estrategia de mapeo en herencia no requiere JOINs para consultar a un tipo de héroe?",
    options: [
      "Tabla Unica por Jerarquía completa",
      "Tablas directas del diagrama MER",
      "Tablas Orientadas a Objetos",
      "Tablas para cada subtipo",
    ],
    correctAnswer: 0,
  },
  {
    question: "¿Qué tipo de restricción en MERE se representa con una flecha sólida entre relaciones?",
    options: ["Exclusión", "Inclusión", "Exclusividad", "Inclusividad"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué comando DDL se utiliza para modificar la estructura de una tabla existente?",
    options: ["MODIFY TABLE", "ALTER TABLE", "CHANGE TABLE", "UPDATE TABLE"],
    correctAnswer: 1,
  },
  {
    question: "¿Cuál es el propósito de un bloqueo de escalada en bases de datos?",
    options: [
      "Evitar la escritura simultánea en una tabla",
      "Permitir solo lecturas en una tabla",
      "Convertir varios bloqueos de fila en uno más grande, de tabla",
      "Eliminar todos los bloqueos existentes",
    ],
    correctAnswer: 2,
  },
  {
    question: "¿Cuál es la función principal del comando EXPLAIN en SQL?",
    options: [
      "Muestra los datos de la tabla",
      "Elimina registros duplicados",
      "Permite analizar cómo se ejecutará una consulta",
      "Crea un índice automáticamente",
    ],
    correctAnswer: 2,
  },
  {
    question: "¿Qué comando DML se utiliza para analizar cómo se ejecutará una consulta?",
    options: ["ANALYZE", "EXPLAIN", "CHECK", "INSPECT"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué establece la restricción de Inclusividad en MERE?",
    options: [
      "Que una entidad debe participar en todas las relaciones posibles.",
      "Que para que una entidad participe en la relación R2, debe haber participado previamente en la relación R1.",
      "Que una entidad no puede participar en ninguna relación.",
      "Que una entidad puede participar en cualquier relación sin restricciones.",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "¿Qué tipo de JOIN se utiliza para devolver solo las filas que tienen valores coincidentes en ambas tablas?",
    options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL JOIN"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué cláusula se utiliza para agrupar los resultados de una consulta SELECT?",
    options: ["GROUP", "GROUP BY", "ORDER", "SORT"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué tipo de relación en MERE se utiliza para representar relaciones entre tres entidades?",
    options: ["ISA", "M:N", "1:N", "Ternaria"],
    correctAnswer: 3,
  },
  {
    question: "¿Qué comando DCL se utiliza para otorgar permisos a un usuario en una base de datos?",
    options: ["GRANT", "ALLOW", "PERMIT", "AUTHORIZE"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué tipo de relación se utiliza para representar jerarquías y relaciones de herencia en MERE?",
    options: ["ISA", "M:N", "1:N", "1:1"],
    correctAnswer: 0,
  },
  {
    question:
      "¿Qué tipo de JOIN se utiliza para devolver todas las filas de la tabla derecha y las coincidencias de la izquierda?",
    options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL JOIN"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué comando DML se utiliza para cargar datos masivamente desde un archivo externo?",
    options: ["IMPORT DATA", "LOAD DATA", "INSERT DATA", "UPLOAD DATA"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué estrategia de mapeo en herencia es más rápida para consultas pero puede tener columnas vacías?",
    options: [
      "Tabla Unica por Jerarquía completa",
      "Tablas directas del diagrama MER",
      "Tablas Orientadas a Objetos",
      "Tablas para cada subtipo",
    ],
    correctAnswer: 0,
  },
  {
    question: "¿Qué cláusula se utiliza para limitar el número de filas devueltas en una consulta SELECT?",
    options: ["TOP", "LIMIT", "FIRST", "TAKE"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué comando DML se utiliza para insertar nuevos datos en una tabla?",
    options: ["ADD", "INSERT", "CREATE", "NEW"],
    correctAnswer: 1,
  },
  {
    question:
      "¿Qué tipo de restricción en MERE se utiliza para representar que para que dos ocurrencias de entidades se asocien en R2, deben haber estado asociadas previamente a través de R1?",
    options: ["Exclusión", "Inclusión", "Exclusividad", "Inclusividad"],
    correctAnswer: 3,
  },
  {
    question: "¿Qué cláusula se utiliza para filtrar los resultados de una consulta SELECT?",
    options: ["FILTER", "WHERE", "LIMIT", "GROUP"],
    correctAnswer: 1,
  },
]

export default function KahootBBDD0212Part1() {
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

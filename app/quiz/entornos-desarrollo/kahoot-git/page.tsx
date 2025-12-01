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
    question: "Iniciar un nuevo repositorio Git",
    options: ["git init", "git create", "git new", "git start"],
    correctAnswer: 0,
  },
  {
    question: "Ver el estado del repositorio",
    options: ["git check", "git status", "git info", "git changes"],
    correctAnswer: 1,
  },
  {
    question: "Añadir todos los archivos al staging",
    options: ["git stage .", "git commit.", "git add.", "git add *"],
    correctAnswer: 2,
  },
  {
    question: "Crear un commit",
    options: ["git record", "git commit", "git push", "git save"],
    correctAnswer: 1,
  },
  {
    question: "Clonar repositorio remoto",
    options: ["git pull URL", "git clone URL", "git download URL", "git copy URL"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué hace git log?",
    options: ["Muestra historial de commits", "Muestra el último commit", "Lista ramas", "Borra commits antiguos"],
    correctAnswer: 0,
  },
  {
    question: "Mostrar diferencias",
    options: ["git history", "git show", "git status -d", "git diff"],
    correctAnswer: 3,
  },
  {
    question: "Crear rama feature/login",
    options: [
      "git start feature/login",
      "git new-branch feature/login",
      "git branch feature/login",
      "git add branch feature/login",
    ],
    correctAnswer: 2,
  },
  {
    question: "Cambiar a la rama develop",
    options: ["git branch develop", "git change develop", "git switch develop", "git move develop"],
    correctAnswer: 2,
  },
  {
    question: "Función de git merge",
    options: ["Fusiona cambios", "Envía cambios", "Borra una rama", "Sustituye develop"],
    correctAnswer: 0,
  },
  {
    question: "Archivo para ignorar ficheros",
    options: ["gitkeep", "gitconfig", "gitignore", "githidden"],
    correctAnswer: 2,
  },
  {
    question: "HEAD apunta normalmente a...",
    options: ["Commit remoto", "Commit más antiguo", "Primer commit", "Commit actual"],
    correctAnswer: 3,
  },
  {
    question: "Enviar commits al remoto",
    options: ["git remote push", "git send", "git push", "git upload"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué hace git pull origin main?",
    options: ["Descarga y fusiona cambios", "Sube y baja cambios", "Solo descarga", "Elimina la rama remota"],
    correctAnswer: 0,
  },
  {
    question: "¿Cuándo aparece un merge conflict?",
    options: ["git init repetido", "Repositorio vacío", "Dos ramas cambian la misma parte", "git status rápido"],
    correctAnswer: 2,
  },
  {
    question: "Historial con grafo",
    options: ["git shortlog", "git clean", "git remote -v", "git log --oneline --graph --all"],
    correctAnswer: 3,
  },
  {
    question: "Borrar rama tras merge",
    options: [
      "git delete feature/api",
      "git remove-branch feature/api",
      "git branch -d feature/api",
      "git drop feature/api",
    ],
    correctAnswer: 2,
  },
  {
    question: "Función de git stash",
    options: ["Borra cambios", "Sube cambios al remoto", "Lista commits sin mensaje", "Guarda cambios temporalmente"],
    correctAnswer: 3,
  },
  {
    question: "git reset HEAD archivo.txt",
    options: [
      "Eliminar archivo",
      "Restaurar versión inicial",
      "Añadir al staging",
      "Quitar del staging sin perder cambios",
    ],
    correctAnswer: 3,
  },
  {
    question: "¿Qué hace git rebase?",
    options: [
      "Crea commit extra",
      "Borra historial principal",
      "Solo funciona sin remoto",
      "Reescribe historia aplicando commits encima",
    ],
    correctAnswer: 3,
  },
]

export default function EntornosKahootGitQuiz() {
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
            <h1 className="text-xl font-bold text-foreground">Kahoot GIT</h1>
            <span className="text-muted-foreground">
              Pregunta {currentQuestion + 1} de {shuffledQuestions.length}
            </span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2">
            <div
              className="bg-red-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-2 text-right">
            <span className="text-sm text-muted-foreground">Puntuación: {score}</span>
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
                          : "border-border hover:border-red-500/50 bg-card"
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
            <div className="mt-6 space-y-4">
              {selectedAnswer === question.correctAnswer ? (
                <div className="p-4 bg-green-500/10 border border-green-500 rounded-lg">
                  <p className="text-green-500 font-semibold">Correcto</p>
                </div>
              ) : (
                <div className="p-4 bg-red-500/10 border border-red-500 rounded-lg">
                  <p className="text-red-500 font-semibold">Incorrecto</p>
                </div>
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

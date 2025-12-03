"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle, ChevronLeft } from "lucide-react"
import Link from "next/link"

const questions = [
  {
    question:
      "En la arquitectura de tres niveles de un sistema de bases de datos, ¿qué nivel describe la estructura física de almacenamiento?",
    options: ["Nivel de vista (externo)", "Nivel lógico (conceptual)", "Nivel físico (interno)", "Nivel de aplicación"],
    correctAnswer: 2,
  },
  {
    question:
      "SELECT nombre, precio - ( SELECT AVG(precio) FROM articulos WHERE categoria = a.categoria ) AS diferencia FROM articulos a;",
    options: [
      "Muestra nombre y precio de los artículos cuyo precio es menor al promedio de su categoría",
      "Agrupa los artículos por nombre y muestra el precio total por grupo",
      "Muestra los artículos que tienen un precio inferior al promedio de su categoría",
      "Muestra el nombre y la diferencia entre el precio de cada artículo y el precio medio de su categoría",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "En la notación de cardinalidad lateral (mín,máx), si una entidad tiene cardinalidad (1,n) en una relación, esto significa:",
    options: [
      "Puede participar en mínimo 1 y máximo n instancias de la relación",
      "Debe participar exactamente en N instancias",
      "Es opcional su participación en la relación",
      "Solo puede participar en una instancia como máximo",
    ],
    correctAnswer: 0,
  },
  {
    question: "En el MER, ¿qué indica la cardinalidad de una relación?",
    options: [
      "El número de entidades que participan en la relación",
      "El número máximo de instancias de una entidad que pueden participar con una instancia de otra entidad",
      "La cantidad de atributos que tiene cada entidad",
      "El tipo de dependencia entre las entidades",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "En el proceso de diseño de bases de datos, ¿cuál es la diferencia principal entre el análisis de requisitos y el diseño conceptual?",
    options: [
      "No hay diferencia, son términos equivalentes",
      'El análisis de requisitos recopila información del "minimundo", mientras que el diseño conceptual crea el esquema MER',
      "El diseño conceptual siempre precede al análisis de requisitos",
      "El análisis de requisitos solo se aplica a bases de datos relacionales",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué dos condiciones debe cumplir una clave candidata?",
    options: [
      "Ser numérica y auto-incremental",
      "Unicidad e irreductibilidad",
      "Ser simple y no nula",
      "Tener menos de 10 caracteres y ser única",
    ],
    correctAnswer: 1,
  },
  {
    question: "En las dependencias funcionales, si A → B y B → C, entonces existe una dependencia ¿de qué tipo?:",
    options: ["Parcial", "Completa", "Transitiva", "Multivaluada"],
    correctAnswer: 2,
  },
  {
    question:
      "En las relaciones 1:1 del MER, si ambas entidades tienen participación parcial (0,1):(0,1), ¿cuál es la estrategia de transformación al modelo relacional?",
    options: [
      "Crear una sola tabla con todos los atributos",
      "Crear dos tablas y colocar la FK en la entidad que se relaciona más frecuentemente",
      "Eliminar la relación por completo",
      "Crear una tabla intermedia como en las relaciones M:N",
    ],
    correctAnswer: 1,
  },
  {
    question: "Para que una tabla esté en Segunda Forma Normal (2FN), además de estar en 1FN, debe cumplir:",
    options: [
      "No tener dependencias transitivas",
      "Tener solo una clave candidata",
      "Todos los atributos no clave deben depender completamente de la clave primaria",
      "No puede tener valores nulos",
    ],
    correctAnswer: 2,
  },
  {
    question: '¿Cómo se diferencian las restricciones de "exclusión" e "inclusión" del MERE?',
    options: [
      "Exclusión: participación separada; Inclusión: participación ordenada",
      "Son términos equivalentes",
      "Exclusión para relaciones 1:1; Inclusión para M:N",
      "Exclusión elimina entidades; Inclusión las agrega",
    ],
    correctAnswer: 0,
  },
  {
    question: "Al transformar una relación M:N del MER al modelo relacional, ¿cuál es la solución estándar?",
    options: [
      "Eliminar la relación completamente",
      "Crear una tabla intermedia con las claves primarias de ambas entidades como claves foráneas",
      "Colocar una clave foránea en cualquiera de las dos tablas",
      "Fusionar ambas entidades en una sola tabla",
    ],
    correctAnswer: 1,
  },
  {
    question: "En el comando ALTER TABLE, ¿qué función cumple la cláusula MODIFY?",
    options: [
      "Cambiar el nombre de una tabla",
      "Agregar nuevas columnas a la tabla",
      "Modificar el tipo de datos o propiedades de una columna existente",
      "Eliminar columnas de la tabla",
    ],
    correctAnswer: 2,
  },
  {
    question: "¿Cuál es la principal ventaja de usar índices en una base de datos?",
    options: [
      "Reducir el espacio de almacenamiento utilizado",
      "Acelerar las búsquedas y consultas",
      "Eliminar la necesidad de claves primarias",
      "Automatizar las copias de seguridad",
    ],
    correctAnswer: 1,
  },
  {
    question: "Al crear una tabla, ¿cuál de estas reglas para nombres de tabla es INCORRECTA?",
    options: [
      "Deben comenzar por un carácter alfabético",
      "Pueden contener hasta 30 caracteres",
      "Pueden empezar con números o guiones",
      "No pueden coincidir con palabras reservadas de SQL",
    ],
    correctAnswer: 2,
  },
  {
    question: "¿Cuál de las siguientes afirmaciones sobre las vistas es CORRECTA?",
    options: [
      "Siempre almacenan datos físicamente en disco",
      "Se actualizan automáticamente cuando cambian los datos base",
      "Son más rápidas que las tablas normales",
      "No pueden basarse en múltiples tablas",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Cuál de los siguientes comandos pertenece al DML (Lenguaje de Manipulación de Datos)?",
    options: ["CREATE TABLE", "INSERT", "ALTER TABLE", "DROP DATABASE"],
    correctAnswer: 1,
  },
  {
    question:
      "SELECT v.matricula, v.marca, tl.tipo_vehiculo_ligero, tm.cilindrada FROM vehiculos_delivery v LEFT JOIN transporte_ligero tl ON v.id_vehiculo = tl.id_vehiculo LEFT JOIN transporte_motorizado tm ON v.id_vehiculo = tm.id_vehiculo;",
    options: [
      "Muestra únicamente los vehículos que pertenecen a ambas categorías: ligero y motorizado",
      "Mostraría todos los vehículos con sus atributos específicos según su categoría",
      "Elimina los vehículos que no tienen atributos en ninguna de las tablas relacionadas",
      "Agrupa los vehículos por tipo y calcula el promedio de cilindrada",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué efecto tiene la cláusula ON DELETE SET NULL en una relación con clave foránea?",
    options: [
      "Pone a NULL la fila relacionada en ambas tablas",
      "Establece el valor de la clave foránea en NULL cuando se elimina la fila referenciada",
      "Impide la eliminación si hay dependencias",
      "Cuando se borre una Foreign Key, se establece a NULL el valor de la clave primaria a la que apuntaba",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué tipo de información proporciona el comando EXPLAIN sobre una consulta?",
    options: [
      "Orden de lectura de las tablas",
      "Sólo los índices utilizados en la consulta",
      "Estimación del número de filas procesadas",
      "Plan de ejecución y análisis de rendimiento",
    ],
    correctAnswer: 3,
  },
  {
    question: "¿Qué función utilizarías para devolver el primer valor no nulo de una lista de valores?",
    options: ["IFNULL()", "NULLIF()", "COALESCE()", "ISNULL()"],
    correctAnswer: 2,
  },
  {
    question:
      "SELECT id_empleado, nivel_barista, certificaciones_cafe FROM baristas ORDER BY CASE nivel_barista WHEN 'master' THEN 3 WHEN 'senior' THEN 2 WHEN 'junior' THEN 1 END DESC;",
    options: [
      'Ver baristas ordenados por nivel (apareciendo en la columna "nivel_barista" los valores "junior" primero)',
      'Ver baristas ordenados por nivel (apareciendo en la columna "nivel_barista" los valores "master" primero)',
      'Ver baristas ordenados por nivel (apareciendo en la columna "nivel_barista" los valores "3" primero)',
      'Ver baristas ordenados por nivel (apareciendo en la columna "nivel_barista" los valores "1" primero)',
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué función de agregación utilizarías para contar valores únicos en una columna?",
    options: ["COUNT(*)", "COUNT(DISTINCT columna)", "COUNT(UNIQUE columna)", "DISTINCT COUNT(columna)"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué hace la función NULLIF(a, b)?",
    options: [
      "Devuelve a si b es NULL",
      "Devuelve NULL si a es igual a b, sino devuelve a",
      "Devuelve b si a es NULL",
      "Siempre devuelve NULL",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué devuelve un INNER JOIN entre dos tablas?",
    options: [
      "Todas las filas de ambas tablas",
      "Solo las filas de la tabla izquierda",
      "Solo las filas que tienen coincidencias en ambas tablas",
      "Solo las filas de la tabla derecha",
    ],
    correctAnswer: 2,
  },
  {
    question: "¿Qué comando se utiliza para implementar FULL OUTER JOIN en MySQL?",
    options: ["FULL JOIN", "OUTER JOIN", "UNION entre LEFT JOIN y RIGHT JOIN", "COMPLETE JOIN"],
    correctAnswer: 2,
  },
  {
    question: "¿Cuándo es recomendable usar un CROSS JOIN?",
    options: [
      "Siempre, es el más eficiente",
      "Cuando necesitas el producto cartesiano para generar todas las combinaciones posibles",
      "Solo para tablas con menos de 10 filas",
      "Nunca, siempre genera errores",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué hace la opción WITH GRANT OPTION en el comando GRANT?",
    options: [
      "Otorga todos los permisos disponibles",
      "Permite al usuario otorgar los mismos permisos a otros usuarios",
      "Hace que los permisos sean temporales",
      "Aplica los permisos solo a tablas nuevas",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Cuál es la ventaja principal de usar roles en lugar de asignar permisos directamente a usuarios?",
    options: [
      "Es más rápido en ejecución",
      "Permite agrupar permisos y simplificar la gestión de múltiples usuarios",
      "Ocupa menos espacio en disco",
      "Mejora la velocidad de las consultas",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué es una vista (VIEW) en bases de datos?",
    options: [
      "Una tabla física que almacena datos permanentemente",
      "Una consulta guardada que actúa como tabla virtual",
      "Un índice especial para acelerar consultas",
      "Un procedimiento almacenado simple",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Cuál es la diferencia principal entre un bloqueo compartido y un bloqueo exclusivo?",
    options: [
      "El compartido es más rápido que el exclusivo",
      "El compartido permite múltiples lecturas pero ninguna escritura, el exclusivo no permite ni lecturas ni escrituras por otros",
      "El compartido es temporal, el exclusivo es permanente",
      "El compartido usa menos memoria que el exclusivo",
    ],
    correctAnswer: 1,
  },
]

export default function SimulacroDiciembreIBBDD() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(Array(questions.length).fill(false))
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null))
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [incorrectCount, setIncorrectCount] = useState(0)

  const handleAnswer = (answerIndex: number) => {
    if (answeredQuestions[currentQuestion]) return

    setSelectedAnswer(answerIndex)

    const newAnswered = [...answeredQuestions]
    newAnswered[currentQuestion] = true
    setAnsweredQuestions(newAnswered)

    const newUserAnswers = [...userAnswers]
    newUserAnswers[currentQuestion] = answerIndex
    setUserAnswers(newUserAnswers)

    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    } else {
      setIncorrectCount(incorrectCount + 1)
    }
  }

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedAnswer(userAnswers[currentQuestion - 1])
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(userAnswers[currentQuestion + 1])
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
    setUserAnswers(Array(questions.length).fill(null))
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
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}

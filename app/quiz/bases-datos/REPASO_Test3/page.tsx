"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, XCircle } from "lucide-react"

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
}

const questions: Question[] = [
  {
    id: 1,
    question: "INSERT INTO Clientes (IDCliente, Nombre, Email) VALUES (5, 'Luis', 'luis@example.com') ON DUPLICATE KEY UPDATE Email = VALUES(Email)",
    options: [
      "No realiza ninguna operación si el ID existe",
      "Actualiza el email del cliente si el ID ya existe",
      "Inserta siempre un nuevo cliente con ID diferente",
      "Elimina el cliente si el email es duplicado",
    ],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: "SELECT Nombre FROM Clientes ORDER BY Nombre ASC",
    options: [
      "Devuelve los nombres de clientes ordenados alfabéticamente ascendente",
      "Devuelve los nombres en orden descendente",
      "Agrupa los clientes por nombre",
      "Elimina los clientes duplicados",
    ],
    correctAnswer: 0,
  },
  {
    id: 3,
    question: "¿Para qué tipo de tareas resulta especialmente adecuado definir eventos recurrentes en la base de datos?",
    options: [
      "Crear tablas temporales puntuales",
      "Rutinas periódicas como backups, limpieza de datos o generación de informes",
      "Definir nuevas claves primarias",
      "Cambiar la versión del motor de la base de datos",
    ],
    correctAnswer: 1,
  },
  {
    id: 4,
    question: "¿Qué regla de integridad impide que un atributo de la clave primaria tome el valor NULL?",
    options: ["Integridad referencial", "Regla UNIQUE", "Integridad de entidad", "Regla CHECK"],
    correctAnswer: 2,
  },
  {
    id: 5,
    question: "¿Qué característica destaca en una base de datos frente a un conjunto de ficheros independientes?",
    options: [
      "Mayor redundancia de datos",
      "Imposibilidad de acceso concurrente",
      "Uso exclusivo de texto plano",
      "Relaciones entre datos que mejoran coherencia e integración",
    ],
    correctAnswer: 3,
  },
  {
    id: 6,
    question: "¿Qué comando DML se utiliza para cargar datos desde un archivo externo a una tabla?",
    options: ["LOAD DATA INFILE", "INSERT DATA", "UPLOAD DATA", "IMPORT DATA"],
    correctAnswer: 0,
  },
  {
    id: 7,
    question: "SELECT A.NombreAlumno, C.NombreCurso FROM Alumnos A JOIN Matriculas M ON A.IDAlumno = M.IDAlumno JOIN Cursos C ON M.IDCurso = C.IDCurso",
    options: [
      "Muestra qué cursos está matriculado cada alumno",
      "Elimina cursos sin alumnos",
      "Crea nuevas matrículas",
      "Muestra solo los alumnos sin matrícula",
    ],
    correctAnswer: 0,
  },
  {
    id: 8,
    question: "¿Qué efecto tiene la sentencia REVOKE sobre los privilegios de un usuario en la base de datos?",
    options: [
      "Retira solo los permisos indicados, manteniendo el resto",
      "Concede todos los permisos posibles",
      "No tiene ningún efecto",
      "Elimina totalmente al usuario",
    ],
    correctAnswer: 0,
  },
  {
    id: 9,
    question: "SELECT P.NombreProducto, Pro.NombreProveedor FROM Productos P RIGHT JOIN Proveedores Pro ON P.IDProveedor = Pro.IDProveedor",
    options: [
      "Devuelve todos los proveedores aunque no tengan productos",
      "Crea proveedores nuevos",
      "Actualiza productos sin proveedor",
      "Devuelve solo productos con proveedor",
    ],
    correctAnswer: 0,
  },
  {
    id: 10,
    question: "¿Qué tipo de clave garantiza que no haya dos filas iguales respecto a ese conjunto de atributos y que además sea irreducible?",
    options: ["Clave secundaria", "Clave primaria", "Clave ajena", "Clave candidata"],
    correctAnswer: 3,
  },
  {
    id: 11,
    question: "¿Qué comando se utiliza para eliminar todos los registros de una tabla rápidamente?",
    options: ["TRUNCATE", "CLEAR", "DELETE", "DROP"],
    correctAnswer: 0,
  },
  {
    id: 12,
    question: "¿Qué comando DQL se utiliza para seleccionar columnas específicas de una tabla?",
    options: ["QUERY", "GET", "SELECT", "FETCH"],
    correctAnswer: 2,
  },
  {
    id: 13,
    question: "¿Qué representa una relación ISA en un diagrama MER/MERE?",
    options: [
      "Una jerarquía de generalización/especialización entre superclase y subclases",
      "Una agregación entre relaciones",
      "Un atributo multivaluado",
      "Una relación N:M estándar",
    ],
    correctAnswer: 0,
  },
  {
    id: 14,
    question: "CREATE TABLE Clientes (IDCliente INT PRIMARY KEY, Nombre VARCHAR(100) NOT NULL, Email VARCHAR(100) UNIQUE)",
    options: [
      "Elimina la tabla Clientes",
      "Crea una tabla base llamada Clientes",
      "Modifica la tabla Clientes existente",
      "Inserta datos en la tabla Clientes",
    ],
    correctAnswer: 1,
  },
  {
    id: 15,
    question: "SELECT E.NombreEmpleado, D.NombreDepartamento, S.Sueldo FROM Empleados E JOIN Departamentos D ON E.IDDepartamento = D.IDDepartamento JOIN Salarios S ON E.IDEmpleado = S.IDEmpleado",
    options: [
      "Cuenta empleados por departamento",
      "Elimina empleados sin sueldo",
      "Devuelve empleados con su departamento y sueldo",
      "Crea nuevos salarios para cada empleado",
    ],
    correctAnswer: 2,
  },
  {
    id: 16,
    question: "¿Qué comando DML se utiliza para combinar INSERT y UPDATE en una sola operación en MySQL?",
    options: ["MERGE", "FUSE", "INSERT ... ON DUPLICATE KEY UPDATE", "INSERT OR UPDATE"],
    correctAnswer: 2,
  },
  {
    id: 17,
    question: "SELECT MAX(Precio) FROM Productos",
    options: [
      "Devuelve el precio mínimo",
      "Cuenta cuántos productos hay",
      "Devuelve el producto más vendido",
      "Devuelve el precio máximo de la tabla Productos",
    ],
    correctAnswer: 3,
  },
  {
    id: 18,
    question: "¿Qué describe una restricción de inclusividad en el MERE?",
    options: [
      "Que para participar en una relación una entidad debe haber participado antes en otra",
      "Que una entidad puede estar en varias subclases simultáneamente",
      "Que dos relaciones nunca pueden cumplirse a la vez",
      "Que una entidad solo puede pertenecer a una subclase",
    ],
    correctAnswer: 0,
  },
  {
    id: 19,
    question: "¿Qué requisito caracteriza a la Primera Forma Normal (1FN)?",
    options: [
      "Debe existir una clave ajena en cada tabla",
      "Cada atributo debe depender solo de la clave",
      "No debe haber dependencias transitivas",
      "Todos los atributos deben ser atómicos sin valores multivaluados",
    ],
    correctAnswer: 3,
  },
  {
    id: 20,
    question: "SELECT * FROM Clientes WHERE Ciudad = 'Madrid'",
    options: [
      "Actualiza la ciudad de los clientes a Madrid",
      "Devuelve todos los clientes de Madrid",
      "Crea un nuevo cliente en Madrid",
      "Elimina los clientes que no son de Madrid",
    ],
    correctAnswer: 1,
  },
  {
    id: 21,
    question: "CREATE INDEX idx_clientes_email ON Clientes(Email)",
    options: [
      "Crea un índice para acelerar búsquedas por Email",
      "Elimina duplicados en Email",
      "Convierte Email en NOT NULL",
      "Crea una clave primaria nueva",
    ],
    correctAnswer: 0,
  },
  {
    id: 22,
    question: "¿Qué indica la participación total de una entidad en una relación en el MER/MERE?",
    options: [
      "Que la relación es siempre N:M",
      "Que ninguna instancia puede participar en la relación",
      "Que solo algunas instancias pueden participar opcionalmente",
      "Que cada instancia debe aparecer en al menos una relación",
    ],
    correctAnswer: 3,
  },
  {
    id: 23,
    question: "SELECT DISTINCT Categoria FROM Productos",
    options: [
      "Elimina categorías duplicadas de la tabla",
      "Cuenta cuántas categorías hay",
      "Devuelve cada categoría una sola vez",
      "Ordena las categorías alfabéticamente",
    ],
    correctAnswer: 2,
  },
  {
    id: 24,
    question: "¿Qué tipo de bloqueo permite que varias transacciones puedan leer al mismo tiempo una misma fila o tabla, pero sin modificarla?",
    options: ["Bloqueo compartido", "Bloqueo intencional", "Bloqueo de escalada", "Bloqueo exclusivo"],
    correctAnswer: 0,
  },
  {
    id: 25,
    question: "UPDATE Productos SET Stock = Stock - 1 WHERE IDProducto = 10",
    options: [
      "Duplica el stock del producto 10",
      "Elimina el producto 10",
      "Establece el stock de todos los productos a 1",
      "Resta una unidad al stock del producto 10",
    ],
    correctAnswer: 3,
  },
  {
    id: 26,
    question: "¿Cuál es la función principal de un Sistema de Gestión de Bases de Datos (SGBD)?",
    options: [
      "Fabricar hardware de almacenamiento",
      "Diseñar interfaces gráficas",
      "Gestionar, almacenar y permitir el acceso seguro a los datos",
      "Traducir código de programación",
    ],
    correctAnswer: 2,
  },
  {
    id: 27,
    question: "¿Qué restricción se utiliza para impedir que una columna acepte valores repetidos, salvo posibles nulos?",
    options: ["CHECK", "NOT NULL", "UNIQUE", "PRIMARY KEY"],
    correctAnswer: 2,
  },
  {
    id: 28,
    question: "¿Qué opción ON DELETE elimina también las filas relacionadas en la tabla secundaria cuando se borra una fila de la tabla principal?",
    options: ["ON DELETE NO ACTION", "ON DELETE SET DEFAULT", "ON DELETE SET NULL", "ON DELETE CASCADE"],
    correctAnswer: 3,
  },
  {
    id: 29,
    question: "¿Qué es una tabla base en una base de datos relacional?",
    options: [
      "Una tabla que solo almacena el resultado de una consulta",
      "Una tabla temporal que crea el sistema",
      "Una vista sin definición",
      "Una tabla persistente que guarda datos y metadatos",
    ],
    correctAnswer: 3,
  },
  {
    id: 30,
    question: "En el ejemplo de (Empleado que Diseña o Fabrica Productos), ¿cuál es la diferencia clave entre Exclusión (línea discontinua) y Exclusividad?",
    options: [
      "Exclusión es permanente y Exclusividad permite cambios futuros.",
      "Exclusión usa triángulo ISA y Exclusividad no.",
      "Exclusividad es \"nunca ambas\" y Exclusión es \"no al mismo tiempo, pero sí en secuencia\".",
      "Ambas requieren flecha con cardinalidad mínima.",
    ],
    correctAnswer: 2,
  },
]

export default function PythonQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [quizFinished, setQuizFinished] = useState(false)
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([])

  useEffect(() => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5)
    setShuffledQuestions(shuffled)
  }, [])

  if (shuffledQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-foreground">Cargando...</p>
      </div>
    )
  }

  const handleAnswer = (answerIndex: number) => {
    if (isAnswered) return

    setSelectedAnswer(answerIndex)
    setIsAnswered(true)

    if (answerIndex === shuffledQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setIsAnswered(false)
    } else {
      setQuizFinished(true)
    }
  }

  const resetQuiz = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5)
    setShuffledQuestions(shuffled)
    setCurrentQuestion(0)
    setScore(0)
    setSelectedAnswer(null)
    setIsAnswered(false)
    setQuizFinished(false)
  }

  if (quizFinished) {
    const percentage = Math.round((score / shuffledQuestions.length) * 100)
    let message = ""
    if (percentage >= 90) message = "Excelente! Dominas Python"
    else if (percentage >= 70) message = "Muy bien! Buen conocimiento de Python"
    else if (percentage >= 50) message = "Bien! Sigue practicando"
    else message = "Necesitas repasar más Python"

    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-3xl">
          <Link href="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Button>
          </Link>

          <Card className="p-8 bg-card border-border text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Quiz Completado</h2>
            <div className="my-8">
              <div className="text-6xl font-bold text-green-500 mb-2">{percentage}%</div>
              <p className="text-xl text-foreground mb-2">
                {score} de {shuffledQuestions.length} correctas
              </p>
              <p className="text-lg text-muted-foreground">{message}</p>
            </div>
            <div className="flex gap-4 justify-center">
              <Button onClick={resetQuiz} size="lg" className="bg-green-500 hover:bg-green-600">
                Reintentar
              </Button>
              <Link href="/">
                <Button variant="outline" size="lg">
                  Volver al inicio
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  const question = shuffledQuestions[currentQuestion]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Button>
        </Link>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-foreground">Quiz de Python</h1>
            <div className="text-lg font-semibold text-green-500">
              Puntuación: {score}/{shuffledQuestions.length}
            </div>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / shuffledQuestions.length) * 100}%` }}
            />
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Pregunta {currentQuestion + 1} de {shuffledQuestions.length}
          </p>
        </div>

        <Card className="p-6 bg-card border-border mb-6">
          <h2 className="text-xl font-semibold text-foreground mb-6">{question.question}</h2>

          <div className="space-y-3">
            {question.options.map((option, index) => {
              const isCorrect = index === question.correctAnswer
              const isSelected = index === selectedAnswer
              let buttonClass = "w-full justify-start text-left h-auto py-4 px-6 "

              if (isAnswered) {
                if (isCorrect) {
                  buttonClass += "bg-green-500/20 border-green-500 text-green-500 hover:bg-green-500/20"
                } else if (isSelected) {
                  buttonClass += "bg-red-500/20 border-red-500 text-red-500 hover:bg-red-500/20"
                } else {
                  buttonClass += "opacity-50"
                }
              } else {
                buttonClass += "hover:bg-green-500/10 hover:border-green-500"
              }

              return (
                <Button
                  key={index}
                  variant="outline"
                  className={buttonClass}
                  onClick={() => handleAnswer(index)}
                  disabled={isAnswered}
                >
                  <span className="flex items-center gap-3 w-full">
                    <span className="font-bold">{String.fromCharCode(65 + index)}.</span>
                    <span className="flex-1">{option}</span>
                    {isAnswered && isCorrect && <CheckCircle2 className="h-5 w-5" />}
                    {isAnswered && isSelected && !isCorrect && <XCircle className="h-5 w-5" />}
                  </span>
                </Button>
              )
            })}
          </div>
        </Card>

        {isAnswered && (
          <Button onClick={handleNext} size="lg" className="w-full bg-green-500 hover:bg-green-600">
            {currentQuestion < shuffledQuestions.length - 1 ? "Siguiente pregunta" : "Ver resultados"}
          </Button>
        )}
      </div>
    </div>
  )
}

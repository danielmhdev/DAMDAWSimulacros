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
    question: "¿Qué representa gráficamente un atributo multivaluado en un diagrama MER?",
    options: ["Un rombo con doble trazo", "Una elipse con doble trazo", "Una elipse discontinua", "Un rectángulo con doble trazo"],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: "¿Qué tipo de base de datos distribuye la información en varios servidores interconectados?",
    options: ["Relacional local", "Centralizada", "Documental", "Distribuida"],
    correctAnswer: 3,
  },
  {
    id: 3,
    question: "UPDATE Clientes SET Email = 'nuevo@example.com' WHERE IDCliente = 1",
    options: ["Actualiza el email de todos los clientes", "Actualiza el email del cliente con ID 1", "Inserta un nuevo cliente", "Elimina el cliente 1"],
    correctAnswer: 1,
  },
  {
    id: 4,
    question: "¿Qué representa una entidad en el Modelo Entidad-Relación?",
    options: ["Un objeto o concepto del mundo real que se desea almacenar", "Una consulta SQL", "Un usuario del SGBD", "Un índice físico"],
    correctAnswer: 0,
  },
  {
    id: 5,
    question: "¿Qué comando DDL se utiliza para mostrar todas las bases de datos disponibles?",
    options: ["SHOW DATABASES", "LIST DATABASES", "DISPLAY DATABASES", "VIEW DATABASES"],
    correctAnswer: 0,
  },
  {
    id: 6,
    question: "SELECT Nombre FROM Productos WHERE Nombre LIKE 'A%'",
    options: [
      "Devuelve productos cuyo nombre contiene una A en cualquier posición",
      "Devuelve productos cuyo nombre termina en A",
      "Devuelve productos cuyo nombre empieza por A",
      "Devuelve todos los productos",
    ],
    correctAnswer: 2,
  },
  {
    id: 7,
    question: "¿Qué es un atributo derivado?",
    options: [
      "Un atributo calculado a partir de otros atributos",
      "Un atributo que admite múltiples valores",
      "Un atributo que no tiene valor",
      "Un atributo que actúa como clave primaria",
    ],
    correctAnswer: 0,
  },
  {
    id: 8,
    question: "¿Qué comando DDL se utiliza para eliminar una base de datos completa?",
    options: ["DELETE DATABASE", "DROP DATABASE", "ERASE DATABASE", "REMOVE DATABASE"],
    correctAnswer: 1,
  },
  {
    id: 9,
    question: "¿Qué objetivo principal tiene la normalización en el diseño de bases de datos?",
    options: [
      "Eliminar todas las claves ajenas",
      "Impedir el uso de vistas e índices",
      "Reducir redundancias y anomalías de actualización",
      "Aumentar el tamaño de las tablas",
    ],
    correctAnswer: 2,
  },
  {
    id: 10,
    question: "GRANT SELECT ON BBDD.* TO 'report'@'%' WITH GRANT OPTION",
    options: [
      "Permite al usuario report leer todas las tablas y delegar ese permiso a otros",
      "Concede permisos de escritura completos",
      "Impide que report ceda sus permisos a otros",
      "Revoca permisos de lectura",
    ],
    correctAnswer: 0,
  },
  {
    id: 11,
    question: "¿Qué comando DCL se utiliza para revocar permisos de un usuario en una base de datos?",
    options: ["DENY", "DELETE", "REMOVE", "REVOKE"],
    correctAnswer: 3,
  },
  {
    id: 12,
    question: "SELECT Pr.Nombre, SUM(L.Cantidad) FROM Productos Pr JOIN LineasPedido L ON Pr.IDProducto = L.IDProducto GROUP BY Pr.Nombre",
    options: [
      "Devuelve cada producto con la cantidad total vendida",
      "Devuelve solo la última venta de cada producto",
      "Elimina líneas de pedido duplicadas",
      "Actualiza el stock de productos",
    ],
    correctAnswer: 0,
  },
  {
    id: 13,
    question: "¿Qué se entiende por especialización en el Modelo Entidad-Relación Extendido (MERE)?",
    options: [
      "Convertir relaciones ternarias en binarias",
      "Unir varias entidades específicas en una más general",
      "Partir de una entidad general y crear subentidades más específicas que heredan sus atributos",
      "Eliminar entidades redundantes",
    ],
    correctAnswer: 2,
  },
  {
    id: 14,
    question: "¿Qué convierte a los datos en información útil?",
    options: ["Organizarlos y darles contexto", "Cambiar su formato a binario", "Aplicar compresión", "Aumentar la cantidad de datos"],
    correctAnswer: 0,
  },
  {
    id: 15,
    question: "SELECT F.NumFactura, Cl.NombreCliente FROM Facturas F LEFT JOIN Clientes Cl ON F.IDCliente = Cl.IDCliente WHERE Cl.IDCliente IS NULL",
    options: [
      "Actualiza el cliente de las facturas",
      "Elimina facturas antiguas",
      "Devuelve facturas sin cliente asociado",
      "Devuelve clientes sin facturas",
    ],
    correctAnswer: 2,
  },
  {
    id: 16,
    question: "¿Cuál es el objetivo principal de usar procedimientos almacenados en lugar de enviar muchas sentencias individuales desde la aplicación?",
    options: [
      "Reemplazar completamente a las vistas",
      "Mejorar rendimiento y centralizar la lógica de negocio",
      "Aumentar el tamaño de la base de datos",
      "Evitar el uso de transacciones",
    ],
    correctAnswer: 1,
  },
  {
    id: 17,
    question: "UPDATE Empleados SET Sueldo = Sueldo * 1.05",
    options: [
      "Solo actualiza el sueldo del último empleado",
      "Crea una nueva tabla de sueldos",
      "Elimina empleados con sueldo bajo",
      "Incrementa el sueldo de todos los empleados un 5 por ciento",
    ],
    correctAnswer: 3,
  },
  {
    id: 18,
    question: "¿Cuál de las siguientes NO es una parte del modelo de datos relacional?",
    options: ["Parte semántica", "Parte gráfica", "Parte estructural", "Parte manipulativa"],
    correctAnswer: 1,
  },
  {
    id: 19,
    question: "¿Cuál es el elemento básico del modelo relacional?",
    options: ["El índice", "El registro", "La tabla", "La columna"],
    correctAnswer: 2,
  },
  {
    id: 20,
    question: "SELECT Ciudad, COUNT(*) FROM Clientes GROUP BY Ciudad",
    options: [
      "Devuelve cuántos clientes hay en cada ciudad",
      "Elimina ciudades sin clientes",
      "Actualiza la ciudad de todos los clientes",
      "Devuelve solo la ciudad con más clientes",
    ],
    correctAnswer: 0,
  },
  {
    id: 21,
    question: "CREATE TABLE Pedidos (IDPedido INT PRIMARY KEY, Fecha DATE, IDCliente INT, FOREIGN KEY (IDCliente) REFERENCES Clientes(IDCliente))",
    options: [
      "Crea solo la clave primaria sin columnas",
      "Elimina la tabla Pedidos y su relación",
      "Crea una tabla Pedidos relacionada con Clientes mediante clave ajena",
      "Crea una vista de Pedidos",
    ],
    correctAnswer: 2,
  },
  {
    id: 22,
    question: "¿Qué diferencia hay entre exclusividad y exclusión según el MERE?",
    options: [
      "La exclusividad solo aplica a relaciones ternarias",
      "La exclusión solo se usa en generalizaciones",
      "La exclusión es más restrictiva que la exclusividad",
      "La exclusividad prohíbe participar en las otras relaciones siempre, la exclusión solo simultáneamente",
    ],
    correctAnswer: 3,
  },
  {
    id: 23,
    question: "SELECT Nombre, Stock FROM Productos WHERE Stock BETWEEN 10 AND 50",
    options: [
      "Devuelve solo productos con stock menor que 10",
      "Devuelve productos con stock entre 10 y 50 inclusive",
      "Devuelve productos con stock mayor que 50",
      "Actualiza el stock a 10 o 50",
    ],
    correctAnswer: 1,
  },
  {
    id: 24,
    question: "¿Qué es una base de datos en el contexto de la era digital?",
    options: [
      "Un conjunto de archivos independientes sin relación",
      "Un dispositivo físico de almacenamiento",
      "Un programa que solo muestra información en pantalla",
      "Un sistema que permite almacenar, organizar y recuperar datos de forma estructurada",
    ],
    correctAnswer: 3,
  },
  {
    id: 25,
    question: "¿Qué tipo de entidad depende de otra para existir y suele tener clave primaria compuesta?",
    options: ["Entidad asociativa", "Entidad fuerte", "Entidad de unión", "Entidad débil"],
    correctAnswer: 3,
  },
  {
    id: 26,
    question: "¿Qué tipo de JOIN se utiliza para devolver todas las filas de la tabla izquierda y las coincidencias de la derecha?",
    options: ["LEFT JOIN", "INNER JOIN", "RIGHT JOIN", "FULL JOIN"],
    correctAnswer: 0,
  },
  {
    id: 27,
    question: "SELECT Nombre, Precio FROM Productos WHERE Precio > 100",
    options: [
      "Devuelve solo un producto cualquiera",
      "Modifica el precio de todos los productos",
      "Elimina los productos con precio mayor que 100",
      "Devuelve todos los productos con precio mayor que 100",
    ],
    correctAnswer: 3,
  },
  {
    id: 28,
    question: "¿Qué ventaja ofrece una base de datos NoSQL frente a una relacional?",
    options: [
      "Ofrece mayor flexibilidad para datos no estructurados o semiestructurados",
      "Solo sirve para datos numéricos",
      "Obliga a usar siempre el mismo esquema rígido",
      "No permite escalar horizontalmente",
    ],
    correctAnswer: 0,
  },
  {
    id: 29,
    question: "¿Cuál de las siguientes opciones describe una propiedad esencial de las transacciones conocida por el acrónimo ACID?",
    options: [
      "Acumulación: las operaciones se agrupan sin control",
      "Anonimato: oculta la identidad de los usuarios",
      "Aleatoriedad: el orden de ejecución no importa",
      "Atomicidad: se completan todas las operaciones o se deshacen",
    ],
    correctAnswer: 3,
  },
  {
    id: 30,
    question: "¿Qué define una restricción de inclusión entre asociaciones de entidades?",
    options: [
      "Que dos entidades solo pueden asociarse mediante una relación si ya están asociadas por otra",
      "Que siempre debe existir una relación ternaria",
      "Que las entidades comparten la misma clave primaria",
      "Que ninguna de las dos entidades puede asociarse nunca",
    ],
    correctAnswer: 0,
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

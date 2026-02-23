import { useState } from 'react'

function App() {
  const [n1, setn1] = useState(0)
  const [n2, setn2] = useState(0)
  const [resultado, setResultado] = useState("")

function somar(n1, n2) {
  return n1 + n2
}

function subtrair(n1, n2) {
  return n1 - n2
}

function multiplicar(n1, n2) {
  return n1 * n2
}

function dividir(n1, n2) {
  return n1 / n2
}

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center text-indigo-600 mb-6">Calculadora</h1>

        <div className="mb-4">
          <label htmlFor="num1" className="block text-sm font-medium text-gray-600 mb-1" id='num1'>Primeiro número</label>
          <input
            id="num1"
            type="text"
            onChange={(event) => setn1(event.target.value)}
            className="bg-gray-50 border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Digite um número"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="num2" className="block text-sm font-medium text-gray-600 mb-1" id='num2'>Segundo número</label>
          <input
            id="num2"
            type="text"
            onChange={(event) => setn2(event.target.value)}
            className="bg-gray-50 border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Digite outro número"
          />
        </div>

        <div className="grid grid-cols-4 gap-2 mb-6">
          <button type="button" onClick={() => setResultado(somar(n1, n2))} className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 rounded-lg transition-colors text-xl">+</button>
          <button onClick={() => setResultado(subtrair(n1, n2))} className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 rounded-lg transition-colors text-xl">-</button>
          <button onClick={() => setResultado(multiplicar(n1, n2))} className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 rounded-lg transition-colors text-xl">×</button>
          <button onClick={() => setResultado(dividir(n1, n2))} className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 rounded-lg transition-colors text-xl">÷</button>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
          <span className="text-sm text-gray-400 block mb-1">Resultado</span>
          <span className="text-3xl font-bold text-indigo-600">{resultado !== "" ? resultado : "—"}</span>
        </div>
      </div>
    </div>
  )
}

export default App

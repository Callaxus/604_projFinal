import { useState } from 'react'

function IO_Ex6() {
  const [data, setData] = useState({})

  function handleSubmit() {
    setData({
      nome: '',
      estado: '',
      idade: 0,
      altura: 0,
      socio: '',
      email: ''
    })
  }

  return (
    <div>
      <button onClick={handleSubmit}>Show Data</button>

      <p>Nome: {data.nome}</p>
      <p>Estado Civil: {data.estado}</p>
      <p>Idade: {data.idade}</p>
      <p>Altura: {data.altura}</p>
      <p>Sócio: {data.socio}</p>
      <p>Email: {data.email}</p>
    </div>
  )
}
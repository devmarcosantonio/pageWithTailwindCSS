import React from 'react'

export default function Main() {
  return (
    <main className='w-[90%] mt-14 bg-transparent p-4 z-10'>   
        <section className='flex flex-wrap gap-4 items-center bg-white rounded-2xl p-4 shadow-lg *:text-cyan-600 '>
          <div className='flex flex-col min-w-[200px]'>
            <label htmlFor='estrutura'>Estrutura</label>
            <select id='estrutura' className='border rounded p-2'>
              <option value=''>Selecione</option>
              {/* Adicione as opções aqui */}
            </select>
          </div>
          <div className='flex flex-col min-w-[200px]'>
            <label htmlFor='ano'>Por Ano</label>
            <select id='ano' className='border rounded p-2'>
              <option value=''>Selecione</option>
              {/* Adicione as opções aqui */}
            </select>
          </div>
          <div className='flex flex-col min-w-[200px]'>
            <label htmlFor='empresa'>Por Empresa</label>
            <select id='empresa' className='border rounded p-2'>
              <option value=''>Selecione</option>
              {/* Adicione as opções aqui */}
            </select>
          </div>
          <div className='flex flex-col min-w-[200px]'>
            <label htmlFor='mes'>Por Mês</label>
            <select id='mes' className='border rounded p-2'>
              <option value=''>Selecione</option>
              {/* Adicione as opções aqui */}
            </select>
          </div>
          <button className='bg-transparent border border-cyan-600 text-cyan-600 rounded font-bold h-12 min-w-[200px]'>
            Gerar Gráficos
          </button>
        </section>


        <section className='grid grid-cols-2 gap-4 my-4 bg-white rounded-2xl p-4 shadow-lg'> 
          <h1 className='h-[500px]'>Grafico 1</h1>
          <h1>Grafico 2</h1>
          <h1>Grafico 3</h1>
        </section>
    </main>
  )
}

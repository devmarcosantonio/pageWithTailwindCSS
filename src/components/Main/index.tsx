import React from 'react'

export default function Main() {
  return (
    <main className='w-[90%] mt-14 bg-transparent p-4 z-10'>   
        <section className='flex flex-wrap gap-4 bg-white rounded-2xl p-4 shadow-lg'>
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
          <button className='bg-blue-500 text-white rounded p-2 min-w-[200px]'>
            Gerar Gráficos
          </button>
        </section>
      
    </main>
  )
}

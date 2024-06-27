import React, { useState } from 'react';
import Table from './Table';
import { GridProccess } from './GridProccess';

export const Fifo: React.FC = () => {
  const [arrivalTime, setArrivalTime] = useState('');
  const [runningTime, setRunningTime] = useState('');
  const [processes, setProcesses] = useState<any[]>([]);

  const handleInsertProcess = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (processes.length >= 10) {
        alert('You cannot add more than 10 processes.');
        return;
    }

    if (parseInt(runningTime) > 10) {
        alert('Running time cannot be greater than 10.');
        return;
    }

    if (parseInt(runningTime) < 1) {
        alert('Running time cannot be less than 1.');
        return;
    }

    if (parseInt(arrivalTime) < 0) {
        alert('Arrival time cannot be less than 0.');
        return;
    }

    const newProcess = {
      id: processes.length + 1,
      arrivalTime,
      runningTime,
    };

    setProcesses([...processes, newProcess]);
    setArrivalTime('');
    setRunningTime('');
  };

  return (
    <div>
      <form onSubmit={handleInsertProcess}>
        <div className="flex ml-20 mr-20">
          {/* Primeira metade */}
          <div className="w-1/2 bg-blue-200 m-10">
          
            
            <div className="flex flex-col gap-4 justify-end">

              <p className="text-xl font-bold ">Enter or generate process info:</p>
            

              {/* Input de Arrival Time */}
              <div className="flex flex-row justify-between items-center">
                <label htmlFor="arrivalTime" className="text-lg font-bold">Arrival Time:</label>
                <input
                  id="arrivalTime"
                  type="number"
                  placeholder="Enter Arrival Time"                                                      
                  className="border border-gray-300 px-3 py-2 mt-1 focus:outline-none focus:border-blue-700 rounded-xl w-1/2"
                  value={arrivalTime}
                  onChange={(e) => setArrivalTime(e.target.value)}
                  required
                />
              </div>

              {/* Input de Running Time */}
              <div className="flex flex-row justify-between items-center">
                <label htmlFor="runningTime" className="text-lg font-bold">Running Time:</label>
                <input
                  id="runningTime"
                  type="number"
                  placeholder="Enter Running Time"                                                 
                  className="border border-gray-300 px-3 py-2 mt-1 focus:outline-none focus:border-blue-700 rounded-xl w-1/2"
                  value={runningTime}
                  onChange={(e) => setRunningTime(e.target.value)}
                  required
                />
              </div>

              {/* Botão Insert Process */}
            <div className='text-right'>
              <button
                type="submit"                                    
                className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-xl w-full mt-4"
              >
                Insert Process
              </button>
            </div>


            </div>
          </div> 



          {/* Segunda metade */}
          <div className="w-1/2 bg-blue-200 m-10 ">
            {/* Tabela de processos */}
            <Table processes={processes} />
          </div>
        </div>
      </form>
      
      {/*body da pag */}
      <div className='bg-white h-screen pt-5'>
        <GridProccess tableInfos={processes}/>
      </div>
    </div>
  );
};

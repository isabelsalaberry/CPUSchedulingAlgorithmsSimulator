import React from 'react';

[
    "col-span-1",
    "col-span-2",
    "col-span-3",
    "col-span-4",
    "col-span-5",
    "col-span-6",
    "col-span-7",
    "col-span-8",
    "col-span-9",
    "col-span-10",
    "col-span-11",
    "col-span-12",
]

interface GridProccessProps {
tableInfos: any[]
}

export const GridProccess: React.FC<GridProccessProps> = ({tableInfos}) => {
    console.log({tableInfos});
    return(
    <div className='grid grid-cols-4 grid-rows-1 h-full'>

        {/* Grid process - cerne do troço */}
        <div className=' bg-blue-100 m-10 rounded-md col-span-3 grid grid-cols-10 grid-rows-11 grid-flow-col'>
        {tableInfos.map((process, index) =>{    {/** */}
                const arrivalTime = parseInt(process.arrivalTime, 10);
                const runningTime = parseInt(process.runningTime, 10);
                const colSpan = `col-span-${runningTime}`;
                const colStart = `col-start-${arrivalTime + 1}`;
                const colEnd = `col-end-${arrivalTime + runningTime + 1}`;
                const className = `bg-blue-600 text-white flex items-center justify-center`;
                return (
                    <div className={`grid grid-cols-10 grid-flow-row ${colSpan}`}>
                        <div className={`bg-blue-100 col-start-1 col-end-${arrivalTime + 1}`}> </div>
                        <div key={process.id} className={className}>P{index+1}</div>
                    </div>
                );
            })} 

             {/* Numbers (guide) */}
            <div className=" flex justify-between col-span-10 row-span-1 p-3 h-full row-start-11 row-end-12">
                <div className="text-base font-jetbrains-mono text-black text-center">0</div>
                <div className="text-base font-jetbrains-mono text-black text-center">1</div>
                <div className="text-base font-jetbrains-mono text-black text-center">2</div>
                <div className="text-base font-jetbrains-mono text-black text-center">3</div>
                <div className="text-base font-jetbrains-mono text-black text-center">4</div>
                <div className="text-base font-jetbrains-mono text-black text-center">5</div>
                <div className="text-base font-jetbrains-mono text-black text-center">6</div>
                <div className="text-base font-jetbrains-mono text-black text-center">7</div>
                <div className="text-base font-jetbrains-mono text-black text-center">8</div>
                <div className="text-base font-jetbrains-mono text-black text-center">9</div>
                <div className="text-base font-jetbrains-mono text-black text-center">10</div>
            </div>

            
        </div>
    
       

             



                    {/*description table - PENSAR EM COMO FAZER A DESC*/}
            <div className=' bg-blue-100 m-10 rounded-md '>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableInfos.map((process) => (
                        <tr key={process.id}>
                            <td className='p-4'>description {process.id}</td>
                        </tr>
                        ))}        
                    </tbody>
                </table>
            </div>


    </div>
    );
}
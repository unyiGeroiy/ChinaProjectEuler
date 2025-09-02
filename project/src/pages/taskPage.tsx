import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { tasks } from '../data/tasks';
import type { Task } from '../data/tasks';

export default function TaskPage(){


  const navigate = useNavigate();
  const { id } = useParams<{id: string}>();
  const [task, setTask] = useState<Task | null>(null);
  const [inputText, setInputText] = useState<string>('');
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [isSubmittied, setIsSubmittied] = useState<boolean>(false);
  const [isDebil, setIsDebil] = useState<boolean>(false);


  useEffect(() => {
    const taskId = parseInt(id || '0');
    const foundTask = tasks.find(t => t.id === taskId);
    setTask(foundTask || null);

    setInputText('');
    setIsCorrect(false);
    setIsSubmittied(false);
    setIsDebil(false);

  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correct = inputText === task?.answer;
    setIsCorrect(correct);
    setIsSubmittied(true);
  }

  const handleDebil = () => {
    setIsDebil(true);
  }

  const handleNotDebil = () => {
    setIsDebil(false);
  }

  const handleNextTask = (taskID: number) => {
    let nextID = taskID + 1;

    if (nextID > 10){
      nextID = 1;
    }
    navigate(`/task/${nextID}`);
  }

  const handleBackTask = (taskID: number) => {
    let nextID = taskID - 1;

    if (nextID < 1){
      nextID = 10;
    }
    navigate(`/task/${nextID}`);
  }

  const handleBackHome = () => {
    navigate(`/`);
  }



  if (!task){
    return (
      <h1 className="text-2xl font-bold text-amber-800 mb-4">Ошибка поиска страницы</h1>
      );
  }
  

  return(
    <>
    <div className='flex justify-start font-bold'>
      <h1 className="text-amber-800 cursor-pointer" onClick={() => handleBackHome()}>Project Euler</h1>
    </div>
    <div className="flex justify-end gap-8">
      <button className="bg-gray-800  text-white w-20 rounded-md" onClick={() => handleBackTask(task.id)}> Back</button> 
      <button className="bg-gray-800  text-white w-20 rounded-md" onClick={() => handleNextTask(task.id)}> Next</button>
    </div>
    <p className="text-amber-800 flex justify-start text-4xl">{task.title}</p>
    <p className="text-black flex justify-start text-xl">Task {task.id}</p>

    <table className="min-h-15 mt-3">
      <thead>
        <tr>
          <th className="shadow-xl/20 border-1 border-black text-black min-w-280 font-medium text-left p-4 leading-6">{task.text}</th>
        </tr>
      </thead>
    </table>
    <div className="mt-10">
      <div className="shadow-xl/20 border-1 border-black min-w-120 max-w-md mx-auto p-2 flex justify-center">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="answer" className="text-lg font-medium text-black mb-2">Answer: </label>
          <input type="text" id="answer" value={inputText} onChange={(e) => setInputText(e.target.value)} className="text-black border-1 border-gray-500" disabled={isSubmittied && isCorrect} />
        </div>
          <button type="submit" className="border-1 border-black w-20 h-6 mt-2 text-black bg-gray-200 hover:bg-gray-400" disabled={(!inputText || (id && isCorrect)) as boolean}>Check</button>
      </form>
      </div>
      {isSubmittied && (
        <div className="mt-4 text-center">
          {isCorrect ? (<p className="text-black font-bold">Your answer is right: {task.answer}</p>): (<p className="text-black font-bold">Your answer is not right</p>)}
        </div>
      )

      }
    </div>
    <div className="flex justify-start mt-8">
      {isDebil ? (<><p className="text-blue-500 hover:text-orange-400 duration-150 font-bold underline cursor-pointer absolute" onClick={() => handleNotDebil()}>Close description</p>
      <div className="mt-10 bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 ab">
        <pre className="text-left whitespace-pre-wrap font-mono text-sm">{task.description}</pre>
        <pre className="text-left whitespace-pre-wrap font-mono text-sm">and the right answer is: {task.answer}</pre>
      </div>
      </>)
      :(<p className="text-blue-500 hover:text-orange-400  duration-150 font-bold underline cursor-pointer" onClick={() => handleDebil()}>Show description</p>)}
    </div>
    </>
    

  );

}

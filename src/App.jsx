import { useState } from 'react'
import { evaluate, re } from 'mathjs'
import reactLogo from '../public/react.svg'

function App() {
    // valor inicial
    const [input, setInput] = useState('')

    // concatena la operacion 
    const handleClick = (value) => {
        setInput(input + value)
    }

    // resetea la operacion
    const handleClear = () => {
        setInput('')
    }

    // realiza la operacion
    const handleResult = () => {
        try {
            const result = evaluate(input)
            setInput(result.toString())
        } catch {
            setInput('Sintax Error')
        }
    }

    // elimina el último carácter del estado input
    const handleBackspace = () => {
        setInput(input.slice(0, -1))
    }

    return (
        <>
        <div className='calculadora'> 
            <h1> Calculadora React, Haz tus calculos!</h1>
            <div>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
    
            {/* Pantalla */}
            <div className="display">{input || '0'}</div>

            {/* Botones */}
            <div className="buttons">
                <div>
                    <button onClick={() => handleClick('(')}>(</button>
                    <button onClick={() => handleClick(')')}>)</button>
                    <button onClick={() => handleClick('%')}>%</button>
                    <button onClick={handleBackspace}>CE</button>
                </div>
                <div>
                    <button onClick={() => handleClick('7')}>7</button>
                    <button onClick={() => handleClick('8')}>8</button>
                    <button onClick={() => handleClick('9')}>9</button>
                    <button onClick={() => handleClick('/')}>/</button>
                </div>
                <div>
                    <button onClick={() => handleClick('4')}>4</button>
                    <button onClick={() => handleClick('5')}>5</button>
                    <button onClick={() => handleClick('6')}>6</button>
                    <button onClick={() => handleClick('*')}>*</button>
                </div>
                <div>
                    <button onClick={() => handleClick('1')}>1</button>
                    <button onClick={() => handleClick('2')}>2</button>
                    <button onClick={() => handleClick('3')}>3</button>
                    <button onClick={() => handleClick('-')}>-</button>
                </div>
                <div>
                    <button onClick={() => handleClick('0')}>0</button>
                    <button onClick={() => handleClick('.')}>.</button>
                    <button onClick={handleResult}>=</button>
                    <button onClick={() => handleClick('+')}>+</button>
                </div>
                <div>
                <button className="clear" onClick={handleClear}>C</button>
                </div>
            </div>
        </div>

        <div className='thanks'>
            <h3> Gracias por usar! ❤ </h3>
        </div>

        <footer> 
            <div> 
                <a href='https://www.linkedin.com/in/valderrama-cesar/' target='blank'> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" /><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" /></svg>
                </a>
                <a href='https://github.com/CesValde' target='blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
                </a>
                <a href="https://www.google.com/search?sxsrf=AE3TifNLnlSNwPgVMbRvisvtRsLSJUaPJw:1761682180607&udm=2&q=coming+soon" target='blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-briefcase"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" /><path d="M12 12l0 .01" /><path d="M3 13a20 20 0 0 0 18 0" /></svg>
                </a>
            </div>
        </footer>
        <p className='footer-copy'> © 2025 César Valderrama </p>
        </>
    )
}

export default App
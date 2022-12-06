// import { useEffect, useState } from 'react';
// import './MainContentStyle.scss';
// import { UserContent } from './User/UserContent';

// export function MainContent() {
//     const [pageNumber, setpageNumber] = useState();

//     const generateButtons = (CountItens) => {
//         const MAX_BUTTONS = 10;

//         let buttons = [];
//         let count = 0;
//         let countButtons = 0;

//         //make an offset of 5 buttons
//         if (pageNumber > 5) {
//             count = pageNumber - 5;
//         }

//         while (countButtons < MAX_BUTTONS) {
//             buttons.push(count);
//             count++;
//             countButtons++;
//         }

//         console.log(buttons)

//         return buttons;

//     }

//     const [filterUser, setFilterUser] = useState({
//         north: false,
//         northeast: false,
//         midwest: false,
//         southeast: false,
//         south: false
//     })

    
//     const [filterUserType, setFilterUserType] = useState({
//         special: false,
//         normal: false,
//         laborious: false
//     })


//     const toggleCheckbox = (item) => {
//         const obj = { ...filterUser }
//         obj[item] = !obj[item]
//         setFilterUser(obj)
//     }

//     const toggleCheckboxType = (item) => {
//         const obj = { ...filterUserType }
//         obj[item] = !obj[item]
//         setFilterUserType(obj)
//     }


//     return (
//         <main >
//             <form className='formFilter'>
//                 <div className='filterContent'>
//                     <fieldset >
//                         <legend>Filtrar por usuário:</legend>

//                         <div>
//                             <input
//                                 type="checkbox"
//                                 id="special" name="special"
//                                 onChange={() => toggleCheckboxType("special")}
//                             />
//                             <label for="special">Especial</label>
//                         </div>

//                         <div>
//                             <input
//                                 type="checkbox"
//                                 id="normal"
//                                 name="normal"
//                                 onChange={() => toggleCheckboxType("normal")}
//                             />
//                             <label for="normal">Normal</label>
//                         </div>

//                         <div>
//                             <input
//                                 type="checkbox"
//                                 id="laborious"
//                                 name="laborious"
//                                 onChange={() => toggleCheckboxType("laborious")}
//                             />
//                             <label for="laborious">Trabalhoso</label>
//                         </div>

//                     </fieldset>
//                 </div>

//                 <div className='filterContent'>
//                     <fieldset>
//                         <legend>Filtrar por região:</legend>

//                         <div>
//                             <input
//                                 type="checkbox"
//                                 id="north"
//                                 name="north"
//                                 onChange={() => toggleCheckbox("north")}
//                             />
//                             <label for="north">Norte</label>
//                         </div>

//                         <div>
//                             <input
//                                 type="checkbox"
//                                 id="northeast"
//                                 name="northeast"
//                                 onChange={() => toggleCheckbox("northeast")}
//                             />
//                             <label for="northeast">Nordeste</label>
//                         </div>

//                         <div>
//                             <input
//                                 type="checkbox"
//                                 id="midwest"
//                                 name="midwest"
//                                 onChange={() => toggleCheckbox("midwest")}
//                             />
//                             <label for="midwest">Centro-Oeste</label>
//                         </div>

//                         <div>
//                             <input
//                                 type="checkbox"
//                                 id="southeast"
//                                 name="southeast"
//                                 onChange={() => toggleCheckbox("southeast")}
//                             />
//                             <label for="southeast">Sudeste</label>
//                         </div>

//                         <div>
//                             <input
//                                 type="checkbox"
//                                 id="south"
//                                 name="south"
//                                 onChange={() => toggleCheckbox("south")}
//                             />
//                             <label for="south">Sul</label>
//                         </div>

//                     </fieldset>
//                 </div>
//             </form>
//             <UserContent filterUsers={filterUser} filterUserType={filterUserType} pageNumber={pageNumber} generateButtons={generateButtons} />
//             <div className='pageSelector'>
//                 <ul>
//                     <button onClick={(event) => setpageNumber(event.currentTarget.textContent)}>1</button>
//                     <button onClick={(event) => setpageNumber(event.currentTarget.textContent)}>2</button>
//                     <button onClick={(event) => setpageNumber(event.currentTarget.textContent)}>3</button>
//                     <button onClick={(event) => setpageNumber(event.currentTarget.textContent)}>4</button>
//                     <button onClick={(event) => setpageNumber(event.currentTarget.textContent)}>5</button>
//                 </ul>
//             </div>
//         </main>
//     )
// }




import { useState } from 'react';
import './MainContentStyle.scss';
import { UserContent } from './User/UserContent';

export function MainContent() {
    const [pageNumber, setpageNumber] = useState();
    const [buttonsCount, setbuttonsCount] = useState();

    const generateButtons = (CountItens) => {
        const MAX_BUTTONS = 10;

        let buttons = [];
        let count = 0;
        let countButtons = 0;

        if (pageNumber > 5) {
            count = pageNumber - 5;
        }

        while (countButtons < MAX_BUTTONS) {
            if (count > CountItens) {
                break;
            }

            buttons.push(count);
            count++;
            countButtons++;

        }


        return buttons;
    }

    const [filterUser, setFilterUser] = useState({
        north: false,
        northeast: false,
        midwest: false,
        southeast: false,
        south: false
    })

    
    const [filterUserType, setFilterUserType] = useState({
        special: false,
        normal: false,
        laborious: false
    })


    const toggleCheckbox = (item) => {
        const obj = { ...filterUser }
        obj[item] = !obj[item]
        setFilterUser(obj)
    }

    const toggleCheckboxType = (item) => {
        const obj = { ...filterUserType }
        obj[item] = !obj[item]
        setFilterUserType(obj)
    }


    return (
        <main >
            <form className='formFilter'>
                <div className='filterContent'>
                    <fieldset >
                        <legend>Filtrar por usuário:</legend>

                        <div>
                            <input
                                type="checkbox"
                                id="special" name="special"
                                onChange={() => toggleCheckboxType("special")}
                            />
                            <label for="special">Especial</label>
                        </div>

                        <div>
                            <input
                                type="checkbox"
                                id="normal"
                                name="normal"
                                onChange={() => toggleCheckboxType("normal")}
                            />
                            <label for="normal">Normal</label>
                        </div>

                        <div>
                            <input
                                type="checkbox"
                                id="laborious"
                                name="laborious"
                                onChange={() => toggleCheckboxType("laborious")}
                            />
                            <label for="laborious">Trabalhoso</label>
                        </div>

                    </fieldset>
                </div>

                <div className='filterContent'>
                    <fieldset>
                        <legend>Filtrar por região:</legend>

                        <div>
                            <input
                                type="checkbox"
                                id="north"
                                name="north"
                                onChange={() => toggleCheckbox("north")}
                            />
                            <label for="north">Norte</label>
                        </div>

                        <div>
                            <input
                                type="checkbox"
                                id="northeast"
                                name="northeast"
                                onChange={() => toggleCheckbox("northeast")}
                            />
                            <label for="northeast">Nordeste</label>
                        </div>

                        <div>
                            <input
                                type="checkbox"
                                id="midwest"
                                name="midwest"
                                onChange={() => toggleCheckbox("midwest")}
                            />
                            <label for="midwest">Centro-Oeste</label>
                        </div>

                        <div>
                            <input
                                type="checkbox"
                                id="southeast"
                                name="southeast"
                                onChange={() => toggleCheckbox("southeast")}
                            />
                            <label for="southeast">Sudeste</label>
                        </div>

                        <div>
                            <input
                                type="checkbox"
                                id="south"
                                name="south"
                                onChange={() => toggleCheckbox("south")}
                            />
                            <label for="south">Sul</label>
                        </div>

                    </fieldset>
                </div>
            </form>
            <UserContent filterUsers={filterUser} filterUserType={filterUserType} pageNumber={pageNumber} setbuttonsCount={generateButtons} />
            <div className='pageSelector'>
                <ul>

                    {generateButtons().map((item) => {
                        return (
                            <li>
                                <button onClick={() => setpageNumber(item)}>{item}</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </main>
    )
}
import { useEffect, useState } from 'react';
import './MainContentStyle.scss';
import { UserContent } from './User/UserContent';

export function MainContent() {
    const [filterUser, setFilterUser] = useState({
        especial: false,
        normal: false,
        trabalhoso: false,
        norte: false,
        nordeste: false,
        centroOeste: false,
        sudeste: false,
        sul: false
    })

    const toggleCheckbox = (item) => {
        const obj = { ...filterUser }
        obj[item] = !obj[item]
        setFilterUser(obj)
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
                                id="especial" name="especial"
                                onChange={() => toggleCheckbox("especial")}
                            />
                            <label for="especial">Especial</label>
                        </div>

                        <div>
                            <input
                                type="checkbox"
                                id="normal"
                                name="normal"
                                onChange={() => toggleCheckbox("normal")}
                            />
                            <label for="normal">Normal</label>
                        </div>

                        <div>
                            <input
                                type="checkbox"
                                id="trabalhoso"
                                name="trabalhoso"
                                onChange={() => toggleCheckbox("trabalhoso")}
                            />
                            <label for="trabalhoso">Trabalhoso</label>
                        </div>

                    </fieldset>
                </div>

                <div className='filterContent'>
                    <fieldset>
                        <legend>Filtrar por região:</legend>

                        <div>
                            <input
                                type="checkbox"
                                id="norte"
                                name="norte"
                                onChange={() => toggleCheckbox("norte")}
                            />
                            <label for="norte">Norte</label>
                        </div>

                        <div>
                            <input
                                type="checkbox"
                                id="nordeste"
                                name="nordeste"
                                onChange={() => toggleCheckbox("nordeste")}
                            />
                            <label for="nordeste">Nordeste</label>
                        </div>

                        <div>
                            <input
                                type="checkbox"
                                id="centro-oeste"
                                name="centro-oeste"
                                onChange={() => toggleCheckbox("centroOeste")}
                            />
                            <label for="centroOeste">Centro-Oeste</label>
                        </div>

                        <div>
                            <input
                                type="checkbox"
                                id="sudeste"
                                name="sudeste"
                                onChange={() => toggleCheckbox("sudeste")}
                            />
                            <label for="sudeste">Sudeste</label>
                        </div>

                        <div>
                            <input
                                type="checkbox"
                                id="sul"
                                name="sul"
                                onChange={() => toggleCheckbox("sul")}
                            />
                            <label for="sul">Sul</label>
                        </div>

                    </fieldset>
                </div>
            </form>
            <UserContent filterUsers={filterUser} />
            <div className='pageSelector'>
                <ul>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                </ul>
            </div>
        </main>
    )
}
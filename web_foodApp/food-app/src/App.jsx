import React, { useEffect } from 'react';
import { CreateContainer, Header, MainContainer } from './components';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import { useStateValue } from './context/StateProvider';
import { getAllFoodItems } from './utils/firebaseFuntions';
import { actionTypes } from './context/reducer';

function App() {
    const [{ foodItems }, dispatch] = useStateValue();

    const fetchData = async () => {
        await getAllFoodItems().then((data) => {
            dispatch({
                type: actionTypes.SET_FOOD_ITEMS,
                foodItems: data,
            });
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <AnimatePresence exitBeforeEnter>
            <div className='flex flex-col w-screen h-auto bg-primary'>
                <Header />

                <main className='md:mt-20 mt-14 md:px-16 px-4 py-4 w-full'>
                    <Routes>
                        <Route path='/*' element={<MainContainer />} />
                        <Route
                            path='/createitem'
                            element={<CreateContainer />}
                        />
                    </Routes>
                </main>
            </div>
        </AnimatePresence>
    );
}

export default App;

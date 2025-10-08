

import { createContext, useContext, useEffect, useState } from 'react';

const CREATED_AT = 'CREATED_AT';
const RATING_AVERAGE = 'RATING_AVERAGE';
const ASCENDING = 'ASC';
const DESCENDING = 'DESC';


const SortRepositoriesContext = createContext();



const getHighestOrLowest = (direction) => {
    if(direction === DESCENDING) {
        return 'Highest'
    }
    return 'Lowest'
}

const getHighestOrLowestRatedText = (direction) => {
    return `${getHighestOrLowest(direction)} rated repositories`
}

export const getSortRepositoryOptions = () => {
    const latestRepositoryOption = {
        newSortCriteria: CREATED_AT,
        text: 'Latest repositories'
    }
    const directionalOptions = [DESCENDING, ASCENDING].map((direction) => {
        return {
            newSortCriteria: RATING_AVERAGE,
            newDirection: direction,
            text: getHighestOrLowestRatedText(direction)
        }
    })
    return [latestRepositoryOption, ...directionalOptions]
}

const SortRepositoresProvider = (props) => {

    const [sortCriteria, setSortCriteria] = useState(CREATED_AT);
    const [direction, setDirection] = useState(DESCENDING);
    const [variables, setVariables] = useState();

    useEffect(() => {
        const newVariables = {
                orderBy: sortCriteria,
                orderDirection: direction
            }
        if(sortCriteria === CREATED_AT) {
            newVariables.text = 'Latest repositories';
            delete newVariables.orderDirection
        }
        else {
            newVariables.text = getHighestOrLowestRatedText(direction);
        }
        setVariables(newVariables)
    }, [sortCriteria, direction]);

    const value = {
        variables,
        setSortCriteria,
        setDirection
    };

    return (
        <SortRepositoriesContext.Provider value={value}>
            {props.children}
        </SortRepositoriesContext.Provider>
    );
}

export const useSortRepositories = () => {
    return useContext(SortRepositoriesContext);
}

export default SortRepositoresProvider;
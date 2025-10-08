import { useDebouncedCallback } from 'use-debounce';
import { createContext, useContext, useEffect, useState } from 'react';

const RepositorySearchProviderContext = createContext();

const DEBOUNCED_DELAY = 250

export const RepositorySearchProvider = (props) => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const updateSearchKeyWord = () => {
        setSearchKeyword(searchQuery)
    }
    const debounceAndUpdateSearchKeyword = useDebouncedCallback(updateSearchKeyWord, DEBOUNCED_DELAY);

    useEffect(() => {
        debounceAndUpdateSearchKeyword();
    }, [searchQuery])

    const value = {
        searchQuery,
        setSearchQuery,
        searchKeyword,
        setSearchKeyword
    }

    return (
        <RepositorySearchProviderContext value={value}>
            {props.children}
        </RepositorySearchProviderContext>
    );
};

export const useRepositorySearchContext = () => {
    return useContext(RepositorySearchProviderContext)
};

export default RepositorySearchProviderContext;
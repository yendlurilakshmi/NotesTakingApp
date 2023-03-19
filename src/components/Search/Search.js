import React from 'react';
import { TbSearch } from 'react-icons/tb';
import './search.css'

const Search = ({ searchNote }) => {
	return (
		<div className='search-container'>
			<TbSearch className='search' />
			<input onChange={(e) =>
					searchNote(e.target.value)
				}
				type='text'
				placeholder='type to search'
			/>
		</div>
	);
};

export default Search;
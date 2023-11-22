import React from 'react';

const ItemSearch = ({placeholder}: {placeholder:string}) => {
    return (
        <div className="flex items-center bg-white border-gray-50 ">
            <span className="bg-[#0F2C64] p-4 rounded-l-full">
                <img src="/assets/search.png" />
            </span>
            <input
                className="outline-none pl-3 border-gray-50"
                type="text"
                placeholder={placeholder}
            />
        </div>
    );
}

export default ItemSearch;

import React, { useRef } from 'react';

function ANS12() {
    const inputRef = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();
        
        const text = inputRef.current.value;
        alert(text);
        inputRef.current.value = '';
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Enter Some Text: </label>
                <input
                    type="text"
                    ref={inputRef}
                    placeholder="Type something here..."
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default ANS12;

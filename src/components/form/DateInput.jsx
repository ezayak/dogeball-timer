import React, { useState } from "react";

const DateInput = (props) => {
    const {label, value, onChange} = props;
    const [curValue, setValue] = useState(value);


    const onChangeDate = (e) => {
        setValue(e.target.value);
        onChange(e.target.value);
    };

    return (
        <div className="input-field">
            <input type="date" placeholder={label} id="date_input" value={curValue} onChange={onChangeDate}/>
            <label htmlFor="date_input">{label}</label>
        </div>
    );
}

export { DateInput };
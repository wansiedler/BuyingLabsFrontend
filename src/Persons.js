import React from "react";
import {
    TextField,
} from "@material-ui/core";

const Persons = ({adults, setPersons, options=[1,2,3,4,5],className}) => {
    return (
        <>
            <TextField
                select
                label="Guests"
                value={adults}
                onChange={(event, ) => {
                    setPersons(event.target.value);
                }}
                SelectProps={{
                    native: true,
                }}
                helperText="Please select adults"
                style={{ flex: 1}}
                className={className}
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </TextField>
        </>
    );
};

export {Persons};

import { useState } from 'react';

const Dropdown = () => {
    const [inputValue, setInputValue] = useState('');
    const [selectedOption, setSelectedOption] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleOptionSelect = (e) => {
        setSelectedOption(e.target.value);
        setInputValue(''); // Clear input value after selecting an option
    };

    return (
        <div className='-mt-8 ml-48  '>
            <input
                className=' lg:w-80 pl-3 h-12 rounded-2xl sm:w-60 md:w-60'
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Select position"
                list="options" // Bind the input to the datalist
            />

            {/* Datalist containing dropdown options */}
            <datalist id="options" onClick={handleOptionSelect}>
                <option value="Cleaner/Messenger" />
                <option value="Security/Guard" />
                <option value="Data Encoder, Video technician" />
                <option value="Cashier I" />
                <option value="Accounting Clerk/Acct" />
                <option value="Driver" />
                <option value="Cso I" />
                <option value="Purchaser" />
                <option value="Cashier II" />
                <option value="Executive Secretary" />
                <option value="CSO II" />
                <option value="Branch Accountant/Accountant II" />
                <option value="Sub-branch manager" />
                <option value="Auditor II" />
                <option value="Attorney" />
                <option value="Accountant (HO)" />
                <option value="Administration & general service" />
                <option value="CSO III" />
                <option value="Branch manager I" />
                <option value="Senior officers" />
                <option value="Unity Head" />
                <option value="Branch manager" />
                <option value="Senior Accountant" />
                <option value="Service heads" />
                <option value="Branch manager III" />
                <option value="Senior operation officer" />
                <option value="Department manager" />
                <option value="Operations manager" />
                <option value="Chief executive officer" />
            </datalist>

            {selectedOption && <p>Selected Option: {selectedOption}</p>}
        </div>
    );
};

export default Dropdown;

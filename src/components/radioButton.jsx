import React from "react";

const RadioButton = ({ title, options, value, onChange }) => {
  const handleChange = (event) => {
    onChange && onChange(event.target.value);
  };

  return (
    <div className="col-12 row">
      <div>
        <h4 className="text-dark float-start m-1 p-1 fs-5">{title}</h4>
      </div>
      {options.map((option) => (
        <label key={option.value} className="text-dark p-1 fs-5 ms-3">
          <input
            type="radio"
            className="text-dark fs-5 m-1"
            name={title}
            value={option.value}
            checked={value === option.value}
            onChange={handleChange}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default RadioButton;

// const RadioButton = ({ title, options, value, onChange }) => {
//   const [selectedValue, setSelectedValue] = useState(value || options[0].value);
//   const handleChange = (event) => {
//     setSelectedValue(event.target.value);
//     onChange && onChange(event.target.value);
//   };

//   return (
//     <div className="col-12 row">
//       <div>
//         <h4 className="text-dark float-start m-1 p-1 fs-5">{title}</h4>
//       </div>
//       {options.map((option) => (
//         <label key={option.value} className="text-dark p-1 fs-5 ms-3">
//           <input
//             type="radio"
//             className="text-dark fs-5 m-1"
//             name={title}
//             value={option.value}
//             checked={selectedValue === option.value}
//             onChange={handleChange}
//           />
//           {option.label}
//         </label>
//       ))}
//     </div>
//   );
// };

// export default RadioButton;

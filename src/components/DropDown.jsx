// const DropDown = ({ options, onChange, label, name, value, type }) => {
//   return (
//     <div className="col-12 row">
//       <div>
//         <label className="text-dark float-start mt-1 p-1 fs-5" htmlFor={name}>
//           {label}
//         </label>
//       </div>
//       <div>
//         <select
//           type={type}
//           className="form-control mb-3"
//           id={name}
//           name={name}
//           value={value} // Bind the value prop to the select element
//           onChange={(e) => onChange(e.target.value)}
//         >
//           <option value="">Select {label}</option> {/* Default option */}
//           {options.map((option) => (
//             <option key={option.id} value={option.id}>
//               {option.name || option.gradeName}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// };

// export default DropDown;
const DropDown = ({ options, onChange, label, name, type }) => {
  return (
    <div className="col-12 row">
      <div>
        <label className="text-dark float-start mt-1 p-1 fs-5" htmlFor="option">
          {label}
        </label>
      </div>
      <div>
        <select
          type={type}
          className="form-control mb-3"
          id="option"
          name={name}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="">Select {label}</option>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name || option.gradeName}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DropDown;

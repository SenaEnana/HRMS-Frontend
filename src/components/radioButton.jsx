function RadioButton({ type, name, checked, label, onChange, span ,value}) {
    return (
      <div className="col-12 row">
        <div>
          <label className="text-dark float-start mt-1 p-1 fs-5">{label}</label>
        </div>
        <div>
          <input
            type={type}
            name={name}
            value={value}
            checked={checked}
            onChange={onChange}
            className="form-control text-dark fw-lighter fs-6 m-1"
            // className="form-radio h-5 w-5 text-indigo-600"
          />
          <span className="ml-2 text-gray-700">{span}</span>
        </div>
      </div>
    );
  }
  
  export default RadioButton;
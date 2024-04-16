import  { useState } from 'react';
import FormComponent from './FormComponent';
import TableComponent from './TableComponent';

const emptable = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [formData, setFormData] = useState([]);
  
  const handleSubmit = (data) => {
    // Add the submitted data to the formData array
    setFormData([...formData, data]);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <h1 className="text-2xl font-bold text-center mb-4">Form and Table Example</h1>
      <div className="flex justify-center space-x-8">
        <FormComponent onSubmit={handleSubmit} />
        <TableComponent data={formData} />
      </div>
    </div>
  );
};

export default emptable;

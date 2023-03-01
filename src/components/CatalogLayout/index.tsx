import Forms from "@/constants/forms";
import React from "react";
import { Form, useParams } from "react-router-dom";

const CatalogLayout: React.FC = (): JSX.Element => {
  const { selectedOption } = useParams();

  return (
    <div className="grid w-[90%] mx-auto my-4">
      <p className="text-center font-bold text-lg">{type}</p>
      <Form
        formFields={
          Forms.get(selectedOption!) || (Forms.get("login") as FormField[])
        }
        formErrors={formErrors}
        handleChange={handleChange}
        formData={formValues}
        onSubmit={handleSubmit}
      />
      <div className="w-full flex justify-end">
        <div className="my-4 w-32 grid place-items-end">
          <Button onClick={handleSubmit} type="primary">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CatalogLayout;

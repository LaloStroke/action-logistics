import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Form from "../../components/Form";
import { useSetLocationMutation } from "../../store/services/userService";
import useForm from "../../hooks/useForm/useForm";
import Button from "../../components/Button";
import { useSelector } from "react-redux";
import { loginValidations } from "@/constants/validations/login";
import Forms from "../../constants/forms";
import { useParams } from "react-router";

const Catalogs: React.FC = (): React.ReactElement => {
  const [setLocation, { isError, isSuccess, isLoading }] =
    useSetLocationMutation();
  const [editable, setEditable] = useState<string>("");
  const { selectedOption, type, catalog } = useParams();
  const { handleChange, handleSubmit, formValues, formErrors } = useForm(
    {
      ID: "",
      State: "",
      Address: "",
      Location: "",
      LocationName: "",
      City: "",
      ZipCode: "",
      Assets: [],
      TotalAssets: ""
    },
    loginValidations,
    setLocation
  );

  useEffect((): void => {
    if (type === "edit" && catalog) {
      setEditable(catalog);
    }
  }, [type]);

  return (
    <Layout>
      <div className="grid w-[90%] mx-auto my-4">
        <p className="text-center font-bold text-lg">{selectedOption}</p>
        <Form
          formFields={
            Forms.get(editable as Forms) || (Forms.get("login") as FormField[])
          }
          formErrors={formErrors}
          handleChange={handleChange}
          formData={
            type === "edit"
              ? {
                  Address: "1234 Main St",
                  City: "Anytown",
                  ID: "1234",
                  State: "CA",
                  Assets: "All Assets",
                  Location: "All Locations",
                  LocationName: "All Locations",
                  TotalAssets: 1234,
                  ZipCode: 12345
                }
              : formValues
          }
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
    </Layout>
  );
};

export default Catalogs;

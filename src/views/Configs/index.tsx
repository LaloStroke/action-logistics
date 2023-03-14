import React, { useEffect } from 'react';
import Form from '../../components/Form';
import { useSetLocationMutation } from '../../store/services/userService';
import useForm from '../../hooks/useForm/useForm';
import Button from '../../components/Button';
import { loginValidations } from '@/constants/validations/login';
import Forms from '../../constants/forms';
import { useNavigate, useParams } from 'react-router';

const Configs: React.FC = (): React.ReactElement => {
  const [setLocation, { isError, isSuccess, isLoading }] = useSetLocationMutation();
  const { catalogType, type, selectedConfigOption } = useParams();
  const { handleChange, handleSubmit, formValues, formErrors } = useForm(
    {
      ID: '',
      State: '',
      Address: '',
      Location: '',
      LocationName: '',
      City: '',
      ZipCode: '',
      Assets: [],
      TotalAssets: '',
    },
    loginValidations,
    setLocation,
  );
  const navigate = useNavigate();

  useEffect((): void => {
    if (isError) {
      navigate(`/Configs/${catalogType}`);
    }
  }, [isError]);

  return (
    <div className="grid w-[90%] mx-auto my-4 place-items-center">
      <p className="text-center font-bold text-lg">
        {type} {catalogType}: {selectedConfigOption}
      </p>
      <Form
        formFields={Forms.get(catalogType as Forms) || (Forms.get('login') as FormField[])}
        formErrors={formErrors}
        handleChange={handleChange}
        formData={
          type === 'edit'
            ? {
                Address: '1234 Main St',
                City: 'Anytown',
                ID: '1234',
                State: 'CA',
                Assets: 'All Assets',
                Location: 'All Locations',
                LocationName: 'All Locations',
                TotalAssets: 1234,
                ZipCode: 12345,
              }
            : formValues
        }
        onSubmit={handleSubmit}
      />
      <div className="w-full flex justify-center">
        <div className="my-4 w-full grid place-items-center max-w-2xl">
          <Button onClick={handleSubmit} type="primary">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Configs;

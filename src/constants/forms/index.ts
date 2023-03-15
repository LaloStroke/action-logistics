import { LocationFields } from './location';
import { loginFields } from './login';
import { UsersFields } from './users';
import { ManufacturerFields } from './manufacturer';
import { EquipmentTypeFields } from './equipmentfields';
import { EquipmentSubType } from './equipmentSubType';
import { InsuranceCompanies } from './insuranceCompanies';
import { InsuranceTypes } from './insuranceTypes';
import { LocationsConfigFields } from './Config/locations';
import { AssetsFields } from './Config/assets';

export const Forms: Map<Forms, FormField[]> = new Map([
  ['login', loginFields],
  ['Locations', LocationFields],
  ['Users', UsersFields],
  ['Manufacturers', ManufacturerFields],
  ['Equipment-type', EquipmentTypeFields],
  ['Equipment-subType', EquipmentSubType],
  ['Insurances-companies', InsuranceCompanies],
  ['Insurance-types', InsuranceTypes],
]);

export const FormsConfig: Map<FormsConfig, FormField[]> = new Map([
  ['login', loginFields],
  ['Locations', LocationsConfigFields],
  ['Assets', AssetsFields],
]);

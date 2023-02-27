import { LocationFields } from "./location";
import { loginFields } from "./login";
import { UsersFields } from "./users";
import { ManufacturerFields } from "./manufacturer";
import { EquipmentTypeFields } from "./equipmentfields";
import { EquipmentSubType } from "./equipmentSubType";
import { InsuranceCompanies } from "./insuranceCompanies";
import { InsuranceTypes } from "./insuranceTypes";

const Forms: Map<Forms, FormField[]> = new Map([
  ["login", loginFields],
  ["Locations", LocationFields],
  ["Users", UsersFields],
  ["Manufacturers", ManufacturerFields],
  ["Equipment Type", EquipmentTypeFields],
  ["Equipment SubType", EquipmentSubType],
  ["Insurances companies", InsuranceCompanies],
  ["Insurance types", InsuranceTypes]
]);

export default Forms;

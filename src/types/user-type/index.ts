import { rolesType } from "@/app/sign-up/page";

export interface Iprofile {
  profile: Profile;
  _id: string;
  email: string;
  role: string;
  isActive: boolean;
  createdAt: string;
  verified: boolean;
  updatedAt: string;
  access: AccessT[];
}

export interface Profile {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phoneNumber: string;
  licenseNumber: string;
  allergies: string[];
}

export interface AccessT {
  name: string;
  path: string;
  icon: string;
}

// export interface RegisterPayload {
//   email: string
//   password: string
//   confirmPassword: string
//   role: rolesType
//   profile: RegisterProfilePayload
// }

// export interface RegisterProfilePayload  {
//   firstName: string
//   lastName: string
//   phoneNumber: string
//   dateOfBirth: string
//   address: string
//   role: rolesType
//   licenseNumber: string
// }

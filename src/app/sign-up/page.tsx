"use client";

import React, { useState } from "react";
import { PhoneInput } from "@/components/phoneInput";
import { useRegister } from "@/service/mutations/auth-mutations";
import {
  HeartPulseIcon,
  ChevronLeft,
  ChevronRight,
  User,
  Briefcase,
  ShieldCheck,
} from "lucide-react";
import "react-phone-number-input/style.css";
import { useRouter } from "next/navigation";

// Constants
const AccountType = [
  "patient",
  "doctor",
  "nurse",
  "social_worker",
  "lab_scientist",
];
export type rolesType =
  | "doctor"
  | "nurse"
  | "social_worker"
  | "lab_scientist"
  | "patient";

const doctorSpecialties = [
  "General Medicine",
  "Neurology",
  "Psychiatry",
  "Pediatrics",
  "Cardiology",
  "Dermatology",
  "Orthopedics",
  "Gynecology",
  "Other",
];

const outreachRegions = [
  "Northern Region",
  "Southern Region",
  "Eastern Region",
  "Western Region",
  "Central Region",
];

// Type for the form data
interface FormData {
  // Personal Information
  fullName: string;
  email: string;
  dateOfBirth: string;
  phoneNumber: string;
  nationality: string;
  idType: string;
  address: string;
  // Authentication
  password: string;
  confirmPassword: string;
  // Patient-specific fields
  guardianFullName: string;
  guardianPhone: string;
  relationShip: string;
  // Professional Information (General)
  license: string;
  // Doctor-specific fields
  specialty: string;
  graduationYear: string;
  affiliatedHospital: string;
  hospitalID: string;
  professionalBodyReg: string;
  // Nurse-specific fields
  trainingInstitution: string;
  nurseGraduationYear: string;
  assignedRegion: string;
  supervisor: string;
  // Lab Scientist fields
  accreditationBody: string;
  facilityName: string;
  yearsOfExperience: string;
  // Social Worker fields
  programAffiliation: string;
  homeRegion: string;
  languagesSpoken: string;
  fieldWorkExperience: string;
}

// Default form data
const defaultFormData: FormData = {
  fullName: "",
  email: "",
  dateOfBirth: "",
  phoneNumber: "",
  nationality: "",
  idType: "",
  address: "",
  password: "",
  confirmPassword: "",
  guardianFullName: "",
  guardianPhone: "",
  relationShip: "",
  license: "",
  specialty: "",
  graduationYear: "",
  affiliatedHospital: "",
  hospitalID: "",
  professionalBodyReg: "",
  trainingInstitution: "",
  nurseGraduationYear: "",
  assignedRegion: "",
  supervisor: "",
  accreditationBody: "",
  facilityName: "",
  yearsOfExperience: "",
  programAffiliation: "",
  homeRegion: "",
  languagesSpoken: "",
  fieldWorkExperience: "",
};



// Step 1: Personal Information
const PersonalInfoStep = ({
  formData,
  handleChange,
  handlePhoneNumberChange,
}: {
  formData: FormData;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  handlePhoneNumberChange: (value: string) => void;
}) => (
  <div className="space-y-4">
    <div className="flex items-center mb-4">
      <User className="mr-2 text-indigo-600" size={20} />
      <h3 className="text-lg font-medium text-gray-800">Personal Information</h3>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="text-sm font-medium text-gray-700 mb-1 block">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="John Doe"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-indigo-600"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>
      {/* Email */}
      <div>
        <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1 block">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="you@example.com"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-indigo-600"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      {/* Date of Birth */}
      <div>
        <label htmlFor="dateOfBirth" className="text-sm font-medium text-gray-700 mb-1 block">
          Date of Birth <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-indigo-600"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
        />
      </div>
      {/* Phone Number */}
      <div>
        <label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700 mb-1 block">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <PhoneInput
          value={formData.phoneNumber}
          onChange={handlePhoneNumberChange}
          defaultCountry="NG"
          className="my-custom-class"
        />
      </div>
      {/* Nationality */}
      <div>
        <label htmlFor="nationality" className="text-sm font-medium text-gray-700 mb-1 block">
          Nationality <span className="text-red-500">*</span>
        </label>
        <select
          id="nationality"
          name="nationality"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          value={formData.nationality}
          onChange={handleChange}
          required
        >
          <option value="">Select nationality</option>
          <option value="Nigeria">Nigeria</option>
          <option value="Ghana">Ghana</option>
          <option value="Kenya">Kenya</option>
          <option value="USA">USA</option>
          <option value="Brazil">Brazil</option>
        </select>
      </div>
      {/* ID Type */}
      <div>
        <label htmlFor="idType" className="text-sm font-medium text-gray-700 mb-1 block">
          ID Type <span className="text-red-500">*</span>
        </label>
        <select
          id="idType"
          name="idType"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          value={formData.idType}
          onChange={handleChange}
          required
        >
          <option value="">Select ID type</option>
          <option value="passport">Passport</option>
          <option value="nationalID">National ID</option>
          <option value="driverLicense">Driver's License</option>
          <option value="voterID">Voter's ID</option>
        </select>
      </div>
      {/* Address */}
      <div className="md:col-span-2">
        <label htmlFor="address" className="text-sm font-medium text-gray-700 mb-1 block">
          Address
        </label>
        <textarea
          id="address"
          name="address"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-indigo-600"
          rows={2}
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter your residential address"
        />
      </div>
    </div>
  </div>
);

// Step 2: Account & Security Information
const AccountSecurityStep = ({
  formData,
  handleChange,
  selectedAccount,
  setSelectedAccount,
}: {
  formData: FormData;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  selectedAccount: rolesType;
  setSelectedAccount: (role: rolesType) => void;
}) => (
  <div className="space-y-4">
    <div className="flex items-center mb-4">
      <ShieldCheck className="mr-2 text-indigo-600" size={20} />
      <h3 className="text-lg font-medium text-gray-800">Account & Security</h3>
    </div>
    <div className="grid grid-cols-1 gap-4">
      {/* Account Type */}
      <div>
        <label htmlFor="accountType" className="text-sm font-medium text-gray-700 mb-1 block">
          Account Type <span className="text-red-500">*</span>
        </label>
        <select
          id="accountType"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          onChange={(e) => setSelectedAccount(e.target.value as rolesType)}
          value={selectedAccount}
          required
        >
          {AccountType.map((account) => (
            <option key={account} value={account}>
              {account.replace("_", " ").charAt(0).toUpperCase() +
                account.replace("_", " ").slice(1)}
            </option>
          ))}
        </select>
      </div>
      {/* Password */}
      <div>
        <label htmlFor="password" className="text-sm font-medium text-gray-700 mb-1 block">
          Password <span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter password"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-indigo-600"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <p className="text-xs text-gray-500 mt-1">
          Password must be at least 8 characters and include a number
        </p>
      </div>
      {/* Confirm Password */}
      <div>
        <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700 mb-1 block">
          Confirm Password <span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Re-enter password"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-indigo-600"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  </div>
);

// Step 3: Role-Specific Fields
const RoleSpecificStep = ({
  formData,
  handleChange,
  selectedAccount,
}: {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  selectedAccount: rolesType;
}) => {
  if (selectedAccount === "patient") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="guardianFullName" className="text-sm font-medium text-gray-700 mb-1 block">
            Next of Kin <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="guardianFullName"
            name="guardianFullName"
            placeholder="Next of Kin Name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-indigo-600"
            value={formData.guardianFullName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="relationShip" className="text-sm font-medium text-gray-700 mb-1 block">
            Relationship <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="relationShip"
            name="relationShip"
            placeholder="Relationship"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-indigo-600"
            value={formData.relationShip}
            onChange={handleChange}
            required
          />
        </div>
        <div>
                <label
                  htmlFor="guardianPhone"
                  className="text-sm font-medium text-gray-700 mb-1 block"
                >
                  phone Number
                </label>
                <input
                  type="tel"
                  id="guardianPhone"
                  name="guardianPhone"
                  placeholder="+233 000 0000"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-indigo-600"
                  value={formData.guardianPhone}
                  onChange={handleChange}
                />
              </div>

      </div>
    );
  }

  // For non-patient accounts
  return (
    <div className="space-y-4">
      <div className="flex items-center mb-4">
        <Briefcase className="mr-2 text-indigo-600" size={20} />
        <h3 className="text-lg font-medium text-gray-800">Professional Information</h3>
      </div>
      {selectedAccount === "doctor" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="license" className="text-sm font-medium text-gray-700 mb-1 block">
              Medical License Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="license"
              name="license"
              placeholder="e.g. MD-123456"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-indigo-600"
              value={formData.license}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="specialty" className="text-sm font-medium text-gray-700 mb-1 block">
              Specialty <span className="text-red-500">*</span>
            </label>
            <select
              id="specialty"
              name="specialty"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-indigo-600"
              value={formData.specialty}
              onChange={handleChange}
              required
            >
              <option value="">Select specialty</option>
              {doctorSpecialties.map((specialty) => (
                <option key={specialty} value={specialty}>
                  {specialty}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="graduationYear" className="text-sm font-medium text-gray-700 mb-1 block">
              Year of Graduation
            </label>
            <input
              type="number"
              id="graduationYear"
              name="graduationYear"
              placeholder="e.g. 2018"
              min="1950"
              max={new Date().getFullYear()}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-indigo-600"
              value={formData.graduationYear}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="affiliatedHospital" className="text-sm font-medium text-gray-700 mb-1 block">
              Affiliated Hospital/Clinic
            </label>
            <input
              type="text"
              id="affiliatedHospital"
              name="affiliatedHospital"
              placeholder="Hospital name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-indigo-600"
              value={formData.affiliatedHospital}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="hospitalID" className="text-sm font-medium text-gray-700 mb-1 block">
              Hospital/Clinic ID Number
            </label>
            <input
              type="text"
              id="hospitalID"
              name="hospitalID"
              placeholder="Hospital ID"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-indigo-600"
              value={formData.hospitalID}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="professionalBodyReg" className="text-sm font-medium text-gray-700 mb-1 block">
              Professional Body Registration
            </label>
            <input
              type="text"
              id="professionalBodyReg"
              name="professionalBodyReg"
              placeholder="Registration number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-indigo-600"
              value={formData.professionalBodyReg}
              onChange={handleChange}
            />
          </div>
        </div>
      )}

      {selectedAccount === "nurse" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="license" className="text-sm font-medium text-gray-700 mb-1 block">
              Nursing License Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="license"
              name="license"
              placeholder="e.g. RN-123456"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-indigo-600"
              value={formData.license}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="trainingInstitution" className="text-sm font-medium text-gray-700 mb-1 block">
              Training Institution
            </label>
            <input
              type="text"
              id="trainingInstitution"
              name="trainingInstitution"
              placeholder="Institution name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-indigo-600"
              value={formData.trainingInstitution}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="nurseGraduationYear" className="text-sm font-medium text-gray-700 mb-1 block">
              Year of Graduation
            </label>
            <input
              type="number"
              id="nurseGraduationYear"
              name="nurseGraduationYear"
              placeholder="e.g. 2019"
              min="1950"
              max={new Date().getFullYear()}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-indigo-600"
              value={formData.nurseGraduationYear}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="assignedRegion" className="text-sm font-medium text-gray-700 mb-1 block">
              Assigned Outreach Region
            </label>
            <select
              id="assignedRegion"
              name="assignedRegion"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-indigo-600"
              value={formData.assignedRegion}
              onChange={handleChange}
            >
              <option value="">Select region</option>
              {outreachRegions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="supervisor" className="text-sm font-medium text-gray-700 mb-1 block">
              Supervisor
            </label>
            <input
              type="text"
              id="supervisor"
              name="supervisor"
              placeholder="Supervisor name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-indigo-600"
              value={formData.supervisor}
              onChange={handleChange}
            />
          </div>
        </div>
      )}

      {selectedAccount === "lab_scientist" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="license" className="text-sm font-medium text-gray-700 mb-1 block">
              Lab Technician ID / Certificate No. <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="license"
              name="license"
              placeholder="e.g. LT-123456"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-indigo-600"
              value={formData.license}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="accreditationBody" className="text-sm font-medium text-gray-700 mb-1 block">
              Accreditation Body
            </label>
            <input
              type="text"
              id="accreditationBody"
              name="accreditationBody"
              placeholder="Name of accreditation body"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-indigo-600"
              value={formData.accreditationBody}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="facilityName" className="text-sm font-medium text-gray-700 mb-1 block">
              Facility Name
            </label>
            <input
              type="text"
              id="facilityName"
              name="facilityName"
              placeholder="Facility name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-indigo-600"
              value={formData.facilityName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="yearsOfExperience" className="text-sm font-medium text-gray-700 mb-1 block">
              Years of Experience
            </label>
            <input
              type="number"
              id="yearsOfExperience"
              name="yearsOfExperience"
              placeholder="e.g. 5"
              min="0"
              max="50"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-indigo-600"
              value={formData.yearsOfExperience}
              onChange={handleChange}
            />
          </div>
        </div>
      )}

      {selectedAccount === "social_worker" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="license" className="text-sm font-medium text-gray-700 mb-1 block">
              CHW ID or Program Certificate
            </label>
            <input
              type="text"
              id="license"
              name="license"
              placeholder="e.g. CHW-123456"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-indigo-600"
              value={formData.license}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="programAffiliation" className="text-sm font-medium text-gray-700 mb-1 block">
              NGO or Government Program Affiliation
            </label>
            <input
              type="text"
              id="programAffiliation"
              name="programAffiliation"
              placeholder="Organization name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-indigo-600"
              value={formData.programAffiliation}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="homeRegion" className="text-sm font-medium text-gray-700 mb-1 block">
              Home Region or Outreach Area
            </label>
            <select
              id="homeRegion"
              name="homeRegion"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-indigo-600"
              value={formData.homeRegion}
              onChange={handleChange}
            >
              <option value="">Select region</option>
              {outreachRegions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="languagesSpoken" className="text-sm font-medium text-gray-700 mb-1 block">
              Languages Spoken
            </label>
            <input
              type="text"
              id="languagesSpoken"
              name="languagesSpoken"
              placeholder="e.g. English, Yoruba, Igbo"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-indigo-600"
              value={formData.languagesSpoken}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="fieldWorkExperience" className="text-sm font-medium text-gray-700 mb-1 block">
              Years of Experience in Field Work
            </label>
            <input
              type="number"
              id="fieldWorkExperience"
              name="fieldWorkExperience"
              placeholder="e.g. 3"
              min="0"
              max="50"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-indigo-600"
              value={formData.fieldWorkExperience}
              onChange={handleChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

// Step 4: Final Confirmation
const FinalConfirmationStep = () => (
  <div className="space-y-4">
    <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-100">
      <h3 className="text-lg font-medium text-indigo-700 mb-2">Almost Done!</h3>
      <p className="text-sm text-gray-700">
        Please review your information before submitting. By clicking &quot;Sign Up&quot; you agree to our Terms of Service and Privacy Policy.
      </p>
    </div>
  </div>
);

// Main SignUp component
const SignUp = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const router = useRouter();
  const [selectedAccount, setSelectedAccount] = useState<rolesType>("patient");

  const { mutateAsync: register, isPending } = useRegister();

  // Handlers for updating form state
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhoneNumberChange = (value: string) => {
    setFormData({ ...formData, phoneNumber: value });
  };

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password, confirmPassword, ...rest } = formData;
    const payload = {
      email,
      password,
      confirmPassword,
      role: selectedAccount,
      profile: {
        ...rest,
        firstName: formData.fullName.split(" ")[0],
        lastName: formData.fullName.split(" ")[1] || "",
        dateOfBirth: formData.dateOfBirth,
        phoneNumber: formData.phoneNumber,
        licenseNumber: formData.license,
        address: formData.address,
        role: selectedAccount,
        ...(selectedAccount === "doctor" && {
          specialty: formData.specialty,
          graduationYear: formData.graduationYear,
          affiliatedHospital: formData.affiliatedHospital,
          hospitalID: formData.hospitalID,
          professionalBodyReg: formData.professionalBodyReg,
        }),
        ...(selectedAccount === "nurse" && {
          trainingInstitution: formData.trainingInstitution,
          graduationYear: formData.nurseGraduationYear,
          assignedRegion: formData.assignedRegion,
          supervisor: formData.supervisor,
        }),
        ...(selectedAccount === "lab_scientist" && {
          accreditationBody: formData.accreditationBody,
          facilityName: formData.facilityName,
          yearsOfExperience: formData.yearsOfExperience,
        }),
        ...(selectedAccount === "social_worker" && {
          programAffiliation: formData.programAffiliation,
          homeRegion: formData.homeRegion,
          languagesSpoken: formData.languagesSpoken,
          fieldWorkExperience: formData.fieldWorkExperience,
        }),
      },
    };

    try {
      console.log("Submitting payload:", payload);
      const response = await register(payload);
      console.log("Registration response:", response);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // Calculate progress for progress bar
  const totalSteps = selectedAccount === "patient" ? 3 : 4;
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl p-6 shadow-xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-center mb-4">
          <HeartPulseIcon size={40} color="#4f46e5" />
        </div>
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-1">
          Create Your Account
        </h2>
        <p className="text-center text-gray-600 mb-6">
          {currentStep === 1 && "Let's start with some basic information"}
          {currentStep === 2 && "Tell us about your account preferences"}
          {currentStep === 3 &&
            (selectedAccount !== "patient" ? "Professional details" : "Almost done!")}
          {currentStep === 4 && "Almost done!"}
        </p>
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div
            className="bg-indigo-600 h-2 rounded-full"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

        <form onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <PersonalInfoStep
              formData={formData}
              handleChange={handleChange}
              handlePhoneNumberChange={handlePhoneNumberChange}
            />
          )}
          {currentStep === 2 && (
            <AccountSecurityStep
              formData={formData}
              handleChange={handleChange}
              selectedAccount={selectedAccount}
              setSelectedAccount={setSelectedAccount}
            />
          )}
          {currentStep === 3 && (
            <RoleSpecificStep
              formData={formData}
              handleChange={handleChange}
              selectedAccount={selectedAccount}
            />
          )}
          {((currentStep === 3 && selectedAccount === "patient") || currentStep === 4) && (
            <FinalConfirmationStep />
          )}

          <div className="flex gap-4 mt-6">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="flex items-center justify-center w-1/2 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
              >
                <ChevronLeft size={18} className="mr-1" /> Back
              </button>
            )}
            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={nextStep}
                className="flex items-center justify-center w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Next <ChevronRight size={18} className="ml-1" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isPending}
                className="flex items-center justify-center w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                {isPending ? "Creating Account..." : "Sign Up"}
              </button>
            )}
          </div>
        </form>
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <button onClick={() => router.push('/sign-in')} className="text-indigo-600 hover:underline">
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

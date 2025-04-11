"use client";

import { useState } from "react";
import { Calendar as CalendarIcon, Search } from "lucide-react";
import { Calendar } from "@/components/calender";
import Avatar from "@/components/avatar";
import { useAppSelector } from "@/store";

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Wilson",
    specialty: "Cardiologist",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    availability: "Mon-Fri",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurologist",
    avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    availability: "Mon-Thu",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Dr. Emily Brown",
    specialty: "Pediatrician",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    availability: "Tue-Sat",
    rating: 4.7,
  },
];

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "02:00 PM", "02:30 PM",
  "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"
];

export default function PatientBooking() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showBookingDialog, setShowBookingDialog] = useState(false);
  
  const user = useAppSelector((state) => state.auth.UserDetails) || null;

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    setShowBookingDialog(true);
  };

  const handleBookAppointment = () => {
    // Here you would typically make an API call to book the appointment
    console.log("Booking appointment:", {
      date: selectedDate,
      doctor: doctors.find(d => d.id === selectedDoctor),
      time: selectedTime
    });
    setShowBookingDialog(false);
    setSelectedDoctor(null);
    setSelectedTime(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Book an Appointment</h1>
            <p className="text-gray-500">Select a date to schedule your appointment</p>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              placeholder="Search doctors..."
              className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Calendar */}
          <div className="col-span-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={handleDateSelect}
                className="rounded-md"
              />
            </div>
          </div>

          {/* Available Doctors */}
          <div className="col-span-4">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Available Doctors</h2>
              <div className="space-y-4">
                {doctors.map((doctor) => (
                  <div key={doctor.id} className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <Avatar name={doctor.name} size={48} round />
                    <div className="flex-1">
                      <h3 className="font-medium">{doctor.name}</h3>
                      <p className="text-sm text-gray-500">{doctor.specialty}</p>
                      <div className="flex items-center mt-1">
                        <span className="text-sm text-gray-500">{doctor.availability}</span>
                        <span className="mx-2">•</span>
                        <span className="text-sm text-yellow-500">★ {doctor.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Booking Dialog */}
        {showBookingDialog && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full p-6">
              <h2 className="text-xl font-semibold mb-4">Book Appointment</h2>
              
              {/* Date Summary */}
              <div className="flex items-center space-x-2 text-gray-600 mb-6">
                <CalendarIcon className="w-5 h-5" />
                <span>{selectedDate?.toLocaleDateString()}</span>
              </div>

              {/* Doctor Selection */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Select Doctor</h3>
                <div className="grid grid-cols-2 gap-4">
                  {doctors.map((doctor) => (
                    <div
                      key={doctor.id}
                      onClick={() => setSelectedDoctor(doctor.id)}
                      className={`p-4 rounded-lg cursor-pointer border transition-colors ${
                        selectedDoctor === doctor.id
                          ? 'border-indigo-600 bg-indigo-50'
                          : 'border-gray-200 hover:border-indigo-600'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Avatar name={doctor.name} round size={35} />
                        <div>
                          <div className="font-medium">{doctor.name}</div>
                          <div className="text-sm text-gray-500">{doctor.specialty}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Select Time</h3>
                <div className="grid grid-cols-4 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-2 text-sm rounded-lg transition-colors ${
                        selectedTime === time
                          ? 'bg-indigo-600 text-white'
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowBookingDialog(false)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={handleBookAppointment}
                  disabled={!selectedDoctor || !selectedTime}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
import React from 'react';

const Doctor3 = () => {
  return (
    <div className="container mx-auto px-4 py-8 font-poppins">
      <h1 className="text-theme1 text-3xl font-bold leading-tight">
        DR. NASRIN ABUBAKAR B.Sc, MBBS, MROCG (LONDON UK)
      </h1>
      <div className="text-gray-600">
        <p>Consultant Gynaecologist & Obstetrician</p>
        <p>Gynecologic Laparoscopic Surgeon</p>
        <p>Obs and Gynae Ultrasound Specialist</p>
      </div>
      <div className="flex items-center mt-4">
        <p className="text-gray-600 mr-4">Appointment No:</p>
        <span className="text-theme1">0324-4574564</span>
      </div>
      <div className="flex items-center mt-2">
        <p className="text-gray-600 mr-4">What's App:</p>
        <span className="text-theme1">0300-8633408</span>
      </div>
    </div>
  );
};

export default Doctor3;

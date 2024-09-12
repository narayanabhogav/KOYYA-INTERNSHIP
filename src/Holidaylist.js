import React from "react";
import Head from './head.png';
import {Helmet} from 'react-helmet';

const holidays = [
  { id: 1, month: 'April', date: 9, day: 'Tuesday', occasion: 'Ugadi' },
  { id: 2, month: 'April', date: 10, day: 'Wednesday', occasion: 'Ramadan' },
  { id: 3, month: 'April', date: 14, day: 'Sunday', occasion: 'Ambedkar Jayanthi', light: true },
  { id: 4, month: 'May', date: 1, day: 'Wednesday', occasion: 'May Day' },
  { id: 5, month: 'August', date: 15, day: 'Thursday', occasion: 'Independence Day' },
  { id: 6, month: 'September', date: 7, day: 'Saturday', occasion: 'Vinayaka Chavithi', light: true },
  { id: 7, month: 'October', date: 12, day: 'Saturday', occasion: 'Mahanavami', light: true },
  { id: 8, month: 'October', date: 13, day: 'Sunday', occasion: 'Vijayadashami', light: true },
  { id: 9, month: 'October', date: 2, day: 'Wednesday', occasion: 'Gandhi Jayanthi' },
  { id: 10, month: 'October', date: 30, day: 'Wednesday', occasion: 'Naraka Chathurdhashi' },
  { id: 11, month: 'October', date: 31, day: 'Thursday', occasion: 'Deepavali' },
  { id: 12, month: 'November', date: 1, day: 'Friday', occasion: 'Kannada Rajyotsava' },
  { id: 13, month: 'December', date: 25, day: 'Wednesday', occasion: 'Christmas' },
  { id: 14, month: 'January', date: 1, day: 'Wednesday', occasion: 'New Year Day' },
  { id: 15, month: 'January', date: 13, day: 'Monday', occasion: 'Bhogi' },
  { id: 16, month: 'January', date: 14, day: 'Tuesday', occasion: 'Makarasankranthi' },
  { id: 17, month: 'January', date: 15, day: 'Wednesday', occasion: 'Kanuma' },
  { id: 18, month: 'January', date: 26, day: 'Sunday', occasion: 'Republic Day', light: true },
  { id: 19, month: 'February', date: 26, day: 'Wednesday', occasion: 'Mahashivarathri' },
  { id: 20, month: 'March', date: 30, day: 'Sunday', occasion: 'Ugadi', light: true },
  { id: 21, month: 'March', date: 31, day: 'Monday', occasion: 'Ramadan' },
];

function Holidaylist() {
  return (
    <div className="max-w-4xl mx-auto p-8 pb-32">
      <Helmet>
      <title>
        holidays-24-25
      </title>
      </Helmet>
      <img src={Head} alt="Koyya"/>
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Holiday List</h1>
        <p className="text-2xl font-bold">2024-25</p>
      </header>
  
      <table className="font-semibold min-w-full border-collapse border border-gray-300 w-full">
      <thead>
        <tr>
          <th className="border border-gray-300 p-2">#</th>
          <th className="border border-gray-300 p-2">Month</th>
          <th className="border border-gray-300 p-2">Date</th>
          <th className="border border-gray-300 p-2">Day</th>
          <th className="border border-gray-300 p-2">Occasion</th>
        </tr>
      </thead>
      <tbody>
        {holidays.map((holiday) => (
          <tr key={holiday.id} className={holiday.light ? 'font-light' : ''}>
            <td className="border border-gray-300 p-2">{holiday.id}</td>
            <td className="border border-gray-300 p-2">{holiday.month}</td>
            <td className="border border-gray-300 p-2">{holiday.date}</td>
            <td className="border border-gray-300 p-2">{holiday.day}</td>
            <td className="border border-gray-300 p-2">{holiday.occasion}</td>
          </tr>
        ))}
      </tbody>
    </table>

      <p className="font-bold text-xl mt-2 ">Total Number of Holidays: 21</p>
        <p className="font-bold text-xl ">Total Number of Effective Holidays: 15</p>
    </div>
  );
}

export default Holidaylist;

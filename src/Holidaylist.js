import React from "react";
import Head from './head.png';
import {Helmet} from 'react-helmet';
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
  
      <table className="font-semibold min-w-full border-collapse border border-gray-300">
        <thead>
          <tr >
            <th className="border border-gray-300 p-2">#</th>
            <th className="border border-gray-300 p-2">Month</th>
            <th className="border border-gray-300 p-2">Date</th>
            <th className="border border-gray-300 p-2">Day</th>
            <th className="border border-gray-300 p-2">Occasion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">1</td>
            <td className="border border-gray-300 p-2">April</td>
            <td className="border border-gray-300 p-2">9</td>
            <td className="border border-gray-300 p-2">Tuesday</td>
            <td className="border border-gray-300 p-2">Ugadi</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">2</td>
            <td className="border border-gray-300 p-2">April</td>
            <td className="border border-gray-300 p-2">10</td>
            <td className="border border-gray-300 p-2">Wednesday</td>
            <td className="border border-gray-300 p-2">Ramadan</td>
          </tr>
          <tr className="font-light">
            <td className="border border-gray-300 p-2">3</td>
            <td className="border border-gray-300 p-2">April</td>
            <td className="border border-gray-300 p-2">14</td>
            <td className="border border-gray-300 p-2">Sunday</td>
            <td className="border border-gray-300 p-2">Ambedkar Jayanthi</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">4</td>
            <td className="border border-gray-300 p-2">May</td>
            <td className="border border-gray-300 p-2">1</td>
            <td className="border border-gray-300 p-2">Wednesday</td>
            <td className="border border-gray-300 p-2">May Day</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">5</td>
            <td className="border border-gray-300 p-2">August</td>
            <td className="border border-gray-300 p-2">15</td>
            <td className="border border-gray-300 p-2">Thursday</td>
            <td className="border border-gray-300 p-2">Independence Day</td>
          </tr>
          <tr className="font-light">
            <td className="border border-gray-300 p-2">6</td>
            <td className="border border-gray-300 p-2">September</td>
            <td className="border border-gray-300 p-2">7</td>
            <td className="border border-gray-300 p-2">Saturday</td>
            <td className="border border-gray-300 p-2">Vinayaka Chavithi</td>
          </tr>
          <tr className="font-light">
            <td className="border border-gray-300 p-2">7</td>
            <td className="border border-gray-300 p-2">October</td>
            <td className="border border-gray-300 p-2">12</td>
            <td className="border border-gray-300 p-2">Saturday</td>
            <td className="border border-gray-300 p-2">Mahanavami</td>
          </tr>
          <tr className="font-light">
            <td className="border border-gray-300 p-2">8</td>
            <td className="border border-gray-300 p-2">October</td>
            <td className="border border-gray-300 p-2">13</td>
            <td className="border border-gray-300 p-2">Sunday</td>
            <td className="border border-gray-300 p-2">Vijayadashami</td>
          </tr>
           <tr>
            <td className="border border-gray-300 p-2">9</td>
            <td className="border border-gray-300 p-2">October</td>
            <td className="border border-gray-300 p-2">2</td>
            <td className="border border-gray-300 p-2">Wednesday</td>
            <td className="border border-gray-300 p-2">Gandhi Jayanthi</td>
          </tr> 
          <tr>
            <td className="border border-gray-300 p-2">10</td>
            <td className="border border-gray-300 p-2">October</td>
            <td className="border border-gray-300 p-2">30</td>
            <td className="border border-gray-300 p-2">Wednesday</td>
            <td className="border border-gray-300 p-2">Naraka Chathurdhashi</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">11</td>
            <td className="border border-gray-300 p-2">October</td>
            <td className="border border-gray-300 p-2">31</td>
            <td className="border border-gray-300 p-2">Thursday</td>
            <td className="border border-gray-300 p-2">Deepavali</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">12</td>
            <td className="border border-gray-300 p-2">November</td>
            <td className="border border-gray-300 p-2">1</td>
            <td className="border border-gray-300 p-2">Friday</td>
            <td className="border border-gray-300 p-2">Kannada Rajyotsava</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">13</td>
            <td className="border border-gray-300 p-2">December</td>
            <td className="border border-gray-300 p-2">25</td>
            <td className="border border-gray-300 p-2">Wednesday</td>
            <td className="border border-gray-300 p-2">Christmas</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">14</td>
            <td className="border border-gray-300 p-2">January</td>
            <td className="border border-gray-300 p-2">1</td>
            <td className="border border-gray-300 p-2">Wednesday</td>
            <td className="border border-gray-300 p-2">New Year Day</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">15</td>
            <td className="border border-gray-300 p-2">January</td>
            <td className="border border-gray-300 p-2">13</td>
            <td className="border border-gray-300 p-2">Monday</td>
            <td className="border border-gray-300 p-2">Bhogi</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">16</td>
            <td className="border border-gray-300 p-2">January</td>
            <td className="border border-gray-300 p-2">14</td>
            <td className="border border-gray-300 p-2">Tuesday</td>
            <td className="border border-gray-300 p-2">Makarasankranthi</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">17</td>
            <td className="border border-gray-300 p-2">January</td>
            <td className="border border-gray-300 p-2">15</td>
            <td className="border border-gray-300 p-2">Wednesday</td>
            <td className="border border-gray-300 p-2">Kanuma</td>
          </tr>
          <tr className="font-light">
            <td className="border border-gray-300 p-2">18</td>
            <td className="border border-gray-300 p-2">January</td>
            <td className="border border-gray-300 p-2">26</td>
            <td className="border border-gray-300 p-2">Sunday</td>
            <td className="border border-gray-300 p-2">Republic Day</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">19</td>
            <td className="border border-gray-300 p-2">February</td>
            <td className="border border-gray-300 p-2">26</td>
            <td className="border border-gray-300 p-2">Wednesday</td>
            <td className="border border-gray-300 p-2">Mahashivarathri</td>
          </tr>
          <tr className="font-light">
            <td className="border border-gray-300 p-2">20</td>
            <td className="border border-gray-300 p-2">March</td>
            <td className="border border-gray-300 p-2">30</td>
            <td className="border border-gray-300 p-2">Sunday</td>
            <td className="border border-gray-300 p-2">Ugadi</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">21</td>
            <td className="border border-gray-300 p-2">March</td>
            <td className="border border-gray-300 p-2">31</td>
            <td className="border border-gray-300 p-2">Monday</td>
            <td className="border border-gray-300 p-2">Ramadan</td>
          </tr>
        </tbody>
      </table>
      <p className="font-bold text-xl mt-2 ">Total Number of Holidays: 21</p>
        <p className="font-bold text-xl ">Total Number of Effective Holidays: 15</p>
    </div>
  );
}

export default Holidaylist;

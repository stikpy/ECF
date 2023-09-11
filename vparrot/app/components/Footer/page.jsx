'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Footer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/settings/openingsHours');
        setData(response.data);
        console.log('data', data);
      } catch (error) {
        console.error('Erreur de récupération des données:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <div>
        <span className="footer-title">Services</span>
        {data.map((item) => (
  <p key={item.id}>
    {item.day} : {item.timeSlots.slice(0, 2).join(' - ')} / {item.timeSlots.slice(2).join(' - ')}
  </p>
))}



        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
}

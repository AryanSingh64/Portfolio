import React, { useState, useCallback } from 'react';
import MusicMarquee from './MusicMarquee';
import FooterLinks from './FooterLinks';
import LocationContact from './LocationContact';
import ContactForm from './ContactForm';

const SeventhSection = () => {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSendMessage = useCallback(async () => {
    if (!message.trim()) return;

    setStatus('sending');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: 'New Message from Portfolio Website',
          message: message
        })
      });

      const json = await res.json();

      if (res.status === 200 && json.success) {
        setStatus('sent');
        setMessage('');
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  }, [message]);

  return (
    <div
      id="contact"
      className="w-full bg-[#08060d] text-[#FEF9EE] flex flex-col overflow-hidden font-poppins min-h-screen"
    >
      <MusicMarquee />

      <div className="w-full flex-1 flex flex-col xl:flex-row">
        {/* Left Column: Links */}
        <FooterLinks />

        {/* Right Column */}
        <div className="w-full xl:w-1/2 flex flex-col">
          <LocationContact />

          {/* Contact Form */}
          <ContactForm
            status={status}
            message={message}
            setMessage={setMessage}
            handleSendMessage={handleSendMessage}
          />
        </div>
      </div>

      {/* Back To Top Bar */}
      <div
        className="w-full border-t-[3px] border-[#333] flex items-center justify-between px-6 md:px-[6vw] py-5 bg-[#08060d] group cursor-pointer"
        onClick={() => {
          window.dispatchEvent(
            new CustomEvent('trigger-nav', {
              detail: { target: 'top-anchor', name: 'Top' }
            })
          );
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }, 600);
        }}
        role="button"
        tabIndex={0}
        aria-label="Scroll to top of page"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            window.dispatchEvent(
              new CustomEvent('trigger-nav', {
                detail: { target: 'top-anchor', name: 'Top' }
              })
            );
            setTimeout(() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 600);
          }
        }}
      >
        <span className="font-black uppercase tracking-[0.25em] text-xs md:text-sm text-[#a3a3a3] group-hover:text-[#FEF9EE] transition-colors duration-300">
          Back To Top
        </span>

        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-[#333] group-hover:border-[#1D63ED] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-45">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="text-[#a3a3a3] group-hover:text-[#1D63ED] transition-colors duration-300 -rotate-45"
            aria-hidden="true"
          >
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="5 12 12 5 19 12" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SeventhSection;

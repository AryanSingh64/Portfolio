import React from 'react';

const ContactForm = ({ status, message, setMessage, handleSendMessage }) => {
  const getStatusMessage = () => {
    switch (status) {
      case 'sending':
        return 'SENDING...';
      case 'sent':
        return 'RECEIVED.';
      case 'error':
        return 'ERROR - TRY AGAIN';
      default:
        return 'TYPE HERE...';
    }
  };

  const getButtonSymbol = () => {
    switch (status) {
      case 'sent':
        return '✓';
      case 'error':
        return '✗';
      default:
        return '↗';
    }
  };

  return (
    <div className="py-12 md:py-16 px-6 md:px-[6vw] flex flex-col justify-center bg-[#111111]">
      <p className="font-bold text-sm md:text-base uppercase tracking-[0.2em] mb-6 text-[#a3a3a3]">
        Drop A Message.
      </p>

      {/* Error/Status message above form */}
      {(status === 'error' || status === 'sent') && (
        <div
          className={`mb-4 p-3 border-l-4 text-sm font-bold ${
            status === 'error'
              ? 'border-red-500 text-red-400 bg-red-900/20'
              : 'border-green-500 text-green-400 bg-green-900/20'
          }`}
          role="alert"
          aria-live="polite"
        >
          {getStatusMessage()}
          {status === 'error' && (
            <span className="block text-xs mt-1 opacity-70">
              Please check your connection and try again.
            </span>
          )}
        </div>
      )}

      {/* Brutalist Input Block */}
      <div className="w-full flex items-end border-b-[4px] border-[#333] focus-within:border-[#1D63ED] transition-colors group pb-3">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder={getStatusMessage()}
          disabled={status === 'sending' || status === 'sent'}
          aria-label="Type your message"
          aria-describedby="message-help"
          className="w-full bg-transparent outline-none font-black uppercase text-[6vw] md:text-[3vw] tracking-tighter text-[#FEF9EE] placeholder:text-[#444] disabled:opacity-50"
        />
        <button
          onClick={handleSendMessage}
          disabled={status === 'sending' || status === 'sent' || !message.trim()}
          aria-label={
            status === 'sending'
              ? 'Sending message'
              : status === 'sent'
              ? 'Message sent'
              : 'Send message'
          }
          className="text-[#333] group-focus-within:text-[#1D63ED] opacity-100 hover:text-[#FEF9EE] transition-colors ml-4 text-[8vw] md:text-[4vw] outline-none disabled:opacity-20 leading-none shrink-0"
        >
          {getButtonSymbol()}
        </button>
      </div>

      <p id="message-help" className="sr-only">
        Press Enter or click the arrow button to send your message
      </p>
    </div>
  );
};

export default ContactForm;

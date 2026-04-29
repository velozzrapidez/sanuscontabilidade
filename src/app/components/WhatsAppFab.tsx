import { MessageSquareText } from "lucide-react";

export default function WhatsAppFab() {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50">
      <div className="relative group p-[3px] rounded-2xl overflow-hidden shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center cursor-pointer">
        
        {/* Spinning Animated Border */}
        <div 
          className="absolute inset-[-100%] animate-spin" 
          style={{ 
            background: 'conic-gradient(from 90deg, transparent 0%, transparent 60%, #25D366 80%, #00FF5E 100%)',
            animationDuration: '2.5s'
          }} 
        />
        
        <a
          href="https://wa.me/5564992934378?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20falar%20com%20um%20contador."
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center bg-gray-900 text-[#00FF5E] p-4 rounded-xl w-full h-full"
          aria-label="Contato Empresarial"
        >
          <MessageSquareText className="w-8 h-8" />

          {/* Tooltip on hover for desktop */}
          <div
            className="absolute right-full mr-4 bg-gray-900 text-white text-sm font-black tracking-wide uppercase px-5 py-3 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 hidden md:block whitespace-nowrap shadow-xl border border-gray-800"
            style={{ borderRadius: "8px" }}
          >
            <span className="text-[#00FF5E] mr-2">●</span> Contato Empresarial
            <div className="absolute top-1/2 right-[-6px] -translate-y-1/2 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-gray-900"></div>
          </div>
        </a>
      </div>
    </div>
  );
}

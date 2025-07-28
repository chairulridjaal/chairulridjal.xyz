import React from 'react';
import { Link } from 'react-router-dom';

interface FileLinkProps {
  to: string;
  fileName: string;
  className?: string;
}

const FileLink: React.FC<FileLinkProps> = ({ 
  to, 
  fileName, 
  className = "" 
}) => {
  return (
    <Link 
      to={to} 
      className={`text-white font-family-jakarta hover:text-terminal-green hover:shadow-terminal-green/30 hover:shadow-sm transition-all duration-300 px-6 py-3 rounded text-center text-base sm:text-lg lg:text-xl border border-transparent hover:border-terminal-green/50 bg-dark-gray/50 hover:bg-terminal-green/10 hover:scale-105 ${className}`}
    >
      [ {fileName} ]
    </Link>
  );
};

export default FileLink;

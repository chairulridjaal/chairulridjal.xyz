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
      className={`text-white font-family-jakarta hover:text-green-400 transition-colors px-6 py-3 rounded text-center text-base sm:text-lg lg:text-xl hover:border-green-400 ${className}`}
    >
      [ {fileName} ]
    </Link>
  );
};

export default FileLink;

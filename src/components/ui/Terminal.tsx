import React from 'react';

interface TerminalCommand {
  command: string;
  output: React.ReactNode;
}

interface TerminalProps {
  commands: TerminalCommand[];
  title?: string;
  className?: string;
}

const Terminal: React.FC<TerminalProps> = ({ 
  commands, 
  title = "bash", 
  className = "" 
}) => {
  return (
    <div className={`terminal-window w-full max-w-3xl hover:shadow-terminal-green/20 hover:border-terminal-green/50 transition-all duration-300 group ${className}`}>
      {/* Terminal header */}
      <div className="terminal-header">
        <div className="terminal-title group-hover:text-terminal-green/90 transition-colors">{title}</div>
        <button className="terminal-button group-hover:text-terminal-green/80 transition-colors">copy</button>
      </div>

      {/* Terminal content */}
      <div className="terminal-content">
        {/* Display commands */}
        {commands.map((cmd, index) => (
          <div key={index} className="terminal-line">
            <div className="terminal-prompt-lg sm:terminal-prompt-xl">
              <span className="terminal-dollar-lg sm:terminal-dollar-xl">$</span>
              <span className="terminal-command-lg sm:terminal-command-xl">{cmd.command}</span>
            </div>
            <div className="terminal-output-lg sm:terminal-output-xl">
              {cmd.output}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Terminal;

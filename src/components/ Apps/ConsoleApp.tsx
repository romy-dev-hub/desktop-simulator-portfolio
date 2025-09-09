'use client';

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { FaTerminal, FaQuestionCircle } from 'react-icons/fa';

export default function ConsoleApp() {
  const [commandHistory, setCommandHistory] = useState<Array<{command: string, output: string}>>([]);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const consoleEndRef = useRef<HTMLDivElement>(null);



  // Welcome message on first load
useEffect(() => {
  setCommandHistory([{
    command: '',
    output: `Welcome to xiao's console! 🚀

    Type '--menu' to see all available commands and learn more about me.

    This console is a fun way to explore my portfolio. Try different commands to discover my skills, projects, and interests!`
    }]);

}, []);

  // Focus input on mount and scroll to bottom
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (consoleEndRef.current) {
      consoleEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [commandHistory]);

  // Process commands
  const processCommand = (command: string) => {
    const cmd = command.trim().toLowerCase();
    let output = '';

    switch (cmd) {
      case '':
        output = '';
        break;
      case '--menu':
      case 'help':
        output = `
Available commands:
--menu, help         - Show this menu
--age                - Display my age
--education          - Show my educational background
--interests          - See my interests and hobbies
--skills             - List my technical skills
--projects           - See my projects
--contact            - Get my contact information
--clear              - Clear the console
        `;
        break;
      case '--age':
        output = "I&apos;m in my early 20s. Age is just a number, but my passion for coding is timeless! 🚀";
        break;
      case '--education':
        output = `
Educational Background:
- Currently studying Computer Science
- Focus on Software Engineering and AI
- Self-taught in many technologies through online resources
        `;
        break;
      case '--interests':
        output = `
My Interests:
- Full Stack Web Development
- Game Development with Unity
- Artificial Intelligence and Machine Learning
- Open Source Contributions
- Learning new programming languages and frameworks
        `;
        break;
      case '--skills':
        output = `
Technical Skills:
- Frontend: React, Next.js, Tailwind CSS, HTML5, CSS3, Three.js
- Backend: Node.js, Express, Python
- Databases: MongoDB, SQL, Oracle
- Game Dev: Unity, LÖVE, GameMaker
- Tools: Git, Canva, Vercel, Linux
- Languages: JavaScript, TypeScript, Python, Java, C, Lua, Assembly
        `;
        break;
      case '--projects':
        output = `
Featured Projects:
- NexBlog: A modern blog platform
- Community Website: Engagement platform with real-time chat
- 2048 Game: C implementation of the puzzle game
- Java-Oracle Database: Library management system

Type 'projects' in other apps to see more details!
        `;
        break;
      case '--contact':
        output = `
Contact Information:
- Email: roumaissa.hadibi.dev@gmail.com
- GitHub: github.com/romy-dev-hub
- Location: Algeria

Feel free to reach out! I&apos;m always open to new opportunities.
        `;
        break;
      case '--clear':
        setCommandHistory([]);
        return;
      default:
        output = `Command not found: ${command}. Type '--menu' to see available commands.`;
    }

    setCommandHistory(prev => [...prev, { command, output }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      processCommand(inputValue);
      setInputValue('');
    }
  };

  // Welcome message on first load
  useEffect(() => {
    processCommand('welcome');
  }, []);

  return (
    <div className="console-app">
      <div className="console-header">
        <div className="console-title">
          <FaTerminal />
          <span>Command Console</span>
        </div>
      </div>

      <div className="console-content">
        <div className="console-output">
          {commandHistory.map((item, index) => (
            <div key={index} className="command-block">
              {item.command && (
                <div className="command-input">
                  <span className="prompt">$</span> {item.command}
                </div>
              )}
              {item.output && (
                <div className="command-output">
                  {item.output.split('\n').map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div ref={consoleEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="console-input-form">
          <span className="prompt">$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="console-input"
            placeholder="Type a command..."
          />
        </form>

        <div className="console-help">
          <FaQuestionCircle />
          <span>Type &apos;--menu&apos; to see all available commands</span>
        </div>
      </div>
    </div>
  );
}
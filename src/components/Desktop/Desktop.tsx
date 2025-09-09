'use client';

import DesktopBackground from './DesktopBackground';
import AppIcon from '@/components/ Apps/AppIcon';
import { useWindowManager } from '@/hooks/useWindowManager';
import AboutApp from '@/components/ Apps/AboutApp';
import ContactApp from '@/components/ Apps/ContactApp';
import SkillsApp from '@/components/ Apps/SkillsApp';
import ProjectsApp from '@/components/ Apps/ProjectsApp';
import ConsoleApp from '@/components/ Apps/ConsoleApp'; 


export default function Desktop() {
  const { openWindow } = useWindowManager();

  const apps = [
    { 
      id: 'about', 
      title: 'About Me', 
      icon: '/icons/aboutapp.png',
      component: <AboutApp />,
      size: { width: 600, height: 500 } // Default size
    },
    { 
      id: 'contact', 
      title: 'Contact', 
      icon: '/icons/contactapp.png',
      component: <ContactApp />,
      size: { width: 800, height: 600 } // Wider size for contact
    },
    { 
      id: 'skills', 
      title: 'Skills', 
      icon: '/icons/skillsapp.png',
      component: <SkillsApp />,
      size: { width: 700, height: 600 } // Slightly wider for skills
    },
    { 
      id: 'projects', 
      title: 'Projects', 
      icon: '/icons/projectsapp.png',
      component: <ProjectsApp />,
      size: { width: 700, height: 500 } // Default size
    },
    {
      id: 'console',
      title: 'Console',
      icon: "/icons/consoleapp.png",
      component: <ConsoleApp />,
      size: { width: 700, height: 500 }
    },
  ];

  return (
    <div className="desktop">
      <DesktopBackground />
      <div className="app-grid">
        {apps.map(app => (
          <AppIcon
            key={app.id}
            icon={app.icon}
            name={app.title}
            onClick={() => openWindow(app.id, app.title, app.component, app.size)}
          />
        ))}
      </div>
    </div>
  );
}
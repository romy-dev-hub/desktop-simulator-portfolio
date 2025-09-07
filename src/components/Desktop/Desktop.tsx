'use client';

import DesktopBackground from './DesktopBackground';
import AppIcon from '@/components/ Apps/AppIcon';
import { FaUser, FaEnvelope, FaCode, FaFolderOpen } from 'react-icons/fa';
import { useWindowManager } from '@/hooks/useWindowManager';
import AboutApp from '@/components/ Apps/AboutApp';
import ContactApp from '@/components/ Apps/ContactApp';
import SkillsApp from '@/components/ Apps/SkillsApp';
import ProjectsApp from '@/components/ Apps/ProjectsApp';

export default function Desktop() {
  const { openWindow } = useWindowManager();

  const apps = [
    { 
      id: 'about', 
      title: 'About Me', 
      icon: '/icons/aboutapp.png', // Path to your icon
      component: <AboutApp /> 
    },
    { 
      id: 'contact', 
      title: 'Contact', 
      icon: '/icons/contactapp.png', // Path to your icon
      component: <ContactApp /> 
    },
    { 
      id: 'skills', 
      title: 'Skills', 
      icon: '/icons/skillsapp.png', // Path to your icon
      component: <SkillsApp /> 
    },
    { 
      id: 'projects', 
      title: 'Projects', 
      icon: '/icons/projectsapp.png', // Path to your icon
      component: <ProjectsApp /> 
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
            onClick={() => openWindow(app.id, app.title, app.component)}
          />
        ))}
      </div>
    </div>
  );
}
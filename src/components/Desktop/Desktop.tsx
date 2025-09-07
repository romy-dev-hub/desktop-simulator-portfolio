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
    { id: 'about', title: 'About Me', icon: <FaUser size={32} />, component: <AboutApp /> },
    { id: 'contact', title: 'Contact', icon: <FaEnvelope size={32} />, component: <ContactApp /> },
    { id: 'skills', title: 'Skills', icon: <FaCode size={32} />, component: <SkillsApp /> },
    { id: 'projects', title: 'Projects', icon: <FaFolderOpen size={32} />, component: <ProjectsApp /> },
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
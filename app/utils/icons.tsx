import { ReactNode } from 'react';
import { FaReact, FaSass } from 'react-icons/fa6';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiStyledcomponents } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

interface iconItem {
  key: string;
  component: ReactNode;
}

const iconsData: iconItem[] = [
  { key: 'react', component: <FaReact /> },
  { key: 'styled components', component: <SiStyledcomponents /> },
  { key: 'sass', component: <FaSass /> },
  { key: 'nextjs', component: <TbBrandNextjs /> },
  { key: 'javascript', component: <IoLogoJavascript /> },
];

export const iconsList: Map<string, ReactNode> = new Map(
  iconsData.map((item) => [item.key, item.component])
);
'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
  AppBar,
  AppBarSection,
  AppBarSpacer,
  Drawer,
  DrawerContent,
  DrawerSelectEvent,
} from '@progress/kendo-react-layout';
import { menuIcon } from '@progress/kendo-svg-icons';
import { Button } from '@progress/kendo-react-buttons';

import { HugeiconsIcon } from '@hugeicons/react';
import { SearchIcon } from '@hugeicons/core-free-icons';

interface DrawerMenuItem {
  text: string;
  route: string;
  icon?: string;
}

const items: DrawerMenuItem[] = [
  { text: 'Welcome', route: '/home' },
  { text: 'Placements', route: '/jobs' },
  { text: 'Goals', route: '/goals' },
  { text: 'My Projects', route: '/projects' },
  { text: 'Thank-You', route: '/thanks' }

];

export default function NavOverlay({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const [expanded, setExpanded] = React.useState(false);

  // Toggle drawer state
  const handleToggleDrawer = () => {
    setExpanded((prev) => !prev);
  };

  const handleSelect = (e: DrawerSelectEvent) => {
    const targetRoute = e.itemTarget.props.route;
    if (targetRoute) {
      router.push(targetRoute);
    }
  };

  const drawerItems = items.map((item) => ({
    ...item,
    selected: item.route === pathname,
  }));

  return (
    <div className="layout-container">
      {/* Top Application Bar */}
      <AppBar themeColor="primary">
        <AppBarSection>
          <Button
            type="button"
            fillMode="flat"
            svgIcon={menuIcon}
            onClick={handleToggleDrawer}
          />
        </AppBarSection>

        <AppBarSpacer style={{ width: 4 }} />

        <AppBarSection>
          <h1 className="title">KaiLaunch</h1>
        </AppBarSection>

        <AppBarSpacer style={{ width: 32 }} />

        {/* <AppBarSection>
          <ul>
            <li onClick={() => router.push('/home')}>
              <span>Home</span>
            </li>
            <li onClick={() => router.push('/goals')}>
              <span>Goals</span>
            </li>
          </ul>
        </AppBarSection> */}

        <AppBarSpacer />


      </AppBar>

      {/* Main Drawer Navigation */}
      <Drawer
        expanded={expanded}
        position="start"
        mode="push"
        items={drawerItems}
        onSelect={handleSelect}
      >
        <DrawerContent>
          <div className="main-content">
            {children}
          </div>
        </DrawerContent>
      </Drawer>

    </div>
  );
}
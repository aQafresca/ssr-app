'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';

import { SearchBar } from '@/shared/ui/search-bar';

import { ThemeSwitcher } from '@/features/theme-switcher/ui';
import { NavLinks, UserMenu } from '@/widgets/header/ui';
import { MobileMenu } from '@/widgets/header/ui';
import { NavActions } from '@/widgets/header/ui';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = () => {
    setMobileOpen((prev) => !prev);
  };

  const isAuth = true;

  const logout = () => {
    console.log('logout');
  };

  const handleSearchSubmit = () => {
    console.log('handleSubmit');
  };

  return (
    <header className="flex items-center w-full h-[80px] bg-primary text-white dark:bg-chart-5">
      <div className="container flex items-center justify-between mx-auto p-4">
        <div className="flex items-center gap-3 md:gap-6">
          <Link href="/" className="flex items-center justify-center">
            <Image
              src="icons/logo.svg"
              alt="Company Logo"
              width={40}
              height={40}
            />
          </Link>
          <SearchBar onSubmit={handleSearchSubmit} />
        </div>

        <div className="hidden md:flex items-center gap-2">
          <NavLinks />
          <div className="hidden lg:flex">
            <NavActions />
          </div>
          <div className="h-6 w-px bg-border mx-1" />
          <ThemeSwitcher />
          <UserMenu logout={logout} isAuth={isAuth} />
        </div>

        <button
          className="md:hidden p-2 rounded hover:bg-gray-200"
          aria-label="Open menu"
          onClick={toggleMenu}
        >
          <Menu />
        </button>

        <MobileMenu
          isAuth={isAuth}
          isOpen={mobileOpen}
          onClose={setMobileOpen}
          logout={logout}
        />
      </div>
    </header>
  );
}

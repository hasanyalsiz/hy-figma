import React from "react";
import "./navbar.css";
import { LuBellRing } from "react-icons/lu";

const Navbar = () => {
  return (
    <nav className="bg-white p-4">
      <div className="flex items-center justify-between">
        {/* Sol Taraf */}
        <div className="flex items-center"></div>

        {/* Sağ Taraf */}
        <div className="flex items-center">
          {/* Zil Iconu */}
          <span className="relative inline-block">
            <LuBellRing className="ringg" />

            {/* Kırmızı Nokta */}
            <span className="absolute top-0 right-0 bg-red-500 rounded-full w-2 h-2"></span>
          </span>

          {/* Profil Resmi */}
          <div className="ml-4">
            <div className="relative">
              <div className="w-8s h-8 overflow-hidden rounded-full">
                {/* Fake Profil Resmi */}
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcrwMvUgClCnBNDMfiBcopM8BgT74epXtu0g&usqp=CAU"
                  alt="Profil Resmi"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0 right-0 bg-green-500 rounded-full w-2 h-2"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

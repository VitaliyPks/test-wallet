import type { IMenuItem } from "../../types/menu";

import HomeIcon from "../../assets/icons/menu/home.svg?react";
import PositionIcon from "../../assets/icons/menu/positions.svg?react";
import RewardIcon from "../../assets/icons/menu/egg.svg?react";
import ProfileIcon from "../../assets/icons/menu/profile.svg?react";

export const menuItems: IMenuItem[] = [
  {
    path: "/",
    label: "Trade",
    icon: <HomeIcon />,
  },
  {
    path: "/positions",
    label: "Positions",
    icon: <PositionIcon />,
  },
  {
    path: "/rewards",
    label: "Rewards",
    icon: <RewardIcon />,
  },
  {
    path: "/profile",
    label: "Profile",
    icon: <ProfileIcon />,
  },
];

import {
  BriefcaseMedical,
  Calendar1,
  DollarSign,
  FlaskConical,
  FolderOpen,
  Gauge,
  HandHeart,
  MessageSquareText,
  Pill,
  ReceiptText,
  User,
  Users,
} from "lucide-react";
import React from "react";

type Props = {
  iconName: string;
  className: string;
};

const NavIcon = ({ iconName, className }: Props) => {
  switch (iconName) {
    case "dashboard":
      return <Gauge className={className} />;
    case "calendar":
      return <Calendar1 className={className} />;
    case "prescription":
      return <Pill className={className} />;
    case "lab":
      return <FlaskConical className={className} />;
    case "folder":
      return <FolderOpen className={className} />;
    case "message":
      return <MessageSquareText className={className} />;
    case "billing":
      return <DollarSign className={className} />;
    case "patients":
      return <User className={className} />;
    case "medication":
      return <Pill className={className} />;
    case "community":
      return <Users className={className} />;
    case "programs":
      return <HandHeart className={className} />;
    case "cases":
      return <BriefcaseMedical className={className} />;
    case "results":
      return <ReceiptText className={className} />;

    default:
      return <div />;
  }
};

export default NavIcon;

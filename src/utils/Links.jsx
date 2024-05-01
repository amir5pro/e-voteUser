import React from "react";
import { MdHowToVote } from "react-icons/md";
import { LiaVoteYeaSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa";
import { GrScorecard } from "react-icons/gr";
import { ImStatsDots } from "react-icons/im";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

const Links = [
  { text: "vote", path: ".", icon: <MdHowToVote /> },
  { text: "preliminary vote", path: "preVote", icon: <LiaVoteYeaSolid /> },
  { text: "candidates", path: "candidates", icon: <FaRegUser /> },
  { text: "results", path: "results", icon: <GrScorecard /> },
  { text: "stats", path: "stats", icon: <ImStatsDots /> },
  { text: "admin", path: "admin", icon: <MdOutlineAdminPanelSettings /> },
];

export default Links;

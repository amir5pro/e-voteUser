import React from "react";
import { FaVoteYea } from "react-icons/fa";
import { GiVote } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { ImStatsDots } from "react-icons/im";
import { MdAdminPanelSettings } from "react-icons/md";

const Links = [
  { text: "vote", path: ".", icon: <FaVoteYea /> },
  { text: "preliminary vote", path: "preVote", icon: <GiVote /> },
  { text: "candidates", path: "candidates", icon: <FaUser /> },
  { text: "results", path: "results", icon: <FaCheckCircle /> },
  { text: "stats", path: "stats", icon: <ImStatsDots /> },
  { text: "admin", path: "admin", icon: <MdAdminPanelSettings /> },
];

export default Links;

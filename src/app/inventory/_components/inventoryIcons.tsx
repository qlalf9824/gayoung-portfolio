import type { ComponentType, SVGProps } from "react";
import Atom from "@/lib/icons/atom.svg";
import Smartphone from "@/lib/icons/smartphone.svg";
import Code from "@/lib/icons/code.svg";
import Sparkles from "@/lib/icons/sparkles.svg";
import Layers from "@/lib/icons/layers.svg";
import LayoutTemplate from "@/lib/icons/layout-template.svg";
import RefreshCw from "@/lib/icons/refresh-cw.svg";
import Flame from "@/lib/icons/flame.svg";
import Play from "@/lib/icons/play.svg";
import GitBranch from "@/lib/icons/git-branch.svg";
import Rocket from "@/lib/icons/rocket.svg";
import Shield from "@/lib/icons/shield.svg";
import Activity from "@/lib/icons/activity.svg";
import BookOpen from "@/lib/icons/book-open.svg";
import Box from "@/lib/icons/box.svg";
import PenTool from "@/lib/icons/pen-tool.svg";

export const INVENTORY_ICONS: Record<
  string,
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  atom: Atom,
  smartphone: Smartphone,
  code: Code,
  sparkles: Sparkles,
  layers: Layers,
  "layout-template": LayoutTemplate,
  "refresh-cw": RefreshCw,
  flame: Flame,
  play: Play,
  "git-branch": GitBranch,
  rocket: Rocket,
  shield: Shield,
  activity: Activity,
  "book-open": BookOpen,
  box: Box,
  "pen-tool": PenTool,
};

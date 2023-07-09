import rockIcon from "/images/icon-rock.svg"
import paperIcon from "/images/icon-paper.svg"
import scissorsIcon from "/images/icon-scissors.svg"
import lizardIcon from "/images/icon-lizard.svg"
import spockIcon from "/images/icon-spock.svg"
export interface SelectionInfo {
  name: string;
  icon: string;
  className: string;
  position?: string
}

export const selections: SelectionInfo[] = [
  {
    name: "rock",
    icon: rockIcon,
    className:
      "bg-gradient-to-r from-RockG1 to-RockG2",
    position: "absolute -bottom-16 -right-5"
  },
  {
    name: "paper",
    icon: paperIcon,
    className: "bg-gradient-to-r from-PaperG1 to-PaperG2",
    position: "absolute -right-20 top-6"
  },
  {
    name: "scissors",
    icon: scissorsIcon,
    className: "bg-gradient-to-r from-ScissorsG1 to-ScissorsG2",
    position: "absolute -top-20 left-1/2 -translate-x-1/2"
  },
  {
    name: "lizard",
    icon: lizardIcon,
    className: "bg-gradient-to-r from-LizardG1 to-LizardG2",
    position: "absolute -bottom-16 -left-5"
  },
  {
    name: "spock",
    icon: spockIcon,
    className: "bg-gradient-to-r from-CyanG1 to-CyanG2",
    position: "absolute -left-20 top-6"
  },
];

import Svg, { Rect, Path } from "react-native-svg";

export default function Logo({
  size = 100,
  stroke = 5,
  theme = "light",
}: {
  size?: number;
  stroke?: number;
  theme?: "dark" | "light";
}) {
  return (
    <Svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <Rect
        width="100"
        height="100"
        rx="30"
        fill={theme === "light" ? "#000080" : "#f8f8ff"}
      />
      <Path
        d="M80 41L50 29L20 41L50 53L80 41V59V41Z"
        fill={theme !== "light" ? "#0a0a0a" : "#f8f8ff"}
      />
      <Path
        d="M80 41L50 29L20 41L50 53L80 41ZM80 41V59"
        stroke={theme !== "light" ? "#0a0a0a" : "#f8f8ff"}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M32 45.8V62C32 64.387 33.8964 66.6762 37.2721 68.364C40.6477 70.0518 45.2261 71 50 71C54.7739 71 59.3523 70.0518 62.7279 68.364C66.1036 66.6762 68 64.387 68 62V45.8"
        fill={theme !== "light" ? "#0a0a0a" : "#f8f8ff"}
      />
      <Path
        d="M32 45.8V62C32 64.387 33.8964 66.6762 37.2721 68.364C40.6477 70.0518 45.2261 71 50 71C54.7739 71 59.3523 70.0518 62.7279 68.364C66.1036 66.6762 68 64.387 68 62V45.8"
        stroke={theme !== "light" ? "#0a0a0a" : "#f8f8ff"}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

import Svg, { Rect, Path } from "react-native-svg";

export default function Logo({
  size = 100,
  stroke = 5,
}: {
  size?: number;
  stroke?: number;
}) {
  return (
    <Svg width="100" height="100" viewBox="0 0 100 100" fill="none">
      <Rect width="100" height="100" rx="30" fill="#000080" />
      <Path d="M80 41L50 29L20 41L50 53L80 41V59V41Z" fill="#F8F8FF" />
      <Path
        d="M80 41L50 29L20 41L50 53L80 41ZM80 41V59"
        stroke="#F8F8FF"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M32 45.8V62C32 64.387 33.8964 66.6762 37.2721 68.364C40.6477 70.0518 45.2261 71 50 71C54.7739 71 59.3523 70.0518 62.7279 68.364C66.1036 66.6762 68 64.387 68 62V45.8"
        fill="#F8F8FF"
      />
      <Path
        d="M32 45.8V62C32 64.387 33.8964 66.6762 37.2721 68.364C40.6477 70.0518 45.2261 71 50 71C54.7739 71 59.3523 70.0518 62.7279 68.364C66.1036 66.6762 68 64.387 68 62V45.8"
        stroke="#F8F8FF"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

import { TouchableOpacity } from "react-native";

const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
  switch (variant) {
    case "secondary":
      return "bg-gray-500";
    case "danger":
      return "bg-red-500";
    case "success":
      return "bg-green-500";
    case "outline":
      return "bg-transparent border-neutral-300 border-[0.5px]";
  }
};

const CustomButton = ({
  onPress,
  title,
  bgVariant = " primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  className,
  ...props
}) => (
  <TouchableOpacity
    onPress={onPress}
    className={`w-full rounded-full flex flex-row justify-center items-center shadow-md shadow-neutral-400/700 ${getBgVariantStyle(
      bgVariant
    )} ${className}`}
  >
    {IconLeft && <IconRight />}
    <Text>{title}</Text>
    {IconRight && <IconRight />}
  </TouchableOpacity>
);

export default CustomButton;

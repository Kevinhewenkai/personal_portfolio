"use client";

type IButton = {
  content: string;
  onPress: Function;
};

export default function Button({ content, onPress }: IButton) {
  return (
    <button
      type="button"
      className=" bg-gray-900 px-[16px] py-[6px] text-gray-50"
      onClick={() => {
        onPress();
      }}
    >
      {content}
    </button>
  );
}

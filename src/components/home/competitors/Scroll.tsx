import React, { useEffect } from "react";

interface Props {
  text: string;
}

const Scroll = (props: Props) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Make the div scroll slowly all the way to the bottom
    scrollRef.current?.scrollTo(0, 0);

    if (props.text) {
      const scrollInterval = setInterval(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollTop += 2;
          if (
            scrollRef.current.scrollTop + scrollRef.current.clientHeight >=
            scrollRef.current.scrollHeight
          ) {
            clearInterval(scrollInterval);
          }
        }
      }, 75);

      return () => {
        clearInterval(scrollInterval); // Clear the interval when the component unmounts
      };
    }
  }, [props.text]);

  return (
    <p
      style={{ wordWrap: "break-word" }}
      className="absolute pt-24 mt-8 overflow-scroll text-xs sm:pt-44 sm:text-md w-52 sm:w-72 2xl:w-80 top-1/2 md:left-24 max-h-24 md:max-h-28 2xl:max-h-48"
      ref={scrollRef}
    >
      {props.text}
    </p>
  );
};

export default Scroll;

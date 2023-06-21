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
      style={{ wordWrap: "break-word", paddingTop: "11rem" }}
      className="absolute mt-8 ml-8 overflow-scroll w-72 2xl:w-80 top-1/2 left-16 max-h-28 2xl:max-h-48"
      ref={scrollRef}
    >
      <br />
      {props.text}
    </p>
  );
};

export default Scroll;

import React, { useEffect } from "react";

interface Props {
  text: string;
}

const Scroll = (props: Props) => {
  const [scrollStep, setScrollStep] = React.useState(1);
  const scrollRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Make the div scroll slowly all the way to the bottom
    scrollRef.current?.scrollTo(0, 0);

    if (props.text) {
      const scrollInterval = setInterval(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollTop += 1;
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
      className="absolute w-56 overflow-scroll 2xl:w-60 top-72 left-16 max-h-28 2xl:max-h-32"
      ref={scrollRef}
    >
      <span className="hidden 2xl:inline 2xl:invisible ">
        -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      </span>
      <span className="invisible 2xl:hidden ">
        ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      </span>
      <span className=""></span>
      <br />
      {props.text}
    </p>
  );
};

export default Scroll;

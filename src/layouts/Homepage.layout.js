import React from "react";

const HomepageLayout =
  (Components) =>
  ({ ...props }) => {
    return (
      <>
        {/* commmon component or content thaat we have to render multiple pages 
            for e.g  navbar & footer would be common for most of the pages
        */}
        {/* <Navbar /> */}

        <div className="container mx-auto px-4 lg:px-20">
          <Components {...props} />
        </div>

        {/* <Footer/> */}
      </>
    );
  };

export default HomepageLayout;

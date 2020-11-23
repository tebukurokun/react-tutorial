import React from "react";
import PropTypes from "prop-types";

const LANGUAGES = ["JavaScript", "C++", "Ruby", "Java", "PHP", "Go"];

export const List = ({ title }) => {
  List.propTypes = {
    title: PropTypes.string,
  };

  return (
    <div>
      {LANGUAGES.map((lang, index) => {
        return <div key={index}>{lang}</div>;
      })}
    </div>
  );
};

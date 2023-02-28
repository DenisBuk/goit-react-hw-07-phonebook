import React from "react";
import css from "./Container.module.css";
import PropTypes from 'prop-types';

const Container = ({ children }) => (
    <div className={css.container}>{children}</div>
);

export default Container;

Container.propTypes = {
    children: PropTypes.node,
};
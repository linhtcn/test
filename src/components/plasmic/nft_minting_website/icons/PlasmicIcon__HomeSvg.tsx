// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HomeSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HomeSvgIcon(props: HomeSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9.157 20.771v-3.066c0-.78.636-1.414 1.424-1.42h2.886c.792 0 1.433.636 1.433 1.42v3.076c0 .662.534 1.204 1.203 1.219h1.924c1.918 0 3.473-1.54 3.473-3.438v0-8.724a2.44 2.44 0 00-.962-1.905l-6.58-5.248a3.18 3.18 0 00-3.945 0L3.462 7.943A2.42 2.42 0 002.5 9.847v8.715C2.5 20.46 4.055 22 5.973 22h1.924c.685 0 1.241-.55 1.241-1.229v0"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HomeSvgIcon;
/* prettier-ignore-end */

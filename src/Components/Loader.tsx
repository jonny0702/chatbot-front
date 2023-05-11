import { Html, useProgress } from "@react-three/drei";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const Loader = () => {
  const { progress, loaded, item, active } = useProgress();
  // console.log(loaded, item, active)
  return (
    <Html center>
      <div style={{ width: 150, height: 150 }}>
        <CircularProgressbar
          value={progress}
          text={`${progress}% Loaded`}
          styles={{
            path: {
              stroke: `rgba(88,39, 245, ${progress / 100})`,
              strokeLinecap: "round",
              transform: "rotate(0.25turn)",
              transformOrigin: "center center",
            },
            trail: {
              stroke: "#d6d6d6",
              strokeLinecap: "butt",
              transform: "rotate(0.25turn)",
              transformOrigin: "center center",
            },
            text: {
              fill: "#888888",
              fontSize: ".7rem",
              fontWeight: "200",
            },
            background: {
              fill: "#aa7ffa",
            },
          }}
        ></CircularProgressbar>
      </div>
    </Html>
  );
};

import { FunctionComponent } from "react";

interface BulletPointsProps {
  points: string[];
}

const BulletPoints: FunctionComponent<BulletPointsProps> = ({ points }) => (
  <div className="bullet-points">
    {points.map(function (point, index) {
      return (
        <p key={index} className="point">
          <span className="bullet-point"> &bull; </span>
          {point}
        </p>
      );
    })}
  </div>
);

export default BulletPoints;

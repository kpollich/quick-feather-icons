import { NextApiHandler } from "next";
import { icons } from "feather-icons";

const IconApiHandler: NextApiHandler = (req, res) => {
  const name = req.query.name as string;
  const color = req.query.color as string;

  if (!name || !color) {
    res.statusCode = 422;
    res.end("Bad request");
  }

  const svgBody = icons[name].toSvg({ color });

  res.setHeader("Content-Type", "image/svg+xml");
  res.end(svgBody);
};

export default IconApiHandler;

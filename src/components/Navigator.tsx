import Clement from "./Clement";
import RouterTest from "./RouterTest";

import { Routes, Route } from "react-router-dom";

export default function Navigator() {
  return (
    <Routes>
      <Route path="/" element={<Clement />} />
      <Route path="/test" element={<RouterTest />} />
    </Routes>
  );
}

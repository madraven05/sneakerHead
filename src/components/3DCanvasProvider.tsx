import React, { createContext, ReactNode, useContext, useState } from "react";

interface canvasContextProps {
  hoveredMeshName: string | null;
  setHoveredMeshName: React.Dispatch<React.SetStateAction<string | null>>;
  hoveredMeshColor: string | null;
  setHoveredMeshColor: React.Dispatch<React.SetStateAction<string | null>>;
  hoveredMeshString: string | null;
  setHoveredMeshString: React.Dispatch<React.SetStateAction<string | null>>;
}

const CanvasContext = createContext<canvasContextProps | undefined>(undefined);

const CanvasProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [hoveredMeshName, setHoveredMeshName] = useState<string | null>(null);
  const [hoveredMeshString, setHoveredMeshString] = useState<string | null>(
    null
  );
  const [hoveredMeshColor, setHoveredMeshColor] = useState<string | null>(null);

  return (
    <CanvasContext.Provider
      value={{
        hoveredMeshName,
        setHoveredMeshName,
        hoveredMeshString,
        setHoveredMeshString,
        hoveredMeshColor,
        setHoveredMeshColor,
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
};

export { CanvasContext, CanvasProvider };

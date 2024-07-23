import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { OrbitControls } from "@react-three/drei";
import React, {
  MouseEvent,
  ReactNode,
  Suspense,
  useContext,
  useState,
} from "react";
import Lights from "./Lights";
import { Canvas } from "@react-three/fiber";
import {
  ArrowsPointingOutIcon,
  HandRaisedIcon,
} from "@heroicons/react/16/solid";
import { ArrowPathIcon, ViewColumnsIcon } from "@heroicons/react/24/outline";
import { CanvasContext } from "./3DCanvasProvider";
import { SketchPicker } from "react-color";
import { HexColorPicker } from "react-colorful";
import { initialSneakerStates, SneakerStates } from "./ShoeState";
import { NikeAirJordan } from "./shoes/NikeAirJordan";
import { NikeTC7900 } from "./shoes/NikeTC7900";

interface customisationDialogueProps {
  open: boolean;
  close: () => void;
  model: string;
}

interface SneakerNodeDict {
  [key: string]: ReactNode
}

const CustomisationDialogue: React.FC<customisationDialogueProps> = ({
  open,
  close,
  model,
}) => {
  const canvasContext = useContext(CanvasContext);

  const [sneakerStates, setSneakerStates] = useState<SneakerStates>(initialSneakerStates)

  const { hoveredMeshName, hoveredMeshColor, hoveredMeshString, setHoveredMeshColor } = canvasContext!;
  const [showColorPicker, setShowColorPicker] = useState(false);

  const sneakerNodeDict: SneakerNodeDict = {
    nikeTC7900: <NikeTC7900 sneakerColorState={sneakerStates.nikeTC7900}/>
  }

  const updateMeshColor = (color: string, sneakerName: string, meshName: string) => {
    setHoveredMeshColor(color);
    
    setSneakerStates((prevSneakerState) => ({
      ...prevSneakerState,
      [sneakerName]: {
        ...prevSneakerState[sneakerName],
        [meshName]: color
      }
    }))


  }

  return (
    <Dialog
      open={open}
      as="div"
      className="relative flex z-10 focus:outline-none"
      onClose={close}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="h-full items-center justify-center p-14">
          <DialogPanel
            transition
            className="h-full w-full shadow-lg rounded-xl bg-black/25 p-6 backdrop-blur-xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <DialogTitle
              as="h3"
              className="text-base/7 font-medium text-white text-center"
            >
              Customise your sneakers!
            </DialogTitle>

            {/* threejs canvas */}
            <div className="flex outline outline-white outline-2 h-4/5 rounded-xl m-5">
              {/* Legend */}
              <div className="absolute inset-y-20 h-10 p-5 flex gap-6">
                <div className="flex gap-1">
                  <HandRaisedIcon className="h-5 w-5 text-white" />
                  <p className="text-white text-sm">R Mouse Button</p>
                </div>
                <div className="flex gap-1">
                  <ArrowPathIcon className="h-5 w-5 text-white" />
                  <p className="text-white text-sm">L Mouse Button</p>
                </div>
                <div className="flex gap-1">
                  <ArrowsPointingOutIcon className="h-5 w-5 text-white" />
                  <p className="text-white text-sm">Scroll</p>
                </div>
                {hoveredMeshName ? (
                  <div className="flex gap-2">
                    <ViewColumnsIcon className="h-5 w-5 text-white" />
                    <p className="text-white text-sm">{hoveredMeshName}</p>
                    <button
                      className="rounded w-5 h-4 shadow-sm"
                      style={{ backgroundColor: hoveredMeshColor! }}
                      onClick={() => {
                        setShowColorPicker(!showColorPicker);
                      }}
                    />

                    {showColorPicker ? (
                      <HexColorPicker style={{height: "15vh"}} color={hoveredMeshColor!} onChange={(color) => updateMeshColor(color, model, hoveredMeshString!)} />
                    ) : null}
                  </div>
                ) : null}
              </div>

              {/* Main canvas */}
              <div className="w-full mt-12">
                <Canvas shadows camera={{ position: [0, 0, 15], fov: 20 }}>
                  <Lights />
                  <Suspense fallback={null}>{sneakerNodeDict[model]}</Suspense>
                  <OrbitControls />
                </Canvas>
              </div>
            </div>

            <div className="m-5">
              <Button
                className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                onClick={close}
              >
                Done
              </Button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default CustomisationDialogue;

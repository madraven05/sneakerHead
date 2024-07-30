import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { OrbitControls } from "@react-three/drei";
import React, {
  ReactNode,
  Suspense,
  useContext,
  useRef,
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
import { HexColorPicker } from "react-colorful";
import { initialSneakerStates, SneakerStates } from "./ShoeState";
import NikeTC7900 from "./shoes/NikeTC7900";
import Dropdown, { DropdownItem } from "./Dropdown";
import { EyeIcon } from "@heroicons/react/24/solid";
import { MeshGroupRef, ViewProfile } from "./hocs/withSneaker3Dcustomization";

interface customisationDialogueProps {
  open: boolean;
  close: () => void;
  model: string;
}

interface SneakerNodeDict {
  [key: string]: ReactNode;
}

const CustomisationDialogue: React.FC<customisationDialogueProps> = ({
  open,
  close,
  model,
}) => {
  // states, refs and context declerations
  const canvasContext = useContext(CanvasContext);

  const [sneakerStates, setSneakerStates] =
    useState<SneakerStates>(initialSneakerStates);
  const {
    hoveredMeshName,
    hoveredMeshColor,
    hoveredMeshString,
    setHoveredMeshColor,
  } = canvasContext!;
  const [showColorPicker, setShowColorPicker] = useState(false);

  const sneakerRef = useRef<MeshGroupRef>(null);

  // functions
  const updateMeshColor = (
    color: string,
    sneakerName: string,
    meshName: string
  ) => {
    setHoveredMeshColor(color);

    setSneakerStates((prevSneakerState) => ({
      ...prevSneakerState,
      [sneakerName]: {
        ...prevSneakerState[sneakerName],
        [meshName]: color,
      },
    }));
  };

  const changeProfile = (profile: ViewProfile) => {
    console.log(profile);
    if (sneakerRef.current) {
      switch (profile) {
        case "front":
          sneakerRef.current.rotateGroup([0, 0, 0]);
          break;
        case "right":
          sneakerRef.current.rotateGroup([0, Math.PI / 2, 0]);
          break;
        case "left":
          sneakerRef.current.rotateGroup([0, -Math.PI / 2, 0]);
          break;
        case "back":
          sneakerRef.current.rotateGroup([0, Math.PI, 0]);
          break;
        default:
          sneakerRef.current.rotateGroup([0, 0, 0]);
          break;
      }
    }
  };

  // variables
  const sneakerNodeDict: SneakerNodeDict = {
    nikeTC7900: (
      <NikeTC7900
        sneakerColorState={sneakerStates.nikeTC7900}
        ref={sneakerRef}
      />
    ),
  };
  const profilesDropdownItems: DropdownItem[] = [
    {
      title: "Front Profile",
      setProfile: changeProfile,
      profile: "front",
    },
    {
      title: "Right Profile",
      setProfile: changeProfile,
      profile: "right",
    },
    {
      title: "Left Profile",
      setProfile: changeProfile,
      profile: "left",
    },
    {
      title: "Back Profile",
      setProfile: changeProfile,
      profile: "back",
    },
  ];

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
            className="w-full h-full shadow-lg rounded-xl bg-black/25 p-6 backdrop-blur-xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <DialogTitle
              as="h3"
              className="text-base/7 font-medium text-white text-center"
            >
              Customise your sneakers!
            </DialogTitle>

            {/* threejs canvas */}
            <div className="flex-col items-center outline outline-white outline-2 gap-6 rounded-xl m-5">
              {/* Legend */}
              <div className="items-center h-10 p-5 flex gap-6">
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
                      <HexColorPicker
                        style={{ height: "15vh" }}
                        color={hoveredMeshColor!}
                        onChange={(color) =>
                          updateMeshColor(color, model, hoveredMeshString!)
                        }
                      />
                    ) : null}
                  </div>
                ) : null}
              </div>

              {/* Main canvas */}
              <div className="w-full h-96">
                <Canvas shadows camera={{ position: [0, 0, 15], fov: 20 }}>
                  <Lights />
                  <Suspense fallback={null}>{sneakerNodeDict[model]}</Suspense>
                  <OrbitControls />
                </Canvas>
              </div>

              {/* Viewing tools */}
              <div className="w-fit p-5 text-white text-sm">
                <Dropdown
                  anchor="top start"
                  icon={<EyeIcon />}
                  title={"Profiles"}
                  menuItems={profilesDropdownItems}
                />
              </div>
            </div>

            <div className="">
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

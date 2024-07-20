import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { OrbitControls } from "@react-three/drei";
import React, { Suspense } from "react";
import Model from "./Model";
import Lights from "./Lights";
import { Canvas } from "@react-three/fiber";
import {
  ArrowsPointingOutIcon,
  HandRaisedIcon,
} from "@heroicons/react/16/solid";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

interface customisationDialogueProps {
  open: boolean;
  close: () => void;
  modelPath: string;
}

const CustomisationDialogue: React.FC<customisationDialogueProps> = ({
  open,
  close,
  modelPath,
}) => {
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
              <div className="absolute inset-y-20 p-5 flex gap-6">
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
              </div>

              {/* Main canvas */}
              <Canvas shadows camera={{ position: [0, 0, 15], fov: 20 }}>
                <Lights />
                <Suspense fallback={null}>
                  <Model path={modelPath} scale={[1, 1, 1]} />
                </Suspense>
                <OrbitControls />
              </Canvas>
            </div>

            <div className="m-5">
              <Button
                className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                onClick={close}
              >
                Got it, thanks!
              </Button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default CustomisationDialogue;

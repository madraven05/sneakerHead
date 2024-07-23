import React from "react";

export interface SneakerColorStates {
  [mesh: string]: string;
}

export interface SneakerStates {
  [shoe: string]: SneakerColorStates;
}

export const initialSneakerStates: SneakerStates = {
  nikeTC7900: {
    insida_sock: "#ffffff",
    snöre: "#ffffff",
    material_grund: "#ffffff",
    snöre_framsida: "#ffffff",
    snöre_baksida: "#ffffff",
    nike_logga: "#ffffff",
    baksida_logga: "#ffffff",
    framsida: "#ffffff",
    överdel: "#ffffff",
    frontside_sole: "#ffffff",
    sko_sula_underdel: "#ffffff",
    sko_sula_sida: "#ffffff",
    framsida_övre: "#ffffff",
    sula_insida: "#ffffff",
  },
};
